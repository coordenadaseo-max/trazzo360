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
| 2026-11-01 | Solicitud de indexación del grupo A: 6 de las 8 combinadas enviadas entre las 14:32 y las 14:44 (A1 a A6). A7 (`/reforma-banos/coslada/`) y A8 (`/reforma-cocinas/coslada/`) no se pudieron enviar: cuota diaria superada. Solicitadas el 03-11 (A7 a las 17:55, A8 a las 17:58) | Search Console | Que las 8 tengan fecha de rastreo antes que las de control | Inspección de URL, días 3, 7, 14 y 21 desde la solicitud de cada una | 04-11: las 8 indexadas. Ver «Lectura del día 3» |
| | Solicitud de indexación de las 4 rastreadas sin indexar | Search Console | Que se vuelvan a rastrear | Inspección de URL | 04-11: las 4 indexadas (R1 antes de la solicitud masiva, R2 a R4 el 01-11) |
| 2026-11-01 | Solicitud de indexación de `/zonas/coslada/`, `/zonas/meco/` y `/contacto/` (las 3 rastreadas sin indexar que faltaban; `/servicios/reforma-banos/` se solicitó hacia el 27-10 y ya está indexada) | Search Console | Que se rastreen en pocos días y pasen a indexadas, como `/servicios/reforma-banos/`. Si no ocurre en 14 días, el problema no es el rastreo | Inspección de URL, días 3, 7, 14 y 21 | 04-11: las 3 indexadas, con la propia URL como canónica de Google |

## Mediciones

Una fila por fecha. Mismos informes y filtros cada vez.

| Fecha | Indexadas | Sin indexar | Descubiertas | Rastreadas sin indexar | 404 | Solicitudes de rastreo (90 días) | Tiempo medio de respuesta | Estado del host | Notas |
|---|---|---|---|---|---|---|---|---|---|
| 2026-10-23 | 31 | 45 | 35 | 4 | | | | | Foto de partida (exportación del 23-10) |
| 2026-11-01 | 31 | 45 | 35 | 4 | <1 % de las respuestas | 204 | 101 ms | Sin fallos en robots.txt, DNS ni conectividad | Día 0. Sin cambios respecto al 23-10. Detalle del rastreo debajo de la tabla |
| 2026-11-04 | 43 (estimado) | 33 (estimado) | 27 (estimado) | 0 (estimado) | | | | | Día 3. Cifras derivadas de la Inspección de URL (31 + 12 indexadas; las 6 fuera del sitemap no cambian), no del informe de páginas. Sustituir por las del informe cuando se actualice |

**Estadísticas de rastreo a 01-11-2026** (paso 3 del plan):

- **Solicitudes totales:** 204. 150 son del 13-09, caen a 0 el 14-09 y el resto se reparte hasta hoy.
- **Por respuesta:** 99 % correcto, <1 % 404.
- **Por finalidad:** 67 % actualización, 33 % detección.
- **Por tipo de Googlebot:** smartphones 30 %, imagen 23 %, ordenador 20 %, otro tipo de agente 19 %, carga de recursos de la página 7 %.

## Diagnóstico del día 0

**Las 6 URL sin indexar fuera del sitemap** (paso 2 del plan):

Datos de Search Console a 01-11-2026. Las 6 son páginas fuera del sitemap y explican la diferencia entre las 45 sin indexar y las 39 descubiertas o rastreadas del sitemap.

| URL | Motivo |
|---|---|
| `https://www.trazzo360.es/aviso-legal/` | Excluida por etiqueta `noindex` (último rastreo 14-09-2026) |
| `https://www.trazzo360.es/privacidad/` | Excluida por etiqueta `noindex` (último rastreo 14-09-2026) |
| `https://www.trazzo360.es/cookies/` | Excluida por etiqueta `noindex` |
| `https://trazzo360.es/` | Página con redirección (apex a `www`) |
| `http://trazzo360.es/` | Página con redirección (HTTP a HTTPS y `www`) |
| `https://www.trazzo360.es/gracias/` | Bloqueada por `robots.txt` |

Los cinco primeros casos son esperados y correctos: `noindex` propio (DEC-A23) y redirecciones a la versión canónica. Ninguno es un problema de indexación.

**Las 4 rastreadas sin indexar** (paso 4 del plan):

| URL | Último rastreo | Obtención | ¿Indexación permitida? | Canónica declarada | Canónica de Google |
|---|---|---|---|---|---|
| `/servicios/reforma-banos/` | 26-10-2026 19:25 (Googlebot smartphones) | Correcto | Sí | La propia URL | La propia URL (04-11) |
| `/zonas/coslada/` | 1-11-2026 14:24 (Googlebot smartphones) | Correcto | Sí | La propia URL | La propia URL (04-11) |
| `/zonas/meco/` | 1-11-2026 14:24 (Googlebot smartphones) | Correcto | Sí | La propia URL | La propia URL (04-11) |
| `/contacto/` | 1-11-2026 14:23 (Googlebot smartphones) | Correcto | Sí | La propia URL | La propia URL (04-11) |

Lectura: `/servicios/reforma-banos/` pasó de rastreada sin indexar a indexada tras la solicitud manual, con un rastreo nuevo en 4 días. Las otras tres no se han rastreado desde el 13-09 a las 22:25, el día del lanzamiento y unas dos horas después del paso a `www` (20:32). La indexación figura como «N/D» porque Google no tiene veredicto de indexación para ellas. Queda por pedir su indexación y comprobar si repiten el patrón.

**Sitemap** (paso 6 del plan, 01-11-2026):

| Sitemap | Tipo | Enviado | Última lectura | Estado | Páginas descubiertas | Vídeos |
|---|---|---|---|---|---|---|
| `https://www.trazzo360.es/sitemap-index.xml` | Índice de sitemaps | 13-09-2026 | 28-10-2026 | Correcto | 70 | 0 |

Coincide con lo esperado (Correcto, 70 páginas). Google lo lee de forma periódica (última lectura hace 4 días), así que el sitemap no es la causa de las 35 descubiertas sin indexar: las conoce todas y no las ha descargado. No se reenvía, como indica el plan.

**Consultas de Coslada** (paso 5 del plan): principales búsquedas de `/reformas-integrales/coslada/` y de `/zonas/coslada/`.

**Cambio de pregunta (01-11-2026).** `/zonas/coslada/` no está indexada, así que no puede dar consultas: el filtro por esa URL saldrá vacío y ese vacío es el resultado, que se anota como «0 impresiones, no indexada». Mientras tanto no se puede saber si las dos páginas compiten. Se hace así:

1. Se mide solo `/reformas-integrales/coslada/` (399 impresiones, posición 60,6 al 23-10) y se clasifican sus consultas en genéricas («reformas coslada», «empresa de reformas coslada») y de servicio («reforma integral coslada»). Las genéricas son las que `keyword-map.md` asigna al hub de zona.
2. Se anota el resultado vacío de `/zonas/coslada/` con la fecha.
3. Esa lista queda como línea base. Cuando `/zonas/coslada/` salga indexada (R2 de la prueba controlada), se repite el filtro a las 2–4 semanas y se compara si reparten las consultas o se solapan.

Con posición media 60,6, las impresiones sirven para ver el tema de las consultas, no para sacar conclusiones de volumen.

**Línea base: `/reformas-integrales/coslada/`** (Search Console, últimos 3 meses, anotada el 01-11-2026; 10 primeras consultas).

| Consulta | Impresiones | Posición | Tipo |
|---|---|---|---|
| reformas integrales coslada | 54 | 67,7 | Servicio |
| reformas de pisos coslada | 39 | 62,5 | Otro servicio (pisos) |
| reformas pisos coslada | 33 | 61,8 | Otro servicio (pisos) |
| reformas casas coslada | 33 | 63,5 | Genérica |
| reformas baratas coslada | 31 | 86,2 | Genérica (precio) |
| empresa reformas integrales coslada | 29 | 70,3 | Servicio |
| reformas en coslada | 25 | 77,2 | Genérica |
| reformas en general coslada | 9 | 64,6 | Genérica |
| reformar escaleras sin obra coslada | 9 | 73,1 | Otra intención |
| comparar presupuestos de reformas coslada | 8 | 50,9 | Informacional (precio) |

Lectura (sin conclusión firme, la muestra es pequeña y todas las posiciones superan la 50):

- Solo 2 de las 10 son de reforma integral (83 de 248 impresiones). Hay 4 genéricas que `keyword-map.md` asigna al hub de zona («reformas en coslada», «reformas casas coslada», «reformas en general coslada», «reformas baratas coslada»), con 98 impresiones.
- Hay 2 consultas de pisos (72 impresiones) que `/reformas-integrales/coslada/` recibe porque `/reforma-pisos/coslada/` está en «Descubierta, sin indexar» (C1 de la prueba controlada). Si esa combinada se indexa, esas impresiones deberían moverse allí.
- El solapamiento con la zona no se puede juzgar hasta que `/zonas/coslada/` esté indexada. Resultado del filtro por `/zonas/coslada/` (01-11-2026): sin consultas, 0 impresiones, no indexada. Queda pendiente repetirlo a las 2–4 semanas de su indexación.

## Prueba controlada

Estado en cada revisión: D = descubierta, R = rastreada sin indexar, I = indexada. Junto al estado, la fecha del último rastreo. «No reconocida» = Inspección de URL dice «Google no reconoce esta URL».

La columna «Día 3» recoge la revisión del 04-11-2026 para todas las URL, aunque A7 y A8 llevaban solo 1 día desde su solicitud. Se anotan así porque ya habían cambiado de estado.

| # | URL | Grupo | Solicitada | Día 3 | Día 7 | Día 14 | Día 21 |
|---|---|---|---|---|---|---|---|
| A1 | `/reformas-integrales/torrejon-de-ardoz/` | A | 1-11 14:32 | I (1-11 14:34) | | | |
| A2 | `/reforma-banos/torrejon-de-ardoz/` | A | 1-11 14:34 | I (1-11 14:36) | | | |
| A3 | `/reformas-integrales/guadalajara/` | A | 1-11 14:39 | I (1-11 14:36) | | | |
| A4 | `/reforma-pisos/guadalajara/` | A | 1-11 14:41 | I (1-11 14:44) | | | |
| A5 | `/reforma-cocinas/alcala-de-henares/` | A | 1-11 14:42 | I (1-11 14:44) | | | |
| A6 | `/locales-comerciales/alcala-de-henares/` | A | 1-11 14:44 | I (1-11 14:46) | | | |
| A7 | `/reforma-banos/coslada/` | A | 3-11 17:55 | I (3-11 17:58) | | | |
| A8 | `/reforma-cocinas/coslada/` | A | 3-11 17:58 | I (3-11 17:58) | | | |
| C1 | `/reforma-pisos/coslada/` | Control | n/a | D | | | |
| C2 | `/reforma-cocinas/torrejon-de-ardoz/` | Control | n/a | D | | | |
| C3 | `/reforma-pisos/torrejon-de-ardoz/` | Control | n/a | D | | | |
| C4 | `/locales-comerciales/torrejon-de-ardoz/` | Control | n/a | D | | | |
| C5 | `/reformas-integrales/alcala-de-henares/` | Control | n/a | D | | | |
| C6 | `/reforma-banos/alcala-de-henares/` | Control | n/a | No reconocida | | | |
| C7 | `/reforma-banos/guadalajara/` | Control | n/a | D | | | |
| C8 | `/reforma-cocinas/guadalajara/` | Control | n/a | No reconocida | | | |
| C9 | `/locales-comerciales/guadalajara/` | Control | n/a | D | | | |
| R1 | `/servicios/reforma-banos/` | Rastreadas | ~27-10 | I (26-10 19:25) | | | |
| R2 | `/zonas/coslada/` | Rastreadas | 1-11 | I (1-11 14:24) | | | |
| R3 | `/zonas/meco/` | Rastreadas | 1-11 | I (1-11 14:24) | | | |
| R4 | `/contacto/` | Rastreadas | 1-11 | I (1-11 14:23) | | | |

## Lectura del día 3 (04-11-2026)

**Resultado:** 12 de 12 URL solicitadas están indexadas (8 del grupo A, 4 rastreadas). De las 9 del control, ninguna lo está: 7 siguen en «Descubierta» y 2 aparecen como «Google no reconoce esta URL».

| Grupo | Indexadas | Detalle |
|---|---|---|
| A (solicitadas) | 8 de 8 | Canónica de Google: la propia URL en las 8 |
| Rastreadas (solicitadas) | 4 de 4 | R1 ya lo estaba el 26-10; R2 a R4 desde el 01-11 |
| Control (sin tocar) | 0 de 9 | 7 «Descubierta», sin último rastreo (N/D); 2 «No reconocida» |

**Qué se observa**

- **El rastreo ocurre en minutos tras la solicitud.** En A1 a A8 el último rastreo cae entre 2 y 14 minutos después de la hora anotada de la solicitud, salvo A3: rastreada a las 14:36:06, 3 minutos antes de la hora anotada (14:39). Puede ser un desajuste en la hora anotada. A7 y A8 comparten rastreo (3-11 17:58:26).
- **Indexadas con la propia URL como canónica.** Ninguna de las 12 se trata como duplicado de otra. En concreto, `/zonas/coslada/` no se ha fundido con `/reformas-integrales/coslada/`: la hipótesis del hallazgo 7 no se confirma y la acción 4 (H1 de zona) no pasa por delante.
- **El control sigue sin rastrear.** Ninguna de las 9 tiene fecha de último rastreo.
- **Dos URL de control, `/reforma-banos/alcala-de-henares/` (C6) y `/reforma-cocinas/guadalajara/` (C8), figuran como «Google no reconoce esta URL» y sin sitemap de referencia.** Las dos están en el sitemap publicado (comprobado el 04-11 en `sitemap-0.xml`, 70 URL). Es una anomalía: el 01-11 el sitemap figuraba con 70 páginas descubiertas. Puede ser un retraso de la herramienta de inspección. Pendiente de repetir en el día 7 antes de sacar conclusiones.
- **«Error temporal de procesamiento» en el campo Sitemaps** de 6 URL indexadas (A1, A2, A6, A8, R1, R4). Afecta solo a la sección de detección de la inspección. Su indexación y rastreo salen correctos. No se actúa mientras no se repita.

**Matices de lo que no se puede afirmar todavía**

- La diferencia 12/12 frente a 0/9 es clara, pero los grupos no se eligieron al azar y el control lleva solo 3 días sin tocar.
- Indexada no es posicionada. Sin impresiones aún no se sabe si estas páginas aparecen en resultados. Hay que mirar Rendimiento en el día 7 y el 14.
- El resultado apoya que el cuello de botella es el rastreo de Google, no el contenido ni la canónica.

## Conclusiones

Se rellena al cerrar cada prueba, con la fecha y con el dato que la sostiene.
