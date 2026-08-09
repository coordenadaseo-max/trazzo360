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
    headline: 'Un responsable único coordina todos los gremios. Sin subcontratas, sin extras.',
    heroCopy: 'Una reforma integral no empieza eligiendo materiales ni acabados. Primero hay que decidir qué distribución quieres conservar, qué instalaciones merece la pena renovar y qué debe quedar cerrado antes de abrir la obra. Hacemos reformas integrales en el Corredor del Henares con un único interlocutor que gestiona todos los gremios, un presupuesto que deja claro qué está incluido desde el inicio y una fecha de entrega garantizada por escrito. Sin subcontratas desconocidas, sin facturas extra, sin excusas para no cumplir el plazo.',
    desc: 'Reformamos tu piso, ático o chalet completamente. Diseño, gestión de permisos, ejecución y entrega llave en mano. Sin sorpresas en el precio.',
    body: [
      { type: 'h3', text: 'Qué incluye una reforma integral en el Corredor del Henares' },
      { type: 'p',  text: 'Reformamos pisos, áticos, dúplex y chalés de principio a fin: derribo de tabiques, redistribución de espacios, instalación eléctrica completa con cuadro nuevo, fontanería, solados de porcelánico o tarima flotante, falso techo, reforma de baño y cocina, carpintería interior y pintura. Un único interlocutor coordina todos los gremios con equipo propio. Sin subcontratas que no conoces ni facturas extra que no firmaste.' },
      { type: 'h3', text: 'Cuándo tiene sentido una reforma integral: la pregunta que determina el presupuesto' },
      { type: 'p',  text: 'Una reforma integral tiene sentido cuando las instalaciones necesitan renovación o cuando la distribución no es funcional y vale la pena resolver todo a la vez. Si el cuadro eléctrico tiene capacidad suficiente, la fontanería está en buen estado y solo hay que renovar acabados, baño, cocina y suelos, estás ante una reforma de pisos, no una integral. La visita técnica gratuita lo determina antes de comprometer ningún número: el alcance correcto ahorra dinero, el incorrecto lo desperdicia.' },
      { type: 'h3', text: 'Qué debe estar definido antes de empezar la obra' },
      { type: 'p',  text: 'Antes de abrir el piso conviene tener cerrados tres elementos: la distribución final (qué tabiques se derriban y cómo quedan los espacios), el diseño de baño y cocina (formato de alicatado, sanitarios, muebles y electrodomésticos) y la selección de suelos. Si algo queda sin decidir cuando ya está la obra en marcha, el plazo se alarga y el presupuesto puede desviarse. Con el proyecto cerrado antes del primer día, la coordinación de gremios funciona sin fricciones.' },
      { type: 'h3', text: 'Licencias y normativa: qué necesitas tramitar en tu ayuntamiento' },
      { type: 'p',  text: 'La pintura, el cambio de suelos y la renovación de baño o cocina sin tocar instalaciones comunes son obras menores sin licencia. Cuando la reforma incluye derribo de tabiques, cambio de ventanas en fachada o modificación de electricidad o fontanería, el trámite necesario depende del alcance concreto y del municipio. El derribo de muros de carga exige proyecto de arquitecto técnico. En la visita informamos del trámite exacto que corresponde a tu caso y nos encargamos de la gestión completa.' },
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
      { label: 'Piso 50–60 m² (integral con instalaciones)', price: 'Desde 18.000€', includes: 'Cuadro, fontanería, baño, cocina y acabados' },
      { label: 'Piso 70–90 m² (integral con redistribución)', price: 'Desde 24.900€', includes: 'Instalaciones nuevas + distribución actualizada' },
      { label: 'Piso 100–120 m² o redistribución completa', price: 'Desde 38.000€', includes: 'Integral con cambio de distribución' },
      { label: 'Chalet o dúplex 150–200 m²', price: 'Desde 55.000€', includes: 'Precio orientativo según estado previo' },
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
        a: 'Depende del alcance. Para cambios de distribución que afecten a elementos estructurales se requiere proyecto de arquitecto técnico, que incluimos en el presupuesto. Para reformas integrales sin derribo de muros de carga, con dirección de obra propia es suficiente.',
      },
    ],
  },
  {
    slug: 'reforma-banos',
    title: 'Reforma de Baños',
    shortTitle: 'Baños',
    anchorLabel: 'Reforma de baños',
    icon: '🚿',
    headline: 'Si solo tienes un baño en casa, el plazo de la obra importa tanto como el resultado.',
    heroCopy: 'Cuando solo tienes un baño en casa, la reforma tiene que planificarse bien. Qué puede conservarse, qué hay que cambiar completamente, qué puede haber detrás de los azulejos que no se sabe hasta abrir. Hacemos reformas de baños en el Corredor del Henares con visita técnica gratuita para evaluar el estado observable de las instalaciones antes de dar precio, materiales seleccionados antes de empezar la obra y fecha de inicio y entrega definidas en el contrato. Si al desmontar aparece algo no previsto, lo comunicamos antes de realizar ningún trabajo adicional.',
    desc: 'Reforma de baños, cuartos de baño y aseos: cambio de bañera por ducha, alicatados, sanitarios, fontanería, mampara y muebles. Precio cerrado.',
    body: [
      { type: 'h3', text: 'Qué incluye la reforma completa de un baño: sin medias tintas' },
      { type: 'p',  text: 'Demolición de alicatados y solado, impermeabilización de suelo y primer metro de pared, alicatado y solado nuevo, plato de ducha o bañera, mampara, sanitarios, mueble, espejo, iluminación y accesorios. Gestionamos los escombros y la limpieza final. Si durante la visita vemos indicios de humedad o problemas en la instalación, los incorporamos a la valoración. Otros problemas ocultos solo pueden confirmarse una vez desmontados los revestimientos.' },
      { type: 'h3', text: 'Bañera o ducha: la decisión que más condiciona el resultado y el presupuesto' },
      { type: 'p',  text: 'Cambiar la bañera por ducha es la reforma de baño más solicitada, pero la decisión no es solo estética: hay que considerar si hay alguien en casa que necesite bañarse, si el baño va a ponerse a la venta, y qué altura de plato encaja mejor con el espacio y la accesibilidad prevista. Un plato de ducha al nivel del suelo mejora la accesibilidad sin obra adicional mayor. En baños grandes de adosados y unifamiliares, las duchas de obra a medida con microcemento o resina de cuarzo permiten diseñar el espacio sin los condicionantes de los platos estándar.' },
      { type: 'h3', text: 'Si solo tienes un baño en casa: cómo planificar la obra' },
      { type: 'p',  text: 'Cuando la vivienda tiene un único baño, el plazo de la obra tiene la misma importancia que el resultado. Una reforma completa dura entre 1 y 3 semanas: los primeros días de derribo son los más incómodos; a partir de ahí el espacio se va recuperando conforme avanza el trabajo. Si el plazo es crítico, lo planificamos para minimizar los días sin servicio sin comprometer la impermeabilización, que es la partida que más protege el resultado a largo plazo.' },
      { type: 'h3', text: '¿Necesitas licencia para reformar el baño? Lo que dice la normativa' },
      { type: 'p',  text: 'El trámite depende del alcance de la reforma y de la normativa municipal aplicable. Una renovación interior sin afectar a instalaciones comunes suele considerarse obra menor, pero los requisitos exactos varían por ayuntamiento: nos encargamos de informarte y gestionarlo. La impermeabilización debe resolverse correctamente en las zonas expuestas al agua para evitar filtraciones hacia soportes y estancias colindantes: es la razón por la que presupuestos más baratos que la omiten acaban siendo más caros cuando aparecen las humedades.' },
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
        a: 'Sí. Para baños donde los alicatados están en buen estado ofrecemos reforma rápida sin obra: cambio de sanitarios, mueble de baño y mampara en 2–3 días. El coste es menor que una reforma completa, aunque el resultado visual es más limitado. En la visita gratuita presentamos ambas opciones con presupuesto cerrado.',
      },
    ],
  },
  {
    slug: 'reforma-cocinas',
    title: 'Reforma de Cocinas',
    shortTitle: 'Cocinas',
    anchorLabel: 'Reforma de cocinas',
    icon: '🍳',
    headline: 'La distribución de una cocina se decide antes de empezar la obra. Después es difícil de cambiar.',
    heroCopy: 'Una mala decisión de distribución en la cocina se nota todos los días. Antes de elegir muebles o encimera, hay que definir cómo van a circular las personas por el espacio, dónde van los electrodomésticos, si tiene sentido abrir al salón y qué instalaciones pueden conservarse. Hacemos reformas de cocinas en el Corredor del Henares con planimetría del espacio antes de presupuestar, todos los detalles definidos antes de que empiece la obra y circuitos eléctricos dedicados incluidos. Si queda algo sin decidir cuando ya se está demoliendo, el plazo se alarga y el presupuesto también.',
    desc: 'Muebles a medida, encimeras, electrodomésticos, fontanería y electricidad. Diseñamos y ejecutamos tu cocina nueva de principio a fin.',
    body: [
      { type: 'h3', text: 'Qué incluye la reforma de una cocina de principio a fin' },
      { type: 'p',  text: 'Diseñamos y ejecutamos tu cocina completa: desescombro del estado anterior, instalación eléctrica nueva con circuitos independientes para cada electrodoméstico, fontanería, alicatado de zona de trabajo, muebles a medida o de catálogo, encimera de silestone o porcelana de gran formato, fregadero, grifo, electrodomésticos integrados y campana. Diseñamos en L, en U, en línea o cocina americana. Si no quieres obra pesada, también cambiamos muebles y frentes sobre la distribución actual en 3 a 5 días.' },
      { type: 'h3', text: 'La distribución, antes que los muebles: la decisión que más condiciona el resultado' },
      { type: 'p',  text: 'La elección de muebles y electrodomésticos es la parte visible de una reforma de cocina, pero la decisión más importante es la distribución: en qué configuración van a trabajar (en línea, en L, en U, americana), si tiene sentido abrir al salón y dónde van los electrodomésticos de alta potencia. Una vez empezada la obra, cambiar la distribución implica rehacer instalaciones que ya están hechas. Por eso la planimetría va antes que la selección de materiales, no al revés.' },
      { type: 'h3', text: 'Instalación eléctrica en la cocina: qué hay que revisar antes de presupuestar' },
      { type: 'p',  text: 'Antes de cerrar la distribución de una cocina nueva, conviene revisar si la instalación eléctrica existente puede asumir los electrodomésticos y consumos previstos. Si no cumple las necesidades del nuevo diseño, deberá adaptarse dentro de la reforma. La instalación eléctrica queda incluida en el presupuesto cerrado cuando el alcance la requiere. Si la reforma incluye abrir la cocina al salón, tramitamos también la licencia de obra menor cuando corresponde.' },
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
    headline: 'Antes de decidir qué reformar, conviene saber qué merece la pena cambiar y qué puede esperar.',
    heroCopy: 'No siempre merece la pena reformar todo a la vez. La clave está en el estado de las instalaciones: si el cuadro eléctrico y la fontanería funcionan, baño, cocina, suelos y pintura pueden transformar el piso sin necesitar obra pesada. Si las instalaciones necesitan renovación, lo más eficiente es hacerlo todo de una vez con el piso abierto. Hacemos reformas de pisos y chalets en el Corredor del Henares con precio cerrado y plazo garantizado desde el primer día. La visita técnica gratuita determina qué opciones tienes según el estado real de tu vivienda.',
    desc: 'Reforma de pisos antiguos y modernos, áticos y chalets: suelos, carpintería, redistribución de tabiques, baño, cocina y pintura. Precio cerrado.',
    body: [
      { type: 'h3', text: 'Reforma parcial o integral: cómo saber qué necesita tu vivienda' },
      { type: 'p',  text: 'La clave está en el estado de las instalaciones. Si el cuadro eléctrico y la fontanería funcionan correctamente, suelos nuevos, baño, cocina y pintura pueden transformar el piso completamente por menos de 20.000€ sin necesitar obra pesada. Si las instalaciones son de los años 70 u 80 y hay que renovarlas, la forma más eficiente es hacer todo a la vez con el piso abierto una sola vez: eso ya es territorio de reforma integral, con un presupuesto desde 24.900€. En la visita evaluamos el estado real y te decimos exactamente en qué punto está tu vivienda.' },
      { type: 'h3', text: 'Qué da más por menos: cómo priorizar cuando no puedes hacerlo todo' },
      { type: 'p',  text: 'Con 15.000–20.000€ y las instalaciones en buen estado puedes renovar los tres espacios de mayor impacto: baño completo (3.200–4.500€), cocina con muebles y electrodomésticos (5.500–8.000€), suelos nuevos en toda la vivienda (3.000–4.500€) y pintura (1.500–2.500€). Si el presupuesto es más ajustado, suelos nuevos y pintura en todo el piso son lo que más cambia la percepción visual del conjunto por el menor coste por metro cuadrado. La carpintería interior (puertas y armarios) transforma la percepción del espacio interior con un coste por zona contenido.' },
      { type: 'h3', text: 'Reformar para vender o alquilar: qué conviene priorizar' },
      { type: 'p',  text: 'En pisos de los años 70–90 en el Corredor del Henares, una reforma de 15.000–20.000€ concentrada en baño, cocina y suelos puede mejorar significativamente la posición del piso en el mercado y reducir el tiempo hasta la venta. Para alquiler, suelos nuevos y pintura son la inversión más eficiente: es lo primero que ve el inquilino y lo que determina el perfil de persona y la renta posible. Para venta, baño y cocina tienen mayor impacto. Te orientamos en la visita sobre qué reformas tienen mayor impacto según el estado y el objetivo de tu vivienda.' },
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
      { label: 'Suelos + pintura + carpintería (sin baño ni cocina)', price: 'Desde 8.000€', includes: 'Piso 60–80 m², sin obra pesada' },
      { label: 'Baño + cocina + suelos + pintura', price: 'Desde 18.000€', includes: 'Piso 60–80 m², instalaciones en buen estado' },
      { label: 'Reforma con redistribución de tabiques', price: 'Desde 28.000€', includes: 'Incluye licencia de obra menor' },
      { label: 'Si las instalaciones necesitan renovación', price: 'Ver Reformas Integrales', includes: 'Cuadro, fontanería, gremios coordinados' },
    ],
    faqs: [
      {
        q: '¿Cuánto cuesta reformar un piso sin hacer reforma integral?',
        a: 'Si las instalaciones están en buen estado, una reforma de alto impacto en un piso de 60–80 m² oscila entre 8.000€ (suelos, pintura y carpintería) y 20.000€ (baño + cocina + suelos + pintura). Si el cuadro eléctrico o la fontanería necesitan renovación completa, el coste sube y estás ya en rango de reforma integral desde 24.900€.',
      },
      {
        q: '¿Qué puedo renovar con 20.000€?',
        a: 'Con 20.000€ y las instalaciones en buen estado puedes renovar los tres espacios de mayor impacto: baño completo (3.500€), cocina con muebles y electrodomésticos (7.000–9.000€), suelos nuevos en toda la vivienda (4.000€) y pintura general (2.000€). El resultado visual es equivalente a un piso nuevo sin necesitar obra pesada.',
      },
      {
        q: '¿En qué orden tiene sentido ir renovando el piso si no puedo hacerlo todo a la vez?',
        a: 'El orden que da más impacto por euro: primero suelos y pintura (transforma la percepción del conjunto), después baño (el espacio más amortizable en venta o alquiler), después cocina (mayor inversión pero mayor retorno). La carpintería interior puede hacerse en paralelo o al final. Si en algún momento aparecen problemas en instalaciones, lo más eficiente es abordar todo en una sola obra.',
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
        a: 'En la mayoría de los casos sí, especialmente en pisos de los años 70–90 en el Corredor del Henares. Una reforma de 15.000–25.000€ puede aumentar el precio de venta en 30.000–50.000€ y reducir el tiempo en el mercado de forma significativa. Los espacios con mayor retorno son baño, cocina y suelos, en ese orden. Si el piso tiene instalaciones antiguas, puede ser más eficiente hacer una reforma integral antes de sacar a la venta.',
      },
    ],
  },
  {
    slug: 'locales-comerciales',
    title: 'Reformas de Locales Comerciales',
    shortTitle: 'Locales',
    anchorLabel: 'Reforma de locales comerciales',
    icon: '🏪',
    headline: 'Un local reformado no es solo uno que queda bien. Es uno que funciona para el negocio.',
    heroCopy: 'Reformar un local no se mide solo por el resultado estético. Hay que asegurarse de que la instalación eléctrica soporta la actividad, que la distribución permite trabajar con comodidad y que la licencia puede tramitarse sin retrasar la apertura. Hacemos reformas de locales comerciales, restaurantes, oficinas y clínicas en el Corredor del Henares con proyecto técnico cuando lo requiere la actividad, tramitación de licencia incluida y fecha de entrega fijada en el contrato.',
    desc: 'Transformamos locales vacíos en espacios funcionales. Tramitamos la licencia de actividad y ejecutamos la obra completa a precio cerrado.',
    body: [
      { type: 'h3', text: 'Qué incluye la reforma de un local comercial: de la nave vacía al día de apertura' },
      { type: 'p',  text: 'Acondicionamos locales comerciales, restaurantes, cafeterías, oficinas, clínicas y peluquerías en el Corredor del Henares: vaciado y desescombro, instalación eléctrica completa con alumbrado de emergencia y señalética, fontanería, climatización, divisiones de pladur, suelos, techos técnicos, pintura y carpintería. Tramitamos la licencia de actividad en el ayuntamiento. Precio cerrado y fecha de entrega fijada en el contrato, porque cuando tienes una fecha de apertura no puedes improvisar.' },
      { type: 'h3', text: 'Licencia de actividad en el Corredor: plazos, tipos y lo que cambia por municipio' },
      { type: 'p',  text: 'La tramitación de la licencia de actividad es donde más empresarios se llevan sorpresas. Los plazos y requisitos varían según el municipio y el tipo de negocio.' },
      { type: 'h4', text: 'Hostelería, clínicas y actividades clasificadas' },
      { type: 'p',  text: 'Según la actividad y el alcance de la intervención, pueden ser necesarios proyectos, documentación técnica o trámites específicos antes de la apertura. En actividades clasificadas como hostelería o clínicas, la tramitación puede condicionar la fecha de apertura de forma determinante. El error más costoso que cometen los promotores de nuevos locales es iniciar la tramitación cuando la obra termina, en lugar de hacerlo en paralelo desde el primer día.' },
      { type: 'h4', text: 'Comercio minorista y oficinas sin actividad clasificada' },
      { type: 'p',  text: 'Para comercios sin actividad clasificada, muchos municipios del Corredor permiten el régimen de declaración responsable: presentas la documentación y, según la actividad y el procedimiento aplicable, puede ser posible iniciar antes de recibir resolución formal. Nosotros preparamos toda la documentación e informamos del régimen exacto según tu actividad y municipio antes de comenzar la obra.' },
      { type: 'h3', text: 'Tipos de locales en el Corredor: casco urbano, polígono y nave industrial' },
      { type: 'p',  text: 'En los cascos urbanos de Alcalá de Henares y Torrejón de Ardoz, los locales en planta baja de edificios residenciales tienen alturas de 2,80 a 3,20 metros y superficies de 40 a 100 metros cuadrados: ideales para comercio, clínicas y oficinas. En los polígonos de Coslada, San Fernando de Henares y Torrejón, transformamos naves diáfanas de 200 a 1.000 metros cuadrados en espacios de venta o servicio con instalaciones completas. En Guadalajara y Azuqueca también reformamos locales y tramitamos licencias de actividad con el mismo equipo y el mismo sistema de precio cerrado.' },
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
    title: 'Reformas en Comunidades de Propietarios',
    shortTitle: 'Comunidades',
    anchorLabel: 'Reforma de comunidades de propietarios',
    icon: '🏘️',
    headline: 'El alcance y el precio deben quedar claros antes de la junta. Eso es lo que preparamos.',
    heroCopy: 'Una obra en zonas comunes tiene que poder aprobarse antes de ejecutarse. El presupuesto debe ser comprensible para los propietarios, el alcance tiene que estar bien definido antes de la junta y el administrador de fincas necesita documentación técnica para gestionarlo correctamente. Realizamos obras en comunidades de propietarios del Corredor del Henares con presupuesto desglosado y memoria descriptiva listos para junta, coordinación directa con el administrador durante toda la obra y horarios adaptados para minimizar las molestias a los vecinos.',
    desc: 'Obras en zonas comunes de comunidades de propietarios: escaleras, portales, fachadas, cubiertas e instalaciones. Presupuesto detallado para junta.',
    body: [
      { type: 'h3', text: 'Qué obras puede acometer tu comunidad: portales, fachadas y cubiertas' },
      { type: 'p',  text: 'Ejecutamos todas las obras de mantenimiento y mejora en zonas comunes del Corredor del Henares: pintura y renovación de portales y escaleras, rehabilitación de fachadas, impermeabilización de cubiertas planas y tejados, reparación de humedades por capilaridad y filtración, actualización de instalaciones comunitarias (electricidad, fontanería, ascensores) y mejoras de accesibilidad. Emitimos presupuesto con memoria descriptiva listo para presentar en junta, y coordinamos directamente con el administrador de fincas durante toda la obra.' },
      { type: 'h3', text: 'Qué aprobación necesita la obra en junta: cómo presentarla para facilitar el voto' },
      { type: 'p',  text: 'El tipo de actuación condiciona el procedimiento de aprobación en la comunidad. Antes de convocar o votar una obra conviene comprobar qué requisitos corresponden al caso concreto, ya que dependen de la naturaleza de la actuación, su coste y la normativa aplicable.' },
      { type: 'h4', text: 'Obras de conservación y mantenimiento' },
      { type: 'p',  text: 'Las obras necesarias para mantener el buen estado del edificio (portal, humedades, cubierta, instalaciones comunes) tienen un procedimiento de aprobación diferente al de las mejoras opcionales. Presentar un presupuesto bien documentado con el alcance claramente definido facilita que los propietarios puedan valorar y votar la propuesta con la información necesaria.' },
      { type: 'h4', text: 'Obras de mejora y accesibilidad' },
      { type: 'p',  text: 'Las mejoras no urgentes y las obras de accesibilidad pueden requerir aprobaciones específicas según el tipo de actuación. Los requisitos exactos deben comprobarse en cada caso antes de convocar la junta. Preparamos el presupuesto y la documentación técnica en el formato adecuado para que la presentación en junta sea lo más clara posible.' },
      { type: 'h3', text: 'El estado del edificio: qué revisar antes de plantear obras en zonas comunes' },
      { type: 'p',  text: 'Los edificios con más años de vida en el Corredor acumulan con frecuencia necesidades de mantenimiento que no siempre son visibles desde el exterior: cubiertas con impermeabilización no actualizada que pueden ser origen de humedades, portales con revestimientos deteriorados, y ascensores que ya no cumplen la normativa de seguridad actual. Muchos edificios de más de 50 años en los municipios del Corredor están pendientes del Informe de Evaluación del Edificio, condición previa para acceder a las ayudas de rehabilitación energética de la Comunidad de Madrid.' },
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
    { q: '¿Quién coordina los diferentes gremios durante la reforma?', a: 'El equipo es propio: albañiles, electricistas, fontaneros, pintores y carpinteros bajo coordinación directa. No dependes de que un subcontratista aparezca cuando toca; la secuencia de obra la gestionamos nosotros de principio a fin.' },
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
export const SERVICE_ZONE_CONTENT: Record<string, Record<string, { intro: string; body: { type: string; text: string }[] }>> = {
  'reformas-integrales': {
    'alcala-de-henares': {
      intro: 'El primer paso de una reforma integral en Alcalá no es elegir materiales: es saber qué estado tienen las instalaciones. Un cuadro eléctrico de antes del 2000 o tuberías que no se han tocado en décadas pueden condicionar el alcance real y el precio final. Lo evaluamos en la visita técnica gratuita antes de comprometer ningún número.',
      body: [
        { type: 'h3', text: 'Qué evaluar antes de cerrar el presupuesto en Alcalá' },
        { type: 'p', text: 'Los pisos anteriores a los 90 en Alcalá suelen tener dos variables que cambian el presupuesto si no se detectan en la visita: cuadro eléctrico insuficiente para el uso actual y tuberías de hierro galvanizado con décadas de uso. Si no se evalúan antes de firmar, el precio cerrado puede quedar obsoleto a las dos semanas de obra. Por eso incluimos la revisión completa de instalaciones en la visita gratuita antes de comprometer ningún número.' },
        { type: 'h3', text: 'Cómo se ordena una reforma integral: secuencia y coordinación' },
        { type: 'p', text: 'Una reforma integral tiene una secuencia que no puede alterarse sin encarecer la obra: primero derribo y vaciado; después instalaciones (electricidad y fontanería, que van empotradas); luego albañilería; después solados y alicatados; por último carpintería interior y pintura. Alterar ese orden implica volver a abrir lo que ya estaba terminado. Con equipo propio coordinamos cada fase sin depender de que un gremio externo aparezca en el momento correcto.' },
      ],
    },
    'torrejon-de-ardoz': {
      intro: 'Antes de empezar una reforma integral en Torrejón, la pregunta más importante no es qué muebles elegir: es si tiene más sentido hacer todo a la vez o por fases. Cuando las instalaciones necesitan renovación, hacer dos obras por separado implica abrir el piso dos veces, repetir el desescombro y coordinar gremios por duplicado. La visita determina cuál es tu caso.',
      body: [
        { type: 'h3', text: 'Cómo se coordina una reforma integral en Torrejón: secuencia y gremios' },
        { type: 'p', text: 'Una reforma integral tiene una secuencia que no puede alterarse: primero derribo y vaciado, después instalaciones empotradas (electricidad y fontanería), luego albañilería, después solados y alicatados, por último carpintería y pintura. Trabajar con equipo propio en Torrejón significa que cada gremio aparece en el momento correcto sin esperas que alargan el plazo. La fecha de entrega se fija en el contrato y se cumple.' },
        { type: 'h3', text: 'Qué debe estar cerrado antes de firmar el presupuesto' },
        { type: 'p', text: 'La distribución final, el diseño de baño y cocina, y la selección de suelos son los tres elementos que deben estar definidos antes de empezar la obra. Si se modifican durante la ejecución, el coste se desvía y el plazo se alarga. En la visita técnica evaluamos el estado de las instalaciones, identificamos qué puede aprovecharse y qué necesita renovación, y cerramos el precio con todos esos datos sobre la mesa.' },
      ],
    },
    'coslada': {
      intro: 'Una reforma integral en Coslada bien planificada empieza por saber qué hay detrás de los revestimientos antes de firmar el presupuesto. En plantas bajas de algunos bloques, las humedades pueden condicionar el alcance de la obra si no se detectan en la visita técnica. El precio cerrado es real cuando incluye lo que el estado de la vivienda requiere.',
      body: [
        { type: 'h3', text: 'Humedades en Coslada: por qué hay que detectarlas antes de cerrar el precio' },
        { type: 'p', text: 'Si aparecen indicios de humedad en plantas bajas, conviene identificar el origen antes de cerrar el presupuesto: si no se contempla en el contrato y aparece a mitad de obra, el coste final se desvía. En la visita técnica evaluamos el estado de solera y muros y lo incluimos en el presupuesto cuando el estado lo requiere.' },
        { type: 'h3', text: 'Instalaciones: qué renovar y qué puede esperar' },
        { type: 'p', text: 'No todas las instalaciones de una vivienda están en el mismo estado. El cuadro eléctrico y la fontanería deben evaluarse según su estado real, no darse por renovables de forma automática. En la visita determinamos qué necesita renovación real y qué puede quedarse, para que el presupuesto no incluya partidas innecesarias ni deje fuera las que son urgentes.' },
      ],
    },
    'san-fernando-de-henares': {
      intro: 'El alcance de una reforma integral en San Fernando de Henares depende mucho de cuándo se construyó la vivienda. Los pisos del casco antiguo y los de las promociones más recientes pueden tener alcances muy distintos según el estado de las instalaciones: desde la renovación completa de cuadro y fontanería hasta la reforma centrada en distribución y acabados. La visita técnica lo aclara antes de comprometer ningún número.',
      body: [
        { type: 'h3', text: 'Vivienda antigua o reciente en San Fernando: el alcance cambia' },
        { type: 'p', text: 'En viviendas del casco antiguo de San Fernando donde las instalaciones no se han revisado en tiempo, el cuadro eléctrico y la fontanería pueden condicionar de forma importante el alcance real de la reforma. En las promociones más recientes de Parque Roma y Parque Henares, las instalaciones pueden estar en mejor estado y el presupuesto puede centrarse en distribución y acabados. El estado de la instalación es lo que determina el alcance; la visita técnica lo aclara antes de comprometer cualquier número.' },
        { type: 'h3', text: 'Licencias de obra menor en el Ayuntamiento de San Fernando de Henares' },
        { type: 'p', text: 'Para reformas con derribo de tabiques, cambio de ventanas en fachada o modificación de instalaciones se necesita licencia de obra menor en San Fernando de Henares. Los plazos son similares al resto de municipios madrileños del Corredor. Tramitamos la solicitud, hacemos el seguimiento y coordinamos con el técnico municipal si fuera necesario, sin que tengas que gestionar ningún trámite.' },
      ],
    },
    'guadalajara': {
      intro: 'El alcance de una reforma integral en Guadalajara capital depende del estado de las instalaciones, no solo de la superficie. Si la vivienda lleva años sin una renovación importante, el cuadro eléctrico y la fontanería pueden condicionar de forma importante lo que conviene hacer: en esos casos, lo más eficiente es abrir el piso una sola vez y hacer todo en la misma obra. La visita técnica determina qué alcance corresponde antes de comprometer ningún número.',
      body: [
        { type: 'h3', text: 'Cómo se ordena una reforma integral en Guadalajara: instalaciones primero' },
        { type: 'p', text: 'En una reforma integral en Guadalajara, el primer paso antes de tomar decisiones de distribución o acabados es evaluar el estado de las instalaciones. Si el cuadro eléctrico o la fontanería necesitan renovación, hacerlo dentro de la misma obra es más eficiente que abrir la vivienda en dos momentos distintos. Con el piso abierto, también es el momento de valorar el cambio de carpintería exterior si las ventanas no tienen doble acristalamiento.' },
        { type: 'h3', text: 'Carpintería y aislamiento en el marco de una reforma integral' },
        { type: 'p', text: 'Si la reforma integral incluye intervención en el perímetro de la vivienda, el cambio de carpintería exterior puede añadirse a la misma obra sin coste adicional de desescombro o coordinación. El doble acristalamiento mejora el confort térmico y acústico, y la mejora es especialmente perceptible en viviendas que llevan décadas con ventanas sin renovar. En la visita evaluamos si las ventanas actuales justifican la sustitución dentro del presupuesto general.' },
      ],
    },
    'azuqueca-de-henares': {
      intro: 'Una reforma integral en Azuqueca de Henares con instalaciones en buen estado tiene más margen para invertir en distribución y acabados que en obra pesada. Si el cuadro eléctrico y la fontanería no necesitan renovación completa, el presupuesto puede centrarse en lo que más transforma visualmente la vivienda. Lo verificamos en la visita técnica antes de cerrar el precio.',
      body: [
        { type: 'h3', text: 'Estado de instalaciones en Azuqueca: qué condiciona el alcance de la reforma' },
        { type: 'p', text: 'En muchos pisos de Azuqueca el cuadro eléctrico y la fontanería pueden aprovecharse total o parcialmente. Eso reduce el alcance de la obra y libera presupuesto para dedicarlo a distribución, calidad de materiales o zonas con mayor impacto visual. Lo verificamos en la visita técnica antes de comprometer ningún número.' },
        { type: 'h3', text: 'Qué incluye una reforma integral cuando las instalaciones están en buen estado' },
        { type: 'p', text: 'Si las instalaciones aguantan, una reforma integral en Azuqueca puede concentrarse en lo que más se nota: redistribución de espacios para ganar amplitud, suelos nuevos de porcelánico o tarima, reforma completa de baño y cocina, carpintería interior y pintura. El presupuesto cerrado incluye todas las partidas acordadas; si durante la obra aparece algo no previsto, lo comunicamos antes de actuar.' },
      ],
    },
    'meco': {
      intro: 'Reformar integralmente una vivienda en Meco tiene variables que no aparecen en los pisos de bloque: más metros, posiblemente dos plantas, y cubierta o terraza que evaluar. Antes de cerrar el alcance conviene saber si la cubierta necesita intervención, porque es una partida que puede cambiar el presupuesto de manera significativa si se descubre durante la obra.',
      body: [
        { type: 'h3', text: 'Adosados en Meco: un alcance diferente al de los pisos de bloque' },
        { type: 'p', text: 'Si la reforma afecta a una vivienda de varias plantas, o incluye cubierta, terraza o zonas exteriores, el alcance global conviene plantearse antes de dividir la obra en actuaciones independientes. Una reforma integral bien planificada empieza por decidir qué se interviene, en qué orden y si la cubierta u otras zonas necesitan actuación, porque son partidas que pueden cambiar el presupuesto si se descubren durante la obra.' },
        { type: 'h3', text: 'Cerramientos de terraza en Meco: proceso y requisitos' },
        { type: 'p', text: 'Si el proyecto de reforma incluye cerrar una terraza para ganar metros habitables, el proceso requiere licencia de obra menor en el Ayuntamiento y, en algunas urbanizaciones, también la aprobación de la comunidad de propietarios. Verificamos ambas condiciones antes de comprometer plazos o presupuesto: el trámite queda incluido en el precio cerrado desde el principio.' },
      ],
    },
    'camarma-de-esteruelas': {
      intro: 'Una reforma integral en Camarma de Esteruelas empieza por definir prioridades: interior, cubierta, cerramientos y exteriores no tienen por qué abordarse todos en la misma fase. En viviendas unifamiliares, el alcance puede ser muy diferente según el estado de cada elemento. En la visita técnica gratuita repasamos qué es urgente y qué puede esperar.',
      body: [
        { type: 'h3', text: 'Reformar la vivienda como conjunto: la diferencia en Camarma' },
        { type: 'p', text: 'Si vas a plantear una reforma integral en una vivienda unifamiliar en Camarma, el alcance puede ir más allá del interior: cubierta, cerramientos, garaje o zonas exteriores si las hay. Definir prioridades antes de presupuestar es la clave para no abrir más frentes de los que el presupuesto puede cubrir en una sola obra. Lo repasamos en la visita técnica gratuita.' },
        { type: 'h3', text: 'Secuencia de obra en vivienda unifamiliar: cómo ordenar los trabajos' },
        { type: 'p', text: 'En una vivienda de dos plantas, el orden de los trabajos condiciona el plazo total. Lo habitual: instalaciones en ambas plantas primero (electricidad y fontanería, que van empotradas), después albañilería y actuación en cubierta si aplica, y finalmente acabados planta a planta. Con esa secuencia, la vivienda recupera habitabilidad lo antes posible sin que una fase bloquee la siguiente.' },
      ],
    },
  },
  'reforma-banos': {
    'alcala-de-henares': {
      intro: 'Antes de elegir el alicatado de un baño en Alcalá, hay una decisión más importante: qué merece la pena cambiar y qué puede conservarse. Aprovechar el derribo para renovar la fontanería cuesta poco comparado con volver a abrir el baño en pocos años si las tuberías fallan. En la visita técnica evaluamos el estado real antes de cerrar el presupuesto.',
      body: [
        { type: 'h3', text: 'Bañera o ducha: la primera decisión en cualquier reforma de baño' },
        { type: 'p', text: 'Cambiar la bañera por un plato de ducha sin tocar el alicatado existente es la intervención más rápida y económica: parte de 1.800€ y se hace en 3–5 días hábiles. Si el alicatado tiene más de 20 años, aprovechar para hacer la reforma completa es más eficiente que volver a abrir el baño en unos años. En la visita te mostramos el coste de ambas opciones para que puedas decidir con datos.' },
        { type: 'h3', text: '¿Cuándo conviene cambiar la fontanería al reformar el baño?' },
        { type: 'p', text: 'Si las tuberías del baño llevan más de 25 años sin tocarse, renovarlas mientras el baño ya está abierto tiene un coste marginal comparado con tener que volver a abrir todo en pocos años. La fontanería oculta es la causa más frecuente de humedades en baños con acabados nuevos sobre instalaciones viejas. En la visita evaluamos el estado real y lo incluimos en el presupuesto si es necesario.' },
      ],
    },
    'torrejon-de-ardoz': {
      intro: 'Si en Torrejón solo tienes un baño en casa, el plazo de la reforma importa tanto como el resultado. Una reforma completa dura entre 1 y 3 semanas: los primeros días de derribo son los más incómodos, y el espacio se va recuperando conforme avanza la obra. Planificamos la secuencia para minimizar el tiempo sin servicio antes de empezar.',
      body: [
        { type: 'h3', text: 'Cuánto tiempo sin baño: cómo planificar si solo tienes uno' },
        { type: 'p', text: 'Si la vivienda tiene un único baño, el plazo de obra es tan importante como el resultado. Una reforma completa dura entre 1 y 3 semanas según el alcance. Los primeros días, con el derribo del alicatado, son los más incómodos. A partir de ahí el espacio se va recuperando. Si el plazo es crítico, planificamos la secuencia de trabajo para acortarlo al máximo sin comprometer la impermeabilización.' },
        { type: 'h3', text: 'Alicatado de gran formato: por qué cambia el resultado visual' },
        { type: 'p', text: 'El formato del alicatado es la decisión que más cambia la percepción visual del baño renovado. Las piezas grandes (60×60 cm o más) reducen la cantidad de juntas y dan sensación de amplitud, especialmente en baños pequeños. Permiten también trabajar sin zócalo y con menos cortes en esquinas, lo que mejora el acabado final. En la visita de diseño te mostramos muestras reales con distintos formatos.' },
      ],
    },
    'coslada': {
      intro: 'Al reformar un baño en Coslada, los primeros metros cuadrados a resolver son los que no se ven: la impermeabilización del suelo y la base de los muros. Sin ella, un alicatado nuevo puede tener humedades en meses. Va incluida en el presupuesto desde la primera partida, no como extra que aparece después de firmar.',
      body: [
        { type: 'h3', text: 'Humedades antes de empezar: lo que hay que revisar en Coslada' },
        { type: 'p', text: 'En muchos bloques de Coslada, las humedades en baños no son solo superficiales. Antes de decidir el alcance, conviene revisar si hay filtraciones desde el baño superior o capilaridad desde la solera, especialmente en plantas bajas. Si se detectan y no se incluyen en el presupuesto, aparecen después de poner el alicatado nuevo. En la visita técnica evaluamos el estado real antes de cerrar el precio.' },
        { type: 'h3', text: 'Baños pequeños: cómo ganar espacio sin cambiar la distribución' },
        { type: 'p', text: 'Si el baño es pequeño y el objetivo es ganar espacio percibido sin cambiar la distribución, hay tres decisiones que cambian el resultado visual: plato de ducha en lugar de bañera, mueble de lavabo con almacenaje integrado y revestimiento de gran formato que reduce la cantidad de juntas. El resultado es radicalmente distinto al estado original sin necesidad de obra pesada.' },
      ],
    },
    'san-fernando-de-henares': {
      intro: 'La reforma de baño en San Fernando de Henares tiene un alcance muy distinto según la antigüedad de la vivienda. Un piso del casco antiguo puede necesitar fontanería nueva además de los acabados; una vivienda más reciente puede limitarse a alicatado, sanitarios y mueble. La diferencia en presupuesto puede ser relevante. La visita técnica lo aclara antes de comprometer nada.',
      body: [
        { type: 'h3', text: 'Alcance de la reforma según la antigüedad de la vivienda' },
        { type: 'p', text: 'En un piso del casco antiguo de San Fernando de los años 70 u 80, la fontanería del baño suele necesitar renovación además de los acabados. En una vivienda de Parque Roma o Parque Henares de los 90, las instalaciones pueden estar en mejor estado y la reforma puede limitarse a alicatado, sanitarios y mueble. La diferencia en presupuesto puede ser relevante. La visita técnica lo aclara antes de comprometer nada.' },
        { type: 'h3', text: 'Impermeabilización: por qué es la partida que no puede saltarse' },
        { type: 'p', text: 'La impermeabilización del suelo y del primer metro de pared es una obligación técnica, no una opción. Cuando un presupuesto no la incluye explícitamente, suele ser porque no se va a hacer correctamente. Es la causa más frecuente de humedades en baños reformados a precio bajo. Va incluida desde la primera partida del presupuesto, no como extra que aparece después de firmar.' },
      ],
    },
    'guadalajara': {
      intro: 'Reformar el baño en Guadalajara con instalaciones antiguas que no se han tocado en años plantea una decisión concreta: renovarlas ahora, con el baño ya abierto, o asumir el riesgo de tener que abrir otra vez en pocos años si fallan. Hacerlo con el baño en obras tiene un coste marginal comparado con volver a intervenir. En la visita evaluamos el estado real.',
      body: [
        { type: 'h3', text: 'Fontanería en los baños de Guadalajara: cuándo es imprescindible renovarla' },
        { type: 'p', text: 'En viviendas de Guadalajara que llevan años sin una reforma de baño, es frecuente encontrar fontanería que conviene revisar. Al reformar el baño, renovar la fontanería con el espacio ya abierto tiene un coste pequeño comparado con tener que abrir otra vez el baño reformado si las tuberías fallan dos años después. En la visita evaluamos el estado real y te damos una recomendación concreta.' },
        { type: 'h3', text: 'Accesibilidad en la reforma de baño: opciones que merece la pena considerar' },
        { type: 'p', text: 'Si la vivienda va a usarla durante muchos años la misma persona, o si hay mayores en el hogar, adaptar el baño para mejorar la accesibilidad durante la reforma no supone un coste mayor significativo: plato de ducha al nivel del suelo, barra de apoyo, espacio libre lateral al inodoro. Hacerlo después de haber terminado la reforma implica volver a abrir. En la visita podemos mostrarte las opciones que encajan con tu situación.' },
      ],
    },
    'azuqueca-de-henares': {
      intro: 'Si en Azuqueca la fontanería del baño está en buen estado, la reforma puede centrarse en lo que más transforma visualmente: alicatado nuevo, sanitarios modernos, mueble con almacenaje y mampara. Es una reforma más rápida y con menor coste que si hay que renovar las instalaciones de fondo. La visita técnica determina qué alcance corresponde antes de cerrar el precio.',
      body: [
        { type: 'h3', text: 'Reforma de modernización: cuando las instalaciones están bien y el problema es estético' },
        { type: 'p', text: 'Si las instalaciones del baño están en buen estado, la reforma puede concentrarse en cambiar el alicatado, los sanitarios, el mueble y la mampara sin tocar la fontanería de fondo. El resultado visual es equivalente al de una reforma completa, con un plazo más corto y un presupuesto más ajustado.' },
        { type: 'h3', text: 'Almacenaje en el baño: soluciones que marcan la diferencia' },
        { type: 'p', text: 'La falta de almacenaje es frecuente en baños pequeños, independientemente del material con el que estén revestidos. Un mueble con cajones y puertas, un botiquín integrado en el espejo y nichos en el alicatado de la ducha pueden resolver el problema sin ampliar el espacio. En la visita de diseño te mostramos cómo funciona cada solución en baños de dimensiones similares al tuyo.' },
      ],
    },
    'meco': {
      intro: 'En las viviendas de Meco con más de un baño, la primera conversación no es qué materiales elegir: es qué alcance tiene sentido en cada uno. El baño principal puede justificar mayor inversión en diseño y materiales; los secundarios pueden renovarse de manera más ajustada. Lo planificamos en la visita antes de presupuestar.',
      body: [
        { type: 'h3', text: 'Baños más grandes en viviendas de Meco: más opciones de diseño' },
        { type: 'p', text: 'Si el baño principal de la vivienda tiene más espacio que en un piso de bloque, se abren opciones que no son posibles en superficies reducidas: ducha de obra a medida con mampara fija de cristal, doble lavabo con encimera corrida, o separación de la zona de ducha y la de aseo. Si hay más de un baño en la vivienda, el alcance de cada uno se decide en la visita.' },
        { type: 'h3', text: 'Duchas de obra a medida: cuándo tiene sentido' },
        { type: 'p', text: 'Una ducha de obra sin plato prefabricado permite personalizar la forma, el tamaño y el revestimiento sin las limitaciones de un plato estándar. En un baño de más de 6 metros cuadrados puede diseñarse una ducha de 100×100 cm o más, con microcemento, resina de cuarzo o porcelánico de gran formato. El coste es algo mayor que con plato prefabricado, pero el resultado visual y funcional es completamente diferente.' },
      ],
    },
    'camarma-de-esteruelas': {
      intro: 'Si el baño de tu vivienda en Camarma lleva tiempo sin tocarse, la reforma completa suele ser más eficiente que actuar por partes en diferentes momentos. Con el espacio ya abierto, renovar fontanería, impermeabilización y acabados de una sola vez evita tener que volver a intervenir. Planificamos el alcance completo en la visita gratuita.',
      body: [
        { type: 'h3', text: 'Diseñar el baño desde cero en viviendas de Camarma' },
        { type: 'p', text: 'En las viviendas unifamiliares de Camarma, los baños principales tienen a menudo dimensiones que permiten repensar la distribución completa: colocar la ducha donde estaba la bañera, añadir un segundo lavabo si el espacio lo permite, o separar la zona húmeda de la seca. Cuando el baño lleva más de 15 años sin tocarse, la reforma completa suele ser más eficiente que hacer actuaciones parciales en diferentes momentos.' },
        { type: 'h3', text: 'Varios baños en la misma vivienda: cómo priorizarlos' },
        { type: 'p', text: 'Si la vivienda tiene dos o tres baños, no todos necesitan el mismo alcance. El baño principal suele justificar la mayor inversión en diseño y materiales. Los baños secundarios pueden renovarse con un alcance más ajustado: cambio de sanitarios, mueble y pintura sin necesariamente tocar el alicatado si está en buen estado. Te orientamos sobre qué tiene sentido en cada caso.' },
      ],
    },
  },
  'reforma-cocinas': {
    'alcala-de-henares': {
      intro: 'Antes de elegir muebles para la reforma de cocina en Alcalá, hay una decisión previa: mantener la distribución actual o abrir la cocina al salón. Esa decisión condiciona el presupuesto, el plazo y si hace falta licencia de obra. Te lo presupuestamos con y sin apertura en la misma visita para que puedas comparar.',
      body: [
        { type: 'h3', text: 'Cocina abierta o cerrada: la decisión que lo cambia todo' },
        { type: 'p', text: 'La primera decisión en una reforma de cocina no es qué muebles elegir: es si mantener la cocina cerrada o abrirla al salón. Abrir la cocina elimina un tabique, necesita licencia de obra menor y cambia radicalmente la percepción de espacio de toda la vivienda. Si el tabique no es de carga, es una obra de 1–2 días con impacto visual de varios años. Te lo presupuestamos con y sin apertura para que puedas comparar.' },
        { type: 'h3', text: 'Instalación eléctrica en la reforma de cocina: qué conviene revisar antes de presupuestar' },
        { type: 'p', text: 'El Reglamento Electrotécnico de Baja Tensión exige líneas independientes del cuadro para horno, vitrocerámica, lavavajillas y frigorífico. En viviendas con instalaciones que no se han actualizado, el cuadro puede no cumplirlo: si el diferencial salta al usar varios electrodomésticos a la vez, es la señal de que la instalación necesita renovación. La instalación eléctrica nueva es parte de cualquier reforma completa de cocina e incluida en el presupuesto desde el primer día.' },
      ],
    },
    'torrejon-de-ardoz': {
      intro: 'Si al usar varios electrodomésticos a la vez en Torrejón el diferencial salta o se corta la luz, la instalación eléctrica de la cocina no cumple la normativa actual. En una reforma de cocina, la electricidad nueva con circuitos dedicados no es opcional: es la base que hace que todo lo demás funcione. El presupuesto la incluye desde el primer día.',
      body: [
        { type: 'h3', text: 'Instalación eléctrica en cocinas de Torrejón: qué hay que revisar antes de presupuestar' },
        { type: 'p', text: 'Si tienes cortocircuitos o el diferencial salta cuando usas el horno y la vitrocerámica a la vez, la instalación eléctrica de la cocina no cumple la normativa actual. Es lo que convierte una reforma de cocina que no incluye electricidad en insuficiente desde el primer día de uso. Una reforma completa resuelve el fondo del problema, no solo la estética.' },
        { type: 'h3', text: 'Cuánto tiempo sin cocina: cómo planificar la obra' },
        { type: 'p', text: 'Una reforma completa de cocina dura entre 2 y 4 semanas. La primera parte (derribo, electricidad, fontanería, alicatado de zona de trabajo) requiere que la cocina esté fuera de servicio. La segunda parte, con la instalación de muebles y electrodomésticos, permite ir recuperando funcionalidad. Si tienes todo definido antes de empezar (distribución, muebles, encimera y electrodomésticos pedidos), no hay pausas por espera de materiales.' },
      ],
    },
    'coslada': {
      intro: 'Al reformar una cocina en Coslada conviene comprobar si la instalación eléctrica puede asumir la distribución y los electrodomésticos previstos. Si necesita renovación, hacerlo dentro de la misma obra evita intervenir de nuevo después. La reforma completa resuelve el fondo del problema, no solo la estética.',
      body: [
        { type: 'h3', text: 'Electricidad en cocinas de Coslada: la primera partida que hay que resolver' },
        { type: 'p', text: 'Si la instalación eléctrica de la cocina no tiene circuitos dedicados para electrodomésticos de alta potencia, se producen sobrecargas cuando se usan simultáneamente el horno, la vitrocerámica y el lavavajillas. En una reforma de cocina, la instalación eléctrica nueva no es un extra: es la base que hace que todos los demás electrodomésticos funcionen correctamente desde el primer día.' },
        { type: 'h3', text: 'Opciones de distribución en cocinas pequeñas' },
        { type: 'p', text: 'En cocinas con distribución en línea o en L, reorganizar la posición del fregadero, la vitrocerámica y el área de trabajo puede mejorar el flujo sin necesidad de cambiar la superficie disponible. Si el presupuesto no permite abrir la cocina al salón, una redistribución inteligente dentro del mismo espacio puede cambiar significativamente cómo funciona.' },
      ],
    },
    'san-fernando-de-henares': {
      intro: 'El presupuesto de una reforma de cocina en San Fernando de Henares depende de si la vivienda necesita instalación eléctrica nueva o si la que tiene es suficiente para el uso actual. En pisos del casco suele haber que renovarla; en viviendas más recientes puede aprovecharse. La visita técnica aclara qué alcance corresponde antes de comprometer ningún número.',
      body: [
        { type: 'h3', text: 'Instalaciones de cocina según la época de construcción en San Fernando' },
        { type: 'p', text: 'En viviendas del casco antiguo de San Fernando con instalaciones que no se han actualizado, la electricidad de la cocina puede no ser suficiente para el uso actual. En las viviendas de Parque Roma o Parque Henares, construidas en los 90, la instalación puede estar mejor dimensionada y la reforma puede concentrarse en muebles, encimera y acabados. La diferencia en presupuesto entre ambos casos es relevante y la visita técnica la aclara antes de comprometer ningún número.' },
        { type: 'h3', text: 'Cocina americana o con isla: cuándo tiene sentido' },
        { type: 'p', text: 'Abrir la cocina al salón es especialmente efectivo en pisos de San Fernando donde el tabique de la cocina crea un cuello de botella entre la zona de día. Si el tabique es de distribución (no de carga), es una obra menor que no necesita arquitecto y que transforma la percepción de amplitud de toda la vivienda. Lo presupuestamos como partida independiente para que puedas valorar si merece la pena en tu caso.' },
      ],
    },
    'guadalajara': {
      intro: 'Si quieres abrir la cocina al salón en Guadalajara, primero hay que comprobar qué función tiene el tabique y cómo afectará el cambio a instalaciones, extracción e iluminación. Solo después tiene sentido valorar distribución y presupuesto. El presupuesto incluye la apertura como partida independiente para que puedas valorarla antes de decidir.',
      body: [
        { type: 'h3', text: 'Abrir la cocina al salón en pisos de Guadalajara: proceso y resultado' },
        { type: 'p', text: 'Abrir la cocina al salón puede tener un impacto visual importante en pisos con distribución cerrada. Antes de decidir, conviene comprobar la función del tabique y cómo afectaría el cambio a la electricidad, la extracción y la iluminación. Solo con esa información cerrada tiene sentido valorar distribución y presupuesto.' },
        { type: 'h3', text: 'Qué decidir antes de empezar la reforma de cocina' },
        { type: 'p', text: 'Cuanto más definido esté todo antes de arrancar la obra, mejor se respeta el plazo. Lo mínimo necesario antes de empezar: distribución de muebles cerrada, encimera elegida y electrodomésticos seleccionados y pedidos. Si los materiales no están disponibles cuando termina la obra civil, la espera puede alargar el plazo entre 2 y 4 semanas adicionales. Te guiamos en la selección de todo esto durante la visita de diseño previa a la obra.' },
      ],
    },
    'azuqueca-de-henares': {
      intro: 'Si en Azuqueca la instalación eléctrica de la cocina está en buen estado, la reforma puede centrarse en lo que más cambia visualmente: muebles nuevos, encimera, electrodomésticos y alicatado de zona de trabajo. El resultado visual es equivalente a una reforma completa, con un plazo de 2 a 3 semanas y un presupuesto más ajustado.',
      body: [
        { type: 'h3', text: 'Reforma de actualización en cocinas de Azuqueca: qué se puede cambiar sin obra pesada' },
        { type: 'p', text: 'Si la instalación eléctrica de la cocina está en buen estado, la reforma puede centrarse en lo que más cambia visualmente: muebles nuevos, encimera, electrodomésticos y alicatado de zona de trabajo, sin tocar los circuitos de fondo. El resultado visual es el mismo que una reforma integral, con un plazo de 2 a 3 semanas y un presupuesto más ajustado.' },
        { type: 'h3', text: 'Encimeras y electrodomésticos: las decisiones con más impacto en el resultado' },
        { type: 'p', text: 'La encimera y los electrodomésticos son las dos partidas que más condicionan el presupuesto y el aspecto final de una cocina nueva. La encimera de silestone o porcelánico de gran formato es más duradera y más fácil de mantener que el granito oscuro o los acabados de cocinas con décadas de uso. Los electrodomésticos integrados mejoran la estética y permiten aprovechar mejor el espacio de almacenaje. En la visita de diseño repasamos todas las opciones con sus precios reales.' },
      ],
    },
    'meco': {
      intro: 'Si vas a reformar la cocina de un adosado en Meco y dispones de más superficie, merece la pena estudiar la distribución antes de elegir materiales: una isla, una península o una zona adicional de almacenaje necesitan resolverse desde el plano. Con espacio disponible, la primera decisión es la distribución, no los materiales.',
      body: [
        { type: 'h3', text: 'Cocinas con más espacio en adosados de Meco: opciones que no caben en los pisos' },
        { type: 'p', text: 'Si la cocina tiene más superficie de la habitual en los pisos de bloque, se abren opciones que no son posibles en espacios reducidos: isla central con función de encimera y barra, zona de despensa independiente, o cocina americana con acceso directo desde el salón. Con ese espacio disponible, la primera decisión no es qué muebles elegir sino cómo se quiere vivir la cocina: el diseño viene después.' },
        { type: 'h3', text: 'Cocina abierta en adosados: licencia y proceso' },
        { type: 'p', text: 'Abrir la cocina al comedor o al salón en un adosado de Meco puede implicar eliminar un tabique de distribución (obra menor, sin arquitecto) o modificar un hueco existente. En algunos casos la apertura necesita licencia de obra menor en el Ayuntamiento de Meco. Evaluamos la estructura antes de presupuestar y tramitamos la licencia si es necesaria, sin que suponga un trámite adicional para ti.' },
      ],
    },
    'camarma-de-esteruelas': {
      intro: 'Si la cocina de tu vivienda en Camarma lleva más de una década sin renovar, una reforma de cocina permite repensar el espacio con criterio: más almacenaje, mejor flujo de trabajo, y si tiene sentido integrarla mejor con el comedor. Con espacio disponible en viviendas unifamiliares, las opciones son significativamente mayores que en pisos de bloque.',
      body: [
        { type: 'h3', text: 'Cocinas amplias en viviendas de Camarma: cómo aprovechar el espacio' },
        { type: 'p', text: 'Si la cocina de la vivienda tiene espacio suficiente para replantear la distribución, una reforma puede ir más allá del cambio de muebles: separar la zona de trabajo de la de almacenaje, añadir una isla, o integrar mejor la cocina con el comedor. Cuando la cocina lleva tiempo sin actualizarse, replantear la distribución desde el principio suele dar mejores resultados que adaptar el diseño a los muebles existentes.' },
        { type: 'h3', text: 'Qué conviene decidir antes de la visita de diseño' },
        { type: 'p', text: 'Antes de la primera visita, es útil tener claro cuántas personas usan la cocina y cómo: si la persona que cocina necesita espacio para trabajar con todo desplegado, si hay interés en cocina abierta al comedor, o si el almacenaje es la prioridad. Con esa información, la visita de diseño se convierte en una sesión productiva donde llegamos a opciones concretas con precio real, en lugar de una visita general.' },
      ],
    },
  },
  'reforma-pisos': {
    'alcala-de-henares': {
      intro: 'Antes de presupuestar la reforma de un piso en Alcalá, la pregunta más importante no es qué materiales elegir: es qué estado tienen las instalaciones. Si el cuadro eléctrico o la fontanería necesitan renovación, lo más eficiente es hacerlo todo a la vez. Si están en buen estado, baño, cocina, suelos y pintura pueden transformar el piso sin necesitar obra pesada.',
      body: [
        { type: 'h3', text: 'Qué priorizar cuando no se puede renovar todo a la vez en Alcalá' },
        { type: 'p', text: 'Con un presupuesto acotado, los suelos nuevos y la pintura son lo que más cambia la percepción visual del conjunto por el menor coste por metro cuadrado. El siguiente nivel es baño o cocina, según cuál esté en peor estado o tenga mayor impacto en el uso diario. Lo importante es no renovar acabados sobre instalaciones que van a necesitar cambiarse en pocos años: abre la misma zona dos veces y sale más caro que haberlo hecho todo a la vez.' },
        { type: 'h3', text: 'El potencial de una reforma parcial bien planificada en Alcalá' },
        { type: 'p', text: 'Si las instalaciones están en buen estado, baño completo, cocina con muebles y electrodomésticos, suelos nuevos en toda la vivienda y pintura pueden transformar el piso completamente sin necesitar obra pesada. El resultado es visual y funcionalmente equivalente a un piso renovado, con un presupuesto sensiblemente inferior al de una reforma integral. La visita determina si ese escenario es el correcto para tu vivienda.' },
      ],
    },
    'torrejon-de-ardoz': {
      intro: 'Antes de reformar un piso en Torrejón de Ardoz conviene decidir si tiene más sentido abordar la vivienda de una vez o trabajar por fases. La respuesta depende del estado de las instalaciones: si el cuadro y la fontanería están al límite, reformar de una vez sale significativamente más barato que abrir el piso en dos obras.',
      body: [
        { type: 'h3', text: 'Qué conviene revisar antes de decidir qué reformar en Torrejón' },
        { type: 'p', text: 'Antes de decidir el alcance de la reforma conviene saber el estado de las instalaciones. Si el cuadro eléctrico y la fontanería están en buen estado, baño, cocina, suelos y pintura pueden transformar el piso sin obra pesada. Si necesitan renovación, lo más eficiente es hacer todo a la vez con el piso abierto una sola vez. La visita técnica gratuita determina en cuál de los dos escenarios estás, antes de comprometer ningún número.' },
        { type: 'h3', text: 'Reformar por partes: qué priorizar cuando no se puede hacer todo a la vez' },
        { type: 'p', text: 'Si el presupuesto no permite hacerlo todo de una vez, suelos nuevos y pintura son lo que más cambia la percepción visual del conjunto por el menor coste por metro cuadrado. El siguiente nivel es baño o cocina por separado, según cuál esté en peor estado o tenga mayor impacto en el día a día. Lo que conviene evitar es renovar acabados sobre instalaciones que van a necesitar cambiarse en poco tiempo: eso obliga a abrir el piso otra vez.' },
      ],
    },
    'coslada': {
      intro: 'Reformar un piso en Coslada tiene una variable que conviene evaluar desde el principio: si hay indicios de humedad en la vivienda, conviene identificar su origen antes de cerrar los acabados. Pintar o revestir sin resolver la causa puede hacer que el problema reaparezca después de la reforma. Conocer el estado real antes de cerrar el presupuesto evita sorpresas a mitad de obra.',
      body: [
        { type: 'h3', text: 'Antes de presupuestar: cómo detectar humedades en un piso de Coslada' },
        { type: 'p', text: 'En algunos bloques de Coslada, las humedades en plantas bajas no son visibles hasta que empieza la obra. Conocer el estado real antes de firmar el contrato es lo que hace que el precio cerrado sea realmente cerrado. En la visita técnica revisamos el estado de la solera, los muros y la cubierta cuando aplica, y lo incluimos en el presupuesto cuando el estado lo requiere.' },
        { type: 'h3', text: 'Qué instalaciones conviene renovar y qué puede esperar' },
        { type: 'p', text: 'No todas las instalaciones de un piso de los 80 en Coslada están en el mismo estado. La revisión en la visita técnica determina qué necesita sustitución urgente y qué puede mantenerse. Esto evita presupuestos que incluyen todo por defecto (más caros de lo necesario) o presupuestos que no incluyen nada y se desvían a mitad de obra cuando aparecen los problemas.' },
      ],
    },
    'san-fernando-de-henares': {
      intro: 'Si tienes una vivienda en San Fernando de Henares, el alcance de la reforma depende más de cuándo se construyó que de lo que quieres cambiar. Los pisos del casco antiguo suelen necesitar instalaciones nuevas; los de las promociones más recientes pueden limitarse a acabados y distribución. La diferencia en presupuesto entre ambos casos puede ser relevante. La visita técnica lo determina.',
      body: [
        { type: 'h3', text: 'Alcance de la reforma según la zona y la época de construcción' },
        { type: 'p', text: 'En viviendas del casco antiguo de San Fernando donde las instalaciones no se han actualizado, el cuadro eléctrico, la fontanería y la carpintería exterior pueden necesitar revisión o sustitución además de los acabados. Un piso de Parque Roma o Parque Henares de los años 90 puede tener instalaciones aprovechables y el alcance puede centrarse en acabados y distribución. El presupuesto entre ambos casos puede diferir de manera significativa. La visita técnica lo aclara antes de comprometer cualquier número.' },
        { type: 'h3', text: '¿Se puede vivir en el piso durante la reforma?' },
        { type: 'p', text: 'En reformas parciales (baño, cocina o suelos por separado), es posible vivir en el piso aunque resulte incómodo durante los días de obra más intensa. En reformas integrales con derribo general, no es recomendable por el polvo, el ruido y los cortes de suministros. Si no tienes alternativa, diseñamos una secuencia de trabajo por zonas para que siempre haya una parte habitable de la vivienda.' },
      ],
    },
    'guadalajara': {
      intro: 'En Guadalajara, el clima continental hace que el cambio de carpintería exterior a PVC con doble acristalamiento tenga un impacto real en el confort térmico y acústico. Si las ventanas son originales de los años 80, conviene valorar su renovación como parte de la reforma: hacerlo en la misma obra es más eficiente que abordarlas por separado después.',
      body: [
        { type: 'h3', text: 'Carpintería exterior en Guadalajara: cuándo tiene sentido incluirla en la reforma' },
        { type: 'p', text: 'El cambio de carpintería exterior a PVC con doble acristalamiento mejora el confort térmico y acústico de la vivienda. En Guadalajara, con un clima de mayor amplitud térmica que en el Corredor madrileño, la mejora puede ser especialmente perceptible. Si las ventanas llevan décadas sin renovarse, incluir la carpintería en la misma obra evita tener que intervenir por separado después.' },
        { type: 'h3', text: 'Instalaciones en Guadalajara: qué evaluar antes de presupuestar' },
        { type: 'p', text: 'Si la vivienda lleva años sin una revisión de instalaciones, el cuadro eléctrico y la fontanería son las dos partidas que con más frecuencia condicionan el presupuesto final. Evaluarlas en la visita previa evita que aparezcan como extras cuando la obra ya está en marcha.' },
      ],
    },
    'azuqueca-de-henares': {
      intro: 'En pisos de Azuqueca donde las instalaciones están en buen estado, la reforma puede concentrarse en lo que más transforma visualmente: suelos nuevos, baño renovado, cocina actualizada y pintura. El resultado es un piso completamente renovado sin necesitar obra pesada. Lo verificamos en la visita técnica antes de cerrar el alcance.',
      body: [
        { type: 'h3', text: 'Estado de instalaciones en Azuqueca: qué determina la reforma de piso' },
        { type: 'p', text: 'Si las instalaciones de la vivienda están en buen estado, la reforma puede concentrarse en lo que más impacto tiene visualmente: suelos nuevos, baño renovado, cocina actualizada y pintura, sin necesariamente tocar la instalación eléctrica o la fontanería.' },
        { type: 'h3', text: 'Suelos en una reforma de piso: qué opciones hay y cuánto cuestan' },
        { type: 'p', text: 'El suelo es la superficie que más transforma visualmente una vivienda por euro invertido. Las opciones más comunes: porcelánico de gran formato, tarima flotante de laminado AC5, o microcemento en salón (requiere preparación de base específica). El presupuesto cerrado incluye materiales, adhesivo, nivelación de base y remates de transición.' },
      ],
    },
    'meco': {
      intro: 'Reformar la vivienda en Meco tiene una pregunta específica que no existe en los pisos de bloque: ¿se interviene en las dos plantas a la vez o solo en una? Hacer las dos en la misma obra es más económico y más rápido en total. Reformar solo una planta y dejar la otra para después implica costes adicionales de desescombro y coordinación.',
      body: [
        { type: 'h3', text: 'Reformar un adosado de dos plantas en Meco: cómo organizarlo' },
        { type: 'p', text: 'La distribución en dos plantas de los adosados de Meco plantea una pregunta que no existe en los pisos de bloque: ¿se interviene en ambas plantas a la vez o solo en una? Hacer las dos plantas en la misma obra es más económico (el equipo está en la vivienda, el desescombro se hace una sola vez) y más rápido en total. Reformar solo una planta y dejar la otra para después implica volver a abrir con los costes adicionales que conlleva.' },
        { type: 'h3', text: 'Terrazas y jardines en viviendas de Meco: qué puede incluirse en la reforma' },
        { type: 'p', text: 'En los adosados de Meco con terraza o jardín, la reforma del interior puede ampliarse para incluir cerramiento de terraza para ganar metros habitables, solado exterior con porcelánico antideslizante, o remodelación de zona ajardinada. Cada una de estas actuaciones tiene sus propios requisitos de licencia y normativa de urbanización. Las evaluamos en la visita y las presupuestamos de manera independiente para que puedas decidir qué incluir en la primera fase.' },
      ],
    },
    'camarma-de-esteruelas': {
      intro: 'En una reforma de vivienda en Camarma, definir prioridades antes de presupuestar es el primer paso: no siempre tiene sentido abordar interior, cubierta, cerramientos y zonas exteriores en la misma obra. La visita técnica gratuita identifica qué es urgente, qué puede esperar y qué orden de ejecución tiene más sentido para tu caso y tu presupuesto.',
      body: [
        { type: 'h3', text: 'Reformar una vivienda unifamiliar en Camarma: definir prioridades antes de presupuestar' },
        { type: 'p', text: 'En Camarma, cuando se reforma una vivienda unifamiliar de una o dos plantas, hay más variables que en un apartamento de bloque: hay más metros, puede haber cubierta que revisar, garage o zonas exteriores que intervenir. Definir qué se incluye y qué se deja para una fase posterior es la primera conversación que tenemos en la visita técnica gratuita.' },
        { type: 'h3', text: 'Qué es imprescindible renovar en una vivienda de más de 20 años en Camarma' },
        { type: 'p', text: 'Las instalaciones son el primer criterio: instalación eléctrica si el cuadro es de los años 90 o anterior, fontanería si hay tuberías que ya han dado señales de deterioro, y cubierta si hay humedades en la planta superior. Renovarlas a la vez que se hace el resto de la reforma evita volver a abrir la vivienda en pocos años, con los costes adicionales que eso implica.' },
      ],
    },
  },
  'locales-comerciales': {
    'alcala-de-henares': {
      intro: 'Abrir un negocio en Alcalá implica tramitar la licencia de actividad antes de inaugurar. En un local de hostelería, la tramitación administrativa puede condicionar la fecha de apertura: por eso conviene coordinar documentación y obra desde el principio, en lugar de dejar los trámites para cuando el local ya esté terminado.',
      body: [
        { type: 'h3', text: 'Licencia de actividad en Alcalá: por qué hay que tramitarla desde el primer día' },
        { type: 'p', text: 'La tramitación relacionada con la actividad puede condicionar la fecha de apertura y debe planificarse junto con la obra, no después. Si se espera a terminar la obra para presentar la solicitud, la apertura se retrasa tanto como la propia tramitación. La forma de evitarlo es arrancar el expediente en paralelo desde el primer día. Lo coordinamos sin que tengas que hacer ninguna gestión por tu cuenta.' },
        { type: 'h3', text: 'Tipos de locales en Alcalá: casco urbano, centro comercial y polígono' },
        { type: 'p', text: 'Los locales en el casco urbano de Alcalá (planta baja de edificio residencial) suelen tener alturas de 2,80 a 3,20 metros y superficies entre 40 y 100 m²: adecuados para comercio, clínicas y oficinas. En los polígonos industriales, las naves diáfanas de 200 a 1.000 m² requieren proyectos de instalación completos. Cada tipo tiene sus propios requisitos técnicos y tramitación; los evaluamos en la visita inicial antes de comprometer presupuesto.' },
      ],
    },
    'torrejon-de-ardoz': {
      intro: 'En Torrejón, si el local está en polígono, el alcance de la obra puede variar mucho según si parte de cero o tiene instalaciones previas aprovechables. Para actividades sin licencia clasificada, la tramitación puede gestionarse en paralelo con la obra desde el primer día. La visita técnica determina el alcance y el plazo real antes de comprometer ningún número.',
      body: [
        { type: 'h3', text: 'Tramitación de licencia en Torrejón: qué determina el plazo real' },
        { type: 'p', text: 'El plazo de tramitación de licencia depende del tipo de actividad, no del municipio. Para actividades sin licencia clasificada, el régimen de declaración responsable permite iniciar la actividad desde la presentación de la documentación. Para hostelería y actividades clasificadas, se requiere resolución previa con plazos que conviene conocer antes de fijar la fecha de apertura. Te informamos del plazo realista para tu uso específico en la visita técnica.' },
        { type: 'h3', text: 'Locales en polígono en Torrejón: instalación desde cero' },
        { type: 'p', text: 'Los polígonos industriales de Torrejón de Ardoz albergan logística, distribución y también comercio y servicios. En naves sin acondicionamiento previo, la obra incluye instalación eléctrica completa con alumbrado de emergencia, fontanería, climatización, particiones y suelos. El coste por metro cuadrado es diferente al de un local en casco urbano y el presupuesto debe contemplar todas las instalaciones desde el principio.' },
      ],
    },
    'coslada': {
      intro: 'Si el local en Coslada está en polígono industrial, la obra parte a menudo de cero: instalación eléctrica completa, fontanería si el uso lo requiere, climatización y particiones. Si está en casco urbano, puede aprovechar instalaciones existentes. El alcance lo determina la visita técnica antes de comprometer ningún número. En hostelería, la tramitación de licencia es lo que más condiciona la fecha de apertura.',
      body: [
        { type: 'h3', text: 'Locales en Coslada: casco urbano y zonas industriales con necesidades distintas' },
        { type: 'p', text: 'Coslada combina hostelería y comercio en el núcleo urbano con logística y talleres en zonas industriales. En ambos casos la obra de adecuación del local tiene características distintas: el local urbano suele partir de un espacio con instalaciones básicas; la nave industrial puede partir de cero. La visita técnica determina el alcance real y el presupuesto incluye todo lo necesario para la apertura.' },
        { type: 'h3', text: 'La fecha de apertura como condición de la obra' },
        { type: 'p', text: 'Cuando tienes una fecha de apertura comprometida con tu negocio (contrato firmado, campaña lanzada, personal contratado), el plazo de obra y el de tramitación de licencia son igual de importantes que el presupuesto. Por eso nuestro proceso en locales comerciales comienza fijando la fecha de entrega en el contrato: el precio y el plazo son dos compromisos escritos, no estimaciones.' },
      ],
    },
    'san-fernando-de-henares': {
      intro: 'San Fernando de Henares tiene zona industrial activa y comercio urbano concentrado en el centro. Si el local está en zona industrial, el alcance de la obra suele ser mayor: instalación completa desde cero o adaptación de instalaciones existentes. Si es comercio o clínica en el casco, el tipo de uso determina el régimen de licencia.',
      body: [
        { type: 'h3', text: 'Zona industrial vs casco urbano en San Fernando de Henares' },
        { type: 'p', text: 'San Fernando de Henares tiene una zona industrial activa con polígonos donde los locales y naves requieren instalación completa desde el principio. En el casco urbano, los locales en planta baja de edificios residenciales parten de una estructura acondicionada con instalaciones básicas. El tipo de local condiciona tanto el presupuesto como el tipo de licencia que se necesita: te informamos de ambos en la visita técnica inicial.' },
        { type: 'h3', text: 'Documentación para la licencia según el uso del local' },
        { type: 'p', text: 'Para actividades sin licencia clasificada (comercio minorista, oficinas, consultorios básicos), muchos municipios del Corredor madrileño permiten el régimen de declaración responsable: presentas la documentación y puedes iniciar la actividad sin esperar resolución formal. Para hostelería, clínicas y actividades clasificadas, siempre se requiere proyecto técnico y resolución previa. Te confirmamos el régimen exacto para tu actividad antes de arrancar.' },
      ],
    },
    'guadalajara': {
      intro: 'Para abrir un negocio en Guadalajara, el alcance de la reforma depende del uso previsto y del estado previo del local. La tramitación de la licencia de actividad se coordina desde el primer día en paralelo con la obra: esperar a terminar la reforma para presentar la documentación puede retrasar la apertura de forma innecesaria.',
      body: [
        { type: 'h3', text: 'Tramitación de licencia en Guadalajara: qué hay que prever según la actividad' },
        { type: 'p', text: 'El tipo de actividad determina el régimen de licencia y el plazo de tramitación. Para actividades sin licencia clasificada, la documentación correcta desde el principio es lo que más contribuye a que el proceso sea ágil. Para hostelería, clínicas y actividades clasificadas, la tramitación requiere resolución previa y conviene iniciarla en paralelo con la obra. Confirmamos el régimen y el plazo realista para tu actividad en la primera reunión.' },
        { type: 'h3', text: 'Requisitos técnicos del local según la actividad en Guadalajara' },
        { type: 'p', text: 'Según la actividad y el alcance de la intervención, pueden ser necesarios proyectos, documentación técnica o trámites específicos antes de la apertura. En Guadalajara, el proyecto debe adaptarse a las ordenanzas municipales específicas cuando corresponda. Lo redactamos con los colaboradores técnicos habituales e incluimos el coste en el presupuesto cerrado, para que no aparezca como un extra después de haber firmado el contrato de obra.' },
      ],
    },
    'azuqueca-de-henares': {
      intro: 'Para abrir un negocio en Azuqueca de Henares, el tipo de actividad determina el régimen de licencia. Para usos sin licencia clasificada, la declaración responsable permite iniciar la actividad desde la presentación de la documentación. Para hostelería y actividades clasificadas se requiere resolución previa. Te confirmamos el régimen exacto en la primera reunión, antes de arrancar la obra.',
      body: [
        { type: 'h3', text: 'Declaración responsable en Azuqueca: cuándo se puede usar y cuándo no' },
        { type: 'p', text: 'En Azuqueca de Henares, para actividades sin licencia clasificada (comercio minorista, oficinas, consultorios básicos), el régimen de declaración responsable permite iniciar la actividad desde la presentación de la documentación sin esperar resolución formal. Para hostelería y actividades clasificadas no se puede usar. Te confirmamos en la primera reunión qué régimen corresponde a tu actividad y qué documentación hay que preparar.' },
        { type: 'h3', text: 'Plazos realistas de apertura para locales en Azuqueca' },
        { type: 'p', text: 'El plazo total entre inicio de obra y apertura depende del tipo de actividad, el alcance de la reforma y la gestión de la tramitación. Para hostelería y actividades clasificadas, la tramitación de la licencia puede condicionar la fecha de apertura de forma determinante: por eso la planificación empieza en la primera reunión, no cuando termina la obra.' },
      ],
    },
    'meco': {
      intro: 'Para adecuar un local en Meco, el alcance de la obra depende del uso previsto y del estado previo: un local en el casco puede partir de instalaciones básicas existentes, mientras que una nave en el polígono industrial puede necesitar instalación completa desde cero. La tramitación de permisos se gestiona en paralelo con la obra. La visita lo determina antes de presupuestar.',
      body: [
        { type: 'h3', text: 'Locales en Meco: cómo definir el alcance según el uso' },
        { type: 'p', text: 'Para comercios, consultorios y oficinas en Meco, el alcance de la obra depende del estado previo del local y del uso previsto: si parte de instalaciones básicas existentes o si necesita instalación completa desde cero. El régimen de licencia también varía según la actividad. Lo evaluamos en la visita técnica inicial antes de comprometer ningún número.' },
        { type: 'h3', text: 'Naves industriales en el polígono de Meco: instalación completa' },
        { type: 'p', text: 'Si el negocio se ubica en el polígono industrial de Meco, la obra de adecuación suele implicar instalación eléctrica completa con cuadro propio, fontanería si el uso lo requiere, climatización, particiones de pladur y suelos. Es una obra de mayor alcance que un local en casco urbano, con un presupuesto que conviene detallar partida por partida para no tener sorpresas durante la ejecución.' },
      ],
    },
    'camarma-de-esteruelas': {
      intro: 'Para adecuar un local en Camarma de Esteruelas, el tipo de actividad determina el régimen de licencia. Para actividades sin licencia clasificada, el proceso puede ser ágil si la documentación se presenta correctamente desde el principio. Antes de comprometerte con una fecha de apertura, confirmamos el plazo exacto para tu tipo de actividad.',
      body: [
        { type: 'h3', text: 'Tramitación en Camarma: qué determina el plazo según la actividad' },
        { type: 'p', text: 'En Camarma de Esteruelas, el tipo de actividad determina el régimen de licencia y el plazo de tramitación. Para actividades sin licencia clasificada, la documentación correcta desde el principio es lo que más contribuye a que el proceso sea ágil. Para actividades clasificadas, se requiere resolución previa. Confirmamos el régimen exacto en la primera reunión para que la fecha de apertura tenga una base real.' },
        { type: 'h3', text: 'Qué incluye la obra de adecuación en Camarma' },
        { type: 'p', text: 'Para cualquier tipo de actividad, la obra de adecuación implica como mínimo instalación eléctrica adecuada al uso, suelos y pinturas, y las instalaciones específicas que exija la actividad. Si el uso requiere fontanería, climatización o distribución con pladur, lo incluimos en el alcance. Lo presupuestamos todo en la primera visita con precio cerrado.' },
      ],
    },
  },
  'comunidades-vecinos': {
    'alcala-de-henares': {
      intro: 'Antes de convocar la junta para aprobar una obra en la comunidad en Alcalá, conviene tener el presupuesto con memoria descriptiva, fotografías y partidas desglosadas. Un presupuesto bien presentado mejora significativamente las probabilidades de aprobación. Elaboramos toda la documentación necesaria y, si se requiere, asistimos a la junta para explicar el alcance técnico.',
      body: [
        { type: 'h3', text: 'Edificios de los 70 y 80 en Alcalá: las obras más frecuentes en comunidades' },
        { type: 'p', text: 'En comunidades de propietarios con edificios de cierta antigüedad en Alcalá, los elementos que con más frecuencia requieren intervención son cubiertas sin impermeabilización actualizada, que pueden ser origen de humedades en últimas plantas; portales con revestimientos deteriorados; y ascensores que ya no cumplen la normativa de seguridad actual. Cada tipo de actuación tiene su propio proceso de aprobación en junta y su propia tramitación.' },
        { type: 'h3', text: 'Informe de Evaluación del Edificio en Alcalá: qué implica para la comunidad' },
        { type: 'p', text: 'Los edificios de más de 50 años en Alcalá de Henares están sujetos al Informe de Evaluación del Edificio (IEE), condición previa para acceder a las ayudas de rehabilitación energética de la Comunidad de Madrid. Si el edificio no tiene el IEE, la comunidad no puede solicitar esas subvenciones. Si tu comunidad está en esa situación, tiene sentido coordinarlo antes de presupuestar grandes obras de fachada o cubierta.' },
      ],
    },
    'torrejon-de-ardoz': {
      intro: 'Si la comunidad de Torrejón está planteando obras de fachada, cubierta o instalaciones de cierto alcance, tramitar el Informe de Evaluación del Edificio primero puede abrir el acceso a ayudas de rehabilitación que reduzcan el coste para los propietarios. Coordinamos esa gestión antes de presupuestar la obra, para que la comunidad tenga ambas opciones sobre la mesa antes de votar.',
      body: [
        { type: 'h3', text: 'Comunidades de Torrejón: IEE y ayudas de rehabilitación' },
        { type: 'p', text: 'En Torrejón de Ardoz, muchos edificios de los años 70 y 80 todavía no tienen el Informe de Evaluación del Edificio, que es la condición previa para acceder a las ayudas de rehabilitación de la Comunidad de Madrid. Si la comunidad está planteando obras de fachada, cubierta o instalaciones de cierto alcance, tramitar el IEE primero puede abrir el acceso a subvenciones que reduzcan significativamente el coste para los propietarios.' },
        { type: 'h3', text: 'Cómo minimizamos las molestias a los vecinos durante la obra' },
        { type: 'p', text: 'En comunidades de propietarios con vecinos que viven en el edificio durante la obra, la coordinación de horarios y el mantenimiento de los accesos son tan importantes como la calidad de la ejecución. Adaptamos los horarios de trabajo para que los accesos sean siempre transitables, avisamos con antelación de la fase de mayor ruido y protegemos los acabados existentes durante toda la obra.' },
      ],
    },
    'coslada': {
      intro: 'Cuando una humedad afecta a zonas comunes, el presupuesto debería explicar no solo cómo reparar el acabado, sino qué origen se ha detectado y qué trabajos se realizarán para evitar que reaparezca. Hacerlo bien desde el principio evita recurrencias que terminan siendo más caras. Presupuestamos con memoria descriptiva lista para presentar en junta.',
      body: [
        { type: 'h3', text: 'Humedades en zonas comunes: cómo definir el alcance antes de ir a junta' },
        { type: 'p', text: 'Cuando aparecen indicios de humedad en plantas bajas o en zonas comunes, el primer paso es identificar el origen: si es capilaridad desde la solera, filtración desde cubierta u otro foco. Sin esa información, el presupuesto no puede cerrarse con precisión y el trabajo ejecutado puede no resolver el problema de raíz. Hacerlo bien desde el principio evita recurrencias y facilita la aprobación en junta.' },
        { type: 'h3', text: 'Presupuesto para junta: cómo prepararlo para facilitar la aprobación' },
        { type: 'p', text: 'Un presupuesto que se presenta en junta necesita estar bien documentado para facilitar el voto favorable de los propietarios. Elaboramos presupuesto con memoria descriptiva, fotografías del estado previo, partidas desglosadas por capítulo y planificación de obra. El formato permite a los propietarios entender qué se va a hacer, en cuánto tiempo y a qué coste sin necesidad de conocimientos técnicos.' },
      ],
    },
    'san-fernando-de-henares': {
      intro: 'Antes de llevar una obra a junta en San Fernando de Henares conviene que el presupuesto deje claro qué se va a hacer, por qué es necesario, qué zonas afecta y cómo se organizará la ejecución. Esa información facilita que propietarios y administración puedan valorar la propuesta con el mismo alcance delante. Hacemos la visita técnica y elaboramos toda la documentación necesaria.',
      body: [
        { type: 'h3', text: 'Obras en comunidades de San Fernando: distintas necesidades según la época del edificio' },
        { type: 'p', text: 'Las comunidades de San Fernando de los años 80 y 90 acumulan necesidades de mantenimiento que varían por edificio: portales con revestimientos originales que hay que renovar, cubiertas que en algunos casos nunca se han impermeabilizado, y ascensores de primera generación en edificios de más de cuatro plantas. En los edificios más recientes de Parque Roma y Parque Henares, las actuaciones suelen ser de mejora más que de urgencia.' },
        { type: 'h3', text: 'Qué necesita la obra para aprobarse en junta' },
        { type: 'p', text: 'Antes de presentar una obra a junta conviene definir con claridad el alcance, la necesidad, el presupuesto, las zonas afectadas y cómo se organizará la ejecución. Los requisitos de aprobación dependen del tipo de actuación y deben comprobarse en cada caso. Lo indicamos en la visita previa al presupuesto, para que la comunidad llegue a junta con la información necesaria.' },
      ],
    },
    'guadalajara': {
      intro: 'Para comunidades en Guadalajara que lleven tiempo aplazando una obra, el primer paso es tener el presupuesto con la documentación necesaria: memoria descriptiva, fotografías del estado previo y partidas desglosadas. Hacemos la visita técnica, elaboramos el informe de estado previo y preparamos el presupuesto en el formato adecuado para presentar en junta.',
      body: [
        { type: 'h3', text: 'Obras con licencia en comunidades de Guadalajara: cómo planificar los trámites' },
        { type: 'p', text: 'Las obras en zonas comunes que requieren licencia municipal (cambios en fachada, instalación de ascensor) necesitan planificación previa para no retrasar la ejecución. Si la comunidad lleva tiempo aplazando una obra por incertidumbre en los plazos, la primera conversación con la administración municipal aclara el trámite exacto que corresponde. Lo coordinamos antes de presentar el presupuesto en junta.' },
        { type: 'h3', text: 'Edificios residenciales en Guadalajara: obras habituales en zonas comunes' },
        { type: 'p', text: 'Cuando una comunidad lleva años sin intervenir determinadas zonas comunes, conviene revisar el estado real antes de decidir si basta con mantenimiento o hace falta una actuación más amplia. Hacemos la visita técnica, elaboramos el informe de estado previo y preparamos el presupuesto con el formato adecuado para presentar en junta.' },
      ],
    },
    'azuqueca-de-henares': {
      intro: 'Para obras de mayor alcance en comunidades de Azuqueca, la documentación para junta es el primer paso. Un presupuesto bien presentado, con memoria descriptiva, fotografías del estado previo y partidas desglosadas, mejora las probabilidades de aprobación. Si es útil, podemos asistir a la junta para explicar el alcance y responder dudas técnicas de los propietarios.',
      body: [
        { type: 'h3', text: 'Comunidades en Azuqueca: tipos de actuaciones en zonas comunes' },
        { type: 'p', text: 'En comunidades con edificios de construcción más reciente, las actuaciones suelen centrarse en mantenimiento: pintura de portal, renovación de iluminación, reparación de pequeños deterioros en fachada. Para obras de mayor alcance (impermeabilización de cubierta, rehabilitación de fachada), la aprobación en junta con la documentación adecuada es el primer paso.' },
        { type: 'h3', text: 'Cómo preparar la junta de propietarios para aprobar una obra' },
        { type: 'p', text: 'Elaboramos toda la documentación necesaria para que la junta cuente con información suficiente: presupuesto detallado, memoria descriptiva, planificación de obra y fotografías del estado previo. Si es útil, podemos asistir a la junta para explicar el alcance y responder dudas técnicas de los propietarios. Una presentación bien preparada mejora significativamente las probabilidades de aprobación.' },
      ],
    },
    'meco': {
      intro: 'En urbanizaciones de Meco donde la comunidad gestiona viales, cercas o elementos comunitarios exteriores, el tipo de obra y la estructura de la comunidad determinan qué trámites son necesarios. Coordinamos con el presidente de la comunidad o el administrador de fincas desde la primera visita. El presupuesto incluye la documentación necesaria para presentar en junta.',
      body: [
        { type: 'h3', text: 'Comunidades en urbanizaciones de Meco: un tipo diferente de obra' },
        { type: 'p', text: 'En Meco, con predominio de adosados y unifamiliares en urbanización, las obras de comunidad tienen un carácter diferente al de un bloque de pisos: viales interiores deteriorados, cercas perimetrales, zonas verdes comunitarias o piscinas en algunas urbanizaciones. El tipo de obra y la estructura de la comunidad determinan qué mayoría se necesita en junta y qué trámites son necesarios.' },
        { type: 'h3', text: 'Gestión de la obra en urbanizaciones: comunicación con los vecinos' },
        { type: 'p', text: 'En urbanizaciones pequeñas de Meco donde todos los vecinos se conocen, la comunicación directa durante la obra es especialmente importante. Informamos a la comunidad del inicio de cada fase, adaptamos los horarios de trabajo cuando afecta a elementos comunes de uso diario, y mantenemos el acceso a todas las viviendas durante toda la obra. Coordinamos con el presidente de la comunidad o el administrador de fincas.' },
      ],
    },
    'camarma-de-esteruelas': {
      intro: 'En comunidades pequeñas de Camarma es más fácil reunir a todos los propietarios y resolver dudas en persona antes de votar. Una obra bien explicada y bien documentada se aprueba con menos fricción que en grandes comunidades urbanas. Elaboramos el presupuesto con toda la documentación necesaria para la junta.',
      body: [
        { type: 'h3', text: 'Comunidades pequeñas en Camarma: toma de decisiones más rápida' },
        { type: 'p', text: 'Las comunidades de Camarma de Esteruelas son en su mayoría pequeñas, con un número reducido de propietarios por edificio o urbanización. Esa escala facilita la toma de decisiones en junta: es más fácil reunir a todos los propietarios, resolver dudas en persona y llegar a acuerdos. Las obras se aprueban y ejecutan con menos fricción burocrática que en grandes comunidades urbanas.' },
        { type: 'h3', text: 'Tipos de obras en las comunidades de Camarma' },
        { type: 'p', text: 'Las actuaciones en zonas comunes más frecuentes en Camarma son de conservación y mantenimiento: viales y accesos de urbanización deteriorados, elementos de cerramiento o vallado en mal estado, y pequeñas reparaciones de fachada o cubierta. Para obras de mayor alcance, elaboramos el presupuesto con toda la documentación necesaria para presentar en junta y obtener la aprobación necesaria.' },
      ],
    },
  },
};

// ─── FAQs únicas por hub de localidad (/zonas/) ──────────────────────────────
export const ZONE_FAQS: Record<string, { q: string; a: string }[]> = {
  'alcala-de-henares': [
    {
      q: '¿Qué reformas son más habituales en los pisos de El Val y Reyes Católicos?',
      a: 'Los edificios de El Val, Barrio del Pilar y Reyes Católicos se construyeron mayoritariamente en los años 70 y 80. La reforma más frecuente combina actualización de instalaciones (cuadro eléctrico y fontanería) con redistribución y renovación de baño y cocina. En pisos de más de 50 años, el cuadro de 2,3 kW y las tuberías de hierro galvanizado suelen condicionar el alcance real de la obra.',
    },
    {
      q: '¿Necesito licencia de obra en Alcalá de Henares para reformar mi piso?',
      a: 'Para pintura, suelos y renovación de baño y cocina sin tocar instalaciones comunes no se necesita licencia en Alcalá. Si la reforma incluye derribo de tabiques, cambio de ventanas en fachada o modificación de instalaciones, se necesita licencia de obra menor. El plazo en el Ayuntamiento de Alcalá es habitualmente de 3 a 5 semanas. Gestionamos el trámite completo.',
    },
  ],
  'torrejon-de-ardoz': [
    {
      q: '¿Qué viviendas de Torrejón de Ardoz suelen necesitar reforma integral?',
      a: 'Los bloques de Soto del Henares, Parque Cataluña y Las Veredillas de los años 70 y 80 son los que más reformas integrales acumulan: instalaciones originales insuficientes, distribuciones con pasillos largos y acabados sin renovar desde la construcción. Una reforma integral en estos pisos incluye normalmente cuadro eléctrico nuevo, fontanería completa, redistribución de tabiques y renovación de baño y cocina.',
    },
    {
      q: '¿Cuánto tarda en tramitarse una licencia de obra en Torrejón de Ardoz?',
      a: 'La licencia de obra menor en el Ayuntamiento de Torrejón de Ardoz suele tardar entre 3 y 6 semanas. Para obras que no la requieren (pintura, suelos, baño y cocina sin afectar instalaciones comunes) se puede comenzar sin esperas. En reformas que sí necesitan licencia, planificamos el trámite en paralelo con el proyecto para no retrasar el inicio de la obra.',
    },
  ],
  'coslada': [
    {
      q: '¿Qué reformas hacéis en las viviendas de los años 80 de Coslada?',
      a: 'En Ciudad 70, Valleaguado y Ciudad San Pablo, los pisos de los 80 suelen necesitar renovación de fontanería y cuadro eléctrico junto con el cambio de baño y cocina. La cocina es el espacio más reformado: muchas tienen distribuciones cerradas y pequeñas que pueden integrarse con el salón con una obra de tabiquería menor, ganando amplitud sin ampliar el presupuesto significativamente.',
    },
    {
      q: '¿Puedo reformar el baño y la cocina de mi piso en Coslada en un mismo proyecto?',
      a: 'Sí, y es la opción más eficiente. Los gremios de fontanería y electricidad trabajan en ambos espacios en la misma movilización, lo que reduce el tiempo total de obra y el coste de coordinación. Si las instalaciones están en buen estado, el presupuesto combinado suele ser más económico que dos obras separadas en distintos momentos.',
    },
  ],
  'san-fernando-de-henares': [
    {
      q: '¿Qué diferencias hay entre reformar en el casco de San Fernando y en Parque Roma?',
      a: 'Los pisos del casco urbano de San Fernando de los años 80 y 90 suelen necesitar renovación de instalaciones además de los acabados. En las promociones más recientes de Parque Roma y Parque Henares, las instalaciones pueden estar en mejor estado y la reforma puede limitarse a materiales y distribución. La diferencia en presupuesto puede ser considerable; la visita técnica lo determina antes de comprometer nada.',
    },
    {
      q: '¿Cuánto tarda una reforma de baño en San Fernando de Henares?',
      a: 'Una reforma completa de baño en San Fernando, con cambio de alicatado, sanitarios, mueble e instalaciones nuevas de fontanería, tarda entre 10 y 18 días hábiles según el alcance. Si solo se renuevan los acabados sin tocar la fontanería, el plazo puede reducirse a una semana. El plazo exacto se confirma en la visita gratuita según el estado actual del baño.',
    },
  ],
  'guadalajara': [
    {
      q: '¿Qué reformas son más frecuentes en los pisos del Balconcillo y Aguas Vivas?',
      a: 'Los pisos del Balconcillo y Aguas Vivas de los años 70 y 90 acumulan necesidades similares: cuadros eléctricos insuficientes, fontanería de hierro galvanizado o cobre con décadas de uso y distribuciones con pasillos largos. La reforma más habitual combina instalaciones nuevas, redistribución de tabiques y renovación completa de baño y cocina.',
    },
    {
      q: '¿Los trámites de licencia de obra son más ágiles en Guadalajara que en los municipios madrileños?',
      a: 'En general sí. El Ayuntamiento de Guadalajara suele tramitar licencias de obra menor con plazos algo más cortos que los ayuntamientos del Corredor madrileño. Para obras que no requieren licencia (baño, cocina, suelos y pintura sin afectar instalaciones comunes ni fachada) el inicio es inmediato en cualquier municipio.',
    },
  ],
  'azuqueca-de-henares': [
    {
      q: '¿Trabajáis en Azuqueca de Henares aunque pertenezca a la provincia de Guadalajara?',
      a: 'Sí. Azuqueca de Henares forma parte de nuestra zona habitual de trabajo en el Corredor del Henares. El mismo equipo que trabaja en Alcalá, Torrejón y Coslada cubre también Azuqueca y Guadalajara sin coste adicional por desplazamiento. Mismo precio cerrado, mismo compromiso de plazo.',
    },
    {
      q: '¿Qué reformas son más habituales en los pisos de Azuqueca de los años 90?',
      a: 'En Azuqueca, la reforma de baño y cocina es la actuación más frecuente en pisos de los 90 donde las instalaciones están razonablemente bien pero los acabados han envejecido. En pisos más antiguos, la fontanería y el cuadro eléctrico suelen necesitar renovación. La visita técnica gratuita determina qué alcance corresponde a cada caso antes de cerrar el presupuesto.',
    },
  ],
  'meco': [
    {
      q: '¿Hacéis reformas de chalets y adosados en Meco?',
      a: 'Sí. Meco tiene una proporción elevada de viviendas unifamiliares y adosados en urbanizaciones. Las reformas más habituales incluyen redistribución de plantas, cerramiento de terrazas, reforma integral de baño y cocina y actualización de instalaciones en viviendas con 15 o más años. Mismo proceso y precio cerrado que para pisos.',
    },
    {
      q: '¿Qué obras necesitan licencia en el Ayuntamiento de Meco?',
      a: 'En Meco, para obras interiores menores (baño, cocina, suelos, tabiquería interior) basta con comunicación previa al Ayuntamiento, no licencia. Para obras que afecten a fachada o elementos estructurales, el trámite es licencia de obra menor con un plazo de 4 a 6 semanas. Gestionamos el proceso completo sin que tengas que hacer cola en el registro.',
    },
  ],
  'camarma-de-esteruelas': [
    {
      q: '¿Hacéis reformas integrales de viviendas unifamiliares en Camarma?',
      a: 'Sí. Camarma de Esteruelas tiene un perfil residencial mayoritariamente de unifamiliares y adosados. Los proyectos más habituales combinan redistribución de plantas, renovación de instalaciones, cambio de ventanas y reforma de cocina y baños. El mismo equipo, el mismo sistema de precio cerrado y el mismo compromiso de plazo que aplicamos en pisos.',
    },
    {
      q: '¿Cuánto tarda una reforma integral en una vivienda de Camarma de Esteruelas?',
      a: 'Una reforma integral de una vivienda unifamiliar de 130–160 m² en Camarma suele llevar entre 14 y 20 semanas. Si la reforma es parcial (solo una planta o solo instalaciones), el plazo puede reducirse a 8–12 semanas. La fecha de entrega queda fijada en el contrato, con penalización si nos retrasamos por causas propias.',
    },
  ],
};

// ─── Meta descriptions únicas por combinación servicio × localidad ───────────
// 140–160 chars. Angle único por combinación: no repetir la misma fórmula.
export const SERVICE_ZONE_META: Record<string, Record<string, string>> = {
  'reformas-integrales': {
    'alcala-de-henares':      'Reforma integral en Alcalá de Henares: revisamos instalaciones antes de cerrar precio. Pisos de los 70 y 80. Presupuesto cerrado en 48h, sin extras.',
    'torrejon-de-ardoz':      'Reforma integral en Torrejón de Ardoz: instalaciones al límite. Todo a la vez o por fases — te lo decimos en la visita gratuita. Precio cerrado.',
    'coslada':                'Reforma integral en Coslada: evaluamos humedades y estado de instalaciones en la visita. Presupuesto cerrado que no cambia a mitad de obra. Desde 24.900€.',
    'san-fernando-de-henares':'Reforma integral en San Fernando de Henares: el alcance cambia mucho entre casco antiguo y Parque Roma. Lo evaluamos en visita gratuita. Precio cerrado.',
    'guadalajara':            'Reforma integral en Guadalajara: permisos más ágiles que en el Corredor madrileño. Aislamiento con retorno real en clima continental. Precio cerrado.',
    'azuqueca-de-henares':    'Reforma integral en Azuqueca de Henares: pisos de los 90 con menos sorpresas en instalaciones. Más margen para distribución y acabados. Precio cerrado.',
    'meco':                   'Reforma integral en Meco: adosados y unifamiliares con cubierta, terrazas y distribución de dos plantas. Evaluamos el alcance completo en visita gratuita.',
    'camarma-de-esteruelas':  'Reforma integral en Camarma de Esteruelas: viviendas unifamiliares con cubierta, cerramientos y exterior. Definimos qué abordar en la visita gratuita.',
  },
  'reforma-banos': {
    'alcala-de-henares':      'Reforma de baño en Alcalá de Henares: cambio de bañera por ducha o reforma completa. Fontanería evaluada en visita técnica. Desde 3.200€. Precio cerrado.',
    'torrejon-de-ardoz':      'Reforma de baño en Torrejón de Ardoz: reforma completa en 1 a 3 semanas. Planificamos el plazo para minimizar días sin servicio. Desde 3.200€.',
    'coslada':                'Reforma de baño en Coslada: revisamos humedades y fontanería oculta antes de presupuestar. Baños renovados con gran formato. Desde 3.200€.',
    'san-fernando-de-henares':'Reforma de baño en San Fernando de Henares: alcance según la antigüedad del edificio. Impermeabilización siempre incluida. Precio cerrado. Desde 3.200€.',
    'guadalajara':            'Reforma de baño en Guadalajara: fontanería original de los 70–80 evaluada en visita. Opciones de accesibilidad sin obra adicional mayor. Desde 3.200€.',
    'azuqueca-de-henares':    'Reforma de baño en Azuqueca de Henares: modernización de acabados sin tocar instalaciones en pisos de los 90. Alicatado, sanitarios y mueble. Desde 3.200€.',
    'meco':                   'Reforma de baño en Meco: baños de 6 a 9 m² en adosados con más opciones que un piso de bloque. Duchas de obra a medida. Precio cerrado. Desde 3.200€.',
    'camarma-de-esteruelas':  'Reforma de baño en Camarma de Esteruelas: baños amplios para diseñar desde cero. Varios baños, distintos alcances. Precio cerrado. Desde 3.200€.',
  },
  'reforma-cocinas': {
    'alcala-de-henares':      'Reforma de cocina en Alcalá de Henares: cocina cerrada o abierta al salón. Electricidad con circuitos dedicados incluida. Precio cerrado. Desde 5.500€.',
    'torrejon-de-ardoz':      'Reforma de cocina en Torrejón de Ardoz: electricidad nueva con circuitos dedicados incluida. Sin cortocircuitos ni esperas de suministros. Desde 5.500€.',
    'coslada':                'Reforma de cocina en Coslada: instalación eléctrica nueva con circuitos dedicados. Distribución mejorada en cocinas de 6 a 8 m². Precio cerrado. Desde 5.500€.',
    'san-fernando-de-henares':'Reforma de cocina en San Fernando de Henares: instalaciones según la época del piso. Apertura al salón valorada en visita. Precio cerrado. Desde 5.500€.',
    'guadalajara':            'Reforma de cocina en Guadalajara: cocinas cerradas de los 70–90 abiertas al salón. Todo definido antes de empezar para cumplir el plazo. Desde 5.500€.',
    'azuqueca-de-henares':    'Reforma de cocina en Azuqueca de Henares: muebles, encimera y electrodomésticos nuevos sin obra pesada en pisos de los 90. Desde 5.500€.',
    'meco':                   'Reforma de cocina en Meco: cocinas de 10 a 16 m² con opciones de isla, americana o almacenaje independiente. Precio cerrado. Desde 5.500€.',
    'camarma-de-esteruelas':  'Reforma de cocina en Camarma de Esteruelas: cocinas amplias en viviendas unifamiliares. Redistribución, isla o apertura al comedor. Desde 5.500€.',
  },
  'reforma-pisos': {
    'alcala-de-henares':      'Reforma de piso en Alcalá de Henares: estado de instalaciones determina el alcance. Baño, cocina y suelos o reforma integral. Precio cerrado. Desde 18.000€.',
    'torrejon-de-ardoz':      'Reforma de piso en Torrejón de Ardoz: te decimos si sale mejor todo de una vez o por fases según el estado real de las instalaciones. Desde 18.000€.',
    'coslada':                'Reforma de piso en Coslada: revisamos humedades antes de cerrar el precio. Presupuesto que no cambia a mitad de obra. Pisos de los 80 y 90. Desde 18.000€.',
    'san-fernando-de-henares':'Reforma de piso en San Fernando de Henares: alcance muy distinto entre casco antiguo y Parque Roma. Lo evaluamos en visita gratuita. Desde 18.000€.',
    'guadalajara':            'Reforma de piso en Guadalajara: ventanas de PVC con mayor retorno energético en clima continental. Instalaciones y acabados. Precio cerrado. Desde 18.000€.',
    'azuqueca-de-henares':    'Reforma de piso en Azuqueca de Henares: suelos, baño, cocina y pintura en pisos de los 90 con instalaciones en mejor estado. Precio cerrado. Desde 18.000€.',
    'meco':                   'Reforma de piso en Meco: adosados de dos plantas, terrazas y jardines. Más económico haciendo las dos plantas a la vez. Precio cerrado. Desde 18.000€.',
    'camarma-de-esteruelas':  'Reforma de piso en Camarma de Esteruelas: viviendas unifamiliares con cubierta y exterior. Definimos prioridades en visita gratuita. Desde 18.000€.',
  },
  'locales-comerciales': {
    'alcala-de-henares':      'Reforma de local comercial en Alcalá de Henares: tramitamos licencia de actividad en paralelo con la obra. Hostelería, comercio, clínicas. Precio cerrado.',
    'torrejon-de-ardoz':      'Reforma de local en Torrejón de Ardoz: tramitación de licencia más ágil que en Alcalá para muchos usos. Casco urbano o polígono industrial. Precio cerrado.',
    'coslada':                'Reforma de local comercial en Coslada: casco urbano o polígono industrial. Instalación desde cero o reforma de local existente. Plazo garantizado en contrato.',
    'san-fernando-de-henares':'Reforma de local comercial en San Fernando de Henares: zona industrial o casco. Régimen de licencia según el uso. Precio cerrado, plazo garantizado.',
    'guadalajara':            'Reforma de local comercial en Guadalajara: tramitación de licencia más ágil que en el Corredor madrileño. Proyecto técnico incluido en el precio cerrado.',
    'azuqueca-de-henares':    'Reforma de local en Azuqueca de Henares: declaración responsable para usos sin licencia clasificada. Plazos reales confirmados en primera reunión.',
    'meco':                   'Reforma de local comercial en Meco: tramitación ágil en municipio pequeño. Naves en polígono con instalación completa desde cero. Precio cerrado.',
    'camarma-de-esteruelas':  'Reforma de local comercial en Camarma de Esteruelas: plazos predecibles en municipio pequeño. Comercios, consultorios y oficinas. Precio cerrado.',
  },
  'comunidades-vecinos': {
    'alcala-de-henares':      'Obras en comunidades de vecinos en Alcalá de Henares: cubiertas, portales y ascensores en edificios de los 70–80. Presupuesto con documentación para junta.',
    'torrejon-de-ardoz':      'Obras en comunidades de vecinos en Torrejón de Ardoz: IEE y acceso a ayudas de rehabilitación de la Comunidad de Madrid. Presupuesto listo para junta.',
    'coslada':                'Obras en comunidades de vecinos en Coslada: humedades por capilaridad en plantas bajas. Presupuesto con fotografías y desglose para presentar en junta.',
    'san-fernando-de-henares':'Obras en comunidades de vecinos en San Fernando de Henares: distintas necesidades según la época del edificio. Asesoramos sobre la mayoría necesaria.',
    'guadalajara':            'Obras en comunidades de vecinos en Guadalajara: permisos más ágiles que en municipios madrileños. Presupuesto con documentación completa para junta.',
    'azuqueca-de-henares':    'Obras en comunidades de vecinos en Azuqueca de Henares: edificios de los 90 con necesidades de mantenimiento. Documentación completa para junta incluida.',
    'meco':                   'Obras en comunidades de vecinos en Meco: urbanizaciones con viales, cercas y zonas comunes exteriores. Coordinación con presidente o administrador de fincas.',
    'camarma-de-esteruelas':  'Obras en comunidades de vecinos en Camarma de Esteruelas: comunidades pequeñas con decisiones más rápidas. Presupuesto con documentación para junta.',
  },
};

export const ZONES = [
  {
    slug: 'alcala-de-henares',
    name: 'Alcalá de Henares',
    primary: true,
    province: 'Madrid',
    desc: 'Nuestra sede central. Más de 10 años reformando pisos, chalets y locales en Alcalá y sus barrios.',
    heroIntro: 'Alcalá de Henares es nuestra sede central y la ciudad donde más obras ejecutamos. Conocemos el parque residencial de la zona, los plazos del Ayuntamiento y los proveedores locales. Si tienes un proyecto de reforma en Alcalá, lo gestionamos todo desde la primera visita hasta la entrega: un único interlocutor, precio cerrado y plazo garantizado por escrito.',
    localAngle: 'es una ciudad con gran parque de edificios de los años 70 y 80 en barrios como El Val, Barrio del Pilar y Reyes Católicos, donde la demanda de actualización de instalaciones eléctricas, fontanería y acabados es muy elevada',
    neighborhoods: ['Casco Histórico', 'Nueva Alcalá', 'Reyes Católicos', 'El Val', 'Barrio del Pilar', 'Ensanche', 'La Garena', 'Espartales'],
  },
  {
    slug: 'torrejon-de-ardoz',
    name: 'Torrejón de Ardoz',
    primary: true,
    province: 'Madrid',
    desc: 'Segunda ciudad del Corredor. Equipo habitual en toda la zona de Torrejón y alrededores.',
    heroIntro: 'Torrejón de Ardoz es uno de los municipios donde más proyectos ejecutamos en el Corredor. Si estás valorando si tiene más sentido hacer la reforma de una sola vez o ir por fases, o qué parte de la vivienda priorizar, la visita técnica gratuita te da una respuesta concreta basada en el estado real de tu vivienda.',
    localAngle: 'cuenta con una alta concentración de bloques de los años 70 y 90 en barrios como Soto del Henares, Parque Cataluña y Las Veredillas, donde los propietarios buscan modernizar distribuciones anticuadas y renovar baños y cocinas',
    neighborhoods: ['Centro', 'Casco Antiguo', 'Soto del Henares', 'Parque Cataluña', 'Las Veredillas', 'San José', 'Fronteras', 'Cobos'],
  },
  {
    slug: 'coslada',
    name: 'Coslada',
    primary: true,
    province: 'Madrid',
    desc: 'Reformas en Coslada con profesionales de confianza. Presupuesto gratis en 24h.',
    heroIntro: 'En Coslada trabajamos habitualmente en bloques del núcleo urbano y en locales en la zona industrial. Antes de cerrar cualquier presupuesto, evaluamos el estado real de las instalaciones: qué puede aprovecharse, qué necesita renovación y qué conviene abordar en la misma obra para no tener que volver a abrir. El presupuesto puede cerrarse con más precisión cuando el alcance parte de una revisión previa del estado de la vivienda.',
    localAngle: 'tiene un tejido residencial denso con pisos de los 80 y 90 en zonas como Valleaguado, Ciudad 70 y Ciudad San Pablo, donde los proyectos más habituales combinan reforma de baño, renovación de fontanería y mejora de la eficiencia energética',
    neighborhoods: ['Valleaguado', 'Ciudad 70', 'Ciudad San Pablo', 'Barrio del Puerto', 'Barrio de la Estación', 'El Esparragal', 'La Colina', 'Casco (Pueblo)'],
  },
  {
    slug: 'san-fernando-de-henares',
    name: 'San Fernando de Henares',
    primary: true,
    province: 'Madrid',
    desc: 'Reformas integrales y parciales en San Fernando de Henares.',
    heroIntro: 'San Fernando de Henares combina vivienda de épocas muy distintas, desde el casco antiguo hasta las promociones más recientes. El alcance de una reforma varía significativamente según cuándo se construyó la vivienda. En la visita técnica gratuita evaluamos el estado real y te decimos qué opciones tienes según lo que hay dentro.',
    localAngle: 'combina vivienda histórica en el casco urbano con nuevas promociones en Parque Roma y Parque Henares, generando una demanda diversa que va desde la renovación completa de pisos antiguos hasta la personalización de acabados en viviendas recientes',
    neighborhoods: ['Centro', 'Parque Roma', 'Montserrat', 'Parque Henares', 'Fuencasa'],
  },
  {
    slug: 'guadalajara',
    name: 'Guadalajara',
    primary: false,
    province: 'Guadalajara',
    desc: 'También operamos en Guadalajara capital y su entorno.',
    heroIntro: 'En Guadalajara capital trabajamos con el mismo equipo propio y el mismo sistema de precio cerrado que en Alcalá o Torrejón. El alcance de la reforma depende del estado real de las instalaciones y de lo que quieras cambiar: la visita técnica gratuita lo determina antes de comprometer ningún número ni plazo.',
    localAngle: 'es la capital provincial con un importante parque de vivienda de los 70 y 90 en el Balconcillo y Aguas Vivas, donde la sustitución de instalaciones obsoletas y la mejora del aislamiento térmico son las reformas más solicitadas',
    neighborhoods: ['Casco Histórico', 'El Balconcillo', 'Aguas Vivas', 'El Alamín', 'Los Manantiales', 'Estación', 'Los Valles'],
  },
  {
    slug: 'azuqueca-de-henares',
    name: 'Azuqueca de Henares',
    primary: false,
    province: 'Guadalajara',
    desc: 'Reformas en Azuqueca de Henares y alrededores.',
    heroIntro: 'Azuqueca de Henares pertenece a la provincia de Guadalajara pero forma parte habitual de nuestra zona de trabajo en el Corredor. El mismo equipo, el mismo precio cerrado y el mismo compromiso de plazo que en Alcalá o Torrejón, sin coste adicional por desplazamiento.',
    localAngle: 'pertenece a la provincia de Guadalajara y tiene un núcleo residencial compacto donde el cambio de baño y cocina es la actuación más frecuente entre propietarios de pisos adquiridos en los años 90',
    neighborhoods: ['Centro', 'El Vallejo', 'La Paloma', 'Bulevar - Plaza Castilla', 'La Estación', 'La Quebradilla', 'Vallehermoso', 'Postas'],
  },
  {
    slug: 'meco',
    name: 'Meco',
    primary: false,
    province: 'Madrid',
    desc: 'Cubrimos Meco y municipios próximos.',
    heroIntro: 'Si vas a reformar una vivienda unifamiliar o un adosado en Meco, conviene tener en cuenta variables que no aparecen en los pisos de bloque: cubierta, terraza, distribución de dos plantas. El alcance puede ser muy diferente al de una reforma en un edificio de pisos. La visita técnica gratuita identifica qué es urgente y qué puede esperar antes de presupuestar.',
    localAngle: 'es un municipio residencial con alta proporción de viviendas unifamiliares y adosados en urbanizaciones, donde el cerramiento de terrazas, la reforma de cocina y la renovación de baños son las actuaciones más demandadas',
    neighborhoods: ['Casco Antiguo', 'Escritores', 'Pintores', 'Ciudad de la Luz', 'Belvalle', 'Los Ríos', 'Europa', 'Barrio Alto'],
  },
  {
    slug: 'camarma-de-esteruelas',
    name: 'Camarma de Esteruelas',
    primary: false,
    province: 'Madrid',
    desc: 'Reformas en Camarma de Esteruelas.',
    heroIntro: 'En Camarma de Esteruelas trabajamos con el mismo equipo y el mismo sistema de precio cerrado que en Alcalá. Si tienes un proyecto de reforma en vivienda unifamiliar o adosado, la visita técnica gratuita evalúa el alcance completo antes de presupuestar: interior, cubierta o cerramientos, según lo que necesite la vivienda.',
    localAngle: 'es un municipio con predominio de viviendas unifamiliares y adosados, donde los proyectos de reforma integral y ampliación de estancias son los más demandados por familias que llevan más de una década en la zona',
    neighborhoods: ['Casco Urbano', 'Urb. Nueva Camarma', 'Urb. El Practicante', 'Gran Vía'],
  },
];
