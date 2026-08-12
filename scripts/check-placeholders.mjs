import { readFileSync, readdirSync, statSync } from 'node:fs';
import { join, extname, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const DIST = join(__dirname, '..', 'dist');

const PLACEHOLDERS = ['TU_TELEFONO', 'YOUR_FORM_ID', 'YOUR_EMAIL', 'TU_EMAIL'];

let errors = 0;
let files = 0;

function walk(dir) {
  for (const name of readdirSync(dir)) {
    const p = join(dir, name);
    if (statSync(p).isDirectory()) { walk(p); continue; }
    if (extname(name) !== '.html') continue;
    files++;
    const html = readFileSync(p, 'utf8');
    const rel = p.slice(DIST.length + 1);
    for (const ph of PLACEHOLDERS) {
      if (html.includes(ph)) {
        console.error(`❌  ${rel}  →  "${ph}"`);
        errors++;
      }
    }
  }
}

walk(DIST);
console.log(`\nVerificados ${files} archivos HTML.`);
if (errors > 0) {
  console.error(`\n${errors} placeholder(s) sin completar. Configura los datos reales antes de publicar.\n`);
  process.exit(1);
} else {
  console.log('✅  Sin placeholders detectados.\n');
}
