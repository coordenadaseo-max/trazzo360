# VISUAL-ROLLOUT-MAP — Mapa Visual de Despliegue · Trazzo360

> **Fuente de verdad operativa para diseño visual, composición y estado de rollout.**
>
> Leer siempre junto a `DESIGN.md` (sistema de tokens) y `docs/DECISION-REGISTER.md` (decisiones §D).
>
> Antes de cualquier trabajo visual: verificar el estado V1/V2/V3 de la página objetivo en §7.

---

## 1. ADN Compositivo — "Austeridad Real + Contrato Editorial"

### 1.1 North Star Visual

El sitio se lee como un **contrato entre profesionales**, no como un catálogo de tendencias. Cada elemento que aparece en pantalla debe poder responder:
> "¿Por qué estás aquí? ¿Qué información transmites?"

Si un elemento no transmite información, no existe.

**Consecuencias directas:**
- Sin decoración que no sea estructura (sin barras flotantes, sin sombras en elementos planos)
- El espacio en blanco es parte del mensaje, no ausencia de contenido
- La terracota es señal técnica, no ambiente de marca
- La tipografía es arquitectura, no ornamento

### 1.2 Paleta — Tokens Canónicos

| Token | Hex | Rol | Regla de uso |
|---|---|---|---|
| `brand` (Terracota del Corredor) | #A85535 | Acento primario | < 10% de cualquier viewport. Solo acentos puntuales, nunca fondos de sección. |
| `brand-dark` (Terracota Profunda) | #8a4229 | Hover / profundidad | Botones en hover. No usar como sustituto de brand en contextos de fondo. |
| `dark` (Noche del Henares) | #111827 | Fondo dark / texto principal | Fondos de sección CTA, texto sobre claro, hover de texto en nav. |
| `light` (Pared Encalada) | #F9F7F4 | Fondo claro / secciones alternadas | Secciones de contraste suave. Warm-bias deliberado (no blanco puro). |
| `muted` (Gris Mortero) | #6B7280 | Texto secundario / placeholders | Subtítulos, etiquetas, texto de apoyo. |
| `white` (Blanco de Obra) | #FFFFFF | Fondos de tarjetas / superficies | Tarjetas sobre fondo claro. No usar como fondo de hero. |
| `whatsapp` (Verde WhatsApp) | #25D366 | Solo WhatsApp | Solo en botones y enlaces de WhatsApp. Nunca en otro contexto. |

### 1.3 Tipografía

| Rol | Tamaño | Peso | Tracking | Uso |
|---|---|---|---|---|
| Display | 3–4.5rem (clamp) | 900 | -0.02em | Solo H1 del hero. Una vez por página. |
| H2 | 1.875rem / 2.25rem | 800 | -0.02em | Títulos de sección |
| H3 | 1.25rem / 1.5rem | 700 | Normal | Subsecciones, títulos de tarjetas |
| Body | 1rem / 1.0625rem | 400 | Normal | Texto de párrafo |
| Small | 0.875rem | 400/500 | Normal | Etiquetas, captions, texto de apoyo |

**Reglas absolutas:**
- No italic/cursiva en ningún contexto (La Regla del Cero Italic)
- No más de un tamaño Display por página (La Regla del Único Display)
- Texto en mayúsculas: solo en etiquetas/eyebrows cortas con letra-spacing explícito

### 1.4 Layout Base

- Contenedor máximo: `max-w-7xl` (1280px)
- Padding de sección estándar: `py-16` (hero y CTA final: `py-20` a `py-28`)
- Padding lateral: `px-4` responsive hasta `px-6` en breakpoints mayores
- Grid de contenido principal: típicamente 2 columnas en desktop (content + aside)
- Sin `border-radius` en botones CTA primarios
- Sin shadow en elementos que no flotan (La Regla del Plano por Defecto)

---

## 2. Reglas Globales Vigentes

Estas reglas aplican a TODAS las páginas sin excepción. No pueden sobreescribirse por necesidades locales.

| Regla | Qué significa | Cómo se verifica |
|---|---|---|
| **La Regla del Acento Escaso** | Terracota < 10% de cualquier viewport en cualquier estado | Grep `bg-[#A85535]` + inspeccion visual |
| **La Regla del Verde Cerrado** | #25D366 solo en elementos de WhatsApp | Grep `#25D366` o `whatsapp` en clases |
| **La Regla del Único Display** | Solo H1 del hero usa tamaño 3–4.5rem | Una sola instancia de `clamp(3rem` o `text-5xl/6xl` en hero |
| **La Regla del Cero Italic** | No italic/cursiva en ningún elemento | Grep `italic\|font-italic\|font-style` |
| **La Regla del Plano por Defecto** | No shadow en elementos no flotantes | Grep `shadow-md\|shadow-sm` excepto header y nav dropdown |
| **La Regla del Rectángulo Comprometido** | border-radius: 0 en CTA primarios | `rounded-` solo en WhatsApp button (`rounded-sm`) |
| **Bullets cuadrados 6×6px** | Implementación CSS ::before, no caracteres tipográficos | Ver CLAUDE.md §8.1 |
| **No transition-all** | Solo transition-colors o transition-opacity | Grep `transition-all` |
| **No hover:shadow en cards** | Las tarjetas no elevan en hover | Grep `hover:shadow` |
| **Condicional teléfono/WhatsApp** | No renderizar si `SITE.phone === 'TU_TELEFONO'` | Verificar en `dist/` con grep |

---

## 3. Patrones Prohibidos (No reproducir en ninguna página nueva)

Estos patrones existían en la implementación inicial y fueron eliminados en los Lotes A-F. **Si aparecen de nuevo en algún archivo, es una regresión.**

| Patrón | Por qué está prohibido | Cómo detectarlo |
|---|---|---|
| `<div class="w-12 h-1 bg-[#A85535]">` | Barra decorativa sin información. Viola ADN. | Grep `w-12 h-1` |
| `text-[#A85535]` en H1 | Viola La Regla del Acento Escaso. El H1 compite con los CTAs. | Grep `text-\[#A85535\]` cerca de `<h1` |
| `bg-[#A85535]` en sección completa | La terracota como fondo viola el límite 10%. | Grep `bg-\[#A85535\]` en elementos section/div contenedor |
| `rounded-full` en bullets de lista | Los bullets del sistema son cuadrados (6×6px, border-radius: 0). | Grep `rounded-full` en `li::before` |
| `transition-all` | Anima propiedades innecesarias. | Grep `transition-all` |
| `hover:shadow-md` / `hover:shadow-sm` en tarjetas | Las tarjetas no flotan en hover. | Grep `hover:shadow` |
| WhatsApp sin condicional | Renderiza `wa.me/TU_TELEFONO` roto. | Grep `wa.me` sin condición |
| `SITE.address` en aviso-legal/privacidad | No es domicilio social legal. | Grep `SITE.address` en aviso-legal.astro y privacidad.astro |
| `aggregateRating` sin condición `reviewCount > 0` | Invalida el schema. | Grep `aggregateRating` sin condición |

---

## 4. Recursos Excepcionales (Solo en Contextos Justificados)

Estos elementos existen en el sistema pero tienen restricciones de uso muy concretas.

| Recurso | Dónde aplica | Dónde NO aplica |
|---|---|---|
| `border-l-4 border-[#A85535]` (borde editorial en eyebrow) | Hero de Home (variante A2). Posiblemente en hubs con ángulo A1 claro. | No en elementos de cuerpo de página, no en tarjetas, no en listas. |
| `rounded-sm` en botones | Solo botón WhatsApp. | CTA primarios y secundarios no WhatsApp. |
| `shadow-sm` en header | Solo el header cuando está scrolled o fijo. | No en secciones ni en tarjetas. |
| `shadow-xl` en nav dropdown | Solo el dropdown de navegación flotante. | No en otros elementos. |
| Bullets con `border-color: #A85535` (variante compromisos) | Solo la lista de compromisos contractuales de máximo peso. | No para listas normales de beneficios o características. |

---

## 5. Qué es Global vs. Qué No

### 5.1 Componentes Globales (aplican a todas las páginas)

| Componente | Ruta | Descripción |
|---|---|---|
| Header | `src/components/Header.astro` | Nav principal con logo, menú, WhatsApp condicional |
| Footer | `src/components/Footer.astro` | Links, contacto, legal |
| Layout | `src/layouts/Layout.astro` | Estructura HTML, meta, schema base, WhatsApp flotante condicional |
| WhatsAppBtn | `src/components/WhatsAppBtn.astro` | Botón flotante WhatsApp (condicional) |
| Bullets CSS | `src/styles/global.css` o inline en Layout | Sistema de bullets de marca |

### 5.2 Qué NO debe Globalizarse

Elementos que deben permanecer como variantes por tipo de página:
- El ángulo editorial del hero: varía por servicio, zona y nivel S
- La composición del hero (A1 / A2 / A3): no todos los heroes llevan el mismo tratamiento
- El bloque de precios: depende del tipo de servicio (€/m² vs por tramo)
- El timeline visual: varía por servicio
- Los bloques de zona local: específicos por municipio
- Las FAQs: únicas por página (no boilerplate)

---

## 6. Familias Visuales por Servicio

### 6.1 Reforma de Baños — Estado V1

**Tesis A1 canónica:** Lo que no se ve determina si el baño queda bien resuelto. Impermeabilización, instalaciones y secuencia de ejecución antes del acabado. Cuando la vivienda solo tiene un baño, la planificación del acceso forma parte de esa ejecución.

**Subángulo de convivencia** (potente, no la tesis total): "Si solo tienes un baño."

**Composición canónica:**
- Hero: H1 con tamaño Display + subtítulo que engancha en lo no visible (impermeabilización, secuencia) antes de hablar de plazos
- Bloque de precios: por tramo de superficie en tabla (`overflow-x: auto` requerido)
- Timeline visual con semanas y punto de inflexión marcados
- Bloque de convivencia: baño único, comunicación diaria del horario, cuándo se recupera el acceso

### 6.2 Reforma de Cocinas — Estado V1

**Tesis A1 canónica:** La distribución se decide antes que los muebles y la planificación previa determina cómo se atraviesan las semanas sin cocina.

**Subángulos** (sostienen la tesis, no la reemplazan): instalaciones existentes, extracción, electricidad, materiales preparados antes de obra, recuperación de funcionalidad.

**Composición canónica (golden reference):** `src/pages/reforma-cocinas/alcala-de-henares.astro`
- Hero: H1 + subtítulo que abre con distribución + planificación, no con instalaciones
- Bloque de distribución: decisiones antes de elegir muebles
- Bloque de convivencia: las semanas sin cocina, qué se hace en cada una
- Bloque técnico: instalaciones específicas (60-70, fontanería, extracción)
- Precios por tramo en tabla; timeline 3-5 semanas (esencial)

### 6.3 Reformas Integrales — Estado V2

**Tesis A1 canónica (pendiente de despliegue):** La coordinación entre gremios es parte central del producto. Un único interlocutor coordina la obra completa.

**Ángulo actual:** A2 — listado de servicios sin eje narrativo dominante.
**Pendiente editorial:** El 40/40/20 puede funcionar como subángulo de proceso, no como tesis principal.

### 6.4 Reforma de Pisos — Estado V2

**Tesis A1 canónica (pendiente de despliegue):** Diagnóstico antes que alcance. El estado de la vivienda y sus instalaciones determina qué conservar, qué renovar y cuándo ir a integral.

**Ángulo actual:** A2 — suelos, pintura, carpintería sin eje de diagnóstico.

### 6.5 Locales Comerciales — Estado V2

**Tesis A1 canónica (pendiente de despliegue):** Actividad antes que diseño. El tipo de negocio determina instalaciones, condicionantes y alcance antes de hablar de distribución.

**Ángulo actual:** A2 — descripción de servicios aplicables a locales sin diagnóstico por actividad.

### 6.6 Comunidades de Vecinos — Estado V2

**Tesis A1 canónica (pendiente de despliegue):** Decisión + organización + ejecución. La reforma en comunidad empieza con la propuesta para junta, antes de poner un pie en la obra.

**Ángulo actual:** A2 — servicios para comunidades sin el eje de coordinación colectiva.

---

## 7. Estado de Rollout por Página

**Leyenda:**
- **V1** = Dirección artística desplegada: composición nueva + ADN correcto + ángulo editorial A1 o A2
- **V2** = ADN corregido (Lote A-B), composición parcialmente legacy, sin composición editorial nueva
- **V3** = Visual legacy: no actualizado a ADN actual (solo páginas de utilidad sin inversión editorial)

### 7.1 Matriz de Cobertura

| Página / Template | Estado | Notas |
|---|---|---|
| **Home** (`index.astro`) | ✅ **V1** | Hero A2 (borde editorial), trust "1 responsable", zonas editoriales |
| **Baños** hub (`servicios/reforma-banos`) | ✅ **V1** | Hero C con timeline + precio editorial + vida durante obra |
| **Cocinas** hub (`servicios/reforma-cocinas`) | ✅ **V1** | Ángulo A1, precio por tramo, plazos 3-5 sem |
| **Integrales** hub (`servicios/reformas-integrales`) | ⚠ **V2** | ADN correcto, composición legacy, ángulo A2 |
| **Pisos** hub (`servicios/reforma-pisos`) | ⚠ **V2** | ADN correcto, composición legacy, ángulo A2 |
| **Locales** hub (`servicios/locales-comerciales`) | ⚠ **V2** | ADN correcto, composición legacy, ángulo A2 |
| **Comunidades** hub (`servicios/comunidades-vecinos`) | ⚠ **V2** | ADN correcto, composición legacy, ángulo A2 |
| **Zona Alcalá** (`zonas/alcala-de-henares.astro`) | ✅ **V1** | Standalone golden reference para zonas |
| **Zonas template** (`zonas/[slug].astro`) | ⚠ **V2** | Template con datos locales pero composición legacy |
| **Cocinas×Alcalá** (`reforma-cocinas/alcala-de-henares.astro`) | ✅ **V1** | Standalone golden reference para S1 |
| **Combinadas template** (`[servicio]/[barrio].astro`) | ⚠ **V2** | Template corregido ADN, composición legacy |
| **Como trabajamos** | ⚠ **V2** | ADN correcto, contenido editorial |
| **Calculadora** | ⚠ **V2** | Funcional, sin revisión editorial |
| **Guías** | ⚠ **V2** | Contenido largo, ADN correcto |
| **Proyectos** | ❌ **V3** | Placeholder, sin fotos reales |
| **Contacto** | ⚠ **V2** | Funcional, formulario sin Formspree real |
| **404** | ❌ **V3** | Legacy, sin actualizar |
| **Aviso legal / Privacidad** | ⚠ **V2** | Domicilio placeholder [NOT COMMITTED aún] |

### 7.2 Estadísticas de Rollout

| Estado | Páginas | % del total |
|---|---|---|
| V1 (dirección completa) | ~5 | ~6% |
| V2 (ADN correcto, composición legacy) | ~75 | ~87% |
| V3 (legacy) | ~6 | ~7% |

**Interpretación:** El ADN está corregido globalmente (V2). La evolución a V1 requiere trabajo editorial de ángulo y composición en cada hub, que es tarea post-lanzamiento.

---

## 8. Golden References (Páginas de Referencia Canónica)

Las siguientes páginas son la referencia de calidad para nuevos desarrollos. **Antes de construir una composición nueva, verificar que sigue el patrón de la golden reference correspondiente.**

| Referencia | Ruta | Para qué sirve |
|---|---|---|
| **Home V1** | `src/pages/index.astro` | Referencia de: hero A2, trust block editorial, zona block editorial |
| **Zona Alcalá V1** | `src/pages/zonas/alcala-de-henares.astro` | Referencia de: composición de hub de zona S1, contenido territorial |
| **Cocinas×Alcalá V1** | `src/pages/reforma-cocinas/alcala-de-henares.astro` | Referencia de: composición de combinada S1, ángulo técnico local |
| **Baños hub V1** | `src/pages/servicios/reforma-banos` (via slug) | Referencia de: hero con plazo + precio editorial, vida durante obra |

---

## 9. Territorio Visual — S-level y Zonas

### 9.1 Impacto del S-level en la Composición

| S-level | Composición | Contenido local | Datos técnicos |
|---|---|---|---|
| **S1** | Golden reference: standalone, composición propia | Datos específicos del municipio: tipología, barrios, décadas, normativa local | Criterio técnico diferenciado: problemática específica de ese tipo de inmueble |
| **S2** | Template con datos locales parametrizados | Datos territoriales generales del municipio | Criterio técnico general del servicio |
| **S3** | Template compacto transaccional | Descripción mínima, CTA directo | Sin diferenciación territorial |

### 9.2 Qué No Escalar de las Golden References a los Templates

Las golden references (Alcalá zona, cocinas×Alcalá) tienen composiciones específicas que no deben aplicarse mecánicamente al template porque dependen del contenido S1 específico:
- Bloques con datos locales de archivo (parque inmobiliario de los 60-70)
- Párrafos con problemática técnica específica del municipio
- Anchors con barrios y zonas específicas de la ciudad

El template S2 usa datos locales genéricos pero no debe pretender ser S1.

---

## 10. Ángulos de Composición (A-level)

| Nivel | Descripción | Servicios actuales | Impacto en composición |
|---|---|---|---|
| **A1** | Tesis editorial clara: la página articula un problema específico del cliente, un ángulo narrativo singular y una tesis diferencial verificable. Todo el contenido se ordena alrededor de esa tesis. | Baños, Cocinas | Hero con tesis como subtítulo, bloques ordenados por relevancia al ángulo, no por convención de formato |
| **A2** | Ángulo diluido: información correcta y completa, pero sin tesis narrativa dominante. La página describe el servicio en lugar de articular por qué este servicio importa aquí. | Integrales, Pisos, Locales, Comunidades (actual) | Hero descriptivo, bloques informativos sin jerarquía narrativa clara |
| **A3** | Genérico: copy que podría pertenecer a cualquier empresa de reformas de cualquier ciudad. Sin problema del cliente, sin ángulo, sin diferenciación técnica o territorial. | Ninguno actualmente | A evitar. Requiere revisión editorial completa antes de ir a producción. |

**Las cuatro tesis A1 canónicas para servicios en A2** (ver TRAZZO360-SYSTEM.md §5.2 para detalle completo):

| Servicio | Tesis A1 canónica |
|---|---|
| Reforma de baños | Antes del acabado importan la impermeabilización, instalaciones y secuencia. Cuando la vivienda solo tiene un baño, la planificación del acceso forma parte de esa ejecución. |
| Reforma de cocinas | La distribución se decide antes que los muebles y la planificación previa determina cómo se atraviesan las semanas sin cocina. |
| Reformas integrales | Un único interlocutor coordina la obra completa y las dependencias entre gremios: el cliente no tiene que coordinar ni mediar entre los distintos gremios. |
| Reforma de pisos | El estado de la vivienda y de sus instalaciones determina qué merece conservarse, qué renovar, y cuándo tiene sentido pasar a reforma integral. |
| Locales comerciales | El tipo de actividad determina las instalaciones, los condicionantes técnicos y el alcance real de la reforma antes de hablar de distribución o acabados. |
| Comunidades de vecinos | La reforma empieza antes de la obra: propuesta para junta, alcance, coordinación de accesos y ejecución planificada para mantener el uso del edificio y gestionar las afecciones y accesos durante los trabajos. |
---

## 11. Decisiones Visuales Pendientes

| # | Decisión pendiente | Afecta a | Estado |
|---|---|---|---|
| PV-01 | Em-dash en prosa editorial: 28 ficheros con `—` son deuda de QA registrada en DECISION-REGISTER.md (DT-F01). Prohibición ya APPROVED en DEC-B03. No blocker de lanzamiento. | Guías + FAQs de hubs | **DEUDA TECNICA** (ver DECISION-REGISTER §F) |
| PV-02 | Evolución de hubs V2 a V1: ¿cuándo y en qué orden? (Integrales, Pisos, Locales, Comunidades) | 4 hubs de servicio | **PENDIENTE priorización** |
| PV-03 | Fotos reales de obra: cuando lleguen, definir composición del bloque de proyectos (ahora en V3) | Proyectos, hubs | **PENDIENTE titular** |
| PV-04 | AUTHOR.name: cuando la empresa se registre, sustituir null por nombre real en trust.ts | Como trabajamos, footer | **PENDIENTE titular** |
| PV-05 | yearsInTrade: cuando el titular confirme la cifra, descomentar bloques en index.astro:287 y como-trabajamos.astro:93 | Home, Como trabajamos | **PENDIENTE titular** |

---

*Última actualización: 2026-08-22. Actualizar §7 (matriz de rollout) cada vez que una página pase de V2 a V1.*
