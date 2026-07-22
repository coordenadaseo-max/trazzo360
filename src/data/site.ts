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
      'Reformamos tu piso, ático, dúplex o chalé de arriba a abajo en el Corredor del Henares. Ejecutamos proyectos completos de renovación y rehabilitación integral: derribo de tabiques, redistribución de espacios, instalación eléctrica nueva, fontanería completa, solados de porcelánico o tarima flotante, falso techo, reforma de baño y cocina, carpintería interior y pintura final. Precio cerrado desde el primer día, sin sorpresas.',
      'Una reforma integral incluye desde el primer derribo hasta la entrega llave en mano: gestión de licencias, coordinación de todos los gremios (albañiles, electricistas, fontaneros, pintores y carpinteros) y suministro de materiales de calidad contrastada. No subcontratamos: todo lo ejecuta nuestro equipo propio, lo que nos permite controlar cada fase y cumplir el plazo acordado en el contrato.',
      'El Corredor del Henares concentra una alta proporción de viviendas de los años 70, 80 y 90 con distribuciones anticuadas, instalaciones eléctricas obsoletas y acabados desgastados: paredes con gotelé, ventanas antiguas, suelos deteriorados. Somos especialistas en este tipo de rehabilitación: modernizamos la distribución, renovamos todas las instalaciones y actualizamos los acabados con un resultado de nueva construcción.',
      'La normativa que afecta a una reforma integral en la Comunidad de Madrid depende del alcance de la obra. La pintura, el cambio de suelos o la sustitución de sanitarios sin tocar instalaciones comunes son obras menores que no necesitan licencia en los municipios del Corredor del Henares. En cuanto el proyecto incluye derribo de tabiques, cambio de ventanas en fachada o modificación de instalaciones eléctricas o de fontanería, se requiere licencia de obra menor en el ayuntamiento correspondiente. Para derribos que afecten a muros de carga o pilares, es obligatorio un proyecto firmado por arquitecto técnico. En Trazzo360 realizamos la valoración del alcance en la visita gratuita y te informamos exactamente qué trámites necesitas antes de firmar el contrato.',
      'En los municipios del Corredor hay particularidades que condicionan los trabajos. En Alcalá de Henares, barrios como El Val o Reyes Católicos concentran bloques de los años 70 y 80 donde los cuadros eléctricos de 2,3 kW son insuficientes para el uso actual y la fontanería suele ser de hierro galvanizado: dos partidas que siempre incluimos en el presupuesto de reforma integral. En Torrejón de Ardoz y Coslada predominan pisos de los años 90 con distribuciones más modernas pero acabados deteriorados que permiten una reforma de menor coste al conservar las instalaciones. En Guadalajara y Azuqueca de Henares, el cambio de carpintería exterior a PVC con doble acristalamiento y rotura de puente térmico es especialmente rentable dado el clima continental de la zona.',
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
      'Reformamos tu baño completo en el Corredor del Henares, desde una renovación parcial hasta una actualización integral, con precio cerrado y entrega en 1 a 3 semanas. Nos encargamos de todo: cambio de bañera por plato de ducha, alicatado y solado nuevo, sanitarios (inodoro, lavabo), fontanería, mampara, grifería, mueble de baño e iluminación LED. Sin sorpresas en el precio final.',
      'El servicio más solicitado es el cambio de bañera por plato de ducha, especialmente en viviendas de los años 70–90 con bañeras de porcelana deterioradas y azulejos desfasados. También ejecutamos reformas completas con cambio de distribución, reformas de aseos, y soluciones de reforma rápida sin obra pesada (cambio de sanitarios y mueble sin tocar azulejos).',
      'Incluimos siempre impermeabilización de suelo y primer metro de pared, suministro y colocación de todos los materiales, gestión de escombros y limpieza final. Si el baño tiene humedades previas o problemas de fontanería, los detectamos y presupuestamos en la visita técnica gratuita antes de comenzar.',
      'Las reformas de baño que no afectan a instalaciones comunes del edificio ni a la estructura son obras menores sin licencia en todos los municipios del Corredor del Henares. En algunos ayuntamientos se requiere comunicación previa de obra menor, un trámite del que nos encargamos nosotros. Los baños de viviendas construidas antes de 1990 presentan con frecuencia tuberías de cobre o hierro galvanizado en estado variable y presiones de agua irregulares que detectamos y resolvemos durante la reforma. La impermeabilización de suelo y primer metro de pared es siempre obligatoria en nuestras ejecuciones, independientemente del estado previo.',
      'Los baños de los bloques de los años 70 y 80 que predominan en Alcalá de Henares, Torrejón de Ardoz y Coslada tienen características comunes: superficies de entre 3 y 5 metros cuadrados, bañeras de porcelana de 170 cm, azulejos de 15x15 cm en tonos beige o marrón y ventilación forzada a través de un conducto comunitario. En viviendas más recientes de los años 90 en San Fernando de Henares o Azuqueca de Henares, los baños son algo más amplios y el servicio más solicitado es la actualización de mueble, mampara y grifería sin cambio de alicatado. En chalets y adosados de Meco o Camarma de Esteruelas, donde los baños superan habitualmente los 6 metros cuadrados, ejecutamos duchas de obra a medida con plato de resina o microcemento.',
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
      'Reformamos tu cocina de principio a fin en el Corredor del Henares: muebles a medida o de catálogo, encimeras de silestone, granito, porcelana o laminado, electrodomésticos integrados, campana extractora, fregadero, grifería, fontanería, electricidad con circuitos dedicados, alicatado de zona de trabajo y pintura. Precio cerrado, un único interlocutor.',
      'Diseñamos cocinas en L, en U, en línea, americanas o con isla según tu espacio. Para cocinas pequeñas somos especialistas en optimizar cada centímetro con muebles hasta el techo, electrodomésticos integrados y encimeras que maximizan la funcionalidad. Si quieres abrir la cocina al salón (cocina americana), gestionamos el derribo de tabiques y el proyecto técnico.',
      'Si no quieres una obra grande, también realizamos reformas de cocina sin obras pesadas: cambio de muebles y frentes sobre la distribución actual, sustitución de encimera de silestone, renovación de grifería e iluminación con el alicatado existente. Son soluciones que renuevan completamente el aspecto de la cocina en 3 a 5 días.',
      'Las reformas de cocina requieren instalación eléctrica con circuitos independientes según el Reglamento Electrotécnico de Baja Tensión: horno, vitrocerámica, lavavajillas y frigorífico necesitan líneas separadas para evitar sobrecargas. En cocinas de viviendas anteriores a 1990 en el Corredor del Henares, el cuadro eléctrico no suele cumplir este requisito, por lo que la instalación eléctrica nueva es casi siempre parte del presupuesto. Si la reforma incluye abrir la cocina al salón mediante derribo de tabique, se necesita licencia de obra menor en el ayuntamiento, un trámite que gestionamos nosotros antes del inicio de la obra.',
      'Las cocinas cerradas de entre 6 y 9 metros cuadrados son el modelo predominante en los bloques de Alcalá de Henares, Torrejón de Ardoz y Coslada construidos en los años 70 y 80. Muebles de formica y encimera de granito oscuro son el punto de partida habitual de nuestras reformas: los sustituimos por muebles laminados o lacados en mate, encimera de silestone o porcelana de gran formato y electrodomésticos integrados. En los pisos de los años 90 de San Fernando de Henares o Azuqueca de Henares, las cocinas son algo más amplias y permiten distribuciones en U o con barra americana. En adosados y chalets de Meco y Camarma de Esteruelas, donde el espacio no es un limitante, diseñamos cocinas abiertas al salón con isla central que transforman la forma de usar la vivienda.',
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
      'Reformamos pisos, áticos, dúplex, chalés unifamiliares y adosados en el Corredor del Henares. Realizamos desde renovaciones parciales de alto impacto (suelos nuevos de porcelánico o tarima flotante, pintura y carpintería) hasta rehabilitaciones integrales con redistribución completa de tabiques, cuadro eléctrico y fontanería nuevos, ventanas de PVC y acabados a medida.',
      'Trabajamos especialmente en viviendas de los años 70, 80 y 90 con distribuciones cerradas, paredes con gotelé, instalaciones eléctricas obsoletas y fontanería deteriorada. Modernizamos la distribución abriendo espacios, actualizamos todas las instalaciones y renovamos los acabados. El resultado es una vivienda completamente actualizada que aumenta su valor de mercado y su habitabilidad.',
      'Presupuestamos por separado cada partida para que puedas priorizar. Con 20.000€ puedes abordar baño nuevo (3.500-4.500€), cocina completa (7.000-9.000€), suelos en toda la vivienda (4.000-5.000€) y pintura general (3.500€): un resultado completamente renovado en los espacios de mayor impacto sin necesidad de una reforma integral desde cero.',
      'Conocer la normativa antes de iniciar la obra evita sorpresas en el Ayuntamiento. El cambio de ventanas en fachada requiere licencia de obra menor en todos los municipios del Corredor del Henares, con un plazo de tramitación de entre 2 y 4 semanas. El derribo de tabiques de distribución no necesita licencia pero sí comunicación previa en algunos municipios. El derribo de muros de carga o pilares exige proyecto de arquitecto técnico. Los edificios de más de 50 años construidos en los años 70 en Alcalá, Torrejón o Coslada pueden estar sujetos al Informe de Evaluación del Edificio, un requisito de la Comunidad de Madrid que conviene verificar antes de acometer cambios en fachada.',
      'La zona del Corredor concentra una tipología de vivienda que condiciona el coste y el alcance de las reformas. En Alcalá de Henares y Torrejón de Ardoz, los pisos de 70 a 90 metros cuadrados de los años 80 son el proyecto más habitual: suelos de terrazo hidráulico, paredes con gotelé, ventanas de aluminio sin rotura de puente térmico y cuadros eléctricos sin diferencial actualizado. En Coslada y San Fernando de Henares predominan pisos de los años 90 de menor superficie pero con instalaciones en mejor estado que reducen el coste de la reforma. En Guadalajara y Azuqueca de Henares, el clima continental hace especialmente rentable el cambio de carpintería a PVC con doble acristalamiento. En Meco y Camarma de Esteruelas, donde predominan adosados y unifamiliares, los proyectos incluyen con frecuencia cerramiento de terrazas, reforma de cubiertas y redistribución de plantas.',
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
      'Reformamos y acondicionamos locales comerciales, restaurantes, cafeterías, oficinas, clínicas, peluquerías y farmacias en el Corredor del Henares. Realizamos el acondicionamiento integral: vaciado y desescombro, instalación eléctrica completa (cuadro, circuitos, alumbrado de emergencia, señalética), fontanería, climatización, divisiones de pladur, suelos, techos técnicos, pintura, carpintería y rotulación.',
      'Tramitamos la licencia de actividad y la licencia de obras en el ayuntamiento correspondiente del Corredor. Para actividades clasificadas (hostelería, clínicas, talleres) elaboramos el proyecto técnico de actividad con arquitecto técnico colaborador. Si el local requiere declaración responsable de actividad o comunicación previa, lo gestionamos en su totalidad para que no tengas que preocuparte de burocracia.',
      'Cuando tu negocio depende de abrir en una fecha concreta, el plazo de obra no es negociable. Fijamos la fecha de entrega en el contrato y la cumplimos. Presupuestamos por partidas separadas para facilitar la justificación fiscal de la inversión, y si la reforma la financia la propiedad del local, coordinamos directamente con el arrendador.',
      'La tramitación de la licencia de actividad varía según el municipio y el tipo de negocio. En Alcalá de Henares, la apertura de un establecimiento de hostelería requiere proyecto técnico completo y puede tardar entre 6 semanas y 3 meses. En Torrejón de Ardoz y Coslada, los comercios minoristas sin actividad clasificada pueden acogerse al régimen de declaración responsable, lo que permite iniciar la actividad en cuanto se presenta la documentación. Para clínicas, talleres o locales con instalación de gas, el proceso es similar en todos los municipios del Corredor y exige proyecto técnico firmado. Nosotros elaboramos el proyecto, presentamos la documentación en el Ayuntamiento y hacemos el seguimiento hasta el certificado de actividad.',
      'En el Corredor del Henares conviven distintos tipos de locales según el municipio. En el casco urbano de Alcalá de Henares, los locales en planta baja de edificios residenciales tienen alturas de entre 2,80 y 3,20 metros y superficies de 40 a 100 metros cuadrados, adecuados para comercio, clínicas y oficinas. En las zonas logísticas y polígonos de Torrejón de Ardoz, Coslada y San Fernando de Henares, transformamos naves industriales diáfanas de 200 a 1.000 metros cuadrados en espacios de venta o servicios con climatización, carga eléctrica reforzada y particiones de pladur. En Guadalajara capital, los plazos de tramitación de licencias son comparativamente más ágiles que en los municipios madrileños del Corredor, lo que facilita la apertura de nuevos negocios en plazos ajustados.',
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
      'Realizamos reformas y obras de mantenimiento en zonas comunes de comunidades de vecinos en el Corredor del Henares: pintura y renovación de portales y escaleras, rehabilitación de fachadas, impermeabilización de cubiertas y tejados, reparación de humedades, actualización de instalaciones comunitarias (electricidad, fontanería, ascensores) y mejoras de accesibilidad.',
      'Elaboramos presupuesto detallado con memoria descriptiva y desglose por partidas, en formato listo para presentar en junta de propietarios. Coordinamos directamente con el administrador de fincas: asistimos a la junta si se requiere, reportamos el avance de la obra de forma periódica y adaptamos los horarios para minimizar las molestias a los vecinos (inicio no antes de las 8h, fin antes de las 20h).',
      'Trabajamos habitualmente con las principales aseguradoras de comunidades de vecinos: emitimos peritaje fotográfico del daño, presupuesto adaptado al formato del seguro y coordinamos con el perito para la aprobación del expediente. Si la obra genera derramas, acompañamos al administrador en la documentación para que la aprobación en junta sea lo más ágil posible.',
      'La aprobación de obras en comunidades de vecinos está regulada por la Ley de Propiedad Horizontal. Las obras de conservación y mantenimiento necesarias para el buen estado del edificio, como pintura de portal, reparación de humedades o impermeabilización de cubierta, se aprueban por mayoría simple. Las obras de mejora no urgentes, como la reforma completa del portal o la instalación de ascensor, requieren el voto favorable de tres quintos de propietarios y cuotas. Cuando el edificio tiene más de 50 años puede estar acogido al plan de rehabilitación de la Comunidad de Madrid, con ayudas para rehabilitación energética de fachadas y cubiertas. Elaboramos el presupuesto con el desglose y la memoria técnica necesarios para solicitar estas subvenciones cuando el proyecto lo permite.',
      'Los edificios del Corredor muestran problemas comunes que definen las obras más frecuentes en comunidades de vecinos. En Alcalá de Henares y Torrejón de Ardoz, los bloques de los años 70 y 80 en barrios como El Val, Reyes Católicos o Parque Cataluña acumulan cubiertas planas sin impermeabilización actualizada, portales con revestimientos deteriorados y ascensores de primera generación que requieren sustitución. En Coslada, los edificios de Ciudad 70 presentan con frecuencia problemas de humedad por capilaridad en plantas bajas. En Guadalajara y Azuqueca de Henares, muchas comunidades están pendientes de cumplir con el Informe de Evaluación del Edificio, un requisito de la Comunidad de Madrid que exige actuaciones de mantenimiento en fachada o cubierta como condición previa a cualquier reforma de mejora.',
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
