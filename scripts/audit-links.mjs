import { readFileSync, readdirSync, statSync, existsSync } from 'node:fs';
import { join, extname, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const DIST = join(__dirname, '..', 'dist');

// Threshold: SEO pages should receive >= MIN_INBOUND links from <main> content
const MIN_INBOUND = 8;

// Pages excluded from inbound-link threshold check
const STANDALONE = new Set(['/', '/gracias/', '/sitemap.xml', '/robots.txt',
  '/privacidad/', '/aviso-legal/', '/cookies/']);

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

// Extract hrefs only from within <main>…</main> to avoid nav/footer inflation
function extractMainHrefs(html) {
  const match = html.match(/<main[\s>][\s\S]*?<\/main>/i);
  if (!match) return [];
  const mainHtml = match[0];
  return [...mainHtml.matchAll(/href="(\/[^"#?]*)/g)].map(m => m[1]);
}

const pages = new Map();
const inboundAll = new Map();   // all hrefs (for broken-link detection)
const inboundMain = new Map();  // hrefs from <main> only (for threshold)

function walk(dir) {
  for (const name of readdirSync(dir)) {
    const p = join(dir, name);
    if (statSync(p).isDirectory()) { walk(p); continue; }
    if (extname(name) !== '.html') continue;
    const url = distToUrl(p);
    pages.set(url, readFileSync(p, 'utf8'));
    if (!inboundAll.has(url))  inboundAll.set(url, new Set());
    if (!inboundMain.has(url)) inboundMain.set(url, new Set());
  }
}

walk(DIST);

let broken = 0;

for (const [pageUrl, html] of pages) {
  // All hrefs (for broken-link detection)
  const allHrefs = [...html.matchAll(/href="(\/[^"#?]*)/g)].map(m => m[1]);
  for (const href of allHrefs) {
    const canonical = href.endsWith('/') ? href : href + '/';
    if (inboundAll.has(canonical)) inboundAll.get(canonical).add(pageUrl);
    else if (inboundAll.has(href)) inboundAll.get(href).add(pageUrl);

    if (!linkExists(href)) {
      console.error(`❌  [${pageUrl}]  →  ${href}`);
      broken++;
    }
  }

  // Main-only hrefs (for inbound threshold)
  for (const href of extractMainHrefs(html)) {
    const canonical = href.endsWith('/') ? href : href + '/';
    if (inboundMain.has(canonical)) inboundMain.get(canonical).add(pageUrl);
    else if (inboundMain.has(href)) inboundMain.get(href).add(pageUrl);
  }
}

// Orphans: pages with zero inbound links from anywhere
const orphans = [...inboundAll.entries()]
  .filter(([url, src]) => src.size === 0 && !STANDALONE.has(url))
  .map(([url]) => url)
  .sort();

if (orphans.length > 0) {
  console.log('\nPáginas sin enlaces entrantes:');
  for (const url of orphans) console.warn(`  ⚠  ${url}`);
}

// Low-inbound pages: SEO pages with fewer than MIN_INBOUND main-content links
const lowInbound = [...inboundMain.entries()]
  .filter(([url, src]) => !STANDALONE.has(url) && src.size < MIN_INBOUND)
  .map(([url, src]) => ({ url, count: src.size }))
  .sort((a, b) => a.count - b.count);

if (lowInbound.length > 0) {
  console.log(`\nPáginas con < ${MIN_INBOUND} enlaces entrantes desde <main>:`);
  for (const { url, count } of lowInbound) {
    console.warn(`  ⚠  ${String(count).padStart(3)}  ${url}`);
  }
}

console.log(`\nEnlaces verificados en ${pages.size} páginas.`);
if (broken > 0) {
  console.error(`\n❌  ${broken} enlace(s) roto(s). Corrige antes de publicar.\n`);
  process.exit(1);
} else {
  console.log('✅  Sin enlaces rotos.');
  if (orphans.length > 0) {
    console.warn(`⚠   ${orphans.length} página(s) sin enlaces entrantes.\n`);
  } else if (lowInbound.length > 0) {
    console.warn(`⚠   ${lowInbound.length} página(s) por debajo del umbral de ${MIN_INBOUND} enlaces desde <main>.\n`);
  } else {
    console.log('✅  Sin páginas huérfanas ni por debajo del umbral.\n');
  }
}
