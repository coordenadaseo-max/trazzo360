import { readFileSync, readdirSync, statSync, existsSync } from 'node:fs';
import { join, extname, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { isLabUrl } from './lib/scope.mjs';
import { reportScope, requireDist } from './lib/report.mjs';

const __dirname = dirname(fileURLToPath(import.meta.url));
const DIST = join(__dirname, '..', 'dist');
requireDist(existsSync(DIST));

const SRC_PAGES = join(__dirname, '..', 'src', 'pages');

/**
 * Rutas que deciden por sí mismas no indexarse, leídas de `src/`, no de `dist/`.
 *
 * En `dist/` no se pueden distinguir: mientras `PUBLIC_SITE_INDEXING` esté apagado
 * TODAS las páginas llevan `noindex`, así que el HTML no separa «no me indexo yo» de
 * «todavía no se indexa nada». El único dato fiable es que la página pase la prop
 * `robots` al Layout, que gana sobre la bandera global.
 *
 * Es el mismo reparto híbrido de `audit-design`: la regla se comprueba donde el dato
 * es cierto, no donde resulta cómodo.
 */
function rutasConNoindexPropio() {
  const rutas = new Set();
  const dinamicasSinMapear = [];

  (function walkSrc(dir, rel = '') {
    for (const name of readdirSync(dir)) {
      const p = join(dir, name);
      if (statSync(p).isDirectory()) { walkSrc(p, `${rel}${name}/`); continue; }
      if (extname(name) !== '.astro') continue;
      const src = readFileSync(p, 'utf8');
      if (!/robots\s*=\s*["'{][^>]*noindex/.test(src)) continue;

      const ruta = `${rel}${name}`;
      // Una ruta dinámica no se puede resolver leyendo el fichero: se declara en voz
      // alta en vez de quedar fuera en silencio.
      if (ruta.includes('[')) { dinamicasSinMapear.push(ruta); continue; }
      const base = ruta.replace(/\.astro$/, '');
      rutas.add(base === '404' ? '/404.html' : `/${base}/`);
    }
  })(SRC_PAGES);

  return { rutas, dinamicasSinMapear };
}

const { rutas: NOINDEX_PROPIO, dinamicasSinMapear } = rutasConNoindexPropio();

// Rangos de CLAUDE.md §4. Se escriben una sola vez.
const TITLE_MIN = 50, TITLE_MAX = 60;
const DESC_MIN = 140, DESC_MAX = 155;

function countWords(html) {
  return html
    .replace(/<script[\s\S]*?<\/script>/gi, '')
    .replace(/<style[\s\S]*?<\/style>/gi, '')
    .replace(/<[^>]+>/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
    .split(' ')
    .filter(Boolean).length;
}

function extract(html, re) {
  return (html.match(re) ?? [])[1] ?? '';
}

const rows = [];

function walk(dir) {
  for (const name of readdirSync(dir)) {
    const p = join(dir, name);
    if (statSync(p).isDirectory()) { walk(p); continue; }
    if (extname(name) !== '.html') continue;
    if (isLabUrl(p)) continue;   // laboratorio: fuera de auditoría (scripts/lib/scope.mjs)

    const html = readFileSync(p, 'utf8');
    const rawRel = p.slice(DIST.length + 1).replace(/\/?index\.html$/, '');
    const url = '/' + rawRel + (rawRel ? '/' : '');

    const title = extract(html, /<title>(.*?)<\/title>/i);
    const desc = extract(html, /<meta\s[^>]*name=["']description["'][^>]*content=["']([^"']*)/i)
      || extract(html, /<meta\s[^>]*content=["']([^"']*)["'][^>]*name=["']description["']/i);

    rows.push({
      url,
      indexable: !NOINDEX_PROPIO.has(url) && !NOINDEX_PROPIO.has(url.replace(/\/$/, '')),
      title,
      tLen: title.length,
      desc,
      dLen: desc.length,
      h1: (html.match(/<h1[\s>]/gi) ?? []).length,
      h2: (html.match(/<h2[\s>]/gi) ?? []).length,
      words: countWords(html),
    });
  }
}

walk(DIST);
rows.sort((a, b) => a.url.localeCompare(b.url));

let criticals = 0;

const W = { url: 42, tl: 5, dl: 5, h1: 3, h2: 3, wc: 5 };
const hdr = [
  'URL'.padEnd(W.url),
  'Title'.padStart(W.tl),
  'Desc'.padStart(W.dl),
  'H1'.padStart(W.h1),
  'H2'.padStart(W.h2),
  'Words'.padStart(W.wc),
  'Notas',
].join('  ');

console.log('\n' + hdr);
console.log('─'.repeat(hdr.length));

for (const r of rows) {
  const notes = [];

  // Título y meta tienen que existir siempre, se indexe la página o no.
  if (!r.title) { notes.push('SIN TITLE'); criticals++; }
  if (!r.desc)  { notes.push('SIN META DESC'); criticals++; }

  // El rango de §4 sólo aplica a las indexables: en una página con `noindex` propio
  // el título y la meta no llegan nunca a un resultado de búsqueda, y estirarlos
  // hasta el rango sería conformidad formal sin efecto. Ver DEC-A23.
  if (!r.indexable) {
    if (notes.length === 0) notes.push('noindex propio · fuera del rango de §4');
  } else {
    if (r.title && r.tLen < TITLE_MIN) { notes.push(`title corto (${r.tLen}c) <${TITLE_MIN} ❌`); criticals++; }
    if (r.title && r.tLen > TITLE_MAX) { notes.push(`title largo (${r.tLen}c) >${TITLE_MAX} ❌`); criticals++; }
    if (r.desc  && r.dLen < DESC_MIN)  { notes.push(`desc corta (${r.dLen}c) <${DESC_MIN} ❌`); criticals++; }
    if (r.desc  && r.dLen > DESC_MAX)  { notes.push(`desc larga (${r.dLen}c) >${DESC_MAX} ❌`); criticals++; }
  }

  if (r.h1 === 0) { notes.push('SIN H1'); criticals++; }
  if (r.h1 > 1)  { notes.push(`${r.h1}×H1`); criticals++; }

  const isCritical = notes.some(n => n.startsWith('SIN') || /\dxH1/i.test(n) || n.includes('❌'));
  const soloExcluida = !r.indexable && notes.length === 1 && notes[0].startsWith('noindex propio');
  const flag = isCritical ? '❌' : soloExcluida ? '·' : notes.length ? '⚠' : '✅';

  console.log([
    r.url.slice(0, W.url).padEnd(W.url),
    String(r.tLen).padStart(W.tl),
    String(r.dLen).padStart(W.dl),
    String(r.h1).padStart(W.h1),
    String(r.h2).padStart(W.h2),
    String(r.words).padStart(W.wc),
    `${flag} ${notes.join(' · ')}`,
  ].join('  '));
}

const nIndexables = rows.filter(r => r.indexable).length;
const nExcluidas = rows.length - nIndexables;

reportScope({
  inspected: rows.length,
  unit: 'páginas',
  floor: 40,
  notes: [
    `rango de §4 · ${nIndexables} indexables comprobadas, ${nExcluidas} excluidas por \`robots\` propio`,
    `existencia de title, meta y H1 · las ${rows.length}`,
  ],
});

if (dinamicasSinMapear.length) {
  console.error(
    `\n❌  Hay rutas dinámicas con \`robots\` propio que este auditor no sabe resolver:\n` +
    dinamicasSinMapear.map(r => `      ${r}`).join('\n') +
    `\n    Quedarían fuera del rango de §4 sin que nadie lo vea. Añade el mapeo antes de seguir.\n`
  );
  process.exit(1);
}

console.log(`\nRangos de CLAUDE.md §4, obligatorios en las indexables: title ${TITLE_MIN}-${TITLE_MAX}c, desc ${DESC_MIN}-${DESC_MAX}c. H1: exactamente 1 en todas.`);
console.log('Las páginas con `robots` propio se listan con `·` y sólo se les exige que title, meta y H1 existan.');

if (criticals > 0) {
  console.error(`\n❌  ${criticals} problema(s) crítico(s). Corrige antes de publicar.\n`);
  process.exit(1);
} else {
  console.log('✅  Contenido sin problemas críticos.\n');
}
