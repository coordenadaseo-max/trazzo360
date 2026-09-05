#!/usr/bin/env node
/**
 * audit-design.mjs — Detecta divergencias tipográficas contra el canon.
 *
 * El canon lo definen las páginas aprobadas por el cliente
 * (ver CANON_SOURCES). Cualquier otra página que use un valor
 * distinto para el mismo rol visual se reporta como divergencia.
 *
 * Uso:  node scripts/audit-design.mjs [--fix-report]
 * Sale con código 1 si hay divergencias (para CI / preflight).
 */

import { readFileSync, readdirSync, statSync } from 'node:fs';
import { join, relative } from 'node:path';

const ROOT = new URL('..', import.meta.url).pathname;
const PAGES = join(ROOT, 'src/pages');

/** Páginas cuyo estilo está aprobado: son la fuente de verdad. */
const CANON_SOURCES = [
  'servicios/reformas-integrales.astro',
  'servicios/reforma-banos.astro',
];

/**
 * Canon por rol visual. Extraído de las páginas aprobadas.
 * `test` identifica el rol; `expect` es el valor obligatorio.
 */
const CANON = [
  {
    role: 'H1 hero · letter-spacing',
    // Scope anidado: primero el bloque del H1 del hero, y dentro de él sólo la
    // declaración que lleva el tamaño display (clamp con mínimo >= 2rem). Así se
    // excluye el eyebrow de los H1 a dos niveles, que es texto pequeño y lleva su
    // propio tracking, y no se confunden con el H1 otros clamp() de la página.
    scope: /<h1[^>]*id="h-hero"[\s\S]*?<\/h1>/g,
    within: /style="[^"]*font-size:clamp\(\s*[2-9][\d.]*rem[^"]*"/g,
    find: /letter-spacing:(-?[\d.]+em)/g,
    expect: '-0.02em',
  },
  {
    role: 'H1 hero · line-height',
    scope: /<h1[^>]*id="h-hero"[\s\S]*?<\/h1>/g,
    within: /style="[^"]*font-size:clamp\(\s*[2-9][\d.]*rem[^"]*"/g,
    find: /line-height:([\d.]+)/g,
    expect: '0.85',
  },
  {
    role: 'Número editorial grande · letter-spacing',
    scope: /font-size:clamp\(5rem[^"]*/g,
    find: /letter-spacing:(-?[\d.]+em)/g,
    expect: '-0.055em',
  },
];

/** Notaciones equivalentes que deben escribirse de forma única. */
const NOTATION = [
  { bad: /letter-spacing:-\.(\d+)em/g, good: 'letter-spacing:-0.$1em' },
  { bad: /letter-spacing:\.(\d+)em/g,  good: 'letter-spacing:0.$1em' },
];

/** Rutas excluidas: prototipos que no llegan a producción. */
const EXCLUDE = [/\/pages\/lab\//, /-lab\.astro$/];

function walk(dir) {
  return readdirSync(dir).flatMap(name => {
    const full = join(dir, name);
    if (EXCLUDE.some(re => re.test(full))) return [];
    return statSync(full).isDirectory() ? walk(full)
      : full.endsWith('.astro') ? [full] : [];
  });
}

const files = walk(PAGES);
const findings = [];

for (const file of files) {
  const rel = relative(ROOT, file);
  const src = readFileSync(file, 'utf8');
  const isCanon = CANON_SOURCES.some(c => rel.endsWith(c));

  for (const rule of CANON) {
    for (const outer of src.match(rule.scope) ?? []) {
      // `within` acota aún más dentro del bloque; sin él se usa el bloque entero.
      const blocks = rule.within ? (outer.match(rule.within) ?? []) : [outer];
      for (const block of blocks)
      for (const [, value] of block.matchAll(rule.find)) {
        if (value === rule.expect) continue;
        if (rule.ignore?.includes(value)) continue;
        findings.push({
          file: rel, role: rule.role, found: value,
          expect: rule.expect, canon: isCanon,
        });
      }
    }
  }

  for (const { bad, good } of NOTATION) {
    for (const m of src.match(bad) ?? []) {
      findings.push({
        file: rel, role: 'Notación no canónica',
        found: m, expect: m.replace(bad, good), canon: isCanon,
      });
    }
  }
}

if (findings.length === 0) {
  console.log('audit-design: sin divergencias contra el canon.');
  process.exit(0);
}

// Una página aprobada que diverge significa que el canon cambió:
// se avisa aparte porque exige actualizar este script, no la página.
const inCanon = findings.filter(f => f.canon);
const inOther = findings.filter(f => !f.canon);

if (inCanon.length) {
  console.log('\n⚠  Divergencia DENTRO de una página aprobada.');
  console.log('   Si el cambio es intencionado, actualiza CANON en este script.\n');
  for (const f of inCanon) {
    console.log(`   ${f.file}\n     ${f.role}: ${f.found} → canon ${f.expect}`);
  }
}

if (inOther.length) {
  const byFile = inOther.reduce((acc, f) => {
    (acc[f.file] ??= []).push(f);
    return acc;
  }, {});
  console.log(`\n✖ ${inOther.length} divergencia(s) en ${Object.keys(byFile).length} fichero(s):\n`);
  for (const [file, items] of Object.entries(byFile)) {
    console.log(`   ${file}`);
    for (const i of items) console.log(`     ${i.role}: ${i.found} → debe ser ${i.expect}`);
    console.log('');
  }
}

console.log(`Canon definido por: ${CANON_SOURCES.join(', ')}`);
process.exit(1);
