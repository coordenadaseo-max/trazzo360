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
| 2026-10-27 | Las migas de los 6 hubs de servicio dejan de enlazar a `/servicios/` (404); corregidos 16 anchors «en en» en los hubs de comunidades y locales | Commit `1fdf69e`, publicado en Vercel | Que `/servicios/` deje de aparecer como 404 en el informe de páginas. No se espera efecto en la indexación de las combinadas | Indexación → Páginas, motivo «No se ha encontrado (404)» | 08-11: el informe de páginas no tiene motivo 404 (tampoco lo tenía el 01-11) y en estadísticas de rastreo los 404 siguen en <1 %. Sin cambio medible |
| 2026-11-01 | Solicitud de indexación del grupo A: 6 de las 8 combinadas enviadas entre las 14:32 y las 14:44 (A1 a A6). A7 (`/reforma-banos/coslada/`) y A8 (`/reforma-cocinas/coslada/`) no se pudieron enviar: cuota diaria superada. Solicitadas el 03-11 (A7 a las 17:55, A8 a las 17:58) | Search Console | Que las 8 tengan fecha de rastreo antes que las de control | Inspección de URL, días 3, 7, 14 y 21 desde la solicitud de cada una | 04-11: las 8 indexadas. Ver «Lectura del día 3». 08-11: las 8 siguen indexadas, sin rastreo nuevo. Ver «Lectura del día 7» |
| | Solicitud de indexación de las 4 rastreadas sin indexar | Search Console | Que se vuelvan a rastrear | Inspección de URL | 04-11: las 4 indexadas (R1 antes de la solicitud masiva, R2 a R4 el 01-11). 08-11: siguen indexadas |
| 2026-11-01 | Solicitud de indexación de `/zonas/coslada/`, `/zonas/meco/` y `/contacto/` (las 3 rastreadas sin indexar que faltaban; `/servicios/reforma-banos/` se solicitó hacia el 27-10 y ya está indexada) | Search Console | Que se rastreen en pocos días y pasen a indexadas, como `/servicios/reforma-banos/`. Si no ocurre en 14 días, el problema no es el rastreo | Inspección de URL, días 3, 7, 14 y 21 | 04-11: las 3 indexadas, con la propia URL como canónica de Google |

## Mediciones

Una fila por fecha. Mismos informes y filtros cada vez.

| Fecha | Indexadas | Sin indexar | Descubiertas | Rastreadas sin indexar | 404 | Solicitudes de rastreo (90 días) | Tiempo medio de respuesta | Estado del host | Notas |
|---|---|---|---|---|---|---|---|---|---|
| 2026-10-23 | 31 | 45 | 35 | 4 | | | | | Foto de partida (exportación del 23-10) |
| 2026-11-01 | 31 | 45 | 35 | 4 | <1 % de las respuestas | 204 | 101 ms | Sin fallos en robots.txt, DNS ni conectividad | Día 0. Sin cambios respecto al 23-10. Detalle del rastreo debajo de la tabla |
| 2026-11-04 | 43 (estimado) | 33 (estimado) | 27 (estimado) | 0 (estimado) | | | | | Día 3. Cifras derivadas de la Inspección de URL (31 + 12 indexadas; las 6 fuera del sitemap no cambian), no del informe de páginas. Sustituir por las del informe cuando se actualice |
| 2026-11-08 | 31 | 45 | 35 | 4 | <1 % de las respuestas | 210 | 103 ms | Todo en verde | Día 7. El informe de páginas da exactamente las mismas cifras que el 23-10 (noindex 3, redirección 2, robots.txt 1, descubiertas 35, rastreadas 4): todavía no recoge las 12 indexaciones que la Inspección de URL confirma desde el 04-11. Se mantienen las cifras estimadas del día 3. «Última actualización» del informe: 23-10-2026. Es la misma foto que el 23-10, sin refrescar desde entonces, y lo mismo vale para la fila del 01-11 |

**Estadísticas de rastreo a 01-11-2026** (paso 3 del plan):

- **Solicitudes totales:** 204. 150 son del 13-09, caen a 0 el 14-09 y el resto se reparte hasta hoy.
- **Por respuesta:** 99 % correcto, <1 % 404.
- **Por finalidad:** 67 % actualización, 33 % detección.
- **Por tipo de Googlebot:** smartphones 30 %, imagen 23 %, ordenador 20 %, otro tipo de agente 19 %, carga de recursos de la página 7 %.

**Estadísticas de rastreo a 08-11-2026** (día 7):

- **Solicitudes totales:** 210, seis más que el 01-11. En siete días Google ha hecho del orden de una solicitud diaria, incluidas las de las 12 indexaciones pedidas.
- **Tiempo medio de respuesta:** 103 ms (101 ms el 01-11). Estado del host: todo en verde.
- **Por respuesta:** 92 % correcto (200), 8 % movido permanentemente (301), <1 % 404. El 01-11 no había 301 en el desglose.
- **Por finalidad:** 70 % actualización, 30 % detección.
- **Por tipo de Googlebot:** smartphones 31 %, ordenador 23 %, imagen 21 %, otro tipo de agente 17 %, carga de recursos de la página 7 %.

Los desgloses no cuadran como acumulado: con solo 6 solicitudes nuevas, la parte de 200 no puede bajar de 99 % a 92 %, ni la de imagen de 23 % a 21 %. Los porcentajes no se leen como recuentos exactos y no se sacan conclusiones de sus variaciones pequeñas.

**Sobre el 8 % de 301.** Comprobado el 08-11 con `curl`: la web no emite ningún 301. Las redirecciones de Vercel son 308 (`http://trazzo360.es/` → `https://trazzo360.es/` → `https://www.trazzo360.es/`, y `http://www.` → `https://www.`). Las URL sin barra final (`/reforma-pisos/coslada`, `/zonas/coslada`) responden 200 con canónica a la versión con barra, sin redirección. Lo más probable es que Search Console agrupe esos 308 como «movido permanentemente», pero no está confirmado.

Ejemplos de la fila «Movido permanentemente (301)» (anotados el 08-11):

| Fecha de rastreo | URL | Respuesta |
|---|---|---|
| 14-09-2026 14:48 | `http://trazzo360.es/` | 301 |
| 13-09-2026 22:27 | `http://trazzo360.es/` | 301 |

Lectura: las dos son la versión HTTP sin `www`, rastreadas el día del lanzamiento y el siguiente. Hoy esa URL responde 308, así que los 301 corresponden a la configuración de esos días. Son redirecciones a la versión canónica, esperadas y correctas. No hay nada que corregir.

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

Coincide con lo esperado (Correcto, 70 páginas). **08-11:** última lectura el 06-11-2026, 9 días después de la anterior. Google lo lee de forma periódica (última lectura hace 4 días), así que el sitemap no es la causa de las 35 descubiertas sin indexar: las conoce todas y no las ha descargado. No se reenvía, como indica el plan.

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

## Hipótesis abiertas

### San Fernando: ¿la zona interfiere con la combinada? (04-11-2026)

**Observación.** Para la consulta «reformas integrales en san fernando de henares», Search Console muestra dos URL de forma alterna, sin que ninguna se quede fija en los resultados:

| URL | Impresiones | Posición |
|---|---|---|
| `/reformas-integrales/san-fernando-de-henares/` (servicio × zona) | 5 | 24 |
| `/zonas/san-fernando-de-henares/` (hub de zona) | 2 | 18 |

**Hipótesis.** El H1 visible de los hubs de zona es «Reformas en {zona}» y no lleva «empresa». El canon (`ANATOMIAS-CANONICAS.md`) lo pide dentro del H1, y el `<title>` de la zona ya dice «Empresa de Reformas en San Fernando de Henares». Podría ser que la ausencia de «empresa» en el H1 acerque la zona a la consulta de servicio. Coincide con la acción 4 de la [auditoría](./2026-10-27-auditoria-indexacion.md).

**Qué se sabe y qué no.**

- Las dos están en la página 2 de resultados, con posiciones cercanas. La zona sale mejor (18) con un H1 que ni siquiera contiene «integrales».
- 7 impresiones en total. Es una muestra demasiado pequeña para decidir nada. Con este volumen la alternancia puede ser ruido.
- La posición de estas dos (18 y 24) es mucho mejor que la media del sitio (56–88 en las URL con más de 100 impresiones). Es una consulta donde el sitio tiene alguna tracción.
- El 04-11 se dijo en el chat que las posiciones eran «por encima de 50». Para esta consulta no es así: las dos están por debajo de 25.

**Decisión de momento: no se toca el H1.** `/zonas/coslada/` y `/zonas/meco/` son R2 y R3 de la prueba controlada. Cambiar el H1 de las zonas ahora mezclaría su efecto con el de las solicitudes de indexación.

**Qué mirar.**

1. En los días 14 (15-11) y 21 (22-11), repetir el filtro de esta consulta en Rendimiento → Páginas.
2. Ver con qué otras consultas aparece `/zonas/san-fernando-de-henares/`. Si sale sobre todo por «empresa de reformas» o «reformas en san fernando de henares», cumple su papel.
3. **Señal para actuar:** el hub de zona acumulando impresiones por consultas de servicio durante varias semanas (por ejemplo, 10 o más) y alternando con la combinada.
4. Si se confirma, aplicar el canon moviendo «Empresa de reformas en {zona}» al interior del H1 (`src/pages/zonas/[slug].astro:92` y `alcala-de-henares.astro:152`), con DEC en `DECISION-REGISTER.md`.

## Prueba controlada

Estado en cada revisión: D = descubierta, R = rastreada sin indexar, I = indexada. Junto al estado, la fecha del último rastreo. «No reconocida» = Inspección de URL dice «Google no reconoce esta URL».

La columna «Día 3» recoge la revisión del 04-11-2026 para todas las URL, aunque A7 y A8 llevaban solo 1 día desde su solicitud. Se anotan así porque ya habían cambiado de estado.

La columna «Día 7» recoge la revisión del 08-11-2026 para todas las URL. Es el día 7 exacto de A1 a A6 y de R2 a R4; para A7 y A8 es el día 5 y para R1 el día 12 aproximadamente.

| # | URL | Grupo | Solicitada | Día 3 | Día 7 | Día 14 | Día 21 |
|---|---|---|---|---|---|---|---|
| A1 | `/reformas-integrales/torrejon-de-ardoz/` | A | 1-11 14:32 | I (1-11 14:34) | I (1-11 14:34) | | |
| A2 | `/reforma-banos/torrejon-de-ardoz/` | A | 1-11 14:34 | I (1-11 14:36) | I (1-11 14:36) | | |
| A3 | `/reformas-integrales/guadalajara/` | A | 1-11 14:39 | I (1-11 14:36) | I (1-11 14:36) | | |
| A4 | `/reforma-pisos/guadalajara/` | A | 1-11 14:41 | I (1-11 14:44) | I (1-11 14:44) | | |
| A5 | `/reforma-cocinas/alcala-de-henares/` | A | 1-11 14:42 | I (1-11 14:44) | I (1-11 14:44) | | |
| A6 | `/locales-comerciales/alcala-de-henares/` | A | 1-11 14:44 | I (1-11 14:46) | I (1-11 14:46) | | |
| A7 | `/reforma-banos/coslada/` | A | 3-11 17:55 | I (3-11 17:58) | I (3-11 17:58) | | |
| A8 | `/reforma-cocinas/coslada/` | A | 3-11 17:58 | I (3-11 17:58) | I (3-11 17:58) | | |
| C1 | `/reforma-pisos/coslada/` | Control | n/a | D | No reconocida | | |
| C2 | `/reforma-cocinas/torrejon-de-ardoz/` | Control | n/a | D | D | | |
| C3 | `/reforma-pisos/torrejon-de-ardoz/` | Control | n/a | D | No reconocida | | |
| C4 | `/locales-comerciales/torrejon-de-ardoz/` | Control | n/a | D | No reconocida | | |
| C5 | `/reformas-integrales/alcala-de-henares/` | Control | n/a | D | No reconocida | | |
| C6 | `/reforma-banos/alcala-de-henares/` | Control | n/a | No reconocida | D | | |
| C7 | `/reforma-banos/guadalajara/` | Control | n/a | D | D | | |
| C8 | `/reforma-cocinas/guadalajara/` | Control | n/a | No reconocida | No reconocida | | |
| C9 | `/locales-comerciales/guadalajara/` | Control | n/a | D | D | | |
| R1 | `/servicios/reforma-banos/` | Rastreadas | ~27-10 | I (26-10 19:25) | I (26-10 19:25) | | |
| R2 | `/zonas/coslada/` | Rastreadas | 1-11 | I (1-11 14:24) | I (1-11 14:24) | | |
| R3 | `/zonas/meco/` | Rastreadas | 1-11 | I (1-11 14:24) | I (1-11 14:24) | | |
| R4 | `/contacto/` | Rastreadas | 1-11 | I (1-11 14:23) | I (1-11 14:23) | | |

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

## Lectura del día 7 (08-11-2026)

**Resultado:** sin cambios en la prueba. Las 12 URL solicitadas siguen indexadas y ninguna se ha vuelto a rastrear. De las 9 de control no se ha rastreado ninguna: 4 en «Descubierta» y 5 en «Google no reconoce esta URL».

| Grupo | Día 3 | Día 7 | Detalle |
|---|---|---|---|
| A (solicitadas) | 8 de 8 indexadas | 8 de 8 indexadas | Mismas fechas de rastreo que el día 3 |
| Rastreadas (solicitadas) | 4 de 4 indexadas | 4 de 4 indexadas | Mismas fechas de rastreo que el día 3 |
| Control (sin tocar) | 0 de 9 rastreadas | 0 de 9 rastreadas | 7 D + 2 no reconocidas el día 3; 4 D + 5 no reconocidas el día 7 |

**Qué se observa**

- **El grupo A se mantiene.** Ninguna de las 8 ha pasado a «Rastreada: actualmente sin indexar» en la semana siguiente a su indexación. Es la señal que habría indicado un problema de contenido, y de momento no aparece.
- **«No reconocida» va y viene.** El día 3 lo eran C6 y C8. El día 7, C6 vuelve a «Descubierta» y pasan a «No reconocida» C1, C3, C4 y C5, además de C8. Una URL que Google conocía no se olvida y se vuelve a descubrir en cuatro días. Lo más probable es que la herramienta de inspección responda de forma inconsistente para URL que nunca se han rastreado. A efectos de la prueba, «Descubierta» y «No reconocida» cuentan igual: sin rastrear.
- **Google apenas pasa por su cuenta.** Seis solicitudes de rastreo nuevas en siete días. Sin una solicitud manual, las combinadas pendientes no reciben visita.
- **El informe de páginas va retrasado.** Sigue con las cifras del 23-10. La Inspección de URL es la fuente para la prueba, como indica el plan.

**Datos complementarios (anotados el 08-11)**

- **Informe de páginas:** última actualización el 23-10-2026. No va retrasado unos días: no se ha refrescado en 16 días. Las cifras del 01-11 y del 08-11 son la foto del 23-10.
- **301 de estadísticas de rastreo:** los ejemplos son `http://trazzo360.es/` el 13-09 y el 14-09. Configuración del lanzamiento, nada que corregir (detalle en «Estadísticas de rastreo a 08-11-2026»).
- **Sitemap:** última lectura el 06-11-2026. Google lo vuelve a leer cada 9 días más o menos y aun así no rastrea las combinadas pendientes: el sitemap no es el freno.

**Rendimiento de las URL solicitadas** (Search Console → Rendimiento, filtro por página).

El rango de fechas no quedó anotado. Para A1 a A8 y R2 a R4 da casi igual: no estaban indexadas antes del 01-11 (A7 y A8, del 03-11), así que sus impresiones son de los últimos 5 a 7 días con cualquier rango. Para R1, indexada el 26-10, sí influye. No se anotaron los clics.

| # | URL | Impresiones | Posición |
|---|---|---|---|
| A1 | `/reformas-integrales/torrejon-de-ardoz/` | 96 | 68,1 |
| A2 | `/reforma-banos/torrejon-de-ardoz/` | 51 | 69,6 |
| A3 | `/reformas-integrales/guadalajara/` | 95 | 49,7 |
| A4 | `/reforma-pisos/guadalajara/` | 53 | 66,0 |
| A5 | `/reforma-cocinas/alcala-de-henares/` | 25 | 60,0 |
| A6 | `/locales-comerciales/alcala-de-henares/` | Sin datos | |
| A7 | `/reforma-banos/coslada/` | 36 | 71,4 |
| A8 | `/reforma-cocinas/coslada/` | 30 | 68,9 |
| R1 | `/servicios/reforma-banos/` | 60 | 72,7 |
| R2 | `/zonas/coslada/` | 205 | 72,5 |
| R3 | `/zonas/meco/` | 43 | 52,4 |
| R4 | `/contacto/` | Sin datos | |

Lectura:

- **Indexar ya da visibilidad.** 7 de las 8 combinadas del grupo A tienen impresiones en su primera semana: 386 en total. Antes de la solicitud tenían cero. Las 9 de control siguen sin poder tenerlas.
- **Visibles no es posicionadas.** Las posiciones van de 49,7 a 71,4, en la misma franja que el resto del sitio (56 a 88 en la foto de partida). Son páginas 5 a 7 de resultados: impresiones de cola larga, no de clics.
- **La mejor es A3** (`/reformas-integrales/guadalajara/`, posición 49,7), y entre las rastreadas, `/zonas/meco/` (52,4).
- **A6 sin datos.** Puede ser que haya poca demanda de locales en Alcalá o que aún no aparezca en ninguna consulta. Se vuelve a mirar el día 14.
- **`/zonas/coslada/` pasa de 0 a 205 impresiones** (0 el 01-11, sin indexar). Ya se puede repetir la comparación con `/reformas-integrales/coslada/` de la sección «Consultas de Coslada». La línea base pedía hacerlo a las 2 a 4 semanas de la indexación: del 15-11 al 29-11.
- **`/contacto/` sin datos.** Es lo esperado: no responde a ninguna búsqueda.

**Qué no se puede afirmar todavía**

- Faltan 14 días de control. La diferencia es clara (12 de 12 frente a 0 de 9), pero el plan fija la lectura en el día 21.
- Una semana de impresiones con posiciones por encima de 50 no dice cómo evolucionará el posicionamiento. Sirve para ver que la página aparece, no cuánto tráfico traerá.

**Próximas revisiones:** día 14 el 15-11 (inspección de las 21 URL, consulta de San Fernando, rendimiento de las 12 solicitadas con el rango de fechas anotado, y primera comparación de consultas entre `/zonas/coslada/` y `/reformas-integrales/coslada/`) y día 21 el 22-11 (inspección, informe de páginas, estadísticas de rastreo y lectura final).

## Orden de solicitud a partir del día 21 (preparado el 08-11-2026)

Se aplica solo si la lectura del día 21 (22-11) da la primera fila de la tabla del plan: el grupo A rastreado e indexado, el control sin rastrear. Si da cualquier otra, no se ejecuta y se replantea.

**Qué entra.** Las 27 combinadas que siguen pendientes según la foto de partida: las 9 de control (C1 a C9) y las 18 que quedaban fuera de la prueba (P1 a P18: una de San Fernando y todas las pendientes de Azuqueca, Meco y Camarma).

**Orden.** Por municipio, de más a menos búsquedas según el volumen del hub de zona en `docs/keyword-map.md`: Guadalajara 460, Alcalá 280, Coslada 280, Torrejón 260, San Fernando 220, Azuqueca 40, Meco y Camarma sin volumen medible. Meco va antes que Camarma porque `/zonas/meco/` tiene 43 impresiones en posición 52,4 (08-11), la mejor posición de las URL medidas. Camarma no tiene ningún dato.

**Cómo.**

1. Tandas de 10, una por día. Si el cupo se agota antes, se sigue al día siguiente por la primera URL no enviada y se anota.
2. Antes de solicitar, inspeccionar la URL. Si ya está indexada (puede pasar con las de control si Google llega solo), no se solicita: se anota «ya indexada» con la fecha de rastreo.
3. No solicitar dos veces la misma URL.
4. Anotar fecha y hora de cada solicitud en esta tabla y seguir el mismo calendario que el grupo A: inspección a los 3, 7, 14 y 21 días.

| Tanda | # | URL completa | Municipio (búsquedas/mes) | Solicitada | Resultado |
|---|---|---|---|---|---|
| 1 (22-11) | C7 | `https://www.trazzo360.es/reforma-banos/guadalajara/` | Guadalajara (460) | | |
| 1 (22-11) | C8 | `https://www.trazzo360.es/reforma-cocinas/guadalajara/` | Guadalajara (460) | | |
| 1 (22-11) | C9 | `https://www.trazzo360.es/locales-comerciales/guadalajara/` | Guadalajara (460) | | |
| 1 (22-11) | C5 | `https://www.trazzo360.es/reformas-integrales/alcala-de-henares/` | Alcalá de Henares (280) | | |
| 1 (22-11) | C6 | `https://www.trazzo360.es/reforma-banos/alcala-de-henares/` | Alcalá de Henares (280) | | |
| 1 (22-11) | C1 | `https://www.trazzo360.es/reforma-pisos/coslada/` | Coslada (280) | | |
| 1 (22-11) | C2 | `https://www.trazzo360.es/reforma-cocinas/torrejon-de-ardoz/` | Torrejón de Ardoz (260) | | |
| 1 (22-11) | C3 | `https://www.trazzo360.es/reforma-pisos/torrejon-de-ardoz/` | Torrejón de Ardoz (260) | | |
| 1 (22-11) | C4 | `https://www.trazzo360.es/locales-comerciales/torrejon-de-ardoz/` | Torrejón de Ardoz (260) | | |
| 1 (22-11) | P1 | `https://www.trazzo360.es/reforma-cocinas/san-fernando-de-henares/` | San Fernando de Henares (220) | | |
| 2 (23-11) | P2 | `https://www.trazzo360.es/reformas-integrales/azuqueca-de-henares/` | Azuqueca de Henares (40) | | |
| 2 (23-11) | P3 | `https://www.trazzo360.es/reforma-banos/azuqueca-de-henares/` | Azuqueca de Henares (40) | | |
| 2 (23-11) | P4 | `https://www.trazzo360.es/reforma-cocinas/azuqueca-de-henares/` | Azuqueca de Henares (40) | | |
| 2 (23-11) | P5 | `https://www.trazzo360.es/reforma-pisos/azuqueca-de-henares/` | Azuqueca de Henares (40) | | |
| 2 (23-11) | P6 | `https://www.trazzo360.es/locales-comerciales/azuqueca-de-henares/` | Azuqueca de Henares (40) | | |
| 2 (23-11) | P7 | `https://www.trazzo360.es/reformas-integrales/meco/` | Meco (~0) | | |
| 2 (23-11) | P8 | `https://www.trazzo360.es/reforma-banos/meco/` | Meco (~0) | | |
| 2 (23-11) | P9 | `https://www.trazzo360.es/reforma-cocinas/meco/` | Meco (~0) | | |
| 2 (23-11) | P10 | `https://www.trazzo360.es/reforma-pisos/meco/` | Meco (~0) | | |
| 2 (23-11) | P11 | `https://www.trazzo360.es/locales-comerciales/meco/` | Meco (~0) | | |
| 3 (24-11) | P12 | `https://www.trazzo360.es/comunidades-vecinos/meco/` | Meco (~0) | | |
| 3 (24-11) | P13 | `https://www.trazzo360.es/reformas-integrales/camarma-de-esteruelas/` | Camarma de Esteruelas (~0) | | |
| 3 (24-11) | P14 | `https://www.trazzo360.es/reforma-banos/camarma-de-esteruelas/` | Camarma de Esteruelas (~0) | | |
| 3 (24-11) | P15 | `https://www.trazzo360.es/reforma-cocinas/camarma-de-esteruelas/` | Camarma de Esteruelas (~0) | | |
| 3 (24-11) | P16 | `https://www.trazzo360.es/reforma-pisos/camarma-de-esteruelas/` | Camarma de Esteruelas (~0) | | |
| 3 (24-11) | P17 | `https://www.trazzo360.es/locales-comerciales/camarma-de-esteruelas/` | Camarma de Esteruelas (~0) | | |
| 3 (24-11) | P18 | `https://www.trazzo360.es/comunidades-vecinos/camarma-de-esteruelas/` | Camarma de Esteruelas (~0) | | |

## Conclusiones

Se rellena al cerrar cada prueba, con la fecha y con el dato que la sostiene.
