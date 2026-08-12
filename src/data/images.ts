export type ImgType = 'ilustrativa' | 'obra-propia';

interface ImageSlotBase {
  id: string;
  file: string;       // relativo a /public, sin barra inicial
  alt: string;
  width: number;
  height: number;
  usedIn: string[];   // URLs donde aparece, '*' = global
  promptHint: string; // descripción para encargar o generar la foto
}

// Discriminated union: obra-propia SIEMPRE lleva caption, ilustrativa NUNCA
export type ImageSlot =
  | (ImageSlotBase & { type: 'ilustrativa'; caption?: never })
  | (ImageSlotBase & { type: 'obra-propia'; caption: string });

export const IMAGE_SLOTS: ImageSlot[] = [
  // ── OG image ──────────────────────────────────────────────────────────────
  {
    id: 'og-trazzo360',
    file: 'og.jpg',
    type: 'ilustrativa',
    alt: 'Trazzo360 — Empresa de reformas integrales en el Corredor del Henares',
    width: 1200,
    height: 630,
    usedIn: ['*'],
    promptHint: 'Imagen corporativa 1200×630: fondo oscuro (#111827), logotipo Trazzo360 centrado en blanco/terracota, texto "Reformas integrales en el Corredor del Henares" en gris claro, sin fotografías de personas',
  },

  // ── Proyectos antes/después ────────────────────────────────────────────────
  {
    id: 'proyecto-reforma-integral-alcala-antes',
    file: 'img/proyectos/reforma-integral-alcala-antes.jpg',
    type: 'obra-propia',
    caption: 'Reforma integral · Alcalá de Henares · 85 m² · 10 semanas',
    alt: 'Piso antes de la reforma integral en Alcalá de Henares — distribución original con instalaciones de los años 80',
    width: 800,
    height: 600,
    usedIn: ['/'],
    promptHint: 'Estado inicial: paredes con azulejo antiguo, suelos deteriorados, cocina y baño obsoletos, cableado visto',
  },
  {
    id: 'proyecto-reforma-integral-alcala-despues',
    file: 'img/proyectos/reforma-integral-alcala-despues.jpg',
    type: 'obra-propia',
    caption: 'Reforma integral · Alcalá de Henares · 85 m² · 10 semanas',
    alt: 'Piso tras la reforma integral en Alcalá de Henares — distribución abierta, porcelánico y cocina nueva',
    width: 800,
    height: 600,
    usedIn: ['/'],
    promptHint: 'Resultado: distribución abierta salón-cocina, porcelánico claro 60×60, cocina blanca lacada, baño renovado con ducha de obra',
  },
  {
    id: 'proyecto-cocina-torrejon-antes',
    file: 'img/proyectos/cocina-torrejon-antes.jpg',
    type: 'obra-propia',
    caption: 'Cocina a medida · Torrejón de Ardoz · 14 m² · 2 semanas',
    alt: 'Cocina antes de la reforma en Torrejón de Ardoz — muebles de madera oscura y azulejos pequeños de los 90',
    width: 800,
    height: 600,
    usedIn: ['/'],
    promptHint: 'Estado inicial: muebles de madera oscura años 90, encimera de baldosa, electrodomésticos descolgados, sin campana',
  },
  {
    id: 'proyecto-cocina-torrejon-despues',
    file: 'img/proyectos/cocina-torrejon-despues.jpg',
    type: 'obra-propia',
    caption: 'Cocina a medida · Torrejón de Ardoz · 14 m² · 2 semanas',
    alt: 'Cocina tras la reforma en Torrejón de Ardoz — muebles a medida, encimera de silestone y electrodomésticos integrados',
    width: 800,
    height: 600,
    usedIn: ['/'],
    promptHint: 'Resultado: muebles blancos lacados mate hasta el techo, encimera de silestone gris, electrodomésticos integrados, alicatado 30×90 en blanco',
  },
  {
    id: 'proyecto-bano-coslada-antes',
    file: 'img/proyectos/bano-coslada-antes.jpg',
    type: 'obra-propia',
    caption: 'Baño con ducha de obra · Coslada · 6 m² · 8 días',
    alt: 'Baño antes de la reforma en Coslada — bañera de hierro y alicatado de los años 80',
    width: 800,
    height: 600,
    usedIn: ['/'],
    promptHint: 'Estado inicial: bañera de hierro fundido, azulejos pequeños 15×15 en beige, griferías oxidadas, suelo hidráulico deteriorado',
  },
  {
    id: 'proyecto-bano-coslada-despues',
    file: 'img/proyectos/bano-coslada-despues.jpg',
    type: 'obra-propia',
    caption: 'Baño con ducha de obra · Coslada · 6 m² · 8 días',
    alt: 'Baño tras la reforma en Coslada — plato de ducha a nivel de suelo, mampara fija y alicatado de gran formato',
    width: 800,
    height: 600,
    usedIn: ['/'],
    promptHint: 'Resultado: ducha de obra a nivel de suelo, mampara fija de vidrio templado, alicatado blanco 60×120, microcemento en pavimento',
  },
  {
    id: 'proyecto-local-san-fernando-antes',
    file: 'img/proyectos/local-san-fernando-antes.jpg',
    type: 'obra-propia',
    caption: 'Local comercial · San Fernando de Henares · 60 m² · 3 semanas',
    alt: 'Local vacío antes de la reforma en San Fernando de Henares — espacio en bruto sin instalaciones',
    width: 800,
    height: 600,
    usedIn: ['/'],
    promptHint: 'Estado inicial: local en bruto, paredes de bloque visto, suelo de hormigón, cuadro eléctrico provisional, sin divisiones',
  },
  {
    id: 'proyecto-local-san-fernando-despues',
    file: 'img/proyectos/local-san-fernando-despues.jpg',
    type: 'obra-propia',
    caption: 'Local comercial · San Fernando de Henares · 60 m² · 3 semanas',
    alt: 'Local comercial tras la reforma en San Fernando de Henares — espacio habilitado con instalaciones completas',
    width: 800,
    height: 600,
    usedIn: ['/'],
    promptHint: 'Resultado: pavimento vinílico gris claro, techo técnico con carril LED, paredes pintadas en blanco, mampara de entrada y mostrador',
  },
];
