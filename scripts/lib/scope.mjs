/**
 * scope.mjs — Definición única de qué queda fuera de las auditorías.
 *
 * El laboratorio es un banco de pruebas, no una página: no se le aplican los
 * umbrales de contenido, ni las reglas de copy, ni el canon de diseño. Antes
 * cada script tenía su propio criterio o ninguno, y esa divergencia hacía que
 * errores de laboratorio se contaran como errores de producción.
 *
 * Cambiar el aislamiento del lab se hace AQUÍ y en ningún otro sitio.
 * Consumidores: los cinco scripts de `scripts/`, y `astro.config.mjs`.
 *
 * Ver docs/PROTOCOLO-LAB.md y CLAUDE.md §9.
 */

/** Rutas de laboratorio, tal como aparecen en una URL o en un path de `dist/`. */
export const LAB_URL_PATTERNS = [
  /(^|\/)lab\//,        // /lab/… en cualquier profundidad
  /-lab\/?$/,           // …/algo-lab/ — el sufijo que se publicó por error
];

/** Ficheros fuente de laboratorio dentro de `src/`. */
export const LAB_SRC_PATTERNS = [
  /(^|\/)src\/pages\/lab\//,
  /-lab\.astro$/,
];

/** Normaliza separadores para que los patrones valgan en cualquier plataforma. */
const norm = p => String(p).split('\\').join('/');

/** ¿Es una URL o un path de `dist/` perteneciente al laboratorio? */
export function isLabUrl(pathOrUrl) {
  const p = norm(pathOrUrl);
  return LAB_URL_PATTERNS.some(re => re.test(p));
}

/** ¿Es un fichero fuente de laboratorio? */
export function isLabSource(filePath) {
  const p = norm(filePath);
  return LAB_SRC_PATTERNS.some(re => re.test(p));
}

/** Cualquiera de las dos. Útil cuando un script mezcla fuentes y salida. */
export function isLab(pathOrUrl) {
  return isLabUrl(pathOrUrl) || isLabSource(pathOrUrl);
}
