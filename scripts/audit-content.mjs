import { readFileSync, readdirSync, statSync } from 'node:fs';
import { join, extname, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const DIST = join(__dirname, '..', 'dist');

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

    const html = readFileSync(p, 'utf8');
    const rawRel = p.slice(DIST.length + 1).replace(/\/?index\.html$/, '');
    const url = '/' + rawRel + (rawRel ? '/' : '');

    const title = extract(html, /<title>(.*?)<\/title>/i);
    const desc = extract(html, /<meta\s[^>]*name=["']description["'][^>]*content=["']([^"']*)/i)
      || extract(html, /<meta\s[^>]*content=["']([^"']*)["'][^>]*name=["']description["']/i);

    rows.push({
      url,
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

  if (!r.title)          { notes.push('SIN TITLE'); criticals++; }
  else if (r.tLen < 30)  { notes.push(`title corto (${r.tLen}c) ❌`); criticals++; }
  else if (r.tLen < 45)  { notes.push(`title corto (${r.tLen}c) <45`); }
  else if (r.tLen > 70)  { notes.push(`title largo (${r.tLen}c) >70`); }
  else if (r.tLen > 65)  { notes.push(`title largo (${r.tLen}c) >65`); }

  if (!r.desc)           { notes.push('SIN META DESC'); criticals++; }
  else if (r.dLen < 80)  { notes.push(`desc corta (${r.dLen}c) ❌`); criticals++; }
  else if (r.dLen < 120) { notes.push(`desc corta (${r.dLen}c) <120`); }
  else if (r.dLen > 175) { notes.push(`desc larga (${r.dLen}c) >175`); }
  else if (r.dLen > 165) { notes.push(`desc larga (${r.dLen}c) >165`); }

  if (r.h1 === 0) { notes.push('SIN H1'); criticals++; }
  if (r.h1 > 1)  { notes.push(`${r.h1}×H1`); criticals++; }

  const isCritical = notes.some(n => n.startsWith('SIN') || /\dxH1/i.test(n) || n.includes('❌'));
  const flag = isCritical ? '❌' : notes.length ? '⚠' : '✅';

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

console.log('\nTitle: 50-60c ideal (warn <45 o >65, crítico <30 o >70). Desc: 140-155c ideal (warn <120 o >165, crítico <80 o >175). H1: exactamente 1 por página.');

if (criticals > 0) {
  console.error(`\n❌  ${criticals} problema(s) crítico(s). Corrige antes de publicar.\n`);
  process.exit(1);
} else {
  console.log('✅  Contenido sin problemas críticos.\n');
}
