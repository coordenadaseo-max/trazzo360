# Trazzo360 — reglas del proyecto

Sitio Astro estático de SEO local para una empresa de reformas del Corredor del Henares.
Arquitectura: home + 6 hubs de servicio + 8 hubs de zona + 48 combinadas `/{servicio}/{zona}/` + calculadora + guías + páginas de utilidad.

## 0. Contexto de negocio (léelo antes de escribir una sola línea de copy)

La empresa **está arrancando**. No tiene todavía reseñas, ni fotos de obra propia, ni histórico de proyectos. La estrategia de contenido no lo disimula: lo compensa con transparencia, criterio técnico y compromisos verificables. Esto no es una limitación a esconder, es el posicionamiento.

Hechos ciertos que sí puedes usar:
- El responsable acumula **más de 15 años de experiencia en obra**. La experiencia es de la persona, no de la marca. Nunca atribuyas antigüedad, número de obras ni trayectoria a Trazzo360 como empresa.
- La obra la ejecutan **equipos estables** coordinados por un **responsable único**. Nunca escribas "equipo propio" ni "sin subcontratas": eso es una afirmación sobre estructura societaria y no es exacta. Lo que sí es cierto y además responde mejor al miedo real del cliente es que **entran siempre los mismos equipos y hay un solo interlocutor**.
- Municipio principal: **Torrejón de Ardoz**. Alcalá de Henares es un municipio más, no la sede. Cualquier texto que diga o insinúe "nuestra sede central en Alcalá" o "llevamos X años en Alcalá" es falso y debe eliminarse.
- Garantías reales: contrato por escrito con alcance, precio y fecha; garantía de 2 años sobre la ejecución por defectos de instalación; garantía del fabricante en materiales; pago **40 % a la firma / 40 % a mitad de obra / 20 % a la entrega conforme**.
- Firma de autoría: **"Fundador y responsable de obra de Trazzo360"**, sin nombre propio de momento. Está parametrizado en un único sitio para poder sustituirlo por el nombre real más adelante.

Hechos que **no** existen todavía y que no se pueden mencionar bajo ninguna forma:
- Reseñas, valoraciones, testimonios, estrellas, `aggregateRating`.
- Obras realizadas, número de proyectos, años de la empresa.
- Seguro de responsabilidad civil, alta en el REA, certificaciones, premios.
- CIF, razón social y domicilio fiscal (pendientes de alta).

## 1. Integridad de datos — no negociable

- **Nunca inventes** ninguno de los datos del apartado anterior. Si algo no está confirmado, déjalo como `TODO:` visible y avísame de forma destacada en tu respuesta. Nunca lo rellenes con algo plausible.
- `aggregateRating` y `Review` en JSON-LD solo se emiten si `SITE.reviewCount > 0` con reseñas reales. Conserva la lógica condicional; no la elimines ni la puentees.
- `telephone` en JSON-LD solo se emite si no es placeholder. Conserva esa lógica.
- Ninguna cifra comercial (obras, años, clientes) puede aparecer sin que yo la haya confirmado.
- Antes de dar por terminada cualquier tarea, ejecuta `npm run build` y verifica que no hay placeholders sin marcar en `dist/`.

## 2. Imágenes: ilustrativas y de obra propia nunca se mezclan

Habrá dos categorías y el sistema debe impedir que se confundan:

- `tipo: 'ilustrativa'` — imágenes genéricas o generadas. **Nunca** pueden llevar `alt`, pie de foto, ubicación, superficie, duración ni ningún dato que sugiera que es una obra ejecutada por Trazzo360. El `alt` describe lo que se ve, no quién lo hizo.
- `tipo: 'obra-propia'` — solo fotos reales de obras ejecutadas. Estas sí llevan municipio, superficie, duración y fecha.

Cualquier componente que renderice metadatos de obra (ubicación, m², plazo) debe recibir solo imágenes `obra-propia`. Si recibe una `ilustrativa`, debe fallar el build. Una imagen ilustrativa etiquetada como obra propia es exactamente el mismo problema que una reseña falsa.

## 3. Contenido único por página (anti-duplicación)

- Todo bloque que describa una zona (tipología de vivienda, década, barrios, patologías, normativa municipal) debe ser único para esa zona. Nunca reutilices literalmente el mismo párrafo entre dos municipios.
- Los bloques de alcance de servicio objetivo (fases, qué incluye, materiales) sí pueden compartirse entre páginas del mismo servicio.
- **Umbrales operativos**, medidos con `scripts/audit-content.mjs`:

| Tipo | Palabras | Boilerplate (texto en ≥5 páginas) |
|---|---|---|
| Hubs de servicio | 2.800 – 3.200 | < 25 % |
| Hubs de zona | 1.700 – 1.900 | < 30 % |
| Combinadas servicio×zona | 1.500 – 1.700 | < 35 % |
| Guías | 1.800 – 2.500 | < 15 % |

- Antes de dar por buena una tanda, mide y repórtame el resultado en tabla.

## 4. SEO técnico y on-page

- `<title>` único, **50–60 caracteres**. Cuéntalos antes de escribirlo. Estructura: keyword principal al inicio + modificador comercial + marca.
- `<meta description>` única, **140–155 caracteres**. Nunca la generes concatenando el `headline` del servicio: eso produce metas de 250 caracteres.
- Un solo `<h1>` por página, jerarquía sin saltos.
- **Una keyword principal, una URL.** Consulta `docs/keyword-map.md` antes de escribir cualquier encabezado. Si dos páginas pueden competir por la misma consulta, la de menor prioridad resume y enlaza a la principal con anchor exacto.
- Toda imagen: `alt` descriptivo, `width` y `height` explícitos, `astro:assets`, `loading="lazy"` salvo la del hero.
- Todo enlace interno con anchor descriptivo. Nunca "aquí" ni el municipio pelado. Nunca el mismo anchor dos veces hacia la misma URL desde la misma página.
- Ninguna página se publica sin estar enlazada desde su hub de servicio y su hub de zona.
- Canonical autorreferenciado. `/gracias/` con `noindex` y fuera del sitemap.
- **Una sola entidad de negocio en todo el sitio**, con `@id: https://trazzo360.es/#business`. Cualquier otro schema la referencia con `{"@id": "..."}`; nunca redeclara un `GeneralContractor`.

## 5. HTML semántico

- `<main>` único; secciones en `<section>` con `aria-labelledby` apuntando al id de su encabezado.
- Contenido autónomo (una guía, una ficha de obra) en `<article>`.
- Imágenes con pie en `<figure>` + `<figcaption>`.
- Tablas de datos en `<table>` con `<caption>`, `<thead>` y `<th scope>`. Nunca uses una rejilla de divs para datos tabulares.
- Listas de pares término-definición (partidas, plazos, qué incluye) en `<dl>`.
- Procesos ordenados en `<ol>`. Los pasos numerados a mano dentro de divs son incorrectos.
- FAQ con `<details>`/`<summary>`. El texto de la pregunta va en el `<summary>`.
- Breadcrumbs en `<nav aria-label="Migas de pan">` con `<ol>`.
- Estados de foco visibles en todos los CTA. Contraste AA en texto sobre `#A85535` y `#111827`.

## 6. Copywriting y línea editorial

La línea es **asesoramiento antes que venta**. El texto ayuda a decidir, no enumera servicios. Mantenla en todo lo que escribas.

- Beneficio y criterio de decisión antes que característica técnica.
- Frases cortas. Párrafos de 3–4 líneas máximo.
- Escribe sobre **decisiones** ("bañera o ducha: qué condiciona el presupuesto", "integral o por fases"), no sobre adjetivos.
- Prohibidos los superlativos no verificables: "los mejores", "líderes", "referentes", "calidad exquisita", "precios inmejorables".
- Prohibido el keyword stuffing y la negrita decorativa sobre keywords. Densidad natural: si al leerlo en voz alta suena a máquina, reescríbelo.
- Concreción local real: barrios con nombre, décadas de construcción, tipologías, trámites del ayuntamiento correspondiente. Nunca "una ciudad en crecimiento con gran demanda de reformas".
- Todo precio publicado va acompañado de que es orientativo y sujeto a visita técnica.
- Cero relleno para alcanzar un recuento. Si una sección no aporta información útil, no la escribas.

## 7. Proceso de trabajo

- Antes de escalar a más páginas, verifica que las existentes cumplen los umbrales de la sección 3 y no tienen placeholders.
- Cualquier cambio de arquitectura se explica en una frase y espera confirmación.
- Los hallazgos de SEO se guardan en `docs/`, no se pierden en el chat.
- Al terminar cualquier tarea: `npm run build` y reporta páginas generadas, errores y `TODO:` pendientes.
