/**
 * audit-docs.mjs — Contrato de artefactos externos (CLAUDE.md §11).
 *
 * Las herramientas externas escriben ficheros en el repositorio y esos ficheros
 * quedan indistinguibles de las reglas del proyecto. Este script hace que
 * declarar el origen sea obligatorio y verificable.
 */
import { readFileSync, readdirSync, statSync, existsSync } from 'node:fs';
import { join, relative, dirname, basename } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');

/** Únicos .md admitidos en la raíz del repositorio. */
const ROOT_ALLOWLIST = ['README.md', 'CLAUDE.md', 'DESIGN-BLUEPRINT.md', 'PRODUCT.md'];

/** Cabecera obligatoria en docs/research/. */
const STATUS_HEADER = /^>\s*ESTADO:\s*INVESTIGACIÓN\s*·\s*NO NORMATIVO/m;

/**
 * Declaraciones de mando. Sólo CLAUDE.md puede hacerlas; docs/archive/ queda
 * fuera porque es histórico congelado y reescribirlo falsearía el registro.
 *
 * Lo que se busca es la AUTODECLARACIÓN: un documento diciendo que él manda.
 * Señalar a otra fuente («`calculator.ts` es la única fuente de verdad para
 * precios») es legítimo y no se marca, así que se exige que la frase no vaya
 * precedida de un nombre de fichero en la misma frase.
 */
const AUTHORITY_CLAIMS = [
  { re: /fuente de (?:la )?verdad/gi, what: '«fuente de verdad»' },
  { re: /orden de precedencia/gi,     what: '«orden de precedencia»' },
  { re: /autoridad del proyecto/gi,   what: '«autoridad del proyecto»' },
  { re: /documento (?:operativo|canónico)/gi, what: 'autodeclaración de documento canónico/operativo' },
];

/** Nº de líneas iniciales donde vive la cabecera de un documento. */
const HEADER_LINES = 12;

/** ¿La frase atribuye la autoridad a OTRO fichero, en vez de a sí misma? */
function pointsElsewhere(line) {
  return /`[^`]+\.(?:ts|mjs|md|json|css|astro)`[^.]{0,60}$|^[^`]*`[^`]+\.(?:ts|mjs|md|json|css|astro)`/.test(line)
      || /\b(?:es|son)\s+la\s+(?:única\s+)?fuente/i.test(line) && /`[^`]+`/.test(line);
}

const errors = [];
const warnings = [];

function walk(dir) {
  if (!existsSync(dir)) return [];
  return readdirSync(dir).flatMap(name => {
    const full = join(dir, name);
    if (name === 'node_modules' || name.startsWith('.')) return [];
    return statSync(full).isDirectory() ? walk(full) : full.endsWith('.md') ? [full] : [];
  });
}

// 1 — .md sueltos en la raíz
for (const name of readdirSync(ROOT)) {
  if (!name.endsWith('.md') || ROOT_ALLOWLIST.includes(name)) continue;
  if (name === 'DESIGN.md') {
    warnings.push({
      file: name,
      msg: 'DESIGN.md regenerado: es artefacto, no autoridad. Ver DEC correspondiente.',
      fix: 'Déjalo sin citar desde ningún documento, o muévelo a docs/research/ con su cabecera de estado.',
    });
    continue;
  }
  errors.push({
    file: name,
    msg: `.md no permitido en la raíz (lista blanca: ${ROOT_ALLOWLIST.join(', ')})`,
    fix: 'Muévelo a docs/research/ con la cabecera de estado de CLAUDE.md §11, o justifícalo como documento de proyecto y añádelo a la lista blanca de este script.',
  });
}

// 2 — cabecera de estado en docs/research/
for (const file of walk(join(ROOT, 'docs/research'))) {
  const rel = relative(ROOT, file);
  if (!STATUS_HEADER.test(readFileSync(file, 'utf8'))) {
    errors.push({
      file: rel,
      msg: 'sin cabecera de estado obligatoria',
      fix: 'Añade al principio del fichero el bloque «> ESTADO: INVESTIGACIÓN · NO NORMATIVO» con Origen y Fecha. Ver CLAUDE.md §11.',
    });
  }
}

// 3 — declaraciones de autoridad fuera de CLAUDE.md
for (const file of [...walk(join(ROOT, 'docs')), ...walk(ROOT).filter(f => dirname(f) === ROOT)]) {
  const rel = relative(ROOT, file);
  if (rel === 'CLAUDE.md' || rel.startsWith('docs/archive/')) continue;
  // La autodeclaración vive en la cabecera; más abajo la frase suele señalar a otro fichero.
  const head = readFileSync(file, 'utf8').split('\n').slice(0, HEADER_LINES);
  for (const { re, what } of AUTHORITY_CLAIMS) {
    for (const line of head) {
      re.lastIndex = 0;
      if (!re.test(line) || pointsElsewhere(line)) continue;
      errors.push({
        file: rel,
        msg: `declara autoridad en su cabecera: ${what}`,
        fix: 'Sólo CLAUDE.md declara precedencia o autoridad. Sustitúyelo por un puntero a CLAUDE.md.',
      });
      break;
    }
    re.lastIndex = 0;
  }
}

const seen = new Set();
const dedupe = list => list.filter(f => {
  const k = `${f.file}|${f.msg}`;
  return seen.has(k) ? false : (seen.add(k), true);
});

for (const w of dedupe(warnings)) {
  console.warn(`⚠️  ${w.file}\n     ${w.msg}\n     → ${w.fix}`);
}
for (const e of dedupe(errors)) {
  console.error(`❌  ${e.file}\n     ${e.msg}\n     → ${e.fix}`);
}

console.log(`\nContrato de artefactos externos (CLAUDE.md §11) verificado.`);

if (errors.length) {
  console.error(`\n${errors.length} incumplimiento(s). Cada uno indica arriba qué hacer.\n`);
  process.exit(1);
}
console.log('✅  Sin artefactos externos sin declarar.\n');
