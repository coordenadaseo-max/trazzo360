> ESTADO: INVESTIGACIÓN · NO NORMATIVO
> Origen: Claude Code (Opus 5.5), auditoría de rastreo e indexación con datos de Search Console · Fecha: 2026-10-27
> No es regla del proyecto. Para aplicarse debe promoverse a una decisión en
> docs/DECISION-REGISTER.md.

# Auditoría de rastreo e indexación · Trazzo360

27-10-2026 · Repositorio en `5712333` (coincidía con `origin/main`) · Datos de Search Console exportados por el titular · 19 peticiones GET a producción · Auditoría de solo lectura: no se modificó ningún archivo del proyecto.

**Estado posterior.** El seguimiento de esta auditoría está en [`bitacora.md`](./bitacora.md). Los hallazgos 8 y 10 se corrigieron el mismo día en el commit `1fdf69e`: las migas de los 6 hubs de servicio ya no enlazan a `/servicios/` y los 16 anchors «en en» se leen bien. El fallo de `scripts/audit-links.mjs:29` descrito en el hallazgo 8 se corrigió después, en el commit siguiente a `afe8ebf`. El resto del informe describe el estado anterior a ese commit.

## A. Resumen ejecutivo

1. **En el repositorio no hay ninguna causa técnica que impida rastrear o indexar las páginas locales.** Las 70 URL del sitemap llevan canonical a sí mismas (`https`, `www`, barra final) y en producción no llevan `noindex`. Las 10 que se comprobaron en vivo responden 200, sin meta robots ni `X-Robots-Tag`, y sirven el mismo HTML que el build.
2. **Googlebot no ha descargado nunca ninguna de las 35 pendientes** (último rastreo `1970-01-01`). Por eso nada de su HTML puede explicar su estado. Además, desde el 14-09 no ha rastreado ninguna de las 48 combinadas, tampoco las 13 indexadas. En cambio, en octubre volvió a 15 de las 18 URL indexadas enlazadas desde la cabecera o el pie. Las cifras siguen en 31 indexadas y 45 sin indexar desde el 14-09.
3. **En el código no hay nada que distinga las combinadas indexadas de las pendientes.** Reciben enlaces desde 8,7 y 9,3 páginas de media, la profundidad es 1,85 y 1,71, y el texto propio es el 50 % y el 53 %. De las 12 combinadas enlazadas desde la home, 10 siguen sin rastrear. Añadir enlaces internos no es la solución.
4. **La explicación que mejor encaja con los datos es que Google tiene poco interés en rastrear el sitio, aunque no se puede verificar desde el repositorio.** El dominio tiene seis semanas y casi ninguna visibilidad (3 clics, posición media entre 56 y 88). Las 48 combinadas comparten URL y plantilla. Google rastreó 13 el primer día y no ha vuelto a ninguna.
5. **Hay problemas confirmados en el código, todos de impacto bajo:**
   - las migas de los 6 hubs de servicio enlazan a `/servicios/`, que da 404, y `audit:links` no lo detecta;
   - el sitemap no tiene `lastmod` ni está dividido por tipo de página;
   - el H1 de los hubs de zona no sigue el canon;
   - 16 anchors dicen «en en».

   Las 4 páginas «rastreadas sin indexar» no tienen una causa técnica.

## B. Hallazgos

**C** = confirmado · **H** = hipótesis razonable · **P** = comprobación pendiente

| # | Hallazgo | URL afectadas | Evidencia verificable | Gravedad | Confianza |
|---|---|---|---|---|---|
| 1 | **C** Googlebot nunca ha descargado las 35. La causa está antes de la descarga (prioridad de rastreo), no en el HTML | 35 combinadas | `descubierta-actualmente-sin -indexar.csv`: las 35 con `1970-01-01` | Alta | Alta |
| 2 | **C** Google no rastrea ninguna combinada desde el 14-09. Ninguna de las 48 se ha rastreado después y las 13 indexadas no se han vuelto a rastrear. En octubre sí volvió a 15 de las 18 URL indexadas enlazadas desde la cabecera o el pie | 48 combinadas | `paginas-indexadas.csv`; `Gráfico.csv` (31 / 45 sin cambios del 14-09 al 23-10) | Alta | Alta en el dato; la causa es una decisión de Google |
| 3 | **C** La indexabilidad técnica es correcta | 70 | Canonical en `Layout.astro:20,84`: correcto en 74/74 (la 404 no lo lleva, por diseño). Meta robots solo con el indicador de indexación apagado (`Layout.astro:32-34`); en vivo no aparece. `robots.txt.ts:7-15` y en vivo: `Allow: /`. Sitemap en vivo: 70 `<loc>`, idénticos a las 70 páginas indexables del build. `http` y el dominio sin `www` redirigen con 308 a `https://www` | n/a (descarta causa) | Alta |
| 4 | **C** El enlazado HTML es suficiente y homogéneo. Cada combinada recibe enlaces de 8 a 11 páginas, todos desde `<main>`. Profundidad máxima 2, ninguna huérfana, ningún `nofollow` y ningún enlace generado por JavaScript (no hay islas `client:`, DEC-E03) | 48 | Hub de servicio: `ZonasGrid.astro:25`. Hub de zona: `zonas/[slug].astro:205`. Combinadas hermanas: `[barrio].astro:343-363`. Home: `index.astro:157-175` (12 combinadas, 10 pendientes) | n/a (descarta causa) | Alta |
| 5 | **C** No hay duplicidad que separe pendientes de indexadas. Las 48 tienen introducción, cuerpo, FAQ y meta propios. Cerca de la mitad del texto es plantilla compartida (tabla de precios, barrios, llamadas a la acción, navegación) | 48 | `src/data/content/*.ts` (48 de 48). Texto exclusivo: 0,50 en las indexadas y 0,53 en las pendientes. Similitud máxima con una hermana entre 0,06 y 0,23, lejos de ser casi duplicados. Plantilla: `[barrio].astro:252-363` | n/a (descarta causa) | Media (métrica propia) |
| 6 | **H** Google tiene poco interés en rastrear el sitio y el patrón de combinadas | 35 + 13 | Dominio de 6 semanas. 3 clics en total. Posición media entre 56 y 88 en las URL con más de 100 impresiones (`rendimiento.csv`). Google solo vuelve a URL enlazadas desde las 73 páginas restantes; a las combinadas las enlazan entre 8 y 11 | Alta | Media |
| 7 | **C + H** El H1 de los 8 hubs de zona es «Reformas en {municipio}», no «Empresa de reformas en {municipio}», que es lo que piden el canon y el mapa de keywords. Eso lo acerca a «Reformas Integrales en {municipio}». Que esto explique el caso de Coslada es solo una hipótesis: la combinada de reformas integrales está indexada con 399 impresiones y la zona está rastreada sin indexar. En San Fernando ambas están indexadas | 8 zonas; Coslada | `zonas/[slug].astro:92`, `zonas/alcala-de-henares.astro:152`. Canon: `ANATOMIAS-CANONICAS.md` (familia 2, «H1 pattern: empresa, no servicio») y `keyword-map.md`. No hay ninguna DEC que lo cambie | Media | Alta la desviación; baja su efecto |
| 8 | **C** Las migas visibles de los 6 hubs de servicio enlazan a `/servicios/`, que da 404 en vivo. El `BreadcrumbList` del JSON-LD no incluye ese nivel. *Corregido en `1fdf69e`; el auditor, en un commit posterior* | 6 hubs | `servicios/reforma-banos.astro:150`, `reforma-cocinas.astro:170`, `reformas-integrales.astro:130`, `reforma-pisos.astro:111`, `locales-comerciales.astro:113`, `comunidades-vecinos.astro:113`. `audit:links` no lo detecta porque `scripts/audit-links.mjs:29` da por buena la carpeta `dist/servicios` como si fuera una página | Baja | Alta |
| 9 | **C** El sitemap no tiene `<lastmod>` y es un único fichero en orden alfabético | 70 | `astro.config.mjs:18-25` no configura `serialize` ni `lastmod`, y la integración solo lo genera si se configura (`generate-sitemap.js:5-6`). En vivo: 70 `<loc>`, 0 `<lastmod>` | Baja | Alta |
| 10 | **C** Los 16 enlaces de los hubs de comunidades y de locales hacia sus combinadas dicen «en en» (por ejemplo, «Comunidades en en Coslada»). No afecta al descubrimiento: comunidades es el servicio con más combinadas indexadas (6 de 8). *Corregido en `1fdf69e`* | 16 combinadas | `comunidades-vecinos.astro:558`, `locales-comerciales.astro:620`, `ZonasGrid.astro:28` | Baja | Alta |
| 11 | **C** Variantes de URL menores:<br>• 63 enlaces apuntan a 6 URL con `?servicio=`, que el canonical ya agrupa.<br>• Sin barra final, la URL responde 200 en lugar de redirigir; es el mismo fichero, con canonical a la versión con barra, y ningún enlace interno la usa.<br>• `http://trazzo360.es` llega a `www` en 2 redirecciones | varias | `[barrio].astro:293`, entre otros; comprobado en vivo | Muy baja | Alta |
| 12 | **P** Estadísticas de rastreo desde el 13-09: estado del servidor, códigos de respuesta, tiempos y peticiones de descubrimiento. Es lo único que confirma o descarta la explicación oficial de Google para «Descubierta» (prevé que el servidor se sobrecargue) | sitio | Search Console → Ajustes. En vivo, el primer byte tardó entre 0,26 y 0,67 s en 10 URL | n/a | n/a |
| 13 | **P** Faltan tres datos de Search Console:<br>• de las 4 rastreadas: fecha de rastreo y canonical que eligió Google;<br>• consultas por las que aparece `/reformas-integrales/coslada/`;<br>• cuáles son las 6 URL sin indexar que no están en el sitemap (45 del gráfico menos 39) | 4 + 6 | Inspección de URL y Rendimiento. Candidatas probables para las 6: `/servicios/` (404), las 3 páginas legales del pie con `noindex` y alguna variante con redirección | n/a | n/a |

## C. Comparativa

**Por grupos**

| Señal | Combinadas indexadas (13) | Combinadas pendientes (35) | Zonas indexadas (6) | Zonas rastreadas sin indexar (2) |
|---|---|---|---|---|
| Páginas que la enlazan (media) | 8,7, desde `<main>` | 9,3, desde `<main>` | 73 (menú, pie y cuerpo) | 73 |
| Enlazadas desde la home | 2 de 13 | 10 de 35 | 6 de 6 | 2 de 2 |
| Profundidad desde la home | 1,85 | 1,71 | 1 | 1 |
| Canonical a sí misma | 13/13 | 35/35 | 6/6 | 2/2 |
| En el sitemap | 13/13 | 35/35 | 6/6 | 2/2 |
| Palabras en `<main>` | 1.216 | 1.227 | 1.443 | 1.429 |
| Texto exclusivo frente a su familia | 0,50 | 0,53 | 0,54 | 0,56 |
| Similitud máxima con una hermana | 0,19 | 0,17 | 0,24 | 0,25 |
| Último rastreo | 14-09, todas | nunca | del 18-10 al 22-10 (Guadalajara: 14-09) | sin dato |

**Muestra**

| URL | Estado | Enlazada desde (páginas) | Desde la home | Profundidad | Canonical / sitemap | Palabras | Exclusivo¹ | Conflicto de intención |
|---|---|---|---|---|---|---|---|---|
| `/reforma-cocinas/alcala-de-henares/` | Descubierta | 11 | sí | 1 | OK / sí | 902 | 0,72 | No. Es una página estática con plantilla propia y está bien excluida de la ruta dinámica (`[barrio].astro:12`) |
| `/reformas-integrales/torrejon-de-ardoz/` | Descubierta | 11 | sí | 1 | OK / sí | 1.291 | 0,54 | Solo la cercanía con el H1 de su zona (hallazgo 7) |
| `/locales-comerciales/alcala-de-henares/` | Descubierta | 8 | no | 2 | OK / sí | 1.284 | 0,53 | No |
| `/reformas-integrales/coslada/` (control) | Indexada | 11 | sí | 1 | OK / sí | 1.239 | 0,55 | Posible con `/zonas/coslada/` |
| `/locales-comerciales/san-fernando-de-henares/` (control) | Indexada | 8 | no | 2 | OK / sí | 1.166 | 0,42 | No |
| `/reforma-pisos/alcala-de-henares/` (control) | Indexada | 10 | sí | 1 | OK / sí | 1.243 | 0,45 | No |
| `/servicios/reforma-banos/` | Rastreada | 73 | sí | 1 | OK / sí | 3.782 | 0,78 | No. Con su guía de precios la similitud es 0,02 |
| `/zonas/coslada/` | Rastreada | 73 | sí | 1 | OK / sí | 1.461 | 0,52 | Posible con `/reformas-integrales/coslada/` |
| `/zonas/meco/` | Rastreada | 73 | sí | 1 | OK / sí | 1.397 | 0,59 | No: no hay ninguna combinada de Meco indexada |
| `/contacto/` | Rastreada | 73 | sí | 1 | OK / sí | 344 | 0,81 | No; es una página de servicio al usuario |

¹ Combinadas comparadas con las otras 47; zonas con las otras 7; el hub de servicio y contacto con todo el sitio. Dos de las tres indexadas de control tienen menos texto exclusivo que las tres pendientes de la muestra.

**Diferencias entre servicios.** El código no distingue un servicio de otro: las 48 combinadas salen de la misma plantilla, salvo cocinas en Alcalá. Además, cocinas, con 0 de 8 indexadas, es el servicio con más texto exclusivo (0,57). Solo aparecen dos correlaciones en Search Console:
- Los dos servicios con menos combinadas indexadas (cocinas 0 de 8, baños 1 de 8) son también los dos con el hub en peor estado. El de cocinas no se ha vuelto a rastrear desde el 14-09 y el de baños está rastreado sin indexar.
- Las 6 combinadas de comunidades indexadas son exactamente las 6 primeras de la rejilla de su hub (`ZonasGrid.astro:8-17`); las dos últimas, Meco y Camarma, no lo están. Esto indica que Google sigue esos enlaces y que el límite fue cuántas páginas rastreó, no si las veía. No es una regla fija: el hub de cocinas se rastreó el 14-09 y ninguna de sus 8 combinadas.

## D. Diagnóstico priorizado

1. **Prioridad de rastreo de las combinadas.** Hipótesis; gravedad alta; confianza media.
   - Es lo único que explica a la vez las 35 sin descargar, las 13 sin volver a rastrear y las cifras congeladas, con la indexabilidad técnica ya verificada.
   - El repositorio aporta un factor compatible, no una causa: las combinadas solo reciben enlaces dentro del contenido (de 8 a 11 páginas), y Google solo vuelve a las URL del menú y el pie (enlazadas desde 73).
   - Aun así, 10 de las 12 combinadas enlazadas desde la home siguen pendientes, así que añadir enlaces internos no cambiaría el resultado.
2. **Las 4 rastreadas sin indexar.** No tienen causa técnica, y el descarte tiene confianza alta: su contenido es propio y no hay duplicidad medible. La única hipótesis con algo de apoyo es la de Coslada (hallazgo 7), con confianza baja. Para Meco, contacto y el hub de baños el repositorio no aporta pruebas; hace falta la comprobación 13.
3. **Enlaces rotos a `/servicios/` desde los 6 hubs.** Confirmado; impacto bajo.
   - No explica las 35.
   - Hace perder rastreos en las páginas que Google más visita.
   - Deja las migas visibles distintas del JSON-LD.
   - El fallo de `audit:links` puede estar ocultando otros enlaces rotos del mismo tipo.
4. **Sitemap sin `lastmod` y sin dividir.** Confirmado; impacto bajo. No bloquea nada, pero no permite avisar de cambios de forma fiable ni medir las combinadas por separado.

**Descartado con evidencia:** `noindex`, canonical, robots, redirecciones, rutas en conflicto (las dos rutas dinámicas excluyen sus páginas estáticas en `[barrio].astro:12` y `zonas/[slug].astro:11`), enlaces generados por JavaScript, páginas huérfanas, profundidad y duplicidad entre combinadas.

## E. Correcciones recomendadas

**1. Completar el diagnóstico y hacer una prueba controlada en Search Console (sin tocar código)**
- *Problema:* distinguir si es un problema del servidor o de prioridad de Google, y cerrar las hipótesis de las 4 rastreadas.
- *Evidencia:* más de 40 días sin rastrear ninguna combinada, aunque la indexabilidad está verificada, también con la prueba en tiempo real de Search Console.
- *Acción:*
  - (a) Revisar Estadísticas de rastreo desde el 13-09.
  - (b) Usar Inspección de URL en las 4 rastreadas.
  - (c) Que el titular solicite la indexación de entre 8 y 10 combinadas pendientes de los municipios con volumen en `keyword-map.md` (Guadalajara, Alcalá, Coslada, Torrejón) y deje el resto sin tocar como grupo de control.
- *Archivos:* ninguno.
- *Riesgo:* nulo; solo hay un cupo diario de solicitudes.
- *Comprobación:* en 1 a 3 semanas, las solicitadas deberían tener fecha de rastreo y las de control no. Si se indexan, queda confirmado que no hay bloqueo técnico. Si las estadísticas muestran errores o tiempos altos, hay que mirar en Vercel.

**2. Limpiar los enlaces de los hubs de servicio** *(migas y anchors corregidos en `1fdf69e`; el auditor, en un commit posterior)*
- *Problema:* el 404 enlazado desde los 6 hubs, los 16 anchors con «en en» y el fallo del auditor.
- *Evidencia:* hallazgos 8 y 10; `/servicios/` responde 404 en vivo.
- *Acción:*
  - Quitar el enlace del nivel «Servicios» de las migas: dejarlo como texto o eliminarlo, sin crear `/servicios/`.
  - Corregir `serviceLabel` en los dos hubs afectados.
  - Hacer que `linkExists` exija un `index.html`.
- *Archivos:*
  - Los 6 `src/pages/servicios/*.astro`, en las líneas del hallazgo 8.
  - `comunidades-vecinos.astro:558` y `locales-comerciales.astro:620`.
  - `scripts/audit-links.mjs:25-30`. Este fichero está protegido por CLAUDE.md §11 y necesita una decisión expresa.
- *Riesgo:* mínimo. El auditor corregido puede descubrir otros enlaces rotos del mismo tipo; eso sería información útil, no una regresión.
- *Comprobación:* `npm run build && npm run audit`. El auditor corregido debe marcar `/servicios/` antes del cambio y quedar limpio después. En Search Console, `/servicios/` debe dejar de salir como 404.

**3. Dividir el sitemap por tipo de página y añadir `lastmod` solo si la fecha es exacta**
- *Problema:* hoy no se puede medir el grupo de combinadas por separado ni avisar a Google de cambios.
- *Evidencia:* hallazgo 9.
- *Acción:*
  - Usar la opción `chunks` de `@astrojs/sitemap` 3.7.3, ya instalado (`schema.js:34`), para separar combinadas, hubs y resto.
  - Añadir `lastmod` con `serialize` solo si sale de la fecha real del contenido de cada página, nunca de la fecha del build.
- *Archivos:* `astro.config.mjs:18-25`. Está protegido por §11 y necesita una DEC.
- *Riesgo:* bajo. Un `lastmod` igual en todas o falso hace que Google lo ignore. Hay que volver a enviar el sitemap índice.
- *Comprobación:* en Search Console → Sitemaps se ven las cifras de cada fichero, y el informe de indexación se puede filtrar por el sitemap de combinadas.

**4. Alinear el H1 de zona con el canon**
- *Problema:* el H1 se desvía del canon y podría competir con «reformas integrales en {municipio}».
- *Evidencia:* hallazgo 7. La desviación está confirmada; su efecto en la indexación, no. Por eso va después de la acción 1.
- *Acción:* aplicar el patrón de `ANATOMIAS-CANONICAS.md`, que coincide con `keyword-map.md` («Empresa de reformas en {municipio}» más la tesis de la zona).
- *Archivos:* `src/pages/zonas/[slug].astro:92` y `src/pages/zonas/alcala-de-henares.astro:152`.
- *Riesgo:* medio. Cambia el H1 de 8 hubs, 6 de ellos ya indexados, y puede mover posiciones.
- *Comprobación:* que la canonical que elige Google para `/zonas/coslada/` sea la declarada, y que en Rendimiento cada URL aparezca por consultas distintas.

**5. Señales externas hacia el dominio (fuera del repositorio)**
- *Problema:* el poco interés de Google en rastrear un dominio nuevo, que es la hipótesis principal.
- *Evidencia:* indirecta. Google solo vuelve a las URL más enlazadas y el dominio casi no tiene visibilidad.
- *Acción:* conseguir enlaces y menciones locales reales hacia la home y los hubs, sin inventar ningún dato (CLAUDE.md §0–1).
- *Archivos:* ninguno.
- *Riesgo:* ninguno técnico.
- *Comprobación:* que aumenten las peticiones de descubrimiento en Estadísticas de rastreo y que las combinadas empiecen a tener fecha de rastreo.

**No se recomienda:**
- Añadir enlaces internos: la home ya enlaza 12 combinadas y 10 siguen sin rastrear.
- Reescribir las combinadas para «desduplicarlas»: no hay pruebas de duplicidad y Google ni siquiera las ha leído.
- Tocar canonicals o robots: están bien.

---

**Método y límites.**
- El `dist/` local (13-09, 23:08, mismo commit) se generó con `PUBLIC_SITE_INDEXING=false` (`.env:5`). Por eso lleva `Disallow: /`, `noindex` en todas las páginas y no tiene sitemap.
- Por esa razón, robots, sitemap y meta robots se comprobaron en producción. Enlaces y contenido se sacaron del build después de confirmar que coinciden con producción en 10 URL.
- Las 19 peticiones fueron una detrás de otra.
- La similitud se midió comparando secuencias de 5 palabras del texto de `<main>`. Es una métrica propia, no la de Google.
- Los datos intermedios del análisis no se guardan en el repositorio.
- Fuera del alcance, visto de paso: el title de `/guias/cuanto-cuesta-reformar-un-bano/` todavía dice «en 2025».
