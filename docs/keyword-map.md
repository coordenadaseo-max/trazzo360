# Mapa de Keywords — Trazzo360

> **Origen de los datos:** DataForSEO (research real). No inventar ni estimar ningún volumen.
> Los campos marcados con `TODO:` necesitan completarse con los datos del research original.
> Regla de integridad (CLAUDE.md): una keyword por URL; nunca fabricar volúmenes.

---

## Regla maestra de asignación

| Criterio | Regla |
|---|---|
| Una keyword por URL | Cada URL apunta a un único intent; si dos páginas compiten, la menor resume y enlaza |
| Keyword principal | Va en `<title>` (inicio) + H1 + primer párrafo de body |
| Variantes | En H2/H3 y en los párrafos de contenido único |
| Anti-canibalización | La página de menor prioridad resume en 2-3 frases y enlaza a la canónica |

**Prioridad de asignación** (quién se queda con el volumen):
1. Hub de servicio (`/servicios/{service}/`) — captura la intención transaccional nacional/regional
2. Hub de zona (`/zonas/{zone}/`) — captura "empresa de reformas en {ciudad}"
3. Combinada (`/{service}/{zone}/`) — captura "{servicio} en {ciudad}"

---

## Páginas hub de servicio (6 páginas)

| URL | Keyword principal | Vol/mes | KD | Keyword secundaria | Vol/mes | KD sec. |
|---|---|---|---|---|---|---|
| /servicios/reformas-integrales/ | reformas integrales | TODO: | TODO: | reforma integral piso | TODO: | TODO: |
| /servicios/reforma-banos/ | reformar baño | 6.600 | TODO: | reforma de baños | 4.400 | TODO: |
| /servicios/reforma-cocinas/ | reformar cocina | TODO: | TODO: | reforma de cocinas | TODO: | TODO: |
| /servicios/reforma-pisos/ | reforma de pisos | 1.000 | TODO: | reforma de vivienda | 2.600 | 11 |
| /servicios/locales-comerciales/ | reforma local comercial | 480 | TODO: | reforma de oficinas | 480 | — |
| /servicios/comunidades-vecinos/ | rehabilitación de edificios | 1.000 | 2 | reforma de fachadas | 260 | — |

> **Nota comunidades-vecinos:** "rehabilitación de edificios" tiene el mayor volumen (1.000/mes) y KD2 (muy baja competencia). El título y H1 deben priorizar esta keyword aunque la URL use "comunidades-vecinos".
>
> **Nota reforma-pisos:** La keyword ignorada "reforma de vivienda / reformas de viviendas" suma 2.600/mes con KD:11 — más del doble del volumen de "reforma de pisos" (1.000). Desarrollar H2 propio y variantes en cuerpo (ver sección 5 de este documento).
>
> **Nota locales-comerciales:** "reforma local comercial" y "reforma de oficinas" tienen el mismo volumen (480). Ambas caben en el mismo hub con H2 propio para oficinas para evitar canibalización.
>
> **Nota reforma-banos:** Keyword adicional "cambio de bañera por ducha" = 1.300/mes, KD:— asignada al hub. Las combinadas mencionan el servicio y enlazan al hub (anti-canibalización).

---

## Páginas hub de zona (8 páginas)

| URL | Keyword principal | Vol/mes | KD | Nota |
|---|---|---|---|---|
| /zonas/alcala-de-henares/ | empresa de reformas Alcalá de Henares | 280 | TODO: | 170 (directa) + 110 (con prep. "en") — cubrir ambas variantes |
| /zonas/torrejon-de-ardoz/ | empresa de reformas Torrejón de Ardoz | 260 | TODO: | municipio primario; mayor volumen por encima de Alcalá |
| /zonas/coslada/ | empresa de reformas Coslada | 280 | TODO: | 140 (directa) + 140 (con prep. "en") |
| /zonas/san-fernando-de-henares/ | empresa de reformas San Fernando de Henares | 220 | TODO: | 110 (directa) + 110 (con prep. "en") |
| /zonas/guadalajara/ | reformas Guadalajara | 460 | TODO: | mayor volumen de la zona; 390 (directa) + 70 (empresa de reformas guadalajara) |
| /zonas/azuqueca-de-henares/ | empresa de reformas Azuqueca de Henares | 40 | TODO: | volumen bajo; municipio de cola |
| /zonas/meco/ | empresa de reformas Meco | ~0 | TODO: | sin volumen medible |
| /zonas/camarma-de-esteruelas/ | empresa de reformas Camarma | ~0 | TODO: | sin volumen medible |

> **Nota sobre Guadalajara:** Es el municipio con más volumen (460/mes), por encima de Alcalá (280) y Torrejón (260). La arquitectura actual debe reflejar que Guadalajara es una oportunidad primaria, no secundaria.
>
> **Variantes con preposición:** En Alcalá, Coslada y San Fernando, la forma "reformas en {ciudad}" tiene tanto volumen como la forma directa. Cubrir en H2, FAQ y anchors internos. No en el title (solo cabe una keyword principal).

---

## Páginas combinadas (48 páginas: 6 servicios × 8 zonas)

Formato de keyword principal: `{servicio} en {ciudad}`

### Patrón de prioridad por servicio

| Servicio | Keyword patrón combinada | Nota |
|---|---|---|
| reforma-banos | reforma de baños en {ciudad} | Extraer volumen por ciudad del research |
| reformas-integrales | reformas integrales en {ciudad} | |
| reforma-cocinas | reforma de cocinas en {ciudad} | |
| reforma-pisos | reforma de pisos en {ciudad} | |
| locales-comerciales | reforma locales {ciudad} | |
| comunidades-vecinos | reformas comunidades {ciudad} | Anti-canicabización con hub de servicio: resumir "rehabilitación de edificios" y enlazar al hub |

> **TODO:** Insertar volúmenes por ciudad×servicio del research DataForSEO original.

---

## Páginas estáticas (5 páginas)

| URL | Keyword | Propósito SEO |
|---|---|---|
| / (home) | empresa de reformas Corredor del Henares | Captura branded + zona geográfica amplia |
| /como-trabajamos/ | precio cerrado reforma / garantía reformas | Captura intención de confianza |
| /contacto/ | presupuesto reforma gratis | CTA transaccional |
| /proyectos/ | reformas antes y después / ejemplos reforma | Evidencia social |
| Legales | — | No SEO |

---

## Cluster de precios (4 URLs pendientes de crear)

Estas páginas capturan el mayor volumen de búsqueda informacional. Crearlas es prioritario
porque las keywords de precio tienen alto volumen y baja dificultad en mercados locales.

| URL propuesta | Keyword objetivo | Vol/mes | KD | CPC | Tipo |
|---|---|---|---|---|---|
| /calculadora-presupuesto-reforma/ | calculadora presupuesto reforma | TODO: | TODO: | — | Herramienta |
| /guias/cuanto-cuesta-reformar-un-bano/ | cuánto cuesta reformar un baño | 1.900 | — | 2,00€ | Guía |
| /guias/cuanto-cuesta-reformar-una-cocina/ | cuánto cuesta reformar una cocina | 1.300 | 1 | 1,31€ | Guía |
| /guias/cuanto-cuesta-una-reforma-integral/ | cuánto cuesta reformar una casa | 590 | 6 | 3,52€ | Guía |

> **Volumen total del cluster de precios: ~10.000 búsquedas/mes** (incluyendo variantes de cada keyword). KD rango: 1–7. Es el cluster más fácil de posicionar de todo el research.
> El KD de "cuánto cuesta reformar un baño" no está disponible en el research; el de la variante "reformar un baño cuánto cuesta" es KD:7.
> "cuánto cuesta reformar un piso" = 260/mes, KD:6, CPC: 2,40€ — incluir como variante en la guía integral.

> Las páginas combinadas `/{service}/{zone}/` incluirán un resumen de 2-3 frases sobre el precio y un enlace a la guía correspondiente. Las guías son las páginas canónicas para el intent informacional de precio.

---

## Notas de anti-canibalización

- **"cambio de bañera por ducha"** → asignado a `/servicios/reforma-banos/` (hub). Las combinadas no desarrollan este H2 en extenso; mencionan el servicio y enlazan al hub.
- **"rehabilitación de edificios"** → asignado a `/servicios/comunidades-vecinos/`. Las combinadas de comunidades-vecinos en cada ciudad no repiten el desarrollo; mencionan en 2-3 frases y enlazan al hub.
- **"empresa de reformas {ciudad}"** → asignado al hub de zona correspondiente. El home usa "Corredor del Henares" como modificador geográfico, no compite con los hubs de zona.
