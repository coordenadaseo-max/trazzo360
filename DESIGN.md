---
name: Trazzo360
description: Empresa de reformas integrales en el Corredor del Henares. Precio cerrado, plazo garantizado.
colors:
  brand: "#A85535"
  brand-dark: "#8a4229"
  dark: "#111827"
  light: "#F9F7F4"
  muted: "#6B7280"
  white: "#FFFFFF"
  gray-100: "#F3F4F6"
  whatsapp: "#25D366"
typography:
  display:
    fontFamily: "ui-sans-serif, system-ui, -apple-system, sans-serif"
    fontSize: "clamp(3rem, 8vw, 4.5rem)"
    fontWeight: 900
    lineHeight: 1
    letterSpacing: "-0.02em"
  headline:
    fontFamily: "ui-sans-serif, system-ui, -apple-system, sans-serif"
    fontSize: "clamp(1.75rem, 4vw, 2.5rem)"
    fontWeight: 700
    lineHeight: 1.15
    letterSpacing: "-0.01em"
  title:
    fontFamily: "ui-sans-serif, system-ui, -apple-system, sans-serif"
    fontSize: "1.125rem"
    fontWeight: 700
    lineHeight: 1.3
  body:
    fontFamily: "ui-sans-serif, system-ui, -apple-system, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: "ui-sans-serif, system-ui, -apple-system, sans-serif"
    fontSize: "0.75rem"
    fontWeight: 700
    letterSpacing: "0.1em"
rounded:
  none: "0px"
  sm: "2px"
spacing:
  xs: "8px"
  sm: "16px"
  md: "32px"
  lg: "64px"
  xl: "112px"
components:
  button-primary:
    backgroundColor: "{colors.brand}"
    textColor: "{colors.white}"
    rounded: "{rounded.none}"
    padding: "10px 20px"
  button-primary-hover:
    backgroundColor: "{colors.brand-dark}"
    textColor: "{colors.white}"
    rounded: "{rounded.none}"
    padding: "10px 20px"
  button-whatsapp:
    backgroundColor: "{colors.whatsapp}"
    textColor: "{colors.white}"
    rounded: "{rounded.sm}"
    padding: "10px 16px"
  nav-link:
    textColor: "#1F2937"
    typography: "label"
  nav-link-active:
    textColor: "{colors.brand}"
---

# Design System: Trazzo360

## Overview

**Creative North Star: "La Obra que Cumple"**

Trazzo360 habla el lenguaje de quien sabe lo que promete y cumple lo que firma. El sistema visual es austero por conviccion, no por descuido: sin ornamento gratuito, sin efectos decorativos que distraigan del mensaje. La terracota del brand no es un color de moda sino el color de la arcilla cocida, del ladrillo, del material que dura. La oscuridad del fondo hero genera el contraste donde se anuncia la promesa central. El resto del sitio es limpio, estructurado, legible.

La densidad visual es media-alta en los heros y baja en las secciones de contenido. El espacio en blanco trabaja como separador de argumento, no como decoracion. Cada seccion tiene una razon de existir y el diseno la hace evidente.

El sistema rechaza explicitamente los patrones de "empresa de reformas generica": fotografia de stock de banos blancos, gradientes de azul corporativo, iconos redondos de color pastel, testimoniales con avatares de stock. La autenticidad del presupuesto cerrado exige un diseno igualmente honesto.

**Key Characteristics:**
- Contraste tonal fuerte como mecanismo principal de jerarquia (oscuro vs. claro, no sombras)
- Tipografia negra (font-weight 900) en H1 con letra-espaciado negativo, sin serifa
- Botones rectangulares sin radio: la firma en el contrato
- Terracota usada con moderacion: el acento es escaso porque su escasez es el mensaje
- Sin decoracion que no cumpla una funcion de comunicacion

## Colors

Paleta bicromatica con acento terracota. El oscuro y el claro construyen la estructura; la terracota firma el punto de accion.

### Primary
- **Terracota del Corredor** (`#A85535`): El color de marca. Aparece en CTAs primarios, logos, links hover, divisores de seccion y etiquetas de categoria. Nunca como fondo de seccion completa. Su escasez es deliberada.
- **Terracota Profunda** (`#8a4229`): Estado hover del primario. Solo en interacciones; nunca en reposo.

### Neutral
- **Noche del Henares** (`#111827`): Hero sections, top bar, footer, fondos de CTA oscuros. La oscuridad no es agresiva; es la pizarra sobre la que se escribe la promesa.
- **Pared Encalada** (`#F9F7F4`): Fondos de secciones alternantes. El calor de la cal frente al blanco de laboratorio.
- **Blanco de Obra** (`#FFFFFF`): Header, cards, superficies interactivas. Blanco puro como lienzo neutro.
- **Gris Mortero** (`#6B7280`): Texto secundario, metadatos, placeholders. Legible sin competir.
- **Gris Separador** (`#F3F4F6`): Bordes de header, divisores entre items de lista, separadores de columna.
- **Verde WhatsApp** (`#25D366`): Reservado exclusivamente para el boton de WhatsApp. No reutilizar.

### Named Rules
**La Regla del Acento Escaso.** La terracota `#A85535` ocupa menos del 10% de cualquier viewport. Su presencia senala accion o identidad; su ausencia es la norma. Diluirla en fondos de seccion o texto corrido la convierte en ruido.

**La Regla del Verde Cerrado.** El verde `#25D366` es propiedad exclusiva de WhatsApp. No usarlo en ningun otro contexto, ni como alternativa de acento, ni en iconos de confirmacion.

## Typography

**Fuente:** Sistema nativo (ui-sans-serif, system-ui, -apple-system, sans-serif). Sin carga de fuente externa.

**Caracter:** Tipografia de sistema en su maxima expresion: familiar, rapida, sin friccion de carga. La jerarquia se construye con peso y tamano, no con personalidad tipografica propia. El font-weight 900 en H1 con tracking negativo es la unica concesion expresiva; el resto es funcional.

### Hierarchy
- **Display** (900, clamp 3–4.5rem, line-height 1, letter-spacing -0.02em): Solo H1 de hero. Una unica aparicion por pagina. Siempre sobre fondo oscuro en el sitio actual.
- **Headline** (700, clamp 1.75–2.5rem, line-height 1.15, letter-spacing -0.01em): H2 de seccion. Sobre fondo claro o Pared Encalada.
- **Title** (700, 1.125rem, line-height 1.3): H3 de subseccion, nombre de servicio en cards, paso de proceso.
- **Body** (400, 1rem, line-height 1.6): Parrafos. Max 70ch de ancho para legibilidad optima.
- **Label** (700, 0.75rem, letter-spacing 0.1em, UPPERCASE): Etiquetas de categoria, titulos de columna de footer, separadores de navegacion. El uppercase es la unica distincion; no combinar con otro tratamiento.

### Named Rules
**La Regla del Unico Display.** El tamano Display solo aparece en el H1 del hero. Usarlo en otra posicion banaliza la promesa principal de cada pagina.

**La Regla del Cero Italic.** Ningun elemento del sistema usa cursiva. La enfasis se logra con peso (bold) o con color (terracota), nunca con inclinacion.

## Layout

Contenedor maximo `max-w-7xl` (80rem) centrado con `px-4` a los lados. Sin contenedor mas estrecho para columnas de texto largo: el ancho se controla via `max-w-prose` o `max-w-xl` en elementos de copy individuales.

Grid responsivo basico: `grid-cols-1` en movil, `grid-cols-2` en tablet (768px), `grid-cols-3` o `grid-cols-4` en desktop (1024px+). Sin breakpoints intermedios propios; Tailwind defaults.

**Ritmo vertical de secciones:** `py-16` (64px) para secciones de contenido estandar, `py-20` a `py-28` para secciones hero o CTA de cierre. La primera seccion tras el hero comienza inmediatamente, sin margen extra.

**Alternancia de fondos:** Blanco de Obra → Pared Encalada → Blanco de Obra crea ritmo sin necesidad de separadores visuales. Las secciones sobre Noche del Henares (oscuro) aparecen unicamente en hero y CTA finales.

**Densidad de la navegacion:** Header con altura efectiva de 72px (`h-18 py-3`). Top bar de informacion de contacto de 36px (`py-2`). El sticky header incluye solo logo + nav + CTAs; sin megamenu.

## Elevation & Depth

Sistema plano por defecto. La profundidad se comunica exclusivamente mediante contraste de color entre capas: Noche del Henares debajo, Blanco de Obra encima. Ningun shadow decorativo en reposo.

Las dos excepciones son funcionales, no esteticas:
- **Header sticky** (`shadow-sm`): senala la separacion del contenido desplazado. Sombra minima, no decorativa.
- **Nav dropdown** (`shadow-xl`): el panel flotante necesita desvincularse claramente del fondo. Sombra generosa, contextual.

### Named Rules
**La Regla del Plano por Defecto.** Si un elemento no se mueve ni flota, no tiene sombra. Las sombras describen comportamiento (hover elevado, panel flotante), no estatus visual.

## Shapes

Sistema de formas recto-angulares. La esquina es cuadrada en botones primarios y CTA de conversion. Este es el gesto mas inusual del sistema y el mas cargado de significado: el rectangulo sin radio es la forma de la firma, del contrato, del compromiso formal.

El radio `rounded-sm` (2px) aparece unicamente en el boton de WhatsApp, diferenciandolo del CTA primario de marca. No es una concesion estetica; es una distincion funcional.

Los dropdowns de navegacion y los paneles de contenido son igualmente rectos. Los iconos SVG usan stroke-linecap `round` para no resultar duros a escala pequeña, pero los contenedores son siempre rectangulares.

### Named Rules
**La Regla del Rectangulo Comprometido.** Los botones de conversion y CTA no llevan border-radius. Cualquier nuevo boton de accion primaria debe respetar esta forma. La excepcion es el boton de WhatsApp, que lleva `rounded-sm` para diferenciarse del CTA de marca.

## Components

### Buttons

Caracter: solidos, directos, sin ambiguedad. La forma dice "firma aqui".

- **Shape:** Sin border-radius (0px)
- **Primary:** Fondo Terracota del Corredor (`#A85535`), texto Blanco de Obra, `px-5 py-2.5`, `text-sm font-bold tracking-wider uppercase`, sin borde
- **Hover / Focus:** Fondo cambia a Terracota Profunda (`#8a4229`), `transition-opacity hover:opacity-90` en implementacion actual. Sin transformacion de escala.
- **WhatsApp:** Fondo `#25D366`, texto blanco, `rounded-sm`, icono SVG de WhatsApp inline obligatorio a la izquierda

### Cards / Containers

- **Corner Style:** Cuadrado (sin radius)
- **Background:** Blanco de Obra o Pared Encalada segun alternancia de seccion
- **Shadow Strategy:** Sin sombra en reposo (ver Elevation)
- **Border:** `border border-gray-100` cuando se necesita delimitar sobre fondo blanco
- **Internal Padding:** `p-6` a `p-8` para cards de servicio; `px-5 py-3` para items de lista en dropdown

### Navigation

- **Header sticky:** `bg-white border-b border-gray-100 shadow-sm z-50`
- **Logo:** `font-black text-2xl tracking-tight` — "Trazzo" en Terracota, "360" en gris oscuro
- **Nav links desktop:** `text-sm font-semibold uppercase tracking-wider text-gray-800`, hover `text-[#A85535]`
- **Nav dropdown:** `bg-white border border-gray-100 shadow-xl`, items con `hover:bg-orange-50 hover:text-[#A85535]`
- **Mobile:** Panel colapsable bajo el header, misma logica de color, sin animacion de transicion en implementacion actual
- **Top bar:** `bg-[#111827] text-white text-sm py-2`, hover `text-orange-300`

### Compromisos (componente signature)

Lista de compromisos diferenciadores presentada en variante `condensed` (3 items) o completa (6+ items). Icono de check SVG en Terracota del Corredor, texto en gris oscuro. Sin border, sin shadow. Fondo transparente sobre cualquier superficie de seccion.

## Do's and Don'ts

### Do:
- **Do** usar `font-black` (weight 900) con `letter-spacing: -0.02em` en todos los H1 de hero.
- **Do** reservar la Terracota del Corredor (`#A85535`) para CTAs, links activos y acento de identidad. Nunca como fondo de seccion completa.
- **Do** alternar secciones entre Blanco de Obra (`#FFFFFF`) y Pared Encalada (`#F9F7F4`) para crear ritmo sin separadores visuales.
- **Do** usar botones primarios con bordes rectos (sin border-radius) en todos los CTA de conversion.
- **Do** colocar el keyword principal en el primer parrafo del hero con al menos 2-3 frases de copy real (no solo headline).
- **Do** aplicar `max-w-prose` o `max-w-xl` a columnas de texto largo para mantener la linea entre 65-70 caracteres.

### Don't:
- **Don't** usar el em dash (`—`) en ningun elemento de copy o interfaz. Alternativas: coma, dos puntos, punto, reformulacion.
- **Don't** usar cursiva en ningun elemento del sistema. El enfasis se logra con peso o color.
- **Don't** usar `#25D366` (verde WhatsApp) en ningun contexto que no sea el boton de WhatsApp.
- **Don't** agregar sombras a cards o secciones en reposo. Las sombras son para elementos flotantes o sticky.
- **Don't** mostrar ratings, reseñas o contadores de proyectos hasta que los datos sean reales (`SITE.reviewCount > 0`).
- **Don't** inventar testimoniales, fotografias de proyectos, o puntuaciones de Google antes de que existan activos verificados.
