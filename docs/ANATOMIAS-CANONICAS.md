# Anatomías canónicas — Trazzo360

Cada familia de páginas tiene una estructura (anatomía) propia aunque comparta el mismo sistema visual (ADN V1). Este documento recoge los patrones canónicos de las 4 familias para que nuevas páginas hereden diseño y arquitectura de información, NO para que copien contenido ni ángulo editorial.

> **Principio clave:** MISMO SISTEMA VISUAL ≠ MISMA ANATOMÍA. Las 4 familias tienen el mismo ADN (paleta, tipografía, DEC rules) pero atacan ángulos distintos: servicio, territorio, servicio×territorio.

---

## Familia 1 — Hub de servicio

**Referencia canónica:** `reforma-banos.astro`, `reforma-cocinas.astro`  
**URL pattern:** `/servicios/{slug}/`

### Hero V1 — estructura canónica

```
min-height: 100vh
padding-bottom: 3.5rem
background: #111827

Columnas (≥1024px): hero-c-grid → 55fr 22fr 23fr
  Col A (copy): eyebrow + H1 + párrafo + CTAs
  Col B: stats semánticos (datos de calculator.ts)
  Col C: mini-tabla o stats secundarios
```

**H1 pattern — keyword IS el display:**
```html
<h1 style="font-size:clamp(2.5rem,9.5vw,8.5rem);letter-spacing:-0.04em;line-height:0.88;font-weight:900;color:white">
  Reforma de baños en el Corredor del Henares
</h1>
```
- Keyword exacta = la headline de display. No hay tesis separada.
- Eyebrow `<p>` arriba: `font-size:10px; font-weight:700; text-transform:uppercase; letter-spacing:.1em; color:#A85535`

**Stats — únicamente datos de `calculator.ts`:**
```html
<dl>
  <div><dt>Desde</dt><dd>5.000 €</dd></div>
  <div><dt>Plazo</dt><dd>2–4 sem.</dd></div>
  <div><dt>Pago</dt><dd>40 · 40 · 20</dd></div>
</dl>
```

### Secciones del body — orden canónico

1. **Compromisos** — `<section class="py-20 bg-white">` con componente `<Compromisos variant="full" />`
2. **Cómo trabajamos / Proceso** — pasos numerados o secciones editoriales
3. **Precios / Rangos** — tabla o rangos desde calculator.ts
4. **FAQ** — `<details>/<summary>` con `<h3>` wrapper en el summary
5. **Zonas** — grid de municipios (ver patrón canónico abajo)
6. **CTA final** — `bg-[#111827]`, nunca terracota

### Bloque de zonas — patrón canónico obligatorio

```html
<section aria-labelledby="h-zonas">
  <h2 id="h-zonas" class="text-2xl font-black" style="letter-spacing:-0.02em">
    Reforma de baños en el Corredor del Henares: todos los municipios
  </h2>

  <!-- Grid principal: ciudades propias -->
  <div class="zonas-grid mb-10" style="display:grid;gap:1px;background:#D1C9BD">
    <article class="group relative p-5 bg-[#F9F7F4] hover:bg-[#111827] transition-colors duration-200">
      <h3 class="text-sm font-bold text-gray-900 group-hover:text-white transition-colors duration-200 m-0">
        <a href="/reforma-banos/{z.slug}/"
           class="after:absolute after:inset-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#A85535]">
          Reforma de baños en {z.name}
        </a>
      </h3>
      <span aria-hidden="true"
            class="text-xs text-gray-400 mt-1 group-hover:text-gray-300 transition-colors duration-200 block">
        Ver precios →
      </span>
    </article>
  </div>

  <!-- Cross-links: otros servicios (2 columnas) -->
  <div style="display:grid;grid-template-columns:1fr 1fr;gap:.5rem">
    <a href="/servicios/reforma-cocinas/" class="text-sm text-gray-500 hover:text-[#A85535] transition-colors">
      Reforma de cocinas en el Corredor
    </a>
    <!-- ... -->
  </div>
</section>
```

**Reglas del bloque de zonas:**
- `hover:bg-[#111827]` y `group-hover:text-white` — dark flip, nunca borde terracota
- `duration-200` en todas las transiciones
- `mb-10` en el grid principal antes de los cross-links
- `after:absolute after:inset-0` en el `<a>` del título — NUNCA toda la tarjeta en `<a>`
- Cross-links en 2 columnas, texto plano sin decoración de card

### Diferenciación por hub

Cada hub tiene stats distintos en el hero:
- Baños: Desde 5.000€ / 2–4 sem. / 40-40-20
- Cocinas: Desde 5.000€ / 3–5 sem. / 40-40-20
- Integrales: 3-col + stats (26.000€, 10-14 sem., 40-40-20) + tesis editorial
- Pisos/Locales/Comunidades: anatomías diferenciadas (ver docs de cada hub)

---

## Familia 2 — Hub de zona

**Referencia canónica:** `zonas/alcala-de-henares.astro`  
**URL pattern:** `/zonas/{slug}/`

### Hero A — estructura canónica

```
2 columnas desde 1024px: 9fr 7fr
  Col izquierda: eyebrow + H1 + tesis + CTAs + trust row
  Col derecha: <nav> con índice tipológico de barrios (matrizData)
```

**H1 pattern — empresa, no servicio:**
```html
<h1>
  <span class="eyebrow">Empresa de reformas en Alcalá de Henares</span>
  <span class="tesis">Tesis editorial específica de la ciudad</span>
</h1>
```

**Índice tipológico (col. derecha):**
```html
<nav aria-label="Barrios por tipología">
  <!-- typoIndex: { barrios, época, note } -->
  <!-- SOLO texto/chip, sin <a> si el barrio no tiene URL propia (R8) -->
</nav>
```

### Datos canónicos del frontmatter

```astro
---
const { ZONES, ZONE_FAQS, RELATED_ZONES } = datos de site.ts
const zone = ZONES.find(z => z.slug === 'alcala-de-henares')

// Datos editoriales específicos de la zona:
const typoIndex = [{ barrios: [], época: '', note: '' }]
const matrizData = [{ label, barrios: [], época, note, implication }] // 3 perfiles
const servicios = [{ caso, nombre, desc, links: [{ href, label }] }] // 5 casos
---
```

### Secciones del body — orden canónico

1. **Hero A** — 2-col, índice tipológico derecha
2. **Servicios editorial** — `.srv-item { 13rem 1fr }`, eyebrow `.srv-caso` (9px terracota)
3. **Matriz de perfiles** — 3 perfiles con implicación para la reforma
4. **Compromisos condensado** — versión compacta, no `variant="full"`
5. **Ring de zonas** — `<nav aria-label="Otras zonas">` compacto (ver patrón)
6. **FAQ** — desde `ZONE_FAQS`
7. **CTA final** — `bg-[#111827]`

### Bloque ring de zonas — patrón canónico obligatorio

```html
<nav aria-label="Otras zonas" class="py-8 bg-[#F9F7F4]">
  <div class="max-w-5xl mx-auto px-4">
    <p class="text-xs font-bold uppercase tracking-widest text-gray-400 mb-4">
      También reformamos en
    </p>
    <div class="flex flex-wrap gap-x-6 gap-y-2">
      <!-- Solo ±2 vecinos del ring, texto plano -->
      <a href="/zonas/torrejon-de-ardoz/" class="text-sm text-gray-600 hover:text-[#A85535] transition-colors">
        Torrejón de Ardoz
      </a>
      <!-- ... 3 vecinos más -->
    </div>
  </div>
</nav>
```

**Reglas del ring:**
- Solo 4 vecinos (±2 del ring canónico)
- Texto plano, sin cards, sin chips SEO
- Anchors: nombre de ciudad simple, NO "Empresa de reformas en X"
- `bg-[#F9F7F4]` compacto, `py-8`

### Ángulo editorial por zona

Cada zona ataca desde un ángulo diferente aunque herede la misma anatomía:
- Alcalá: tipología de barrios (antiguo/nuevo/exterior), perfiles de propietario por stock
- Torrejón: ángulo industrial/residencial mix
- Guadalajara: primera reforma vs. reforma de mejora (propietario más establecido)
- Etc. — los datos locales reales diferencian, no la estructura

---

## Familia 3 — Servicio × Zona (combinada)

**Referencia canónica:** `reforma-cocinas/alcala-de-henares.astro`  
**URL pattern:** `/{servicio}/{zona}/`  
**Nota:** Ruta SIN `/servicios/` intermedio.

### Hero — estructura canónica

```
max-width: 4xl (más estrecho que los hubs)
padding: py-20
background: #111827

No grid multicolumna — bloque centrado/izquierda alineado
```

**H1 pattern — dos tiers:**
```html
<h1>
  <span class="keyword" style="opacity:.38;font-size:clamp(.875rem,1.6vw,1.125rem)">
    Reforma de cocinas en Alcalá de Henares
  </span>
  <span class="tesis" style="font-size:clamp(2rem,6vw,5rem)">
    Tesis editorial específica del cruce servicio×zona
  </span>
</h1>
```

**Stats — `<dl>` semántico, datos de calculator.ts:**
```html
<dl>
  <div><dt>Desde</dt><dd>5.000 €</dd></div>
  <div><dt>Plazo</dt><dd>3-5 sem.</dd></div>
  <div><dt>Precio</dt><dd>Cerrado</dd></div>
</dl>
```

### Secciones del body — orden canónico

1. **Hero** — estrecho, H1 dos tiers + stats semánticos
2. **Condicionantes** — 4 items numerados 01–04, grid `.cond-item { 3rem 1fr }` desde 768px
3. **Precio** — `<table>` con rangos por m² desde calculator.ts + links a hub y calculadora
4. **FAQ** — 4 preguntas `<details>/<summary>` con `<h3>` wrapper
5. **Navegación secundaria** — `<nav aria-label="Páginas relacionadas">` compacta (ver patrón)
6. **CTA final** — `bg-[#111827]`, py-16, centrado, CTA terracota

### Navegación secundaria — patrón canónico

```html
<nav aria-label="Páginas relacionadas" class="py-8 bg-[#F9F7F4] border-t border-gray-200">
  <div class="max-w-4xl mx-auto px-4 sm:px-6 flex flex-wrap items-center gap-x-8 gap-y-3">
    <span class="text-xs font-bold uppercase tracking-widest text-gray-400 flex-shrink-0">
      Ver también
    </span>
    <a href="/servicios/reforma-cocinas/" class="text-sm text-gray-500 hover:text-[#A85535] transition-colors">
      Reforma de cocinas en el Corredor del Henares
    </a>
    <a href="/zonas/alcala-de-henares/" class="text-sm text-gray-500 hover:text-[#A85535] transition-colors">
      Empresa de reformas en Alcalá de Henares
    </a>
    <a href="/reformas-integrales/alcala-de-henares/" class="text-sm text-gray-500 hover:text-[#A85535] transition-colors">
      Reforma integral en Alcalá
    </a>
  </div>
</nav>
```

**Reglas del nav secundario:**
- Enlaza a: hub de servicio + hub de zona + 1-2 combinadas hermanas pertinentes
- Nunca a Home ni a páginas inexistentes
- Texto plano, sin cards
- `max-w-4xl` para mantener coherencia con el hero

### Breadcrumb obligatorio

```html
<!-- Inicio → Reforma de Cocinas → Alcalá de Henares -->
<nav aria-label="Breadcrumb">
  <a href="/">Inicio</a> →
  <a href="/servicios/reforma-cocinas/">Reforma de Cocinas</a> →
  <span>Alcalá de Henares</span>
</nav>
```

### Ángulo editorial por combinada

Misma anatomía, diferente ángulo de ataque:
- Cocinas × Alcalá: condicionantes técnicos (extracción, distribución de vivienda antigua)
- Baños × Torrejón: condicionante de bañera → ducha en vivienda de los 80
- Integrales × Meco: primera reforma en vivienda de obra nueva post-COVID
- Los condicionantes numerados deben ser reales para ESA combinación, no copy-paste

---

## Reglas de herencia entre familias

### Lo que SÍ se hereda

| Elemento | Hub servicio | Hub zona | Combinada |
|---|---|---|---|
| ADN visual (paleta, tipo, DEC) | ✓ | ✓ | ✓ |
| CTA final `bg-[#111827]` | ✓ | ✓ | ✓ |
| Tarjeta clicable `after:absolute after:inset-0` | ✓ | ✓ | ✓ |
| `<Compromisos>` | `variant="full"` | condensado | no aplica |
| FAQ `<details>/<h3>` | ✓ | ✓ | ✓ |
| Stats desde `calculator.ts` | hero | no hero | hero `<dl>` |

### Lo que NO se copia nunca

- El H1 de Baños no es template para Cocinas (ni siquiera la estructura doble/simple)
- La tesis del hero de Alcalá no es template para Torrejón
- Los condicionantes de Cocinas×Alcalá no son válidos para Baños×Alcalá
- El número de columnas del hero no es fijo: cada hub determina las suyas según la tesis

### Falsos universales que deben evitarse

- Mismo `hero-grid` con 3 cols + stats en todos los hubs → cada hub decide según ángulo
- Mismo `compromisos-apertura-grid` con "2" editorial en todos → solo donde lo justifica el tono
- Misma thesis `clamp(2.5rem,9.5vw,8.5rem)` en todos → tesis más larga = size menor
- Mismos pseudo-stats (Visita técnica / Precio cerrado) en todos → solo datos reales de calculator.ts

---

## Tokens CSS compartidos por todas las familias

```css
/* Paleta */
--brand:    #A85535;   /* terracota */
--dark:     #111827;   /* negro editorial */
--light:    #F9F7F4;   /* fondo cálido */
--muted:    #9CA3AF;   /* gris texto secundario */

/* Tipografía display */
--h1-display: clamp(2.5rem, 9.5vw, 8.5rem);    /* Hub servicio, keyword=headline */
--letter-spacing-display: -0.04em;
--line-height-display: 0.88;

/* Eyebrow */
--eyebrow-size: 10px;
--eyebrow-tracking: .1em;

/* CTA */
/* Sin border-radius (DEC D01) */
/* Sin box-shadow (DEC D05/D06) */
```
