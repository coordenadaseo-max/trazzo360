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
import { isLabSource } from './lib/scope.mjs';
import { reportScope } from './lib/report.mjs';

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

/**
 * DEC-D01 — radio cero en todo el sistema. Excepción nominal: los dos botones de
 * WhatsApp, por convención de plataforma. Cualquier otro `rounded-` es una
 * divergencia. La lista es de ficheros concretos, no de patrones: una excepción
 * por página se propaga, una nominal no.
 */
const RADIUS_EXEMPT = [
  { file: 'src/components/WhatsAppBtn.astro', allow: 'rounded-full' }, // FAB flotante
  { file: 'src/components/Header.astro',      allow: 'rounded-sm'   }, // botón de la barra
];
const RADIUS_RE = /\brounded-[a-z0-9-]+/g;

// Prototipos excluidos: la definición vive en scripts/lib/scope.mjs.

function walk(dir) {
  return readdirSync(dir).flatMap(name => {
    const full = join(dir, name);
    if (isLabSource(full)) return [];   // laboratorio: fuera del canon
    return statSync(full).isDirectory() ? walk(full)
      : full.endsWith('.astro') ? [full] : [];
  });
}

// Las reglas tipográficas se miden en páginas; la de radios (DEC-D01) debe cubrir
// también los componentes, porque ahí viven el header, el CTA y el propio botón exento.
const files = [...walk(PAGES), ...walk(join(ROOT, 'src/components'))];
const findings = [];
const ruleCoverage = new Map();

for (const file of files) {
  const rel = relative(ROOT, file);
  const src = readFileSync(file, 'utf8');
  const isCanon = CANON_SOURCES.some(c => rel.endsWith(c));

  for (const rule of CANON) {
    const hits = src.match(rule.scope) ?? [];
    if (hits.length) ruleCoverage.set(rule.role, (ruleCoverage.get(rule.role) ?? 0) + 1);
    for (const outer of hits) {
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

  // La exención es por fichero Y valor: un radio distinto en un fichero exento
  // sigue siendo divergencia, para que la excepción no crezca por dentro.
  const allowed = RADIUS_EXEMPT.find(e => rel.endsWith(e.file))?.allow;
  for (const m of src.match(RADIUS_RE) ?? []) {
    if (m === allowed) continue;
    findings.push({
      file: rel, role: 'Radio fuera del sistema (DEC-D01)',
      found: m, expect: allowed ? `sólo ${allowed} en este fichero` : 'sin border-radius',
      canon: isCanon,
    });
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

const coverageNotes = CANON.map(r => {
  const n = ruleCoverage.get(r.role) ?? 0;
  const pct = files.length ? Math.round((n / files.length) * 100) : 0;
  const warn = pct < 50 ? '  ⚠ el canon no vigila la mayoría de los ficheros' : '';
  return `regla «${r.role}»: aplica en ${n}/${files.length} ficheros (${pct}%)${warn}`;
});

if (findings.length === 0) {
  console.log('audit-design: sin divergencias contra el canon.');
  reportScope({ inspected: files.length, unit: 'ficheros .astro', floor: 15, notes: coverageNotes });
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
