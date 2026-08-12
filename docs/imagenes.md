# Guía de imágenes — Trazzo360

Todas las imágenes del sitio están registradas en `src/data/images.ts` como `IMAGE_SLOTS`.  
Antes de añadir una imagen al código hay que registrarla allí.

## Regla de tipos

| Tipo | Caption permitido | Quién atribuye la autoría |
|---|---|---|
| `ilustrativa` | No (`caption?: never`) | No se atribuye a Trazzo360 |
| `obra-propia` | Sí, obligatorio | La obra es de Trazzo360 |

> **Nunca** pongas metadata (municipio, m², plazo) en una imagen `ilustrativa`.  
> **Siempre** pon `caption` en una imagen `obra-propia`.

---

## Dónde colocar los archivos

```
/public/
  og.jpg                                   # OG image global, 1200×630
  img/
    proyectos/
      reforma-integral-alcala-antes.jpg    # 800×600
      reforma-integral-alcala-despues.jpg  # 800×600
      cocina-torrejon-antes.jpg            # 800×600
      cocina-torrejon-despues.jpg          # 800×600
      bano-coslada-antes.jpg               # 800×600
      bano-coslada-despues.jpg             # 800×600
      local-san-fernando-antes.jpg         # 800×600
      local-san-fernando-despues.jpg       # 800×600
```

Mientras un archivo no existe, el componente `<ProjectImage>` muestra un bloque oscuro con "Foto pendiente".  
En cuanto añades el archivo al directorio y lanzas `npm run build`, se sustituye automáticamente.

---

## Tabla de slots

| ID | Archivo | Tipo | Estado | Dim. | Alt text |
|---|---|---|---|---|---|
| `og-trazzo360` | `og.jpg` | ilustrativa | **pendiente** | 1200×630 | Trazzo360 — Empresa de reformas integrales en el Corredor del Henares |
| `proyecto-reforma-integral-alcala-antes` | `img/proyectos/reforma-integral-alcala-antes.jpg` | obra-propia | **pendiente** | 800×600 | Piso antes de la reforma integral en Alcalá de Henares — distribución original con instalaciones de los años 80 |
| `proyecto-reforma-integral-alcala-despues` | `img/proyectos/reforma-integral-alcala-despues.jpg` | obra-propia | **pendiente** | 800×600 | Piso tras la reforma integral en Alcalá de Henares — distribución abierta, porcelánico y cocina nueva |
| `proyecto-cocina-torrejon-antes` | `img/proyectos/cocina-torrejon-antes.jpg` | obra-propia | **pendiente** | 800×600 | Cocina antes de la reforma en Torrejón de Ardoz — muebles de madera oscura y azulejos pequeños de los 90 |
| `proyecto-cocina-torrejon-despues` | `img/proyectos/cocina-torrejon-despues.jpg` | obra-propia | **pendiente** | 800×600 | Cocina tras la reforma en Torrejón de Ardoz — muebles a medida, encimera de silestone y electrodomésticos integrados |
| `proyecto-bano-coslada-antes` | `img/proyectos/bano-coslada-antes.jpg` | obra-propia | **pendiente** | 800×600 | Baño antes de la reforma en Coslada — bañera de hierro y alicatado de los años 80 |
| `proyecto-bano-coslada-despues` | `img/proyectos/bano-coslada-despues.jpg` | obra-propia | **pendiente** | 800×600 | Baño tras la reforma en Coslada — plato de ducha a nivel de suelo, mampara fija y alicatado de gran formato |
| `proyecto-local-san-fernando-antes` | `img/proyectos/local-san-fernando-antes.jpg` | obra-propia | **pendiente** | 800×600 | Local vacío antes de la reforma en San Fernando de Henares — espacio en bruto sin instalaciones |
| `proyecto-local-san-fernando-despues` | `img/proyectos/local-san-fernando-despues.jpg` | obra-propia | **pendiente** | 800×600 | Local comercial tras la reforma en San Fernando de Henares — espacio habilitado con instalaciones completas |

---

## Prompt hints para encargar las fotos

| ID | Descripción para el fotógrafo o IA |
|---|---|
| `og-trazzo360` | Imagen corporativa 1200×630: fondo oscuro (#111827), logotipo Trazzo360 centrado en blanco/terracota, texto "Reformas integrales en el Corredor del Henares" en gris claro, sin fotografías de personas |
| `proyecto-reforma-integral-alcala-antes` | Estado inicial: paredes con azulejo antiguo, suelos deteriorados, cocina y baño obsoletos, cableado visto |
| `proyecto-reforma-integral-alcala-despues` | Resultado: distribución abierta salón-cocina, porcelánico claro 60×60, cocina blanca lacada, baño renovado con ducha de obra |
| `proyecto-cocina-torrejon-antes` | Estado inicial: muebles de madera oscura años 90, encimera de baldosa, electrodomésticos descolgados, sin campana |
| `proyecto-cocina-torrejon-despues` | Resultado: muebles blancos lacados mate hasta el techo, encimera de silestone gris, electrodomésticos integrados, alicatado 30×90 en blanco |
| `proyecto-bano-coslada-antes` | Estado inicial: bañera de hierro fundido, azulejos pequeños 15×15 en beige, griferías oxidadas, suelo hidráulico deteriorado |
| `proyecto-bano-coslada-despues` | Resultado: ducha de obra a nivel de suelo, mampara fija de vidrio templado, alicatado blanco 60×120, microcemento en pavimento |
| `proyecto-local-san-fernando-antes` | Estado inicial: local en bruto, paredes de bloque visto, suelo de hormigón, cuadro eléctrico provisional |
| `proyecto-local-san-fernando-despues` | Resultado: pavimento vinílico gris claro, techo técnico con carril LED, paredes pintadas en blanco, mampara de entrada |

---

## Caption format para obra-propia

```
{Tipo de obra} · {Municipio} · {Superficie m²} · {Duración}
```

Ejemplos:
- `Reforma integral · Alcalá de Henares · 85 m² · 10 semanas`
- `Baño con ducha de obra · Coslada · 6 m² · 8 días`

---

## Cómo marcar un slot como disponible

Cuando el archivo físico está en `/public/img/proyectos/`, actualiza el campo Estado a **disponible** en esta tabla.  
El build lo detectará automáticamente y mostrará la imagen real en lugar del fallback.
