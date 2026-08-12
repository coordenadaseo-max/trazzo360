import { readFileSync, readdirSync, statSync, existsSync } from 'node:fs';
import { join, extname, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const DIST = join(__dirname, '..', 'dist');

function distToUrl(p) {
  const rel = p.slice(DIST.length);
  if (rel.endsWith('/index.html')) return rel.slice(0, -'index.html'.length) || '/';
  if (rel.endsWith('.html')) return rel.slice(0, -'.html'.length) + '/';
  return rel;
}

function linkExists(href) {
  const base = href.endsWith('/') ? href.slice(0, -1) : href;
  return existsSync(join(DIST, base + '/index.html'))
    || existsSync(join(DIST, base + '.html'))
    || existsSync(join(DIST, base));
}

const pages = new Map();
const inbound = new Map();

function walk(dir) {
  for (const name of readdirSync(dir)) {
    const p = join(dir, name);
    if (statSync(p).isDirectory()) { walk(p); continue; }
    if (extname(name) !== '.html') continue;
    const url = distToUrl(p);
    pages.set(url, readFileSync(p, 'utf8'));
    if (!inbound.has(url)) inbound.set(url, new Set());
  }
}

walk(DIST);

let broken = 0;

for (const [pageUrl, html] of pages) {
  const hrefs = [...html.matchAll(/href="(\/[^"#?]*)/g)].map(m => m[1]);
  for (const href of hrefs) {
    // Track inbound (normalize trailing slash)
    const canonical = href + (href.endsWith('/') ? '' : '/');
    if (inbound.has(canonical)) inbound.get(canonical).add(pageUrl);
    else if (inbound.has(href)) inbound.get(href).add(pageUrl);

    // Verify link target exists
    if (!linkExists(href)) {
      console.error(`❌  [${pageUrl}]  →  ${href}`);
      broken++;
    }
  }
}

// Pages with no inbound links (exclude known standalone pages)
const STANDALONE = new Set(['/', '/gracias/', '/sitemap.xml', '/robots.txt']);
const orphans = [...inbound.entries()]
  .filter(([url, src]) => src.size === 0 && !STANDALONE.has(url))
  .map(([url]) => url)
  .sort();

if (orphans.length > 0) {
  console.log('\nPáginas sin enlaces entrantes internos:');
  for (const url of orphans) console.warn(`  ⚠  ${url}`);
}

console.log(`\nEnlaces verificados en ${pages.size} páginas.`);
if (broken > 0) {
  console.error(`\n❌  ${broken} enlace(s) roto(s). Corrige antes de publicar.\n`);
  process.exit(1);
} else {
  console.log('✅  Sin enlaces rotos.');
  if (orphans.length > 0) {
    console.warn(`⚠   ${orphans.length} página(s) sin enlaces entrantes.\n`);
  } else {
    console.log('✅  Sin páginas huérfanas.\n');
  }
}
