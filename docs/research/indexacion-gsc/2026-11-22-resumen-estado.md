> ESTADO: INVESTIGACIÓN · NO NORMATIVO
> Origen: Claude Code (Opus 5.5) · Fecha: 2026-11-22
> No es regla del proyecto. Para aplicarse debe promoverse a una decisión en
> docs/DECISION-REGISTER.md.

# Resumen de estado de la indexación (22-11-2026)

Foto fija de la estrategia a 22-11-2026, escrita para aprender. No se actualiza: el documento vivo es la [bitácora](./bitacora.md), que guarda todas las cifras. Cuando la estrategia cambie de fase se escribe otro resumen con su fecha.

Cada apartado tiene dos capas. Primero **qué hemos hecho y por qué**. Después, en los bloques **«Lo que esto enseña»**, el criterio de oficio que hay detrás: lo que en una agencia te explicaría alguien con experiencia la primera vez que te enfrentas a ello.

---

## 1. De dónde partimos

La web tiene 70 páginas en el sitemap. La mayoría son las **48 combinadas** (servicio × municipio, como `/reforma-banos/coslada/`). Son las que deben captar búsquedas locales concretas, las que tienen más intención de contratar.

En la foto del 23-10, mes y medio después del lanzamiento (13-09):

- Solo **13 de las 48 combinadas** estaban indexadas.
- **35 estaban en «Descubierta: actualmente sin indexar».** Google sabía que existían, pero no las había descargado nunca.
- Las 13 indexadas no se habían vuelto a visitar desde el 14-09.

> **Lo que esto enseña: rastrear, indexar y posicionar son tres pasos distintos.**
>
> 1. **Rastrear:** Googlebot descarga la página.
> 2. **Indexar:** Google decide guardarla en su índice.
> 3. **Posicionar:** Google decide en qué lugar la enseña para cada búsqueda.
>
> Cada paso tiene sus propios problemas y sus propios remedios. El error más común es tratar un problema de rastreo como si fuera de posicionamiento («voy a mejorar el contenido») o al revés. Antes de tocar nada, la primera pregunta siempre es: **¿en qué paso está atascada la página?**

---

## 2. La pregunta clave: ¿problema de contenido o de rastreo?

| Si el problema es… | Search Console lo muestra como… | El remedio sería… |
|---|---|---|
| **Contenido** («la he leído y no me convence») | «Rastreada: actualmente sin indexar» | Mejorar o reescribir las páginas |
| **Rastreo** («todavía no he ido») | «Descubierta: actualmente sin indexar» | Conseguir que Google las visite |

Estaban en «Descubierta», así que todo apuntaba al rastreo. Pero reescribir 35 páginas es mucho trabajo, y si la causa era otra, ese trabajo no habría servido de nada. Decidimos **demostrarlo antes de mover nada**.

> **Lo que esto enseña: el diagnóstico va antes que la solución.**
>
> En una agencia, la tentación es siempre «hacer algo» para que el cliente vea movimiento. Un buen consultor primero se pregunta qué dato distinguiría una causa de otra, y va a buscar ese dato. Aquí el dato era la diferencia entre «Descubierta» y «Rastreada». Leer bien los estados de Search Console ahorra semanas de trabajo en la dirección equivocada.
>
> **Un matiz sobre el «presupuesto de rastreo»:** se lee mucho sobre el *crawl budget*, pero Google lo plantea como un problema de sitios grandes, con decenas de miles de URL. En una web pequeña y nueva como esta, lo que limita no es la capacidad, es el **interés**: Google visita poco porque el sitio todavía no tiene señales de importancia (enlaces externos, menciones, búsquedas de marca, clics). Si te quedas con eso, entiendes por qué la solución de fondo no es técnica (apartado 9).

---

## 3. La prueba controlada (01-11 → 22-11)

**Cómo se hizo.** Se eligieron combinadas de los 4 municipios con más búsquedas y se separaron en dos grupos parecidos:

- **Grupo A (8 URL):** se solicitó la indexación en Search Console.
- **Control (9 URL):** no se tocaron.

Aparte, se solicitaron 4 páginas que estaban en «Rastreada sin indexar» (dos zonas, un hub de servicio y contacto). No entraban en la comparación porque son de otro tipo.

Durante las 3 semanas **no se cambió nada en la web**, para que ningún otro factor se mezclara con el resultado.

**Resultado:**

| | Día 3 | Día 21 |
|---|---|---|
| Grupo A | 8 de 8 indexadas, rastreadas a los pocos minutos de la solicitud | 8 de 8 siguen indexadas |
| Control | 0 de 9 rastreadas | 0 de 9 rastreadas |

**Conclusión:** no hay ningún bloqueo técnico. Google no prioriza visitar el sitio por su cuenta: en semanas enteras hizo entre 2 y 6 solicitudes de rastreo. Y cuando lee las páginas, las indexa y no las descarta. **El contenido no es el problema de la indexación**, por ahora.

**Lo que no dice:** indexar da **visibilidad**, no **posición**. El grupo A pasó de 0 a unas 1.500 impresiones en 20 días, pero en posiciones de 46 a 72 (páginas 5 a 8 de Google). El sitio lleva 5 clics en ese periodo.

> **Lo que esto enseña: el grupo de control.**
>
> Si solo hubiéramos solicitado la indexación y las páginas se hubieran indexado, no sabríamos si fue por la solicitud o porque Google iba a llegar esa semana de todas formas. El control es la referencia: muestra **qué pasa si no haces nada**. Sin él, cualquier mejora se atribuye a lo último que hiciste, y así nacen muchas «verdades» de SEO que nadie ha comprobado.
>
> Tres condiciones para que una prueba diga algo:
>
> 1. **Grupos comparables** (mismos municipios y tipos de página en los dos).
> 2. **Una sola diferencia** entre ellos (aquí, la solicitud).
> 3. **Nada más cambia mientras dura** (por eso no se tocó la web).
>
> Y una honestidad necesaria: con 8 contra 9 URL elegidas a mano, la prueba **orienta con fuerza**, pero no es un experimento científico. Saber decir hasta dónde llega un dato es tan importante como el dato.

> **Lo que esto enseña: impresiones, posición y clics.**
>
> - **Impresión:** tu página apareció en una página de resultados que alguien cargó. No significa que la viera.
> - **Posición media:** es una media de todas las impresiones. Si una búsqueda te pone en la 8 y otra en la 90, la media es 49, y ese 49 no describe ninguna de las dos. Por eso conviene mirar las consultas una a una.
> - **Clic:** alguien entró. Es lo único que se acerca al negocio.
>
> Muchas impresiones en posición 70 son una buena señal (Google te considera relevante para esas búsquedas), pero todavía no son tráfico. Más allá de la página 2, el clic es casi anecdótico.

---

## 4. Fase actual: meter en el índice todo lo pendiente

La conclusión de la prueba dice que solicitar funciona, así que ahora se solicitan las 27 combinadas que quedan.

**Cómo:**

- **Tandas de unas 10 al día.** Google limita las solicitudes diarias; no publica la cifra, pero en la práctica ronda la decena.
- **Orden por búsquedas del municipio** (`keyword-map.md`): Guadalajara, Alcalá, Coslada, Torrejón, San Fernando, y después Azuqueca, Meco y Camarma. Lo que tiene más demanda entra antes.
- **Inspeccionar antes de solicitar.** Si una ya está indexada, no se gasta cupo en ella.
- **Seguimiento a los 3, 7, 14 y 21 días**, el mismo calendario que con el grupo A, para que los resultados sean comparables.

| Tanda | Fecha | Qué entra | Estado |
|---|---|---|---|
| 1 | 22-11 | Las 9 del control + cocinas de San Fernando | Enviada (20:41–20:51) |
| 2 | 23-11 | Azuqueca y Meco (P2–P11) | Pendiente |
| 3 | 24-11 | Comunidades de Meco y Camarma (P12–P18) + **M1** (apartado 6) | Pendiente |

> **Lo que esto enseña: priorizar por valor cuando el recurso es escaso.**
>
> El cupo diario es un recurso limitado, como el tiempo de un equipo o el presupuesto de un cliente. Se gasta primero en lo que más valor puede devolver (los municipios con más búsquedas) y se protege de desperdicios (inspeccionar antes para no solicitar algo ya indexado). Es el mismo razonamiento que usa una agencia para decidir qué páginas trabajar primero: impacto esperado frente a esfuerzo.

---

## 5. Lo que vamos detectando de paso: la zona y la combinada compiten

Esto ya no va de indexar, sino de **qué página enseña Google para cada búsqueda**.

**La regla del proyecto** (`keyword-map.md`): una keyword, una URL. Cada búsqueda tiene asignada una página:

- «empresa de reformas Coslada» → el hub de zona `/zonas/coslada/`
- «reformas integrales Coslada» → la combinada `/reformas-integrales/coslada/`

Si dos páginas del mismo sitio se disputan la misma búsqueda, se dividen la fuerza y Google duda entre ellas. A eso se le llama **canibalización**.

**San Fernando.** Empezó como sospecha el 04-11: para «reformas integrales en San Fernando de Henares», Search Console mostraba a ratos la zona y a ratos la combinada. Se pensó que el H1 de la zona («Reformas en San Fernando de Henares», sin «empresa») la acercaba a esa búsqueda. Los datos de hoy dicen otra cosa:

- Desde el 01-11 **la combinada no aparece ni una vez en resultados**, y la zona se queda con las búsquedas de reforma integral.
- La inspección dice que la combinada **sigue indexada y con su propia canónica**: Google no la ha fundido con la zona. Tiene las dos y **elige enseñar la zona**.
- El cambio de H1 no parece el remedio: la zona sale mejor justo en búsquedas que empiezan por «empresa de reformas…», que es lo que el cambio añadiría.

**Coslada.** Esta semana, en «reformas integrales coslada», la zona ha sumado más impresiones y en mejor posición (hacia la 55) que la propia combinada (hacia la 76). La misma tendencia que en San Fernando.

**Por qué no se toca nada todavía:** es una semana de datos, con posiciones entre 50 y 90. A esa profundidad los resultados bailan mucho de un día a otro. Cambiar el H1 o el contenido ahora sería reaccionar a ruido.

> **Lo que esto enseña: la canónica.**
>
> Cada página declara cuál es su versión «oficial» con la etiqueta `canonical`. Google la tiene en cuenta, pero decide por su cuenta, y la Inspección de URL enseña las dos: «declarada por el usuario» y «seleccionada por Google». Si no coinciden, Google ha decidido que tu página es un duplicado de otra. Esa es la canibalización más grave, porque una de las dos deja de existir para Google. Aquí coinciden: las dos páginas existen y Google solo **elige cuál enseñar** para cada búsqueda. Es un problema menor y más reversible.

> **Lo que esto enseña: estar dispuesto a cambiar de opinión.**
>
> La hipótesis del H1 era razonable el 04-11 con los datos de entonces. El 15-11 los datos ya no encajaban y el 22-11 apuntaban a otra cosa. Esta misma mañana se propuso cerrarla y por la tarde se retiró la propuesta, porque apareció un dato nuevo (la combinada sin impresiones desde el 01-11). Esto no es indecisión: es el método funcionando. Una hipótesis es una apuesta que se revisa con cada dato, no una opinión que defender.

> **Lo que esto enseña: cómo leer las cifras de Search Console sin engañarte.**
>
> - **Anota siempre el rango de fechas.** «Últimos 3 meses» y «del 01-11 al 20-11» dan cifras distintas para la misma página. En R1 se comparó por error un rango con otro y salió que las impresiones bajaban (de 93 a 90) con más días, cosa imposible.
> - **Los rangos acumulados permiten restar.** Como la web se publicó el 13-09, «últimos 3 meses» recoge toda su historia. Restando la cifra de una semana a la de la siguiente sale exactamente lo que se sumó en medio, y hasta se puede estimar la posición media de esas impresiones nuevas. Así se vio que la zona de Coslada adelantaba a la combinada esta semana, cosa que la media acumulada escondía.
> - **No todas las consultas se ven.** La zona de Coslada tiene 709 impresiones, pero sus consultas visibles suman 463. Google oculta las búsquedas poco frecuentes por privacidad.
> - **Cada informe tiene su retraso.** Rendimiento va unos 2–3 días por detrás; el informe de páginas puede pasar semanas sin actualizarse (del 23-10 al 09-11 no se movió). Para saber el estado actual de una URL concreta, la fuente es la Inspección de URL.
> - **La herramienta a veces falla.** A6 salió como «Google no reconoce esta URL» y, al repetir la inspección, estaba indexada como siempre. Un resultado raro se repite antes de creerlo.

---

## 6. La miniprueba M1: por qué

Al revisar los datos apareció una coincidencia:

- Las **dos combinadas que pierden** frente a su zona (integrales de Coslada y de San Fernando) son del lote que Google **no visita desde el 14-09**.
- Las **dos zonas que las adelantan** se visitaron el 01-11.

Puede no tener nada que ver. Google no debería bajar una página solo porque haga tiempo que no la visita. Pero comprobarlo cuesta **una sola solicitud**, así que se repite el método de la prueba en pequeño:

- **San Fernando (M1):** se solicita el 24-11, al final de la tanda 3, para que Google la vuelva a visitar.
- **Coslada:** no se toca. Es el control.

**Cómo se lee el 08-12 y el 15-12:**

- Si San Fernando recupera sus búsquedas de reforma integral y Coslada no, **la visita antigua influía**, y tendría sentido pedir que se revisiten las 13 combinadas del 14-09.
- Si no cambia nada, se descarta, y lo siguiente sería mirar **el contenido y el H1**, esta vez con datos.

Es una URL contra otra: sirve para **orientar**, no para **concluir**.

> **Lo que esto enseña: pruebas baratas antes que cambios caros.**
>
> Ante dos explicaciones posibles, conviene descartar primero la que cuesta menos comprobar. Una solicitud de indexación no cuesta casi nada y no se puede deshacer mal. Reescribir el H1 de 8 zonas sí cuesta: hay que diseñarlo, registrarlo como decisión y, si no funciona, revertirlo. Ordenar las hipótesis por coste de comprobación es una de las costumbres que más tiempo ahorra.

---

## 7. Las reglas del método, y por qué

| Regla | Por qué |
|---|---|
| **Un cambio cada vez** | Si cambias dos cosas a la vez, no sabes cuál funcionó |
| **Siempre una referencia o control** | Sin ella, no distingues tu efecto de lo que iba a pasar igual |
| **Mismo informe, mismos filtros, rango anotado** | Si no, comparas cifras que no son comparables (caso R1) |
| **Repetir una inspección rara antes de creerla** | La herramienta falla a veces (caso A6) |
| **No actuar con posiciones de 50 a 90 y una semana de datos** | A esa profundidad, una semana es ruido |
| **Todo queda anotado con fecha en la bitácora** | Para saber dentro de meses qué se hizo, cuándo y qué efecto tuvo |
| **Separar lo que se sabe de lo que se sospecha** | Cada lectura de la bitácora tiene su «qué no se puede afirmar todavía» |

> **Lo que esto enseña: la bitácora es tu memoria profesional.**
>
> En una agencia, quien hereda una cuenta lo primero que pide es el histórico de cambios: qué se tocó y cuándo. Sin él, una caída de tráfico es un misterio. Con él, se cruza la fecha de la caída con la lista de cambios y la causa suele aparecer en minutos. La bitácora de este proyecto es ese histórico. El hábito de anotar **antes** de hacer el cambio, con lo que esperas ver, es lo que distingue una prueba de un «a ver qué pasa».

---

## 8. Calendario

| Fecha | Qué |
|---|---|
| 23-11 | Tanda 2 |
| 24-11 | Tanda 3 + M1 |
| 25-11 | Día 3 de la tanda 1 (inspeccionar las 10) |
| 29-11 | Día 7 de la tanda 1 + comparar las consultas de la zona de Coslada y de su combinada |
| 06-12 / 13-12 | Días 14 y 21 de la tanda 1 |
| 08-12 / 15-12 | Lectura de la miniprueba M1 |

---

## 9. Lo que viene después

Indexar es el primer escalón. El siguiente es **posicionar**, y ahí el trabajo cambia de naturaleza.

Google visita poco el sitio porque tiene pocas señales de que importe: no hay enlaces de otras webs, ni menciones, ni volumen de clics. Las solicitudes manuales empujan la indexación página a página, pero no hacen que Google vuelva solo ni que suba las posiciones. Con las 48 combinadas indexadas, el foco pasa a la acción 5 de la [auditoría](./2026-10-27-auditoria-indexacion.md): señales externas reales.

> **Lo que esto enseña: la técnica abre la puerta; la autoridad te hace pasar.**
>
> Una web técnicamente impecable y con buen contenido, pero sin señales externas, es como una tienda bonita en una calle por la que no pasa nadie. El SEO técnico (rastreo, indexación, canónicas, sitemap) es condición necesaria, no suficiente. En SEO local, las señales que más pesan suelen ser la ficha de Google Business Profile, las menciones del negocio con nombre, dirección y teléfono coherentes en directorios, y enlaces de webs locales. Son trabajos lentos y poco vistosos, y por eso marcan la diferencia.

---

## Glosario rápido

| Término | Qué es |
|---|---|
| **Rastreo (crawl)** | Googlebot descarga la página |
| **Indexación** | Google guarda la página y puede enseñarla en resultados |
| **«Descubierta: actualmente sin indexar»** | Google conoce la URL pero no la ha descargado |
| **«Rastreada: actualmente sin indexar»** | Google la ha leído y ha decidido no guardarla, de momento |
| **Canónica** | La versión «oficial» de una página: la que declaras tú y la que elige Google |
| **Canibalización** | Dos páginas del mismo sitio compitiendo por la misma búsqueda |
| **Impresión** | Tu página apareció en una página de resultados |
| **Posición media** | Media de las posiciones de todas las impresiones; engaña si mezcla búsquedas muy distintas |
| **Grupo de control** | Lo que no tocas, para comparar con lo que sí |
| **Ruido** | Variaciones que ocurren solas, sin causa en lo que has hecho |
| **Hub** | Página que agrupa y enlaza a otras de su tema (aquí, los hubs de servicio y de zona) |
| **Combinada** | Página servicio × municipio, la más específica del sitio |
