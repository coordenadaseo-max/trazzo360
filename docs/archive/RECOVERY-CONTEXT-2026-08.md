# ⚠ HISTÓRICO — Contexto de Recuperación de Sesión · Agosto 2026

> **ESTE DOCUMENTO ES UN ARCHIVO HISTÓRICO.**
> No es fuente operativa de verdad. Contiene razonamiento y análisis de sesiones anteriores,
> parte del cual ha sido superado por decisiones posteriores o por la implementación real.
>
> Fuentes operativas vigentes (por orden de precedencia):
> 1. `src/data/calculator.ts` — precios y plazos
> 2. `PRODUCT.md` — definición de producto
> 3. `DESIGN.md` — sistema visual
> 4. `CLAUDE.md` — reglas de proyecto
> 5. `docs/TRAZZO360-SYSTEM.md` — sistema operativo canónico
> 6. `docs/VISUAL-ROLLOUT-MAP.md` — mapa visual de despliegue
> 7. `docs/DECISION-REGISTER.md` — registro de decisiones
>
> Ante cualquier contradicción entre este archivo y las fuentes anteriores: **las fuentes anteriores ganan siempre.**

---

## Origen de este documento

Este archivo agrupa el razonamiento acumulado entre sesiones, transmitido en agosto de 2026 para recuperar el contexto de diseño y contenido del proyecto. Se preserva para referencia arqueológica del proceso creativo, no como guía operativa.

---

## A. ADN Visual — Análisis Fundacional

### A.1 North Star Visual

**"Austeridad Real + Contrato Editorial"**

La propuesta visual surgió de rechazar la estética habitual de empresas de reformas: antes/después saturados, colores llamativos, galería de proyectos genérica. La alternativa: un sitio que se lea como un contrato entre profesionales. Sin adornos, sin promesas implícitas en el diseño. Lo que se ve es exactamente lo que se obtiene.

Este North Star implica:
- Ningún elemento decorativo que no aporte información
- Tipografía como estructura, no como ornamento
- Color terracota como señal, no como ambiente
- Espacios en blanco como parte del mensaje

### A.2 "La Obra que Cumple" (North Star editorial)

Surgió como contrapunto a "el sueño de tu reforma". El cliente no quiere soñar; quiere que lo que se firma se cumpla. El copy arranca desde ahí: criterio técnico, transparencia de precio, persona responsable identificada.

No es un slogan. Es la pregunta de control para cualquier decisión de copy:
> ¿Este texto habla de lo que cumplimos o de lo que prometemos?

### A.3 Paleta — Justificación Original

La terracota (#A85535) fue elegida por su asociación con materiales de construcción (ladrillo, óxido, barro cocido) sin caer en el azul-corporativo-tecnología ni en el verde-natural-sostenibilidad. Es un color de trabajo, no de marca.

La regla del acento escaso (<10% del viewport) nació de una observación crítica: el terracota como color ambiente connota calidez decorativa; el terracota como acento puntual connota señalización técnica. El sitio necesita lo segundo.

El fondo #F9F7F4 (Pared Encalada) no es blanco puro por la misma razón: el blanco clínico contradice la materialidad de la obra. El ligerísimo warm-bias del fondo coloca visualmente al usuario en un espacio construido, no en un hospital.

### A.4 Tipografía — Decisión Original

La regla del Display único (H1 hero, tamaño 3–4.5rem, peso 900) surgió de analizar páginas de reformas donde cada sección compite en tamaño con la siguiente. El resultado es ruido visual que el usuario aprende a ignorar. La solución inversa: un solo grito, el resto en murmullos estructurados.

---

## B. Análisis por Lotes — Historia de Implementación

### B.1 Lote A — ADN Visual Global + Saneamiento de Datos

**Problema detectado:** El build original tenía inconsistencias críticas en datos (precios, plazos, municipio principal) y violaciones del ADN visual en múltiples templates.

**Correcciones de datos realizadas:**
- `priceFrom` baños corregido de '3.200' a '2.800' (mínimo real: hasta 4m² = 2.800–3.800€)
- `priceFrom` cocinas corregido de '5.500' a '5.000' (mínimo real: hasta 8m² = 5.000–7.500€)
- `priceFrom` integrales corregido de '18.000' a '26.000' (40m² × 650€/m² esencial)
- Plazos cocinas corregidos de '2-3 semanas' a '3-5 semanas' (en calculator.ts: [3,5] semanas esencial)
- `mainCity` verificado como 'Torrejón de Ardoz' (no Alcalá)

**Correcciones visuales realizadas:**
- Eliminadas barras decorativas `w-12 h-1 bg-[#A85535]` de heroes y secciones
- Eliminado `text-[#A85535]` en H1 (violación de "La Regla del Acento Escaso")
- Corregido `CTA final` de `bg-[#A85535]` a `bg-[#111827]` (terracota como fondo de sección = prohibido)
- Eliminados `rounded-full` bullets (sustituidos por 6×6px cuadrado CSS)
- Eliminado `transition-all` (sustituido por `transition-colors` / `transition-opacity`)
- Eliminado `hover:shadow-md` / `hover:shadow-sm` en cards

### B.2 Lote B — ADN Visual Hubs + Datos de Contenido

**Contexto:** Con el ADN saneado globalmente, Lote B se focalizó en los 6 hubs de servicio para que tuvieran contenido propio (no placeholder) y composición consistente con el sistema.

**Resultado:** Hubs actualizados con copy editorial, precios orientativos alineados con calculator.ts, y composición V2 (ADN correcto, composición legacy en algunos casos).

### B.3 Lote C — Zonas (7 páginas hub de zona)

**Decisión clave:** Las 7 páginas de zona `/zonas/[slug]/` usan un template único con composición condicional. La página `zonas/alcala-de-henares.astro` se convirtió en standalone reference (no usa el template) para poder servir como golden reference de composición V1.

**Patrón:** La zona de Alcalá merece tratamiento diferenciado por ser la mayor ciudad del Corredor y tener mayor volumen de búsqueda. El template con datos locales específicos funciona para las demás zonas.

### B.4 Lote D — S-Level en Combinadas

**Sistema de niveles de especificidad (S-level):**
- **S1:** Página con datos locales específicos + criterio técnico diferenciado. Solo 3 municipios lo justifican por volumen: Alcalá de Henares (reformas-integrales, reforma-cocinas, locales-comerciales, comunidades-vecinos). Requiere investigación local real.
- **S2:** Página territorial con criterio técnico general. La mayoría de combinadas (43 de 48).
- **S3:** Página transaccional compacta, sin diferenciación territorial suficiente. Solo: camarma-de-esteruelas × locales-comerciales.

**Fichero canónico:** `src/data/content/levels.ts`

### B.5 Lote E — Páginas Restantes + Claims

**Alcance:** Páginas de utilidad (como-trabajamos, calculadora, guías, contacto, legales).

**Corrección crítica de claims:**
- Eliminadas referencias a `wa.me/TU_TELEFONO` (WhatsApp aparecía sin condición en Header.astro desktop)
- Añadido condicional `{SITE.whatsapp !== 'TU_TELEFONO' && (...)}` en Header.astro
- Revisadas páginas legales (aviso-legal, privacidad): `SITE.address` ('Corredor del Henares, Madrid') no es domicilio social legal; reemplazado por `[Completar con domicilio social real]`

### B.6 Lote F — Auditoría Global Preproducción

**Resultado:**
- 86 páginas totales: 71 indexables (sitemap) + 14 noindex + 1 `404.html`
- 0 instancias de `wa.me` sin condición
- 0 instancias de claims de 24h/48h
- 0 instancias de `orange-400`
- Playwright regression: 7 checks pasados (header móvil/desktop, tablas móvil/desktop)
- Estado: **READY FOR PRE-LAUNCH DATA**

**Pendiente de decisión (em-dash):** 28 ficheros de contenido editorial tienen `—` en FAQs y párrafos. CLAUDE.md prohíbe el em-dash en "copy e interfaz". Decisión pendiente del titular: ¿la prohibición se extiende a prosa editorial en guías?

---

## C. Análisis Visual — Documentos de Dirección Artística

### C.1 Critique Document

El `.impeccable/critique/` contiene el análisis de las páginas existentes que identificó los patrones problemáticos:
- Competencia de terracota: múltiples elementos terracota en el mismo viewport sin jerarquía
- Sobrecarga de CTA: botones terracota + WhatsApp verde + CTA final terracota = triángulo de ruido
- Barras decorativas que fragmentan la lectura sin añadir información
- Bullets decorativos (rounded-full) que contradicen la austeridad prometida

### C.2 Direction Document (`.impeccable/direction.md`)

El documento de dirección artística estableció:
- "El silencio como argumento": lo que NO está en la página (sin galería de fotos sin obras, sin estrellas de valoración sin reseñas reales) es parte del mensaje de honestidad
- "La tipografía como arquitectura": la jerarquía tipográfica debe reflejar la importancia informativa, no la urgencia comercial
- "El contrato visual": cada elemento que aparece en pantalla debe poder responder a "¿por qué estás aquí?"

### C.3 Home — Implementación V1

**Hero (variante A2 — Sigilo con borde editorial):**
El borde izquierdo editorial (`border-l-4 border-[#A85535]`) en la eyebrow del hero fue una solución para mantener el acento sin recurrir a color de fondo. El A2 es "sigilo + línea editorial": el color se insinúa, no se proclama.

**Trust block:**
En lugar de "12 años de empresa" (dato falso), se implementó "1 responsable de obra" como dato verificable. El número "1" tiene más peso que cualquier número de años inflado.

**Zonas block:**
La frase editorial "N municipios. 1 empresa." consolidó el ángulo territorial sin afirmaciones comparativas.

---

## D. Ángulos de Copy — Análisis por Servicio

### D.1 Reforma de Baños

**Ángulo A1:** "El baño único"
El miedo real del cliente es quedarse sin baño durante 3 semanas. El ángulo correcto no es "baños modernos" sino "coordinamos para que el miércoles ya puedas ducharte". La planificación del baño único (una sola instalación en el piso) merece mención explícita: se planifica desde el primer día, no como excepción.

**Elementos editoriales V1 para baños:**
- Hero con timeline editorial visible
- Precio editorial ("Desde X€" con tramo explicado)
- Bloque "Hero C" con énfasis en vida cotidiana durante la obra

### D.2 Reforma de Cocinas

**Ángulo A1:** "La cocina funcional antes que la cocina de diseño"
El cliente teme: obra larga, cocina inutilizable, presupuesto que se dispara. El ángulo: cocina funcional en plazos concretos (3-5 semanas esencial), precio por tramo de superficie real.

**Alcalá × Cocinas como standalone:**
Alcalá tiene el mayor parque de viviendas de los 60-70 en el Corredor. Las cocinas de esa época tienen una problemática específica (instalaciones eléctricas obsoletas, fontanería sin manguitos). Eso justifica S1 + standalone.

### D.3 Reformas Integrales

**Ángulo potencial A1:** "La obra sin sorpresas en 3 fases"
El sistema de pagos 40/40/20 es el ángulo diferencial: nadie paga todo antes de empezar ni todo al final. Cada fase tiene entregable verificable. Sin embargo, la implementación actual está en A2 (ángulo diluido por listado de servicios).

### D.4 Reforma de Pisos

**Estado A2:** Ángulo genérico (suelos, pintura, carpintería). Diferenciación potencial: "El piso que se reforma viviendo en él vs el piso vacío". Los plazos cortos (5-8 semanas esencial) son el argumento diferencial frente a integrales.

### D.5 Locales Comerciales

**Estado A2:** Falta el ángulo específico de locales. Potencial: "La reforma que no cierra tu local más días de los necesarios". El cliente comercial tiene costes directos por cada día cerrado. Eso es el ángulo real.

### D.6 Comunidades de Vecinos

**Estado A2:** Ángulo potencial: "La empresa que habla con el presidente de la comunidad, no solo con el administrador". El dolor específico: coordinar con múltiples partes, que los vecinos entiendan qué pasa, que las zonas comunes queden mejor de lo que estaban.

---

## E. Fórmula Servicio × Zona — Razonamiento

### E.1 Por qué 48 combinadas y no más

El Corredor del Henares tiene más de 8 municipios, pero solo 8 tienen volumen de búsqueda suficiente para justificar una página combinada. La decisión fue: mejor 48 páginas bien diferenciadas que 100 páginas de contenido delgado.

Los 8 municipios: Torrejón de Ardoz, Alcalá de Henares, Coslada, San Fernando de Henares, Mejorada del Campo, Velilla de San Antonio, Loeches, Camarma de Esteruelas.

Los 6 servicios: reformas-integrales, reforma-pisos, reforma-banos, reforma-cocinas, locales-comerciales, comunidades-vecinos.

### E.2 Razonamiento S-level en Alcalá

Alcalá justifica S1 (datos locales específicos + criterio técnico diferenciado) porque:
1. Mayor ciudad del Corredor (200k+ hab) → mayor volumen de búsqueda
2. Parque inmobiliario diferenciado: grandes bloques de los 60-70 con problemática técnica propia
3. Zona universitaria: locales y pisos con rotación alta, reformas de adecuación frecuentes
4. Polígonos industriales: comunidades con naves y locales comerciales

### E.3 Razonamiento S3 para Camarma × Locales

Camarma de Esteruelas tiene muy baja densidad de locales comerciales y búsqueda mínima para ese servicio. Una página S3 (transaccional compacta) es suficiente y no merece inversión editorial.

---

## F. Blockers Pre-Launch — Contexto

### F.1 Por qué AUTHOR.yearsInTrade no se renderiza

Los 15 años son la experiencia de la persona detrás de Trazzo360. Pero la empresa (Trazzo360 como entidad jurídica) no existe oficialmente todavía. Renderizar "15 años de experiencia" sin contexto podría malinterpretarse como "15 años de empresa", lo que sería falso.

La solución: parametrizado, condicionalmente no-renderizado. Cuando el titular confirme la cifra y la empresa esté registrada, se descomenta un bloque marcado con `PRE-LAUNCH BLOCKER`.

### F.2 Por qué `SITE.address` no puede ser domicilio social

`SITE.address = 'Corredor del Henares, Madrid'` es una descripción geográfica del área de servicio, no una dirección postal verificable. Las páginas aviso-legal y privacidad requieren dirección postal real por la LSSICE/RGPD. El placeholder `[Completar con domicilio social real]` es la solución correcta hasta obtener el dato real.

### F.3 Por qué el WhatsApp tiene condicional

Con `SITE.whatsapp = 'TU_TELEFONO'`, sin el condicional, se renderizaría un enlace `wa.me/TU_TELEFONO` roto. El condicional en Header, Layout y contacto.astro garantiza que solo aparece el botón cuando hay un número real.

---

## G. Contradicciones Detectadas (Agosto 2026)

| # | Decisión Histórica | Decisión Posterior | Estado Canónico |
|---|---|---|---|
| 1 | Em-dash en FAQ y prosa editorial | CLAUDE.md §8.2 prohíbe `—` en interfaz y copy | PENDIENTE decisión titular |
| 2 | `priceFrom` baños = '3.200€' | Corregido a '2.800€' (Lote A) | VIGENTE: 2.800€ |
| 3 | `priceFrom` cocinas = '5.500€' | Corregido a '5.000€' (Lote A) | VIGENTE: 5.000€ |
| 4 | `priceFrom` integrales = '18.000€' | Corregido a '26.000€' (Lote D) | VIGENTE: 26.000€ |
| 5 | Cocinas: '2-3 semanas' en contenido | Corregido a '3-5 semanas' (Lote A) | VIGENTE: 3-5 sem |
| 6 | CTA final fondo terracota #A85535 | Corregido a #111827 (Lote A) | VIGENTE: #111827 |
| 7 | `SITE.address` como domicilio social | `[Completar con domicilio social real]` (Lote F) | VIGENTE: placeholder |
| 8 | WhatsApp sin condicional en Header.astro | Condicional añadido (Lote F) | VIGENTE: condicional |

---

*Archivo generado: 2026-08-22. Para consultas sobre razonamiento histórico, leer este archivo. Para actuar: usar las fuentes canónicas operativas listadas al inicio.*
