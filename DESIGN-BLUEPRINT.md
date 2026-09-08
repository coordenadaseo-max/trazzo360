# Blueprint de diseño · Trazzo360

Canon tipográfico y de componentes, verificado por `npm run audit:design`.
Su lugar en la jerarquía lo fija `CLAUDE.md`.

## Cómo se define el canon

El canon **no se inventa**: lo definen las páginas aprobadas por el cliente.

| Página | Estado |
|---|---|
| `/servicios/reformas-integrales/` | ✅ aprobada |
| `/servicios/reforma-banos/` | ✅ aprobada |
| `/servicios/reforma-cocinas/` | ✅ migrada al canon |

Si una página aprobada cambia, se actualiza `CANON_SOURCES` en `scripts/audit-design.mjs`
(la constante `CANON` de ese mismo fichero guarda los valores por rol, no las páginas).

**Esta lista manda en tipografía y componentes.** La composición la mandan las Golden
References de `docs/VISUAL-ROLLOUT-MAP.md` §8. Son ejes independientes y sus listas pueden
no coincidir sin que eso sea un error
y el resto del sitio se migra detrás. Nunca al revés.

## Canon tipográfico por rol

Cada valor está tomado de las dos páginas aprobadas, donde coinciden exactamente.

**Consumir siempre la clase, nunca repetir los valores inline.** Cada clase
encapsula el conjunto completo (familia, peso, tamaño, tracking, interlineado)
a propósito: aplicar sólo una parte fue la causa real de que un H1 acabara
renderizando en la fuente del sistema a peso 400.

| Rol | Clase | Equivale a |
|---|---|---|
| H1 hero | `.h1-hero` | `clamp(3.5rem,11vw,10rem)` · `-0.02em` · `0.85` · `900` · display |
| H1 hero · hub de servicio, home y ancla | `.h1-hero` | `clamp(3.5rem, 11vw, 10rem)` vía `--text-display-hero` |
| H1 hero · hub de zona | `.h1-hero` + `.h1-hero--zona` | `clamp(2.25rem, 5.5vw, 4.5rem)` vía `--text-display-zona` |
| H1 hero · combinada servicio×zona | `.h1-hero` + `.h1-hero--combinada` | `clamp(2.25rem, 5.5vw, 4.25rem)` vía `--text-display-combinada` |
| H1 hero a dos niveles | `.h1-hero--stacked` + `.h1-hero__eyebrow` + `.h1-hero__thesis` | la tesis lleva el canon; el eyebrow su propio tracking |
| H2 principal | `.h2-section` | `text-4xl lg:text-5xl` · `-0.03em` |
| H2 / H3 secundario | `.h3-sub` | `text-3xl lg:text-4xl` · `-0.03em` |
| Sobre fondo oscuro | `.h2-section--dark` · `.h3-sub--dark` | lo anterior en blanco |
| Entradilla de hero | `.lead-hero` | `clamp(0.875rem,1.05vw,1rem)` · `46ch` · blanco 72% |
| Número editorial | `.stat-editorial` | `clamp(5rem,14vw,10rem)` · `-0.055em` |
| Eyebrow versalitas | `.eyebrow` · `.eyebrow--dark` | `0.625rem` · `0.15em` · terracota |
| Métrica de hero | `.hero-metric__val` | `clamp(1.5rem,3.2vw,2.5rem)` · `-0.04em` |

Ejemplo de H1 a dos niveles:

```astro
<h1 id="h-hero" class="h1-hero--stacked">
  <span class="h1-hero__eyebrow">Reforma de cocinas en el Corredor del Henares</span>
  <span class="h1-hero__thesis">La distribución se decide antes de elegir los muebles.</span>
</h1>
```

### El webfont es global, no por página

Barlow Condensed se carga en `src/layouts/Layout.astro`, no en cada página.
Cuando dependía de que cada página lo recordara, `reforma-cocinas` se quedó sin
él y su H1 renderizó en `system-ui`. **El fallo era invisible en local** porque
el navegador tenía la fuente cacheada de haber visitado otra página.

`getComputedStyle` **no detecta este fallo**: devuelve lo declarado, no lo
renderizado. La comprobación correcta es:

```js
document.fonts.check('900 3rem "Barlow Condensed"')  // debe ser true
```

Nota: si una página no usa ningún elemento con la fuente display, el navegador
no la descarga y ese `check()` devuelve `false` legítimamente. Eso no es un
fallo, es carga perezosa correcta.

### Ritmo vertical y medida

| Clase | Valor |
|---|---|
| `.section-py` | `5rem` · `7rem` en ≥1024 (el `py-20 lg:py-28` del lab) |
| `.section-py-sm` | `4rem` |
| `.measure-tight` · `.measure-lead` · `.measure-hero` · `.measure-body` · `.measure-wide` | `22ch` · `36ch` · `46ch` · `58ch` · `64ch` |

### Dos reglas que definen el sistema

Del ADN del lab, medido: **cero `box-shadow` y cero `border-radius`** en toda la
página (salvo el punto decorativo de `.era-tag`).

El sistema separa superficies con **bordes de 1px y contraste de fondo, nunca
con elevación**. Añadir una sombra o redondear una esquina rompe el lenguaje
visual aunque el resto de valores sea correcto. `--radius: 0px` es una decisión,
no un descuido.

**Excepción nominal (DEC-D01), dos ficheros y un valor cada uno:** `src/components/WhatsAppBtn.astro` usa
`rounded-full` por convención de plataforma. El botón flotante de WhatsApp no es un
componente del sistema, y ya tiene otra excepción declarada por el mismo motivo: el verde
`#25D366` está vetado en todo el sitio salvo ahí. `src/components/Header.astro` usa
`rounded-sm` en el botón de WhatsApp de la barra, por el mismo motivo. No se alinean: el
flotante es un FAB y el de la barra un botón inline, donde `rounded-full` sería una píldora.
Ninguna otra parte del sitio puede usar `rounded-*`, ni un valor distinto dentro de esos dos
ficheros; lo comprueba `npm run audit:design`.

### Componentes de chrome

Migrado desde `DESIGN.md` el 2026-09-07, al retirar ese documento. **Cada valor se verificó
contra el código antes de escribirlo**: esta tabla documenta lo que hay, no lo que se dijo.
Tres valores de la versión anterior no coincidían y se corrigen aquí; están marcados.

| Elemento | Valor real | Fichero |
|---|---|---|
| Top bar | `bg-[#111827] text-white text-sm py-2 text-center`, enlaces `hover:text-orange-300` | `Header.astro` |
| Header sticky | `bg-white border-b border-gray-100 sticky top-0 z-50 shadow-sm` ⚠ la versión anterior omitía `sticky top-0` | `Header.astro` |
| Altura del header | `h-18 py-3` dentro de `max-w-7xl mx-auto px-4` | `Header.astro` |
| Logo | `text-2xl font-black tracking-tight`; «Trazzo» en `#A85535`, «360» en `text-gray-900` | `Header.astro` |
| Nav links | contenedor `text-sm font-semibold uppercase tracking-wider`; enlace `text-gray-800 hover:text-[#A85535]` | `Header.astro` |
| Dropdown de nav | panel `bg-white border border-gray-100 shadow-xl w-56`; items `px-5 py-3 text-gray-700 hover:bg-orange-50 hover:text-[#A85535] border-b border-gray-50 text-sm` | `Header.astro` |
| CTA del header | `px-5 py-2.5 text-sm font-bold tracking-wider uppercase text-white`, `transition-opacity hover:opacity-90` | `Header.astro` |
| CTA de hero | `padding: 1rem 1.75rem`, `font-weight: 700`, `font-size: .8125rem`, `letter-spacing: .08em`, uppercase, fondo `#A85535`, `hover: opacity .88` ⚠ es un botón distinto del anterior; la versión de `DESIGN.md` los confundía en uno solo | `.hero-cta-primary` en `global.css` |
| CTA final de hub | `px-10 py-4` a `px-12 py-5`, `bg-[#A85535] hover:bg-[#8A4229] transition-colors` | hubs de servicio |

**Dos convenciones de hover conviven, y las dos son intencionadas:** el CTA de hero baja la
opacidad; el CTA final de hub cambia el fondo a `#8A4229`. La versión anterior afirmaba que
todos los primarios cambiaban de fondo ⚠, lo cual sólo es cierto para el segundo.

**El «patrón de card» de la versión anterior no existe.** Describía `border border-gray-100`
con `p-6`–`p-8` como contenedor estándar; en el código, `border-gray-100` aparece como
separador (`border-t`, `border-b`) y en el panel del dropdown, no como tarjeta. No se
documenta un patrón que no está implementado.

### Movimiento

Un solo easing domina el sistema (8 de 9 usos en el lab):

| Token | Valor | Uso |
|---|---|---|
| `--ease-expo` | `cubic-bezier(0.16, 1, 0.3, 1)` | todo: reveals, hover, entradas |
| `--ease-inout-soft` | `cubic-bezier(0.45, 0, 0.55, 1)` | sólo el punto del indicador de scroll |
| `--dur-fast` / `--dur-base` / `--dur-accent` / `--dur-reveal` / `--dur-hero` | `0.2s` / `0.25s` / `0.35s` / `0.65s` / `0.8s` | |

El bloque `@theme` usa `@theme static` a propósito: sin él Tailwind v4 hace
tree-shaking de las variables que todavía no consume nadie, y un
`var(--dur-fast)` escrito en el `<style>` de una página se resolvería a vacío
sin dar ningún error.

### Notación

Escribir siempre el cero inicial: `0.15em`, no `.15em`; `-0.02em`, no `-.02em`.
Sin esto un `grep` o un reemplazo masivo falla silenciosamente. El auditor lo
señala como aviso separado.

## Sistema de componentes

Todo vive en `src/styles/global.css`. **No redefinir estas clases en el
`<style>` de una página** — un override con la misma especificidad gana por
orden de carga y rompe el responsive sin dar ningún error.

*(Caso real: `reforma-banos` tenía `.hero-metrics { display:none }` en su style
block, que anulaba la regla global y ocultaba las métricas en móvil.)*

| Bloque | Clases |
|---|---|
| Hero | `hero-c-grid` · `hero-cta-group` · `hero-cta-primary` · `hero-cta-secondary` · `hero-metrics` · `hero-metric__val` · `hero-metric__label` |
| Alcance numerado | `incluye-list` · `incluye-row` · `incluye-n` · `incluye-body` · `incluye-title` · `incluye-desc` · `incluye-arrow` |
| Tipologías / épocas | `era-timeline` · `era-col` · `era-tag` · `era-col__title` · `era-col__body` · `era-list` |
| Precios | `price-ledger` · `price-row` · `price-row__num` · `price-footer` |
| Checklist | `presupuesto-dl` · `presupuesto-row` · `presupuesto-n` |
| Callout | `empresa-callout` · `empresa-callout__title` · `empresa-callout__body` |
| Proceso | `proceso-steps` · `proceso-step` · `proceso-step__n` |
| Zonas | `zonas-grid` · `zona-card` · `zona-pill` · `price-guide-chip` |
| CTA final | `cta-strip` · `cta-strip__item` · `cta-strip__val` · `cta-strip__label` |

Padding de sección principal: `py-20 lg:py-28`. Secciones menores: `py-16`.

## Reglas de contenido

El layout se adapta al contenido, **nunca al revés**.

- No modificar H1/H2/H3 ni texto de cuerpo por razones de diseño.
- Al migrar una tarjeta a un componente, si su título era `<p>` **se queda
  `<p>`**. Promoverlo a `<h3>` altera el outline de encabezados y el SEO.
- Los eyebrows son contenido, no decoración: se conservan aunque la página de
  referencia no los use.

## Procedimiento de migración

Por lotes de páginas hermanas, no todas a la vez: el flujo de aprobación es por
URL y un cambio masivo no se puede revisar ni aprobar.

1. `npm run audit:design` — ver qué diverge en el lote.
2. Aplicar el canon fichero a fichero.
3. `npm run build` — el recuento se obtiene con `find dist -name 'index.html' | wc -l`, no se fija aquí para que no caduque.
4. `npm run audit:design` — el lote debe quedar limpio.
5. Verificar el webfont con `document.fonts.check(...)`, no a ojo.
6. Commit por lote, para poder revertir uno sin tocar los demás.

## Estado de migración

**No hay tabla aquí, y es deliberado.** El estado se obtiene ejecutando:

```sh
npm run build && npm run audit:design
```

Una tabla de estado mantenida a mano siempre acaba mintiendo. La que había en este sitio
atribuía divergencias de `-0.035em` · `.95` a páginas donde ese valor ya no existía
—`grep -rn '0.035em' src/` sale vacío— y listaba cuatro hubs con cero divergencias reales de
tracking. El auditor no puede desactualizarse: lee el código en cada ejecución.

### Cómo leer su salida

- **Lista de divergencias.** Es el backlog de migración, no una advertencia. Cada línea dice
  fichero, rol, valor encontrado y valor esperado.
- **Denominador.** `Inspeccionadas: N ficheros` con su suelo mínimo. Si N es 0 o cae bajo el
  suelo, el auditor aborta: no encontrar nada que mirar es estar roto, no estar satisfecho.
- **Cobertura por regla.** `regla «X»: aplica en N/M ficheros`. Una regla con cobertura baja
  no está vigilando lo que crees. Hoy las reglas del H1 aplican al 10% de los ficheros y la
  del número editorial al 0%: el scope del auditor es deuda conocida, no un sitio limpio.

Ver la regla de parada en [`docs/PROTOCOLO-LAB.md`](./docs/PROTOCOLO-LAB.md).
