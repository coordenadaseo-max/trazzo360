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

### 6.1 La voz de Trazzo360

La línea es **asesoramiento antes que venta**, y ahora se añade una segunda capa:
**sabemos reformar + sabemos lo que supone para ti tener una obra dentro de casa**.

No son dos cosas separadas. Van juntas en el mismo párrafo, en el mismo H3, en la misma FAQ.
Técnica y empatía al mismo nivel, no en secciones distintas.

Tres preguntas de control antes de publicar cualquier bloque:
1. ¿Explica el *qué* y el *por qué*? (capa técnica)
2. ¿Habla de lo que vive el cliente durante y después? (capa humana)
3. ¿Hay una persona detrás, no solo una empresa? (capa de identidad)

Si falta alguna de las tres, el bloque está incompleto.

### 6.2 Quién habla

Hay una persona detrás de Trazzo360: el Fundador y responsable de obra, con más de 15 años
en obra. Esa persona aparece antes en el texto —no solo en /como-trabajamos/—, especialmente
en los momentos de decisión importantes para el cliente:

- Cuando se explica la visita técnica: es él quien viene, mide, escucha y da precio.
- Cuando se habla de coordinación de la obra: es él quien está disponible y a quien se llama.
- Cuando se habla de imprevistos: es él quien llama antes de actuar.

Nunca "respondemos en 24h" como si fuera un servicio de atención al cliente.
Siempre "estamos disponibles durante toda la obra" o "te aviso antes de tomar ninguna decisión".

### 6.3 La vida del cliente durante la obra

Este es el bloque que más falta hace y que menos existe en la competencia.
Polvo, ruido, trabajadores entrando y saliendo, el ascensor ocupado, la cocina sin agua,
el único baño fuera de servicio durante cuatro días.

Esas molestias se mencionan, se reconocen y se explica cómo se gestionan:
- Protección de suelos y zonas comunes antes de empezar.
- Limpieza diaria al terminar la jornada.
- Comunicación del horario de inicio cada mañana.
- Qué días son los más incómodos y cuándo vuelve la normalidad.
- Qué hacer si solo hay un baño (se planifica desde el principio, no como excepción).

No es suficiente mencionar que "planificamos para minimizar las molestias".
Hay que decir exactamente qué se hace y cuándo.

### 6.4 El resultado, no solo el proceso

Las páginas hablan mucho de impermeabilización, alicatado, fontanería y garantías.
Poco de tener un baño cómodo, fácil de limpiar, sin riesgo de resbalón para los padres,
con espacio suficiente para dos personas por la mañana, que dé gusto usar cada día.

Cada página de servicio necesita al menos un párrafo que describa el resultado cotidiano,
no el resultado técnico. No "entregamos con garantía de 2 años" como cierre,
sino "el jueves siguiente ya usas el baño nuevo, y en dos semanas ya no recuerdas cómo era el anterior".

### 6.5 La incoherencia de precio cerrado + imprevistos

Es el punto más importante de confianza y hay que resolverlo en cada página que lo toque.

NUNCA escribir estos dos conceptos uno al lado del otro sin el puente que los une:
- "El precio que firmamos es el precio que pagas."
- "Si aparecen problemas ocultos al abrir, se valoran aparte."

La versión correcta es esta (o similar, adaptada al contexto):

> El precio cerrado cubre todo lo que es visible e inspeccionable en la visita técnica.
> Si al abrir aparece algo que no se podía ver antes —una instalación deteriorada detrás
> del alicatado, humedades en el soporte— lo comunicamos antes de tocar nada y decidimos
> contigo si se resuelve en esta obra o en una segunda intervención. En la mayoría de
> reformas de baño del Corredor, esto no ocurre. Cuando ocurre, hay un responsable
> que llama, explica y espera tu decisión.

Ese párrafo (o su equivalente contextual) debe aparecer siempre que se mencione
precio cerrado + imprevistos en la misma página.

### 6.6 Tono: lo que sí y lo que no

**Sí:**
- Frases cortas. Párrafos de 3–4 líneas máximo.
- Verbos que acompañan: "te avisamos", "decidimos contigo", "te explicamos", "tendrás".
- Concreción temporal: "los primeros 4 días", "el jueves ya funciona", "en 10–15 días hábiles".
- Reconocer lo incómodo antes de explicar cómo se gestiona.
- Hablar de situaciones reales: el baño único, los padres mayores, la cocina sin agua.
- Beneficio cotidiano como cierre: cómo es la vida después de la reforma.

**No:**
- "Respondemos en 24h" — suena a call center.
- "Nos comprometemos a..." seguido de lista — suena a contrato de condiciones generales.
- Párrafos de 6+ líneas que explican proceso técnico sin mención al usuario.
- Superlativos: "el mejor resultado", "la máxima calidad", "sin igual en el Corredor".
- Acumulación de advertencias (filtraciones, humedades, garantías, imprevistos seguidos)
  que generen más ansiedad de la que resuelven.
- "Equipo de profesionales altamente cualificados" — sin contenido, sin persona.

### 6.7 Estructura de la información: HTML semántico con intención

Los bloques técnicos densos (M2 diagnóstico local, M6 cómo leer un presupuesto)
se rompen con H3 y listas para mejorar lecturabilidad y SEO:

- M2: H3 por tipología de vivienda o por zona geográfica dentro del municipio.
  Patologías como `<ul>` con descripción concreta. No párrafos de 5 líneas seguidas.
- M6: `<dl>` con término + descripción. Máximo 6–8 términos, uno por partida crítica.
- Ventilación y ventanas: son señales importantes de calidad de vida y de obra bien hecha.
  Merecen mención explícita cuando son relevantes para el servicio (baños, cocinas, pisos).
  Ventilación forzada en baños sin ventana exterior, rotura de puente térmico en ventanas
  de aluminio antiguas, condensaciones en invierno. No solo como problema: también como
  mejora que cambia la experiencia diaria.
- Procesos: `<ol>` con pasos concretos. Cada paso con su tiempo aproximado.
- Comparativas: `<table>` con `<caption>`. Nunca divs imitando tablas.

### 6.8 Instrucción para prompts futuros

Antes de escribir cualquier bloque de copy, relee las subsecciones 6.3 (vida del cliente
durante la obra), 6.4 (resultado cotidiano) y 6.5 (incoherencia precio cerrado +
imprevistos). Esas tres capas deben estar presentes en cada hub y en cada combinada.
Si escribes un bloque técnico de más de 4 líneas sin una referencia a la experiencia
del cliente, añade esa referencia antes de continuar.

### 6.9 Reglas que no cambian

- Beneficio y criterio de decisión antes que característica técnica.
- Prohibidos los superlativos no verificables.
- Prohibido el keyword stuffing.
- Concreción local real: barrios, décadas, tipologías.
- Todo precio va acompañado de "orientativo" y "sujeto a visita técnica".
- Cero relleno para alcanzar recuento de palabras.

## 7. SEO — Estrategia de anchor text y enlaces internos

### 7.1 Regla de implementación de tarjetas clicables

No asumir que una tarjeta completamente clicable debe implementarse envolviendo toda la tarjeta en `<a>`. Separar siempre área interactiva, semántica HTML y estrategia de anchor text.

Patrón estándar obligatorio para tarjetas:

```html
<article class="relative">
  <h3>
    <a href="/zonas/alcala-de-henares/" class="after:absolute after:inset-0">
      Empresa de reformas en Alcalá de Henares
    </a>
  </h3>
  <p>Texto descriptivo de la zona...</p>
  <span aria-hidden="true">Ver servicios →</span>
</article>
```

**Jerarquía recomendada:**
```
article
 ├── h2/h3
 │    └── a → anchor SEO principal
 ├── p → descripción contextual
 └── span → CTA visual (no <a>)
```

**Prohibido por defecto:**
```html
<a href="/destino/">
  <h3>Título</h3>
  <p>Párrafo completo...</p>
  <span>Ver más</span>
</a>
```

### 7.2 Anchor text deliberado

Todo enlace interno debe tener anchor text:
- descriptivo y comprensible fuera de contexto;
- relacionado con la intención de búsqueda de la URL destino;
- natural para el usuario.

**Anchors genéricos prohibidos cuando exista alternativa descriptiva:** `Ver más`, `Saber más`, `Leer más`, `Aquí`, `Descubrir`.

Ejemplos correctos:
```html
<a href="/zonas/alcala-de-henares/">Empresa de reformas en Alcalá de Henares</a>
<a href="/servicios/reforma-cocinas/">reforma de cocinas en el Corredor</a>
```

Para URLs importantes, **variar anchors de forma natural** según el contexto. No repetir el mismo anchor exacto en múltiples apariciones hacia la misma URL. Ejemplo para `/servicios/reforma-cocinas/`: "reforma de cocinas", "reformas de cocina", "reformar una cocina", "servicio de reforma de cocinas".

### 7.3 No envolver párrafos completos en `<a>`

El anchor text debe limitarse al texto del enlace, no incluir el párrafo descriptivo circundante. El contexto alrededor del enlace ayuda a Google a entender de qué trata el destino; no hace falta meterlo dentro del `<a>`.

### 7.4 CTA visual ≠ anchor obligatorio

Textos como `Ver servicios →`, `Ver zona →`, `Conocer el servicio →` pueden ser `<span aria-hidden="true">` cuando la tarjeta ya tiene un enlace expandido por CSS desde el título. No crear tres `<a>` hacia la misma URL en la misma tarjeta.

### 7.5 Una URL, señales coherentes

Los anchors internos hacia una URL deben pertenecer al mismo campo semántico de la página destino. Evitar anchors ambiguos o de intención diferente a la de la URL.

### 7.6 Accesibilidad irrenunciable

- Navegable por teclado con `focus-visible` visible.
- Contraste suficiente; no depender solo del color.
- No añadir `aria-label` redundante cuando el texto visible ya describe correctamente el destino.

### 7.7 Checklist antes de crear cualquier enlace interno

1. ¿La URL destino es realmente relevante aquí?
2. ¿El anchor describe correctamente lo que encontrará el usuario?
3. ¿El anchor es natural dentro de la frase o componente?
4. ¿Existe ya otro enlace redundante hacia la misma URL en la misma página?
5. ¿Se está enlazando por utilidad o únicamente por SEO?
6. ¿Podemos mantener la misma UX con un anchor más limpio?

Si una tarjeta necesita ser completamente clicable → enlace expandido por CSS en lugar de envolver todo el contenido en `<a>`.

## 8. Proceso de trabajo

- Antes de escalar a más páginas, verifica que las existentes cumplen los umbrales de la sección 3 y no tienen placeholders.
- Cualquier cambio de arquitectura se explica en una frase y espera confirmación.
- Los hallazgos de SEO se guardan en `docs/`, no se pierden en el chat.
- Al terminar cualquier tarea: `npm run build` y reporta páginas generadas, errores y `TODO:` pendientes.
