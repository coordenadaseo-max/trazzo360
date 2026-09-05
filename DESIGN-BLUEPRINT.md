# Blueprint de diseño · Trazzo360

Fuente de verdad tipográfica del sitio. Lo verifica `npm run audit:design`.

## Cómo se define el canon

El canon **no se inventa**: lo definen las páginas aprobadas por el cliente.

| Página | Estado |
|---|---|
| `/servicios/reformas-integrales/` | ✅ aprobada |
| `/servicios/reforma-banos/` | ✅ aprobada |
| `/servicios/reforma-cocinas/` | ✅ migrada al canon |

Si una página aprobada cambia, se actualiza `CANON` en `scripts/audit-design.mjs`
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
3. `npm run build` — deben salir **87 páginas**.
4. `npm run audit:design` — el lote debe quedar limpio.
5. Verificar el webfont con `document.fonts.check(...)`, no a ojo.
6. Commit por lote, para poder revertir uno sin tocar los demás.

## Estado de migración

Pendientes de migrar al canon del H1 (a fecha de la última auditoría):

| Fichero | Diverge en |
|---|---|
| `index.astro` | `-0.04em` · `0.88` |
| `servicios/reforma-pisos.astro` | `-0.04em` · `0.88` |
| `servicios/comunidades-vecinos.astro` | `-0.04em` · `0.88` |
| `servicios/locales-comerciales.astro` | `-0.04em` · `0.88` |
| `zonas/[slug].astro` *(plantilla)* | `-0.035em` · `.95` |
| `zonas/alcala-de-henares.astro` | `-0.035em` · `.95` |
| `[servicio]/[barrio].astro` *(plantilla)* | `-0.035em` · `.95` |
| `reforma-cocinas/alcala-de-henares.astro` | `-0.035em` · `.95` |

Las dos plantillas `[slug]` cubren la mayor parte de las 87 páginas generadas:
migrarlas es el cambio de mayor alcance por fichero tocado.

Las páginas bajo `src/pages/lab/` quedan excluidas del auditor: son prototipos
que no llegan a producción.
