import { readFileSync, readdirSync, statSync, existsSync } from 'node:fs';
import { join, extname, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { isLabUrl } from './lib/scope.mjs';
import { reportScope, requireDist } from './lib/report.mjs';

const __dirname = dirname(fileURLToPath(import.meta.url));
const DIST = join(__dirname, '..', 'dist');
requireDist(existsSync(DIST));

const LD_RE = /<script type="application\/ld\+json">([\s\S]*?)<\/script>/gi;

let issues = 0;
let schemaCount = 0;
let fileCount = 0;

function auditNode(node, rel) {
  const type = Array.isArray(node['@type']) ? node['@type'].join('/') : (node['@type'] ?? '(sin @type)');

  if (!node['@type']) {
    console.warn(`  ⚠  [${rel}] nodo sin @type`);
    issues++;
  }

  if (JSON.stringify(node).includes('"undefined"')) {
    console.warn(`  ⚠  [${rel}] @type:${type} — valor literal "undefined" en un campo`);
    issues++;
  }

  if (['LocalBusiness', 'GeneralContractor', 'Organization'].includes(node['@type'])) {
    if (!node.name) {
      console.warn(`  ⚠  [${rel}] @type:${type} — falta "name"`);
      issues++;
    }
  }

  if (node['@type'] === 'BreadcrumbList') {
    for (const item of node.itemListElement ?? []) {
      if (!item.name) {
        console.warn(`  ⚠  [${rel}] BreadcrumbList position ${item.position} sin "name"`);
        issues++;
      }
    }
  }
}

function walk(dir) {
  for (const name of readdirSync(dir)) {
    const p = join(dir, name);
    if (statSync(p).isDirectory()) { walk(p); continue; }
    if (extname(name) !== '.html') continue;
    if (isLabUrl(p)) continue;   // laboratorio: fuera de auditoría (scripts/lib/scope.mjs)
    fileCount++;
    const html = readFileSync(p, 'utf8');
    const rel = p.slice(DIST.length + 1);

    let m;
    LD_RE.lastIndex = 0;
    while ((m = LD_RE.exec(html)) !== null) {
      schemaCount++;
      let parsed;
      try { parsed = JSON.parse(m[1]); }
      catch (e) {
        console.error(`  ❌  [${rel}] JSON-LD inválido: ${e.message}`);
        issues++;
        continue;
      }
      const nodes = Array.isArray(parsed['@graph']) ? parsed['@graph'] : [parsed];
      for (const node of nodes) auditNode(node, rel);
    }
  }
}

walk(DIST);

reportScope({ inspected: fileCount, unit: 'páginas', floor: 40,
  notes: [`bloques JSON-LD encontrados: ${schemaCount}`] });
if (issues > 0) {
  console.warn(`⚠  ${issues} problema(s) en el schema.\n`);
} else {
  console.log('✅  Schema limpio.\n');
}
