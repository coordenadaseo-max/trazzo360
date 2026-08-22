# DECISION-REGISTER — Registro de Decisiones Estructurales · Trazzo360

> Fuente de verdad para decisiones que no son inmediatamente derivables del código.
> Ante cualquier duda sobre el "por qué" de una restricción o convención: buscar aquí primero.
>
> **Estados:** `APPROVED` (vigente) · `SUPERSEDED` (superado por decisión posterior) · `REJECTED` (descartado) · `PENDING` (decisión pendiente)

---

## Índice de Áreas

- [A. Datos e Integridad](#a-datos-e-integridad)
- [B. Copy y Voz Editorial](#b-copy-y-voz-editorial)
- [C. Arquitectura y SEO](#c-arquitectura-y-seo)
- [D. Diseño Visual](#d-diseño-visual)
- [E. Técnica y Código](#e-técnica-y-código)

---

## A. Datos e Integridad

| ID | Fase | Decisión | Estado | Fuente | Notas |
|---|---|---|---|---|---|
| DEC-A01 | Lote A | `calculator.ts` es la única fuente de verdad para precios y plazos. Ningún dato en content files puede contradecirlo. | **APPROVED** | CLAUDE.md §1 | Antes existían discrepancias entre content files y calculator. Lote A los alineó. |
| DEC-A02 | Lote A | `priceFrom` baños esencial = '2.800' (rango hasta 4m²: 2.800–3.800€). El dato anterior '3.200' era incorrecto. | **APPROVED** | calculator.ts | Supersede el valor inicial '3.200'. |
| DEC-A03 | Lote A | `priceFrom` cocinas esencial = '5.000' (rango hasta 8m²: 5.000–7.500€). El dato anterior '5.500' era incorrecto. | **APPROVED** | calculator.ts | Supersede el valor inicial '5.500'. |
| DEC-A04 | Lote D | `priceFrom` integrales esencial = '26.000' (40m² × 650€/m²). El dato anterior '18.000' no tenía base en calculator.ts. | **APPROVED** | calculator.ts | Supersede '18.000'. El mínimo real es surfaceMin=40m² × 650€. |
| DEC-A05 | Lote A | Plazos reforma cocinas esencial = 3–5 semanas. El dato '2-3 semanas' en content files era incorrecto. calculator.ts: `timelineWeeks: [3, 5]`. | **APPROVED** | calculator.ts línea 550 | Supersede '2-3 semanas' en todos los content files de cocinas. |
| DEC-A06 | Fundacional | `aggregateRating` y `Review` en JSON-LD solo se emiten si `SITE.reviewCount > 0`. No se falsifican reseñas. | **APPROVED** | CLAUDE.md §1, site.ts | La empresa no tiene reseñas reales todavía. reviewCount=0. |
| DEC-A07 | Fundacional | `AUTHOR.name = null`. El nombre del fundador no se publica hasta que la empresa esté registrada. Usar siempre 'Fundador y responsable de obra de Trazzo360'. | **APPROVED** | trust.ts, PRODUCT.md | El nombre está parametrizado para poder sustituirse sin editar múltiples archivos. |
| DEC-A08 | Fundacional | `AUTHOR.yearsInTrade = 15` son los años de experiencia de la persona, NO la edad de la empresa. Nunca escribir "15 años de empresa". | **APPROVED** | CLAUDE.md §0, trust.ts | La empresa (entidad jurídica) no tiene histórico; la persona sí. |
| DEC-A09 | Lote E | `AUTHOR.yearsInTrade` NO se renderiza en producción. Los bloques marcados `PRE-LAUNCH BLOCKER: cifra de años` están comentados en index.astro:287 y como-trabajamos.astro:93. | **APPROVED** | PRE-LAUNCH-CHECKLIST §5 | Descomentar solo cuando el titular confirme la cifra y la empresa esté registrada. |
| DEC-A10 | Fundacional | `PROJECTS`: todos con `published: false` hasta tener fotos reales de obras propias. Las 4 entradas actuales son placeholders. | **APPROVED** | site.ts, CLAUDE.md §2 | Las fotos ilustrativas nunca pueden llevar metadatos de obra ejecutada. |
| DEC-A11 | Lote F | `SITE.address = 'Corredor del Henares, Madrid'` describe el área de servicio, no es domicilio social legal. Las páginas aviso-legal y privacidad usan `[Completar con domicilio social real]` en su lugar. | **APPROVED** | aviso-legal.astro:33, privacidad.astro:32 | LSSICE exige domicilio postal real. El placeholder es la solución hasta obtener el dato. |
| DEC-A12 | Fundacional | Ninguna cifra comercial (obras realizadas, clientes, años de empresa) puede aparecer sin confirmación explícita del titular. Si falta, usar `TODO:` visible. | **APPROVED** | CLAUDE.md §1 | La empresa está arrancando. No hay histórico que no sea el de la persona. |

---

## B. Copy y Voz Editorial

| ID | Fase | Decisión | Estado | Fuente | Notas |
|---|---|---|---|---|---|
| DEC-B01 | Fundacional | Prohibido escribir "equipo propio" o "sin subcontratas". Forma correcta: "entran siempre los mismos equipos, hay un solo interlocutor". | **APPROVED** | CLAUDE.md §0 | "Equipo propio" es afirmación sobre estructura societaria no verificada. El beneficio real (estabilidad + responsable único) se puede afirmar. |
| DEC-B02 | Lote A | Prohibido el em-dash (`—`) en interfaz (botones, labels, CTAs, navegación). | **APPROVED** | CLAUDE.md §8.2 | El em-dash es un carácter editorial con connotaciones de prosa literaria, incompatibles con el ADN de contrato. |
| DEC-B03 | Lote F + Canonicalización | El em-dash (`—`) está **prohibido en todo copy e interfaz Trazzo360**, incluyendo prosa editorial (FAQs de guías, párrafos técnicos). Los 28 ficheros afectados son deuda de rollout/QA pendiente de limpieza, no una excepción aprobada. No introducir nuevos em-dash. | **APPROVED** | CLAUDE.md §8.2, Canonicalización 2026-08-22 | Deuda técnica registrada: 28 ficheros de contenido editorial contienen `—`. Limpiar en el próximo ciclo de QA de contenidos, no como emergencia blocker. |
| DEC-B04 | Fundacional | North Star editorial: "La Obra que Cumple". No es un slogan publicitario sino una pregunta de control: ¿este copy habla de lo que cumplimos o de lo que prometemos? | **APPROVED** | PRODUCT.md, DESIGN.md | Contrapunto a "el sueño de tu reforma". El cliente quiere cumplimiento, no promesas. |
| DEC-B05 | Fundacional | Sistema de pagos 40/40/20 (firma / mitad de obra / entrega conforme). Dato contractual real, verificable, diferencial. | **APPROVED** | PRODUCT.md, trust.ts | El COMPROMISOS.pago-fases es garantía real. No inflar con "sin pagos por adelantado" (sí hay 40%). |
| DEC-B06 | Fundacional | Prohibidos superlativos no verificables: "el mejor", "la máxima calidad", "sin igual en el Corredor". | **APPROVED** | CLAUDE.md §6.9 | No hay datos que respalden superlativos. Sustituir siempre por concreción técnica o contractual. |
| DEC-B07 | Fundacional | `mainCity = 'Torrejón de Ardoz'`. Nunca escribir "nuestra sede en Alcalá" ni insinuar que Alcalá es la ciudad principal. | **APPROVED** | CLAUDE.md §0, site.ts | Alcalá es el municipio de mayor volumen de búsqueda pero no es la sede. Torrejón es el mainCity declarado. |
| DEC-B08 | Fundacional | Toda mención de precio va acompañada de "orientativo" y "sujeto a visita técnica". | **APPROVED** | CLAUDE.md §6.9 | Los precios de calculator.ts son rangos, no presupuestos. La visita técnica es el momento de la propuesta real. |
| DEC-B09 | Fundacional | La capa humana (vida del cliente durante la obra) y la capa técnica deben coexistir en el mismo párrafo. No separar en secciones distintas. | **APPROVED** | CLAUDE.md §6.1 | El diferencial de Trazzo360 no es técnico ni emocional: es la combinación. Cualquier bloque de solo uno de los dos está incompleto. |
| DEC-B10 | Fundacional | Prohibido "Respondemos en 24h" o similar. Suena a call center. Forma correcta: "estamos disponibles durante toda la obra" o "te aviso antes de tomar ninguna decisión". | **APPROVED** | CLAUDE.md §6.2, §6.6 | Hay una sola persona responsable, no un departamento de atención al cliente. |
| DEC-B11 | Fundacional | Prohibida la incoherencia precio cerrado + imprevistos sin el puente explicativo. Ver el párrafo canónico en CLAUDE.md §6.5. | **APPROVED** | CLAUDE.md §6.5 | El precio cerrado cubre lo visible. Los imprevistos ocultos se comunican antes de actuar, no después. Esa es la diferencia. |

---

## C. Arquitectura y SEO

| ID | Fase | Decisión | Estado | Fuente | Notas |
|---|---|---|---|---|---|
| DEC-C01 | Fundacional | Sistema S-level para contenido de combinadas: S1 (datos locales específicos), S2 (datos territoriales generales), S3 (transaccional compacto). | **APPROVED** | src/data/content/levels.ts | No todas las combinadas justifican el mismo nivel de inversión editorial. |
| DEC-C02 | Lote C | `zonas/alcala-de-henares.astro` es standalone reference, no usa el template `zonas/[slug].astro`. | **APPROVED** | levels.ts | Alcalá = S1 en todas las combinadas que la incluyen. Como zona hub también merece tratamiento diferenciado. |
| DEC-C03 | Lote D | `reforma-cocinas/alcala-de-henares.astro` es standalone reference, no usa el template `[servicio]/[barrio].astro`. | **APPROVED** | levels.ts | S1 + parque inmobiliario de los 60-70 específico de Alcalá. Golden reference para S1×cocinas. |
| DEC-C04 | Lote D | S1 aprobado para: Alcalá × reformas-integrales, Alcalá × reforma-cocinas, Alcalá × locales-comerciales, Alcalá × comunidades-vecinos. | **APPROVED** | levels.ts | Justificación: volumen de búsqueda + parque inmobiliario diferenciado + zona universitaria. |
| DEC-C05 | Lote D | S3 aprobado para: Camarma de Esteruelas × locales-comerciales. | **APPROVED** | levels.ts | Volumen de búsqueda insuficiente para justificar inversión S2. |
| DEC-C06 | Fundacional | Una sola entidad de negocio en todo el sitio con `@id: https://trazzo360.es/#business`. Ningún otro schema redeclara GeneralContractor. | **APPROVED** | CLAUDE.md §4 | Fragmentar la entidad crea señales contradictorias para Google. |
| DEC-C07 | Fundacional | Mínimos de palabras por tipo de página (medidos con `scripts/audit-content.mjs`): Hubs 2800-3200w <25% boilerplate; Zonas 1700-1900w <30%; Combinadas 1500-1700w <35%; Guías 1800-2500w <15%. | **APPROVED** | CLAUDE.md §3 | El contenido delgado no posiciona y daña la percepción de expertise. |
| DEC-C08 | Fundacional | `keyword-map.md` se consulta antes de escribir cualquier encabezado. Si dos páginas compiten por la misma query, la de menor prioridad resume y enlaza a la principal. | **APPROVED** | CLAUDE.md §4 | Cannibalización de keywords = señal negativa. Una keyword, una URL. |
| DEC-C09 | Lote E | noindex en: /gracias/, /aviso-legal/, /privacidad/, /cookies/, /lab/*, 404.html. Sitemap: 71 URLs indexables. | **APPROVED** | PRE-LAUNCH-CHECKLIST | Verificado en Lote F. 86 páginas totales = 71 indexables + 14 noindex + 1 404.html. |

---

## D. Diseño Visual

| ID | Fase | Decisión | Estado | Fuente | Notas |
|---|---|---|---|---|---|
| DEC-D01 | Fundacional | `border-radius: 0` en botones CTA primarios. Excepción: botón WhatsApp puede usar `rounded-sm`. | **APPROVED** | DESIGN.md — La Regla del Rectángulo Comprometido | El rectángulo sin curvas connota contrato, precisión técnica. El `rounded-sm` en WhatsApp es aceptable por convención de plataforma. |
| DEC-D02 | Lote A | `bg-[#A85535]` eliminado como color de fondo de sección completa. CTA final = `bg-[#111827]`. | **APPROVED** | DESIGN.md — La Regla del Acento Escaso | La terracota como fondo de sección viola el límite del 10% del viewport. Solo como acento puntual. Supersede implementación inicial. |
| DEC-D03 | Fundacional | Tipografía Display (3–4.5rem / peso 900 / tracking -0.02em) solo en H1 del hero. Ningún otro elemento usa ese tamaño. | **APPROVED** | DESIGN.md — La Regla del Único Display | Un solo grito. El resto en murmullos estructurados. Si todo grita, nadie escucha. |
| DEC-D04 | Fundacional | No italic/cursiva en ningún elemento. Ni énfasis, ni citas, ni decorativo. | **APPROVED** | DESIGN.md — La Regla del Cero Italic | La cursiva connota subjetividad, opinión, ornamento. Incompatible con el ADN de contrato objetivo. |
| DEC-D05 | Fundacional | No `box-shadow` en elementos que no flotan sobre la página (tarjetas, secciones, etc.). Excepciones: header `shadow-sm`, dropdowns nav `shadow-xl`. | **APPROVED** | DESIGN.md — La Regla del Plano por Defecto | La sombra implica elevación, que implica jerarquía especial. Si todo tiene sombra, la sombra pierde significado. |
| DEC-D06 | Lote A | No `hover:shadow-md` ni `hover:shadow-sm` en cards. Eliminar de todos los templates. | **APPROVED** | Lote A audit | Hover shadow convierte cada tarjeta en elemento flotante potencial. Viola la regla del plano. Supersede implementación inicial. |
| DEC-D07 | Fundacional | `#25D366` (verde WhatsApp) solo para elementos de WhatsApp. No usarlo en ningún otro contexto. | **APPROVED** | DESIGN.md — La Regla del Verde Cerrado | El verde #25D366 tiene carga semántica unívoca (WhatsApp). Usarlo en otros contextos contamina esa señal. |
| DEC-D08 | Fundacional | Terracota (#A85535) < 10% de cualquier viewport en cualquier estado. | **APPROVED** | DESIGN.md — La Regla del Acento Escaso | La terracota como señal técnica, no como ambiente. Mayoría del viewport en neutros (#111827, #F9F7F4, #FFFFFF). |
| DEC-D09 | Lote A | Bullets de lista: cuadrado 6×6px via CSS `::before`, `border-radius: 0`, `border: 1px solid #9CA3AF`, fondo transparente. No usar `rounded-full`, no usar emojis, no usar guión. | **APPROVED** | CLAUDE.md §8, DESIGN.md | El cuadrado refuerza el ADN de rectángulo comprometido. La especificación CSS está congelada en CLAUDE.md §8.1. |
| DEC-D10 | Lote A | `transition-all` eliminado. Solo `transition-colors` o `transition-opacity`. | **APPROVED** | Lote A audit | `transition-all` afecta propiedades como `width` y `height` que no necesitan transición, causando jank. |
| DEC-D11 | Lote A | Barras decorativas `w-12 h-1 bg-[#A85535]` eliminadas definitivamente de heroes y secciones. | **APPROVED** | Lote A audit — REJECTED pattern | Fragmentan la lectura sin aportar información. Violación del ADN. Supersede implementación inicial. |
| DEC-D12 | Lote A | `text-[#A85535]` eliminado de H1. El H1 es negro puro (`#111827`) o con tracking ajustado. No terracota en titulares principales. | **APPROVED** | Lote A audit | El H1 en terracota crea conflicto visual con botones terracota. Solo un elemento puede ser el acento dominante. |
| DEC-D13 | Lote A-B | Hero eyebrow sin barra decorativa. El acento visual puede ser un borde-left editorial (`border-l-4`) pero no una barra flotante separada. | **APPROVED** | Impeccable direction, Home V1 | La barra decorativa es ornamento sin función. El borde-left editorial es estructura tipográfica con función. |
| DEC-D14 | Home V1 | Hero variante A2 (sigilo con borde editorial): la eyebrow usa `border-l-4 border-[#A85535]` como único acento terracota en el hero. Sin más color en ese bloque. | **APPROVED** | Home implementation | El A2 es la variante canónica para Home. No global: solo en Home y páginas que lo justifiquen. |
| DEC-D15 | Fundacional | No más de una fuente Display por página. El sistema tipográfico usa una sola familia (configurada en tailwind.config) sin excepciones ornamentales. | **APPROVED** | DESIGN.md | Consistencia tipográfica = autoridad visual. Dos tipografías Display = confusión. |

---

## E. Técnica y Código

| ID | Fase | Decisión | Estado | Fuente | Notas |
|---|---|---|---|---|---|
| DEC-E01 | Lote F | `SITE.whatsapp !== 'TU_TELEFONO'` condicional en Header.astro desktop, Layout.astro (flotante), contacto.astro. | **APPROVED** | Header.astro (commit b87ad27) | Sin condicional: se renderizaba `wa.me/TU_TELEFONO` roto. Lote F lo detectó y corrigió. |
| DEC-E02 | Lote F | `SITE.phone !== 'TU_TELEFONO'` condicional en Header.astro móvil, Footer, secciones de contacto. | **APPROVED** | Lote F audit | openingHoursSpecification en JSON-LD también condicionado. |
| DEC-E03 | Fundacional | 0 KB JavaScript cliente. El sitio es totalmente estático (Astro static output). Ninguna feature puede añadir JS al bundle del cliente. | **APPROVED** | Architecture decision | JS innecesario degrada el LCP y el FID. Todo lo que el sitio necesita puede hacerse con HTML/CSS puro. |
| DEC-E04 | Lote F | Todas las tablas de precios tienen wrapper `<div class="overflow-x-auto">`. | **APPROVED** | [slug].astro, [barrio].astro (commit b87ad27) | Sin wrapper, las tablas rompían el layout en mobile (375px). |
| DEC-E05 | Fundacional | `npm run build` + verificación obligatoria antes de cerrar cualquier tarea. El build debe completarse sin errores y sin placeholders expuestos en `dist/`. | **APPROVED** | CLAUDE.md §9 | Detecta errores de TypeScript, imports rotos, y placeholders que llegaron a la build. |
| DEC-E06 | Lote F | `aviso-legal.astro:33` y `privacidad.astro:32` usan literal `[Completar con domicilio social real]` en lugar de `{SITE.address}`. | **APPROVED** | Lote F (NOT YET COMMITTED) | SITE.address no es domicilio social legal. Los literales son placeholders visibles que recuerdan al titular que debe completar ese dato. **PENDIENTE COMMIT.** |
| DEC-E07 | Fundacional | Build con `nvm` + Node LTS. El proyecto usa la versión de Node declarada en `.nvmrc` o similar. No usar Node del sistema directamente. | **APPROVED** | Memoria de usuario | Compatibilidad con Astro 7 requiere Node LTS específico. |

---

## Historial de Commits por Fase

| Commit | Hash | Contenido |
|---|---|---|
| Lote A | `46b795b` | ADN visual global + saneamiento de datos |
| Lote B | `5fa0474` | ADN visual hubs + datos de contenido |
| Lote C | `b70ecba` | Zonas 7 páginas + template condicional |
| Lote D | `af3f432` | S-level content + priceFrom + claims + schema |
| Lote E | `2b0e942` | Páginas restantes + claims sweep |
| Lote F | `b87ad27` | Auditoría global preproducción (HEAD actual) |

---

---

## F. Deuda Técnica Registrada (no blocker)

| ID | Deuda | Archivos afectados | Cuándo abordar |
|---|---|---|---|
| DT-F01 | Em-dash (`—`) en prosa editorial (FAQs + párrafos de guías) | 28 ficheros de contenido | Próximo ciclo de QA de contenidos. No blocker de lanzamiento. |
| DT-F02 | Evolución V2 → V1 en hubs: Integrales, Pisos, Locales, Comunidades | 4 hubs de servicio | Post-lanzamiento, según priorización editorial |
| DT-F03 | Página 404 en V3 (visual legacy) | `src/pages/404.astro` | Post-lanzamiento |
| DT-F04 | Proyectos en V3 (sin fotos reales) | `src/pages/proyectos.astro` | Cuando lleguen fotos de obra propia |

---

*Última actualización: 2026-08-22. Añadir nuevas decisiones en la sección correspondiente con ID secuencial por área.*
