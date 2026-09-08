# Protocolo de laboratorio y propagación de diseño

Diseñar una página en aislamiento, aprobarla y propagar ese diseño al resto del sitio es un
método correcto. Lo que falló la primera vez no fue el laboratorio, sino la ausencia de
procedimiento: el lab acabó siendo la fuente del ADN visual, se publicó, y nadie sabía en qué
momento una página de laboratorio dejaba de ser un experimento.

Este documento fija ese procedimiento. Su aislamiento técnico está en
[`scripts/lib/scope.mjs`](../scripts/lib/scope.mjs), definición única que consumen los cinco
auditores y `astro.config.mjs`.

## Los nueve pasos

1. **El lab se crea en `src/pages/lab/<nombre>.astro`.** Nunca fuera de esa carpeta. El
   sufijo `-lab` en otra ruta fue exactamente lo que se publicó por error:
   `/servicios/reformas-integrales-lab/` entró en el sitemap porque el filtro buscaba `/lab/`
   con barras y esa ruta lleva guion.

2. **Se itera libremente.** En el lab no aplican los umbrales de contenido ni las reglas de
   copy: no es una página, es un banco de pruebas. Los auditores lo ignoran por diseño.

3. **Cuando el diseño se aprueba, el lab NO es la fuente.** Los valores aprobados se extraen
   a `src/styles/global.css` como tokens en `@theme` o como clases de rol. **Nunca se propaga
   copiando estilos inline de una página a otra.** Esa fue la causa real de que un H1 acabara
   renderizando en fuente de sistema: la página declaraba `.font-display` pero nadie había
   cargado la webfont, y el estilo copiado no arrastraba esa dependencia.

4. **Se documenta el rol nuevo** en la tabla de roles de `DESIGN-BLUEPRINT.md`.

5. **Se añade la página de producción que estrena el patrón a `CANON_SOURCES`** en
   `scripts/audit-design.mjs`, y la regla correspondiente al array `CANON`.

6. **`npm run audit:design` produce entonces la lista de divergencias.** Esa lista **es** el
   backlog de migración: no hay que buscar a mano qué páginas quedan atrás.

7. **Se migran las páginas divergentes** hasta que `audit:design` vuelva a exit 0.

8. **Se registra una DEC** en `docs/DECISION-REGISTER.md` con el patrón nuevo, la fecha y qué
   decisión supersede.

9. **La página de lab se borra o se queda, indiferente.** A partir del paso 3 ya no es
   autoridad de nada. Si se queda, sigue aislada por `scripts/lib/scope.mjs`.

## Regla de parada

> Si en el paso 6 el auditor no detecta ninguna divergencia y sabes que sí las hay, **el
> problema está en el scope del auditor, no en el sitio. Arréglalo antes de continuar.**

No es hipotético. `audit:design` estuvo dando «sin divergencias contra el canon» mientras
sólo inspeccionaba 4 de 23 ficheros: sus reglas del H1 buscan `<h1 id="h-hero">` en el fuente
`.astro`, y las demás páginas reciben ese `id` del componente `HeroTitle`, invisible para un
script que lee el fuente. Un auditor en verde sobre un scope vacío es indistinguible de un
sitio consistente, y es más peligroso que no tener auditor.

### El corolario: un cero sin denominador no es información

La regla de parada mira el caso «el auditor no ve las divergencias». Este es el mismo fallo
desde el otro lado: **no puedes distinguir un auditor que pasa de uno que no miró nada.**

Ha ocurrido dos veces en este proyecto. `audit:design` decía «sin divergencias contra el
canon» mientras inspeccionaba 4 de 74 páginas. Y un script al que le faltaba un `import`
crasheaba con `ReferenceError` produciendo exactamente el mismo silencio que uno limpio: la
verificación contaba menciones en la salida, y la salida estaba vacía porque el proceso
moría, no porque no hubiera nada que decir.

Por eso los seis auditores **imprimen siempre cuántas unidades han inspeccionado**, incluso
en verde, y **fallan con exit 1 si ese número es cero o cae por debajo de un suelo**.
`audit:design` informa además de la cobertura de cada regla del canon: si una regla aplica a
4 de 40 ficheros, se ve en la salida sin tener que investigarlo.

Dos consecuencias prácticas al escribir o revisar un auditor:

- `node --check` valida sintaxis pero **no resuelve imports**. Un script puede pasar el
  `--check` y morir al ejecutarse. Ejecútalo de verdad.
- Antes de fiarte de un verde, mira el denominador. Si no hay denominador, añádelo antes de
  seguir.

## Qué garantiza el aislamiento

Cuatro cosas, todas verificables:

| Garantía | Dónde vive |
|---|---|
| No entra en el sitemap | filtro de `astro.config.mjs` vía `isLabUrl` |
| Sale con `noindex, nofollow` | `Layout.astro`, derivado de `Astro.url.pathname` |
| No aparece en ninguna de las cinco auditorías | `scripts/lib/scope.mjs` |
| Desaparece de `dist/` en build de producción | hook `exclude-lab-in-production` |

Además, un enlace desde una página de producción hacia `/lab/` es **error** en
`npm run audit:links` y rompe el build (R12 de `CLAUDE.md` §7.8).
