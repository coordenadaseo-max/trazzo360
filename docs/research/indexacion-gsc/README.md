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
| [`2026-10-27-plan-search-console.md`](./2026-10-27-plan-search-console.md) | Pasos que hace el titular en Search Console: diagnóstico y prueba controlada de 3 semanas |

## Cómo se trabaja aquí

- **Todo cambio que pueda afectar a Google se anota en la bitácora antes o el mismo día:** commits en la web, solicitudes de indexación, sitemaps enviados. Con fecha, qué se hizo y qué se espera ver.
- **Un cambio cada vez, cuando se pueda.** Si dos cambios coinciden en el tiempo, no se sabrá cuál ha funcionado.
- **Las mediciones van con fecha y con la misma fuente cada vez** (mismo informe y mismos filtros de Search Console), para que sean comparables.
- **Documentos cerrados con fecha delante** (`AAAA-MM-DD-tema.md`); la bitácora es el único documento que se va ampliando.
- **Los CSV exportados de Search Console se guardan fuera del repositorio**, en una carpeta por fecha (por ejemplo `~/Desktop/datos-gsc-trazzo360/2026-10-28/`). El repositorio es público; aquí solo van las cifras que hagan falta para comparar.
- Cada fichero de esta carpeta abre con la cabecera de CLAUDE.md §11. Ninguna conclusión de aquí es regla del proyecto hasta que se registre como DEC.
