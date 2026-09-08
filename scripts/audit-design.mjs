#!/usr/bin/env node
/**
 * audit-design.mjs — Divergencias contra el canon visual.
 *
 * AUDITOR HÍBRIDO. Cada regla se evalúa donde su objeto existe:
 *
 *   · Reglas tipográficas  → `dist/`  El HTML compilado tiene los componentes
 *     resueltos. Leer el fuente .astro dejaba fuera las 9 plantillas que reciben
 *     el H1 de <HeroTitle>: el auditor vigilaba 4 de 74 páginas y decía «sin
 *     divergencias».  ⚠ REQUIERE `npm run build` PREVIO.
 *
 *   · Regla de radios (DEC-D01) → `src/`  Es una regla sobre clases de Tailwind
 *     en el código, no sobre el render. Y la excepción de DEC-D01 es nominal por
 *     fichero: en `dist/` no hay nombre de fichero, así que habría que
 *     identificar los botones por su markup, que se rompe en silencio.
 *
 * La salida declara siempre fuente y denominador de cada regla, para que no se
 * pueda confundir «4 de 40 ficheros de src/» con «4 de 74 páginas de dist/».
 *
 * Uso:  npm run build && npm run audit:design
 * Sale con código 1 si hay divergencias (para CI / preflight).
 */

import { readFileSync, readdirSync, statSync, existsSync } from 'node:fs';
import { join, relative } from 'node:path';
import { isLabSource, isLabUrl } from './lib/scope.mjs';
import { reportScope, requireDist } from './lib/report.mjs';

const ROOT = new URL('..', import.meta.url).pathname;
const PAGES = join(ROOT, 'src/pages');
const DIST = join(ROOT, 'dist');

requireDist(existsSync(DIST));

/** Páginas aprobadas: definen el canon. Rutas de `dist/`. */
const CANON_SOURCES = [
  '/servicios/reformas-integrales/',
  '/servicios/reforma-banos/',
];

/**
 * Reglas sobre el HTML compilado.
 *
 * En `dist/` el valor canónico llega por la clase de `global.css`, no inline.
 * Lo que puede divergir es un `style` inline que la sobreescriba, así que eso es
 * lo que se vigila: se localiza el elemento por su clase de rol y se comprueba
 * su style propio. Un elemento sin style inline cumple por construcción.
 */
const CANON_DIST = [
  {
    role: 'H1 hero · letter-spacing',
    element: /<h1[^>]*class="[^"]*\bh1-hero\b[^"]*"[^>]*>/g,
    find: /letter-spacing:\s*(-?[\d.]+em)/g,
    expect: '-0.02em',
  },
  {
    role: 'H1 hero · line-height',
    element: /<h1[^>]*class="[^"]*\bh1-hero\b[^"]*"[^>]*>/g,
    find: /line-height:\s*([\d.]+)/g,
    expect: '0.85',
  },
  {
    // Escala por familia (DEC-D20). El valor canónico vive en la clase, así que
    // lo que se vigila es que ningún elemento lo sobreescriba desde su `style`.
    role: 'H1 hero · font-size (hub y ancla)',
    element: /<h1[^>]*class="[^"]*\bh1-hero\b[^"]*"[^>]*>/g,
    // `\bh1-hero\b` también casa dentro de `h1-hero--zona`, así que los
    // modificadores se descartan aquí y no con un lookahead ilegible.
    exclude: /h1-hero--(?:zona|combinada|stacked)/,
    find: /font-size:\s*([^;"]+)/g,
    expect: 'var(--text-display-hero)',
  },
  {
    role: 'H1 hero · font-size (zona)',
    element: /<h1[^>]*class="[^"]*\bh1-hero--zona\b[^"]*"[^>]*>/g,
    find: /font-size:\s*([^;"]+)/g,
    expect: 'var(--text-display-zona)',
  },
  {
    role: 'H1 hero · font-size (combinada)',
    element: /<h1[^>]*class="[^"]*\bh1-hero--combinada\b[^"]*"[^>]*>/g,
    find: /font-size:\s*([^;"]+)/g,
    expect: 'var(--text-display-combinada)',
  },
  {
    // Páginas sin hero: guías, legales, calculadora, contacto, gracias, 404.
    // Rol distinto del hero, tamaño fijo, sin override en ninguna de las 12.
    role: 'H1 de página · font-size',
    element: /<h1[^>]*class="[^"]*\bh1-page\b[^"]*"[^>]*>/g,
    find: /font-size:\s*([^;"]+)/g,
    expect: '2.25rem',
  },
  {
    // El patrón se extrajo a la clase `.stat-editorial` (global.css), así que el
    // selector anterior —`font-size:clamp(5rem` inline— no encontraba nada: 0/40.
    // Lo que se vigila ahora es que nadie sobreescriba el rol desde el elemento.
    role: 'Número editorial · letter-spacing',
    element: /<[^>]*class="[^"]*\bstat-editorial\b[^"]*"[^>]*>/g,
    find: /letter-spacing:\s*(-?[\d.]+em)/g,
    expect: '-0.055em',
  },
];

/**
 * Notaciones equivalentes que deben escribirse de forma única.
 *
 * Va sobre `src/`, no sobre `dist/`: es una regla sobre lo que escribe una
 * persona. El minificador de CSS emite `.12em` a partir de `0.12em` por diseño,
 * así que aplicarla al HTML compilado produce falsos positivos en masa —69 en la
 * primera versión de este híbrido, ninguno real.
 */
const NOTATION = [
  { bad: /letter-spacing:-\.(\d+)em/g, good: 'letter-spacing:-0.$1em' },
  { bad: /letter-spacing:\.(\d+)em/g,  good: 'letter-spacing:0.$1em' },
];

/**
 * DEC-D01 — radio cero. Excepción nominal por fichero Y valor: un radio
 * distinto dentro de un fichero exento sigue siendo divergencia, para que la
 * excepción no crezca por dentro.
 */
const RADIUS_EXEMPT = [
  { file: 'src/components/WhatsAppBtn.astro', allow: 'rounded-full' }, // FAB flotante
  { file: 'src/components/Header.astro',      allow: 'rounded-sm'   }, // botón de la barra
];
const RADIUS_RE = /\brounded-[a-z0-9-]+/g;

function walk(dir, keep) {
  if (!existsSync(dir)) return [];
  return readdirSync(dir).flatMap(name => {
    const full = join(dir, name);
    return statSync(full).isDirectory() ? walk(full, keep) : keep(full) ? [full] : [];
  });
}

const findings = [];
const coverage = new Map();

// ── Reglas sobre dist/ ───────────────────────────────────────────────────────
const distFiles = walk(DIST, f => f.endsWith('index.html') || f.endsWith('404.html'))
  .filter(f => !isLabUrl(f));

for (const file of distFiles) {
  const url = '/' + relative(DIST, file).replace(/(^|\/)?(index|404)\.html$/, '').replace(/\/?$/, '/');
  const html = readFileSync(file, 'utf8');
  const isCanon = CANON_SOURCES.includes(url);

  for (const rule of CANON_DIST) {
    const elements = (html.match(rule.element) ?? [])
      .filter(el => !rule.exclude || !rule.exclude.test(el));
    if (elements.length) coverage.set(rule.role, (coverage.get(rule.role) ?? 0) + 1);
    for (const el of elements) {
      for (const [, value] of el.matchAll(rule.find)) {
        if (value === rule.expect) continue;
        findings.push({ source: 'dist', file: url, role: rule.role, found: value, expect: rule.expect, canon: isCanon });
      }
    }
  }
}

// ── Regla de radios sobre src/ ───────────────────────────────────────────────
const srcFiles = [
  ...walk(PAGES, f => f.endsWith('.astro')),
  ...walk(join(ROOT, 'src/components'), f => f.endsWith('.astro')),
].filter(f => !isLabSource(f));

for (const file of srcFiles) {
  const rel = relative(ROOT, file);
  const src = readFileSync(file, 'utf8');
  for (const { bad, good } of NOTATION) {
    for (const m of src.match(bad) ?? []) {
      findings.push({ source: 'src', file: rel, role: 'Notación no canónica', found: m, expect: m.replace(bad, good) });
    }
  }

  const allowed = RADIUS_EXEMPT.find(e => rel.endsWith(e.file))?.allow;
  const hits = src.match(RADIUS_RE) ?? [];
  if (hits.length) coverage.set('Radio (DEC-D01)', (coverage.get('Radio (DEC-D01)') ?? 0) + 1);
  for (const m of hits) {
    if (m === allowed) continue;
    findings.push({
      source: 'src', file: rel, role: 'Radio fuera del sistema (DEC-D01)',
      found: m, expect: allowed ? `sólo ${allowed} en este fichero` : 'sin border-radius',
    });
  }
}

// ── Reporte ──────────────────────────────────────────────────────────────────
const notes = [
  `— reglas tipográficas · fuente: dist/ · ${distFiles.length} páginas`,
  ...CANON_DIST.map(r => {
    const n = coverage.get(r.role) ?? 0;
    const pct = distFiles.length ? Math.round((n / distFiles.length) * 100) : 0;
    return `    «${r.role}»: presente en ${n}/${distFiles.length} páginas de dist/ (${pct}%)`;
  }),
  `— regla de radios · fuente: src/ · ${srcFiles.length} ficheros`,
  `    «Radio (DEC-D01)»: presente en ${coverage.get('Radio (DEC-D01)') ?? 0}/${srcFiles.length} ficheros de src/`,
  `    «Notación»: comprobada en los ${srcFiles.length} ficheros de src/`,
];

if (findings.length === 0) {
  console.log('audit-design: sin divergencias contra el canon.');
  reportScope({ inspected: distFiles.length, unit: 'páginas de dist/', floor: 40, notes });
  process.exit(0);
}

const byFile = new Map();
for (const f of findings) {
  const key = `${f.source}:${f.file}`;
  if (!byFile.has(key)) byFile.set(key, []);
  byFile.get(key).push(f);
}
for (const [key, list] of [...byFile].sort()) {
  const [source, ...rest] = key.split(':');
  console.log(`\n   [${source}] ${rest.join(':')}${list[0].canon ? '   ← página de canon' : ''}`);
  for (const f of list) console.log(`     ${f.role}: ${f.found} → debe ser ${f.expect}`);
}

console.log(`\nCanon definido por: ${CANON_SOURCES.join(', ')}`);
reportScope({ inspected: distFiles.length, unit: 'páginas de dist/', floor: 40, notes });
console.error(`\n❌  ${findings.length} divergencia(s) contra el canon.\n`);
process.exit(1);
