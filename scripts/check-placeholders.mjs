import { readFileSync, readdirSync, statSync } from 'node:fs';
import { join, extname, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const DIST = join(__dirname, '..', 'dist');

// Bloqueantes — la presencia de cualquiera de estos strings en el HTML de producción impide el lanzamiento.
const BLOCKERS = [
  'TU_TELEFONO',
  'YOUR_FORM_ID',
  'YOUR_EMAIL',
  'TU_EMAIL',
  '[Completar con tu CIF/NIF]',
  '[Completar con domicilio social real]',
  'TODO_CIF',
  'TODO_RAZON_SOCIAL',
  'TODO_DOMICILIO_FISCAL',
];

// Advertencias — strings que deben revisarse manualmente antes del lanzamiento
// (pueden ser intencionados, pero requieren confirmación explícita).
const WARNINGS = [
  '48 horas',
  '24 horas',
  'presupuesto en 48',
  'presupuesto en 24',
];

let errors = 0;
let warnings = 0;
let files = 0;

function walk(dir) {
  for (const name of readdirSync(dir)) {
    const p = join(dir, name);
    if (statSync(p).isDirectory()) { walk(p); continue; }
    if (extname(name) !== '.html') continue;
    files++;
    const html = readFileSync(p, 'utf8');
    const rel = p.slice(DIST.length + 1);

    for (const ph of BLOCKERS) {
      if (html.includes(ph)) {
        console.error(`❌  ${rel}  →  "${ph}"`);
        errors++;
      }
    }

    for (const w of WARNINGS) {
      if (html.toLowerCase().includes(w.toLowerCase())) {
        console.warn(`⚠️  ${rel}  →  "${w}" (revisar antes de publicar)`);
        warnings++;
      }
    }
  }
}

walk(DIST);
console.log(`\nVerificados ${files} archivos HTML.`);

if (warnings > 0) {
  console.warn(`\n${warnings} advertencia(s) que requieren revisión manual antes del lanzamiento.`);
}

if (errors > 0) {
  console.error(`\n${errors} placeholder(s) bloqueante(s) sin completar. Configura los datos reales antes de publicar.\n`);
  process.exit(1);
} else {
  console.log('✅  Sin placeholders bloqueantes.\n');
}
