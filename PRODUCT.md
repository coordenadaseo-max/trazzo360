# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Propietarios particulares en el Corredor del Henares (Madrid/Guadalajara) que tienen una vivienda que necesita reforma y quieren resolver la obra de principio a fin sin convertirse en gestores de gremios. Su trabajo principal: delegar la reforma con la confianza de que el precio acordado es el precio final y la obra se entrega en el plazo comprometido.

Audiencias secundarias confirmadas en código: comunidades de propietarios (zonas comunes) y locales comerciales. La lógica de captación es la misma: precio cerrado, interlocutor único, zona local.

## Product Purpose

Trazzo360 es una empresa de reformas que opera exclusivamente en el Corredor del Henares. Su razón de ser es eliminar la incertidumbre económica y logística de la reforma residencial: el propietario firma un presupuesto cerrado, tiene un único interlocutor durante toda la obra y recibe la vivienda con garantía de 2 años. El sitio web es el canal principal de captación de clientes antes del lanzamiento.

## Positioning

El diferenciador central es la combinación de tres compromisos que ningún competidor local ofrece juntos por escrito:

1. **Precio cerrado:** el precio firmado es el precio final. Sin extras, sin sobrecostes sorpresa.
2. **Especialización geográfica:** solo trabajan en el Corredor del Henares. Conocen proveedores, ayuntamientos y normativa local de los 8 municipios del corredor.
3. **Interlocutor único:** el cliente habla siempre con la misma persona, que coordina todos los gremios internamente.

## Operating Context

- El cliente busca presupuesto online, compara 2-3 empresas y decide principalmente por confianza en el precio y referencias.
- El flujo de conversión es: visita técnica gratuita → presupuesto en 48h → firma de contrato → ejecución.
- El pago se estructura en 3 fases (inicio, avance, entrega).
- El corredor del Henares incluye 8 municipios: Coslada, San Fernando de Henares, Torrejón de Ardoz, Alcalá de Henares, Camarma de Esteruelas, Meco, Azuqueca de Henares, Guadalajara.

## Capabilities and Constraints

- **Servicios:** reformas integrales, reforma de pisos, reforma de baños, reforma de cocinas, comunidades de vecinos, locales comerciales.
- **Zona de actuación:** exclusivamente el Corredor del Henares (los 8 municipios del ring).
- **Fuente de precios:** `src/data/calculator.ts` es la única fuente de verdad. Ningún precio en el sitio puede diferir de los rangos allí definidos.
- **Sin guiones largos (em dash "—"):** norma permanente de copy en todo el sitio.
- **Títulos:** 50-60 caracteres. Metas: máximo 160 caracteres.
- **Datos inventados prohibidos:** reviewCount y ratingValue solo se activan con reseñas reales verificadas.
- **Telèfono, fotos y reseñas:** placeholders pendientes de configurar al lanzar el sitio.
- **Schema JSON-LD:** aggregateRating y Review solo se emiten si SITE.reviewCount > 0.

## Brand Commitments

- **Nombre:** Trazzo360 (invariable).
- **Color corporativo:** #A85535 (terracota/rust).
- **Tagline:** "Reformas Integrales en el Corredor del Henares".
- **Voz:** directa, sin adornos retóricos, orientada a hechos y compromisos concretos. El copy toca puntos de dolor reales (miedo al sobrecoste, a la obra que no acaba) y ofrece soluciones específicas.
- **Compromisos diferenciadores (siempre presentes):** contrato por escrito, pago en tres fases, garantía de 2 años en ejecución.

## Evidence on Hand

Ningún activo de prueba social disponible en este momento (sitio en preparación):
- No hay fotos de obra propia publicadas (los PROJECTS en site.ts son placeholders con tipo 'obra-propia' pero sin imágenes reales).
- No hay reseñas Google verificadas (reviewCount: 0).
- No hay número de teléfono real configurado.

**Restricción:** no fabricar testimoniales, reseñas, puntuaciones ni proyectos de referencia hasta que existan activos reales.

## Product Principles

1. **Certeza por encima de precio bajo.** El cliente paga por eliminar la ansiedad de la obra abierta, no solo por metros cuadrados. El precio cerrado es la promesa central, no un gancho de marketing.
2. **Local de verdad.** La especialización geográfica no es un claim: es una limitación operativa consciente. Solo el Corredor del Henares. Esto permite conocer gremios locales, tiempos de ayuntamiento y referencias de vecinos.
3. **Un único responsable.** La coordinación de gremios es el problema que el cliente quiere evitar. Trazzo360 lo asume internamente. El interlocutor único no es comodidad; es el producto.
4. **Prueba antes de promesa.** Ningún activo de prueba social se publica hasta que sea real. Las reseñas, fotos y valoraciones se activan cuando existen, no como lanzamiento cosmético.
5. **Copy honesto, sin sobreestimaciones.** Los rangos de precio son reales. Las duraciones son reales. El cliente llega a la visita técnica con expectativas correctas.
