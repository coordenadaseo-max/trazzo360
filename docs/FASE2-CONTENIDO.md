# Fase 2 de contenido — propuesta

> **PROPUESTA · PENDIENTE DE APROBACIÓN.** No es norma del proyecto y no declara
> autoridad sobre ninguna materia. Para aplicarse, cada bloque debe registrarse como
> decisión en `docs/DECISION-REGISTER.md`. Fecha: 2026-09-10.

## Corrijo la premisa con la que planteé esta fase

Propuse la Fase 2 como «llevar las combinadas al rango de 1.500–1.700 palabras de §3».
Esa justificación es incorrecta y hay que descartarla antes de escribir una línea:

- **§3 lo dice literalmente:** «Quedar fuera de rango no bloquea nada» y «Ningún
  contenido se recorta ni se alarga para entrar en rango. La regla *cero relleno para
  alcanzar recuento* de §6.9 prevalece sobre esta tabla.»
- **`src/data/content/levels.ts` ya clasifica las 48 combinadas** por especificidad:
  4 son S1, 43 son S2 y 1 es S3. El propio fichero fija la regla: «Para S2 y S3 **no se
  inventa tesis**: el nivel se refleja en la profundidad de renderizado.» Las páginas
  cortas lo son por decisión, no por descuido.

Escribir 350 palabras por página para alcanzar un número sería exactamente el relleno
que §6.9 prohíbe, y contradiría el sistema de niveles que ya existe.

**La justificación válida es otra, y es más fuerte:** §6.8 declara obligatorias tres
capas de copy «en cada hub y en cada combinada», y dos de ellas casi no existen.

| Capa exigida por §6.8 | Presente en |
|---|---|
| §6.3 vida del cliente durante la obra | 21 / 48 |
| §6.4 resultado cotidiano | **0 / 48** |
| §6.5 puente precio cerrado + imprevistos | pendiente de medir con criterio estricto |

El contenido que se propone se escribe porque falta una capa obligatoria, no para
alcanzar un recuento. Si de paso las páginas entran en rango, bien; no es el objetivo
y no se ajustará nada para conseguirlo.

---

## Bloque A — «Cómo queda después» (§6.4)

**Por qué:** es la capa que está en 0 de 48. Las combinadas explican impermeabilización,
alicatado y plazos, y no dicen en ningún momento cómo se vive el resultado. §6.4 pide
«al menos un párrafo que describa el resultado cotidiano, no el resultado técnico».

**Dónde vive:** en `SERVICE_ZONE_CONTENT`, que está indexado por servicio. Son 6 textos,
uno por servicio, compartidos por las 8 zonas de ese servicio. §3 lo permite de forma
explícita: «Los bloques de alcance de servicio objetivo sí pueden compartirse entre
páginas del mismo servicio.»

**Dónde se coloca:** cerrando la sección de precio, antes de las FAQ. Es el punto donde
el visitante acaba de ver cifras y necesita recordar qué compra con ellas.

**Borrador para `reforma-banos` (~115 palabras):**

> ### Cómo es el baño el mes siguiente
>
> El jueves después de la entrega ya te duchas en él. Eso es lo que cambia.
>
> Un plato a ras de suelo se limpia de una pasada y se cruza sin levantar el pie, que es
> lo que importa cuando en casa hay alguien mayor. La mampara deja de golpear contra el
> lavabo. El mueble suspendido deja el suelo libre, y limpiar debajo deja de ser una
> postura.
>
> Con la ventilación funcionando, el espejo deja de empañarse cada mañana y el techo
> aguanta años sin manchas de humedad.
>
> A las dos semanas ya no te acuerdas de cómo era el anterior. Ese es el resultado, no
> los metros de alicatado.

Faltarían los cinco equivalentes: cocinas, pisos, integrales, locales y comunidades.

---

## Bloque B — «Cómo se vive la obra en {zona}» (§6.3)

**Por qué:** presente en 21 de 48. §6.3 es explícita en que no basta con decir que se
minimizan las molestias: «Hay que decir exactamente qué se hace y cuándo.»

**Dónde vive:** un campo nuevo en `zones.ts`, 8 textos, uno por municipio.

**La contrapartida, dicha claramente:** un texto por zona aparece en las 6 combinadas de
esa zona. Es repetición dentro de un mismo municipio. §3 prohíbe reutilizar un párrafo
**entre dos municipios**, que es lo que este diseño evita; no prohíbe compartirlo entre
los servicios de uno solo. La alternativa sería escribir 48 textos únicos, y para eso
haría falta un dato distinto por servicio y municipio que hoy no existe: inventarlo es
justo lo que `levels.ts` prohíbe.

**No se renderiza en el hub de zona.** Si apareciera también ahí serían 7 páginas con el
mismo texto.

**Borrador para Coslada (~150 palabras):**

> ### Cómo se vive la obra en Coslada
>
> En los bloques de Valleaguado y Ciudad 70 el ascensor es estrecho y la escalera acaba
> siendo la vía real para bajar escombro. Lo primero que se hace es proteger el rellano y
> el ascensor con lámina y cartón, antes de subir una sola herramienta.
>
> El contenedor se pide con la autorización municipal de ocupación de vía pública y se
> coloca lo más cerca posible del portal. Si la calle no lo permite, el escombro sale en
> sacas el mismo día.
>
> El trabajo ruidoso se concentra en las horas centrales, dentro del horario que fija la
> ordenanza. El primer día te decimos qué jornadas son las peores y a partir de cuál se
> recupera la normalidad.
>
> Al terminar cada jornada el rellano queda barrido. Tus vecinos no tienen que vivir tu obra.

**Dato que hay que confirmar antes de escribir los 8:** el horario exacto de la ordenanza
de cada municipio. Si no se verifica, el texto habla de «el horario que fija la ordenanza»
sin dar cifras, como en el borrador. No se inventa ninguna hora (§1).

---

## Bloque C — puente de §6.5, solo donde haga falta

§6.5 no pide un bloque nuevo: prohíbe que «precio cerrado» e «imprevistos» aparezcan
juntos sin el párrafo que los une. Sólo 10 de 48 combinadas dicen «precio cerrado». La
acción correcta es medir con criterio estricto en qué páginas coinciden ambos conceptos
y añadir el puente sólo ahí, no en las 48.

---

## Pendientes de datos, no de redacción

| Qué falta | Dónde | Efecto |
|---|---|---|
| `topWorks` de Azuqueca y Camarma | `zones.ts` | sus hubs de zona no muestran el bloque de DEC-A20 |
| Horarios de ordenanza por municipio | dato externo | condiciona el nivel de concreción del Bloque B |

## Hallazgo suelto

`SERVICE_ZONE_LEVEL` se importa en `src/pages/[servicio]/[barrio].astro` y **no se usa en
ninguna parte del fichero**. El sistema de niveles S1/S2/S3 está definido y clasificado
para las 48 combinadas, pero la plantilla no lo consulta: hoy todas se renderizan igual.
O se conecta, o se retira el import. Decisión pendiente.
