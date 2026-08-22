# TRAZZO360-SYSTEM — Sistema Operativo Canónico

> **Fuente de verdad operativa para producto, copy, SEO, datos y conversión.**
>
> Orden de precedencia cuando hay contradicción:
> 1. `src/data/calculator.ts` — precios y plazos (autoridad máxima)
> 2. Este documento + `docs/DECISION-REGISTER.md` — decisiones aprobadas
> 3. `CLAUDE.md` — reglas de proyecto
> 4. Implementación actual en `src/`
>
> Antes de cualquier modificación de producción: leer §1 (Producto), §9 (Datos) y el DECISION-REGISTER.

---

## 1. Producto

### 1.1 Definición de Producto

**Qué es Trazzo360:** Empresa de reformas especializada en el Corredor del Henares (Madrid). Opera en 8 municipios. Un solo responsable de obra como interlocutor único.

**Para qué existe:** Resolver la incertidumbre del propietario ante una reforma. El mercado de reformas tiene un problema de confianza estructural: precios que se disparan, plazos que no se cumplen, contratistas que desaparecen. Trazzo360 responde con: precio cerrado, plazos concretos, interlocutor identificado, garantía contractual.

**Lo que diferencia a Trazzo360 (verificable, no publicitario):**
- Precio cerrado por contrato con alcance y fecha definidos
- Sistema de pagos 40% firma / 40% mitad de obra / 20% entrega conforme (protege al cliente)
- Garantía 2 años sobre ejecución por defectos de instalación (defectos del trabajo, no de materiales)
- Un solo responsable que viene a la visita técnica, coordina la obra y está localizable durante toda la ejecución
- Equipos estables (no rotación de subcontratas desconocidas entre obra y obra)

### 1.2 Usuarios

**Primario: propietarios de vivienda en el Corredor del Henares**
- Perfil: propietarios de piso o casa con reform pendiente (baño obsoleto, cocina de los 80, suelos desgastados, reforma integral)
- Localización geográfica: 8 municipios del Corredor (ver §6)
- Motivación: han visto o vivido obras que salieron mal, buscan un contratista en quien confiar antes que el precio más bajo
- Miedo dominante: perder el control del proceso, pagar más de lo acordado, no saber con quién hablar cuando algo falla

**Secundario: comunidades de vecinos**
- Administradores de fincas o presidentes de comunidad
- Necesitan coordinar con múltiples partes (vecinos, técnico, ayuntamiento)
- El dolor específico es la coordinación y la visibilidad del proceso, no solo el precio

**Secundario: locales comerciales**
- Propietarios o arrendatarios de locales que necesitan adecuación o reforma
- El coste de cada día cerrado es directo. El plazo es el argumento decisivo.

### 1.3 Contexto Operativo

- **Municipio principal:** Torrejón de Ardoz (nunca Alcalá ni "sede central en Alcalá")
- **Área de servicio:** Corredor del Henares — 8 municipios (ver §6.1)
- **Estado de la empresa:** Arrancando. Sin reseñas, sin fotos de obra propia, sin histórico como empresa. La experiencia es de la persona (15+ años en obra), no de la marca.
- **Pendientes reales antes del lanzamiento:** teléfono real, CIF/NIF, domicilio social, Formspree ID (ver §13)

### 1.4 Compromisos de Marca (COMPROMISOS en trust.ts)

Estos 6 compromisos son declarables porque tienen respaldo contractual real:

| Compromiso | Descripción | Verificable |
|---|---|---|
| contrato-escrito | Contrato por escrito con alcance, precio y fecha | Sí — se firma antes de empezar |
| pago-fases | 40% firma / 40% mitad obra / 20% entrega conforme | Sí — estructura de pago contractual |
| garantia-ejecucion | 2 años sobre defectos de instalación | Sí — condición contractual |
| garantia-materiales | Garantía del fabricante en materiales | Sí — pasan directamente al cliente |
| imprevistos | Se comunican antes de actuar, el cliente decide | Sí — es el protocolo declarado |
| desistimiento | 14 días para desistir del contrato | Sí — derecho legal reforzado |

### 1.5 Hechos No Declarables

Jamás mencionar bajo ninguna forma:
- Reseñas, valoraciones, testimonios, estrellas, aggregateRating
- Obras realizadas, número de proyectos, años de la empresa (sí de la persona)
- Seguro de responsabilidad civil, alta en REA, certificaciones, premios
- CIF, razón social, domicilio fiscal (pendientes de alta)

---

## 2. North Star Editorial

**"La Obra que Cumple"**

No es un slogan. Es la pregunta de control para cualquier decisión de copy:
> ¿Este texto habla de lo que cumplimos o de lo que prometemos?

El cliente no quiere soñar con la reforma; quiere que lo que se firma se ejecute. El copy no dice "transforma tu hogar" sino "la cocina que funciona en 5 semanas con precio cerrado".

**Tres preguntas de control antes de publicar cualquier bloque:**
1. ¿Explica el *qué* y el *por qué*? (capa técnica)
2. ¿Habla de lo que vive el cliente durante y después? (capa humana)
3. ¿Hay una persona detrás, no solo una empresa? (capa de identidad)

Si falta alguna de las tres, el bloque está incompleto.

---

## 3. Marca y Voz

### 3.1 Posicionamiento

**Precio cerrado + especialización geográfica + único interlocutor.**

No competir en precio bajo. No competir en diseño. Competir en predictibilidad y responsabilidad directa.

### 3.2 Voz Editorial

**Asesoramiento antes que venta.** Técnica y empatía al mismo nivel, no en secciones distintas.

**Tono que SÍ:**
- Frases cortas, párrafos de 3-4 líneas máximo
- Verbos de acompañamiento: "te avisamos", "decidimos contigo", "te explicamos", "tendrás"
- Concreción temporal: "los primeros 4 días", "el jueves ya funciona", "en 10-14 días hábiles"
- Reconocer lo incómodo antes de explicar cómo se gestiona
- Beneficio cotidiano como cierre (cómo es la vida después de la reforma)

**Tono que NO:**
- "Respondemos en 24h" — suena a call center, no a un solo responsable
- "Nos comprometemos a..." + lista — suena a condiciones generales
- Párrafos de 6+ líneas de proceso técnico sin mención al usuario
- Superlativos: "el mejor", "la máxima calidad", "sin igual en el Corredor"
- "Equipo de profesionales altamente cualificados" — vacío sin persona
- Acumulación de advertencias que genere más ansiedad que la que resuelve

### 3.3 Prohibiciones Absolutas de Copy

| Prohibido | Razón | Alternativa |
|---|---|---|
| "equipo propio" | Afirmación societaria no verificada | "mismos equipos, único interlocutor" |
| "sin subcontratas" | Idem | "un solo responsable, siempre accesible" |
| em-dash (—) en interfaz | ADN de contrato, no prosa literaria | punto y aparte, o dos frases |
| "respondemos en 24h" | Contradice el modelo de interlocutor único | "disponible durante toda la obra" |
| Superlativos sin datos | Promocional sin respaldo | Dato concreto o nada |
| Obras, reseñas, años empresa | No existen todavía | Omitir o reformular con la persona |

---

## 4. Sistema de Copy — Estructura por Tipo de Bloque

### 4.1 H1 — Regla por Tipo de Página

| Tipo de página | Estructura canónica | Ejemplo |
|---|---|---|
| Hub de servicio | [Servicio] en [área general] | "Reforma de cocinas en el Corredor del Henares" |
| Hub de zona | [Tipo empresa] en [Municipio] | "Empresa de reformas en Alcalá de Henares" |
| Combinada S×Z | [Servicio] en [Municipio] | "Reforma de baños en Torrejón de Ardoz" |
| Home | North Star + área | "La reforma que cumple en el Corredor del Henares" |

**Reglas del H1:**
- Un solo H1 por página, nunca omitido
- Tipografía Display (3–4.5rem / peso 900 / tracking -0.02em) solo aquí
- Fondo negro puro (#111827), sin terracota en el texto del H1
- La keyword principal va siempre al inicio

### 4.2 H2 — Variaciones (no repeticiones)

**Regla:** Los H2 de diferentes páginas del mismo servicio deben usar variaciones de keyword, no la misma frase. Incorrecto: dos páginas con H2 "Reforma de baños completa". Correcto: una con "Reforma de cuarto de baño" y otra con "Renovación de baños por tramos".

**Regla obligatoria:** Párrafo de copy propio inmediatamente después de cada H2. Nunca H2 seguido directamente de lista sin párrafo introductorio.

### 4.3 Bloques Obligatorios por Tipo de Página

**Hubs de servicio** (mínimo 2800w):
- Hero con precio orientativo y plazo
- Ángulo editorial del servicio (A1 cuando disponible)
- Vida del cliente durante la obra (§6.3 de CLAUDE.md)
- Resultado cotidiano, no solo técnico (§6.4 de CLAUDE.md)
- Puente precio cerrado + imprevistos (§6.5 de CLAUDE.md) — obligatorio cuando se mencionen ambos
- Tabla de precios por tramo/calidad (de calculator.ts, con overflow-x:auto)
- Timeline con semanas concretas (de calculator.ts)
- Enlace a zonas donde opera
- Enlace al hub de zona del municipio principal (Torrejón)
- FAQ con `<details>`/`<summary>`, em-dash solo en prosa si titular aprueba (ver DEC-B03)

**Hubs de zona** (mínimo 1700w):
- Contexto territorial específico: tipología de vivienda, décadas, barrios, patologías locales
- Listado de servicios disponibles en la zona con enlace a las combinadas
- Enlace cruzado a hubs de servicio
- Información sobre normativa local si es relevante

**Combinadas S×Z** (mínimo 1500w):
- H1 = servicio + municipio
- Contenido específico del municipio (no copiar literalmente de otras combinadas)
- Precio y plazo del servicio (de calculator.ts)
- Contexto local de la tipología de vivienda o local
- Enlace al hub de servicio y al hub de zona

---

## 5. Ángulos por Servicio (Matriz A-level)

### 5.1 Servicios en A1 (canónicos — mantener)

| Servicio | Problema del cliente | Ángulo | Tesis canónica | Subángulos |
|---|---|---|---|---|
| **Reforma de baños** | Obra pequeña donde errores ocultos en impermeabilización, instalaciones y secuencia pueden obligar a rehacer. Más el impacto de quedarse sin el único baño cuando solo existe uno. | Lo que no se ve determina si el baño queda bien resuelto | Antes del acabado importan la impermeabilización, las instalaciones y la secuencia de ejecución. Cuando la vivienda solo tiene un baño, la planificación del acceso forma parte de esa ejecución. | "Si solo tienes un baño" (subángulo de convivencia — potente pero no la tesis total); plazos cortos (2-3 sem esencial); punto de inflexión comunicado |
| **Reforma de cocinas** | La reforma afecta al espacio de mayor uso cotidiano. Una mala decisión inicial de distribución o planificación puede alargar la pérdida de funcionalidad. | Planificar la funcionalidad antes de empezar | La distribución se decide antes que los muebles y la planificación previa determina cómo se atraviesan las semanas sin cocina. | Instalaciones existentes; extracción; electricidad; materiales preparados antes de obra; recuperación de funcionalidad. Ninguno de ellos es la tesis principal: son los ejes que la sostienen. |

### 5.2 Servicios en A2 con tesis A1 definida (pendiente de despliegue editorial)

| Servicio | Problema del cliente | Ángulo | Tesis canónica A1 | Qué NO es la tesis |
|---|---|---|---|---|
| **Reformas integrales** | Múltiples gremios, múltiples decisiones, múltiples dependencias. ¿Quién coordina todo? | Coordinación como parte central del producto | Un único interlocutor coordina la obra completa y las dependencias entre gremios: el cliente no tiene que coordinar ni mediar entre los distintos gremios. | "Las 3 fases con entregable" es un recurso de proceso o subángulo, no la tesis principal. |
| **Reforma de pisos** | No sé cuánto merece la pena reformar ni en qué orden. | Diagnóstico antes que alcance | El estado de la vivienda y de sus instalaciones determina qué merece conservarse, qué renovar, y cuándo tiene sentido pasar a reforma integral en lugar de reforma parcial. | "El piso que se reforma viviendo en él" es un argumento secundario sobre convivencia, no el núcleo del servicio. |
| **Locales comerciales** | El alcance de obra depende del negocio que debe funcionar dentro del local. | Actividad antes que diseño | El tipo de actividad (restauración, oficina, comercio, taller) determina las instalaciones, los condicionantes técnicos y el alcance real de la reforma antes de hablar de distribución o acabados. | "No cierra más días de los necesarios" es una objeción de plazo importante pero no la tesis del servicio. |
| **Comunidades de vecinos** | La obra depende de decisiones colectivas, organización, accesos y ejecución en un edificio en uso. | Decisión + organización + ejecución | La reforma en comunidad empieza antes de la obra: propuesta para junta, alcance, coordinación de accesos y ejecución planificada para mantener el uso del edificio y gestionar las afecciones y accesos durante los trabajos. | "El responsable que habla con todos" es un argumento de apoyo sobre la persona, no la tesis completa del servicio. |

**Nota:** Las páginas en A2 no están incorrectas, solo sin diferenciación narrativa suficiente. La evolución a A1 es tarea de contenido post-lanzamiento, no blocker de lanzamiento.

---

## 6. Arquitectura de Páginas

### 6.1 Mapa de Páginas — 86 en Total

| Tipo | Count | Template / Ruta | Indexable |
|---|---|---|---|
| Home | 1 | `src/pages/index.astro` | Sí |
| Hubs de servicio | 6 | `src/pages/servicios/[slug].astro` | Sí |
| Hubs de zona | 8 | `src/pages/zonas/[slug].astro` + `zonas/alcala-de-henares.astro` (standalone) | Sí |
| Combinadas servicio×zona | 48 | `src/pages/[servicio]/[barrio].astro` + `reforma-cocinas/alcala-de-henares.astro` (standalone) | Sí |
| Guías | 6 | `src/pages/guias/*.astro` | Sí |
| Calculadora | 1 | `src/pages/calculadora.astro` | Sí |
| Cómo trabajamos | 1 | `src/pages/como-trabajamos.astro` | Sí |
| Proyectos | 1 | `src/pages/proyectos.astro` | Sí (cuando haya fotos) |
| Contacto | 1 | `src/pages/contacto.astro` | Sí |
| **Total indexables** | **71** | | |
| Gracias | 1 | `src/pages/gracias.astro` | noindex |
| Aviso legal | 1 | `src/pages/aviso-legal.astro` | noindex |
| Privacidad | 1 | `src/pages/privacidad.astro` | noindex |
| Cookies | 1 | `src/pages/cookies.astro` | noindex |
| Lab (varios) | 10 | `src/pages/lab/*.astro` | noindex |
| **Total noindex** | **14** | | |
| 404 | 1 | `src/pages/404.html` | noindex, fuera del sitemap |
| **TOTAL** | **86** | | |

### 6.2 Páginas Standalone Reference (No Template)

Estas dos páginas NO usan sus templates genéricos. Son referencias canónicas de composición:

| Página | Ruta | Por qué standalone |
|---|---|---|
| Zona Alcalá de Henares | `src/pages/zonas/alcala-de-henares.astro` | S1 + golden reference de composición V1 para zonas |
| Cocinas × Alcalá | `src/pages/reforma-cocinas/alcala-de-henares.astro` | S1 + golden reference de composición V1 para combinadas |

### 6.3 Templates Paramétricos

| Template | Genera | Parámetros |
|---|---|---|
| `src/pages/servicios/[slug].astro` | 6 hubs de servicio | slug del servicio |
| `src/pages/zonas/[slug].astro` | 7 hubs de zona (menos Alcalá) | slug del municipio |
| `src/pages/[servicio]/[barrio].astro` | 47 combinadas (menos cocinas×Alcalá) | servicio + barrio |

### 6.4 Fuentes de Contenido

| Archivo | Contenido |
|---|---|
| `src/data/calculator.ts` | **Autoridad única de precios y plazos** |
| `src/data/site.ts` | Datos del sitio (nombre, contacto, municipios, proyectos) |
| `src/data/trust.ts` | Autor, compromisos de marca |
| `src/data/services.ts` | Configuración de servicios (slugs, nombres, colores) |
| `src/data/content/*.ts` | Contenido editorial por servicio (6 archivos) |
| `src/data/content/levels.ts` | S-level por combinación servicio×zona |

---

## 7. Fórmula Servicio × Zona

### 7.1 Los 8 Municipios del Área de Servicio

| Municipio | Slug | Tamaño | Notas |
|---|---|---|---|
| Torrejón de Ardoz | torrejon-de-ardoz | Grande | mainCity — prioridad máxima |
| Alcalá de Henares | alcala-de-henares | Muy grande | Mayor ciudad, S1 en 4 servicios, standalone |
| Coslada | coslada | Grande | Zona industrial + residencial |
| San Fernando de Henares | san-fernando-de-henares | Medio | Zona logística + residencial |
| Mejorada del Campo | mejorada-del-campo | Medio | Residencial |
| Velilla de San Antonio | velilla-de-san-antonio | Pequeño | Residencial |
| Loeches | loeches | Pequeño | Residencial |
| Camarma de Esteruelas | camarma-de-esteruelas | Pequeño | Residencial + industrial |

### 7.2 Los 6 Servicios

| Servicio | Slug | Tipo de precio | Plazo esencial |
|---|---|---|---|
| Reformas integrales | reformas-integrales | €/m² (min 40m²) | 10-14 semanas |
| Reforma de pisos | reforma-pisos | €/m² | 5-8 semanas |
| Reforma de baños | reforma-banos | Por tramo de superficie | 2-3 semanas |
| Reforma de cocinas | reforma-cocinas | Por tramo de superficie | 3-5 semanas |
| Locales comerciales | locales-comerciales | Variable | 4-8 semanas |
| Comunidades de vecinos | comunidades-vecinos | Variable | 4-12 semanas |

### 7.3 Matriz S-Level por Combinación

**S1 (datos locales específicos + criterio técnico diferenciado):**

| Servicio | Municipio | Justificación |
|---|---|---|
| reformas-integrales | Alcalá de Henares | Parque inmobiliario 60-70 + volumen |
| reforma-cocinas | Alcalá de Henares | Instalaciones obsoletas específicas + volumen |
| locales-comerciales | Alcalá de Henares | Zona universitaria + polígonos + volumen |
| comunidades-vecinos | Alcalá de Henares | Grandes bloques + zona universitaria + volumen |

**S3 (transaccional compacto, diferenciación territorial insuficiente):**

| Servicio | Municipio | Justificación |
|---|---|---|
| locales-comerciales | Camarma de Esteruelas | Muy baja densidad de locales + búsqueda mínima |

**S2 (territorial con criterio técnico general):** Todas las demás combinaciones (43 de 48).

---

## 8. SEO

### 8.1 Estructura Técnica

- `<title>`: único por página, 50-60 caracteres, keyword principal al inicio
- `<meta description>`: única, 140-155 caracteres, no concatenar headlines (produce ~250 chars)
- Un solo `<h1>` por página, jerarquía sin saltos (h1 > h2 > h3, nunca h3 sin h2)
- Canonical autorreferenciado en todas las páginas
- Sitemap: 71 URLs (excluye noindex + lab)
- robots.txt: Disallow /lab/, /gracias/
- Schema JSON-LD: una sola entidad `@id: https://trazzo360.es/#business`

### 8.2 Schema JSON-LD — Reglas

- `GeneralContractor` se declara una sola vez. El resto de schemas usan `{"@id": "..."}`.
- `telephone`: solo si `SITE.phone !== 'TU_TELEFONO'`
- `aggregateRating`: solo si `SITE.reviewCount > 0` (no hay reseñas reales = no incluir)
- `openingHoursSpecification`: condicional al teléfono configurado

### 8.3 Enlazado Interno

- Toda página combinada enlaza a: hub de servicio + hub de zona
- Toda página hub de zona enlaza a: hubs de servicio para esa zona
- Toda página hub de servicio enlaza a: zonas donde opera
- Anchor text: descriptivo, relacionado con la intención de búsqueda del destino
- Nunca: "Ver más", "Aquí", "Leer más" cuando existe alternativa descriptiva
- Nunca el mismo anchor exacto dos veces hacia la misma URL en la misma página
- Tarjetas clicables: enlace expandido por CSS en el título, no `<a>` envolviendo todo el contenido

### 8.4 Mínimos de Contenido (medidos con `scripts/audit-content.mjs`)

| Tipo | Palabras | Boilerplate máx | Verificación |
|---|---|---|---|
| Hubs de servicio | 2.800-3.200 | <25% | `npm run audit-links && npm run audit-content` |
| Hubs de zona | 1.700-1.900 | <30% | Idem |
| Combinadas S×Z | 1.500-1.700 | <35% | Idem |
| Guías | 1.800-2.500 | <15% | Idem |

---

## 9. Datos — Jerarquía y Autoridad

### 9.1 Precios (calculator.ts = autoridad máxima)

**NUNCA extraer precios de ninguna otra fuente.** Si hay discrepancia entre un content file y calculator.ts, calculator.ts gana siempre.

> **Política de duplicación:** Las tablas a continuación son un snapshot informativo de referencia rápida.
> Ante cualquier discrepancia entre estas tablas y `src/data/calculator.ts`, **calculator.ts prevalece siempre.**
> No actualizar estas tablas manualmente; son orientativas para lectura humana, no para implementación.

**Cómo usar calculator.ts:** Abrir el archivo, localizar el servicio por su clave (`reformas-integrales`, `reforma-banos`, etc.), y leer los valores de `priceRange`, `timelineWeeks` y `qualityDetails` en el objeto `qualityLevels`. El cálculo por tramo para baños y cocinas está en `trancheDetails`.

**Reformas Integrales (€/m²):**
| Calidad | Rango | Plazo |
|---|---|---|
| Esencial | 650-800 €/m² | 10-14 sem |
| Media | 800-1.000 €/m² | 12-16 sem |
| Alta | 1.000-1.400 €/m² | 14-20 sem |
Mínimo: 40m² (esencial mínimo real: 26.000€)

**Reforma de Pisos (€/m²):**
| Calidad | Rango | Plazo |
|---|---|---|
| Esencial | 350-450 €/m² | 5-8 sem |
| Media | 450-600 €/m² | 6-10 sem |
| Alta | 600-800 €/m² | 8-12 sem |

**Reforma de Baños (por tramo de superficie):**
| Tramo | Esencial | Plazo esencial |
|---|---|---|
| Hasta 4m² | 2.800-3.800€ | 2-3 sem |
| 4-6m² | 3.500-5.000€ | 3-4 sem |
| 6-9m² | 4.500-6.500€ | 4-6 sem |
| +9m² | 5.500-8.000€ | 4-6 sem |

**Reforma de Cocinas (por tramo de superficie):**
| Tramo | Esencial | Plazo esencial |
|---|---|---|
| Hasta 8m² | 5.000-7.500€ | 3-5 sem |
| 8-12m² | 6.000-9.000€ | 4-7 sem |
| 12-16m² | 7.500-11.500€ | 6-10 sem |
| +16m² | 9.000-14.000€ | 6-10 sem |

**Locales Comerciales:**
| Calidad | Plazo esencial |
|---|---|
| Esencial | 4-8 sem |
| Media | 6-10 sem |
| Alta | 8-14 sem |

**Comunidades de Vecinos:**
| Calidad | Plazo esencial |
|---|---|
| Esencial | 4-12 sem |
| Media | 6-16 sem |
| Alta | 8-20 sem |

### 9.2 Datos de Negocio (site.ts)

| Dato | Valor actual | Estado | Notas |
|---|---|---|---|
| `SITE.name` | 'Trazzo360' | Definitivo | |
| `SITE.phone` | 'TU_TELEFONO' | **BLOCKER** | Desbloquea: header, WhatsApp, horario, schema |
| `SITE.whatsapp` | 'TU_TELEFONO' | **BLOCKER** | Mismo número que phone |
| `SITE.email` | 'info@trazzo360.es' | Definitivo | |
| `SITE.address` | 'Corredor del Henares, Madrid' | Área descriptiva | NO usar como domicilio legal |
| `SITE.mainCity` | 'Torrejón de Ardoz' | Definitivo | Nunca cambiar a Alcalá |
| `SITE.reviewCount` | 0 | Correcto | No incrementar sin reseñas reales |
| `SITE.ratingValue` | 0 | Correcto | No incrementar sin reseñas reales |

### 9.3 Trust (trust.ts)

| Dato | Valor actual | Estado | Notas |
|---|---|---|---|
| `AUTHOR.role` | 'Fundador y responsable de obra de Trazzo360' | Definitivo | Usar siempre esta formulación |
| `AUTHOR.yearsInTrade` | 15 | Definitivo como dato, **no renderizable** | Años de la persona, no de la empresa |
| `AUTHOR.name` | null | **PENDIENTE** | Sustituir cuando empresa registrada |

---

## 10. Claims — Política

### 10.1 Pirámide de Confianza para Claims

1. **Dato contractual verificable** (máxima credibilidad): precio cerrado, 40/40/20, garantía 2 años, desistimiento 14 días
2. **Dato técnico objetivo** (alta credibilidad): plazos por tramo de calculator.ts, precio por m² / por tramo
3. **Práctica operativa declarada** (credibilidad media): "comunicamos antes de actuar", "mismos equipos"
4. **Beneficio cotidiano** (credibilidad si está fundamentado): "el jueves ya funciona el baño"
5. **Superlativo sin datos** (no usar nunca): "el mejor", "la máxima calidad"

### 10.2 Claims Prohibidos

- Claims de 24h/48h de respuesta (verificado 0 en Lote F, no volver a añadir)
- Número de obras realizadas
- Años de empresa
- Reseñas, estrellas, ratings
- "Sin sorpresas" sin el puente precio cerrado + imprevistos
- Garantía de satisfacción sin definición contractual

### 10.3 El Puente Obligatorio: Precio Cerrado + Imprevistos

Cuando una página menciona "precio cerrado" e "imprevistos" en la misma pantalla, debe incluir el párrafo explicativo (ver CLAUDE.md §6.5). No omitirlo por brevedad.

---

## 11. Conversión

### 11.1 Flujo de Conversión

```
Búsqueda local
  → Página de aterrizaje (hub zona / combinada / hub servicio)
    → Comprensión del servicio + precio orientativo
      → Formulario de contacto / WhatsApp
        → /gracias/ (noindex)
```

### 11.2 CTAs — Reglas

- CTA primario: botón sin border-radius, fondo #A85535, hover #8a4229
- CTA WhatsApp: `rounded-sm` (única excepción a regla del rectángulo), fondo #25D366
- CTA de sección final: fondo #111827 (no terracota como fondo de sección)
- Máximo 2 CTAs por sección (no competencia de atención)
- Texto del CTA: acción concreta ("Pedir presupuesto sin compromiso", no "Contactar")

### 11.3 Formulario de Contacto

- Campos: nombre (required), teléfono (required), email (optional), descripción (required)
- Checkbox de aceptación de privacidad (required)
- Action: `https://formspree.io/f/[FORM_ID]` — **BLOCKER** (ver §13)
- Redirect: `/gracias/` (noindex)
- Sin analytics de comportamiento (0 KB JS cliente)

---

## 12. Fotografía

### 12.1 Estado Actual

- `PROJECTS`: 4 entradas placeholder, todas con `published: false`
- Sin fotos de obra propia en producción
- Las imágenes actuales son ilustrativas genéricas

### 12.2 Reglas para Cuando Lleguen Fotos Reales

- `tipo: 'ilustrativa'` — descripción del contenido en alt, sin metadatos de obra
- `tipo: 'obra-propia'` — alt + municipio + m² + plazo + fecha (todos obligatorios)
- Nunca mezclar tipos en el mismo componente que renderice metadatos de obra
- Un componente que recibe `obra-propia` debe fallar el build si recibe `ilustrativa`

### 12.3 Orden de Prioridad para Fotografía

1. Baños: alta demanda visual, menor espacio = fotos más impactantes por m²
2. Cocinas: reforma de mayor inversión media = fotos de antes/después más persuasivas
3. Integrales: pocas pero representativas (vivienda completa)
4. Pisos: fáciles de conseguir (suelos, pintura)
5. Locales: difíciles de conseguir pero muy persuasivas para ese segmento

---

## 13. Pre-Launch Blockers

Estado actual: **READY FOR PRE-LAUNCH DATA** (Lote F, 2026-08-21)

### PRE-LAUNCH BLOCKER (obligatorios antes de publicar)

| # | Dato | Archivo(s) | Acción requerida |
|---|---|---|---|
| 1 | Teléfono real | `src/data/site.ts` | Sustituir 'TU_TELEFONO' en phone, phoneDisplay, whatsapp. Desbloquea: header, WhatsApp, horario, schema JSON-LD |
| 2 | WhatsApp | `src/data/site.ts` | Mismo número que phone. Condicional ya implementado; con dato real, el botón aparece. |
| 3 | Formspree ID | `src/pages/contacto.astro:45` | Crear cuenta en formspree.io + copiar ID + sustituir YOUR_FORM_ID |
| 4 | CIF/NIF | `aviso-legal.astro:32`, `privacidad.astro:31` | Sustituir [Completar con tu CIF/NIF] |
| 5 | Domicilio social | `aviso-legal.astro:33`, `privacidad.astro:32` y luego `site.ts` | Sustituir [Completar con domicilio social real] |

### PENDIENTE DE AUTORIZACIÓN (del titular)

| # | Dato | Archivo(s) | Condición |
|---|---|---|---|
| 1 | Confirmación de yearsInTrade | `index.astro:287`, `como-trabajamos.astro:93` | Cuando el titular confirme la cifra: descomentar bloques marcados `PRE-LAUNCH BLOCKER: cifra de años`. No depende del registro de empresa. |

### OPCIONAL / FUTURO (no blocker)

| # | Item | Notas |
|---|---|---|
| 1 | Nombre del fundador | `trust.ts AUTHOR.name = null`. No depende necesariamente del registro de empresa. Cuando el titular decida publicarlo: sustituir null por el nombre real. |
| 2 | Fotografías de obra propia | Cuando lleguen: activar PROJECTS con `published: true` y añadir fotos reales con metadatos de obra |
| 3 | OG image real | `/public/og.jpg` 1200x630px |
| 4 | Favicon real | `/public/favicon.svg` + `/public/favicon.ico` con branding |
| 5 | Google Analytics / Search Console | Añadir en Layout.astro si se desea tracking |

### DECISIÓN DE DESARROLLO (no decisión del titular)

| # | Item | Notas |
|---|---|---|
| 1 | Orden de evolución V2 → V1 en hubs | Cuatro hubs en A2 (Integrales, Pisos, Locales, Comunidades). Priorizar según tráfico esperado y esfuerzo editorial. Decisión técnica + editorial, no del titular. |
| 2 | Limpieza de em-dash en 28 ficheros | Deuda técnica de contenido. Ver DT-F01 en DECISION-REGISTER.md. |

### Secuencia de lanzamiento

1. Titular entrega: teléfono, CIF/NIF, domicilio social
2. Crear cuenta Formspree + copiar ID
3. Editar `src/data/site.ts` con teléfono y domicilio social
4. Editar `contacto.astro` con ID Formspree
5. Editar `aviso-legal.astro` y `privacidad.astro` con CIF/NIF
6. (Si titular confirma) Descomentar años de experiencia: index.astro:287 y como-trabajamos.astro:93
7. `npm run build` — verificar 86 páginas OK
8. Deploy
9. Submit sitemap en Google Search Console
10. Verificar formulario con envío real
---

*Última actualización: 2026-08-22. Este documento no se modifica sin razón explícita y sin actualizar `docs/DECISION-REGISTER.md`.*
