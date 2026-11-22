> ESTADO: INVESTIGACIÓN · NO NORMATIVO
> Origen: Claude Code (Opus 5.5) · Fecha: 2026-10-27
> No es regla del proyecto. Para aplicarse debe promoverse a una decisión en
> docs/DECISION-REGISTER.md.

# Indexación y Search Console

Carpeta de seguimiento de todo lo que se haga para que Google rastree e indexe el sitio. El objetivo es poder comparar antes y después de cada cambio y saber qué ha tenido efecto.

## Ficheros

| Fichero | Qué es |
|---|---|
| [`bitacora.md`](./bitacora.md) | Documento vivo. Foto de partida, cada cambio con su fecha y cada medición |
| [`2026-10-27-auditoria-indexacion.md`](./2026-10-27-auditoria-indexacion.md) | Auditoría de rastreo e indexación con los datos de Search Console hasta el 23-10 |
| [`2026-10-27-plan-search-console.md`](./2026-10-27-plan-search-console.md) | Plan de la fase 1 (cerrado el 22-11): diagnóstico y prueba controlada de 3 semanas |
| [`2026-11-22-plan-fase-2.md`](./2026-11-22-plan-fase-2.md) | Plan de la fase 2 (22-11 a 20-12): tandas de solicitudes, miniprueba M1, revisiones semanales, tablas de lectura y predicciones |
| [`2026-11-22-resumen-estado.md`](./2026-11-22-resumen-estado.md) | Resumen didáctico del estado de la estrategia al cerrar la prueba controlada: qué se ha hecho, por qué, qué se ha detectado y el criterio de oficio detrás de cada paso |

## Cómo se trabaja aquí

- **Todo cambio que pueda afectar a Google se anota en la bitácora antes o el mismo día:** commits en la web, solicitudes de indexación, sitemaps enviados. Con fecha, qué se hizo y qué se espera ver.
- **Un cambio cada vez, cuando se pueda.** Si dos cambios coinciden en el tiempo, no se sabrá cuál ha funcionado.
- **Las mediciones van con fecha y con la misma fuente cada vez** (mismo informe y mismos filtros de Search Console), para que sean comparables.
- **Documentos cerrados con fecha delante** (`AAAA-MM-DD-tema.md`); la bitácora es el único documento que se va ampliando.
- **Los CSV exportados de Search Console se guardan fuera del repositorio**, en una carpeta por fecha (por ejemplo `~/Desktop/datos-gsc-trazzo360/2026-10-28/`). El repositorio es público; aquí solo van las cifras que hagan falta para comparar.
- Cada fichero de esta carpeta abre con la cabecera de CLAUDE.md §11. Ninguna conclusión de aquí es regla del proyecto hasta que se registre como DEC.

## Cómo se trabaja por fases

La estrategia avanza por fases. Cada una tiene tres documentos, y cada documento tiene un solo papel:

| Documento | Para qué | Cuándo se escribe | ¿Se modifica? |
|---|---|---|---|
| **Plan de fase** (`AAAA-MM-DD-plan-fase-N.md`) | Qué se hace, en qué orden y qué significará cada resultado | Al empezar la fase | No. Solo se le añade arriba la línea de cierre con el resultado y el enlace al plan siguiente |
| **Bitácora** | Qué se hizo y qué datos salieron | En cada revisión | Crece; no se borra ni se reescribe lo anterior |
| **Resumen de estado** (`AAAA-MM-DD-resumen-estado.md`) | Qué se ha aprendido y dónde se está, con retrospectiva de la fase | Al cerrar la fase | No |

Todo plan de fase lleva, como mínimo:

1. **Qué se quiere conseguir y averiguar.**
2. **Reglas mientras dura la fase**, cada una con el motivo, para saber cuándo deja de hacer falta.
3. **El paso a paso** con fechas, pantallas de Search Console y qué anotar.
4. **Tablas de lectura escritas antes de ver los datos:** resultado → qué significa → siguiente paso.
5. **Predicciones con su confianza en porcentaje**, para comparar al cierre.
6. **Cómo y cuándo se cierra la fase.**
7. **Bloques «Lo que esto enseña»** con el criterio de oficio detrás de cada decisión.

Si algo cambia a mitad de fase, se anota en la bitácora con su fecha. El plan no se toca: es la constancia de lo que se pensaba antes de saber el resultado, y eso es lo que permite aprender en la retrospectiva.
