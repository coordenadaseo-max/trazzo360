import { readFileSync, readdirSync, statSync } from 'node:fs';
import { join, extname, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { isLabUrl } from './lib/scope.mjs';

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

// Em-dash usado como marcador de ítem — CLAUDE.md §8.2, decisión vigente DEC-B02.
// Dentro de prosa corrida el `—` es tipografía legítima y NO se señala. Sólo se busca
// el uso como marcador de lista, que es lo que la regla prohíbe.
const EM_DASH_MARKERS = [
  // <li> cuyo primer contenido visible es un em-dash, saltando etiquetas intermedias.
  { re: /<li\b[^>]*>\s*(?:<[^>]+>\s*)*—[\s\u00A0]/g, what: 'em-dash al inicio de un <li>' },
  // Em-dash que abre una línea y va seguido de espacio: marcador en texto plano.
  { re: /\n[ \t]*—[ \t]/g,                              what: 'em-dash abriendo línea como marcador' },
];

// El texto dentro de <script> y <style> no es prosa ni interfaz: no se inspecciona.
function stripCode(html) {
  return html
    .replace(/<script[\s\S]*?<\/script>/gi, ' ')
    .replace(/<style[\s\S]*?<\/style>/gi, ' ');
}

let errors = 0;
let warnings = 0;
let files = 0;

function walk(dir) {
  for (const name of readdirSync(dir)) {
    const p = join(dir, name);
    if (statSync(p).isDirectory()) { walk(p); continue; }
    if (extname(name) !== '.html') continue;
    if (isLabUrl(p)) continue;   // laboratorio: fuera de auditoría (scripts/lib/scope.mjs)
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

    const prose = stripCode(html);
    for (const { re, what } of EM_DASH_MARKERS) {
      const hits = prose.match(re);
      if (hits) {
        console.warn(`⚠️  ${rel}  →  ${hits.length} × ${what} (CLAUDE.md §8.2: usar ::before de .list-marca)`);
        warnings += hits.length;
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
