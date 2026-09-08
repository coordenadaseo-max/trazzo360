/**
 * report.mjs — Denominador uniforme para los seis auditores.
 *
 * Un cero sin denominador no es información. Este proyecto ha tenido dos veces
 * el mismo fallo: `audit:design` dijo «sin divergencias» mirando 4 de 74 páginas,
 * y un script que crasheaba por un import ausente produjo exactamente el mismo
 * silencio que uno que pasa.
 *
 * Un auditor que no encuentra nada que mirar está roto, no satisfecho.
 */

/**
 * Imprime cuántas unidades se inspeccionaron y aborta si son demasiado pocas.
 *
 * @param {object}   o
 * @param {number}   o.inspected  unidades realmente leídas
 * @param {string}   o.unit       'páginas', 'ficheros'…
 * @param {number}   o.floor      mínimo por debajo del cual el auditor se considera roto
 * @param {string[]} [o.notes]    líneas extra (p. ej. cobertura por regla)
 */
export function reportScope({ inspected, unit = 'páginas', floor, notes = [] }) {
  console.log(`\nInspeccionadas: ${inspected} ${unit} (suelo mínimo: ${floor}).`);
  for (const n of notes) console.log(`  ${n}`);

  if (inspected === 0) {
    console.error(
      `\n❌  El auditor no ha encontrado nada que inspeccionar.\n` +
      `    Un cero aquí no significa que esté todo bien: significa que el auditor está roto\n` +
      `    o que falta el build. Ejecuta \`npm run build\` y vuelve a intentarlo.\n`
    );
    process.exit(1);
  }
  if (inspected < floor) {
    console.error(
      `\n❌  Sólo se inspeccionaron ${inspected} ${unit}, por debajo del suelo de ${floor}.\n` +
      `    Revisa el scope del auditor antes de fiarte del resultado: es el fallo descrito\n` +
      `    en docs/PROTOCOLO-LAB.md, «un auditor en verde sobre un scope vacío».\n`
    );
    process.exit(1);
  }
}

/** Aborta con instrucción explícita cuando `dist/` no existe. */
export function requireDist(exists) {
  if (exists) return;
  console.error(
    `\n❌  No existe \`dist/\`. Este auditor lee el HTML compilado.\n` +
    `    Ejecuta \`npm run build\` primero.\n`
  );
  process.exit(1);
}
