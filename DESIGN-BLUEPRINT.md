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

### H1 hero

```
font-size:     clamp(3.5rem, 11vw, 10rem)
letter-spacing: -0.02em
line-height:   0.85
font-weight:   900
font-family:   .font-display  (Barlow Condensed)
```

**Requisito no negociable:** la página debe cargar el webfont en su `<head>`.
Sin esto, `.font-display` cae silenciosamente a `system-ui` y el fallo **no se
ve** si el navegador tiene la fuente cacheada de otra página:

```astro
<Fragment slot="head">
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link rel="preload" as="style" href="https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@700;800;900&display=swap" />
  <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@700;800;900&display=swap" />
</Fragment>
```

Comprobación correcta en el navegador — `getComputedStyle` **no sirve**, porque
devuelve lo declarado, no lo renderizado:

```js
document.fonts.check('900 3rem "Barlow Condensed"')  // debe ser true
```

#### H1 a dos niveles

Cuando el H1 lleva eyebrow + tesis (caso de `reforma-cocinas`), el eyebrow es
texto pequeño y mantiene su propio tracking. El canon aplica **sólo al span de
la tesis**:

```astro
<h1 id="h-hero" class="font-display text-white" style="line-height:1;text-wrap:balance;font-weight:900">
  <span class="block text-white/50 font-bold" style="font-size:clamp(.875rem,1.6vw,1.125rem);letter-spacing:.01em">
    Eyebrow con la keyword
  </span>
  <span class="block" style="font-size:clamp(3rem,9vw,8rem);letter-spacing:-0.02em;line-height:0.85">
    Tesis
  </span>
</h1>
```

### Encabezados de sección

| Rol | Clases | letter-spacing |
|---|---|---|
| H2 principal | `text-4xl lg:text-5xl font-black text-gray-900` | `-0.03em` |
| H2 secundario / H3 | `text-3xl lg:text-4xl font-black text-gray-900` | `-0.03em` |

Siempre con `text-wrap:balance`.

### Otros roles

| Rol | Valor |
|---|---|
| Número editorial grande | `clamp(5rem,14vw,10rem)` · `-0.055em` |
| Métrica de hero | `.hero-metric__val` (`clamp(1.5rem,3.2vw,2.5rem)` · `-0.04em`) |
| Eyebrow uppercase | `0.15em` |
| CTA (botón) | `0.08em` |

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
