# Playbook de mejoras — SEO, semántica y componentes

> **INVENTARIO Y PROCEDIMIENTO · NO NORMATIVO.** No declara autoridad sobre ninguna
> materia: cada lote se aprueba y se registra como decisión en `docs/DECISION-REGISTER.md`
> antes de considerarse regla. Auditoría de 2026-09-11 sobre las 75 páginas de `dist/`.

## Cómo se usa

Cada lote trae un prompt listo para pegar. Están ordenados de menor a mayor riesgo: los
tres primeros no cambian un solo píxel, los dos siguientes sí y por eso empiezan
preguntando. **No mezcles lotes en una misma tanda**: el valor de este orden es que si algo
se rompe, se sabe qué lo rompió.

---

## Resumen de hallazgos

| # | Hallazgo | Alcance medido | Regla | Riesgo |
|---|---|---|---|---|
| 1 | `<main>` anidado dentro del `<main>` del layout | 1 página (`/guias`) | §5 «`<main>` único» | nulo |
| 2 | `<table>` sin `<caption>` | 11 tablas en 5 páginas | §5 | nulo |
| 3 | `<th>` sin `scope` | 63 celdas renderizadas (46 en fuente) en 6 páginas | §5 | nulo |
| 4 | `<section>` sin `aria-labelledby` ni `aria-label` | 13 en 5 páginas | §5 | nulo |
| 5 | `canonical` del 404 apunta a `/404/`, que no existe | 1 página | §4 | nulo |
| 6 | `<meta description>` fuera de 140–155 | 36 de 75 (24 combinadas pasan de 155) | §4 | bajo |
| 7 | `<title>` fuera de 50–60 | 8 de 75 | §4 | bajo |
| 8 | Tablas de datos duplicadas a mano | 11 tablas, 3 grafías de clase | §5, §10 | bajo |
| 9 | Botones: 18 grafías distintas para 44 usos | 5 paddings, 2 pesos, 2 tamaños | §10 | **medio: cambia el diseño** |
| 10 | Eyebrow a mano en 20 grafías, 106 usos, mientras `.eyebrow` existe en el canon y diverge | 12 páginas | §10, canon | **medio: cambia el diseño** |
| 11 | `SectionHeader.astro` existe y no se usa en ninguna página | 1 componente | — | nulo |
| 12 | 13 clases declaradas en `global.css` sin ninguna referencia en `src/` | 13 clases | — | nulo |
| 13 | `SERVICE_ZONE_LEVEL` se importa en la plantilla combinada y no se usa | 48 páginas afectadas | — | requiere decisión |
| 14 | Sin enlace de salto al contenido | todas | WCAG 2.4.1 | bajo |

**Lo que está bien y conviene no tocar:** una sola entidad `#business` en las 75 páginas,
canonical autorreferenciado en todas, `lang="es"`, `focus-visible` y
`prefers-reduced-motion` presentes, ningún título duplicado, ninguna meta duplicada,
ninguna imagen sin `alt` ni sin dimensiones, cero saltos de encabezado, cero anchors
genéricos, cero `list-disc`, cero em-dash visible.

El `noindex` de las 75 páginas **no es un error**: es la bandera `PUBLIC_SITE_INDEXING`
funcionando como debe hasta el lanzamiento.

---

## Preámbulo obligatorio de todos los prompts

Cópialo al principio de cada prompt. Es lo que impide que una tanda rompa lo avanzado.

```
Antes de tocar nada: lee CLAUDE.md, DESIGN-BLUEPRINT.md y docs/DECISION-REGISTER.md.

Reglas de esta tanda:
- Limítate al alcance que te doy. Si encuentras otra cosa que arreglar, anótala y
  dímela al final; no la arregles en esta tanda.
- No cambies copy visible salvo que el alcance lo pida explícitamente.
- No inventes ningún dato de negocio (CLAUDE.md §0 y §1).
- No ejecutes ninguna skill. Si crees que hace falta, párate y pregúntame.
- Si algo del alcance contradice una regla de los documentos canónicos, PÁRATE y
  avísame antes de implementar. No lo resuelvas por tu cuenta.

Verificación obligatoria antes de darlo por cerrado:
- npm run build && npm run audit, y me reportas el resultado de los cinco auditores.
- Compara el texto renderizado de las 74 páginas antes y después. Dime exactamente
  cuántas cambian y por qué. Si cambia alguna que no esperabas, párate.
- Si el cambio es visual, mídelo en el navegador y dame el valor computado, no una
  impresión.

Documentación:
- Registra lo que hagas como decisión en docs/DECISION-REGISTER.md, con ID nuevo
  (comprueba antes que no esté usado) y el porqué, no solo el qué.
- Si la mejora establece un criterio que deba respetarse en el futuro, actualiza el
  documento maestro que corresponda: CLAUDE.md si es regla de trabajo, copy, SEO o
  semántica; DESIGN-BLUEPRINT.md si es canon visual o un componente nuevo. Enuncia
  la regla en UN solo sitio y deja punteros en el resto (CLAUDE.md §10).

Al terminar: commit con mensaje que explique el porqué, y push.
```

---

## Lote 1 — Semántica HTML. Cero cambio visual

> **HECHO el 2026-09-11.** Ver DEC-A22. La cifra de `<th>` de la tabla de arriba estaba
> mal en la primera redacción de este documento: eran 63 renderizados, no 17. El recuento
> original contaba tablas afectadas, no celdas.

Resuelve los hallazgos 1 a 5. Es el lote con mejor relación valor/riesgo: son errores que
contradicen §5 y §4, y ninguno toca el aspecto de la web.

```
[PREÁMBULO]

Alcance: cinco correcciones de semántica HTML. Ninguna debe cambiar un píxel.

1. src/pages/guias/index.astro abre un <main> dentro del <main> del layout. HTML
   inválido y contra §5. Quita el <main> de la página y pasa sus clases al contenedor
   que corresponda.

2. Las 11 tablas sin <caption> de servicios/reforma-cocinas, comunidades-vecinos,
   reforma-pisos, locales-comerciales y reformas-integrales. §5 lo exige.
   (La calculadora ya tenía captions en sus 4 tablas.)
   Escribe un caption que describa lo que contiene cada tabla. Si visualmente no debe
   verse, ocúltalo con una clase sr-only, no con display:none.

3. Los <th> sin scope de esas páginas y de la calculadora. Añade scope="col" o scope="row" según
   corresponda a cada uno. Míralos: no lo apliques en bloque.

4. Los 13 <section> sin aria-labelledby ni aria-label. Si la sección tiene encabezado,
   dale id y apunta el aria-labelledby ahí. Si no lo tiene, decide: o le falta un
   encabezado de verdad, o no debería ser <section>. Dime cuál es cada caso antes de
   resolverlo si alguno es dudoso.

5. El canonical de 404.astro apunta a https://trazzo360.es/404/, que no existe. Una
   página 404 no debe llevar canonical autorreferenciado. Quítalo.

Verificación específica: el texto renderizado de las 74 páginas debe quedar IDÉNTICO
salvo por los captions nuevos. Dime cuántos captions añades y en qué páginas.
```

---

## Lote 2 — Titles y metas. Cero cambio visual

Hallazgos 6 y 7. Es reescritura de copy de SERP, no de la página.

```
[PREÁMBULO]

Alcance: los <title> y <meta description> fuera del rango de CLAUDE.md §4.

Estado medido hoy: 8 títulos fuera de 50-60 caracteres y 36 metas fuera de 140-155,
de las cuales 24 son combinadas que pasan de 155 y se cortarán en el resultado de
búsqueda.

1. Dame primero la lista completa: URL, longitud actual y texto actual, agrupada por
   familia de página. No reescribas nada todavía.
2. Con mi visto bueno, reescribe. Cuenta los caracteres antes de escribir cada una.
3. Mantén la estructura de §4: keyword principal al inicio, modificador comercial,
   marca. Sin superlativos (§6.9). Sin em-dash (§8.2).
4. Las metas de las combinadas se generan en SERVICE_ZONE_META y en un fallback de la
   plantilla. Revisa si el fallback es el que produce las largas: si es así, arréglalo
   ahí en vez de escribir 24 metas a mano.

Verificación específica: ninguna meta ni título duplicado después del cambio, y los
contadores de audit:content en verde.
```

---

## Lote 3 — Componente de tabla. Cero cambio visual

Hallazgo 8. Se hace **después** del Lote 1, para que el componente nazca ya con la
semántica correcta.

```
[PREÁMBULO]

Alcance: extraer las tablas de datos a un componente.

Hoy hay 11 tablas repartidas en 5 páginas con 3 grafías distintas de clase
(w-full text-sm border-collapse con bg-white, con bg-[#F9F7F4] y con border).

1. Antes de escribir nada, enséñame las 11 tablas y dime si de verdad son el mismo
   objeto o si hay dos patrones distintos disfrazados. Si son dos, haz dos componentes
   o uno con prop, y explícame por qué.
2. El componente debe imponer por construcción lo que §5 exige: <caption>, <thead>,
   <th scope>. Que sea imposible usarlo mal.
3. Los estilos van a global.css, no inline ni en el componente, siguiendo la regla de
   docs/PROTOCOLO-LAB.md que cita CLAUDE.md §9: los valores aprobados se extraen a
   global.css, no se copian.
4. Documenta el componente en DESIGN-BLUEPRINT.md, en la sección «Bloques compuestos»,
   junto a los otros patrones.

Verificación específica: el texto renderizado de las 74 páginas IDÉNTICO, y una captura
o valores computados de una tabla antes y después para confirmar que no se mueve nada.
```

---

## Lote 4 — Sistema de botones. Cambia el diseño

Hallazgo 9. **Empieza preguntando**, porque unificar 18 grafías significa que algunos
botones van a cambiar de tamaño.

```
[PREÁMBULO]

Alcance: unificar los botones de acción.

Estado medido: 18 grafías distintas de clase para 44 botones, con 5 paddings
(px-6 py-3, px-7 py-3.5, px-8 py-3.5, px-10 py-4, px-12 py-5), dos pesos (font-bold y
font-black) y dos tamaños de texto (text-xs y text-sm).

1. Primero enséñame las 18 grafías con dónde se usa cada una y qué tamaño real tiene en
   pantalla. Quiero ver si las diferencias responden a jerarquía (botón de hero frente a
   botón de cierre de bloque) o son deriva.
2. Propón el sistema mínimo que cubra los casos reales: probablemente dos variantes
   (principal y secundaria) y dos tamaños. Dime qué botones concretos cambian de aspecto
   y cuánto. No lo apliques hasta que yo lo apruebe.
3. Cuando lo apruebe: clases en global.css y un componente que las use. Ni estilos
   inline ni Tailwind suelto en las páginas.
4. Ojo con CtaInline y CtaStrip, que ya existen: o se apoyan en el sistema nuevo o hay
   que explicar por qué siguen aparte.
5. Documenta el sistema en DESIGN-BLUEPRINT.md y, si establece una regla de uso,
   ponla en CLAUDE.md con puntero desde el blueprint.

Verificación específica: como esto SÍ cambia el diseño, dame valores computados
(padding, font-size, font-weight) de un botón de cada variante antes y después, y
confirma que el texto renderizado no cambia en ninguna de las 74 páginas.
```

---

## Lote 5 — Eyebrow. Cambia el diseño y hay contradicción que resolver

Hallazgo 10, el más importante de los tres de componentes, porque aquí **el canon y el
código dicen cosas distintas**.

`global.css` declara `.eyebrow`: 10px, peso 900, tracking 0.15em, color de marca.
Las páginas escriben a mano `text-xs font-bold uppercase tracking-widest`: 12px, peso
700, tracking 0.1em. **Las tres propiedades difieren.** `.eyebrow` solo se usa en
`HeroTitle.astro` y en `SectionHeader.astro`, que está muerto.

Esto es exactamente el caso que CLAUDE.md §10 manda no resolver en silencio.

```
[PREÁMBULO]

Alcance: el eyebrow (el rótulo en versalitas sobre los encabezados).

Hay una contradicción entre canon y código que NO debes resolver por tu cuenta:
- global.css declara .eyebrow en 10px, peso 900, tracking 0.15em.
- 106 eyebrows en 12 páginas se escriben a mano en 20 grafías, la más común en 12px,
  peso 700, tracking 0.1em.
- .eyebrow solo se usa en HeroTitle.astro y en SectionHeader.astro, que no usa nadie.

1. Verifica estos números tú mismo antes de nada y dime si coinciden.
2. Enséñame las 20 grafías con su recuento y dónde vive cada una. Quiero ver si hay
   roles distintos de verdad (eyebrow de hero, de sección, de tarjeta) o es deriva.
3. Preséntame las opciones con su consecuencia visual medida: cuántos elementos
   cambian de tamaño y cuánto, si adoptamos el canon, o si el canon se actualiza a lo
   que hace el código, o si se declaran dos roles.
4. PÁRATE AHÍ y pregúntame cuál quiero. No implementes ninguna.
5. Cuando decida: una sola grafía por rol, en global.css, y se supersede lo que haya
   que superseder en el registro de decisiones. Actualiza DESIGN-BLUEPRINT.md para que
   el canon y el código vuelvan a decir lo mismo, y añade el rol a la tabla de roles
   tipográficos.
6. Valora si audit:design debería cubrir el eyebrow, ya que esta divergencia existió
   sin que ningún auditor la viera. Si lo añades, que falle cuando el conteo
   inspeccionado sea 0.
```

---

## Lote 6 — Limpieza. Cero cambio visual

Hallazgos 11, 12 y 13.

```
[PREÁMBULO]

Alcance: código declarado y no usado. Verifica CADA punto antes de borrar nada; si algo
resulta estar en uso, dímelo y no lo toques.

1. src/components/ui/SectionHeader.astro: no lo referencia ninguna página. Confirma y
   decide conmigo: o se adopta donde encaje, o se borra. No lo borres sin decírmelo.

2. Estas 13 clases de global.css no tienen ninguna referencia en src/:
   ajuste-alto, ajuste-bajo, ajuste-medio, ajuste-variable, compromisos-apertura__dato,
   compromisos-apertura__sub, compromisos-apertura__tag, compromisos-apertura__valor,
   eyebrow--dark, measure-hero, measure-lead, measure-tight, stat-editorial--dark.
   Cuidado: measure-lead se quedó huérfana en DEC-D33 al extraer .vida-lead, y
   eyebrow--dark y stat-editorial--dark son variantes de clases que SÍ se usan.
   Clasifícalas en tres grupos antes de tocarlas: muertas de verdad, variantes que
   deberían usarse en algún sitio, y las que el canon declara aunque no se usen todavía.

3. SERVICE_ZONE_LEVEL se importa en src/pages/[servicio]/[barrio].astro y no se usa en
   ninguna parte del fichero. El sistema S1/S2/S3 de src/data/content/levels.ts
   clasifica las 48 combinadas pero la plantilla no lo consulta: hoy todas se renderizan
   igual. Enséñame qué haría la plantilla si lo consultara y cuánto cambiaría cada
   página, y decido entre conectarlo o retirar el import.

Verificación específica: el CSS final de dist/ debe pesar menos y el texto renderizado
de las 74 páginas debe quedar idéntico.
```

---

## Lote 7 — Enlace de salto al contenido

Hallazgo 14. Pequeño y aislado.

```
[PREÁMBULO]

Alcance: añadir un enlace de salto al contenido principal en el layout.

Hoy no existe: quien navega con teclado tiene que recorrer la cabecera entera en cada
página. Es el criterio 2.4.1 de WCAG.

Requisitos: oculto hasta recibir foco, visible y con contraste suficiente cuando lo
recibe, primer elemento enfocable del documento, apunta al <main>. Los estilos van a
global.css.

Verificación específica: confírmame en el navegador que aparece al tabular y que el
foco salta de verdad al contenido. El texto renderizado no debe cambiar en ninguna
página.
```

---

## Lo que este playbook NO propone, y por qué

- **Tocar los rangos de palabras de §3.** Están fuera de rango 48 combinadas, pero §3
  dice que quedar fuera no bloquea nada y §6.9 prohíbe el relleno. Ver
  `docs/FASE2-CONTENIDO.md`.
- **Quitar el `noindex`.** Es la bandera de prelanzamiento funcionando.
- **Tocar radios ni sombras.** Materia en disputa sin autoridad asignada, ver DT-F06.
- **Reordenar las secciones de los hubs.** Materia en disputa, ver DEC-C10.
- **DT-F09**, los 62 anchors repetidos hacia `/contacto/`: sigue pendiente de criterio
  y exige reescribir copy, no es mecánico.
