> ESTADO: INVESTIGACIÓN · NO NORMATIVO
> Origen: Claude Code (Opus 5.5), a partir de la auditoría del 2026-10-27 · Fecha: 2026-10-27
> No es regla del proyecto. Para aplicarse debe promoverse a una decisión en
> docs/DECISION-REGISTER.md.

# Plan de Search Console para la indexación

Lo que hace el titular en Search Console, en qué orden y qué anota. Desarrolla la acción 1 de la [auditoría](./2026-10-27-auditoria-indexacion.md). Todo lo que se anote va a la [bitácora](./bitacora.md).

## Qué se quiere averiguar

Las 35 combinadas pendientes no se han rastreado nunca. La auditoría no encontró ninguna causa técnica, y la hipótesis principal es que Google les da poca prioridad. Para comprobarlo:

- se pide a mano la indexación de **8 combinadas (grupo A)**;
- se dejan **las otras 27 sin tocar (grupo control)**;
- se compara durante **3 semanas**.

Si las 8 se rastrean y las demás no, el problema no es técnico: es de prioridad, y se resuelve pidiendo, enlazando desde fuera y esperando. Si ni siquiera las solicitadas se rastrean, hay que buscar en el servidor.

## Reglas mientras dura la prueba

- **No cambiar las combinadas, los hubs ni el sitemap.** Si hace falta algún cambio, se anota en la bitácora con fecha y commit antes de subirlo.
- **No solicitar la indexación de ninguna URL del grupo control.**
- **No pulsar «Validar corrección»** en el informe de páginas. Hace que Google revise todas las URL de ese motivo, también las de control, y la comparación deja de valer.
- **No reenviar el sitemap.** No ha cambiado, y reenviarlo no acelera nada.
- **No solicitar dos veces la misma URL.** Repetir la solicitud no la adelanta.

---

## Día 0 · Foto de partida (unos 45 minutos)

Todo se hace en la propiedad `https://www.trazzo360.es/` (o en la de dominio, si es la que tienes).

### Paso 1. Exportar el informe de páginas

1. Menú izquierdo: **Indexación → Páginas**.
2. En el desplegable de arriba, deja **«Todas las páginas conocidas»**.
3. Arriba a la derecha, **Exportar**. Guarda la descarga fuera del repositorio, en una carpeta con la fecha de hoy.
4. Anota en la bitácora (tabla «Mediciones»):
   - el total de indexadas y el de sin indexar;
   - cuántas hay en cada motivo de la tabla «Por qué no se indexan las páginas».

### Paso 2. Identificar las 6 URL sin indexar que no están en el sitemap

El gráfico dice 45 sin indexar y el sitemap solo explica 39.

1. En el mismo informe, baja a la tabla **«Por qué no se indexan las páginas»**.
2. Abre cada motivo que **no** sea «Descubierta: actualmente sin indexar» ni «Rastreada: actualmente sin indexar».
3. Anota las URL de cada uno.

**Qué es normal ver:**
- `/servicios/` como «No se ha encontrado (404)». Desde el commit `1fdf69e` ya no se enlaza y desaparecerá sola.
- `/aviso-legal/`, `/privacidad/` y `/cookies/` como «Excluida por la etiqueta noindex». Es lo correcto.
- Variantes con `http://` o sin `www` como «Página con redirección». También es correcto.

**Si aparece cualquier otra cosa**, anótala; puede ser un hallazgo nuevo.

### Paso 3. Estadísticas de rastreo

1. Menú izquierdo, abajo: **Ajustes → Rastreo → Estadísticas de rastreo → Abrir informe**.
2. Anota en la bitácora:
   - **Solicitudes de rastreo totales** y la forma de la gráfica: si cae casi a cero después de mediados de septiembre.
   - **Tiempo medio de respuesta.**
   - **Estado del host**: los tres apartados (obtención de robots.txt, resolución DNS y conectividad del servidor). Si alguno no está en verde, haz una captura.
   - **Por respuesta**: porcentaje de «Correcto (200)», 404, redirecciones y errores de servidor (5xx).
   - **Por finalidad**: Descubrimiento frente a Actualización.
   - **Por tipo de Googlebot**: smartphone frente a ordenador.

**Cómo leerlo:**

| Si ves | Significa |
|---|---|
| Estado del host con avisos, o errores 5xx | El servidor ha fallado alguna vez cuando pasaba Google. Hay que revisar Vercel antes que nada |
| Tiempo medio de respuesta muy por encima de lo medido en la auditoría (0,3 a 0,7 s) | Google puede estar frenando el rastreo para no cargar el servidor. Revisar Vercel |
| Todo en verde, tiempos bajos y pocas solicitudes de Descubrimiento | Encaja con la hipótesis principal: no hay problema técnico, Google tiene poco interés por ahora |

### Paso 4. Inspeccionar las 4 rastreadas sin indexar

URL:
- `https://www.trazzo360.es/servicios/reforma-banos/`
- `https://www.trazzo360.es/zonas/coslada/`
- `https://www.trazzo360.es/zonas/meco/`
- `https://www.trazzo360.es/contacto/`

Para cada una:
1. Pega la URL completa en la barra superior («Inspeccionar cualquier URL de…») y pulsa Intro.
2. Despliega **«Indexación de páginas»**.
3. Anota:
   - **Último rastreo** (fecha y hora);
   - **Rastreado como**;
   - **Obtención de página**;
   - **¿Se permite la indexación?**;
   - **Canónica declarada por el usuario** y **Canónica seleccionada por Google**;
   - **Sitemaps** y **Página de referencia**.

**Cómo leerlo:**

| Si ves | Significa |
|---|---|
| Último rastreo anterior al 13-09 a las 20:32 | Google la leyó antes de que el sitio pasara a `www` (DEC-A30). Basta con pedirle que vuelva (día 1) |
| La canónica que elige Google es otra URL | Google la trata como duplicado de esa otra. Si en `/zonas/coslada/` elige `/reformas-integrales/coslada/`, se confirma el hallazgo 7 y la acción 4 (H1 de zona) pasa por delante |
| La canónica de Google sale «N/D» o igual a la declarada, y la fecha es posterior al 13-09 | No hay conflicto técnico: Google la leyó y decidió no indexarla por ahora |

Este día **no** se solicita nada todavía.

### Paso 5. Rendimiento de Coslada

Sirve para saber si `/zonas/coslada/` y `/reformas-integrales/coslada/` compiten por las mismas búsquedas.

1. **Rendimiento → Resultados de búsqueda**. Fecha: **últimos 3 meses**. Activa **Impresiones** y **Posición media**.
2. **+ Añadir filtro → Página → «La URL es exactamente»** → `https://www.trazzo360.es/reformas-integrales/coslada/`.
3. Pestaña **Consultas**. Exporta o anota las 10 primeras con sus impresiones y posición.
4. Repite con `https://www.trazzo360.es/zonas/coslada/`.

**Cómo leerlo:**
- Si `/zonas/coslada/` no tiene impresiones (lo esperable, porque no está indexada), mira si la combinada aparece por búsquedas de empresa como «empresa de reformas coslada» o «reformas coslada». Esas búsquedas son las que `keyword-map.md` asigna a la zona. Si las tiene, refuerza la sospecha de solapamiento.
- Si la combinada solo aparece por búsquedas de reforma integral, no hay solapamiento.

### Paso 6. Sitemap

1. **Indexación → Sitemaps**.
2. Anota **Estado**, **Última lectura** y **Páginas descubiertas**. Debería decir «Correcto» y 70 páginas.
3. No lo reenvíes.

---

## Día 1 · Solicitar la indexación del grupo A

Se eligieron dentro de los cuatro municipios con más búsquedas según `keyword-map.md`: Guadalajara, Alcalá, Coslada y Torrejón. Hay al menos una combinada de cada servicio salvo comunidades, que ya tiene 6 de 8 indexadas.

| # | URL del grupo A |
|---|---|
| A1 | `https://www.trazzo360.es/reformas-integrales/torrejon-de-ardoz/` |
| A2 | `https://www.trazzo360.es/reforma-banos/torrejon-de-ardoz/` |
| A3 | `https://www.trazzo360.es/reformas-integrales/guadalajara/` |
| A4 | `https://www.trazzo360.es/reforma-pisos/guadalajara/` |
| A5 | `https://www.trazzo360.es/reforma-cocinas/alcala-de-henares/` |
| A6 | `https://www.trazzo360.es/locales-comerciales/alcala-de-henares/` |
| A7 | `https://www.trazzo360.es/reforma-banos/coslada/` |
| A8 | `https://www.trazzo360.es/reforma-cocinas/coslada/` |

Para cada una:
1. Pega la URL en la barra superior e Intro. Debe decir «La URL no está en Google» y «Descubierta: actualmente sin indexar».
2. Pulsa **«Solicitar indexación»** y espera uno o dos minutos a que termine la prueba.
3. Cuando salga **«Se ha solicitado la indexación»**, anota la fecha y la hora en la bitácora (tabla «Prueba controlada»).

Google no publica el cupo diario de solicitudes; en la práctica ronda la decena. Si aparece un aviso de cupo superado, sigue al día siguiente y anótalo.

## Día 2 · Solicitar la indexación de las 4 rastreadas sin indexar

Las mismas 4 URL del paso 4, con el mismo procedimiento. Van aparte del grupo A y no forman parte de la comparación, porque son páginas de otro tipo.

## Grupo control: no se toca

En los mismos cuatro municipios, para comparar en igualdad de condiciones:

| # | URL de control |
|---|---|
| C1 | `https://www.trazzo360.es/reforma-pisos/coslada/` |
| C2 | `https://www.trazzo360.es/reforma-cocinas/torrejon-de-ardoz/` |
| C3 | `https://www.trazzo360.es/reforma-pisos/torrejon-de-ardoz/` |
| C4 | `https://www.trazzo360.es/locales-comerciales/torrejon-de-ardoz/` |
| C5 | `https://www.trazzo360.es/reformas-integrales/alcala-de-henares/` |
| C6 | `https://www.trazzo360.es/reforma-banos/alcala-de-henares/` |
| C7 | `https://www.trazzo360.es/reforma-banos/guadalajara/` |
| C8 | `https://www.trazzo360.es/reforma-cocinas/guadalajara/` |
| C9 | `https://www.trazzo360.es/locales-comerciales/guadalajara/` |

Las otras 18 pendientes (San Fernando, Camarma, Meco y Azuqueca) también quedan sin tocar y se siguen con el informe de páginas.

Inspeccionar una URL **no** es solicitar su indexación: se pueden inspeccionar las de control sin estropear la prueba, siempre que no se pulse «Solicitar indexación».

---

## Seguimiento: días 3, 7, 14 y 21 (unos 20 minutos cada vez)

1. Inspecciona las 8 del grupo A, las 9 de control y las 4 rastreadas. De cada una anota **Último rastreo** y el estado («Descubierta», «Rastreada: actualmente sin indexar» o «La URL está en Google»).
2. Los días 7 y 21, además:
   - exporta **Indexación → Páginas** y anota los totales;
   - anota las cifras de **Estadísticas de rastreo** del paso 3.

La inspección de URL da el dato más fresco. El informe de páginas va con varios días de retraso, así que no lo uses para el seguimiento de URL concretas.

## Día 21 · Leer el resultado

| Resultado | Qué significa | Siguiente paso |
|---|---|---|
| Las del grupo A se rastrean y se indexan; las de control siguen sin rastrear | No hay bloqueo técnico: es prioridad de Google | Solicitar el resto en tandas diarias, empezando por los municipios con más búsquedas, y trabajar las señales externas (acción 5 de la auditoría) |
| Las del grupo A se rastrean pero pasan a «Rastreada: actualmente sin indexar» | Google las ha leído y todavía no las considera valiosas | Ahora sí toca revisar el contenido de las combinadas, ya con datos |
| Las del grupo A siguen sin rastrear pese a la solicitud | Algo impide o frena el rastreo | Revisar Estadísticas de rastreo (estado del host) y Vercel |
| Las de control también se rastrean | Ha cambiado algo general: más interés de Google, o el commit `1fdf69e` en los hubs | Buen resultado, pero no se puede atribuir a las solicitudes |
| Resultado mixto | Depende del servicio o del municipio | Anotar el detalle por servicio y municipio y analizarlo |

Con las 4 rastreadas: si en `/zonas/coslada/` Google eligió otra canónica, se replantea la acción 4 (H1 de zona). Si se indexan tras la solicitud, no había problema de fondo.

## Qué no se puede hacer desde Search Console

Ninguna herramienta de Search Console obliga a Google a indexar. La solicitud adelanta la visita, no garantiza el resultado. Lo que hace que Google vuelva solo es que el sitio tenga más señales: enlaces y menciones reales desde fuera, y búsquedas y clics.
