// src/data/calculator.ts
// Única fuente de verdad para la calculadora de presupuesto.
// Ajusta precios y configuración aquí sin tocar el componente.

export type Quality = 'esencial' | 'media' | 'alta';

export interface PriceRange { min: number; max: number; }

// ── Modificadores ─────────────────────────────────────────────────────────────

export interface ModifierOption {
  key: string;
  label: string;
  factor: number; // multiplicador sobre min y max del rango base
}

export interface Modifier {
  key: string;
  label: string;
  options: ModifierOption[];
  defaultKey: string;
}

export const MODIFIERS: Record<string, Modifier> = {
  instalaciones: {
    key: 'instalaciones',
    label: 'Estado de las instalaciones',
    options: [
      { key: 'buenas',   label: 'Buenas (menos de 15 años)',             factor: 1.00 },
      { key: 'dudosas',  label: 'Dudosas (15–30 años)',                  factor: 1.08 },
      { key: 'malas',    label: 'A renovar (más de 30 años o malas)',    factor: 1.20 },
    ],
    defaultKey: 'dudosas',
  },
  distribucion: {
    key: 'distribucion',
    label: 'Cambio de distribución',
    options: [
      { key: 'no',       label: 'Sin cambios de tabiques',               factor: 1.00 },
      { key: 'parcial',  label: 'Parcial (1–2 tabiques)',                factor: 1.10 },
      { key: 'completo', label: 'Redistribución total',                  factor: 1.25 },
    ],
    defaultKey: 'no',
  },
  decada: {
    key: 'decada',
    label: 'Década del edificio',
    options: [
      { key: 'post2000',  label: 'Posterior a 2000',   factor: 1.00 },
      { key: '1980-2000', label: 'Entre 1980 y 2000',  factor: 1.05 },
      { key: 'pre1980',   label: 'Anterior a 1980',    factor: 1.14 },
    ],
    defaultKey: '1980-2000',
  },
  planta: {
    key: 'planta',
    label: 'Planta y acceso a obra',
    options: [
      { key: 'pb',           label: 'Planta baja o montacargas',         factor: 1.00 },
      { key: 'ascensor',     label: 'Con ascensor (uso limitado)',        factor: 1.04 },
      { key: 'sin-ascensor', label: 'Sin ascensor (manual)',              factor: 1.09 },
    ],
    defaultKey: 'ascensor',
  },
  licencia: {
    key: 'licencia',
    label: 'Gestión de licencia',
    options: [
      { key: 'no',         label: 'No necesaria (obra menor simple)',    factor: 1.00 },
      { key: 'determinar', label: 'A determinar tras visita',            factor: 1.00 },
      { key: 'incluida',   label: 'Gestionamos la licencia (incluida)',  factor: 1.05 },
    ],
    defaultKey: 'determinar',
  },
};

// ── Tipos del modelo ──────────────────────────────────────────────────────────

export interface Tranche {
  key: string;
  label: string;       // "4–6 m²"
  sublabel?: string;   // descripción corta para el usuario
  prices: Record<Quality, PriceRange>;
}

export interface ComunidadElement {
  key: string;
  label: string;
  icon: string;
  prices: Record<Quality, PriceRange>;
  note?: string;
}

export interface QualityDetail {
  label: string;
  tagline: string;       // una línea para la tabla comparativa
  includes: string[];    // 6–8 ítems
  timelineWeeks: [number, number];
  phases: { name: string; pct: number }[]; // fases con % del tiempo total
}

export interface CalcService {
  slug: string;
  label: string;
  hint: string;
  hubSlug: string;    // para el enlace al hub de servicio

  inputType: 'superficie' | 'tramo' | 'elemento';

  // inputType === 'superficie'
  surfaceMin?: number;
  surfaceMax?: number;
  surfaceStep?: number;
  surfaceDefault?: number;
  surfaceLabel?: string;
  pricesPerM2?: Record<Quality, PriceRange>;

  // inputType === 'tramo' (baño, cocina)
  tranches?: Tranche[];
  defaultTranche?: string;

  // inputType === 'elemento' (comunidades)
  elements?: ComunidadElement[];
  elementNote?: string;

  // local comercial: partida extra de proyecto + licencia según uso
  licenseByUso?: {
    options: { key: string; label: string; prices: Record<Quality, PriceRange | null> }[];
    defaultKey: string;
  };

  // modificadores aplicables
  modifiers: string[];

  // metadatos por calidad
  qualities: Record<Quality, QualityDetail>;

  // desglose por partidas (% orientativo)
  breakdown: { label: string; pct: number }[];

  // qué nunca está incluido (independiente de la calidad)
  neverIncludes: string[];
}

// ── Datos por servicio ────────────────────────────────────────────────────────

export const CALC_SERVICES: CalcService[] = [

  // 1 ── Reforma integral de piso ─────────────────────────────────────────────
  {
    slug: 'reformas-integrales',
    label: 'Reforma integral de piso',
    hint: 'Con instalaciones nuevas: cuadro, fontanería, redistribución, baño y cocina',
    hubSlug: 'reformas-integrales',
    inputType: 'superficie',
    surfaceMin: 40,
    surfaceMax: 250,
    surfaceStep: 5,
    surfaceDefault: 80,
    surfaceLabel: 'Superficie del piso',
    pricesPerM2: {
      esencial: { min: 650,  max: 800  },
      media:    { min: 800,  max: 1000 },
      alta:     { min: 1000, max: 1400 },
    },
    modifiers: ['instalaciones', 'distribucion', 'decada', 'planta', 'licencia'],
    qualities: {
      esencial: {
        label: 'Integral esencial',
        tagline: 'Todo nuevo, materiales funcionales',
        includes: [
          'Cuadro eléctrico nuevo (REBT) y cableado completo',
          'Fontanería completa (tuberías de alimentación y desagüe)',
          'Solado de gres porcelánico estándar (60×60)',
          'Alicatado de baños y cocina',
          'Sanitarios, mueble de baño y mampara básicos',
          'Pintura lisa en paredes y techos',
          'Gestión de residuos y escombros incluida',
        ],
        timelineWeeks: [10, 14],
        phases: [
          { name: 'Demolición y saneamiento', pct: 12 },
          { name: 'Instalaciones (electricidad y fontanería)', pct: 28 },
          { name: 'Albañilería y tabiquería', pct: 15 },
          { name: 'Revestimientos y pavimentos', pct: 25 },
          { name: 'Carpintería y acabados', pct: 12 },
          { name: 'Limpieza y entrega', pct: 8 },
        ],
      },
      media: {
        label: 'Integral media',
        tagline: 'Calidad media-alta, mejor confort',
        includes: [
          'Todo lo de Esencial',
          'Porcelánicos de gama media-alta (60×60 o superior)',
          'Carpintería de aluminio con rotura de puente térmico',
          'Griferías de marca reconocida (Grohe, Hansgrohe...)',
          'Falsos techos en zonas principales',
          'Iluminación LED integrada con regulación',
          'Parquet o tarima flotante en zonas de estar',
        ],
        timelineWeeks: [12, 16],
        phases: [
          { name: 'Demolición y saneamiento', pct: 10 },
          { name: 'Instalaciones', pct: 25 },
          { name: 'Albañilería y tabiquería', pct: 14 },
          { name: 'Revestimientos y pavimentos', pct: 26 },
          { name: 'Carpintería y acabados', pct: 17 },
          { name: 'Limpieza y entrega', pct: 8 },
        ],
      },
      alta: {
        label: 'Integral alta',
        tagline: 'Materiales premium y diseño singular',
        includes: [
          'Todo lo de Media',
          'Materiales premium (mármol, microcemento o madera maciza)',
          'Domótica básica (persianas, iluminación y climatización)',
          'Proyecto de diseño de interiores incluido',
          'Acabados singulares a medida',
          'Certificado de obra final para registro',
          'Garantía extendida documentada',
        ],
        timelineWeeks: [14, 20],
        phases: [
          { name: 'Demolición y saneamiento', pct: 8 },
          { name: 'Instalaciones', pct: 22 },
          { name: 'Albañilería y tabiquería', pct: 13 },
          { name: 'Revestimientos y pavimentos', pct: 25 },
          { name: 'Carpintería premium y acabados', pct: 22 },
          { name: 'Domótica, detalles y entrega', pct: 10 },
        ],
      },
    },
    breakdown: [
      { label: 'Demolición y escombros',         pct: 8  },
      { label: 'Instalaciones (elect. + font.)',  pct: 22 },
      { label: 'Albañilería y tabiquería',        pct: 14 },
      { label: 'Revestimientos y pavimentos',    pct: 20 },
      { label: 'Carpintería',                    pct: 16 },
      { label: 'Acabados y pintura',             pct: 10 },
      { label: 'Gestión y dirección de obra',    pct: 10 },
    ],
    neverIncludes: [
      'Electrodomésticos (encimera, horno, lavavajillas, frigorífico...)',
      'Mobiliario no fijo (mesas, sillas, sofás, camas)',
      'Aire acondicionado o sistema de climatización',
      'Obras en elementos comunes del edificio o fachada',
      'Desperfectos ocultos que afloran al abrir paredes o suelos',
      'IVA (tipo reducido 10 % en vivienda habitual)',
      'Tasas municipales ni honorarios de proyecto (salvo que se incluyan)',
    ],
  },

  // 2 ── Reforma parcial (sin instalaciones) ──────────────────────────────────
  {
    slug: 'reforma-pisos',
    label: 'Reforma de piso (solo acabados)',
    hint: 'Suelos, pintura, carpintería, baño y cocina. Sin renovar cuadro ni fontanería',
    hubSlug: 'reforma-pisos',
    inputType: 'superficie',
    surfaceMin: 40,
    surfaceMax: 200,
    surfaceStep: 5,
    surfaceDefault: 70,
    surfaceLabel: 'Superficie del piso',
    pricesPerM2: {
      esencial: { min: 350, max: 450 },
      media:    { min: 450, max: 600 },
      alta:     { min: 600, max: 800 },
    },
    modifiers: ['distribucion', 'decada', 'planta'],
    qualities: {
      esencial: {
        label: 'Acabados esencial',
        tagline: 'Suelos, pintura y puertas',
        includes: [
          'Solado nuevo (gres porcelánico estándar)',
          'Pintura completa: preparación + dos manos',
          'Carpintería interior (puertas pintadas en blanco)',
          'Gestión de residuos y escombros',
        ],
        timelineWeeks: [5, 8],
        phases: [
          { name: 'Demolición ligera',            pct: 10 },
          { name: 'Revestimientos y pavimentos',  pct: 45 },
          { name: 'Carpintería',                  pct: 25 },
          { name: 'Pintura y acabados',           pct: 15 },
          { name: 'Limpieza y entrega',           pct: 5  },
        ],
      },
      media: {
        label: 'Acabados media',
        tagline: 'Suelos, baño, cocina y carpintería',
        includes: [
          'Todo lo de Esencial',
          'Porcelánicos 60×60 o parquet laminado de calidad',
          'Puertas lacadas en blanco o tablero de madera',
          'Renovación de alicatado en baño (sin cambiar fontanería)',
          'Iluminación LED en zonas principales',
          'Barniz o microcemento decorativo en zonas seleccionadas',
        ],
        timelineWeeks: [6, 10],
        phases: [
          { name: 'Demolición ligera',            pct: 8  },
          { name: 'Revestimientos y pavimentos',  pct: 42 },
          { name: 'Carpintería',                  pct: 28 },
          { name: 'Pintura y acabados',           pct: 17 },
          { name: 'Limpieza y entrega',           pct: 5  },
        ],
      },
      alta: {
        label: 'Acabados alta',
        tagline: 'Materiales premium, carpintería a medida',
        includes: [
          'Todo lo de Media',
          'Parquet o suelo de madera maciza (encachado o flotante)',
          'Carpintería de diseño a medida con lacado de alta calidad',
          'Microcemento o resina en zona seleccionada',
          'Molduras, cornisas y detalles decorativos',
          'Iluminación de diseño con regulación',
        ],
        timelineWeeks: [8, 12],
        phases: [
          { name: 'Demolición ligera',            pct: 6  },
          { name: 'Revestimientos y pavimentos',  pct: 38 },
          { name: 'Carpintería premium',          pct: 32 },
          { name: 'Acabados y pintura',           pct: 18 },
          { name: 'Limpieza y entrega',           pct: 6  },
        ],
      },
    },
    breakdown: [
      { label: 'Demolición y escombros',         pct: 5  },
      { label: 'Revestimientos y pavimentos',    pct: 35 },
      { label: 'Carpintería',                    pct: 23 },
      { label: 'Albañilería menor',              pct: 7  },
      { label: 'Acabados y pintura',             pct: 20 },
      { label: 'Gestión y dirección de obra',    pct: 10 },
    ],
    neverIncludes: [
      'Renovación del cuadro eléctrico o fontanería general',
      'Baño o cocina completos (solo alicatado en Media/Alta)',
      'Electrodomésticos o mobiliario no fijo',
      'Aire acondicionado o climatización',
      'IVA (tipo reducido 10 % en vivienda habitual)',
      'Licencias (normalmente no necesarias para solo acabados)',
    ],
  },

  // 3 ── Reforma de baño ───────────────────────────────────────────────────────
  {
    slug: 'reforma-banos',
    label: 'Reforma de baño',
    hint: 'Precio total por baño, no por m². El coste fijo domina sobre la superficie',
    hubSlug: 'reforma-banos',
    inputType: 'tramo',
    defaultTranche: '4-6',
    tranches: [
      {
        key: 'hasta-4',
        label: 'Hasta 4 m²',
        sublabel: 'Aseo pequeño o ducha de cortesía',
        prices: {
          esencial: { min: 2800,  max: 3800  },
          media:    { min: 3800,  max: 5500  },
          alta:     { min: 5500,  max: 8500  },
        },
      },
      {
        key: '4-6',
        label: '4–6 m²',
        sublabel: 'Baño estándar · referencia de mercado',
        prices: {
          esencial: { min: 3500,  max: 5000  },
          media:    { min: 5000,  max: 7500  },
          alta:     { min: 7500,  max: 12000 },
        },
      },
      {
        key: '6-9',
        label: '6–9 m²',
        sublabel: 'Baño amplio o doble lavabo',
        prices: {
          esencial: { min: 4500,  max: 6500  },
          media:    { min: 6500,  max: 10000 },
          alta:     { min: 10000, max: 16000 },
        },
      },
      {
        key: 'mas-9',
        label: 'Más de 9 m²',
        sublabel: 'Baño principal con vestidor o tina exenta',
        prices: {
          esencial: { min: 5500,  max: 8000  },
          media:    { min: 8000,  max: 13000 },
          alta:     { min: 13000, max: 20000 },
        },
      },
    ],
    modifiers: ['decada', 'planta'],
    qualities: {
      esencial: {
        label: 'Baño esencial',
        tagline: 'Funcional, todo nuevo',
        includes: [
          'Demolición y retirada de materiales existentes',
          'Inodoro y lavabo estándar (marca Roca o similar)',
          'Plato de ducha de acrílico o acero',
          'Mueble de baño con espejo',
          'Mampara de vidrio templado',
          'Alicatado y solado nuevos (gres estándar)',
          'Conexiones de fontanería (sin cambiar tuberías generales del edificio)',
        ],
        timelineWeeks: [2, 3],
        phases: [
          { name: 'Demolición',                    pct: 20 },
          { name: 'Fontanería y electricidad',     pct: 30 },
          { name: 'Alicatado y solado',            pct: 30 },
          { name: 'Sanitarios y acabados',         pct: 15 },
          { name: 'Limpieza y entrega',            pct: 5  },
        ],
      },
      media: {
        label: 'Baño media',
        tagline: 'Confort y diseño reconocible',
        includes: [
          'Todo lo de Esencial',
          'Sanitarios de gama media (Roca Meridian, Duravit...)',
          'Ducha de obra o plato extraplano',
          'Mueble suspendido con lavabo integrado',
          'Grifería de diseño (Grohe, Hansgrohe...)',
          'Iluminación LED empotrada sobre espejo',
          'Radiador toallero',
        ],
        timelineWeeks: [3, 4],
        phases: [
          { name: 'Demolición',                    pct: 15 },
          { name: 'Fontanería y electricidad',     pct: 28 },
          { name: 'Alicatado y solado',            pct: 30 },
          { name: 'Sanitarios y muebles',          pct: 20 },
          { name: 'Acabados y entrega',            pct: 7  },
        ],
      },
      alta: {
        label: 'Baño alta',
        tagline: 'Premium, a medida',
        includes: [
          'Todo lo de Media',
          'Sanitarios premium (Villeroy & Boch, Hansgrohe Axor...)',
          'Ducha de obra con pavimento continuo (microcemento o piedra natural)',
          'Mueble lacado o en madera maciza a medida',
          'Espejo retroiluminado con función antivaho',
          'Suelo radiante eléctrico',
          'Grifería empotrada de alta gama',
        ],
        timelineWeeks: [4, 6],
        phases: [
          { name: 'Demolición',                    pct: 12 },
          { name: 'Fontanería y electricidad',     pct: 25 },
          { name: 'Revestimientos premium',        pct: 30 },
          { name: 'Sanitarios y muebles a medida', pct: 25 },
          { name: 'Acabados y entrega',            pct: 8  },
        ],
      },
    },
    breakdown: [
      { label: 'Demolición y escombros',                pct: 10 },
      { label: 'Fontanería e instalación eléctrica',   pct: 25 },
      { label: 'Alicatado y solado',                   pct: 28 },
      { label: 'Sanitarios, mueble y mampara',         pct: 25 },
      { label: 'Acabados y sellados',                  pct: 7  },
      { label: 'Gestión y dirección',                  pct: 5  },
    ],
    neverIncludes: [
      'Renovación de tuberías generales del edificio o colectores',
      'Cambio del cuadro eléctrico general',
      'Electrodomésticos o climatización',
      'Obras en tabiques estructurales o portantes',
      'IVA (10 % en vivienda habitual)',
    ],
  },

  // 4 ── Reforma de cocina ─────────────────────────────────────────────────────
  {
    slug: 'reforma-cocinas',
    label: 'Reforma de cocina',
    hint: 'Precio total por cocina. Los muebles y electrodomésticos pesan más que la superficie',
    hubSlug: 'reforma-cocinas',
    inputType: 'tramo',
    defaultTranche: '8-12',
    tranches: [
      {
        key: 'hasta-8',
        label: 'Hasta 8 m²',
        sublabel: 'Cocina lineal o en L pequeña',
        prices: {
          esencial: { min: 5000,  max: 7500  },
          media:    { min: 7500,  max: 11000 },
          alta:     { min: 11000, max: 18000 },
        },
      },
      {
        key: '8-12',
        label: '8–12 m²',
        sublabel: 'Cocina estándar · referencia de mercado',
        prices: {
          esencial: { min: 6000,  max: 9000  },
          media:    { min: 9000,  max: 14000 },
          alta:     { min: 14000, max: 22000 },
        },
      },
      {
        key: '12-16',
        label: '12–16 m²',
        sublabel: 'Cocina amplia o con isla pequeña',
        prices: {
          esencial: { min: 7500,  max: 11500 },
          media:    { min: 11500, max: 18000 },
          alta:     { min: 18000, max: 28000 },
        },
      },
      {
        key: 'mas-16',
        label: 'Más de 16 m²',
        sublabel: 'Cocina abierta al salón o de diseño',
        prices: {
          esencial: { min: 9000,  max: 14000 },
          media:    { min: 14000, max: 22000 },
          alta:     { min: 22000, max: 35000 },
        },
      },
    ],
    modifiers: ['decada', 'distribucion', 'planta'],
    qualities: {
      esencial: {
        label: 'Cocina esencial',
        tagline: 'Funcional y completa',
        includes: [
          'Demolición del mobiliario y revestimientos',
          'Muebles de cocina en kit (módulos estándar)',
          'Encimera laminada',
          'Alicatado de salpicadero',
          'Conexiones eléctricas y fontanería de cocina',
          'Extractor básico',
        ],
        timelineWeeks: [3, 5],
        phases: [
          { name: 'Demolición',                    pct: 15 },
          { name: 'Instalaciones',                 pct: 20 },
          { name: 'Alicatado y solado',            pct: 20 },
          { name: 'Montaje de muebles',            pct: 35 },
          { name: 'Acabados y entrega',            pct: 10 },
        ],
      },
      media: {
        label: 'Cocina media',
        tagline: 'Semia medida con encimera de calidad',
        includes: [
          'Todo lo de Esencial',
          'Muebles de cocina a medida o semia medida',
          'Encimera de silestone, quartz o compacto fenólico',
          'Fregadero de acero inoxidable o composite',
          'Grifo de diseño con ducha extraíble',
          'Iluminación LED bajo-mueble',
          'Suelo nuevo (porcelánico o tarima)',
        ],
        timelineWeeks: [4, 7],
        phases: [
          { name: 'Demolición',                    pct: 12 },
          { name: 'Instalaciones',                 pct: 18 },
          { name: 'Alicatado y solado',            pct: 18 },
          { name: 'Montaje de muebles a medida',   pct: 40 },
          { name: 'Acabados y entrega',            pct: 12 },
        ],
      },
      alta: {
        label: 'Cocina alta',
        tagline: 'Alta gama, isla o apertura al salón',
        includes: [
          'Todo lo de Media',
          'Muebles lacados o en madera maciza de alta gama',
          'Encimera de piedra natural (granito, mármol o quartzite)',
          'Isla central o apertura al salón',
          'Iluminación de diseño y vitrinas con luz interior',
          'Integración de electrodomésticos de alta gama (CONSULTAR disponibilidad)',
        ],
        timelineWeeks: [6, 10],
        phases: [
          { name: 'Demolición y preparación',      pct: 10 },
          { name: 'Instalaciones',                 pct: 15 },
          { name: 'Albañilería y revestimientos',  pct: 20 },
          { name: 'Muebles premium y encimera',    pct: 42 },
          { name: 'Iluminación y acabados',        pct: 8  },
          { name: 'Entrega',                       pct: 5  },
        ],
      },
    },
    breakdown: [
      { label: 'Demolición y escombros',         pct: 8  },
      { label: 'Fontanería e instalación eléct.',pct: 15 },
      { label: 'Alicatado y solado',             pct: 10 },
      { label: 'Mobiliario y encimera',          pct: 42 },
      { label: 'Acabados y pintura',             pct: 10 },
      { label: 'Gestión y dirección',            pct: 10 },
      { label: 'Albañilería menor',              pct: 5  },
    ],
    neverIncludes: [
      'Electrodomésticos de superficie libre (encimera, horno, campana, frigorífico...)',
      'Mobiliario no fijo',
      'Renovación del cuadro eléctrico general',
      'Cambio de tuberías generales del edificio',
      'IVA (10 % en vivienda habitual)',
    ],
  },

  // 5 ── Local comercial ────────────────────────────────────────────────────────
  {
    slug: 'locales-comerciales',
    label: 'Local comercial u oficina',
    hint: 'Precio de construcción (€/m²) + partida de proyecto técnico y licencia según uso',
    hubSlug: 'locales-comerciales',
    inputType: 'superficie',
    surfaceMin: 20,
    surfaceMax: 500,
    surfaceStep: 10,
    surfaceDefault: 80,
    surfaceLabel: 'Superficie del local',
    pricesPerM2: {
      esencial: { min: 400, max: 600  },
      media:    { min: 600, max: 800  },
      alta:     { min: 800, max: 1100 },
    },
    licenseByUso: {
      defaultKey: 'oficina',
      options: [
        {
          key: 'oficina',
          label: 'Oficina o despacho profesional',
          prices: {
            esencial: null,
            media:    { min: 1500, max: 3000 },
            alta:     { min: 3000, max: 5500 },
          },
        },
        {
          key: 'comercio',
          label: 'Comercio, tienda o exposición',
          prices: {
            esencial: { min: 1500, max: 2500 },
            media:    { min: 2500, max: 4500 },
            alta:     { min: 4500, max: 8000 },
          },
        },
        {
          key: 'hosteleria',
          label: 'Bar, restaurante u hostelería',
          prices: {
            esencial: { min: 6000, max: 10000 },
            media:    { min: 10000, max: 16000 },
            alta:     { min: 16000, max: 25000 },
          },
        },
      ],
    },
    modifiers: ['decada', 'planta', 'licencia'],
    qualities: {
      esencial: {
        label: 'Local esencial',
        tagline: 'Acondicionamiento funcional',
        includes: [
          'Demolición y vaciado del local',
          'Instalación eléctrica (cuadro, tomas y alumbrado básico)',
          'Suelo nuevo (gres técnico o solado continuo)',
          'Pintura y revestimientos de pared',
          'Falso techo desmontable tipo Armstrong',
          'Fontanería básica (si aplica)',
        ],
        timelineWeeks: [4, 8],
        phases: [
          { name: 'Demolición y saneamiento',      pct: 15 },
          { name: 'Instalaciones',                 pct: 30 },
          { name: 'Albañilería y tabiquería',      pct: 20 },
          { name: 'Revestimientos',                pct: 22 },
          { name: 'Acabados y entrega',            pct: 13 },
        ],
      },
      media: {
        label: 'Local media',
        tagline: 'Imagen profesional y confort',
        includes: [
          'Todo lo de Esencial',
          'Carpintería interior (mamparas y puertas de vidrio)',
          'Instalación de climatización (preinstalación)',
          'Iluminación LED técnica diseñada',
          'Revestimientos de mayor calidad',
          'Proyecto técnico básico incluido',
        ],
        timelineWeeks: [6, 10],
        phases: [
          { name: 'Demolición',                    pct: 12 },
          { name: 'Instalaciones',                 pct: 28 },
          { name: 'Albañilería y tabiquería',      pct: 18 },
          { name: 'Revestimientos y carpintería',  pct: 28 },
          { name: 'Acabados y entrega',            pct: 14 },
        ],
      },
      alta: {
        label: 'Local alta',
        tagline: 'Diseño, imagen de marca e instalaciones completas',
        includes: [
          'Todo lo de Media',
          'Diseño de espacios e interiorismo incluido',
          'Climatización completa (no solo preinstalación)',
          'Revestimientos premium y suelo técnico de alta gama',
          'Proyecto técnico completo y tramitación de licencia',
          'Señalética y escaparate (si aplica)',
        ],
        timelineWeeks: [8, 14],
        phases: [
          { name: 'Demolición',                    pct: 10 },
          { name: 'Instalaciones completas',       pct: 28 },
          { name: 'Albañilería y tabiquería',      pct: 15 },
          { name: 'Revestimientos premium',        pct: 25 },
          { name: 'Carpintería y diseño',          pct: 15 },
          { name: 'Acabados y entrega',            pct: 7  },
        ],
      },
    },
    breakdown: [
      { label: 'Demolición y escombros',         pct: 10 },
      { label: 'Instalaciones eléctricas',       pct: 20 },
      { label: 'Fontanería y climatización',     pct: 8  },
      { label: 'Albañilería y tabiquería',       pct: 15 },
      { label: 'Revestimientos y pavimentos',    pct: 18 },
      { label: 'Carpintería y vidriería',        pct: 12 },
      { label: 'Gestión y licencia',             pct: 10 },
      { label: 'Acabados y pintura',             pct: 7  },
    ],
    neverIncludes: [
      'Mobiliario, equipamiento y maquinaria de explotación',
      'Electrodomésticos o equipos de hostelería',
      'Tasas de apertura, fianzas y seguros de actividad',
      'IVA (21 % en locales comerciales)',
      'Honorarios de proyecto técnico (si no se incluyen expresamente)',
    ],
  },

  // 6 ── Comunidad de vecinos ───────────────────────────────────────────────────
  {
    slug: 'comunidades-vecinos',
    label: 'Comunidad de vecinos',
    hint: 'Selecciona los elementos que necesitas reformar. Precios orientativos para edificio de ~10 viviendas',
    hubSlug: 'comunidades-vecinos',
    inputType: 'elemento',
    elementNote: 'Precios orientativos para edificio de 8–12 viviendas. En edificios más grandes o pequeños, contacta para una estimación ajustada.',
    elements: [
      {
        key: 'portal',
        label: 'Portal y vestíbulo',
        icon: '🚪',
        prices: {
          esencial: { min: 8000,  max: 12000 },
          media:    { min: 12000, max: 20000 },
          alta:     { min: 20000, max: 35000 },
        },
        note: 'Incluye suelo, revestimientos, iluminación e intercomunicador',
      },
      {
        key: 'escalera',
        label: 'Escalera y rellanos',
        icon: '🪜',
        prices: {
          esencial: { min: 6000,  max: 10000 },
          media:    { min: 10000, max: 16000 },
          alta:     { min: 16000, max: 28000 },
        },
      },
      {
        key: 'fachada',
        label: 'Fachada exterior',
        icon: '🏗️',
        prices: {
          esencial: { min: 25000, max: 40000 },
          media:    { min: 40000, max: 65000 },
          alta:     { min: 65000, max: 120000 },
        },
        note: 'SATE o revestimiento con proyecto técnico',
      },
      {
        key: 'cubierta',
        label: 'Cubierta / tejado',
        icon: '🏠',
        prices: {
          esencial: { min: 15000, max: 25000 },
          media:    { min: 25000, max: 45000 },
          alta:     { min: 45000, max: 80000 },
        },
        note: 'Impermeabilización e impermeabilización + aislamiento',
      },
    ],
    modifiers: ['decada'],
    qualities: {
      esencial: {
        label: 'Comunidad esencial',
        tagline: 'Reparación funcional y mantenimiento',
        includes: [
          'Materiales estándar de larga duración',
          'Reparaciones funcionales de urgencia o mantenimiento',
          'Gestión de residuos incluida',
          'Cumplimiento normativa básica de seguridad',
        ],
        timelineWeeks: [4, 12],
        phases: [
          { name: 'Preparación y andamios',        pct: 15 },
          { name: 'Demolición y saneamiento',      pct: 15 },
          { name: 'Ejecución principal',           pct: 50 },
          { name: 'Acabados y limpieza',           pct: 15 },
          { name: 'Entrega y certificación',       pct: 5  },
        ],
      },
      media: {
        label: 'Comunidad media',
        tagline: 'Mejora estética y de habitabilidad',
        includes: [
          'Todo lo de Esencial',
          'Materiales de calidad media con mejor acabado visual',
          'Mejora de instalaciones (iluminación, portero, etc.)',
          'Coordinación con administrador de fincas',
        ],
        timelineWeeks: [6, 16],
        phases: [
          { name: 'Preparación y andamios',        pct: 12 },
          { name: 'Demolición y saneamiento',      pct: 12 },
          { name: 'Instalaciones',                 pct: 15 },
          { name: 'Ejecución principal',           pct: 45 },
          { name: 'Acabados y limpieza',           pct: 11 },
          { name: 'Entrega y certificación',       pct: 5  },
        ],
      },
      alta: {
        label: 'Comunidad alta',
        tagline: 'Renovación integral con eficiencia energética',
        includes: [
          'Todo lo de Media',
          'Materiales premium y soluciones de eficiencia energética',
          'Proyecto técnico completo incluido',
          'Tramitación de ayudas y subvenciones (si aplica)',
          'Certificado de obra para registro en propiedad',
        ],
        timelineWeeks: [8, 20],
        phases: [
          { name: 'Proyecto y permisos',           pct: 10 },
          { name: 'Preparación y andamios',        pct: 10 },
          { name: 'Demolición',                    pct: 10 },
          { name: 'Instalaciones y estructura',    pct: 20 },
          { name: 'Ejecución principal',           pct: 35 },
          { name: 'Acabados y certificación',      pct: 15 },
        ],
      },
    },
    breakdown: [
      { label: 'Demolición y preparación',       pct: 10 },
      { label: 'Instalaciones',                  pct: 15 },
      { label: 'Albañilería y estructura',       pct: 20 },
      { label: 'Revestimientos y acabados',      pct: 30 },
      { label: 'Carpintería y cerrajería',       pct: 15 },
      { label: 'Gestión, licencia y dirección',  pct: 10 },
    ],
    neverIncludes: [
      'Obras en instalaciones privativas (interior de pisos)',
      'Ascensor (elemento con partida propia)',
      'Impermeabilización de terrazas privadas',
      'IVA (21 % en comunidades)',
      'Honorarios de aparejador o arquitecto (si no se incluyen)',
      'Tasas municipales y certificados de eficiencia energética',
    ],
  },
];
