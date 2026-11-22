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
| 2026-11-01 | Solicitud de indexación del grupo A: 6 de las 8 combinadas enviadas entre las 14:32 y las 14:44 (A1 a A6). A7 (`/reforma-banos/coslada/`) y A8 (`/reforma-cocinas/coslada/`) no se pudieron enviar: cuota diaria superada. Solicitadas el 03-11 (A7 a las 17:55, A8 a las 17:58) | Search Console | Que las 8 tengan fecha de rastreo antes que las de control | Inspección de URL, días 3, 7, 14 y 21 desde la solicitud de cada una | 04-11: las 8 indexadas. Ver «Lectura del día 3». 08-11: las 8 siguen indexadas, sin rastreo nuevo. Ver «Lectura del día 7». 15-11: las 8 siguen indexadas, sin rastreo nuevo y con la propia URL como canónica de Google. Ver «Lectura del día 14». 22-11: 8 de 8 indexadas; A2 vuelve a rastrearse el 15-11 sin solicitud; A6 sale primero como «Google no reconoce esta URL» y, al volver a inspeccionarla, como indexada. Ver «Lectura del día 21» |
| | Solicitud de indexación de las 4 rastreadas sin indexar | Search Console | Que se vuelvan a rastrear | Inspección de URL | 04-11: las 4 indexadas (R1 antes de la solicitud masiva, R2 a R4 el 01-11). 08-11: siguen indexadas. 15-11: siguen indexadas, mismas fechas de rastreo. 22-11: siguen indexadas; R1 vuelve a rastrearse el 16-11 sin solicitud |
| 2026-11-22 | Tanda 1 de solicitudes de indexación: C7, C8, C9, C5, C6, C1, C2, C3, C4 y P1, entre las 20:41 y las 20:51. Sin aviso de cupo. A6 no se solicita: al volver a inspeccionarla sale indexada | Search Console | Que se rastreen e indexen en minutos u horas, como el grupo A | Inspección de URL, días 3 (25-11), 7 (29-11), 14 (06-12) y 21 (13-12) | |
| 2026-11-01 | Solicitud de indexación de `/zonas/coslada/`, `/zonas/meco/` y `/contacto/` (las 3 rastreadas sin indexar que faltaban; `/servicios/reforma-banos/` se solicitó hacia el 27-10 y ya está indexada) | Search Console | Que se rastreen en pocos días y pasen a indexadas, como `/servicios/reforma-banos/`. Si no ocurre en 14 días, el problema no es el rastreo | Inspección de URL, días 3, 7, 14 y 21 | 04-11: las 3 indexadas, con la propia URL como canónica de Google. 22-11: siguen indexadas, mismas fechas de rastreo |

## Mediciones

Una fila por fecha. Mismos informes y filtros cada vez.

| Fecha | Indexadas | Sin indexar | Descubiertas | Rastreadas sin indexar | 404 | Solicitudes de rastreo (90 días) | Tiempo medio de respuesta | Estado del host | Notas |
|---|---|---|---|---|---|---|---|---|---|
| 2026-10-23 | 31 | 45 | 35 | 4 | | | | | Foto de partida (exportación del 23-10) |
| 2026-11-01 | 31 | 45 | 35 | 4 | <1 % de las respuestas | 204 | 101 ms | Sin fallos en robots.txt, DNS ni conectividad | Día 0. Sin cambios respecto al 23-10. Detalle del rastreo debajo de la tabla |
| 2026-11-04 | 43 (estimado) | 33 (estimado) | 27 (estimado) | 0 (estimado) | | | | | Día 3. Cifras derivadas de la Inspección de URL (31 + 12 indexadas; las 6 fuera del sitemap no cambian), no del informe de páginas. Sustituir por las del informe cuando se actualice |
| 2026-11-08 | 31 | 45 | 35 | 4 | <1 % de las respuestas | 210 | 103 ms | Todo en verde | Día 7. El informe de páginas da exactamente las mismas cifras que el 23-10 (noindex 3, redirección 2, robots.txt 1, descubiertas 35, rastreadas 4): todavía no recoge las 12 indexaciones que la Inspección de URL confirma desde el 04-11. Se mantienen las cifras estimadas del día 3. «Última actualización» del informe: 23-10-2026. Es la misma foto que el 23-10, sin refrescar desde entonces, y lo mismo vale para la fila del 01-11 |
| 2026-11-15 | 43 | 33 | 27 | 0 | <1 % de las respuestas | 212 | 103 ms | Todo en verde | Día 14. Informe de páginas actualizado el 09-11-2026, el primero desde el 23-10. Ya recoge las 12 indexaciones: indexadas 31 → 43, descubiertas 35 → 27, rastreadas sin indexar 4 → 0. Motivos: noindex 3, redirección 2, robots.txt 1, descubiertas 27, rastreadas sin indexar 0. Coincide exactamente con la estimación del 04-11, que queda confirmada |
| 2026-11-22 | 43 | 33 | 27 | 0 | <1 % de las respuestas | 235 | 101 ms | Todo en verde | Día 21. Informe de páginas actualizado el 16-11-2026, con las mismas cifras que el 09-11 (noindex 3, redirección 2, robots.txt 1, descubiertas 27, rastreadas sin indexar 0). Sitemap leído el 18-11 |

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

**Estadísticas de rastreo a 15-11-2026** (día 14):

- **Solicitudes totales:** 212, dos más que el 08-11.
- **Tiempo medio de respuesta:** 103 ms. Estado del host: todo en verde.
- **Por respuesta:** 92 % correcto (200), 8 % movido permanentemente (301), <1 % 404. Igual que el 08-11. Los ejemplos de 301 siguen siendo los dos de `http://trazzo360.es/` del 13-09 y el 14-09.
- **Por finalidad:** 70 % actualización, 30 % detección.
- **Por tipo de Googlebot:** smartphones 31 %, ordenador 23 %, imagen 22 %, otro tipo de agente 17 %, carga de recursos de la página 7 %.

**Estadísticas de rastreo a 22-11-2026** (día 21):

- **Solicitudes totales:** 235, 23 más que el 15-11. Las dos semanas anteriores sumaron 6 y 2. De las 23 se conocen tres: el rastreo de A2 (15-11), el de R1 (16-11) y la lectura del sitemap (18-11). El resto no se puede identificar desde aquí.
- **Tiempo medio de respuesta:** 101 ms. Estado del host: todo en verde.
- **Por respuesta:** 89 % correcto (200), 11 % movido permanentemente (301), <1 % 404. Los ejemplos de 301 siguen siendo los dos de `http://trazzo360.es/` del 13-09 y el 14-09.
- **Por finalidad:** 73 % actualización, 27 % detección.
- **Por tipo de Googlebot:** smartphones 34 %, ordenador 23 %, imagen 20 %, otro tipo de agente 15 %, carga de recursos de la página 7 %.

La parte de 301 sube de 8 % a 11 % sin que cambien los ejemplos. Por lo dicho debajo, no se lee como recuento, y la web solo emite 308 (comprobado el 08-11). Nada que corregir.

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

Coincide con lo esperado (Correcto, 70 páginas). **08-11:** última lectura el 06-11-2026, 9 días después de la anterior. Google lo lee de forma periódica (última lectura hace 4 días), así que el sitemap no es la causa de las 35 descubiertas sin indexar: las conoce todas y no las ha descargado. No se reenvía, como indica el plan. **15-11:** la última lectura sigue siendo el 06-11-2026, hace 9 días. Con el ritmo observado (28-10 → 06-11) la siguiente debería llegar estos días. **22-11:** última lectura el 18-11-2026, 12 días después de la anterior. Ninguna de las 27 descubiertas se ha rastreado después.

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
- El solapamiento con la zona no se puede juzgar hasta que `/zonas/coslada/` esté indexada. Resultado del filtro por `/zonas/coslada/` (01-11-2026): sin consultas, 0 impresiones, no indexada. Queda pendiente repetirlo a las 2–4 semanas de su indexación. **15-11:** primera repetición, con tabla y lectura, en «Lectura del día 14».

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

**15-11 (día 14).** El umbral del punto 3 se alcanza en cifras: la zona suma 51 impresiones en consultas de reforma integral y la combinada 14. Pero el reparto no coincide con la hipótesis: en las consultas compartidas la combinada sale igual o mejor que la zona, y la consulta en la que mejor sale la zona empieza por «empresa de reformas…», que es justo lo que el cambio añadiría al H1. Decisión aplazada al día 21. Detalle en «Lectura del día 14».

**22-11 (día 21).** La alternancia no se repite: en las dos consultas que comparten, ni la zona ni la combinada suman una sola impresión en la semana. La zona crece en reforma integral solo en consultas donde la combinada no aparece. Además, con el rango del 01-11 al 20-11 la combinada no tiene ningún dato en Rendimiento: sus 14 impresiones son todas anteriores al 01-11. Desde esa fecha, para las consultas de reforma integral en San Fernando solo sale la zona. **La hipótesis sigue abierta, reformulada:** no es alternancia, puede ser sustitución. Primero se inspecciona la combinada (indexación y canónica de Google) y después se decide sobre el H1. Detalle en «Lectura del día 21».

### Coslada: la zona adelanta a la combinada de integrales (22-11-2026)

**Observación.** En la semana del día 14 al 21, `/zonas/coslada/` suma más impresiones y en mejor posición que `/reformas-integrales/coslada/` en la consulta principal de la combinada («reformas integrales coslada»: unas 20 nuevas hacia la posición 55, frente a 15 hacia la 76). Pasa lo mismo en «empresa reformas integrales coslada» y en las dos consultas de pisos. Es lo contrario de lo que asigna `keyword-map.md`. Es justo el solapamiento que se buscaba en San Fernando, pero aparece aquí.

**Qué se sabe y qué no.** Es una semana de datos, con posiciones entre 50 y 76 y posiciones de las impresiones nuevas estimadas (método en «Lectura del día 21»). Puede ser rotación. Las consultas de pisos no tienen dueño mientras `/reforma-pisos/coslada/` (C1) siga sin rastrear.

**Decisión de momento: no se toca nada.** Se repite la comparación el 29-11 (4 semanas desde la indexación de la zona) y cuando C1 se indexe con la tanda 1.

## Prueba controlada

Estado en cada revisión: D = descubierta, R = rastreada sin indexar, I = indexada. Junto al estado, la fecha del último rastreo. «No reconocida» = Inspección de URL dice «Google no reconoce esta URL».

La columna «Día 3» recoge la revisión del 04-11-2026 para todas las URL, aunque A7 y A8 llevaban solo 1 día desde su solicitud. Se anotan así porque ya habían cambiado de estado.

La columna «Día 7» recoge la revisión del 08-11-2026 para todas las URL. Es el día 7 exacto de A1 a A6 y de R2 a R4; para A7 y A8 es el día 5 y para R1 el día 12 aproximadamente.

La columna «Día 14» recoge la revisión del 15-11-2026. Es el día 14 exacto de A1 a A6 y de R2 a R4; para A7 y A8 es el día 12 y para R1 el 19 aproximadamente.

La columna «Día 21» recoge la revisión del 22-11-2026. Es el día 21 exacto de A1 a A6 y de R2 a R4; para A7 y A8 es el día 19 y para R1 el 26 aproximadamente.

| # | URL | Grupo | Solicitada | Día 3 | Día 7 | Día 14 | Día 21 |
|---|---|---|---|---|---|---|---|
| A1 | `/reformas-integrales/torrejon-de-ardoz/` | A | 1-11 14:32 | I (1-11 14:34) | I (1-11 14:34) | I (1-11 14:34) | I (1-11 14:34) |
| A2 | `/reforma-banos/torrejon-de-ardoz/` | A | 1-11 14:34 | I (1-11 14:36) | I (1-11 14:36) | I (1-11 14:36) | I (15-11 01:28) |
| A3 | `/reformas-integrales/guadalajara/` | A | 1-11 14:39 | I (1-11 14:36) | I (1-11 14:36) | I (1-11 14:36) | I (1-11 14:36) |
| A4 | `/reforma-pisos/guadalajara/` | A | 1-11 14:41 | I (1-11 14:44) | I (1-11 14:44) | I (1-11 14:44) | I (1-11 14:44) |
| A5 | `/reforma-cocinas/alcala-de-henares/` | A | 1-11 14:42 | I (1-11 14:44) | I (1-11 14:44) | I (1-11 14:44) | I (1-11 14:44) |
| A6 | `/locales-comerciales/alcala-de-henares/` | A | 1-11 14:44 | I (1-11 14:46) | I (1-11 14:46) | I (1-11 14:46) | I (1-11 14:46), al volver a inspeccionarla; la primera inspección dio «No reconocida» |
| A7 | `/reforma-banos/coslada/` | A | 3-11 17:55 | I (3-11 17:58) | I (3-11 17:58) | I (3-11 17:58) | I (3-11 17:58) |
| A8 | `/reforma-cocinas/coslada/` | A | 3-11 17:58 | I (3-11 17:58) | I (3-11 17:58) | I (3-11 17:58) | I (3-11 17:58) |
| C1 | `/reforma-pisos/coslada/` | Control | n/a | D | No reconocida | No reconocida | D |
| C2 | `/reforma-cocinas/torrejon-de-ardoz/` | Control | n/a | D | D | D | D |
| C3 | `/reforma-pisos/torrejon-de-ardoz/` | Control | n/a | D | No reconocida | D | D |
| C4 | `/locales-comerciales/torrejon-de-ardoz/` | Control | n/a | D | No reconocida | No reconocida | D |
| C5 | `/reformas-integrales/alcala-de-henares/` | Control | n/a | D | No reconocida | D | D |
| C6 | `/reforma-banos/alcala-de-henares/` | Control | n/a | No reconocida | D | D | No reconocida |
| C7 | `/reforma-banos/guadalajara/` | Control | n/a | D | D | D | No reconocida |
| C8 | `/reforma-cocinas/guadalajara/` | Control | n/a | No reconocida | No reconocida | D | D |
| C9 | `/locales-comerciales/guadalajara/` | Control | n/a | D | D | No reconocida | No reconocida |
| R1 | `/servicios/reforma-banos/` | Rastreadas | ~27-10 | I (26-10 19:25) | I (26-10 19:25) | I (26-10 19:25) | I (16-11 19:10) |
| R2 | `/zonas/coslada/` | Rastreadas | 1-11 | I (1-11 14:24) | I (1-11 14:24) | I (1-11 14:24) | I (1-11 14:24) |
| R3 | `/zonas/meco/` | Rastreadas | 1-11 | I (1-11 14:24) | I (1-11 14:24) | I (1-11 14:24) | I (1-11 14:24) |
| R4 | `/contacto/` | Rastreadas | 1-11 | I (1-11 14:23) | I (1-11 14:23) | I (1-11 14:23) | I (1-11 14:23) |

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

## Lectura del día 14 (15-11-2026)

**Resultado:** la prueba sigue sin cambios. Las 12 URL solicitadas siguen indexadas, con la propia URL como canónica de Google y sin rastreo nuevo desde su solicitud. De las 9 de control no se ha rastreado ninguna: 6 están en «Descubierta» y 3 en «Google no reconoce esta URL».

| Grupo | Día 7 | Día 14 | Detalle |
|---|---|---|---|
| A (solicitadas) | 8 de 8 indexadas | 8 de 8 indexadas | Mismas fechas de rastreo que el día 3. Canónica de Google: la propia URL en las 8 |
| Rastreadas (solicitadas) | 4 de 4 indexadas | 4 de 4 indexadas | Mismas fechas de rastreo que el día 3 |
| Control (sin tocar) | 0 de 9 rastreadas | 0 de 9 rastreadas | 4 D + 5 no reconocidas el día 7; 6 D + 3 no reconocidas el día 14 |

**Qué se observa**

- **El informe de páginas se ha puesto al día.** Se actualizó el 09-11, por primera vez desde el 23-10. Da 43 indexadas y 33 sin indexar, con 27 descubiertas y 0 rastreadas sin indexar. Son exactamente las cifras que se estimaron el 04-11 con la Inspección de URL, así que las dos fuentes coinciden.
- **Las 27 descubiertas son las pendientes.** Son las 9 de control y las 18 que quedaban fuera de la prueba (P1 a P18), es decir, la lista de «Orden de solicitud a partir del día 21».
- **Ninguna solicitada ha pasado a «Rastreada: actualmente sin indexar».** Lo dicen la inspección de las 12 y el informe de páginas, que da 0 en ese motivo. Dos semanas después de indexarlas, Google no ha descartado ninguna por contenido.
- **Google no ha vuelto a ninguna de las 12.** Todas conservan la fecha de rastreo de su solicitud. Encaja con las 2 solicitudes de rastreo nuevas en una semana: sin solicitud manual, Google no pasa.
- **El estado «No reconocida» sigue yendo y viniendo.** C3, C5 y C8 vuelven a «Descubierta» y C9 pasa a «No reconocida». Se confirma lo que se vio el día 7: es un vaivén de la herramienta con URL que nunca se han rastreado. En la práctica, los dos estados significan lo mismo: sin rastrear.
- **El «Error temporal de procesamiento» del campo Sitemaps también va y viene.** El día 14 aparece en A1 y A7. El día 3 aparecía en A1, A2, A6 y A8. No afecta a la indexación, así que se confirma que no hay que actuar.

**Rendimiento de las URL solicitadas** (Search Console → Rendimiento, filtro por página, del 01-11-2026 al 12-11-2026). El rango acaba el 12-11 por el retraso habitual de los datos de Search Console. Para A7 y A8, indexadas el 03-11, son 10 días de datos. No se anotaron los clics, ni hoy ni el día 7.

| # | URL | Impresiones día 7 | Impresiones día 14 | Posición día 7 | Posición día 14 |
|---|---|---|---|---|---|
| A1 | `/reformas-integrales/torrejon-de-ardoz/` | 96 | 188 | 68,1 | 62,2 |
| A2 | `/reforma-banos/torrejon-de-ardoz/` | 51 | 113 | 69,6 | 72,4 |
| A3 | `/reformas-integrales/guadalajara/` | 95 | 186 | 49,7 | 51,7 |
| A4 | `/reforma-pisos/guadalajara/` | 53 | 102 | 66,0 | 67,5 |
| A5 | `/reforma-cocinas/alcala-de-henares/` | 25 | 60 | 60,0 | 56,4 |
| A6 | `/locales-comerciales/alcala-de-henares/` | Sin datos | 1 | | 1 |
| A7 | `/reforma-banos/coslada/` | 36 | 167 | 71,4 | 67,3 |
| A8 | `/reforma-cocinas/coslada/` | 30 | 110 | 68,9 | 65,7 |
| R1 | `/servicios/reforma-banos/` | 60 | 93 | 72,7 | 69,7 |
| R2 | `/zonas/coslada/` | 205 | 445 | 72,5 | 73,6 |
| R3 | `/zonas/meco/` | 43 | 95 | 52,4 | 50,3 |
| R4 | `/contacto/` | Sin datos | Sin datos | | |

Lectura:

- **Las impresiones se han más que duplicado.** El grupo A pasa de 386 a 927. El rango del día 7 no se anotó y el del día 14 lo incluye, así que no se puede separar la segunda semana de la primera. Lo que sí se ve es que las páginas siguen apareciendo y no se apagan tras el primer empujón.
- **El mayor salto es el de Coslada.** A7 pasa de 36 a 167 y A8 de 30 a 110. El día 7 solo llevaban 5 días indexadas, así que parte del salto se explica porque ahora se miden más días.
- **Las posiciones apenas se mueven.** Van de 50,3 a 73,6, es decir, de la página 5 a la 8 de resultados. Las variaciones de 2 a 6 puestos caben en el ruido de una media acumulada.
- **`/zonas/meco/` tiene la mejor posición medida (50,3) y A3 la segunda (51,7).** Se mantiene que Meco vaya antes que Camarma en el orden de solicitud.
- **`/zonas/coslada/` es la URL más vista: 445 impresiones.** Abajo se comparan sus consultas con las de la combinada.
- **A6 tiene una sola impresión, y con una impresión la posición 1 no significa nada.** Se mantiene lo del día 7: apenas hay demanda que la muestre.

**Rango de fechas de las consultas: últimos 3 meses** (confirmado por el titular el 15-11). No es el mismo rango que la tabla de rendimiento (01-11 a 12-11). Los datos ya lo indicaban:

- En `/reformas-integrales/coslada/`, «reformas integrales coslada» tiene 74 impresiones, frente a 54 en la línea base de 3 meses.
- «reformas en coslada» sale idéntica en las dos fechas: 25 impresiones, posición 77,2.
- En San Fernando, «reformas integrales en san fernando de henares» tiene en la combinada las mismas 5 impresiones en posición 24 que el 04-11.

Para `/zonas/coslada/` el rango da igual, porque no tenía impresiones antes del 01-11. Para las otras tres páginas sí importa: sus cifras incluyen las semanas anteriores a la prueba. En la combinada de Coslada, la diferencia con la línea base es lo que ha sumado desde el 01-11 aproximadamente.

**Consultas de Coslada: zona frente a combinada** (primera repetición de la línea base del 01-11).

`/zonas/coslada/` aparece en 34 consultas, que suman 240 impresiones. `/reformas-integrales/coslada/` aparece en 23 consultas, con 368. Comparten 18. Esta tabla recoge las compartidas con 8 o más impresiones en alguna de las dos, más «empresa de reformas coslada», que es la keyword asignada a la zona en `keyword-map.md`:

| Consulta | Tipo | Zona: imp. | Zona: pos. | Integrales: imp. | Integrales: pos. | Integrales, línea base |
|---|---|---|---|---|---|---|
| reformas coslada | Genérica | 27 | 88,7 | 2 | 78,5 | Fuera del top 10 |
| empresa de reformas coslada | Genérica (keyword de la zona) | 12 | 81,8 | | | |
| reformas en coslada | Genérica | 18 | 84,9 | 25 | 77,2 | 25 |
| reformas en general coslada | Genérica | 11 | 77,3 | 12 | 67,8 | 9 |
| reformas casas coslada | Genérica | 8 | 84,4 | 38 | 65,3 | 33 |
| reformas baratas coslada | Genérica (precio) | 10 | 83,8 | 41 | 89,4 | 31 |
| reformas integrales coslada | Servicio | 22 | 82,2 | 74 | 73,3 | 54 |
| empresa reformas integrales coslada | Servicio | 9 | 84,9 | 31 | 71,6 | 29 |
| reformas de pisos coslada | Otro servicio (pisos) | 10 | 78,2 | 51 | 68,1 | 39 |
| reformas pisos coslada | Otro servicio (pisos) | 10 | 87,0 | 45 | 69,4 | 33 |
| comparar presupuestos de reformas coslada | Informacional (precio) | 8 | 96,3 | 9 | 51,3 | 8 |
| reformar escaleras sin obra coslada | Otra intención | 7 | 83,9 | 10 | 74,5 | 9 |

Lectura:

- **Las dos páginas se solapan.** Más de la mitad de las consultas de la zona (18 de 34) también aparecen en la combinada. La zona todavía no tiene un terreno propio.
- **En las genéricas, la zona empieza a entrar.** «reformas coslada» va casi entera a la zona (27 frente a 2) y «empresa de reformas coslada» solo a la zona. En «reformas en coslada» la combinada no ha sumado ninguna impresión desde la línea base, mientras que la zona suma 18. Esa es la dirección que marca `keyword-map.md`. Sin embargo, la zona sale peor posicionada que la combinada en casi todas las consultas que comparten.
- **La combinada crece en su consulta y en las ajenas.** En reforma integral, su consulta de servicio, pasa de 54 a 74 y de 29 a 31. También crece en pisos (de 39 a 51 y de 33 a 45) y en genéricas como «reformas casas» y «reformas baratas».
- **Las consultas de pisos no tienen dueño.** Se las reparten la zona y la combinada de integrales porque `/reforma-pisos/coslada/` (C1) sigue sin rastrear. Se volverá a mirar cuando C1 entre con la tanda 1.
- **La zona recoge consultas de todos los servicios**: baños, locales, oficinas, comunidades y cocinas. Es lo esperable en un hub. Salvo «reformar baño sin obras coslada» (5 impresiones, posición 29,2), todas están por encima de la posición 70.
- **No hay base para cambiar nada.** Con posiciones entre 65 y 97, casi todo puede ser rotación entre las páginas 7 y 10. Se repite la comparación el día 21 y a las 4 semanas (29-11).

**San Fernando: consultas de la zona y de la combinada** (pasos 1 y 2 de «Qué mirar» en la hipótesis de San Fernando).

`/zonas/san-fernando-de-henares/` aparece en 20 consultas, con 232 impresiones en total:

| Tipo de consulta | Consultas | Impresiones | Ejemplos (impresiones, posición) |
|---|---|---|---|
| Genérica, el papel del hub | 7 | 152 | «reformas san fernando de henares» (107, 80,3); «reformas en san fernando de henares» (29, 48,9) |
| Reforma integral | 6 | 51 | «reformas integrales san fernando de henares» (28, 71,5); «empresa de reformas integrales en san fernando de henares» (7, 19,0) |
| Otros servicios | 7 | 29 | «reformas pisos en san fernando de henares» (4, 9,5); «reformas oficinas en san fernando de henares» (5, 10,0); «reformar piso san fernando de henares» (8, 32,6) |

`/reformas-integrales/san-fernando-de-henares/` aparece en 4 consultas, con 14 impresiones. Comparación en las consultas de reforma integral:

| Consulta | Zona (imp., pos.) | Combinada (imp., pos.) | 04-11 |
|---|---|---|---|
| empresa de reformas integrales en san fernando de henares | 7, 19,0 | 6, 12,8 | |
| reformas integrales en san fernando de henares | 5, 24,4 | 5, 24,0 | Zona 2, 18 · combinada 5, 24 |
| reformas integrales san fernando de henares | 28, 71,5 | No aparece | |
| empresa reformas integrales san fernando de henares | 7, 34,4 | No aparece | |
| reformas integrales corredor del henares | No aparece | 2, 32,5 | |
| reformas chalets en san fernando de henares | 1, 26,0 | 1, 5,0 | |

Lectura:

- **En cifras, se alcanza la señal de la hipótesis.** La zona suma 51 impresiones en consultas de reforma integral y la combinada 14. El umbral era de 10 o más durante varias semanas, alternando con la combinada.
- **Pero el reparto no es el que predecía la hipótesis.** El 04-11 la zona salía mejor que la combinada (18 frente a 24). Hoy, en las consultas que comparten, la combinada está igual o mejor (12,8 frente a 19,0; 24,0 frente a 24,4). La consulta de integral con más volumen de la zona (28 impresiones) está en la posición 71,5, lejos de competir con la combinada.
- **No está claro que el cambio previsto ataque la causa.** El cambio era meter «Empresa de reformas en {zona}» en el H1. Pero la consulta de servicio en la que mejor sale la zona empieza precisamente por «empresa de reformas…» («empresa de reformas integrales en san fernando de henares», 19,0). Añadir «empresa» al H1 podría acercar la zona a esas consultas en vez de alejarla. El cambio puede seguir valiendo para cumplir el canon de `ANATOMIAS-CANONICAS.md`, pero no está demostrado como remedio de la alternancia.
- **San Fernando sigue siendo donde el sitio tiene tracción.** Entre las dos páginas hay 8 pares consulta-página por debajo de la posición 25. En Coslada solo hay dos: «precio reforma coslada» (16,6) y «coslada» (4,0, 1 impresión).

**Decisión: el H1 no se toca antes del día 21.** `/zonas/coslada/` y `/zonas/meco/` siguen en la prueba hasta el 22-11, y los datos no muestran que el H1 sea la causa. Se vuelve a mirar con la lectura del día 21. Si entonces se decide cambiarlo, irá con su DEC en `DECISION-REGISTER.md`.

**Qué falta todavía**

- Los clics por URL. No se han anotado ni el día 7 ni el 14; se anotan el día 21. Total del sitio a 15-11: **9 clics**, frente a 3 en la foto de partida (23-10). El rango de ese total no quedó anotado.
- Para el día 21, sacar las consultas de las cuatro páginas (las dos de Coslada y las dos de San Fernando) con el mismo rango y anotarlo. Desde el 01-11 es la opción que permite comparar la zona de Coslada con la combinada en igualdad de condiciones.

**Qué no se puede afirmar todavía**

- Falta una semana de control. La diferencia sigue siendo clara (12 de 12 frente a 0 de 9), pero la lectura que cuenta es la del día 21.
- Con posiciones por encima de 50, las impresiones no se traducen en visitas. Dicen que las páginas aparecen, no cuánto tráfico van a traer.

**Próxima revisión:** día 21, el 22-11. Incluye la inspección de las 21 URL, el informe de páginas, las estadísticas de rastreo, el rendimiento con clics, las consultas de Coslada y San Fernando con rango anotado, y la lectura final. Si da la primera fila de la tabla del plan, ese mismo día se envía la tanda 1.

## Lectura del día 21 (22-11-2026)

**Resultado: primera fila de la tabla del plan.** Las 8 del grupo A siguen indexadas, con la propia URL como canónica, y ninguna ha pasado a «Rastreada: actualmente sin indexar». De las 9 de control no se ha rastreado ninguna en 21 días: 6 están en «Descubierta» y 3 en «Google no reconoce esta URL». A6 salió primero como «No reconocida» y, al volver a inspeccionarla el mismo día, como indexada (detalle debajo). La web no ha cambiado durante la prueba: no hay commits en `src/`, `public/` ni `astro.config.mjs` desde el 01-11.

| Grupo | Día 14 | Día 21 | Detalle |
|---|---|---|---|
| A (solicitadas) | 8 de 8 indexadas | 8 de 8 indexadas (A6, tras volver a inspeccionarla) | A2 se ha vuelto a rastrear el 15-11 a la 01:28, sin solicitud. Las otras 6 conservan la fecha de su solicitud |
| Rastreadas (solicitadas) | 4 de 4 indexadas | 4 de 4 indexadas | R1 se ha vuelto a rastrear el 16-11 a las 19:10, sin solicitud |
| Control (sin tocar) | 0 de 9 rastreadas | 0 de 9 rastreadas | 6 D + 3 no reconocidas (C6, C7, C9) |

**A6 (`/locales-comerciales/alcala-de-henares/`): «Google no reconoce esta URL»**

- El día 14 estaba indexada, con rastreo del 1-11 a las 14:46. El 22-11 la inspección da todo N/D: sin sitemap de referencia, sin rastreo y sin canónica.
- No es lo que ocurre cuando Google retira una página por su contenido. En ese caso la pasaría a «Rastreada: actualmente sin indexar» y conservaría la fecha de rastreo.
- La web está bien. Comprobado el 22-11 con `curl`: responde 200, la canónica apunta a sí misma, no tiene meta robots, está en `sitemap-0.xml` (70 URL) y `robots.txt` solo bloquea `/gracias/`.
- El informe de páginas del 16-11 sigue dando 43 indexadas. Si A6 hubiera salido del índice antes de esa fecha, serían 42.
- Rendimiento: 1 impresión del 01-11 al 20-11, la misma que el día 14.
- **Lectura:** lo más probable es el mismo vaivén de la herramienta que se ha visto en el control, o que la URL inspeccionada no fuera exactamente esta. Pero hasta ahora el vaivén solo había afectado a URL que nunca se habían rastreado, así que no se da por hecho.
- **Qué hacer:** volver a inspeccionarla, copiando la URL del sitemap. Si sigue «No reconocida», pulsar «Probar URL publicada» y solicitar la indexación. No es repetir una solicitud de tanda: es recuperar una URL que estaba indexada. Se anota como cambio.
- **Resuelto el 22-11:** al volver a inspeccionarla sale indexada, con último rastreo el 1-11-2026 a las 14:46:21, el mismo de siempre. Era un fallo de la herramienta. No se solicita. Queda dicho que el vaivén también puede afectar a URL ya rastreadas e indexadas: una «No reconocida» suelta no se da por buena sin repetir la inspección.

**Qué se observa**

- **Google empieza a volver solo, pero poco.** A2 (15-11) y R1 (16-11) tienen un rastreo nuevo sin solicitud, los primeros de la prueba. Las estadísticas suben 23 solicitudes en la semana, frente a 6 y 2 en las anteriores, y el sitemap se leyó el 18-11. Aun así, ninguna de las 27 descubiertas ha recibido visita.
- **El control no se mueve en 21 días.** Al ritmo de rastreo propio de Google, esas 27 combinadas no tienen fecha de entrada.
- **El informe de páginas se actualizó el 16-11** y da las mismas cifras que el 09-11.
- **El «Error temporal de procesamiento» del campo Sitemaps** aparece ahora en A1 a A5 y en A7. En A8 sale el `sitemap-index.xml`. Sigue sin afectar a la indexación.

**Rendimiento de las URL solicitadas** (Search Console → Rendimiento, filtro por página, del 01-11-2026 al 20-11-2026). Los clics no se han anotado.

| # | URL | Impresiones día 14 | Impresiones día 21 | Posición día 14 | Posición día 21 |
|---|---|---|---|---|---|
| A1 | `/reformas-integrales/torrejon-de-ardoz/` | 188 | 306 | 62,2 | 66,6 |
| A2 | `/reforma-banos/torrejon-de-ardoz/` | 113 | 187 | 72,4 | 71,6 |
| A3 | `/reformas-integrales/guadalajara/` | 186 | 391 | 51,7 | 61,0 |
| A4 | `/reforma-pisos/guadalajara/` | 102 | 140 | 67,5 | 68,6 |
| A5 | `/reforma-cocinas/alcala-de-henares/` | 60 | 90 | 56,4 | 60,5 |
| A6 | `/locales-comerciales/alcala-de-henares/` | 1 | 1 | 1 | 1 |
| A7 | `/reforma-banos/coslada/` | 167 | 217 | 67,3 | 63,4 |
| A8 | `/reforma-cocinas/coslada/` | 110 | 187 | 65,7 | 63,3 |
| R1 | `/servicios/reforma-banos/` | 93 | 90 | 69,7 | 70,4 |
| R2 | `/zonas/coslada/` | 445 | 709 | 73,6 | 69,1 |
| R3 | `/zonas/meco/` | 95 | 175 | 50,3 | 46,5 |
| R4 | `/contacto/` | Sin datos | 5 | | 2 |

Lectura:

- **Las impresiones se estabilizan.** El grupo A pasa de 927 a 1.519. Son 592 en los 8 días del 13-11 al 20-11 (74 al día), frente a 927 en los 12 primeros (77 al día). Ni crecen ni se apagan.
- **Las posiciones siguen entre 46 y 72.** A3 baja de 51,7 a 61,0, pero sus 205 impresiones nuevas salen hacia la posición 69: aparece en más consultas y más lejos. No se lee como una caída.
- **`/zonas/meco/` sigue teniendo la mejor posición medida: 46,5.**
- **`/zonas/coslada/` sigue siendo la URL más vista: 709 impresiones.** Sus consultas visibles suman 463: el resto son consultas que Search Console no muestra.
- **R1 baja de 93 a 90 impresiones con un rango más largo.** Si el inicio es el mismo, eso no puede pasar. Lo más probable es que el día 14 se tomara con otro rango. No se saca conclusión de R1.
- **`/contacto/` tiene 5 impresiones en posición 2.** Probablemente sean búsquedas de la marca; no se ha comprobado.

**Consultas: rango y método.** Las cuatro páginas se han sacado con «últimos 3 meses», igual que el día 14. El sitio se publicó el 13-09, así que ese rango recoge toda su historia y no se cae ningún día por el principio. Por eso la diferencia entre el día 14 y el 21 es exactamente lo que se ha sumado en la semana, con el retraso habitual de los datos. De ahí se estima la posición media de las impresiones nuevas: (imp. día 21 × pos. día 21 − imp. día 14 × pos. día 14) / (imp. día 21 − imp. día 14). Como las posiciones vienen redondeadas y las cifras son pequeñas, la estimación puede desviarse varios puestos. Solo se calcula con 5 o más impresiones nuevas.

**Coslada: zona frente a combinada** (segunda repetición de la línea base del 01-11).

`/zonas/coslada/`: 39 consultas, 463 impresiones (34 y 240 el día 14). `/reformas-integrales/coslada/`: 25 consultas, 478 impresiones (23 y 368). Comparten 20 (18 el día 14). Mismas filas que el día 14:

| Consulta | Tipo | Zona día 14 | Zona día 21 | Zona: nuevas (pos. estimada) | Integrales día 14 | Integrales día 21 | Integrales: nuevas (pos. estimada) |
|---|---|---|---|---|---|---|---|
| reformas coslada | Genérica | 27, 88,7 | 36, 87,3 | 9 (~83) | 2, 78,5 | 2, 78,5 | 0 |
| empresa de reformas coslada | Genérica (keyword de la zona) | 12, 81,8 | 19, 70,3 | 7 (~51) | | | |
| reformas en coslada | Genérica | 18, 84,9 | 31, 86,6 | 13 (~89) | 25, 77,2 | 25, 77,2 | 0 |
| reformas en general coslada | Genérica | 11, 77,3 | 16, 81,0 | 5 (~89) | 12, 67,8 | 12, 67,8 | 0 |
| reformas casas coslada | Genérica | 8, 84,4 | 15, 88,1 | 7 (~92) | 38, 65,3 | 40, 67,0 | 2 |
| reformas baratas coslada | Genérica (precio) | 10, 83,8 | 16, 86,3 | 6 (~91) | 41, 89,4 | 43, 90,0 | 2 |
| reformas integrales coslada | Servicio | 22, 82,2 | 42, 69,4 | 20 (~55) | 74, 73,3 | 89, 73,8 | 15 (~76) |
| empresa reformas integrales coslada | Servicio | 9, 84,9 | 17, 71,2 | 8 (~56) | 31, 71,6 | 39, 72,5 | 8 (~76) |
| reformas de pisos coslada | Otro servicio (pisos) | 10, 78,2 | 18, 66,7 | 8 (~52) | 51, 68,1 | 57, 68,5 | 6 (~72) |
| reformas pisos coslada | Otro servicio (pisos) | 10, 87,0 | 18, 74,6 | 8 (~59) | 45, 69,4 | 52, 69,9 | 7 (~73) |
| comparar presupuestos de reformas coslada | Informacional (precio) | 8, 96,3 | 10, 97,5 | 2 | 9, 51,3 | 9, 51,3 | 0 |
| reformar escaleras sin obra coslada | Otra intención | 7, 83,9 | 11, 71,5 | 4 | 10, 74,5 | 10, 74,5 | 0 |

Lectura:

- **Esta semana la zona adelanta a la combinada en reforma integral y en pisos.** En «reformas integrales coslada», la consulta principal de la combinada, la zona suma 20 impresiones nuevas hacia la posición 55 y la combinada 15 hacia la 76. Lo mismo en «empresa reformas integrales coslada» y en las dos de pisos. El día 14 era al revés: la zona salía peor en casi todas las compartidas.
- **En las genéricas, todo va en la dirección de `keyword-map.md`.** La zona suma en todas y la combinada no suma nada en «reformas coslada», «reformas en coslada» ni «reformas en general coslada». La keyword de la zona, «empresa de reformas coslada», mejora: 7 impresiones nuevas hacia la posición 51.
- **En reforma integral pasa lo contrario de lo que asigna `keyword-map.md`.** La consulta de servicio debería ir a la combinada. Es el solapamiento que se buscaba en San Fernando, pero aparece en Coslada. Queda como hipótesis abierta («Coslada: la zona adelanta a la combinada de integrales»).
- **No hay base para cambiar nada.** Es una semana, con posiciones de 50 a 76. Las de pisos siguen sin dueño porque C1 no está rastreada, y C1 entra en la tanda 1. Se repite el 29-11.

**San Fernando: zona frente a combinada.**

`/zonas/san-fernando-de-henares/`: 21 consultas, 336 impresiones (20 y 232 el día 14).

| Tipo de consulta | Consultas | Impresiones día 21 | Impresiones día 14 | Ejemplos día 21 (impresiones, posición) |
|---|---|---|---|---|
| Genérica, el papel del hub | 7 | 219 | 152 | «reformas san fernando de henares» (132, 75,3); «reformas en san fernando de henares» (36, 49,8); «empresa de reformas san fernando de henares» (15, 45,5) |
| Reforma integral | 6 | 79 | 51 | «reformas integrales san fernando de henares» (35, 74,6); «empresa reformas integrales san fernando de henares» (14, 32,9) |
| Otros servicios | 8 | 38 | 29 | «reformar piso san fernando de henares» (14, 38,9); «reformas oficinas en san fernando de henares» (5, 10,0); «reformas pisos en san fernando de henares» (4, 9,5) |

El reparto por tipo del día 14 no dejó anotada cada consulta. Hoy «reforma integral de piso san fernando de henares» cuenta como reforma integral y «reformas chalets en san fernando de henares» como otro servicio. La comparación fiable es consulta a consulta.

`/reformas-integrales/san-fernando-de-henares/`: 4 consultas, 14 impresiones. Son idénticas al día 14, consulta por consulta.

| Consulta | Zona día 14 | Zona día 21 | Combinada día 14 | Combinada día 21 |
|---|---|---|---|---|
| empresa de reformas integrales en san fernando de henares | 7, 19,0 | 7, 19,0 | 6, 12,8 | 6, 12,8 |
| reformas integrales en san fernando de henares | 5, 24,4 | 5, 24,4 | 5, 24,0 | 5, 24,0 |
| reformas integrales san fernando de henares | 28, 71,5 | 35, 74,6 | No aparece | No aparece |
| empresa reformas integrales san fernando de henares | 7, 34,4 | 14, 32,9 | No aparece | No aparece |
| reformas integrales corredor del henares | No aparece | No aparece | 2, 32,5 | 2, 32,5 |
| reformas chalets en san fernando de henares | 1, 26,0 | 1, 26,0 | 1, 5,0 | 1, 5,0 |

Lectura:

- **La alternancia que originó la hipótesis no se repite.** En las dos consultas que comparten, ninguna de las dos páginas suma una impresión en la semana.
- **La zona crece en reforma integral solo donde la combinada no aparece.** Suma 7 impresiones nuevas en «reformas integrales san fernando de henares» (hacia la posición 87) y 7 en «empresa reformas integrales san fernando de henares» (hacia la 31). No le quita nada a la combinada: cubre un hueco.
- **La mejor posición nueva de la zona en integral vuelve a ser una consulta que empieza por «empresa».** Es el mismo argumento del día 14 contra el cambio de H1 como remedio.
- **Las genéricas crecen de 152 a 219.** «reformas san fernando de henares» pasa de 107 a 132 impresiones y de la posición 80,3 a la 75,3. La zona cumple su papel.
- **La combinada no sale en resultados desde el 01-11.** Con el filtro de página y el rango del 01-11 al 20-11, Search Console no da ningún dato para `/reformas-integrales/san-fernando-de-henares/` (comprobado por el titular el 22-11). Sus 14 impresiones de los últimos 3 meses son todas anteriores al 01-11. En esas mismas fechas, la zona ha sumado impresiones en consultas de reforma integral.

**Esto cambia la lectura de la hipótesis.** Ya no es una alternancia entre las dos páginas. Desde el 01-11, en San Fernando solo se muestra la zona para las consultas de reforma integral, y la combinada ha desaparecido de los resultados. Puede ser que Google prefiera la zona para esas consultas, o que a la combinada le pase algo propio. No se sabe cuál de las dos cosas es: la combinada no se ha inspeccionado desde la foto de partida, cuando estaba indexada con último rastreo el 14-09.

**Propuesta sobre la hipótesis de San Fernando:** no cerrarla. Antes de decidir nada sobre el H1, inspeccionar `/reformas-integrales/san-fernando-de-henares/` y anotar si sigue indexada y qué canónica ha elegido Google. Si Google ha elegido la zona como canónica, la canibalización queda confirmada. Si sigue indexada con su propia canónica, se vigila junto con lo de Coslada. La propuesta de esta misma mañana de cerrarla como no confirmada queda retirada.

**Clics:** 5 en el total del sitio del 01-11 al 20-11 (anotado por el titular el 22-11). No se puede comparar con los 9 del 15-11, porque el rango de aquel total no quedó anotado. Los clics por URL siguen sin anotarse.

**Qué falta**

- Inspeccionar `/reformas-integrales/san-fernando-de-henares/`.
- Los clics por URL.

**Siguiente paso** (primera fila del plan): tanda 1 enviada el 22-11 entre las 20:41 y las 20:51, sin aviso de cupo. A6 no se solicitó porque, al volver a inspeccionarla, salía indexada. El estado de P1 antes de solicitarla no quedó anotado.

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
| 1 (22-11) | C7 | `https://www.trazzo360.es/reforma-banos/guadalajara/` | Guadalajara (460) | 22-11 20:41 | Pendiente: día 3 el 25-11 |
| 1 (22-11) | C8 | `https://www.trazzo360.es/reforma-cocinas/guadalajara/` | Guadalajara (460) | 22-11 20:42 | Pendiente: día 3 el 25-11 |
| 1 (22-11) | C9 | `https://www.trazzo360.es/locales-comerciales/guadalajara/` | Guadalajara (460) | 22-11 20:44 | Pendiente: día 3 el 25-11 |
| 1 (22-11) | C5 | `https://www.trazzo360.es/reformas-integrales/alcala-de-henares/` | Alcalá de Henares (280) | 22-11 20:45 | Pendiente: día 3 el 25-11 |
| 1 (22-11) | C6 | `https://www.trazzo360.es/reforma-banos/alcala-de-henares/` | Alcalá de Henares (280) | 22-11 20:46 | Pendiente: día 3 el 25-11 |
| 1 (22-11) | C1 | `https://www.trazzo360.es/reforma-pisos/coslada/` | Coslada (280) | 22-11 20:47 | Pendiente: día 3 el 25-11 |
| 1 (22-11) | C2 | `https://www.trazzo360.es/reforma-cocinas/torrejon-de-ardoz/` | Torrejón de Ardoz (260) | 22-11 20:48 | Pendiente: día 3 el 25-11 |
| 1 (22-11) | C3 | `https://www.trazzo360.es/reforma-pisos/torrejon-de-ardoz/` | Torrejón de Ardoz (260) | 22-11 20:49 | Pendiente: día 3 el 25-11 |
| 1 (22-11) | C4 | `https://www.trazzo360.es/locales-comerciales/torrejon-de-ardoz/` | Torrejón de Ardoz (260) | 22-11 20:50 | Pendiente: día 3 el 25-11 |
| 1 (22-11) | P1 | `https://www.trazzo360.es/reforma-cocinas/san-fernando-de-henares/` | San Fernando de Henares (220) | 22-11 20:51 | Pendiente: día 3 el 25-11 |
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

### Prueba controlada de solicitud de indexación (cerrada el 22-11-2026)

**Conclusión:** las combinadas no tienen ningún bloqueo técnico. Lo que las frena es la prioridad de rastreo de Google. Al solicitar la indexación, Google rastrea e indexa la página en minutos. Sin solicitud, en 21 días no ha rastreado ninguna.

**Dato que la sostiene:**

- Grupo A: 8 de 8 indexadas el día 3, y las 8 siguen indexadas el día 21. Ninguna ha pasado a «Rastreada: actualmente sin indexar». En A6 hubo que repetir la inspección para obtenerlo.
- Control: 0 de 9 rastreadas en 21 días.
- Las 4 rastreadas sin indexar quedaron indexadas tras la solicitud.
- La web no cambió durante la prueba.

**Indexar da visibilidad, no posición.** El grupo A pasa de 0 a 1.519 impresiones en 20 días, pero en posiciones de 46 a 72.

**Límites:** los grupos no se eligieron al azar y son pequeños (8 frente a 9 URL). La conclusión es sobre el rastreo, no sobre el posicionamiento.
