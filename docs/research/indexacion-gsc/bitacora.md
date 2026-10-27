> ESTADO: INVESTIGACIÓN · NO NORMATIVO
> Origen: Claude Code (Opus 5.5) y anotaciones del titular · Fecha: 2026-10-27
> No es regla del proyecto. Para aplicarse debe promoverse a una decisión en
> docs/DECISION-REGISTER.md.

# Bitácora de indexación

Documento vivo. Se añaden filas; no se borran ni se reescriben las anteriores. Cómo se trabaja: [README](./README.md).

## Foto de partida (datos de Search Console hasta el 23-10-2026)

Fuente: exportaciones de Search Console del 23-10 y [auditoría del 27-10](./2026-10-27-auditoria-indexacion.md).

- **Sitio publicado:** 13-09-2026. Paso a `www`: 13-09 a las 20:32 (commit `655ec69`, DEC-A30).
- **Gráfico de indexación:** 31 indexadas y 45 sin indexar, sin cambios del 14-09 al 23-10.
- **Sitemap (70 URL):** 31 indexadas, 35 «Descubierta: actualmente sin indexar» y 4 «Rastreada: actualmente sin indexar».
- **Las 35 descubiertas** son todas combinadas y Google no ha descargado ninguna (último rastreo `1970-01-01`).
- **Las 13 combinadas indexadas** tienen todas su último rastreo el 14-09.
- **Rendimiento:** 3 clics en total. Posición media entre 56 y 88 en las URL con más de 100 impresiones. `/reformas-integrales/coslada/` 399 impresiones (posición 60,6); `/reforma-pisos/alcala-de-henares/` 292 (posición 67,2).

**Combinadas por estado** (I = indexada, D = descubierta sin indexar):

| Servicio | Coslada | San Fernando | Torrejón | Alcalá | Camarma | Meco | Azuqueca | Guadalajara | Indexadas |
|---|---|---|---|---|---|---|---|---|---|
| Reformas integrales | I | I | D | D | D | D | D | D | 2/8 |
| Reforma de baños | D | I | D | D | D | D | D | D | 1/8 |
| Reforma de cocinas | D | D | D | D | D | D | D | D | 0/8 |
| Reforma de pisos | D | I | D | I | D | D | D | D | 2/8 |
| Locales comerciales | I | I | D | D | D | D | D | D | 2/8 |
| Comunidades de vecinos | I | I | I | I | D | D | I | I | 6/8 |

**Rastreadas sin indexar:** `/servicios/reforma-banos/`, `/zonas/coslada/`, `/zonas/meco/`, `/contacto/` (fecha de rastreo sin conocer).

## Cambios

Todo lo que pueda afectar a Google: commits en la web, solicitudes de indexación, sitemaps enviados.

| Fecha | Cambio | Dónde | Qué se espera | Cómo se mide | Resultado |
|---|---|---|---|---|---|
| 2026-10-27 | Las migas de los 6 hubs de servicio dejan de enlazar a `/servicios/` (404); corregidos 16 anchors «en en» en los hubs de comunidades y locales | Commit `1fdf69e`, publicado en Vercel | Que `/servicios/` deje de aparecer como 404 en el informe de páginas. No se espera efecto en la indexación de las combinadas | Indexación → Páginas, motivo «No se ha encontrado (404)» | |
| | Solicitud de indexación del grupo A (8 combinadas) | Search Console | Que las 8 tengan fecha de rastreo antes que las de control | Inspección de URL, días 3, 7, 14 y 21 | |
| | Solicitud de indexación de las 4 rastreadas sin indexar | Search Console | Que se vuelvan a rastrear | Inspección de URL | |

## Mediciones

Una fila por fecha. Mismos informes y filtros cada vez.

| Fecha | Indexadas | Sin indexar | Descubiertas | Rastreadas sin indexar | 404 | Solicitudes de rastreo (90 días) | Tiempo medio de respuesta | Estado del host | Notas |
|---|---|---|---|---|---|---|---|---|---|
| 2026-10-23 | 31 | 45 | 35 | 4 | | | | | Foto de partida (exportación del 23-10) |
| | | | | | | | | | Día 0 |

## Diagnóstico del día 0

**Las 6 URL sin indexar fuera del sitemap** (paso 2 del plan):

| URL | Motivo |
|---|---|
| | |

**Las 4 rastreadas sin indexar** (paso 4 del plan):

| URL | Último rastreo | Obtención | ¿Indexación permitida? | Canónica declarada | Canónica de Google |
|---|---|---|---|---|---|
| `/servicios/reforma-banos/` | | | | | |
| `/zonas/coslada/` | | | | | |
| `/zonas/meco/` | | | | | |
| `/contacto/` | | | | | |

**Consultas de Coslada** (paso 5 del plan): principales búsquedas de `/reformas-integrales/coslada/` y de `/zonas/coslada/`.

## Prueba controlada

Estado en cada revisión: D = descubierta, R = rastreada sin indexar, I = indexada. Junto al estado, la fecha del último rastreo.

| # | URL | Grupo | Solicitada | Día 3 | Día 7 | Día 14 | Día 21 |
|---|---|---|---|---|---|---|---|
| A1 | `/reformas-integrales/torrejon-de-ardoz/` | A | | | | | |
| A2 | `/reforma-banos/torrejon-de-ardoz/` | A | | | | | |
| A3 | `/reformas-integrales/guadalajara/` | A | | | | | |
| A4 | `/reforma-pisos/guadalajara/` | A | | | | | |
| A5 | `/reforma-cocinas/alcala-de-henares/` | A | | | | | |
| A6 | `/locales-comerciales/alcala-de-henares/` | A | | | | | |
| A7 | `/reforma-banos/coslada/` | A | | | | | |
| A8 | `/reforma-cocinas/coslada/` | A | | | | | |
| C1 | `/reforma-pisos/coslada/` | Control | n/a | | | | |
| C2 | `/reforma-cocinas/torrejon-de-ardoz/` | Control | n/a | | | | |
| C3 | `/reforma-pisos/torrejon-de-ardoz/` | Control | n/a | | | | |
| C4 | `/locales-comerciales/torrejon-de-ardoz/` | Control | n/a | | | | |
| C5 | `/reformas-integrales/alcala-de-henares/` | Control | n/a | | | | |
| C6 | `/reforma-banos/alcala-de-henares/` | Control | n/a | | | | |
| C7 | `/reforma-banos/guadalajara/` | Control | n/a | | | | |
| C8 | `/reforma-cocinas/guadalajara/` | Control | n/a | | | | |
| C9 | `/locales-comerciales/guadalajara/` | Control | n/a | | | | |
| R1 | `/servicios/reforma-banos/` | Rastreadas | | | | | |
| R2 | `/zonas/coslada/` | Rastreadas | | | | | |
| R3 | `/zonas/meco/` | Rastreadas | | | | | |
| R4 | `/contacto/` | Rastreadas | | | | | |

## Conclusiones

Se rellena al cerrar cada prueba, con la fecha y con el dato que la sostiene.
