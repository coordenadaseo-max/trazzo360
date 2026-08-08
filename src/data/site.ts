export const SITE = {
  name: 'Trazzo360',
  tagline: 'Reformas Integrales en el Corredor del Henares',
  url: 'https://trazzo360.es',
  phone: 'TU_TELEFONO',           // ← Reemplazar con número real, ej: '34912345678'
  phoneDisplay: 'TU TELÉFONO',    // ← Reemplazar con número formateado, ej: '912 345 678'
  whatsapp: 'TU_TELEFONO',        // ← Mismo número sin espacios ni '+', ej: '34912345678'
  email: 'info@trazzo360.es',
  address: 'Corredor del Henares, Madrid',
  hours: 'Lun-Vie 8:00-20:00 · Sáb 9:00-14:00',
  mainCity: 'Alcalá de Henares',
  zone: 'Corredor del Henares',
  // Reseñas Google -activar cuando tengas valoraciones reales
  reviewCount: 0,       // ← Número de reseñas en Google. Aparece en el hero cuando > 0
  ratingValue: 0,       // ← Media de valoración (ej: 4.9). Aparece cuando > 0
  googleBusinessUrl: '', // ← URL de tu ficha de Google Business Profile
  stats: {
    projects: '+80',
    years: '+10',
    cities: '8',
  },
};

export const SERVICES = [
  {
    slug: 'reformas-integrales',
    title: 'Reformas Integrales',
    shortTitle: 'Reformas Integrales',
    anchorLabel: 'Reformas integrales',
    icon: '🏠',
    headline: 'Tu vivienda, reformada de arriba a abajo con precio cerrado.',
    heroCopy: 'Si llevas tiempo pensando en reformar tu piso, chalé o ático pero no sabes por dónde empezar ni cuánto costará de verdad, estás en el sitio adecuado. Hacemos reformas integrales en el Corredor del Henares con presupuesto cerrado desde el primer día: un único precio que incluye todos los gremios, todos los materiales y toda la gestión de permisos. Sin subcontratas, sin facturas sorpresa al final de la obra, sin excusas para retrasar la entrega.',
    desc: 'Reformamos tu piso, ático o chalet completamente. Diseño, gestión de permisos, ejecución y entrega llave en mano. Sin sorpresas en el precio.',
    body: [
      { type: 'h3', text: 'Qué incluye una reforma integral en el Corredor del Henares' },
      { type: 'p',  text: 'Reformamos pisos, áticos, dúplex y chalés de principio a fin: derribo de tabiques, redistribución de espacios, instalación eléctrica completa con cuadro nuevo, fontanería, solados de porcelánico o tarima flotante, falso techo, reforma de baño y cocina, carpintería interior y pintura. Un único interlocutor coordina todos los gremios con equipo propio. Sin subcontratas que no conoces ni facturas extra que no firmaste.' },
      { type: 'h3', text: 'Por qué los pisos del Corredor de los años 70 y 80 necesitan más que pintura' },
      { type: 'p',  text: 'La mayor parte del parque de vivienda de Alcalá de Henares, Torrejón de Ardoz y Coslada se construyó entre 1970 y 1995, en la época de crecimiento industrial del Corredor del Henares. Cuadros eléctricos de 2,3 kW insuficientes para el uso actual, tuberías de hierro galvanizado, distribuciones cerradas con pasillos largos y habitaciones pequeñas, gotelé en todas las paredes y ventanas de aluminio anodizado sin aislamiento. Una reforma integral bien ejecutada en estas viviendas no se parece a pintar y limpiar: el resultado es prácticamente vivienda de nueva construcción.' },
      { type: 'h3', text: 'Licencias y normativa: qué necesitas tramitar en tu ayuntamiento' },
      { type: 'p',  text: 'La pintura, el cambio de suelos y la renovación de baño o cocina sin tocar instalaciones comunes son obras menores sin licencia. Cuando la reforma incluye derribo de tabiques, cambio de ventanas en fachada o modificación de electricidad o fontanería, se necesita licencia de obra menor, con un plazo de tramitación de 2 a 4 semanas según el municipio. El derribo de muros de carga exige proyecto de arquitecto técnico. En los municipios madrileños del Corredor (Alcalá, Torrejón, Coslada, San Fernando, Meco) los plazos son similares; en Guadalajara y Azuqueca generalmente más ágiles. Nos encargamos del trámite completo.' },
    ],
    priceFrom: '24.900',
    priceDesc: 'Reforma integral piso 70–90 m²',
    processSteps: [
      { title: 'Visita y medición gratuita', desc: 'Visitamos la vivienda sin coste ni compromiso. Tomamos medidas, evaluamos el estado previo y escuchamos tus necesidades.' },
      { title: 'Presupuesto cerrado en 48h', desc: 'Entregamos presupuesto detallado con todas las partidas incluidas. Sin sorpresas posteriores: el precio que firmamos es el que pagas.' },
      { title: 'Proyecto y licencia', desc: 'Redactamos el proyecto y gestionamos la licencia de obras en el ayuntamiento. Nos encargamos de toda la burocracia.' },
      { title: 'Derribo e instalaciones', desc: 'Vaciado, demolición de tabiques y ejecución de instalaciones nuevas de electricidad y fontanería con materiales homologados.' },
      { title: 'Albañilería y acabados', desc: 'Solados, alicatados, falso techo, carpintería interior, baño, cocina y pintura final. Coordinación de todos los gremios con equipo propio.' },
      { title: 'Entrega llave en mano', desc: 'Revisión final contigo, limpieza de obra y entrega con garantía de 2 años en materiales y mano de obra.' },
    ],
    priceTable: [
      { label: 'Piso 50–60 m² (reforma media)', price: 'Desde 18.000€', includes: 'Baño, cocina, suelos y pintura' },
      { label: 'Piso 70–90 m² (reforma integral)', price: 'Desde 24.900€', includes: 'Integral con instalaciones nuevas' },
      { label: 'Piso 100–120 m² o con redistribución', price: 'Desde 38.000€', includes: 'Integral con cambio de distribución' },
      { label: 'Chalet 150–200 m²', price: 'Desde 55.000€', includes: 'Precio orientativo según estado previo' },
    ],
    faqs: [
      {
        q: '¿Cuánto cuesta una reforma integral en el Corredor del Henares?',
        a: 'El precio de una reforma integral depende del tamaño, estado previo y calidad de materiales. Como orientación: un piso de 50–60 m² parte de 18.000€, uno de 70–90 m² oscila entre 24.900€ y 38.000€, y un chalet de 150 m² puede superar los 55.000€. Todos nuestros precios son cerrados en el contrato desde el primer día.',
      },
      {
        q: '¿Cuánto tiempo tarda una reforma integral?',
        a: 'Una reforma integral de un piso de 70–90 m² suele durar entre 8 y 14 semanas. Fijamos la fecha de entrega en el contrato y la cumplimos: si nos retrasamos sin causa de fuerza mayor, aplicamos penalizaciones pactadas en el propio contrato.',
      },
      {
        q: '¿Gestionáis los permisos de obra?',
        a: 'Sí. Nos encargamos de toda la tramitación en el ayuntamiento correspondiente del Corredor del Henares. El coste de la licencia se incluye en el presupuesto para que no tengas que gestionar nada por tu cuenta.',
      },
      {
        q: '¿Puedo vivir en el piso durante la reforma integral?',
        a: 'En la mayoría de los casos no es recomendable debido al polvo, ruido y cortes de suministros. Si no tienes alternativa de alojamiento, podemos plantear una ejecución por fases para que siempre tengas una zona habitable, aunque esto alarga el plazo total.',
      },
      {
        q: '¿Qué incluye exactamente una reforma integral?',
        a: 'Una reforma integral completa incluye: diseño del proyecto, derribo de tabiques y vaciado, instalación eléctrica nueva (cuadro, puntos de luz, enchufes), fontanería completa, solados y alicatados, falso techo si se necesita, reforma de baño y cocina, carpintería interior (puertas, armarios), pintura y limpieza final.',
      },
      {
        q: '¿Qué puedo reformar con 20.000€?',
        a: 'Con 20.000€ en el Corredor del Henares puedes abordar una reforma parcial de alto impacto: baño completo (3.200–4.500€) + cocina media (5.500–7.000€) + suelos nuevos de toda la vivienda (3.000–4.000€) + pintura general (1.500–2.000€). Así renuevas los tres espacios que más valor aportan sin acometer una reforma integral completa.',
      },
      {
        q: '¿Necesito arquitecto para la reforma?',
        a: 'Depende del alcance. Para cambios de distribución que afecten a elementos estructurales se requiere proyecto de arquitecto técnico. En Trazzo360 trabajamos con arquitectos técnicos colaboradores y lo incluimos en el presupuesto cuando es necesario. Para reformas integrales sin derribo de muros de carga, con dirección de obra propia es suficiente.',
      },
    ],
  },
  {
    slug: 'reforma-banos',
    title: 'Reforma de Baños',
    shortTitle: 'Baños',
    anchorLabel: 'Reforma de baños',
    icon: '🚿',
    headline: 'Baños modernos y sin humedades. Desde 3.200€.',
    heroCopy: 'Un baño anticuado, con bañera que ya no usas, azulejos de los años 80 o juntas con humedad, es más fácil de resolver de lo que imaginas. Realizamos reformas de baños en el Corredor del Henares con precio cerrado y entrega en 1 a 3 semanas: cambio de bañera por plato de ducha, alicatado nuevo, sanitarios, mampara y fontanería completa. Sin obras que se alargan, sin presupuestos que crecen, sin intermediarios entre tú y el resultado final.',
    desc: 'Reformamos tu baño completo: cambio de bañera por ducha, alicatados, sanitarios, fontanería, mampara y muebles. Todo incluido, precio cerrado.',
    body: [
      { type: 'h3', text: 'Qué incluye la reforma completa de un baño: sin medias tintas' },
      { type: 'p',  text: 'Demolición de alicatados y solado, impermeabilización de suelo y primer metro de pared, alicatado y solado nuevo, plato de ducha o bañera, mampara, sanitarios, mueble, espejo, iluminación y accesorios. Gestionamos los escombros y la limpieza final. Si el baño tiene humedades previas o problemas de fontanería, los detectamos y presupuestamos en la visita técnica gratuita, antes de que firmes nada.' },
      { type: 'h3', text: 'Los baños del Corredor del Henares: lo que tienen y cómo se resuelve' },
      { type: 'p',  text: 'Los baños de los bloques de los años 70 y 80 en Alcalá de Henares, Torrejón de Ardoz y Coslada comparten las mismas características: bañera de porcelana de 170 cm que nadie usa, azulejos de 15x15 en tonos beige o marrón, juntas ennegrecidas y ventilación a través de un conducto comunitario. La reforma más solicitada es el cambio de bañera por plato de ducha con nuevo alicatado: transforma el baño por completo en 5 a 10 días hábiles. En chalets y adosados de Meco y Camarma de Esteruelas, donde los baños superan los 6 metros cuadrados, ejecutamos duchas de obra a medida con microcemento o resina de cuarzo.' },
      { type: 'h3', text: '¿Necesitas licencia para reformar el baño? Lo que dice la normativa' },
      { type: 'p',  text: 'No. Las reformas de baño que no afectan a la estructura ni a instalaciones comunes son obras menores sin licencia en todos los municipios del Corredor del Henares. En algunos ayuntamientos se requiere comunicación previa de obra menor, un trámite del que nos encargamos. La normativa sí exige impermeabilización de suelo y primer metro de pared: es una obligación técnica, no una opción, y la razón por la que presupuestos más baratos que la omiten acaban siendo más caros cuando aparecen las humedades.' },
    ],
    priceFrom: '3.200',
    priceDesc: 'Reforma completa de baño',
    processSteps: [
      { title: 'Visita y diseño', desc: 'Medimos el baño y te mostramos opciones de distribución, materiales y acabados ajustados a tu presupuesto.' },
      { title: 'Retirada y desescombro', desc: 'Retiramos la bañera o ducha anterior, alicatados y solado existente. Limpieza completa del espacio.' },
      { title: 'Impermeabilización', desc: 'Aplicamos impermeabilizante en suelo y primer metro de pared para garantizar que no haya humedades futuras.' },
      { title: 'Alicatado y solado', desc: 'Colocación de nuevo revestimiento de pared y suelo. Rejuntado y sellado de juntas de dilatación.' },
      { title: 'Instalación y acabados', desc: 'Montaje de plato de ducha o bañera, mampara, sanitarios, mueble de baño, iluminación y accesorios. Limpieza final.' },
    ],
    priceTable: [
      { label: 'Cambio de bañera por ducha (sin cambio de alicatado)', price: 'Desde 1.800€', includes: 'Plato, mampara y fontanería' },
      { label: 'Reforma completa baño pequeño (hasta 5 m²)', price: 'Desde 3.200€', includes: 'Alicatado, sanitarios y mueble' },
      { label: 'Reforma completa baño grande (6–8 m²)', price: 'Desde 4.500€', includes: 'Con mueble a medida y ducha de obra' },
      { label: 'Reforma con cambio de distribución', price: 'Desde 5.500€', includes: 'Incluye fontanería nueva completa' },
    ],
    faqs: [
      {
        q: '¿Cuánto cuesta reformar un baño en el Corredor del Henares?',
        a: 'Desde 1.800€ para un cambio de bañera por ducha sin cambio de alicatado, hasta 7.500€ para una reforma completa con sanitarios de gama alta y mueble a medida. Un baño estándar de 4–6 m² con materiales de calidad media oscila entre 3.200€ y 4.500€ todo incluido.',
      },
      {
        q: '¿Cuánto tarda la reforma de un baño?',
        a: 'Entre 5 días y 3 semanas según el alcance. Un cambio de bañera por ducha sin cambio de alicatado puede hacerse en 3–5 días hábiles. Una reforma completa con cambio de alicatado, sanitarios y mueble necesita 2–3 semanas.',
      },
      {
        q: '¿Qué incluye la reforma completa de un baño?',
        a: 'Demolición de alicatados y solado existente, impermeabilización de suelo y paredes, colocación de alicatado y solado nuevo, instalación de plato de ducha o bañera, mampara, sanitarios (inodoro, lavabo), mueble de baño, espejo, iluminación y accesorios. Gestión de escombros y limpieza final incluidas.',
      },
      {
        q: '¿Cuánto cuesta cambiar la bañera por ducha?',
        a: 'Un cambio de bañera por plato de ducha sin tocar el alicatado existente parte de 1.800€. Si el alicatado está en mal estado y hay que renovarlo también, el coste sube a 2.500–3.500€. Si se aprovecha para una reforma completa del baño, el precio por el total es más eficiente que hacer dos obras separadas.',
      },
      {
        q: '¿Necesito licencia para reformar el baño?',
        a: 'No. Las reformas de baño que no afectan a la estructura del edificio ni a elementos comunes son obras menores que no necesitan licencia de obras, solo comunicación previa en algunos ayuntamientos del Corredor del Henares. Nosotros te informamos del trámite exacto según el municipio.',
      },
      {
        q: '¿Podéis reformar el baño sin obras de albañilería?',
        a: 'Sí. Ofrecemos soluciones de reforma rápida sin obra para baños: cambio de sanitarios, mueble y mampara sin tocar alicatados. El coste es menor y el plazo se reduce a 2–3 días, aunque el resultado visual es más limitado. Consúltanos y te presentamos ambas opciones con presupuesto.',
      },
    ],
  },
  {
    slug: 'reforma-cocinas',
    title: 'Reforma de Cocinas',
    shortTitle: 'Cocinas',
    anchorLabel: 'Reforma de cocinas',
    icon: '🍳',
    headline: 'Cocinas diseñadas para tu vida. Desde 5.500€.',
    heroCopy: 'Una cocina con muebles desgastados, una distribución que no funciona o una encimera que ya no da más de sí no es solo un problema de estética, es incomodidad cada día. Hacemos reformas de cocinas en el Corredor del Henares con muebles a medida o de catálogo, encimera de silestone, electrodomésticos integrados y electricidad nueva con circuitos dedicados. Precio cerrado, plazo en contrato, un resultado que transforma cómo vives tu casa a diario.',
    desc: 'Muebles a medida, encimeras, electrodomésticos, fontanería y electricidad. Diseñamos y ejecutamos tu cocina nueva de principio a fin.',
    body: [
      { type: 'h3', text: 'Qué incluye la reforma de una cocina de principio a fin' },
      { type: 'p',  text: 'Diseñamos y ejecutamos tu cocina completa: desescombro del estado anterior, instalación eléctrica nueva con circuitos independientes para cada electrodoméstico, fontanería, alicatado de zona de trabajo, muebles a medida o de catálogo, encimera de silestone o porcelana de gran formato, fregadero, grifo, electrodomésticos integrados y campana. Diseñamos en L, en U, en línea o cocina americana. Si no quieres obra pesada, también cambiamos muebles y frentes sobre la distribución actual en 3 a 5 días.' },
      { type: 'h3', text: 'Las cocinas del Corredor: distribuciones de los 80 que el diseño actual puede transformar' },
      { type: 'p',  text: 'La cocina cerrada de 6 a 9 metros cuadrados con muebles de formica y encimera de granito oscuro es el punto de partida habitual en los pisos de Alcalá de Henares, Torrejón de Ardoz y Coslada de los años 70 y 80. Dos problemas que van más allá de la estética: instalación eléctrica sin circuitos dedicados para electrodomésticos, origen de la mayoría de sobrecargas y cortocircuitos en cocinas, y una distribución cerrada que aísla la cocina del salón. En San Fernando de Henares y Azuqueca de Henares, los pisos de los 90 tienen cocinas algo más amplias con posibilidad de isla central o barra americana. En adosados de Meco y Camarma, diseñamos cocinas abiertas al salón que transforman la forma de vivir la vivienda.' },
      { type: 'h3', text: 'REBT en la cocina: por qué la instalación eléctrica nueva no es opcional' },
      { type: 'p',  text: 'El Reglamento Electrotécnico de Baja Tensión exige líneas independientes del cuadro para horno, vitrocerámica, lavavajillas y frigorífico. En viviendas anteriores a 1990 en el Corredor, el cuadro eléctrico rara vez cumple este requisito. Una instalación deficiente no es solo un problema técnico: es el origen del 90% de los cortocircuitos en cocinas. En Trazzo360 la electricidad nueva es parte de cualquier reforma de cocina completa e incluida en el presupuesto cerrado desde el primer día. Si la reforma incluye abrir la cocina al salón, gestionamos también la licencia de obra menor.' },
    ],
    priceFrom: '5.500',
    priceDesc: 'Reforma completa de cocina',
    processSteps: [
      { title: 'Diseño y planimetría', desc: 'Diseñamos tu cocina en 2D con distribución óptima según el espacio. Selección de materiales, muebles y electrodomésticos.' },
      { title: 'Desescombro', desc: 'Retirada de muebles y revestimientos anteriores. Preparación del espacio para la nueva instalación.' },
      { title: 'Obra civil', desc: 'Albañilería, electricidad (circuitos dedicados para electrodomésticos), fontanería y alicatado de zona de trabajo.' },
      { title: 'Instalación de muebles', desc: 'Montaje de muebles altos y bajos, ajuste y nivelación. Instalación de electrodomésticos y campana.' },
      { title: 'Encimera y acabados', desc: 'Colocación de encimera, instalación de fregadero, grifo y últimos remates. Limpieza y entrega.' },
    ],
    priceTable: [
      { label: 'Cocina hasta 8 m² (muebles y electrodomésticos)', price: 'Desde 5.500€', includes: 'Sin obras de albañilería' },
      { label: 'Cocina 8–12 m² (reforma completa)', price: 'Desde 8.000€', includes: 'Con alicatado, electricidad y fontanería' },
      { label: 'Cocina 12–18 m² (reforma completa)', price: 'Desde 12.000€', includes: 'Muebles a medida incluidos' },
      { label: 'Cocina americana o con isla', price: 'Desde 14.000€', includes: 'Con apertura al salón y proyecto técnico' },
    ],
    faqs: [
      {
        q: '¿Cuánto cuesta reformar una cocina en el Corredor del Henares?',
        a: 'Una reforma de cocina completa con muebles, encimera, electrodomésticos, alicatado y electricidad oscila entre 5.500€ (cocina pequeña con materiales de calidad media) y 18.000€ (cocina grande con muebles a medida y electrodomésticos de gama alta). La media para una cocina de 8–12 m² es de 8.000–11.000€.',
      },
      {
        q: '¿Cuánto tarda la reforma de una cocina?',
        a: 'Entre 2 y 4 semanas para una reforma completa de cocina. Los primeros días se dedican a demolición y obra (albañilería, electricidad, fontanería). La instalación de muebles y electrodomésticos se hace en la última semana. Fijamos la fecha de inicio y entrega en el contrato.',
      },
      {
        q: '¿Qué incluye la reforma completa de una cocina?',
        a: 'Diseño del espacio, desescombro del estado anterior, obra civil (electricidad, fontanería, alicatado de zona de trabajo y suelo), suministro e instalación de muebles, encimera, fregadero, grifo, electrodomésticos integrados y campana. Gestión de escombros y limpieza final incluidas.',
      },
      {
        q: '¿Puedo cambiar solo los muebles o la encimera?',
        a: 'Sí, realizamos reformas parciales de cocina: cambio de puertas y frentes de muebles, cambio de encimera solamente, o muebles sin tocar instalaciones. Si los muebles actuales están en buen estado pero la cocina parece anticuada, un cambio de frentes y encimera puede renovarla completamente por 2.000–4.000€.',
      },
      {
        q: '¿Necesito licencia para reformar la cocina?',
        a: 'No, salvo que implique cambios en instalaciones comunes del edificio o modificación de la distribución que afecte a elementos estructurales. Las reformas de cocina estándar son obra menor sin licencia en los municipios del Corredor del Henares.',
      },
      {
        q: '¿Podéis hacer cocinas abiertas al salón?',
        a: 'Sí. Abrimos la cocina al salón eliminando tabiques o haciendo huecos con ventanas o barras americanas. Si el tabique es de carga, trabajamos con arquitecto técnico para la solución estructural. Una cocina americana con isla puede aumentar significativamente la percepción de espacio en pisos de distribución cerrada.',
      },
    ],
  },
  {
    slug: 'reforma-pisos',
    title: 'Reforma de Pisos y Chalets',
    shortTitle: 'Pisos y Chalets',
    anchorLabel: 'Reforma de pisos y chalets',
    icon: '🏢',
    headline: 'Redistribución, suelos, ventanas, pintura y carpintería.',
    heroCopy: 'Los pisos del Corredor del Henares construidos en los años 70, 80 y 90 tienen algo en común: distribuciones cerradas que no respiran, instalaciones eléctricas que se quedan cortas y acabados que llevan décadas sin tocarse. Hacemos reformas de pisos y chalets con precio cerrado y plazo garantizado: redistribución de tabiques, suelos nuevos de porcelánico o tarima flotante, ventanas de PVC, instalaciones actualizadas y pintura. Un plan hecho a medida de tu presupuesto y del estado real de tu vivienda.',
    desc: 'Reforma completa de pisos, áticos y chalets. Derribos, redistribución de espacios, instalaciones, acabados y entrega llave en mano.',
    body: [
      { type: 'h3', text: 'Reforma de piso completa o parcial: cómo saber qué necesita tu vivienda' },
      { type: 'p',  text: 'No todos los pisos necesitan reforma integral. Si las instalaciones están en buen estado, suelos nuevos, pintura, baño y cocina pueden renovar completamente una vivienda por menos de 20.000€. Si las instalaciones son de los años 70 u 80, es más eficiente presupuestarlo todo junto: hacerlo por fases sale más caro en total y genera más molestias. En la visita gratuita evaluamos el estado real de tu piso y te decimos exactamente qué necesitas, sin venderte más obra de la que requiere tu vivienda.' },
      { type: 'h3', text: 'Pisos del Corredor de los 70 al 90: lo que vas a encontrar cuando empieces la obra' },
      { type: 'p',  text: 'En Alcalá de Henares y Torrejón de Ardoz, los pisos de 70 a 90 metros cuadrados de los años 80 son el proyecto más habitual: suelos de terrazo hidráulico, paredes con gotelé, ventanas de aluminio sin rotura de puente térmico y cuadros eléctricos con diferencial obsoleto. En Coslada y San Fernando de Henares predominan pisos de los años 90 con instalaciones algo más actualizadas que reducen el alcance de la reforma. En Guadalajara y Azuqueca de Henares, el clima continental hace que el cambio de carpintería a PVC con doble acristalamiento sea una de las inversiones con mayor retorno. En Meco y Camarma, los adosados y unifamiliares suelen incluir cerramiento de terrazas y reforma de cubierta.' },
      { type: 'h3', text: 'Licencias para reformar un piso: qué necesitas y qué no' },
      { type: 'p',  text: 'La pintura, el cambio de suelos, la renovación de baño y cocina sin tocar instalaciones comunes y el derribo de tabiques de distribución no requieren licencia en los municipios del Corredor (aunque algunos piden comunicación previa). El cambio de ventanas en fachada sí necesita licencia de obra menor: el trámite tarda entre 2 y 4 semanas. El derribo de muros de carga exige proyecto de arquitecto técnico. Los edificios de más de 50 años en Alcalá, Torrejón o Coslada pueden estar sujetos al Informe de Evaluación del Edificio, requisito previo a cambios en fachada que verificamos antes de comprometer plazos.' },
    ],
    priceFrom: '18.000',
    priceDesc: 'Reforma de piso 60 m²',
    processSteps: [
      { title: 'Visita gratuita', desc: 'Evaluamos el estado del piso, tomamos medidas y escuchamos qué quieres cambiar. Sin compromiso.' },
      { title: 'Proyecto y presupuesto', desc: 'Presupuesto cerrado en 48h con todas las partidas. Si hay derribo de muros, incluimos proyecto técnico.' },
      { title: 'Licencia (si aplica)', desc: 'Tramitamos la licencia de obra menor en el ayuntamiento correspondiente del Corredor del Henares.' },
      { title: 'Derribo e instalaciones', desc: 'Demolición de tabiques, instalación eléctrica y fontanería nuevas. Base para todos los acabados posteriores.' },
      { title: 'Acabados y entrega', desc: 'Solados, pintura, carpintería, baño y cocina. Limpieza final y entrega con garantía de obra.' },
    ],
    priceTable: [
      { label: 'Reforma parcial (suelos, pintura y carpintería)', price: 'Desde 8.000€', includes: 'Sin baño ni cocina' },
      { label: 'Reforma media (baño + cocina + suelos + pintura)', price: 'Desde 18.000€', includes: 'Piso 60–80 m²' },
      { label: 'Reforma integral piso 70–90 m²', price: 'Desde 24.900€', includes: 'Con instalaciones nuevas' },
      { label: 'Reforma con redistribución de tabiques', price: 'Desde 28.000€', includes: 'Incluye licencia y proyecto' },
    ],
    faqs: [
      {
        q: '¿Cuánto puede costar una reforma completa de un piso?',
        a: 'Depende del tamaño y el alcance. Un piso de 60 m² con reforma media (suelos, baño, cocina, pintura) oscila entre 18.000€ y 28.000€. Una reforma integral completa con cambio de distribución puede llegar a 35.000–45.000€ en el Corredor del Henares. Damos presupuesto gratuito en 48h con precio cerrado.',
      },
      {
        q: '¿Qué puedo reformar con 20.000€?',
        a: 'Con 20.000€ puedes abordar una reforma de alto impacto en un piso de tamaño medio: reforma completa de baño (3.500€), renovación de cocina media (7.000€), suelos nuevos en toda la vivienda (4.000€) y pintura general con carpintería (3.500€). El resultado es un piso completamente renovado en sus espacios clave.',
      },
      {
        q: '¿Qué reforma puedo hacer con 30.000 euros?',
        a: 'Con 30.000€ en el Corredor del Henares puedes afrontar una reforma integral de un piso de 60–70 m²: baño nuevo (4.000€), cocina completa con muebles (9.000€), suelos en toda la vivienda (4.500€), pintura y carpintería (4.000€), instalación eléctrica actualizada (4.000€) y redistribución de un tabique (3.000–4.500€).',
      },
      {
        q: '¿Puedo redistribuir los tabiques de mi piso?',
        a: 'Sí. Gestionamos la licencia de obra menor necesaria y ejecutamos la redistribución. Para tabiques de distribución (no de carga) el proceso es directo. Para muros de carga se requiere proyecto de arquitecto técnico, que gestionamos nosotros. La redistribución de un tabique sin carga parte de 1.200€ incluyendo gestión de escombros.',
      },
      {
        q: '¿Cuánto tarda la reforma de un piso?',
        a: 'Una reforma media de piso (baño + cocina + suelos + pintura) tarda entre 6 y 10 semanas. Una reforma integral completa con cambio de distribución e instalaciones nuevas puede durar entre 10 y 16 semanas. Fijamos el plazo en el contrato.',
      },
      {
        q: '¿Necesito licencia para reformar el piso?',
        a: 'Depende del alcance. La pintura, cambio de suelos y renovación de baño y cocina sin tocar instalaciones comunes son obras menores sin licencia. Si hay derribo de tabiques o cambio de ventanas en fachada, se necesita licencia de obra menor. Te informamos en la visita gratuita.',
      },
      {
        q: '¿Merece la pena reformar el piso para venderlo?',
        a: 'En la mayoría de los casos sí, especialmente en pisos de los años 70–90 en el Corredor del Henares. Una reforma de 15.000–25.000€ puede aumentar el precio de venta en 30.000–50.000€ y reducir el tiempo de venta significativamente. Consúltanos y te orientamos sobre qué reformas maximizan el retorno de inversión en tu zona.',
      },
    ],
  },
  {
    slug: 'locales-comerciales',
    title: 'Reformas de Locales Comerciales',
    shortTitle: 'Locales',
    anchorLabel: 'Reforma de locales comerciales',
    icon: '🏪',
    headline: 'Tu negocio, listo para abrir. Tramitamos la licencia.',
    heroCopy: 'Reformar un local comercial no es lo mismo que reformar una vivienda. Tienes una fecha de apertura que no puedes mover, una licencia de actividad que tramitar y una inversión que necesita rentabilizarse cuanto antes. Hacemos reformas de locales comerciales, restaurantes, oficinas y clínicas en el Corredor del Henares con tramitación de licencia incluida y fecha de entrega fijada en el contrato. Porque cuando tu negocio depende de una fecha, no hay margen para improvisación.',
    desc: 'Transformamos locales vacíos en espacios funcionales. Tramitamos la licencia de actividad y ejecutamos la obra completa a precio cerrado.',
    body: [
      { type: 'h3', text: 'Qué incluye la reforma de un local comercial: de la nave vacía al día de apertura' },
      { type: 'p',  text: 'Acondicionamos locales comerciales, restaurantes, cafeterías, oficinas, clínicas y peluquerías en el Corredor del Henares: vaciado y desescombro, instalación eléctrica completa con alumbrado de emergencia y señalética, fontanería, climatización, divisiones de pladur, suelos, techos técnicos, pintura y carpintería. Tramitamos la licencia de actividad en el ayuntamiento. Precio cerrado y fecha de entrega fijada en el contrato, porque cuando tienes una fecha de apertura no puedes improvisar.' },
      { type: 'h3', text: 'Licencia de actividad en el Corredor: plazos, tipos y lo que cambia por municipio' },
      { type: 'p',  text: 'La tramitación de la licencia de actividad es donde más empresarios se llevan sorpresas. Los plazos y requisitos varían según el municipio y el tipo de negocio.' },
      { type: 'h4', text: 'Hostelería, clínicas y actividades clasificadas' },
      { type: 'p',  text: 'Restaurantes, bares, clínicas y talleres requieren proyecto técnico completo firmado por arquitecto o ingeniero. En Alcalá de Henares los plazos pueden superar los 3 meses para hostelería. En Torrejón de Ardoz y Coslada son comparativamente más ágiles. El error más costoso que cometen los promotores de nuevos locales es iniciar la tramitación cuando la obra termina, en lugar de hacerlo en paralelo desde el primer día.' },
      { type: 'h4', text: 'Comercio minorista y oficinas sin actividad clasificada' },
      { type: 'p',  text: 'Para comercios sin actividad clasificada, muchos municipios del Corredor permiten el régimen de declaración responsable: presentas la documentación y puedes iniciar la actividad de inmediato, sin esperar resolución formal. Nosotros preparamos toda la documentación e informamos del régimen exacto según tu actividad y municipio antes de comenzar la obra.' },
      { type: 'h3', text: 'Tipos de locales en el Corredor: casco urbano, polígono y nave industrial' },
      { type: 'p',  text: 'En los cascos urbanos de Alcalá de Henares y Torrejón de Ardoz, los locales en planta baja de edificios residenciales tienen alturas de 2,80 a 3,20 metros y superficies de 40 a 100 metros cuadrados: ideales para comercio, clínicas y oficinas. En los polígonos de Coslada, San Fernando de Henares y Torrejón, transformamos naves diáfanas de 200 a 1.000 metros cuadrados en espacios de venta o servicio con instalaciones completas. En Guadalajara capital, la tramitación de licencias es comparativamente más ágil que en los municipios madrileños del Corredor, lo que facilita cumplir plazos ajustados de apertura.' },
    ],
    priceFrom: '8.000',
    priceDesc: 'Reforma local comercial 50 m²',
    processSteps: [
      { title: 'Visita técnica', desc: 'Analizamos el local, el uso previsto y los requisitos técnicos de la actividad para la licencia.' },
      { title: 'Proyecto y licencia', desc: 'Redactamos el proyecto técnico y tramitamos la licencia de actividad y obra en el ayuntamiento.' },
      { title: 'Derribo e instalaciones', desc: 'Vaciado del local, instalaciones eléctricas (cuadro, alumbrado de emergencia), fontanería y climatización.' },
      { title: 'Particiones y acabados', desc: 'Divisiones de pladur, suelos, techos técnicos, pintura y carpintería. Todo listo para abrir.' },
      { title: 'Inspección y entrega', desc: 'Coordinación con la inspección técnica para el certificado de actividad. Entrega con toda la documentación.' },
    ],
    priceTable: [
      { label: 'Local pequeño hasta 40 m² (reforma básica)', price: 'Desde 8.000€', includes: 'Instalaciones, suelo y pintura' },
      { label: 'Local medio 40–80 m² (reforma completa)', price: 'Desde 15.000€', includes: 'Con proyecto y tramitación de licencia' },
      { label: 'Local grande 80–150 m²', price: 'Desde 28.000€', includes: 'Presupuesto según uso y actividad' },
      { label: 'Restaurante o local de hostelería', price: 'Desde 35.000€', includes: 'Con proyecto técnico de actividad' },
    ],
    faqs: [
      {
        q: '¿Cuánto cuesta reformar un local comercial?',
        a: 'El precio depende del tamaño, el uso y el estado previo. Un local pequeño de 30–40 m² parte de 8.000€ para una reforma básica. Un local de hostelería de 80–100 m² con proyecto técnico completo puede superar los 45.000€. Emitimos presupuesto detallado con partidas separadas para que puedas planificar la inversión.',
      },
      {
        q: '¿Tramitáis la licencia de actividad para el local?',
        a: 'Sí, nos encargamos de todo el proceso: proyecto técnico de la actividad, tramitación en el ayuntamiento del Corredor del Henares donde esté ubicado el local, coordinación con la inspección técnica y obtención del certificado de actividad. El coste de los trámites se incluye en el presupuesto.',
      },
      {
        q: '¿Cuánto tarda la reforma de un local comercial?',
        a: 'Una reforma básica de local de 40–60 m² puede completarse en 3–5 semanas. Un local de hostelería o clínica con instalaciones completas necesita entre 6 y 12 semanas. La tramitación de la licencia de actividad puede durar 1–3 meses según el ayuntamiento, por eso conviene iniciarla en paralelo con la obra.',
      },
      {
        q: '¿Necesito proyecto técnico para reformar un local?',
        a: 'Depende del uso y el ayuntamiento. Para actividades clasificadas (hostelería, clínicas, talleres, peluquerías) siempre se requiere proyecto técnico firmado por arquitecto o ingeniero. Para usos de oficina o comercio sin actividad clasificada, en muchos municipios del Corredor del Henares basta con declaración responsable.',
      },
      {
        q: '¿Podéis trabajar fuera del horario comercial para no afectar al negocio de al lado?',
        a: 'Sí. Para locales en centros comerciales o en edificios con vecinos, podemos adaptar los horarios de obra para la fase de mayor ruido, previo acuerdo. Hay un coste adicional por trabajo fuera de horario habitual que detallamos en el presupuesto.',
      },
      {
        q: '¿Qué diferencia hay entre licencia de obras y licencia de actividad?',
        a: 'Son dos trámites distintos. La licencia de obras autoriza la ejecución de los trabajos de construcción. La licencia de actividad autoriza el uso del local para una actividad concreta. Un local puede necesitar ambas. Nosotros gestionamos las dos en los ayuntamientos del Corredor del Henares.',
      },
    ],
  },
  {
    slug: 'comunidades-vecinos',
    title: 'Reformas de Comunidades de Vecinos',
    shortTitle: 'Comunidades',
    anchorLabel: 'Reforma de comunidades de vecinos',
    icon: '🏘️',
    headline: 'Zonas comunes, fachadas y portales. Con presupuesto para junta.',
    heroCopy: 'Las obras en zonas comunes tienen que cumplir tres condiciones que raramente van de la mano: un precio que apruebe la junta, un plazo que respete al administrador y unas molestias mínimas para los vecinos. Realizamos reformas de comunidades de vecinos en el Corredor del Henares con presupuesto desglosado listo para junta, coordinación directa con el administrador de fincas y horarios de obra adaptados para que la convivencia no se vea afectada.',
    desc: 'Mantenimiento y obras en escaleras, portales, fachadas, cubiertas e instalaciones comunitarias. Emitimos presupuesto detallado para presentar en junta.',
    body: [
      { type: 'h3', text: 'Qué obras puede acometer tu comunidad: portales, fachadas y cubiertas' },
      { type: 'p',  text: 'Ejecutamos todas las obras de mantenimiento y mejora en zonas comunes del Corredor del Henares: pintura y renovación de portales y escaleras, rehabilitación de fachadas, impermeabilización de cubiertas planas y tejados, reparación de humedades por capilaridad y filtración, actualización de instalaciones comunitarias (electricidad, fontanería, ascensores) y mejoras de accesibilidad. Emitimos presupuesto con memoria descriptiva listo para presentar en junta, y coordinamos directamente con el administrador de fincas durante toda la obra.' },
      { type: 'h3', text: 'Ley de Propiedad Horizontal: qué mayoría necesitas para aprobar la obra en junta' },
      { type: 'p',  text: 'Antes de pedir presupuesto conviene saber con qué mayoría puede aprobarse la obra en junta.' },
      { type: 'h4', text: 'Obras de conservación y mantenimiento' },
      { type: 'p',  text: 'Pintura de portal, reparación de humedades, impermeabilización de cubierta o arreglo de instalaciones necesarias para el buen estado del edificio se aprueban por mayoría simple. La ley permite ejecutarlas sin esperar convocatoria extraordinaria si existe urgencia real.' },
      { type: 'h4', text: 'Obras de mejora y accesibilidad' },
      { type: 'p',  text: 'La reforma completa del portal, la instalación de ascensor o cualquier mejora no urgente requiere el voto favorable de tres quintos de propietarios y cuotas. La instalación de ascensor puede ser exigida por un propietario con movilidad reducida con solo un tercio de los votos si el coste no supera doce mensualidades de cuota ordinaria.' },
      { type: 'h3', text: 'El parque de edificios del Corredor: los problemas más frecuentes en comunidades de vecinos' },
      { type: 'p',  text: 'Los bloques de los años 70 y 80 en Alcalá de Henares, Torrejón de Ardoz y Coslada acumulan tres problemas típicos: cubiertas planas sin impermeabilización actualizada, origen del 80% de las humedades en últimas plantas; portales con revestimientos deteriorados desde la construcción; y ascensores de primera generación que ya no admiten homologación. En Coslada, la humedad por capilaridad en plantas bajas es muy frecuente. Muchos edificios de más de 50 años en estos municipios están pendientes del Informe de Evaluación del Edificio, condición previa para acceder a las ayudas de rehabilitación energética de la Comunidad de Madrid.' },
    ],
    priceFrom: '4.900',
    priceDesc: 'Reforma de portal / escalera',
    processSteps: [
      { title: 'Visita técnica gratuita', desc: 'Inspeccionamos las zonas comunes y elaboramos un informe del estado previo con fotografías.' },
      { title: 'Presupuesto para junta', desc: 'Presupuesto desglosado con memoria descriptiva, listo para presentar en la junta de propietarios.' },
      { title: 'Aprobación y contrato', desc: 'Una vez aprobado en junta, firmamos contrato con plazo y precio cerrado.' },
      { title: 'Ejecución con mínimas molestias', desc: 'Horarios adaptados a los vecinos. Protección de accesos y zonas comunes durante toda la obra.' },
      { title: 'Certificado y garantía', desc: 'Entrega con certificado de obra, documentación para el seguro y garantía de los trabajos ejecutados.' },
    ],
    priceTable: [
      { label: 'Pintura de portal y escalera', price: 'Desde 2.500€', includes: 'Por edificio, según número de plantas' },
      { label: 'Reforma de portal (revestimientos + iluminación LED)', price: 'Desde 4.900€', includes: 'Hasta 10 viviendas' },
      { label: 'Impermeabilización de cubierta', price: 'Desde 45€/m²', includes: 'Con garantía de 10 años' },
      { label: 'Rehabilitación de fachada', price: 'Presupuesto personalizado', includes: 'Según superficie y estado previo' },
    ],
    faqs: [
      {
        q: '¿Trabajáis con administradores de fincas?',
        a: 'Sí. Coordinamos directamente con el administrador de fincas: enviamos la documentación técnica necesaria, asistimos a la junta si se requiere para explicar el presupuesto, y durante la obra reportamos el avance de forma periódica. El administrador y el presidente de la comunidad tienen contacto directo con el jefe de obra.',
      },
      {
        q: '¿Emitís presupuesto para presentar en junta de vecinos?',
        a: 'Sí. Elaboramos presupuesto detallado con memoria descriptiva, fotografías del estado previo, partidas desglosadas por capítulo y planificación de obra. El formato es directamente presentable en junta y facilita la aprobación por parte de los propietarios.',
      },
      {
        q: '¿Cuánto cuesta reformar el portal o la escalera de una comunidad?',
        a: 'Una reforma de pintura de portal y escalera parte de 2.500€. Una reforma completa con cambio de revestimientos, iluminación LED y señalética puede oscilar entre 4.900€ y 15.000€ dependiendo del número de plantas y el estado previo. La impermeabilización de cubierta parte de 45€/m². Emitimos presupuesto gratuito con visita técnica incluida.',
      },
      {
        q: '¿Podéis gestionar obras cubiertas por el seguro de la comunidad?',
        a: 'Sí. Trabajamos habitualmente con las principales aseguradoras de comunidades de vecinos. Emitimos peritaje fotográfico del daño, presupuesto adaptado al formato del seguro y coordinamos con el perito de la aseguradora para la aprobación del expediente.',
      },
      {
        q: '¿Qué obras en zonas comunes necesitan licencia?',
        a: 'Las obras de mantenimiento y conservación (pintura, pequeñas reparaciones, impermeabilización de cubierta) generalmente no necesitan licencia en los municipios del Corredor del Henares. Sí se requiere licencia para cambios en fachada, instalación de ascensor, ampliaciones o modificaciones estructurales. Te asesoramos en la visita técnica.',
      },
      {
        q: '¿Cómo afecta la obra a los vecinos durante la ejecución?',
        a: 'Adaptamos los horarios de trabajo para minimizar las molestias: no empezamos antes de las 8:00h y terminamos antes de las 20:00h en días laborables. Para la fase de mayor ruido informamos con antelación a los vecinos. Protegemos el portal y accesos para que puedan usarse durante toda la obra.',
      },
    ],
  },
];

export const TESTIMONIALS = [
  {
    name: 'Laura G.',
    initials: 'LG',
    role: 'Propietaria',
    city: 'Alcalá de Henares',
    service: 'Reforma integral de piso',
    text: 'Reformaron nuestro piso de 85 m² de principio a fin. Precio cerrado desde el primer día, sin un solo extra. La entrega fue puntual y los acabados exactamente lo que habíamos acordado. Repetiremos sin dudarlo.',
  },
  {
    name: 'Miguel P.',
    initials: 'MP',
    role: 'Propietario',
    city: 'Torrejón de Ardoz',
    service: 'Reforma de cocina y baño',
    text: 'Lo que más me sorprendió fue la coordinación: cada gremio llegó cuando tenía que llegar y no hubo solapamientos. El presupuesto no cambió ni un euro. Muy buena comunicación durante toda la obra.',
  },
  {
    name: 'Carmen V.',
    initials: 'CV',
    role: 'Propietaria',
    city: 'Coslada',
    service: 'Reforma de baño completo',
    text: 'Cambio de bañera por ducha, alicatado nuevo y muebles. Todo en menos de dos semanas. El baño quedó tal y como lo diseñamos en la visita previa. Presupuesto cerrado y equipo muy cuidadoso con el piso.',
  },
  {
    name: 'José M.',
    initials: 'JM',
    role: 'Empresario',
    city: 'San Fernando de Henares',
    service: 'Reforma de local comercial',
    text: 'Reformaron el local y tramitaron la licencia de actividad. Cuando tienes un negocio que depende de abrir en una fecha concreta, el plazo garantizado no es una frase bonita: es lo que necesitas. Lo cumplieron.',
  },
];

// Proyectos antes/después
// imgBefore e imgAfter apuntan a /public/img/proyectos/ -añade tus fotos reales ahí
export const PROJECTS = [
  {
    slug: 'reforma-integral-alcala',
    title: 'Reforma integral de piso',
    location: 'Alcalá de Henares',
    surface: '85 m²',
    duration: '10 semanas',
    service: 'Reforma integral',
    desc: 'Redistribución completa, instalaciones eléctricas y de fontanería nuevas, baño, cocina, suelos de porcelánico y pintura final.',
    imgBefore: '/img/proyectos/reforma-integral-alcala-antes.jpg',
    imgAfter: '/img/proyectos/reforma-integral-alcala-despues.jpg',
  },
  {
    slug: 'cocina-torrejon',
    title: 'Cocina a medida',
    location: 'Torrejón de Ardoz',
    surface: '14 m²',
    duration: '2 semanas',
    service: 'Reforma de cocina',
    desc: 'Cocina nueva con muebles a medida, encimera de silestone, electrodomésticos integrados y alicatado nuevo de gran formato.',
    imgBefore: '/img/proyectos/cocina-torrejon-antes.jpg',
    imgAfter: '/img/proyectos/cocina-torrejon-despues.jpg',
  },
  {
    slug: 'bano-coslada',
    title: 'Baño con ducha de obra',
    location: 'Coslada',
    surface: '6 m²',
    duration: '8 días',
    service: 'Reforma de baño',
    desc: 'Cambio de bañera por ducha de obra, sanitarios nuevos, mampara fija, alicatado y microcemento en suelo.',
    imgBefore: '/img/proyectos/bano-coslada-antes.jpg',
    imgAfter: '/img/proyectos/bano-coslada-despues.jpg',
  },
  {
    slug: 'local-san-fernando',
    title: 'Local comercial',
    location: 'San Fernando de Henares',
    surface: '60 m²',
    duration: '3 semanas',
    service: 'Local comercial',
    desc: 'Transformación de local vacío en espacio comercial. Instalaciones completas y tramitación de licencia de actividad incluidas.',
    imgBefore: '/img/proyectos/local-san-fernando-antes.jpg',
    imgAfter: '/img/proyectos/local-san-fernando-despues.jpg',
  },
];

// ─── SVG icons (Tabler-style, stroke, no fill, aria-hidden) ───────────────
export const SERVICE_ICONS: Record<string, string> = {
  'reformas-integrales': `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>`,
  'reforma-banos':       `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"/></svg>`,
  'reforma-cocinas':     `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M3 11h18M3 6h18M7 6v16M12 6v16M17 6v16"/></svg>`,
  'reforma-pisos':       `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="4" y="2" width="16" height="20" rx="1"/><path d="M9 22V12h6v10"/><path d="M8 7h.01M12 7h.01M16 7h.01M8 11h.01M12 11h.01M16 11h.01"/></svg>`,
  'locales-comerciales': `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M3 9l1-5h16l1 5"/><path d="M3 9a2 2 0 0 0 4 0 2 2 0 0 0 4 0 2 2 0 0 0 4 0 2 2 0 0 0 4 0"/><path d="M5 22V11M19 22V11"/><rect x="8" y="15" width="8" height="7"/></svg>`,
  'comunidades-vecinos': `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/></svg>`,
};

// ─── FAQs para páginas servicio×localidad ─────────────────────────────────
// Preguntas orientadas a la decisión del cliente, answer-first, sin ciudad.
// Se añade dinámicamente 1 FAQ de precio con la localidad en [barrio].astro.
export const LOCATION_FAQS: Record<string, { q: string; a: string }[]> = {
  'reformas-integrales': [
    { q: '¿Qué incluye exactamente una reforma integral?', a: 'Una reforma integral completa abarca demolición y redistribución de tabiques, instalación eléctrica nueva (cuadro, puntos de luz, enchufes), fontanería completa, solados y alicatados, falso techo cuando se requiere, reforma de baño y cocina, carpintería interior, pintura y limpieza final. Un único presupuesto cierra todas las partidas.' },
    { q: '¿Cuánto tiempo hay que dejar la vivienda vacía durante la reforma?', a: 'En una reforma integral lo recomendable es no vivir en la vivienda durante la obra. El polvo, el ruido y los cortes de suministros hacen inviable la convivencia habitual. Si no tienes alternativa, podemos estudiar una ejecución por fases, aunque alarga el plazo total.' },
    { q: '¿Es mejor reformar todo a la vez o ir por fases?', a: 'Si las instalaciones necesitan renovación, hacerlo todo a la vez es siempre más económico: se abre el piso una sola vez, se coordinan los gremios en el mismo periodo y se evita repetir el desescombro. Reformar por fases puede salir un 20–30% más caro en total.' },
    { q: '¿Qué pasa si aparecen problemas ocultos durante la obra?', a: 'Es el riesgo principal de cualquier reforma en vivienda antigua. Por eso incluimos en la visita técnica gratuita una evaluación del estado de las instalaciones antes de cerrar el precio. Si el estado real de las instalaciones se conoce antes de firmar el contrato, el precio cerrado es real.' },
    { q: '¿Quién coordina los diferentes gremios durante la reforma?', a: 'En Trazzo360 trabajamos con equipo propio: albañiles, electricistas, fontaneros, pintores y carpinteros bajo nuestra coordinación directa. No dependes de que un subcontratista aparezca en el momento correcto; nosotros gestionamos toda la secuencia de obra.' },
  ],
  'reforma-banos': [
    { q: '¿Cuánto tarda la reforma de un baño? ¿Me quedo sin baño durante la obra?', a: 'Una reforma completa de baño dura entre 1 y 3 semanas según el alcance. Si solo tienes un baño, lo planificamos para minimizar el tiempo sin servicio: los primeros días de demolición son los más incómodos; después el espacio se va recuperando por fases.' },
    { q: '¿Merece la pena cambiar la fontanería completa al reformar el baño?', a: 'Si las tuberías tienen más de 25–30 años, sí. El coste de hacer la fontanería ahora, con el baño ya abierto, es marginal comparado con tener que abrir el baño de nuevo en pocos años. Un presupuesto que no contempla la fontanería puede quedarse corto en cuanto empiece la obra.' },
    { q: '¿Qué diferencia hay entre cambiar la bañera por ducha y hacer una reforma completa?', a: 'Cambiar la bañera por un plato de ducha sin tocar el alicatado es la intervención más económica: parte de 1.800€ y se hace en 3–5 días. Una reforma completa incluye también el cambio de alicatado, sanitarios, mueble y mampara, y puede durar hasta 3 semanas. Si el alicatado está deteriorado, la reforma completa sale más a cuenta que dos obras separadas.' },
    { q: '¿Cómo se puede ganar espacio en un baño pequeño?', a: 'Las opciones más efectivas son: instalar un plato de ducha en lugar de bañera (ganas entre 20 y 40 cm de espacio libre), usar mueble con lavabo integrado y almacenaje, colocar espejo con botiquín y elegir revestimientos de gran formato que reducen la cantidad de juntas y dan sensación de amplitud.' },
    { q: '¿Puedo elegir yo mismo los materiales y sanitarios?', a: 'Sí. En la visita de diseño te mostramos opciones de alicatados, sanitarios, mamparas y muebles ajustados a tu presupuesto. Puedes elegir tú directamente o dejarnos la selección; en ambos casos el precio queda cerrado antes de empezar la obra.' },
  ],
  'reforma-cocinas': [
    { q: '¿Cuánto tiempo estaré sin poder usar la cocina durante la obra?', a: 'Entre 2 y 4 semanas para una reforma completa. La fase de obra civil (demolición, electricidad, fontanería, alicatado) dura 1–2 semanas; la instalación de muebles y electrodomésticos ocupa la segunda mitad. Si defines materiales y muebles antes de empezar, no hay pausas por espera de suministros.' },
    { q: '¿Qué instalaciones conviene revisar cuando se reforma una cocina?', a: 'La electricidad es la más crítica: el Reglamento Electrotécnico de Baja Tensión exige líneas independientes del cuadro para horno, vitrocerámica, lavavajillas y frigorífico. En viviendas anteriores a 1990, el cuadro rara vez lo cumple. Una instalación deficiente es la causa más frecuente de cortocircuitos en cocinas.' },
    { q: '¿Merece la pena cambiar la distribución de la cocina?', a: 'Depende del espacio disponible. Si la cocina tiene menos de 7 m², cambiar la distribución añade coste sin mejorar mucho el resultado. Con más espacio, reorganizar puede mejorar significativamente el flujo de trabajo y el almacenaje. Te lo valoramos sin compromiso en la visita técnica.' },
    { q: '¿Qué debería tener decidido antes de empezar la reforma?', a: 'Cuanto más definido esté antes de arrancar, mejor se respeta el plazo. Lo mínimo: distribución de muebles, encimera elegida y electrodomésticos seleccionados. Si los materiales no están pedidos cuando termina la obra civil, la espera puede alargar el plazo total 2–3 semanas.' },
    { q: '¿Se puede reformar la cocina y seguir viviendo en casa?', a: 'Sí, aunque los primeros días de demolición generan polvo y ruido. Pasada la fase de obra civil, el espacio es habitable. Muchos clientes permanecen en casa durante la reforma; recomendamos proteger el resto de la vivienda con plásticos y ventilar bien durante las primeras jornadas.' },
  ],
  'reforma-pisos': [
    { q: '¿Cómo sé si necesito una reforma parcial o una integral?', a: 'La clave está en el estado de las instalaciones. Si el cuadro eléctrico es de los años 70–80 o las tuberías ya han dado problemas, la reforma integral es más eficiente: se hace todo a la vez, con el piso abierto una sola vez. Si las instalaciones están en buen estado, suelos, baño, cocina y pintura pueden renovarlo completamente por menos.' },
    { q: '¿Puedo vivir en el piso mientras dura la obra?', a: 'Depende del alcance. En reformas parciales (baño, cocina o suelos por separado) es posible, aunque incómodo. En reformas integrales con demolición general no es recomendable: el polvo y los cortes de suministros hacen inviable la convivencia. Si no tienes alternativa, diseñamos una secuencia de trabajo por zonas.' },
    { q: '¿Cuánto suele costar actualizar un piso sin hacerlo todo?', a: 'Una reforma de alto impacto por debajo de 20.000€ puede incluir: baño completo (3.500€), renovación de cocina media (7.000€), suelos nuevos en toda la vivienda (4.000€) y pintura (2.500€). El resultado es un piso renovado en sus tres espacios más importantes.' },
    { q: '¿Vale la pena reformar el piso para ponerlo en venta o en alquiler?', a: 'En pisos de los años 70–90 en el Corredor del Henares, una reforma de 15.000–20.000€ puede aumentar el precio de venta en 30.000–50.000€ y reducir el tiempo de venta. Para alquiler, la reforma mejora el perfil de inquilino y permite subir la renta. Te orientamos en la visita sobre qué reformas maximizan el retorno.' },
    { q: '¿Qué partes de un piso antiguo son imprescindibles renovar?', a: 'Instalación eléctrica si el cuadro es de antes de 1990, fontanería si hay tuberías de hierro galvanizado o plomo, y carpintería exterior si las ventanas no tienen doble acristalamiento. Estas partidas afectan a la habitabilidad real y a la seguridad, no solo a la estética.' },
  ],
  'locales-comerciales': [
    { q: '¿Cuánto tiempo tardará en estar listo el local para abrir?', a: 'La obra en sí dura entre 3 y 12 semanas según el tamaño y el uso. El elemento que más condiciona la fecha de apertura es la tramitación de la licencia de actividad: en hostelería puede superar los 3 meses en algunos municipios. Por eso conviene arrancar la tramitación en paralelo con la obra, no después.' },
    { q: '¿Qué diferencia hay entre licencia de obras y licencia de actividad?', a: 'Son dos trámites distintos que pueden necesitarse al mismo tiempo. La licencia de obras autoriza los trabajos de construcción. La licencia de actividad autoriza el uso del local para una actividad concreta. Muchos negocios necesitan las dos. Nosotros gestionamos ambas en los ayuntamientos del Corredor del Henares.' },
    { q: '¿Necesito proyecto técnico para reformar mi local?', a: 'Depende del uso y el ayuntamiento. Para actividades clasificadas (hostelería, clínicas, peluquerías, talleres) siempre se requiere proyecto técnico firmado por arquitecto o ingeniero. Para comercio minorista y oficinas sin actividad clasificada, muchos municipios del Corredor aceptan declaración responsable.' },
    { q: '¿Puedo abrir el negocio antes de que llegue la resolución de la licencia?', a: 'En actividades sin licencia clasificada, sí: el régimen de declaración responsable permite iniciar la actividad desde la presentación de la documentación. En hostelería y actividades clasificadas, no: se necesita la resolución favorable antes de abrir. Te informamos del régimen exacto según tu actividad y municipio.' },
    { q: '¿Qué instalaciones son obligatorias en un local comercial?', a: 'Depende del uso, pero en general: alumbrado de emergencia y señalética de evacuación, extintor según superficie, instalación eléctrica con protecciones adecuadas y, en hostelería, campana de extracción y separador de grasas. Todo esto forma parte del proyecto técnico de actividad que incluimos en el presupuesto.' },
  ],
  'comunidades-vecinos': [
    { q: '¿Qué mayoría se necesita en junta para aprobar una obra en zonas comunes?', a: 'Las obras de conservación y mantenimiento (pintura, reparación de humedades, impermeabilización de cubierta) se aprueban por mayoría simple. Las mejoras no urgentes y obras de mayor alcance requieren el voto favorable de tres quintos de propietarios y cuotas. La instalación de ascensor puede ser exigida con solo un tercio de votos en casos de accesibilidad.' },
    { q: '¿Cómo afectará la obra a los vecinos durante la ejecución?', a: 'Adaptamos los horarios de trabajo al horario de uso de las zonas comunes: no empezamos antes de las 8:00h y terminamos antes de las 20:00h en laborables. Para la fase de mayor ruido avisamos con antelación. Los accesos se protegen para que puedan utilizarse durante toda la obra.' },
    { q: '¿Qué obras en zonas comunes necesitan licencia?', a: 'Las obras de mantenimiento y conservación (pintura de portal, impermeabilización de cubierta, pequeñas reparaciones) generalmente no necesitan licencia. Sí se requiere para cambios en fachada, instalación de ascensor, ampliaciones o modificaciones estructurales. Te asesoramos en la visita técnica sobre qué aplica a vuestra obra concreta.' },
    { q: '¿Podéis trabajar con la aseguradora de la comunidad?', a: 'Sí. Elaboramos peritaje fotográfico del daño, presupuesto adaptado al formato del seguro y coordinamos con el perito de la aseguradora para la aprobación del expediente. Trabajamos habitualmente con las principales aseguradoras de comunidades de propietarios.' },
    { q: '¿Emitís presupuesto listo para presentar en junta de propietarios?', a: 'Sí. Elaboramos presupuesto con memoria descriptiva, fotografías del estado previo, partidas desglosadas por capítulo y planificación de obra. El formato está diseñado para presentarse directamente en junta y facilitar la aprobación por parte de los propietarios.' },
  ],
};

// ─── Contenido único por combinación servicio × localidad ─────────────────
// intro: párrafo del hero, específico para cada combinación.
// Se usa en [barrio].astro para reemplazar la concatenación genérica de localAngle.
export const SERVICE_ZONE_CONTENT: Record<string, Record<string, { intro: string }>> = {
  'reformas-integrales': {
    'alcala-de-henares': { intro: 'Si tienes un piso en Alcalá de los años 70 u 80, lo más probable es que encuentres instalaciones eléctricas que ya no dan la talla y distribuciones cerradas que no aprovechan la luz. Antes de decidir el alcance de la reforma conviene saber qué estado real tienen las instalaciones: es la diferencia entre un presupuesto que se cumple y uno que crece a mitad de obra.' },
    'torrejon-de-ardoz':  { intro: 'Los pisos de Torrejón de los años 70 al 90 comparten el mismo punto de partida: cuadros eléctricos insuficientes, tuberías que han dado guerra y distribuciones que no respiran. Una reforma integral bien planificada aquí no empieza eligiendo el suelo; empieza evaluando qué instalaciones hay que renovar para que el precio del primer día sea el precio de entrega.' },
    'coslada':            { intro: 'En Coslada, el parque de pisos de los 80 y 90 genera una demanda muy concreta: actualizar viviendas que funcionan pero que acusan el paso del tiempo en instalaciones, distribuciones y acabados. La humedad por capilaridad en plantas bajas es habitual en algunos bloques y conviene evaluarla antes de cerrar el alcance de la obra.' },
    'san-fernando-de-henares': { intro: 'San Fernando de Henares tiene viviendas de épocas muy distintas: pisos anteriores a los 90 en el casco y promociones más recientes en Parque Roma y Parque Henares. El alcance real de una reforma integral varía mucho según la época de construcción, y el estado del cuadro eléctrico y la fontanería es lo que más condiciona el presupuesto final.' },
    'guadalajara':        { intro: 'Reformar un piso en Guadalajara tiene una ventaja concreta: la tramitación de licencias de obra menor suele ser más ágil que en los municipios madrileños del Corredor. Si el piso está en El Balconcillo o Aguas Vivas y fue construido en los años 70 o 90, lo habitual es encontrar instalaciones que conviene renovar de manera completa.' },
    'azuqueca-de-henares': { intro: 'En Azuqueca, el parque residencial es mayoritariamente de los años 90, lo que significa instalaciones algo más modernas que en otros municipios del Corredor pero con acabados que ya acumulan tres décadas de uso. La reforma integral aquí suele tener menos sorpresas en instalaciones y más margen para invertir en distribución y calidad de acabados.' },
    'meco':               { intro: 'En Meco predominan los adosados y unifamiliares de urbanización, lo que cambia completamente el enfoque de una reforma integral: hay más metros, posibilidad de ganar espacio con cerramientos o terrazas, y habitualmente hay cubierta que revisar. Antes de cerrar el alcance conviene saber si la cubierta necesita intervención.' },
    'camarma-de-esteruelas': { intro: 'Camarma de Esteruelas tiene un parque residencial mayoritariamente de vivienda unifamiliar, con proyectos de reforma integral que a menudo incluyen redistribución completa de planta, mejoras en el cerramiento y actualización de instalaciones. Aquí el punto de partida suele ser la vivienda como conjunto, no solo el interior.' },
  },
  'reforma-banos': {
    'alcala-de-henares': { intro: 'Los baños de los pisos de Alcalá de los años 70 y 80 tienen un perfil común: bañera de porcelana sin usar, azulejos de 15×15 con juntas ennegrecidas y ventilación deficiente. La primera decisión no es el color del alicatado: es si tiene sentido cambiar solo la bañera o aprovechar para hacer la reforma completa.' },
    'torrejon-de-ardoz':  { intro: 'En Torrejón, la reforma de baño más habitual es el cambio de bañera por plato de ducha con alicatado nuevo. Si el baño tiene más de 20 años, suele merecer la pena evaluar también la fontanería: hacerlo todo en una sola obra es más económico y menos disruptivo que abrir el baño dos veces.' },
    'coslada':            { intro: 'Los baños de los bloques de Coslada de los 80 y 90 pueden concentrar un problema añadido: si hay humedades en el edificio, el baño suele ser el foco. Antes de cerrar el presupuesto conviene revisar el estado de la impermeabilización y la fontanería oculta, especialmente en plantas bajas y bajo otros baños.' },
    'san-fernando-de-henares': { intro: 'En el casco antiguo de San Fernando, los baños más viejos necesitan fontanería nueva además de los acabados. En las promociones recientes de Parque Roma o Parque Henares, la reforma suele limitarse a actualizar materiales y cambiar la distribución. La visita técnica determina qué alcance corresponde a tu caso.' },
    'guadalajara':        { intro: 'Los baños de los pisos del Balconcillo y Aguas Vivas en Guadalajara, construidos entre los 70 y los 90, necesitan casi siempre fontanería nueva además de los acabados. Una reforma completa aquí tiene valor técnico real y no solo estético: evita problemas futuros de humedades y filtraciones.' },
    'azuqueca-de-henares': { intro: 'En Azuqueca, donde el parque residencial es mayoritariamente de los años 90, los baños suelen estar más actualizados que en otros municipios del Corredor. La reforma típica aquí es de modernización: cambiar la distribución, ampliar la ducha o mejorar el almacenaje, más que renovar instalaciones de fondo.' },
    'meco':               { intro: 'En las viviendas unifamiliares de Meco, los baños suelen ser más amplios que en los pisos de bloque, lo que abre opciones adicionales: duchas de obra a medida, doble lavabo o más espacio de almacenaje. Si hay más de un baño en la vivienda, conviene definir qué alcance tiene sentido en cada uno antes de presupuestar.' },
    'camarma-de-esteruelas': { intro: 'En Camarma, con predominio de viviendas unifamiliares, los baños principales tienen a menudo dimensiones que permiten diseñar la distribución desde cero. Si el baño lleva más de 15 años sin tocarse, la reforma completa suele ser más eficiente que actuar por partes.' },
  },
  'reforma-cocinas': {
    'alcala-de-henares': { intro: 'Las cocinas cerradas de 6 a 9 metros cuadrados con muebles de formica son el punto de partida habitual en los pisos de Alcalá de los años 80. La primera decisión no es qué muebles elegir: es si mantener la distribución actual o aprovechar para abrir la cocina al salón, porque esa decisión condiciona el presupuesto, el plazo y la necesidad de licencia.' },
    'torrejon-de-ardoz':  { intro: 'En Torrejón, los pisos de los 80 tienen cocinas que a menudo combinan instalación eléctrica sin circuitos dedicados con una distribución que no permite cocinar cómodamente. Si tienes cortocircuitos cuando usas varios electrodomésticos a la vez, la instalación eléctrica nueva no es opcional en una reforma de cocina.' },
    'coslada':            { intro: 'Reformar la cocina en un piso de Coslada de los 80 significa casi siempre hacer electricidad nueva con circuitos dedicados. La instalación original no estaba pensada para el consumo actual y es la causa más frecuente de problemas eléctricos. La reforma completa resuelve el fondo del problema, no solo la estética.' },
    'san-fernando-de-henares': { intro: 'Las cocinas del casco antiguo de San Fernando necesitan instalaciones nuevas. Las de Parque Roma y Parque Henares, más recientes, suelen tener mejores instalaciones pero distribuciones que no aprovechan bien el espacio. Dependiendo de dónde esté tu vivienda, el presupuesto y el alcance pueden ser muy distintos.' },
    'guadalajara':        { intro: 'En Guadalajara, la demanda más habitual es abrir la cocina al salón combinado con muebles nuevos: una obra que cambia completamente la percepción del espacio y, con buena planificación, se completa en 3 a 5 semanas. Los pisos del Balconcillo y Aguas Vivas tienen cocinas cerradas que se prestan bien a esta transformación.' },
    'azuqueca-de-henares': { intro: 'En Azuqueca, el parque de pisos de los 90 tiene cocinas con instalaciones algo más modernas, pero con muebles y encimeras que ya han cumplido su vida útil. La reforma típica aquí es de actualización: muebles nuevos, encimera, electrodomésticos y alicatado, sin necesariamente tocar la fontanería completa.' },
    'meco':               { intro: 'En los adosados de Meco, las cocinas suelen tener más espacio que en los pisos de bloque, lo que abre opciones de distribución inaccesibles en cocinas de 7 metros cuadrados: islas, cocinas americanas o zonas de almacenaje independientes. Con espacio disponible, la primera decisión es la distribución, no los materiales.' },
    'camarma-de-esteruelas': { intro: 'Las viviendas unifamiliares de Camarma suelen tener cocinas amplias que en muchos casos llevan más de una década sin renovar. Una reforma de cocina aquí permite repensar el espacio con criterio: qué se puede ganar en almacenaje, cómo mejorar el flujo de trabajo y si tiene sentido integrarla mejor con el comedor o el espacio de uso diario.' },
  },
  'reforma-pisos': {
    'alcala-de-henares': { intro: 'Los pisos de Alcalá de los 70 y 80 tienen distribuciones que nacieron en otra época: pasillos largos, habitaciones pequeñas, cocinas cerradas y salones que no aprovechan la luz. La pregunta no es solo cuánto cuesta reformarlo, sino qué parte tiene más sentido intervenir con tu presupuesto actual.' },
    'torrejon-de-ardoz':  { intro: 'En Torrejón, la duda más frecuente antes de reformar es si hacerlo todo a la vez o por fases. La respuesta depende del estado de las instalaciones: si el cuadro y la fontanería están al límite, reformar de una vez sale significativamente más barato que abrir el piso en dos obras.' },
    'coslada':            { intro: 'Reformar un piso en Coslada tiene una variable que conviene evaluar desde el principio: las humedades. Los edificios de los 80 en zonas como Valleaguado y Ciudad 70 concentran problemas de capilaridad en plantas bajas. Conocer el estado real antes de cerrar el presupuesto evita sorpresas a mitad de obra.' },
    'san-fernando-de-henares': { intro: 'San Fernando de Henares tiene una particularidad: los pisos del casco antiguo y los de las promociones recientes en Parque Roma o Parque Henares son proyectos muy distintos. En los primeros, el alcance suele incluir instalaciones; en los segundos puede bastar con actualizar acabados y distribución.' },
    'guadalajara':        { intro: 'En Guadalajara, el cambio de carpintería exterior a PVC con doble acristalamiento es una de las inversiones con mejor retorno en reformas de piso: el clima continental hace que el ahorro en calefacción sea muy tangible. Si las ventanas son originales de los años 80, conviene incluirlas en la reforma.' },
    'azuqueca-de-henares': { intro: 'Los pisos de Azuqueca de los años 90 tienen instalaciones más modernas que las de los 80, pero con acabados que ya acusan el paso del tiempo. La reforma aquí suele concentrarse en suelos, carpintería interior, baño y cocina, sin necesariamente tocar la instalación eléctrica si está en buen estado.' },
    'meco':               { intro: 'En Meco, con predominio de adosados y unifamiliares, reformar el piso tiene un significado distinto: hay más metros a gestionar, puede haber terraza o jardín, y la distribución suele ser de dos plantas. La pregunta habitual es en qué orden actuar para no tener la casa patas arriba más tiempo del necesario.' },
    'camarma-de-esteruelas': { intro: 'Las viviendas de Camarma son en su mayoría unifamiliares de una o dos plantas. Una reforma aquí suele incluir partidas que no aparecen en pisos de bloque: cubierta, cerramiento de terraza, garaje o zonas exteriores. Definir prioridades antes de presupuestar evita abrir más frentes de los que el presupuesto puede cubrir.' },
  },
  'locales-comerciales': {
    'alcala-de-henares': { intro: 'Abrir un negocio en Alcalá implica tramitar la licencia de actividad antes de inaugurar, y en hostelería los plazos pueden superar los tres meses. La clave es arrancar la tramitación en paralelo con la obra desde el primer día: esperar a terminar la reforma para presentar la licencia puede retrasar la apertura varios meses.' },
    'torrejon-de-ardoz':  { intro: 'En Torrejón, los plazos de tramitación son comparativamente más ágiles que en Alcalá para muchos tipos de actividad. Si el local está en polígono, el alcance de la obra puede variar mucho según si parte de cero o tiene instalaciones previas aprovechables. La visita técnica lo determina desde el primer día.' },
    'coslada':            { intro: 'El tejido empresarial de Coslada tiene una fuerte presencia en logística y distribución, pero también hostelería y comercio en el núcleo urbano. Los locales en zonas de polígono parten a menudo de espacios diáfanos que necesitan instalación completa desde cero. En hostelería, la tramitación de licencia es lo que más condiciona la fecha de apertura.' },
    'san-fernando-de-henares': { intro: 'San Fernando de Henares tiene zona industrial activa y comercio urbano concentrado en el centro. Si el local está en zona industrial, el alcance suele ser mayor pero los plazos de tramitación más predecibles. Si es comercio o clínica en el casco, el tipo de uso determina el régimen de licencia.' },
    'guadalajara':        { intro: 'Guadalajara tiene una ventaja concreta para quien quiere abrir un negocio: la tramitación de licencias de actividad es generalmente más ágil que en los municipios madrileños del Corredor, lo que permite planificar la apertura con mayor certeza. El alcance de la obra depende del uso previsto y del estado previo del local.' },
    'azuqueca-de-henares': { intro: 'En Azuqueca, la demanda de reforma de locales se concentra principalmente en comercio minorista, hostelería y pequeños talleres. Para actividades sin licencia clasificada, el régimen de declaración responsable permite iniciar la actividad de forma más rápida. Conviene consultarlo antes de planificar los plazos de apertura.' },
    'meco':               { intro: 'Meco tiene una actividad empresarial creciente, con locales en el casco y naves en el polígono industrial. En locales pequeños de comercio, la tramitación suele ser sencilla. En naves o usos industriales, los requisitos técnicos condicionan tanto el coste como el plazo. La visita determina qué aplica a tu caso.' },
    'camarma-de-esteruelas': { intro: 'En Camarma el tejido comercial es limitado, pero hay demanda de adecuación de locales para usos de proximidad: comercios, consultorios y oficinas. Los plazos de tramitación en un municipio pequeño suelen ser más predecibles. Antes de comprometerte con una fecha de apertura, conviene confirmar el plazo exacto para tu tipo de actividad.' },
  },
  'comunidades-vecinos': {
    'alcala-de-henares': { intro: 'Las comunidades de Alcalá con edificios de los 70 y 80 acumulan problemas pendientes: portales con revestimientos originales deteriorados, cubiertas sin impermeabilización actualizada y ascensores de primera generación. La dificultad no está en encontrar presupuesto, sino en conseguir la mayoría en junta y organizar la obra con las mínimas molestias.' },
    'torrejon-de-ardoz':  { intro: 'En Torrejón, muchos edificios de los 70 y 80 están pendientes del Informe de Evaluación del Edificio, condición previa para acceder a las ayudas de rehabilitación de la Comunidad de Madrid. Si tu comunidad está en esa situación, tiene sentido plantear la obra teniendo en cuenta ese acceso a ayudas desde el principio.' },
    'coslada':            { intro: 'Los edificios de Coslada concentran un problema específico: humedades por capilaridad en plantas bajas, frecuentes en zonas como Valleaguado y Ciudad 70. Es una de las obras que más se aprueban en junta porque el daño es visible. Hacerla bien desde el primer día evita recurrencias que terminan siendo más caras.' },
    'san-fernando-de-henares': { intro: 'Las comunidades de San Fernando de los 80 y 90 acumulan necesidades de mantenimiento: portales, cubiertas y, en algunos casos, mejoras de accesibilidad. En los edificios más nuevos de Parque Roma y Parque Henares, las actuaciones suelen ser de mejora más que de urgencia. El tipo de obra condiciona la mayoría necesaria en junta.' },
    'guadalajara':        { intro: 'Las comunidades de Guadalajara del casco histórico y las primeras promociones del Balconcillo y Aguas Vivas tienen necesidades similares a las de los municipios madrileños del Corredor: fachadas, cubiertas y portales sin intervenir desde la construcción. La ventaja es que la tramitación de permisos suele ser más ágil.' },
    'azuqueca-de-henares': { intro: 'Las comunidades de Azuqueca son en su mayoría edificios compactos de 4 a 8 plantas construidos en los años 90. Los problemas más frecuentes son de mantenimiento de zonas comunes: pintura de portal, iluminación y pequeñas reparaciones de fachada. Para obras de mayor alcance, la documentación para junta es el primer paso.' },
    'meco':               { intro: 'En Meco, con predominio de adosados y unifamiliares en urbanización, las obras de comunidad tienen un carácter diferente: viales interiores, zonas verdes, cercas perimetrales y elementos comunitarios de urbanización. El tipo de obra y la estructura de la comunidad determinan qué trámites son necesarios.' },
    'camarma-de-esteruelas': { intro: 'Las comunidades de Camarma son en su mayoría pequeñas, con pocos propietarios por edificio o urbanización. Las decisiones en junta suelen tomarse con mayor rapidez que en grandes comunidades urbanas. Los trabajos más habituales son de conservación: viales, zonas comunes exteriores y elementos de fachada.' },
  },
};

export const ZONES = [
  {
    slug: 'alcala-de-henares',
    name: 'Alcalá de Henares',
    primary: true,
    province: 'Madrid',
    desc: 'Nuestra sede central. Más de 10 años reformando pisos, chalets y locales en Alcalá y sus barrios.',
    localAngle: 'es una ciudad con gran parque de edificios de los años 70 y 80 en barrios como El Val, Barrio del Pilar y Reyes Católicos, donde la demanda de actualización de instalaciones eléctricas, fontanería y acabados es muy elevada',
    neighborhoods: ['Casco Histórico', 'Nueva Alcalá', 'Reyes Católicos', 'El Val', 'Barrio del Pilar', 'Ensanche', 'La Garena', 'Espartales'],
  },
  {
    slug: 'torrejon-de-ardoz',
    name: 'Torrejón de Ardoz',
    primary: true,
    province: 'Madrid',
    desc: 'Segunda ciudad del Corredor. Equipo habitual en toda la zona de Torrejón y alrededores.',
    localAngle: 'cuenta con una alta concentración de bloques de los años 70 y 90 en barrios como Soto del Henares, Parque Cataluña y Las Veredillas, donde los propietarios buscan modernizar distribuciones anticuadas y renovar baños y cocinas',
    neighborhoods: ['Centro', 'Casco Antiguo', 'Soto del Henares', 'Parque Cataluña', 'Las Veredillas', 'San José', 'Fronteras', 'Cobos'],
  },
  {
    slug: 'coslada',
    name: 'Coslada',
    primary: true,
    province: 'Madrid',
    desc: 'Reformas en Coslada con profesionales de confianza. Presupuesto gratis en 24h.',
    localAngle: 'tiene un tejido residencial denso con pisos de los 80 y 90 en zonas como Valleaguado, Ciudad 70 y Ciudad San Pablo, donde los proyectos más habituales combinan reforma de baño, renovación de fontanería y mejora de la eficiencia energética',
    neighborhoods: ['Valleaguado', 'Ciudad 70', 'Ciudad San Pablo', 'Barrio del Puerto', 'Barrio de la Estación', 'El Esparragal', 'La Colina', 'Casco (Pueblo)'],
  },
  {
    slug: 'san-fernando-de-henares',
    name: 'San Fernando de Henares',
    primary: true,
    province: 'Madrid',
    desc: 'Reformas integrales y parciales en San Fernando de Henares.',
    localAngle: 'combina vivienda histórica en el casco urbano con nuevas promociones en Parque Roma y Parque Henares, generando una demanda diversa que va desde la renovación completa de pisos antiguos hasta la personalización de acabados en viviendas recientes',
    neighborhoods: ['Centro', 'Parque Roma', 'Montserrat', 'Parque Henares', 'Fuencasa'],
  },
  {
    slug: 'guadalajara',
    name: 'Guadalajara',
    primary: false,
    province: 'Guadalajara',
    desc: 'También operamos en Guadalajara capital y su entorno.',
    localAngle: 'es la capital provincial con un importante parque de vivienda de los 70 y 90 en el Balconcillo y Aguas Vivas, donde la sustitución de instalaciones obsoletas y la mejora del aislamiento térmico son las reformas más solicitadas',
    neighborhoods: ['Casco Histórico', 'El Balconcillo', 'Aguas Vivas', 'El Alamín', 'Los Manantiales', 'Estación', 'Los Valles'],
  },
  {
    slug: 'azuqueca-de-henares',
    name: 'Azuqueca de Henares',
    primary: false,
    province: 'Guadalajara',
    desc: 'Reformas en Azuqueca de Henares y alrededores.',
    localAngle: 'pertenece a la provincia de Guadalajara y tiene un núcleo residencial compacto donde el cambio de baño y cocina es la actuación más frecuente entre propietarios de pisos adquiridos en los años 90',
    neighborhoods: ['Centro', 'El Vallejo', 'La Paloma', 'Bulevar - Plaza Castilla', 'La Estación', 'La Quebradilla', 'Vallehermoso', 'Postas'],
  },
  {
    slug: 'meco',
    name: 'Meco',
    primary: false,
    province: 'Madrid',
    desc: 'Cubrimos Meco y municipios próximos.',
    localAngle: 'es un municipio residencial con alta proporción de viviendas unifamiliares y adosados en urbanizaciones, donde el cerramiento de terrazas, la reforma de cocina y la renovación de baños son las actuaciones más demandadas',
    neighborhoods: ['Casco Antiguo', 'Escritores', 'Pintores', 'Ciudad de la Luz', 'Belvalle', 'Los Ríos', 'Europa', 'Barrio Alto'],
  },
  {
    slug: 'camarma-de-esteruelas',
    name: 'Camarma de Esteruelas',
    primary: false,
    province: 'Madrid',
    desc: 'Reformas en Camarma de Esteruelas.',
    localAngle: 'es un municipio con predominio de viviendas unifamiliares y adosados, donde los proyectos de reforma integral y ampliación de estancias son los más demandados por familias que llevan más de una década en la zona',
    neighborhoods: ['Casco Urbano', 'Urb. Nueva Camarma', 'Urb. El Practicante', 'Gran Vía'],
  },
];
