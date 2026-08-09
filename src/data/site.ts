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
    relatedServices: ['reforma-pisos', 'reforma-banos', 'reforma-cocinas'],
    icon: '🏠',
    headline: 'Un responsable único coordina todos los gremios. Sin subcontratas, sin extras.',
    heroCopy: 'Una reforma integral no empieza eligiendo materiales ni acabados. Primero hay que decidir qué distribución quieres conservar, qué instalaciones merece la pena renovar y qué debe quedar cerrado antes de abrir la obra. Hacemos reformas integrales en el Corredor del Henares con un único interlocutor que gestiona todos los gremios, un presupuesto que deja claro qué está incluido desde el inicio y una fecha de entrega garantizada por escrito. Sin subcontratas desconocidas, sin facturas extra, sin excusas para no cumplir el plazo.',
    desc: 'Reformamos tu piso, ático o chalet completamente. Diseño, gestión de permisos, ejecución y entrega llave en mano. Sin sorpresas en el precio.',
    body: [
      { type: 'h3', text: 'Qué incluye una reforma integral en el Corredor del Henares' },
      { type: 'p',  text: 'Reformamos pisos, áticos, dúplex y chalés de principio a fin: derribo de tabiques, redistribución de espacios, instalación eléctrica completa con cuadro nuevo, fontanería, solados de porcelánico o tarima flotante, falso techo, reforma de baño y cocina, carpintería interior y pintura. Un único interlocutor coordina todos los gremios con equipo propio. Sin subcontratas que no conoces ni facturas extra que no firmaste.' },
      { type: 'h3', text: 'Cuándo tiene sentido una reforma integral: la pregunta que determina el presupuesto' },
      { type: 'p',  text: 'Una reforma integral tiene sentido cuando las instalaciones necesitan renovación o cuando la distribución no es funcional y vale la pena resolver todo a la vez. Si el cuadro eléctrico tiene capacidad suficiente, la fontanería está en buen estado y solo hay que renovar acabados, baño, cocina y suelos, estás ante una reforma de pisos, no una integral. La visita técnica gratuita lo determina antes de comprometer ningún número: el alcance correcto ahorra dinero, el incorrecto lo desperdicia.', link: { text: 'reforma de pisos', serviceSlug: 'reforma-pisos' } },
      { type: 'h3', text: 'Qué debe estar definido antes de empezar la obra' },
      { type: 'p',  text: 'Antes de abrir el piso conviene tener cerrados tres elementos: la distribución final (qué tabiques se derriban y cómo quedan los espacios), el diseño de baño y cocina (formato de alicatado, sanitarios, muebles y electrodomésticos) y la selección de suelos. Si algo queda sin decidir cuando ya está la obra en marcha, el plazo se alarga y el presupuesto puede desviarse. Con el proyecto cerrado antes del primer día, la coordinación de gremios funciona sin fricciones.' },
      { type: 'h3', text: 'Licencias y normativa: qué necesitas tramitar en tu ayuntamiento' },
      { type: 'p',  text: 'El trámite necesario depende del alcance de la reforma y de la normativa municipal aplicable: actuaciones interiores sencillas no se gestionan igual que obras que modifican distribución, instalaciones o elementos de fachada. El derribo de muros de carga exige proyecto de arquitecto técnico. En la visita informamos del trámite exacto que corresponde a tu caso y nos encargamos de la gestión completa.' },
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
        q: '¿Cuándo tiene sentido hacer una reforma integral en lugar de reformar solo baño o cocina?',
        a: 'Cuando las instalaciones necesitan renovación. Si el cuadro eléctrico es insuficiente o la fontanería presenta problemas, abrirlo todo a la vez es más eficiente que hacer obras sucesivas: separar en dos obras puede obligar a repetir desescombros, coordinaciones de gremios y acabados de transición, por lo que conviene comparar ambos planteamientos antes de decidir.',
      },
      {
        q: '¿Qué incluye una reforma integral y qué puede quedar fuera del alcance básico?',
        a: 'Una reforma integral completa abarca derribo y redistribución de tabiques, instalación eléctrica nueva, fontanería, solados y alicatados, reforma de baño y cocina, carpintería interior y pintura final. Lo que puede quedar fuera son los electrodomésticos de alta gama, el mobiliario de salón y obras en cubierta o fachada que requieren tramitación adicional.',
      },
      {
        q: '¿Qué debería tener claro antes de pedir presupuesto de una reforma integral?',
        a: 'Lo fundamental es la distribución final: qué tabiques se derriban y cómo quedan los espacios. El diseño de materiales puede cerrarse después, pero si la distribución cambia con la obra ya empezada, el presupuesto se desvía. En la visita técnica gratuita evaluamos el estado de las instalaciones y te orientamos si todavía no tienes todo definido.',
      },
      {
        q: '¿Qué puede aparecer como imprevisto durante una reforma integral?',
        a: 'Al abrir paredes y suelos pueden aparecer instalaciones en peor estado del que sugería la inspección previa: tuberías con corrosión interna, cableado deteriorado bajo el yeso o soportes que necesitan reparación. Por eso revisamos el estado observable de las instalaciones antes de cerrar el precio. Si durante la obra aparece algo nuevo, lo comunicamos antes de actuar y lo valoramos por separado.',
      },
      {
        q: '¿Puedo seguir viviendo en el piso durante la reforma integral?',
        a: 'No es recomendable. El polvo, el ruido y los cortes de suministros hacen inviable la convivencia habitual durante la fase de demolición e instalaciones. Si no tienes alternativa de alojamiento, podemos plantear una ejecución por fases que te permita tener siempre una zona habitable, aunque esto alarga el plazo total.',
      },
      {
        q: '¿Cuánto dura una reforma integral?',
        a: 'Una reforma completa de un piso de 70–90 m² lleva entre 8 y 14 semanas según el alcance y si hay redistribución de tabiques. La fecha de entrega se fija en el contrato y, si nos retrasamos por causas propias, aplicamos las penalizaciones pactadas por escrito.',
      },
      {
        q: '¿Cómo comparo dos presupuestos de reforma integral?',
        a: 'Compáralos partida por partida, no solo por el total. Dos presupuestos con el mismo importe pueden contemplar alcances distintos en demolición, estado de instalaciones que se asumen renovadas o conservadas, calidad de materiales y gestión de escombros. Pide que cada uno especifique qué está incluido y qué está excluido antes de decidir.',
      },
    ],
  },
  {
    slug: 'reforma-banos',
    title: 'Reforma de Baños',
    shortTitle: 'Baños',
    anchorLabel: 'Reforma de baños',
    relatedServices: ['reformas-integrales', 'reforma-pisos', 'reforma-cocinas'],
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
        q: '¿Qué incluye una reforma completa de baño?',
        a: 'Demolición de alicatados y solado, impermeabilización, nuevo revestimiento de paredes y suelo, plato de ducha o bañera, mampara, sanitarios, mueble de baño, espejo, iluminación y accesorios. La gestión de escombros y la limpieza final forman parte del precio. Lo que puede depender del alcance es la fontanería: si las tuberías están en buen estado, puede no ser necesario renovarla.',
      },
      {
        q: 'Solo tengo un baño en casa, ¿cuántos días estaré sin poder usarlo?',
        a: 'En una reforma completa con cambio de alicatado, los primeros 4–6 días de demolición y preparación son los más críticos. A partir de ahí el baño va recuperando funcionalidad por fases conforme avanza la obra. Si el plazo es especialmente crítico, lo planificamos para minimizar los días sin servicio sin comprometer la impermeabilización.',
      },
      {
        q: '¿Merece la pena cambiar las tuberías aprovechando la reforma?',
        a: 'Si presentan deterioro, han dado algún problema, no se conoce su estado o la nueva distribución obliga a intervenir sobre ellas, conviene valorar su renovación aprovechando que el baño ya está abierto. Hacerlo en la misma obra tiene un coste marginal frente a tener que volver a abrirlo todo en una obra independiente posterior.',
      },
      {
        q: '¿Qué diferencia hay entre cambiar la bañera por ducha y reformar el baño entero?',
        a: 'Cambiar la bañera por un plato de ducha sin tocar el alicatado parte de 1.800€ y se hace en 3–5 días hábiles. Una reforma completa incluye también cambio de revestimientos, sanitarios y mueble, y puede durar hasta 3 semanas. Si el alicatado está deteriorado o hay síntomas de humedad, puede tener más sentido plantear el baño como un conjunto que hacer dos obras por separado.',
      },
      {
        q: '¿Se puede cambiar la distribución de un baño pequeño?',
        a: 'Sí, aunque mover un inodoro o una ducha puede afectar al recorrido de los desagües y hacer que un cambio aparentemente sencillo aumente el alcance de la obra. En la visita te mostramos qué opciones de redistribución son viables en tu baño concreto sin complicar innecesariamente el proyecto.',
      },
      {
        q: '¿Qué debería tener elegido antes de empezar la obra del baño?',
        a: 'Idealmente, el alicatado, el plato de ducha o bañera, y los sanitarios deben estar elegidos antes de empezar. Los muebles y accesorios pueden definirse con la obra en marcha. Si los materiales principales no están pedidos cuando termina el derribo, la espera puede alargar el plazo.',
      },
      {
        q: '¿Qué puede hacer que aumente el presupuesto una vez desmontado el baño?',
        a: 'Al retirar los revestimientos pueden aparecer tuberías deterioradas, humedades en los soportes o instalaciones que no eran visibles antes. En la visita revisamos el estado observable, pero algunos problemas solo se confirman al abrir. Si aparece algo nuevo, lo comunicamos antes de actuar y lo valoramos por separado.',
      },
    ],
  },
  {
    slug: 'reforma-cocinas',
    title: 'Reforma de Cocinas',
    shortTitle: 'Cocinas',
    anchorLabel: 'Reforma de cocinas',
    relatedServices: ['reformas-integrales', 'reforma-pisos', 'reforma-banos'],
    icon: '🍳',
    headline: 'La distribución de una cocina se decide antes de empezar la obra. Después es difícil de cambiar.',
    heroCopy: 'Una mala decisión de distribución en la cocina se nota todos los días. Antes de elegir muebles o encimera, hay que definir cómo van a circular las personas por el espacio, dónde van los electrodomésticos, si tiene sentido abrir al salón y qué instalaciones pueden conservarse. Hacemos reformas de cocinas en el Corredor del Henares con planimetría del espacio antes de presupuestar, todos los detalles definidos antes de que empiece la obra y circuitos eléctricos dedicados incluidos. Si queda algo sin decidir cuando ya se está demoliendo, el plazo se alarga y el presupuesto también.',
    desc: 'Muebles a medida, encimeras, electrodomésticos, fontanería y electricidad. Diseñamos y ejecutamos tu cocina nueva de principio a fin.',
    body: [
      { type: 'h3', text: 'Qué incluye la reforma de una cocina de principio a fin' },
      { type: 'p',  text: 'Diseñamos y ejecutamos tu cocina completa: desescombro del estado anterior, revisión y adaptación de la instalación eléctrica para los electrodomésticos y consumos previstos, fontanería, alicatado de zona de trabajo, muebles a medida o de catálogo, encimera de silestone o porcelana de gran formato, fregadero, grifo, electrodomésticos integrados y campana. Diseñamos en L, en U, en línea o cocina americana. Si no quieres obra pesada, también cambiamos muebles y frentes sobre la distribución actual en 3 a 5 días.' },
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
        q: '¿Qué incluye la reforma completa de una cocina?',
        a: 'Diseño del espacio, desescombro del estado anterior, revisión y adaptación de la instalación eléctrica para los electrodomésticos previstos, fontanería, alicatado de zona de trabajo, muebles, encimera, fregadero, grifo, electrodomésticos integrados y campana. Gestión de escombros y limpieza final incluidas.',
      },
      {
        q: '¿Cuánto tiempo estaré sin poder usar la cocina?',
        a: 'Entre 2 y 4 semanas para una reforma completa. La primera mitad corresponde a la obra civil: demolición, electricidad, fontanería y alicatado. La segunda mitad, con muebles y electrodomésticos instalados, permite ir recuperando funcionalidad. Si los materiales están pedidos antes de empezar, no hay pausas por espera de suministros.',
      },
      {
        q: '¿Debería abrir la cocina al salón o mantenerla cerrada?',
        a: 'Abrir la cocina al salón cambia radicalmente la percepción del espacio, pero antes de decidir conviene evaluar varios factores: la función estructural del tabique, cómo se resolverá la extracción, el impacto del humo y el ruido en el salón y si la distribución resultante es funcional. En la visita lo valoramos con y sin apertura para que puedas comparar opciones con información real.',
      },
      {
        q: '¿Qué debería elegir antes de que empiece la obra de cocina?',
        a: 'Lo mínimo para poder arrancar sin pausas: distribución de muebles, encimera elegida y electrodomésticos seleccionados. Los electrodomésticos conviene tenerlos decididos antes de cerrar las instalaciones, porque su ubicación condiciona los puntos eléctricos, el agua, los desagües y, en algunos casos, la ventilación.',
      },
      {
        q: '¿Cuándo conviene revisar la instalación eléctrica en una reforma de cocina?',
        a: 'Siempre. Antes de cerrar la distribución de la nueva cocina conviene comprobar si la instalación existente puede asumir los electrodomésticos y consumos previstos. En viviendas donde el cuadro no se ha actualizado, puede no cumplir los requisitos actuales. La instalación se adapta o renueva dentro de la reforma cuando el alcance lo requiere.',
      },
      {
        q: '¿Vale la pena cambiar fontanería y electricidad aunque no cambie la distribución?',
        a: 'Cuando su estado genera dudas, no se sabe cuándo se renovaron o la nueva distribución obliga a intervenir sobre ellas. Con la cocina ya abierta para instalar los nuevos muebles, el coste adicional de renovar lo que está oculto es menor que tener que volver a abrir en pocos años. Lo valoramos en la visita según el estado real de cada instalación.',
      },
      {
        q: '¿Qué puede encarecer una reforma de cocina respecto al presupuesto inicial?',
        a: 'Los tres factores que más amplían el alcance son: instalaciones en peor estado del esperado, un cambio de distribución decidido con la obra ya empezada, y materiales o electrodomésticos que llegan más tarde de lo previsto. Los tres se minimizan cerrando diseño, materiales e instalaciones antes de la primera jornada de obra.',
      },
    ],
  },
  {
    slug: 'reforma-pisos',
    title: 'Reforma de Pisos y Chalets',
    shortTitle: 'Pisos y Chalets',
    anchorLabel: 'Reforma de pisos y chalets',
    relatedServices: ['reformas-integrales', 'reforma-banos', 'reforma-cocinas'],
    icon: '🏢',
    headline: 'Antes de decidir qué reformar, conviene saber qué merece la pena cambiar y qué puede esperar.',
    heroCopy: 'No siempre merece la pena reformar todo a la vez. La clave está en el estado de las instalaciones: si el cuadro eléctrico y la fontanería funcionan, baño, cocina, suelos y pintura pueden transformar el piso sin necesitar obra pesada. Si las instalaciones necesitan renovación, lo más eficiente es hacerlo todo de una vez con el piso abierto. Hacemos reformas de pisos y chalets en el Corredor del Henares con precio cerrado y plazo garantizado desde el primer día. La visita técnica gratuita determina qué opciones tienes según el estado real de tu vivienda.',
    desc: 'Reforma de pisos antiguos y modernos, áticos y chalets: suelos, carpintería, redistribución de tabiques, baño, cocina y pintura. Precio cerrado.',
    body: [
      { type: 'h3', text: 'Reforma parcial o integral: cómo saber qué necesita tu vivienda' },
      { type: 'p',  text: 'La clave está en el estado de las instalaciones. Si el cuadro eléctrico y la fontanería funcionan correctamente, suelos nuevos, baño, cocina y pintura pueden transformar el piso completamente por menos de 20.000€ sin necesitar obra pesada. Si las instalaciones son de los años 70 u 80 y hay que renovarlas, la forma más eficiente es hacer todo a la vez con el piso abierto una sola vez: eso ya es territorio de reforma integral, con un presupuesto desde 24.900€. En la visita evaluamos el estado real y te decimos exactamente en qué punto está tu vivienda.', link: { text: 'reforma integral', serviceSlug: 'reformas-integrales' } },
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
        q: '¿Cuándo merece la pena hacer una reforma integral en lugar de solo baño y cocina?',
        a: 'Cuando las instalaciones necesitan renovación. Si el cuadro eléctrico o la fontanería requieren sustitución, hacerlo todo a la vez con el piso ya abierto es más eficiente que plantear obras sucesivas. Si las instalaciones funcionan bien, baño, cocina, suelos y pintura pueden transformar completamente el piso sin necesitar obra pesada.',
      },
      {
        q: '¿Qué conviene revisar primero en un piso antiguo?',
        a: 'El estado de las instalaciones. Un cuadro eléctrico que lleva muchos años sin actualizarse o tuberías que ya han dado problemas condicionan qué tipo de reforma tiene sentido plantear. Si el cuadro y la fontanería están en buen estado, el alcance puede centrarse en baño, cocina, suelos y acabados.',
      },
      {
        q: '¿Puedo reformar cocina y baño sin hacer una reforma integral?',
        a: 'Sí, cuando las instalaciones no requieren renovación completa. Renovar baño, cocina, suelos y pintura sin hacer una reforma integral puede tener sentido si el cuadro eléctrico y la fontanería están en buen estado. Si durante la obra aparecen problemas en las instalaciones, lo valoramos y decidimos juntos antes de ampliar el alcance.',
      },
      {
        q: '¿Qué trabajos suele tener sentido coordinar en la misma fase?',
        a: 'Los que comparten instalaciones o suponen abrir los mismos soportes. Por ejemplo, cuando se interviene en tuberías del baño, tiene sentido coordinarlo con los trabajos de fontanería de esa zona. Si la reforma de cocina cambia la distribución, la electricidad y la fontanería se adaptan en la misma movilización. Hacerlos por separado puede suponer abrir y cerrar los mismos soportes dos veces.',
      },
      {
        q: '¿Puedo seguir viviendo en el piso mientras dura la obra?',
        a: 'En reformas parciales de baño o cocina por separado, sí, aunque con incomodidad. En reformas que afectan a suelos, tabiques e instalaciones a la vez, no es recomendable: el polvo y los cortes de suministros dificultan mucho la convivencia. Si no tienes alternativa, diseñamos una secuencia por zonas que te permita tener siempre una parte habitable.',
      },
      {
        q: '¿Cómo priorizo si tengo un presupuesto ajustado?',
        a: 'La prioridad debería depender del estado real de cada zona, del uso previsto de la vivienda y del presupuesto disponible. En general, tiene sentido agrupar los trabajos que comparten instalaciones o que implican abrir los mismos soportes. Si el presupuesto no alcanza para todo a la vez, mejor cerrar bien una parte que avanzar todo a medias.',
      },
      {
        q: '¿Cuánto tarda la reforma de un piso?',
        a: 'Una reforma media con baño, cocina, suelos y pintura en un piso de 60–80 m² lleva entre 6 y 10 semanas. Si se añade redistribución de tabiques o renovación de instalaciones, el plazo puede ser mayor. La fecha de entrega queda fijada en el contrato antes de empezar, con las partidas concretas que determinan el tiempo real.',
      },
    ],
  },
  {
    slug: 'locales-comerciales',
    title: 'Reformas de Locales Comerciales',
    shortTitle: 'Locales',
    anchorLabel: 'Reforma de locales comerciales',
    relatedServices: ['comunidades-vecinos'],
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
        q: '¿Qué debería definir antes de cerrar el presupuesto de reforma del local?',
        a: 'El tipo de actividad, la distribución prevista y si necesitarás licencia de actividad antes de abrir. El tipo de actividad condiciona qué instalaciones son necesarias y qué documentación técnica puede requerirse. Si esto no está claro antes de cerrar el presupuesto, el alcance puede ampliarse durante la obra.',
      },
      {
        q: '¿Cómo influye el tipo de actividad en lo que hay que incluir en la reforma?',
        a: 'Directamente. Una actividad de hostelería puede necesitar sistemas de extracción, instalaciones de alta potencia y otros requisitos específicos. Una actividad sanitaria o de uso profesional puede tener sus propios requerimientos técnicos. Un comercio sin actividad clasificada suele necesitar mucho menos. El uso previsto es el primer dato que necesitamos para definir el alcance.',
      },
      {
        q: '¿Qué puede retrasar la fecha de apertura de un negocio?',
        a: 'Los trámites relacionados con la actividad pueden condicionar la fecha de apertura. Cuando son necesarios, empezar la tramitación una vez terminada la obra alarga el proceso. Por eso iniciamos la documentación en paralelo con la obra desde el primer día, no al final.',
      },
      {
        q: '¿Se puede organizar la reforma del local por fases para no cerrar el negocio?',
        a: 'Depende del tipo de obra. Si las instalaciones se pueden aislar por zonas, es posible ir trabajando por tramos. Pero en obras donde hay que cortar suministros generales o actuar sobre toda la instalación eléctrica, hacerlo todo de una vez es más eficiente y menos arriesgado. Lo evaluamos en la visita técnica.',
      },
      {
        q: '¿Qué instalaciones conviene definir antes de empezar la obra?',
        a: 'La instalación eléctrica y el punto de agua y desagüe son las que más condicionan la distribución final. Una vez colocadas las particiones y el techo técnico, cambiar la posición de un punto de agua o un circuito independiente implica reabrir lo que ya está terminado. Definirlos antes de empezar evita desvíos de coste.',
      },
      {
        q: '¿Qué diferencia hay entre un acondicionamiento básico y una reforma completa de local?',
        a: 'Un acondicionamiento adapta el local con las mínimas obras necesarias: pintura, suelo, iluminación y mínima tabiquería. Una reforma completa incluye instalaciones nuevas, particiones, techo técnico y todos los acabados. El límite lo marca si las instalaciones existentes pueden asumir el uso previsto o hay que reemplazarlas.',
      },
      {
        q: '¿Cómo comparo dos presupuestos de reforma de local?',
        a: 'Compáralos revisando si el proyecto técnico y los trámites de licencia están o no incluidos. También hay que revisar si las instalaciones de seguridad que la actividad requiere (como alumbrado de emergencia o señalética) están en el precio. Dos totales similares pueden contemplar alcances muy diferentes.',
      },
    ],
  },
  {
    slug: 'comunidades-vecinos',
    title: 'Reformas en Comunidades de Propietarios',
    shortTitle: 'Comunidades',
    anchorLabel: 'Reforma de comunidades de propietarios',
    relatedServices: ['locales-comerciales'],
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
      { type: 'p',  text: 'Los edificios con más años de vida en el Corredor acumulan con frecuencia necesidades de mantenimiento que no siempre son visibles desde el exterior: cubiertas con impermeabilización no actualizada que pueden ser origen de humedades, portales con revestimientos deteriorados, y ascensores que ya no cumplen la normativa de seguridad actual. En edificios con más años de vida puede ser necesario comprobar qué inspecciones, documentación o requisitos afectan a la actuación antes de plantear una rehabilitación de mayor alcance. Conviene revisar este punto durante la planificación para que el presupuesto y el proyecto partan del alcance correcto.' },
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
        q: '¿Qué debería incluir un presupuesto para presentarlo correctamente en junta?',
        a: 'Descripción clara del alcance de la obra, partidas desglosadas por capítulo, fotografías del estado previo, planificación de obra con duración estimada y precio total cerrado. Un presupuesto bien estructurado facilita que los propietarios puedan valorar y votar la propuesta con información suficiente, y reduce la posibilidad de que se rechace por falta de claridad.',
      },
      {
        q: '¿Cómo se organizan los accesos al edificio mientras dura la obra?',
        a: 'Mantenemos los accesos operativos durante toda la obra. En trabajos de portal o escalera, protegemos los acabados existentes y organizamos el acceso por zonas para que los vecinos puedan entrar y salir sin interrupción. Para la fase de mayor ruido o polvo, avisamos con antelación a la comunidad y al administrador.',
      },
      {
        q: '¿Se puede ejecutar una obra de comunidad por fases?',
        a: 'Sí, y en edificios con vecinos suele ser lo más práctico. Pintura de portal puede hacerse por plantas, impermeabilización de cubierta puede dividirse en zonas. Organizamos la secuencia para minimizar el tiempo de afectación y permitir el uso normal del edificio durante la mayor parte de la obra.',
      },
      {
        q: '¿Quién debe ser el interlocutor con la empresa durante la obra?',
        a: 'El administrador de fincas o el presidente de la comunidad, según lo que decida la junta. Coordinamos directamente con el interlocutor designado: enviamos informes de avance, consultamos cualquier decisión que no estaba prevista y no actuamos sin validación previa en cambios que afecten al alcance o al precio.',
      },
      {
        q: '¿Qué conviene definir antes de comparar varios presupuestos de obras en zonas comunes?',
        a: 'El alcance exacto de la obra: qué zonas se intervienen, qué estado tienen y qué resultado se espera. Sin eso, dos presupuestos pueden contemplar intervenciones muy distintas con el mismo nombre. La visita técnica gratuita nos permite elaborar un presupuesto con el alcance definido, directamente comparable con otras propuestas.',
      },
      {
        q: '¿Cómo se gestionan los cambios o imprevistos una vez aprobada la obra en junta?',
        a: 'Cualquier cambio que afecte al alcance o al precio se comunica antes de ejecutarse. No ampliamos el trabajo ni el coste sin validación previa del interlocutor designado. Si durante la obra aparece algo no previsto, lo documentamos, lo presupuestamos por separado y esperamos autorización antes de actuar.',
      },
      {
        q: '¿Podéis coordinaros directamente con el administrador de fincas?',
        a: 'Sí. Trabajamos habitualmente con administradores de fincas: les enviamos la documentación técnica, podemos asistir a la junta para explicar el presupuesto si se requiere y durante la obra reportamos el avance de forma periódica. El administrador tiene contacto directo con el jefe de obra en todo momento.',
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

// ─── FAQs específicas por combinación servicio × localidad ───────────────────
// Se añade dinámicamente 1 FAQ de precio en [barrio].astro antes de este array.
// Cada combinación tiene 4-5 preguntas centradas en decisión y contratación,
// distintas de las preguntas generales del hub de servicio.
export const SERVICE_ZONE_FAQS: Record<string, Record<string, { q: string; a: string }[]>> = {
  'reformas-integrales': {
    'alcala-de-henares': [
      { q: '¿Qué información necesitáis para preparar una primera valoración de la reforma?', a: 'Con la superficie aproximada del piso, el año de construcción y una descripción del alcance previsto (qué quieres cambiar y en qué estado están las instalaciones) podemos orientarte antes de la visita. El presupuesto cerrado requiere la visita técnica, pero una primera horquilla ayuda a decidir si tiene sentido seguir adelante.' },
      { q: '¿Puede la visita técnica determinar si es mejor reforma parcial o integral?', a: 'Sí, ese es uno de sus objetivos principales. El estado del cuadro eléctrico y la fontanería es lo que condiciona la decisión: si las instalaciones funcionan, baño, cocina, suelos y pintura pueden transformar completamente el piso por menos. Si necesitan renovación, hacerlo todo en la misma obra sale más eficiente.' },
      { q: '¿Qué suele alargarse más en las reformas integrales respecto al plazo inicial?', a: 'Los materiales con entrega larga y los cambios de distribución decididos con la obra ya empezada son los dos factores que más alargan el plazo. El primero se controla pidiendo los materiales antes de arrancar; el segundo, cerrando la distribución en el proyecto antes de la primera jornada de obra.' },
      { q: '¿Puedo pedir presupuesto si todavía no tengo decididos los materiales?', a: 'Sí. Para cerrar el presupuesto necesitamos la distribución final y el alcance de las instalaciones, no los materiales concretos. Los acabados (alicatado, suelo, sanitarios) pueden elegirse después con la obra ya planificada, dentro de las franjas de calidad del presupuesto cerrado.' },
    ],
    'torrejon-de-ardoz': [
      { q: '¿Qué debería preparar antes de la visita técnica para una reforma integral?', a: 'Tener claro qué quieres cambiar y en qué estado crees que están las instalaciones. Si el cuadro eléctrico o la fontanería ya han dado problemas, conviene mencionarlo para que la visita los evalúe con detalle. Si hay ideas de redistribución de tabiques, cualquier boceto o referencia ayuda a orientar la visita.' },
      { q: '¿Cómo se organiza la obra si hay que seguir viviendo en el piso durante la reforma integral?', a: 'No es recomendable convivir con una reforma integral completa, pero si no hay alternativa, diseñamos la secuencia de obra por zonas para que siempre haya una parte habitable. Esto alarga el plazo total, ya que algunos trabajos no pueden solaparse cuando el piso está ocupado. Lo calculamos en el proyecto antes de empezar.' },
      { q: '¿Cuándo tiene sentido plantear la reforma integral como dos fases separadas?', a: 'En pocos casos, salvo razones económicas muy concretas. Hacer instalaciones en una primera fase y acabados en una segunda implica abrir y cerrar el piso dos veces, repetir la coordinación de gremios y alargar el periodo sin vivienda. En general, cuando las instalaciones necesitan renovación, hacerlo todo en una única obra es la opción más eficiente.' },
      { q: '¿Qué factores condicionan cuánto dura una reforma integral?', a: 'El alcance de las instalaciones, si hay redistribución de tabiques, el número de estancias y si los materiales están pedidos antes de empezar. Una reforma de 70-80 m² sin redistribución y con materiales disponibles desde el inicio lleva entre 8 y 12 semanas. Con redistribución o cambio de instalaciones completo, puede extenderse hasta 14-16 semanas.' },
    ],
    'coslada': [
      { q: '¿Qué debería revisar antes de solicitar presupuesto de reforma integral?', a: 'El estado general de las instalaciones: si el cuadro eléctrico está actualizado, si la fontanería ha dado problemas y si hay humedades visibles en paredes o solera. Esa información ayuda a orientar el alcance antes de la visita y a que el presupuesto sea más preciso desde el primer momento.' },
      { q: '¿Merece la pena reformar por fases en lugar de hacerlo todo a la vez?', a: 'Solo si hay una razón económica muy concreta. Hacer dos obras separadas implica movilizar gremios dos veces, desescombrar dos veces y convivir con el caos en dos periodos distintos. Cuando las instalaciones necesitan renovación, hacerlo todo en la misma obra suele ser más eficiente que afrontarlo en dos proyectos independientes.' },
      { q: '¿Cómo se gestiona el presupuesto si aparecen problemas ocultos durante la obra?', a: 'Si durante la obra aparece algo no previsto en la visita, lo comunicamos antes de actuar y lo presupuestamos por separado. No ampliamos el alcance sin autorización previa. Esto es especialmente relevante en plantas bajas o en pisos con síntomas de humedad que no eran visibles en la visita inicial.' },
      { q: '¿Puedo pedir presupuesto de reforma integral con el piso alquilado?', a: 'Sí, aunque en ese caso hay que coordinar el acceso y el vaciado del piso con el inquilino. Para reformas integrales, el piso debe estar vacío durante la obra. Si el arrendamiento está próximo a vencer, podemos planificar el proyecto para empezar en cuanto quede libre.' },
    ],
    'san-fernando-de-henares': [
      { q: '¿Cuándo conviene pasar de reforma parcial a integral?', a: 'Cuando las instalaciones necesitan renovación. Si el cuadro o la fontanería hay que cambiarlos, hacerlo en paralelo con el resto de la obra ahorra el coste de una segunda movilización de gremios. Si las instalaciones están en buen estado, la reforma parcial puede ser suficiente y más económica.' },
      { q: '¿Qué información aporta la visita técnica que no se puede determinar por fotos o descripción?', a: 'El estado real de las instalaciones. La fontanería y el cableado están empotrados y no son visibles sin abrir. La visita técnica evalúa indicios: la fecha del cuadro, el tipo de tuberías observables y síntomas de problemas en techos y paredes. Eso permite cerrar un precio que contemple lo que realmente hay que hacer.' },
      { q: '¿Cómo queda fijado el precio en el contrato de reforma integral?', a: 'El precio queda cerrado por partidas antes de firmar: no hay "precios orientativos" que luego suben. El contrato especifica exactamente qué está incluido, con qué materiales y con qué acabados. Los únicos desvíos posibles son los que se comunican y autorizan antes de ejecutarse.' },
      { q: '¿Puedo pedir presupuesto con la vivienda todavía habitada y con los muebles dentro?', a: 'Sí. La visita técnica puede realizarse con la vivienda ocupada y con muebles. El estado de los muebles no es relevante para el presupuesto; lo que necesitamos evaluar son las instalaciones y la distribución actual. Algunos elementos solo son visibles una vez vaciado el piso, y eso se indica en el presupuesto cuando aplica.' },
    ],
    'guadalajara': [
      { q: '¿Qué debería tener decidido antes de pedir presupuesto de reforma integral?', a: 'La distribución final: qué tabiques se eliminan y cómo quedan las estancias. El presupuesto de instalaciones y acabados puede ajustarse después, pero si la distribución cambia con la obra empezada, el coste se desvía. Las ideas de redistribución conviene llevarlas a la visita para que el proyecto las tenga en cuenta desde el inicio.' },
      { q: '¿Cómo se coordina la obra si no puedo estar presente en Guadalajara durante la ejecución?', a: 'Con el jefe de obra como interlocutor directo. Enviamos fotos e informes de avance en cada fase relevante y consultamos antes de tomar cualquier decisión no prevista en el proyecto. El seguimiento a distancia es habitual y no afecta a la ejecución siempre que las decisiones de diseño estén cerradas antes de empezar.' },
      { q: '¿Qué factores hacen que dos presupuestos de reforma integral sean difíciles de comparar?', a: 'Que no especifiquen lo mismo. Dos presupuestos con el mismo total pueden diferir en qué instalaciones dan por renovadas, si el desescombro está incluido, qué calidad de materiales contemplan o si la gestión de residuos está en el precio. Para comparar bien, pide que cada uno especifique por escrito qué incluye y qué excluye en cada partida.' },
      { q: '¿Cuándo tiene sentido añadir redistribución de tabiques a una reforma integral?', a: 'Cuando la distribución actual no responde bien a cómo se usa la vivienda o cuando se puede ganar espacio útil sin un coste desproporcionado. En pisos con pasillos largos que ocupan superficie, eliminar un tabique puede mejorar la distribución más que cualquier acabado. Lo valoramos en la visita con la distribución existente sobre la mesa.' },
    ],
    'azuqueca-de-henares': [
      { q: '¿Hay alguna diferencia en el proceso de contratación de una reforma integral en Azuqueca?', a: 'El proceso es el mismo: visita técnica gratuita, presupuesto cerrado en 48 horas y contrato con precio y plazo fijados. El mismo equipo que trabaja en Alcalá y Torrejón cubre Azuqueca sin coste adicional de desplazamiento. Si la reforma necesita licencia, el trámite es en el Ayuntamiento de Azuqueca de Henares.' },
      { q: '¿Cómo puedo saber si el presupuesto cubre realmente lo que hay que hacer?', a: 'Revisando las partidas una por una. Un presupuesto cerrado debe detallar qué se hace en cada categoría: derribo, electricidad, fontanería, solados, alicatados, carpintería, baño, cocina, pintura. Si alguna partida dice genéricamente "electricidad a determinar", no es un precio cerrado: es un precio orientativo que puede crecer durante la obra.' },
      { q: '¿Qué decisiones son difíciles de cambiar una vez empezada la obra?', a: 'La distribución de tabiques y la posición de los puntos de agua y electricidad. Una vez cerradas las instalaciones empotradas o levantados los solados, cambiar dónde va una ducha o dónde va un punto de luz implica reabrir lo que ya está terminado. Por eso se cierran antes de la primera jornada, no a mitad de la obra.' },
      { q: '¿Qué debería preparar para la primera visita técnica de reforma integral?', a: 'El acceso al piso y una idea clara del alcance: si quieres cambiar distribución, cuáles son las estancias más prioritarias y si ya tienes alguna referencia de materiales o estilo. Con eso la visita puede ser más productiva y el presupuesto más ajustado a lo que realmente quieres.' },
    ],
    'meco': [
      { q: '¿Qué diferencias tiene una reforma integral en una vivienda unifamiliar frente a un piso de bloque?', a: 'La vivienda unifamiliar puede tener instalaciones independientes (caldera propia, acometidas de agua directas) que dan más libertad en el alcance de la reforma. También puede haber más de una planta que coordinar y, en algunos casos, accesos o fachada que condicionan la logística de materiales y escombros. Lo evaluamos en la visita según la configuración concreta de la vivienda.' },
      { q: '¿Puedo presupuestar la reforma antes de tener todos los detalles definidos?', a: 'Sí. Para cerrar el presupuesto necesitamos el alcance estructural: qué instalaciones se renuevan y si hay redistribución. Los acabados concretos pueden definirse con el proyecto ya cerrado, dentro de las franjas de calidad acordadas. Trabajar con un porfolio de materiales orientativos desde la visita ayuda a que las elecciones posteriores encajen en el presupuesto.' },
      { q: '¿Cómo se organiza una reforma integral en una casa de dos plantas?', a: 'Con una secuencia que evite abrir instalaciones dos veces. Lo recomendable es completar la fase de instalaciones en ambas plantas antes de cerrar ninguna, para que fontanería y electricidad no tengan que reabrirse cuando se pasa de una planta a la otra. Después se completa planta por planta o por zonas según el uso previsto durante la obra.' },
      { q: '¿Qué conviene tener decidido antes de que empiece la obra de reforma integral?', a: 'La distribución final, las instalaciones que se renuevan y el tipo de materiales. Con eso cerrado antes de arrancar, la obra puede ejecutarse sin paradas por decisiones pendientes. Los detalles de cada acabado pueden concretarse durante la fase de derribo e instalaciones, cuando todavía hay margen antes de llegar a los acabados.' },
    ],
    'camarma-de-esteruelas': [
      { q: '¿Qué hace que una reforma integral en una casa unifamiliar sea más compleja que en un piso?', a: 'La cantidad de instalaciones independientes y la superficie. Una vivienda unifamiliar puede tener más de una planta, caldera propia, saneamiento independiente y acometidas directas que hay que coordinar junto con el resto de la obra. Eso requiere más planificación de secuencias, pero también da más libertad para organizar el trabajo por zonas.' },
      { q: '¿Puedo pedir presupuesto si la vivienda está desocupada y no tiene muebles?', a: 'Sí, es la situación ideal para la visita técnica. Sin muebles se pueden evaluar mejor los suelos, paredes y el estado de las instalaciones observables. En viviendas desocupadas también es más sencillo empezar la obra en cuanto el proyecto esté cerrado, sin coordinar vaciado con mudanza.' },
      { q: '¿Qué información me dan en la visita técnica antes de comprometer nada?', a: 'Una evaluación del estado de las instalaciones observables, una orientación sobre qué tipo de reforma tiene sentido según el estado de la vivienda, y un plazo estimado para recibir el presupuesto cerrado. No hay ningún compromiso en la visita; el presupuesto lo recibes después con todo el alcance detallado.' },
      { q: '¿Cómo se organiza la logística de materiales para una vivienda en una zona más alejada?', a: 'El aprovisionamiento de materiales lo gestionamos nosotros y forma parte de la planificación de obra. La distancia no añade retrasos cuando los materiales están pedidos antes de empezar. Si algún material concreto tiene un plazo de entrega largo, lo anticipamos para que no condicione el ritmo de la obra.' },
    ],
  },

  'reforma-banos': {
    'alcala-de-henares': [
      { q: '¿Qué debería preparar antes de la visita para pedir presupuesto del baño?', a: 'Las medidas del baño si las tienes, una descripción de lo que quieres cambiar (solo la bañera, todo el alicatado, la distribución completa) y si tienes alguna referencia de estilo. Si ya tienes algún material elegido, es útil mencionarlo. Si no tienes nada decidido, la visita puede servir también para orientar la elección.' },
      { q: '¿Puedo pedir presupuesto del baño sin haber elegido el azulejo todavía?', a: 'Sí. Para cerrar el presupuesto necesitamos el alcance de la obra (qué se hace y qué no) y una franja de calidad de materiales. Con eso el precio queda cerrado aunque el modelo concreto de azulejo se elija después, siempre dentro de la franja acordada.' },
      { q: '¿Cómo se gestiona si el baño está en peor estado del esperado cuando se empieza a desmontar?', a: 'Si al retirar revestimientos aparece algo no previsto, lo comunicamos antes de actuar y lo presupuestamos por separado. No ampliamos el alcance sin confirmación previa. Esto puede ocurrir en baños donde el soporte tiene humedades que no eran visibles desde fuera.' },
      { q: '¿Cuándo puede hacerse la primera visita técnica para la reforma del baño?', a: 'Tras el primer contacto organizamos la visita según disponibilidad. En la visita evaluamos el estado del baño, tomamos medidas y orientamos el alcance. El presupuesto lo recibes en las 48 horas siguientes, sin compromiso.' },
    ],
    'torrejon-de-ardoz': [
      { q: 'Solo tengo un baño, ¿cómo se organiza la obra para que el tiempo sin servicio sea el mínimo?', a: 'Planificamos la secuencia para que la fase de demolición e instalaciones sea lo más corta posible. Durante esa primera parte de la obra el baño queda fuera de servicio mientras se realizan desmontaje e instalaciones. A partir de ahí el baño va recuperando funcionalidad conforme avanza la obra.' },
      { q: '¿Qué debería preparar antes de la visita para pedir presupuesto del baño?', a: 'La superficie aproximada, una descripción de lo que quieres cambiar y si ya has pensado en algún material o estilo. Si tienes fotos del baño actual, ayudan a orientar la visita. No necesitas tener nada decidido: la visita puede servir también para clarificar opciones y alcances.' },
      { q: '¿Qué puede hacer cambiar el presupuesto después de desmontar el baño?', a: 'Al retirar los revestimientos pueden aparecer instalaciones deterioradas, humedades en el soporte o soportes que necesitan reparación antes de colocar el nuevo alicatado. La visita técnica detecta indicios, pero algunos problemas solo se confirman al abrir. Si aparece algo nuevo, lo comunicamos antes de actuar y lo valoramos por separado.' },
      { q: '¿Es mejor cambiar solo la bañera o aprovechar para renovar todo el baño?', a: 'Depende del estado del alicatado. Si está en buen estado, sin grietas ni humedades, y la distribución es correcta, cambiar la bañera por un plato de ducha sin tocar los revestimientos puede ser suficiente. Si el alicatado está deteriorado o hay síntomas de humedad, hacer la reforma completa aprovechando que ya se abre el baño es más eficiente que dos obras separadas.' },
    ],
    'coslada': [
      { q: '¿Qué debería tener claro antes de pedir presupuesto para la reforma del baño?', a: 'El alcance principal: si quieres cambiar solo la bañera, renovar los revestimientos también, o hacer una reforma completa con nuevo mueble y sanitarios. Con ese punto claro, el presupuesto puede ser preciso. Si todavía estás valorando opciones, la visita puede presentarte presupuesto para cada alcance.' },
      { q: '¿Puede prolongarse el plazo de una reforma de baño más de lo previsto?', a: 'Los retrasos más habituales son los de materiales con plazo de entrega largo y los problemas no previstos que aparecen al desmontar. El primero se evita pidiendo los materiales antes de arrancar la obra. El segundo, con una buena visita técnica que detecte indicios y los contemple en el presupuesto.' },
      { q: '¿Cuándo conviene revisar también las tuberías al reformar el baño?', a: 'Si presentan deterioro, han dado algún problema o no se conoce bien su estado, conviene valorarlo con el baño ya abierto. Hacerlo en la misma obra tiene un coste adicional menor que volver a abrir todo en una intervención posterior independiente.' },
      { q: '¿Se puede reformar el baño manteniendo los muebles actuales del piso protegidos en otra habitación?', a: 'Sí. Protegemos el acceso y las zonas de paso con plásticos para que el polvo de demolición no se extienda al resto de la vivienda. Los muebles de habitaciones contiguas no se mueven salvo que el acceso a la obra lo requiera, y en ese caso lo coordinamos contigo antes de arrancar.' },
    ],
    'san-fernando-de-henares': [
      { q: 'Solo tengo un baño y necesito seguir usándolo, ¿cómo se gestiona la reforma?', a: 'Planificamos la secuencia para minimizar el tiempo sin servicio. Los primeros días de demolición son los críticos; después, conforme avanza la obra, el inodoro puede quedar operativo antes de que estén todos los acabados. Si la situación es especialmente crítica, lo analizamos en la visita para diseñar la secuencia con ese objetivo.' },
      { q: '¿Qué factores hacen que varíe el presupuesto de dos baños con la misma superficie?', a: 'El alcance es el principal: si se cambia o no la fontanería, si hay que mover la posición de la ducha o el inodoro (lo que afecta a los desagües) y la calidad de materiales. Dos baños de 5 m² pueden tener presupuestos muy distintos si uno conserva la fontanería y el otro la renueva completamente.' },
      { q: '¿En qué momento es mejor pedir presupuesto si todavía estoy valorando opciones?', a: 'Cuanto antes. La visita técnica es gratuita y puede ayudarte a decidir entre opciones: te mostramos qué puede hacerse en tu baño concreto, qué alcance corresponde a cada rango de precio y cuánto dura cada variante. No hay ningún compromiso en pedir presupuesto.' },
      { q: '¿Qué información necesitáis para valorar la reforma del baño antes de la visita?', a: 'La superficie aproximada del baño y una descripción básica del alcance previsto ayudan a orientar la visita. Si tienes dudas entre opciones (solo ducha, reforma completa, cambio de distribución), mencionarlas en el primer contacto nos permite ir a la visita con las dos o tres alternativas valoradas.' },
    ],
    'guadalajara': [
      { q: '¿Es posible reformar el baño sin quitar todos los azulejos?', a: 'Sí, cuando el alicatado está en buen estado y no hay síntomas de humedad. En ese caso, cambiar la bañera, los sanitarios y el mueble sobre el alicatado existente es una opción válida y más rápida. Si hay grietas, adherencia deficiente o síntomas de deterioro, conviene evaluar si aguanta bien otro ciclo de vida antes de decidir conservarlo.' },
      { q: '¿Qué debería elegir primero: el alcance de la reforma o los materiales?', a: 'El alcance primero. Los materiales pueden variar dentro de distintas franjas de calidad sin cambiar el precio de la mano de obra. Pero si el alcance cambia una vez elegidos los materiales, puede ser necesario cambiar también los materiales. Cierra el alcance en la visita y elige materiales después con esa base definida.' },
      { q: '¿Cuándo conviene ampliar el alcance de la reforma más allá del baño?', a: 'Cuando hay instalaciones compartidas con otra estancia que también necesitan revisión. La fontanería de un baño puede estar conectada con la de la cocina; si ambas tienen años, puede ser más eficiente revisar las dos en la misma movilización. En la visita evaluamos si hay conexiones que hagan recomendable ampliar el alcance.' },
      { q: '¿Cómo comparo dos presupuestos de reforma de baño?', a: 'Comparando qué incluye cada uno en fontanería, gestión de escombros y calidad de materiales. Un presupuesto que excluye la renovación de fontanería puede parecer más barato pero tener un mayor riesgo de desvío si aparecen tuberías deterioradas al abrir. Pide que cada uno especifique exactamente qué está dentro del precio.' },
    ],
    'azuqueca-de-henares': [
      { q: '¿Qué información necesitáis para dar una orientación de precio sin visita previa?', a: 'La superficie del baño, el alcance previsto (cambio de bañera solamente, renovación completa de revestimientos o reforma completa con fontanería nueva) y si se mantiene o cambia la distribución. Con eso podemos orientar una horquilla. El precio cerrado requiere la visita para evaluar el estado real de las instalaciones.' },
      { q: '¿Qué es mejor: reformar el baño y la cocina en obras separadas o en la misma?', a: 'En la misma, cuando sea posible. Los gremios de fontanería y electricidad trabajan en ambos espacios en la misma movilización, lo que reduce el coste de coordinación y el tiempo total de obra. También se desescombra una sola vez. Salvo que tengas razones económicas para separarlas en el tiempo, la obra conjunta es la opción más eficiente.' },
      { q: '¿Qué ocurre si durante la obra del baño aparece una humedad que no se veía antes?', a: 'Lo comunicamos antes de actuar y presentamos una valoración del trabajo adicional necesario para resolverla correctamente. No seguimos adelante sin autorización previa en trabajos que no estaban en el presupuesto original. La impermeabilización correcta de la zona afectada queda incluida en esa valoración.' },
      { q: '¿Puedo pedir presupuesto del baño si todavía no sé qué materiales quiero?', a: 'Sí. El presupuesto se cierra con una franja de calidad de materiales (básica, media o alta), no con el modelo concreto. Dentro de esa franja puedes elegir el azulejo, el sanitario y el mueble con tiempo, antes de que llegue la fase de acabados. Si luego eliges algo que está por encima de la franja acordada, se ajusta la diferencia.' },
    ],
    'meco': [
      { q: '¿Puedo reformar los dos baños de la vivienda al mismo tiempo?', a: 'Sí, y suele ser más eficiente que hacerlos en obras separadas. Los gremios trabajan en ambos en la misma movilización, el desescombro se hace una sola vez y el plazo total es menor que hacerlos secuencialmente. Si solo tienes un baño, la secuencia se diseña para mantener uno operativo mientras se termina el otro.' },
      { q: '¿Cuándo merece la pena hacer baño y cocina en la misma obra?', a: 'Cuando ambos lo necesitan. La fontanería conecta baño y cocina, y la movilización del gremio para uno puede extenderse al otro con un coste adicional menor que una segunda obra independiente. Si los dos espacios van a reformarse en un plazo de 2-3 años, mejor hacerlo todo a la vez.' },
      { q: '¿Qué debería tener decidido antes de que empiece la obra del baño?', a: 'El alcance (qué se cambia y qué se conserva), la posición final de la ducha o bañera y los sanitarios, y el tipo de materiales en términos generales. Con eso cerrado, la obra puede avanzar sin paradas por decisiones pendientes. Los modelos concretos de azulejo o grifo pueden finalizarse durante la fase de demolición.' },
      { q: '¿Puedo pedir presupuesto de un baño en un adosado de dos plantas?', a: 'Sí, sin ninguna diferencia de proceso respecto a un piso. La visita técnica es la misma: evaluamos el estado de las instalaciones observables y el alcance del trabajo. Si hay más de un baño y quieres presupuestar los dos, la visita los cubre todos y el presupuesto los detalla por separado.' },
    ],
    'camarma-de-esteruelas': [
      { q: '¿Qué diferencia tiene reformar dos baños de una vivienda unifamiliar frente a uno solo?', a: 'La eficiencia de gremios. Con dos baños, fontanería y alicatado trabajan en dos espacios en la misma movilización, lo que reduce el coste total respecto a dos obras separadas. Si los baños comparten pared, también puede haber ventajas en el recorrido de instalaciones. Lo evaluamos en la visita con la distribución de la vivienda.' },
      { q: '¿Puedo pedir presupuesto del baño sin haber decidido si cambio solo la bañera o hago la reforma completa?', a: 'Sí. La visita puede presentar presupuesto para ambas opciones, con el alcance y el plazo de cada una. Ver los dos precios con el alcance detallado ayuda a decidir cuál tiene más sentido según el estado actual del baño y el presupuesto disponible.' },
      { q: '¿Cuándo conviene reformar el baño y la cocina en la misma obra?', a: 'Cuando los dos necesitan intervención en un horizonte de pocos años. Unir las dos obras reduce el coste de movilización de gremios y el tiempo total sin poder usar los espacios. Si el presupuesto no alcanza para los dos a la vez, lo valoramos por separado para decidir cuál es más urgente.' },
      { q: '¿Qué debería tener claro antes de la visita técnica del baño?', a: 'El alcance general (qué quieres cambiar) y si hay restricciones de presupuesto o plazo que condicionen la decisión. Si tienes alguna referencia de estilo o material que te guste, mencionarla en la visita ayuda a orientar las opciones. No es necesario tener nada elegido: la visita puede cubrir también esa parte.' },
    ],
  },

  'reforma-cocinas': {
    'alcala-de-henares': [
      { q: '¿Qué debería tener decidido antes de pedir presupuesto de la cocina?', a: 'El alcance principal: si quieres cambiar solo los muebles, si vas a abrir la cocina al salón, si incluye electrodomésticos y en qué gama. Con eso el presupuesto puede ser preciso. Si todavía estás entre opciones, la visita puede presentar alternativas con presupuesto para cada una.' },
      { q: '¿Cuánto tiempo por adelantado hay que planificar una reforma de cocina?', a: 'Lo mínimo recomendable es tener elegidos los muebles y electrodomésticos principales antes de que empiece la obra civil. Muebles a medida o electrodomésticos de integración pueden necesitar fabricación o suministro específico. Si se piden con retraso, pueden generar una pausa entre la obra civil terminada y la instalación de muebles.' },
      { q: '¿Qué factores hacen que dos presupuestos de cocina sean difíciles de comparar?', a: 'Que no incluyan lo mismo. Un presupuesto puede incluir los electrodomésticos y otro no; uno puede incluir la adaptación eléctrica y otro contemplarla como extra. Para comparar bien, pide que cada uno especifique exactamente qué está en el precio: muebles, encimera, electrodomésticos, instalaciones, extracción y gestión de escombros.' },
      { q: '¿Se puede reformar la cocina si hay que despejar el pasillo para mover materiales?', a: 'Sí, es parte de la gestión habitual de la obra. Protegemos el pasillo y las zonas de paso, y coordinamos la entrada de materiales para que el impacto en el resto de la vivienda sea el mínimo posible. Si la zona de acceso es estrecha, lo evaluamos en la visita para definir la logística antes de empezar.' },
    ],
    'torrejon-de-ardoz': [
      { q: '¿Qué debería elegir primero: la distribución de la cocina o los muebles?', a: 'La distribución primero. Los muebles dependen de la distribución: si cambias la posición del fregadero o añades una isla, los muebles deben adaptarse a ese layout. Si eliges los muebles antes de cerrar la distribución y luego cambias la distribución, puede ser necesario replanificar los muebles.' },
      { q: '¿Puedo reformar la cocina y seguir preparando comidas en casa durante la obra?', a: 'Los primeros días de demolición hacen la cocina completamente inutilizable. Una vez terminada la obra civil e instalados los muebles, la funcionalidad va recuperándose progresivamente. El periodo de obra completa puede extenderse entre 2 y 4 semanas. Si tienes microondas y acceso a un espacio alternativo, la convivencia es más llevadera.' },
      { q: '¿Qué puede hacer que una reforma de cocina dure más de lo previsto?', a: 'Los materiales con entrega larga y los cambios de distribución decididos con la obra empezada. El primero se controla pidiendo muebles y electrodomésticos antes de arrancar. El segundo, cerrando el diseño completo en la visita. Si el layout está cerrado y los materiales están pedidos, el plazo de una reforma de cocina rara vez se desvía.' },
      { q: '¿Es posible cambiar solo los muebles sin hacer obra de instalaciones?', a: 'Sí, cuando las instalaciones están en buen estado y la distribución no cambia. Cambiar frentes, muebles y encimera sin tocar fontanería ni electricidad puede hacerse en 3-5 días y renueva completamente el aspecto. Si la instalación eléctrica no cumple para los electrodomésticos actuales o la posición de algún punto de agua cambia, hay que incluir esa parte.' },
    ],
    'coslada': [
      { q: '¿Qué debería tener claro antes de la visita para presupuestar la cocina?', a: 'Si la distribución va a cambiar o se mantiene, si incluye electrodomésticos o solo muebles e instalaciones, y en qué franja de calidad de muebles te mueves. Con eso la visita puede centrarse en lo que realmente necesitas y el presupuesto puede ser más preciso desde el primer momento.' },
      { q: '¿Cuándo merece la pena abrir la cocina al salón?', a: 'Cuando la cocina es pequeña o cerrada y el salón tiene superficie suficiente para absorber la integración. Abrir la cocina puede ampliar el alcance de la obra: hay que comprobar la función del tabique, coordinar instalaciones y resolver la extracción. Antes de decidir, conviene evaluar cómo afectan el ruido y el olor al salón en la distribución resultante.' },
      { q: '¿Qué instalaciones conviene revisar antes de reformar la cocina?', a: 'La instalación eléctrica puede necesitar adaptación si el cuadro no tiene circuitos independientes para los electrodomésticos actuales. La fontanería, si no ha dado problemas, puede estar en buen estado. El estado observable de cada instalación lo revisamos en la visita técnica antes de cerrar el presupuesto.' },
      { q: '¿Puedo elegir los electrodomésticos después de que empiece la obra?', a: 'Solo los que no condicionen la instalación eléctrica. Horno, vitrocerámica, lavavajillas y frigorífico deben estar elegidos antes de cerrar la instalación eléctrica, porque su potencia determina los circuitos necesarios. La campana también condicionan el recorrido del conducto de extracción. El microondas y otros electrodomésticos de encimera pueden decidirse después.' },
    ],
    'san-fernando-de-henares': [
      { q: '¿Qué debería decidir antes de pedir presupuesto de la cocina?', a: 'El alcance principal: si quieres obra completa (instalaciones + muebles) o solo cambio de muebles; si la distribución cambia o se mantiene; y si incluyes electrodomésticos. Con esas tres decisiones claras, el presupuesto puede ser cerrado y comparable.' },
      { q: '¿Cuándo conviene revisar también la fontanería al reformar la cocina?', a: 'Cuando han dado algún problema, no se conoce bien su estado, o la nueva distribución obliga a intervenir sobre ellas. Con la cocina ya abierta, hacer la fontanería tiene un coste adicional menor que abrir la cocina una segunda vez en pocos años.' },
      { q: '¿Es posible presupuestar la cocina sin haber elegido los muebles todavía?', a: 'Sí. El presupuesto puede cerrarse con una franja de calidad de muebles (básica, media o alta) y con el layout definido. La elección de puertas, tiradores y encimera puede hacerse después. Lo que sí hay que tener claro antes de empezar la obra son los electrodomésticos que van integrados, porque condicionan las instalaciones.' },
      { q: '¿Se puede presupuestar la reforma de cocina si el piso todavía está alquilado?', a: 'Sí. La visita puede realizarse con el piso ocupado. El vaciado del espacio hay que coordinarlo con el inquilino antes de empezar la obra. Si el contrato de alquiler está próximo a vencer, podemos planificar el proyecto para que la obra empiece en cuanto el piso quede libre.' },
    ],
    'guadalajara': [
      { q: '¿Es mejor elegir los muebles antes o después de definir la distribución de la cocina?', a: 'Después de definir la distribución. Si eliges los muebles antes y luego la distribución cambia (por ejemplo, se abre al salón o se mueve el fregadero), puede ser necesario replanificar los módulos. Cierra primero el layout con la visita técnica y elige los muebles con esa base definida.' },
      { q: '¿Qué conviene decidir antes de que empiece la demolición de la cocina?', a: 'La posición de los electrodomésticos integrados, el recorrido de la extracción y si hay cambio de distribución. Esas tres cosas condicionan las instalaciones, que se hacen durante la demolición. Si cambian después, hay que reabrir lo que ya está cerrado.' },
      { q: '¿Puedo pedir presupuesto de la cocina si todavía estoy decidiendo si abrirla al salón?', a: 'Sí. La visita puede presentar presupuesto para los dos casos: cocina cerrada y cocina abierta al salón. Ver los dos alcances con precio y plazo te ayuda a decidir cuál tiene más sentido antes de comprometer nada. La diferencia de coste entre las dos opciones suele ser menor de lo que se espera.' },
      { q: '¿Cómo afecta la posición de la extracción a la distribución de la cocina?', a: 'La campana debe poder evacuar al exterior o a una chimenea de extracción. Si el recorrido hasta la salida es largo o complejo, puede condicionar dónde pueden colocarse los fogones. En cocinas donde se cambia la distribución, conviene resolver el recorrido de extracción antes de cerrar el layout definitivo.' },
    ],
    'azuqueca-de-henares': [
      { q: '¿Qué debería tener claro antes de pedir presupuesto para reformar la cocina?', a: 'Si la distribución va a cambiar o se mantiene, si incluye electrodomésticos y en qué gama, y si vas a abrir la cocina al salón. Con esas decisiones orientadas, la visita puede ser más productiva y el presupuesto más ajustado a lo que realmente quieres.' },
      { q: '¿Es posible cambiar la distribución de la cocina sin cambiar todos los muebles?', a: 'Depende del cambio. Si se mueve el fregadero o se añade una isla, los muebles que afectan a esa zona hay que adaptarlos. Si el cambio es solo de tabiquería (abrir al salón), los muebles actuales pueden reutilizarse si están en buen estado. Lo evaluamos en la visita viendo los muebles existentes.' },
      { q: '¿Cuándo conviene reformar cocina y baño en la misma obra?', a: 'Cuando los dos lo necesitan en un horizonte próximo. La fontanería une los dos espacios, y la movilización del fontanero para uno puede extenderse al otro con un coste adicional menor que una segunda obra independiente. Si los dos están pendientes, hacerlo todo a la vez reduce el tiempo total y el coste de coordinación.' },
      { q: '¿Qué puede prolongar una reforma de cocina más del plazo inicialmente previsto?', a: 'Los materiales con plazo de entrega largo (muebles a medida, encimeras especiales) y los cambios de distribución que se deciden con la obra ya empezada. Ambos se controlan: el primero, haciendo el pedido antes de arrancar; el segundo, cerrando el diseño completo en la visita antes de la primera jornada.' },
    ],
    'meco': [
      { q: '¿Qué diferencias tiene reformar la cocina en la planta baja de una vivienda unifamiliar frente a un piso?', a: 'Puede haber más flexibilidad para el recorrido de extracción (salida directa a fachada lateral o trasera) y para el paso de instalaciones. En algunos casos, la planta baja de una unifamiliar permite distribuciones que en un piso serían más complejas. También puede haber más espacio disponible para obra y materiales durante la ejecución.' },
      { q: '¿Qué debería tener decidido antes de solicitar visita técnica para la cocina?', a: 'Una idea del alcance: si quieres solo muebles nuevos, si incluye instalaciones o si vas a cambiar la distribución. Si tienes alguna referencia de estilo que te guste, mencionarla en el primer contacto ayuda a orientar la visita. No hace falta tener nada cerrado: la visita puede ayudar también a definir el alcance.' },
      { q: '¿Se puede reformar la cocina sin cambiar la instalación eléctrica?', a: 'Depende del estado de la instalación y de los electrodomésticos que vayas a instalar. Si el cuadro puede asumir los consumos previstos y la distribución de circuitos es correcta, puede no ser necesario cambiarla. Si no se ha revisado, presenta limitaciones o no cubre las necesidades de los nuevos electrodomésticos, conviene evaluarla durante la visita antes de cerrar el presupuesto.' },
      { q: '¿Merece la pena reformar la cocina si voy a vender la vivienda en los próximos años?', a: 'Depende del estado actual de la cocina. Si los acabados están muy envejecidos o las instalaciones no están en buen estado, una reforma puede mejorar la percepción del comprador. Para orientar qué alcance tiene más sentido según el estado y el objetivo, lo revisamos en la visita técnica.' },
    ],
    'camarma-de-esteruelas': [
      { q: '¿Qué debería preparar antes de la visita para presupuestar la reforma de la cocina?', a: 'Las medidas aproximadas de la cocina, una idea del alcance (solo muebles, instalaciones incluidas, o cambio de distribución) y si tienes alguna referencia de estilo. Si ya tienes pensado si vas a abrir la cocina al salón o no, mencionarlo antes de la visita ayuda a que lleguemos con las opciones ya orientadas.' },
      { q: '¿Se puede presupuestar la cocina antes de tener elegidos los muebles?', a: 'Sí. El presupuesto puede cerrarse con el alcance (qué se hace) y una franja de calidad de muebles, sin tener el modelo elegido. Los muebles concretos se eligen después, dentro de esa franja. Lo que sí hay que tener claro son los electrodomésticos que van integrados, porque condicionan los circuitos y el espacio.' },
      { q: '¿Cuándo conviene cambiar la distribución de la cocina aprovechando la reforma?', a: 'Cuando la distribución actual no funciona bien para el uso diario: poca superficie de trabajo, mal acceso al almacenamiento o la extracción mal orientada. El coste de redistribuir tabiquería durante una reforma de cocina es marginal respecto al resultado a largo plazo. Si la distribución funciona bien, mantenerla ahorra obra y simplifica la elección de muebles.' },
      { q: '¿Qué factores hacen más compleja la reforma de cocina en una vivienda unifamiliar?', a: 'Principalmente el recorrido de las instalaciones. En una planta de unifamiliar, fontanería y electricidad pueden tener distribuciones diferentes a las de un piso de bloque. También puede haber más margen para resolver la extracción por fachada, lo que simplifica ese punto. Lo evaluamos en la visita con la distribución actual de la vivienda.' },
    ],
  },

  'reforma-pisos': {
    'alcala-de-henares': [
      { q: '¿Qué información necesitáis para orientar el alcance antes de la visita?', a: 'La superficie del piso, el año de construcción aproximado y una descripción de lo que quieres cambiar. Si ya sabes que el cuadro o la fontanería tienen problemas, mencionarlo ayuda a que la visita lo evalúe con más detalle. Con eso podemos orientar si conviene más una reforma parcial o integral antes de que llegues a la visita.' },
      { q: '¿Puedo pedir presupuesto si el piso está alquilado y hay que coordinar con el inquilino?', a: 'Sí. La visita técnica puede realizarse con el inquilino presente o con su consentimiento. Para obras que requieran que el piso esté vacío, hay que coordinar el acceso con el inquilino antes de empezar. Si el arrendamiento está próximo a vencer, podemos planificar el proyecto para empezar en cuanto quede libre.' },
      { q: '¿Cuándo conviene reformar el piso completo antes de ponerlo en alquiler?', a: 'Cuando el estado actual de instalaciones o acabados limita el perfil de inquilino o la renta posible. Si el cuadro, la fontanería o los acabados necesitan renovación, una reforma puede mejorar la posición del piso en el mercado de alquiler. Lo orientamos en la visita según el estado y el objetivo.' },
      { q: '¿Cómo se gestiona la reforma en el caso de una herencia o compra reciente?', a: 'El proceso es el mismo: visita técnica para evaluar el estado, presupuesto cerrado y contrato. Si el piso está vacío al recibirlo o adquirirlo, la obra puede planificarse para empezar en cuanto estés listo. Es habitual que la visita se haga antes del acuerdo definitivo, con la presencia del vendedor o el gestor de la herencia.' },
    ],
    'torrejon-de-ardoz': [
      { q: '¿Puedo pedir presupuesto de reforma del piso antes de comprarlo?', a: 'Sí, y es una buena práctica. Conocer el coste estimado de la reforma antes de cerrar la compra te da información importante para negociar el precio o decidir si el piso encaja en tu presupuesto total. La visita puede realizarse con el vendedor o el agente inmobiliario presente, y el presupuesto orientativo no implica compromiso de obra.' },
      { q: '¿Qué debería preparar antes de la visita para reformar el piso?', a: 'Una descripción de lo que quieres cambiar y en qué estado crees que están las instalaciones. Si ya has detectado algún problema (cuadro antiguo, goteras, grietas), mencionarlo para que la visita lo evalúe específicamente. Si tienes planos del piso o alguna idea de redistribución, llevarlos ayuda a que la visita sea más productiva.' },
      { q: '¿Qué conviene revisar en el estado del piso antes de plantear qué reformar?', a: 'El cuadro eléctrico y la fontanería son los dos elementos que más condicionan el alcance. Un cuadro sin actualizar o tuberías en mal estado pueden requerir renovación aunque los acabados parezcan aceptables. Si necesitan renovación, hacerlo junto con el resto de la reforma es más eficiente que dejarlo para después.' },
      { q: '¿Cuándo tiene sentido reformar el piso antes de ponerlo en el mercado?', a: 'Cuando el estado de los acabados o las instalaciones limita el tipo de comprador o inquilino al que puede llegar el piso. Una reforma centrada en baño, cocina y suelos puede cambiar la percepción del inmueble. Para orientar qué alcance tiene más sentido según el estado y el objetivo, lo revisamos en la visita técnica.' },
    ],
    'coslada': [
      { q: '¿Qué debería tener decidido antes de solicitar visita para la reforma del piso?', a: 'Una idea general del alcance: si quieres renovar baño y cocina solamente, si incluye suelos y pintura, o si hay redistribución de tabiques. No hace falta tener todos los detalles: la visita puede ayudar a definir qué tiene más sentido según el estado real del piso.' },
      { q: '¿Es posible pedir una primera orientación de presupuesto sin visita previa?', a: 'Sí, para dar una horquilla orientativa. Con la superficie del piso, el año de construcción y una descripción del alcance previsto podemos orientar un rango antes de la visita. El presupuesto cerrado requiere siempre la visita técnica para evaluar el estado real de las instalaciones.' },
      { q: '¿Cómo se distribuye el presupuesto entre las diferentes zonas del piso?', a: 'Las partidas de mayor coste son siempre las instalaciones (electricidad y fontanería si se renuevan), el baño y la cocina. Los suelos y la pintura son generalmente las actuaciones de mayor impacto visual por menor coste. La carpintería interior tiene un impacto importante en la percepción del espacio con un coste por zona contenido.' },
      { q: '¿Cuándo conviene reformar el piso antes de vender o alquilar?', a: 'Cuando el estado actual limita el precio o el perfil de comprador o inquilino. En pisos donde la cocina y el baño no se han tocado en 20 o más años, una reforma puede mejorar significativamente la posición en el mercado. Lo orientamos en la visita según el estado y el objetivo.' },
    ],
    'san-fernando-de-henares': [
      { q: '¿Puedo pedir presupuesto de reforma del piso si todavía no sé exactamente qué quiero cambiar?', a: 'Sí. La visita técnica puede también servir de consultoría: evaluamos el estado del piso, te explicamos qué tiene más impacto según tu objetivo (vivir, alquilar o vender) y presentamos el presupuesto para los alcances que tienen más sentido en tu caso. No es necesario tener nada decidido antes de la visita.' },
      { q: '¿Qué debería tener preparado para la visita técnica?', a: 'Acceso al piso y una idea general de qué quieres cambiar o mejorar. Si ya has detectado problemas concretos (cuadro antiguo, baño con humedades, suelos deteriorados), mencionarlos para que la visita los evalúe con detalle. Si tienes planos, llevarlos; si no, los tomamos durante la visita.' },
      { q: '¿Qué puede descubrirse al abrir un piso antiguo que no era visible en la primera visita?', a: 'La fontanería y el cableado están empotrados y no son visibles sin abrir. Al desmontar los baños o abrir rozas para la electricidad puede aparecer tuberías en peor estado del esperado o cableado sin protección. Por eso la visita técnica evalúa indicios y el presupuesto contempla cómo se gestionan estos casos si aparecen.' },
      { q: '¿Cuándo merece la pena reformar el piso antes de mudarse?', a: 'Siempre que el estado del piso lo justifique y sea posible organizarse sin vivir en él durante la obra. Hacer la reforma con el piso vacío permite ejecutar todos los trabajos sin restricciones de horario, sin proteger muebles y con mayor velocidad de ejecución. El resultado es mejor y el plazo suele ser menor que con el piso ocupado.' },
    ],
    'guadalajara': [
      { q: '¿Qué debería tener claro antes de pedir presupuesto de reforma?', a: 'La diferencia entre lo que quieres cambiar (acabados: baño, cocina, suelos, pintura) y lo que puede necesitar renovación aunque no lo veas (cuadro eléctrico, fontanería). Si tienes claro que las instalaciones están en buen estado, el presupuesto puede centrarse en los acabados. Si no lo sabes, la visita lo evalúa.' },
      { q: '¿Se puede presupuestar un piso sin haber decidido si se cambia la distribución?', a: 'Sí, pero la distribución es lo que más condiciona el precio. Si puedes llevar alguna idea de redistribución a la visita, el presupuesto puede contemplar ambas opciones (con y sin redistribución). Si la distribución cambia después de cerrar el presupuesto, es necesario ajustar el precio.' },
      { q: '¿Qué factores hacen que el presupuesto de reforma de un piso varíe más de lo esperado?', a: 'El estado de las instalaciones (si el cuadro o la fontanería necesitan renovación), los cambios de distribución y los problemas no previstos que aparecen al abrir. Los dos primeros se controlan cerrando bien el proyecto antes de empezar. El tercero, con una visita técnica que evalúe el estado observable antes de comprometer el precio.' },
      { q: '¿Cuándo conviene reformar el piso completo antes de entrar a vivir?', a: 'Cuando el estado lo requiere y es posible organizarse. Con el piso vacío, la obra puede ejecutarse sin restricciones: todos los trabajos a la vez, sin proteger muebles ni limitar horarios. En pisos donde baño, cocina e instalaciones necesitan intervención, hacerlo antes de entrar es siempre más eficiente que hacerlo con el piso ocupado.' },
    ],
    'azuqueca-de-henares': [
      { q: '¿Qué información sirve para orientar el presupuesto antes de la visita?', a: 'La superficie del piso, el año de construcción y una descripción del alcance previsto. Con eso podemos darte una horquilla orientativa antes de la visita. El presupuesto cerrado siempre requiere la visita técnica para evaluar el estado real de las instalaciones y confirmar el alcance.' },
      { q: '¿Cómo se organiza la reforma si necesito empezar lo antes posible?', a: 'Tras el primer contacto organizamos la visita técnica. El presupuesto lo recibes en 48 horas. El inicio depende de la disponibilidad del equipo, del alcance de la obra y del suministro de materiales. Para obras que requieren tramitación previa, el trámite puede iniciarse en paralelo con el proyecto para no retrasar el inicio.' },
      { q: '¿Puedo reformar el piso por estancias en distintos momentos?', a: 'Sí, aunque no siempre es la opción más eficiente. Cuando distintas estancias comparten instalaciones o acabados, hacerlas por separado puede obligar a repetir trabajos. Si el presupuesto no alcanza para todo a la vez, orientamos qué parte tiene más impacto y puede hacerse primero sin complicar lo que venga después.' },
      { q: '¿Qué conviene tener decidido antes de que empiece la obra?', a: 'El alcance completo: qué se hace y qué no. Los materiales concretos pueden elegirse mientras se hace la obra civil, pero el alcance no debe cambiar una vez arrancada: cambiar qué se reforma a mitad de obra alarga el plazo y puede añadir coste.' },
    ],
    'meco': [
      { q: '¿Puedo reformar una planta de la vivienda sin hacer la otra al mismo tiempo?', a: 'Sí, y es habitual en viviendas de dos plantas cuando el presupuesto no alcanza para todo o cuando la urgencia es diferente en cada planta. Lo que hay que tener en cuenta es que las instalaciones (fontanería, electricidad) pueden estar compartidas entre plantas, y eso puede afectar a cómo se organiza la secuencia de obra.' },
      { q: '¿Qué debería preparar antes de la visita para reformar la casa?', a: 'Una descripción del estado de la vivienda y de lo que quieres cambiar, y si tienes alguna idea de redistribución en alguna zona. Si sabes que las instalaciones tienen años o han dado problemas, mencionarlo. Con una descripción básica, la visita puede prepararse para evaluar exactamente lo que necesitas.' },
      { q: '¿Qué diferencias tiene reformar una vivienda unifamiliar frente a un piso de bloque?', a: 'La vivienda unifamiliar puede tener más instalaciones independientes (caldera propia, acometidas directas) y más superficie. Eso da más flexibilidad en el alcance pero también implica más variables que coordinar. La logística de materiales y escombros suele ser más sencilla al tener acceso directo sin ascensores ni pasillos de bloque.' },
      { q: '¿Cuándo conviene hacer una reforma completa de la vivienda de una vez en lugar de ir por partes?', a: 'Cuando las instalaciones necesitan renovación. Si cuadro y fontanería hay que cambiarlos, hacerlo junto con los acabados evita abrir la vivienda dos veces. Si las instalaciones están bien, puede tener sentido ir por partes según presupuesto disponible, empezando por lo que más impacto tiene.' },
    ],
    'camarma-de-esteruelas': [
      { q: '¿Qué debería preparar antes de la visita técnica para reformar la vivienda?', a: 'Acceso a todas las plantas y una idea del alcance: qué quieres cambiar y en qué orden de prioridad. Si hay instalaciones que han dado problemas, mencionarlas para que la visita las evalúe en detalle. No hace falta tener nada decidido: la visita también sirve para orientar el alcance según el estado real de la vivienda.' },
      { q: '¿Se puede presupuestar una reforma parcial sin descartar hacer una integral después?', a: 'Sí. El presupuesto puede cerrar el alcance parcial y dejar indicado qué quedaría pendiente para una futura fase. Así puedes planificar la inversión por etapas sin que la primera obra complique la segunda. Lo importante es que la primera fase no cierre o dificulte lo que venga después.' },
      { q: '¿Qué conviene revisar primero en una vivienda unifamiliar antes de plantear la reforma?', a: 'Las instalaciones: cuadro eléctrico, fontanería y, cuando corresponda según el estado de la vivienda, carpintería exterior (ventanas) si no se han renovado. Estas partidas afectan a la habitabilidad y la eficiencia energética más que los acabados, y condicionan el alcance total de la reforma.' },
      { q: '¿Cuándo tiene sentido reformar toda la vivienda de una vez en lugar de ir por partes?', a: 'Cuando las instalaciones necesitan renovación o cuando hay redistribución de espacios entre plantas. En esos casos, abrir todo a la vez es más eficiente que dos obras separadas. Si las instalaciones están bien y no hay redistribución, puede tener sentido priorizar por zonas y hacer el resto cuando el presupuesto lo permita.' },
    ],
  },

  'locales-comerciales': {
    'alcala-de-henares': [
      { q: '¿Qué información necesitáis antes de la visita para presupuestar la reforma del local?', a: 'La superficie, el uso previsto (comercio, hostelería, clínica, oficina) y si el local ya ha tenido alguna actividad anterior. El uso es lo más importante: determina qué instalaciones son necesarias y qué documentación técnica hay que tramitar. Con eso podemos orientar el proceso antes de que lleguemos al local.' },
      { q: '¿Es posible reformar el local por fases para mantener la actividad?', a: 'Depende del tipo de obra. Si las instalaciones se pueden aislar por zonas, es posible trabajar por tramos. En obras donde hay que cortar los suministros generales o actuar sobre toda la instalación eléctrica, hacerlo todo de una vez es más eficiente. Lo evaluamos en la visita según el tipo de local y la actividad.' },
      { q: '¿Qué diferencias hay entre reformar un local en el casco histórico de Alcalá y uno en polígono?', a: 'En el casco histórico hay que tener en cuenta las restricciones de fachada y, en algunos casos, de instalaciones visibles que afecten a la imagen del edificio. Los locales en polígono suelen tener más libertad de distribución y de acceso para materiales y extracción. El tipo de tramitación también puede variar según la zona.' },
      { q: '¿Cuándo es necesario contar con un proyecto técnico firmado para reformar un local?', a: 'Para actividades clasificadas (hostelería, clínicas, talleres, peluquerías) suele ser necesario un proyecto técnico y tramitación previa. Para comercio sin actividad clasificada, los requisitos son menores, aunque dependen del uso concreto y del Ayuntamiento de Alcalá de Henares. Lo determinamos antes de comenzar la tramitación.' },
    ],
    'torrejon-de-ardoz': [
      { q: '¿Qué debería tener claro antes de pedir presupuesto para reformar el local?', a: 'El uso previsto y la distribución básica que necesitas. El uso determina qué instalaciones son necesarias y qué tramitación corresponde seguir. La distribución básica (dónde van los puestos de trabajo, dónde va la zona de atención al público, dónde va el almacén) condiciona la posición de instalaciones, que es difícil de cambiar una vez cerradas.' },
      { q: '¿Puede el negocio seguir abierto durante la reforma del local?', a: 'Depende del alcance. Si la reforma afecta a instalaciones generales o a toda la superficie, no es posible mantener la actividad. Para reformas parciales por zonas, puede diseñarse una secuencia que permita mantener parte del local operativo. Lo evaluamos en la visita según el tipo de actividad y el alcance previsto.' },
      { q: '¿Qué instalaciones hay que definir antes de empezar la obra?', a: 'La instalación eléctrica y los puntos de agua y desagüe. Una vez colocadas las particiones y el techo técnico, cambiar la posición de un punto de agua o un circuito independiente implica reabrir lo ya terminado. Definirlos antes de empezar evita ese tipo de desvíos, que son los más habituales en reformas de locales.' },
      { q: '¿Qué tramitación previa hay que gestionar para abrir un negocio en Torrejón de Ardoz?', a: 'Depende del tipo de actividad. Para actividades clasificadas (hostelería, clínicas, talleres) puede requerirse tramitación previa y proyecto técnico. Para comercio sin actividad clasificada, los requisitos pueden ser menores, aunque dependen del uso y del Ayuntamiento de Torrejón. Lo determinamos durante la planificación del proyecto.' },
    ],
    'coslada': [
      { q: '¿Qué información necesitáis para dar una primera orientación de presupuesto?', a: 'La superficie del local, el uso previsto y una descripción del estado actual (si está reformado, si tiene instalaciones o si está en bruto). Con eso podemos orientar una horquilla antes de la visita. El presupuesto cerrado siempre requiere ver el local para evaluar el estado de las instalaciones existentes y definir el alcance.' },
      { q: '¿Cómo se organiza la obra para no cerrar el negocio más tiempo del necesario?', a: 'Planificando en detalle la secuencia antes de empezar. En locales donde la actividad puede continuar durante la reforma, organizamos las fases para que las que requieren corte de suministros se hagan fuera del horario de mayor actividad o en un bloque concentrado. Para locales en obra total, se planifica el plazo mínimo posible.' },
      { q: '¿Qué puede hacer que una reforma de local sea más compleja de lo esperado?', a: 'Instalaciones preexistentes en mal estado que hay que sanear antes de instalar las nuevas, requerimientos técnicos del uso que no estaban previstos o cambios en el alcance decididos con la obra empezada. Los dos primeros se controlan con una visita técnica completa antes de cerrar el presupuesto.' },
      { q: '¿Cuándo conviene reformar el local completo antes de comenzar la actividad?', a: 'Cuando las instalaciones existentes no sirven para el uso previsto o cuando el estado general del local hace inviable una reforma por fases. Hacer todo antes de la apertura permite también tramitar la licencia de actividad sin interferir con la operativa del negocio.' },
    ],
    'san-fernando-de-henares': [
      { q: '¿Qué debería preparar antes de la visita técnica para el local?', a: 'El uso previsto y una distribución básica de la actividad: dónde va la zona de trabajo, dónde la atención al público, dónde el almacén. Si ya tienes algún requisito técnico de la actividad (ventilación específica, instalación de agua, separador), mencionarlo para que la visita lo tenga en cuenta desde el inicio.' },
      { q: '¿Puedo reformar el local si la actividad todavía no está completamente definida?', a: 'Puedes empezar el proceso, pero el uso tiene que estar claro antes de cerrar las instalaciones. La posición de los puntos de agua, los circuitos eléctricos y la ventilación dependen directamente del uso previsto. Si el uso cambia después de que estén cerradas las instalaciones, puede implicar reabrir lo que ya está terminado.' },
      { q: '¿Qué instalaciones son las primeras que hay que resolver en un local?', a: 'La acometida eléctrica y la evacuación. Son las que determinan dónde pueden ir los equipos y la distribución interior. Antes de colocar particiones o techo técnico hay que tener definidos los recorridos de las instalaciones principales para que no queden accesos cortados o recorridos imposibles una vez terminada la obra.' },
      { q: '¿Cómo afecta el tipo de actividad a los requisitos de la reforma?', a: 'Determina qué instalaciones son necesarias y qué tramitación corresponde. Una actividad de hostelería puede necesitar sistemas de extracción específicos y mayor potencia. Una actividad sanitaria o de uso profesional puede tener sus propios requerimientos técnicos. El alcance debe definirse según la actividad concreta, y por eso es el primer dato que necesitamos.' },
    ],
    'guadalajara': [
      { q: '¿Qué debería tener claro antes de pedir presupuesto para el local en Guadalajara?', a: 'El uso y la distribución básica prevista. El uso determina qué instalaciones son necesarias y qué tipo de proyecto y tramitación hay que seguir. La distribución básica condiciona dónde van las instalaciones, que es el elemento más difícil de cambiar una vez cerrado.' },
      { q: '¿Cuándo es necesario tramitar licencia de actividad en Guadalajara?', a: 'Para actividades clasificadas: hostelería, talleres, clínicas, establecimientos con consumos altos o impacto acústico. Para actividades sin clasificación especial, los requisitos pueden ser menores, aunque dependen del uso concreto y del Ayuntamiento de Guadalajara. El trámite exacto lo determinamos antes de comenzar la tramitación.' },
      { q: '¿Puede el local abrir mientras se tramita la documentación de actividad?', a: 'Depende del tipo de actividad. Los requisitos para iniciar la actividad dependen del tipo de uso y de la documentación presentada. En actividades clasificadas, suele requerirse tramitación previa antes de la apertura. Lo determinamos según el uso concreto durante la planificación, sin adelantar plazos que dependen del procedimiento aplicable.' },
      { q: '¿Qué diferencia hay entre la reforma de un local de hostelería y uno de oficinas?', a: 'El alcance de las instalaciones. La hostelería puede necesitar sistemas de extracción de alta capacidad, instalación eléctrica de mayor potencia y otros requisitos específicos del uso. Una oficina estándar puede no necesitar ninguna de esas instalaciones. El coste y el plazo de obra son significativamente distintos entre los dos tipos de uso.' },
    ],
    'azuqueca-de-henares': [
      { q: '¿Qué debería decidir antes de solicitar visita para presupuestar el local en Azuqueca?', a: 'El uso previsto y una distribución básica de la actividad. Con eso la visita puede ser más productiva y el presupuesto más ajustado. Si todavía estás entre dos usos posibles, la visita puede presentar una orientación de presupuesto para cada uno y así tener esa información antes de decidir.' },
      { q: '¿Cómo se puede reducir el tiempo hasta la apertura del negocio?', a: 'Iniciando la tramitación de documentación en paralelo con la obra desde el primer día, no cuando termina. En actividades que requieren tramitación previa, los trámites pueden condicionar la fecha de apertura. Si la documentación se inicia solo al terminar la obra, el proceso se alarga innecesariamente.' },
      { q: '¿Qué instalaciones conviene definir en la primera fase del proyecto?', a: 'La instalación eléctrica (cuadro, circuitos y potencia necesaria), los puntos de agua y desagüe, y la ventilación si el uso la requiere. Estas tres instalaciones condicionan la distribución interior y son las que más difícil resulta modificar una vez colocadas las particiones y el techo técnico.' },
      { q: '¿Puedo pedir presupuesto si el local todavía está en negociación de contrato de alquiler?', a: 'Sí. Tener un presupuesto orientativo antes de cerrar el alquiler puede ayudarte a negociar el precio o las condiciones del arrendamiento. La visita técnica puede realizarse antes de que el contrato esté firmado, con consentimiento del propietario. El presupuesto no implica ningún compromiso de obra.' },
    ],
    'meco': [
      { q: '¿Qué debería tener claro antes de pedir presupuesto de reforma del local en Meco?', a: 'El uso previsto y el estado actual del local. El uso determina qué instalaciones son necesarias y qué tramitación hay que hacer. El estado actual condiciona cuánto hay que hacer antes de poder instalar lo nuevo. Con esos dos datos el presupuesto puede ser preciso desde el inicio.' },
      { q: '¿Qué diferencias puede haber entre reformar un local en el centro de Meco y uno en una zona industrial?', a: 'En el centro, puede haber limitaciones de fachada o de ruido que no existen en una zona industrial. En una nave industrial, el reto suele estar en organizar correctamente las zonas de trabajo, atención, almacenamiento e instalaciones en un espacio más diáfano. El tipo de actividad prevista determina cuál de los dos entornos es más adecuado.' },
      { q: '¿Cuándo conviene contar con proyecto técnico para reformar un local en Meco?', a: 'Para actividades clasificadas: hostelería, clínicas, talleres. Para actividades sin clasificación especial, los requisitos pueden ser menores, aunque dependen del uso concreto y del Ayuntamiento de Meco. El trámite exacto lo determinamos antes de comenzar la tramitación.' },
      { q: '¿Qué instalaciones hay que tener definidas antes de empezar la obra?', a: 'La instalación eléctrica y los puntos de agua. Son las que condicionan la distribución interior y las que más difícil resulta cambiar una vez colocadas las particiones. Si el uso requiere ventilación especial (hostelería, actividades con humos), el recorrido del conducto también hay que definirlo antes de empezar.' },
    ],
    'camarma-de-esteruelas': [
      { q: '¿Qué información necesitáis para presupuestar la reforma del local en Camarma?', a: 'La superficie, el uso previsto y el estado actual del local. El uso es lo más importante: un restaurante y una oficina pueden tener presupuestos muy distintos con la misma superficie. Con esos datos podemos orientar el proceso antes de la visita y llegar con las preguntas técnicas ya enfocadas.' },
      { q: '¿Se puede iniciar la reforma sin tener completamente definida la actividad?', a: 'Solo en la parte de obra civil que no dependa del uso: tabiquería básica, solado, pintura. Las instalaciones deben esperar a que el uso esté claro, porque condicionan qué circuitos, qué puntos de agua y qué ventilación hay que instalar. Empezar las instalaciones sin saber el uso puede suponer hacer trabajo que hay que rehacer.' },
      { q: '¿Qué factores pueden condicionar el plazo de apertura?', a: 'Los trámites relacionados con la actividad, cuando son necesarios, pueden condicionar la fecha de apertura. Si la tramitación empieza cuando termina la obra, el proceso se alarga. Por eso iniciamos la documentación en paralelo con la obra desde el principio, no al final.' },
      { q: '¿Qué tramitación previa hay que gestionar para abrir un negocio en Camarma?', a: 'Depende del tipo de actividad y del alcance de la intervención. Para actividades clasificadas (hostelería, clínicas, talleres) suele requerirse tramitación previa. Para actividades sin clasificación especial, los requisitos pueden ser menores, aunque dependen del uso concreto y del Ayuntamiento de Camarma. Lo determinamos durante la planificación del proyecto.' },
    ],
  },

  'comunidades-vecinos': {
    'alcala-de-henares': [
      { q: '¿Con qué antelación debería contactar para presupuestar una obra de comunidad?', a: 'Lo antes posible respecto a la junta donde se quiera presentar. Si la junta está prevista en dos meses, un mes de antelación para la visita y el presupuesto suele ser suficiente. En obras urgentes (fuga activa de cubierta, problema que requiere intervención inmediata), priorizamos la visita técnica para poder presupuestar lo antes posible.' },
      { q: '¿Podéis asistir a la junta de propietarios para explicar el presupuesto?', a: 'Sí. Cuando el alcance de la obra lo justifica o cuando la comunidad lo solicita, asistimos a la junta para explicar el proyecto, responder preguntas técnicas de los propietarios y aclarar cualquier duda sobre el alcance o el plazo. Lo coordinamos con el administrador o el presidente.' },
      { q: '¿Cómo se informa a los vecinos del inicio y avance de la obra?', a: 'Con comunicación previa al inicio de cada fase relevante. El administrador o el presidente recibe información del avance de forma periódica. Para fases de mayor ruido o polvo (demolición, instalaciones), avisamos con antelación para que los vecinos puedan organizarse.' },
      { q: '¿Qué ocurre si la comunidad quiere modificar el alcance una vez aprobado en junta?', a: 'Cualquier cambio que afecte al alcance o al precio requiere autorización previa. Si el cambio implica un coste adicional, lo presupuestamos por separado antes de ejecutarlo. No ampliamos el alcance de la obra sin que el interlocutor designado lo haya validado.' },
    ],
    'torrejon-de-ardoz': [
      { q: '¿Cuánto tiempo de antelación se necesita para planificar una obra de comunidad?', a: 'Para obras que requieren aprobación en junta, conviene disponer del presupuesto con tiempo suficiente para que administración y propietarios puedan revisarlo antes de la convocatoria. En obras urgentes (averías, problemas de cubierta), priorizamos la visita técnica para poder presupuestar lo antes posible.' },
      { q: '¿Qué documentación aporta el presupuesto para que la junta pueda tomar la decisión?', a: 'Descripción del alcance de la obra, partidas desglosadas por capítulo, fotografías del estado previo, planificación con duración estimada y precio total cerrado. El formato es directamente presentable en junta y permite que los propietarios valoren la propuesta con información suficiente.' },
      { q: '¿Cómo se minimizan las molestias a los vecinos durante la obra?', a: 'Adaptando los horarios de trabajo a los de uso de las zonas comunes, protegiendo accesos y zonas de paso, y comunicando con antelación las fases de mayor ruido o suciedad. Los accesos al edificio se mantienen operativos durante toda la obra salvo en fases muy concretas que se comunican con anticipación.' },
      { q: '¿Qué pasa si durante la obra aparecen problemas que no estaban en el presupuesto?', a: 'Lo comunicamos antes de actuar. Si al ejecutar la obra aparece algo no previsto (instalaciones en peor estado del esperado, soportes que necesitan reparación), lo documentamos, lo presupuestamos por separado y esperamos autorización del interlocutor antes de proceder.' },
    ],
    'coslada': [
      { q: '¿Cuánto tiempo por adelantado hay que planificar una obra en zonas comunes?', a: 'Para obras que necesitan aprobación en junta, conviene disponer del presupuesto con antelación suficiente para que todos los propietarios puedan valorarlo antes de la convocatoria. En obras urgentes, priorizamos la visita técnica. Para obras de mayor alcance que requieren tramitación adicional, el plazo puede extenderse en función del proceso.' },
      { q: '¿Podéis hacer una visita previa para elaborar el presupuesto sin ningún compromiso?', a: 'Sí. La visita técnica es gratuita y no implica ningún compromiso de contratación. Evaluamos el estado de las zonas comunes, fotografiamos el estado previo y elaboramos el presupuesto con todos los detalles. La comunidad recibe el presupuesto y decide si quiere presentarlo en junta.' },
      { q: '¿Qué tipo de obras en comunidad suelen aprobarse en junta sin dificultad?', a: 'Las de mantenimiento y conservación claramente necesarias: impermeabilización de cubierta con filtraciones, reparación de fachada deteriorada, renovación de iluminación de portal. Las obras de mejora que no responden a una necesidad urgente suelen requerir más debate en junta. Un presupuesto bien documentado con fotografías del estado previo facilita la aprobación.' },
      { q: '¿Cómo se gestionan los residuos de una obra en una comunidad?', a: 'Los residuos de obra se gestionan con contenedor o transporte a vertedero autorizado, incluido en el precio del presupuesto. No se acumulan en zonas comunes del edificio ni en la vía pública sin autorización. La limpieza de las zonas de paso al final de la jornada forma parte del protocolo de obra.' },
    ],
    'san-fernando-de-henares': [
      { q: '¿Qué debería preparar la comunidad antes de contactar para presupuestar una obra?', a: 'Una descripción del estado de las zonas que necesitan intervención y, si es posible, fotos del problema. Si hay un informe técnico o peritaje previo, aportarlo ayuda a que el presupuesto sea más preciso. Si no hay ninguna documentación, la visita técnica la elaboramos nosotros y sirve de base para el presupuesto.' },
      { q: '¿Con qué antelación conviene iniciar la tramitación si la obra necesita licencia?', a: 'Cuanto antes respecto al inicio previsto de la obra. Las obras en zonas comunes que afectan a fachada, estructura o requieren proyecto técnico pueden necesitar licencia de obra menor, cuyo plazo de tramitación puede ser de varias semanas. Iniciar la tramitación en paralelo con la aprobación en junta evita retrasos en el inicio de la obra.' },
      { q: '¿Cómo se organiza la comunicación con los vecinos durante la obra?', a: 'Con avisos previos al inicio de cada fase y comunicación directa con el interlocutor designado (administrador o presidente). Para fases de mayor impacto (demolición, trabajos en fachada), informamos con antelación para que los vecinos puedan organizarse. Durante la obra, el jefe de obra está disponible para cualquier consulta.' },
      { q: '¿Qué ocurre si la junta aprueba la obra pero luego quiere cambiar el alcance?', a: 'Cualquier cambio de alcance posterior a la aprobación en junta requiere una nueva comunicación y presupuesto adicional. Si el cambio es significativo, puede necesitar una nueva aprobación por parte de la junta. No ejecutamos cambios de alcance sin validación previa del interlocutor designado y, cuando aplica, de la junta.' },
    ],
    'guadalajara': [
      { q: '¿Cuánto tiempo hay entre la aprobación en junta y el inicio posible de la obra?', a: 'Depende del tipo de obra y de si necesita tramitación adicional. El plazo varía según el alcance, la disponibilidad del equipo y, si aplica, el tiempo de tramitación previa. Lo calculamos en el proyecto antes de la junta para que la comunidad tenga una fecha realista de inicio.' },
      { q: '¿Qué documentación necesita la comunidad para comparar varios presupuestos?', a: 'Para que los presupuestos sean comparables, todos deben detallar el mismo alcance de obra, con partidas desglosadas, materiales especificados y gestión de residuos incluida o excluida de forma explícita. Si cada presupuesto contempla un alcance diferente, el precio total no es el único elemento a comparar.' },
      { q: '¿Cómo se gestionan los accesos al edificio durante la obra?', a: 'Mantenemos los accesos operativos durante toda la obra salvo en fases muy concretas. En trabajos de portal o escalera, organizamos el acceso por zonas para que los vecinos puedan entrar y salir sin interrupción. Las fases de mayor restricción de acceso se comunican con antelación.' },
      { q: '¿Qué conviene definir antes de publicar la convocatoria de junta?', a: 'El alcance exacto de la obra y el presupuesto con el que se va a presentar. Publicar una convocatoria con el presupuesto detallado (no solo el importe total) facilita que los propietarios lleguen a la junta con la información necesaria y la votación sea más ágil. Un presupuesto vago genera más preguntas y más debate en junta.' },
    ],
    'azuqueca-de-henares': [
      { q: '¿Qué conviene tener preparado antes de contactar para presupuestar una obra de comunidad?', a: 'Una descripción del estado de las zonas que necesitan intervención y, si es posible, fotos. Si la comunidad ya tiene un informe o peritaje previo, aportarlo. Si no, la visita técnica gratuita genera la documentación de partida. Cuanta más información previa haya, más preciso puede ser el presupuesto desde el primer momento.' },
      { q: '¿Cómo se organiza la comunicación con el administrador y los vecinos durante la obra?', a: 'Con el administrador como interlocutor principal: le enviamos información de avance de forma periódica y consultamos con él cualquier decisión que no estaba prevista. Los vecinos reciben avisos previos a las fases que les afectan directamente (ruido, restricción de acceso). El jefe de obra tiene contacto directo con el administrador.' },
      { q: '¿Qué tipo de obras en zonas comunes no requieren tramitación especial en Azuqueca?', a: 'Las obras de mantenimiento y conservación: pintura de portal y escalera, reparación de elementos deteriorados sin afectar a fachada, renovación de iluminación interior. Las obras que afectan a fachada, estructura o suponen un cambio de aspecto exterior pueden requerir licencia o comunicación previa al Ayuntamiento de Azuqueca.' },
      { q: '¿Podéis dar una primera orientación de presupuesto sin visita previa?', a: 'Para obras de alcance conocido (pintura de portal, impermeabilización de cubierta de superficie determinada), podemos orientar una horquilla sin visita. Para obras donde el estado de las zonas afectadas es determinante para el coste (reparaciones, fachadas deterioradas), la visita técnica es necesaria para que el presupuesto sea preciso.' },
    ],
    'meco': [
      { q: '¿Qué tipo de obras son habituales en comunidades con zonas comunes exteriores?', a: 'Las actuaciones más comunes en comunidades con elementos exteriores son mantenimiento de viales y accesos, reparación o sustitución de cierres perimetrales, y actuaciones en zonas verdes o piscinas cuando las hay. Cada tipo tiene su propio proceso de aprobación en junta y, según el alcance, puede requerir tramitación adicional.' },
      { q: '¿Cómo se organiza una obra en una urbanización con accesos compartidos?', a: 'Planificando el acceso de materiales y escombros de forma que no bloquee el paso de vehículos o peatones de la urbanización. En urbanizaciones con entrada única, coordinamos los horarios de entrada de vehículos pesados con el presidente de la comunidad y comunicamos a los vecinos los días de mayor movimiento.' },
      { q: '¿Podéis hacer la visita técnica antes de que la comunidad tome ninguna decisión?', a: 'Sí. La visita es gratuita y no implica ningún compromiso. Muchas comunidades piden presupuesto para valorar el alcance real del problema antes de decidir si lo llevan a junta o lo dejan para más adelante. Con el presupuesto en mano, la comunidad tiene información concreta para tomar la decisión.' },
      { q: '¿Qué comunica el equipo de obra a los vecinos durante la ejecución?', a: 'El avance de la obra en las fases relevantes, los avisos previos a fases de mayor impacto (ruido, suciedad, restricción de acceso) y cualquier situación no prevista que aparezca durante la ejecución. La comunicación va siempre a través del interlocutor designado (administrador o presidente), que la traslada a los vecinos.' },
    ],
    'camarma-de-esteruelas': [
      { q: '¿Qué información necesita la comunidad para poder comparar varios presupuestos?', a: 'Que todos los presupuestos detallan el mismo alcance. Para comparar bien, pide que cada presupuesto especifique qué materiales se usan, si la gestión de residuos está incluida, qué garantía se da sobre el trabajo y cuál es el plazo de ejecución. El importe total solo es comparable si el alcance es idéntico.' },
      { q: '¿Con cuánta antelación hay que planificar una obra en la comunidad?', a: 'Para obras que necesitan aprobación en junta, conviene disponer del presupuesto con tiempo suficiente para que administración y propietarios puedan revisarlo antes de la convocatoria. En obras urgentes (filtraciones, elementos en riesgo), priorizamos la visita técnica. Para obras de mayor alcance que necesitan tramitación adicional, el calendario depende del proceso aplicable.' },
      { q: '¿Podéis asistir a la junta de propietarios antes de que se tome la decisión?', a: 'Sí. Cuando la comunidad lo considera útil, podemos presentar el proyecto directamente en la junta para responder preguntas técnicas y resolver dudas sobre el alcance o el plazo. Lo coordinamos con el administrador o el presidente de la comunidad.' },
      { q: '¿Cómo se comunica el avance de la obra a los vecinos?', a: 'Con avisos previos al inicio de cada fase relevante y comunicación directa con el interlocutor designado por la comunidad. Si la comunidad tiene pocos propietarios, la comunicación puede ser más directa e informal. El jefe de obra está disponible para cualquier consulta durante toda la ejecución.' },
    ],
  },
};


// ─── Contenido único por combinación servicio × localidad ─────────────────
// intro: párrafo del hero, específico para cada combinación.
// Se usa en [barrio].astro para reemplazar la concatenación genérica de localAngle.
export const SERVICE_ZONE_CONTENT: Record<string, Record<string, { intro: string; body: { type: string; text: string; link?: { text: string; serviceSlug: string } }[] }>> = {
  'reformas-integrales': {
    'alcala-de-henares': {
      intro: 'El primer paso de una reforma integral en Alcalá no es elegir materiales: es saber qué estado tienen las instalaciones. Un cuadro eléctrico de antes del 2000 o tuberías que no se han tocado en décadas pueden condicionar el alcance real y el precio final. Lo evaluamos en la visita técnica gratuita antes de comprometer ningún número.',
      body: [
        { type: 'h3', text: 'Qué evaluar antes de cerrar el presupuesto en Alcalá' },
        { type: 'p', text: 'Los pisos anteriores a los 90 en Alcalá suelen tener dos variables que cambian el presupuesto si no se detectan en la visita: cuadro eléctrico insuficiente para el uso actual y tuberías de hierro galvanizado con décadas de uso. Si no se evalúan antes de firmar, el precio cerrado puede quedar obsoleto a las dos semanas de obra. Por eso incluimos la revisión completa de instalaciones en la visita gratuita antes de comprometer ningún número.' },
        { type: 'h3', text: 'Cómo se ordena una reforma integral: secuencia y coordinación' },
        { type: 'p', text: 'Una reforma integral tiene una secuencia que no puede alterarse sin encarecer la obra: primero derribo y vaciado; después instalaciones (electricidad y fontanería, que van empotradas); luego albañilería; después solados y alicatados; por último carpintería interior y pintura. Alterar ese orden implica volver a abrir lo que ya estaba terminado. Con equipo propio coordinamos cada fase sin depender de que un gremio externo aparezca en el momento correcto.' },
        { type: 'p', text: 'Si al revisar las instalaciones resultan aprovechables y la necesidad se concentra en acabados y estancias concretas, el alcance puede resolverse con una reforma de piso en lugar de una integral. La visita técnica determina en qué escenario estás antes de comprometer ningún número.', link: { text: 'reforma de piso', serviceSlug: 'reforma-pisos' } },
      ],
    },
    'torrejon-de-ardoz': {
      intro: 'Antes de empezar una reforma integral en Torrejón, la pregunta más importante no es qué muebles elegir: es si tiene más sentido hacer todo a la vez o por fases. Cuando las instalaciones necesitan renovación, hacer dos obras por separado implica abrir el piso dos veces, repetir el desescombro y coordinar gremios por duplicado. La visita determina cuál es tu caso.',
      body: [
        { type: 'h3', text: 'Cómo se coordina una reforma integral en Torrejón: secuencia y gremios' },
        { type: 'p', text: 'Una reforma integral tiene una secuencia que no puede alterarse: primero derribo y vaciado, después instalaciones empotradas (electricidad y fontanería), luego albañilería, después solados y alicatados, por último carpintería y pintura. Trabajar con equipo propio en Torrejón significa que cada gremio aparece en el momento correcto sin esperas que alargan el plazo. La fecha de entrega se fija en el contrato y se cumple.' },
        { type: 'h3', text: 'Qué debe estar cerrado antes de firmar el presupuesto' },
        { type: 'p', text: 'La distribución final, el diseño de baño y cocina, y la selección de suelos son los tres elementos que deben estar definidos antes de empezar la obra. Si se modifican durante la ejecución, el coste se desvía y el plazo se alarga. En la visita técnica evaluamos el estado de las instalaciones, identificamos qué puede aprovecharse y qué necesita renovación —incluyendo si el alcance se concentra en acabados y distribución y bastaría con una reforma de piso—, y cerramos el precio con todos esos datos sobre la mesa.', link: { text: 'reforma de piso', serviceSlug: 'reforma-pisos' } },
      ],
    },
    'coslada': {
      intro: 'Una reforma integral en Coslada bien planificada empieza por saber qué hay detrás de los revestimientos antes de firmar el presupuesto. En plantas bajas de algunos bloques, las humedades pueden condicionar el alcance de la obra si no se detectan en la visita técnica. El precio cerrado es real cuando incluye lo que el estado de la vivienda requiere.',
      body: [
        { type: 'h3', text: 'Humedades en Coslada: por qué hay que detectarlas antes de cerrar el precio' },
        { type: 'p', text: 'Si aparecen indicios de humedad en plantas bajas, conviene identificar el origen antes de cerrar el presupuesto: si no se contempla en el contrato y aparece a mitad de obra, el coste final se desvía. En la visita técnica evaluamos el estado de solera y muros y lo incluimos en el presupuesto cuando el estado lo requiere.' },
        { type: 'h3', text: 'Instalaciones: qué renovar y qué puede esperar' },
        { type: 'p', text: 'No todas las instalaciones de una vivienda están en el mismo estado. El cuadro eléctrico y la fontanería deben evaluarse según su estado real, no darse por renovables de forma automática. En la visita determinamos qué necesita renovación real y qué puede quedarse: cuando las instalaciones pueden mantenerse y la necesidad se concentra en acabados, el alcance puede corresponderse con el de una reforma de piso.', link: { text: 'reforma de piso', serviceSlug: 'reforma-pisos' } },
      ],
    },
    'san-fernando-de-henares': {
      intro: 'El alcance de una reforma integral en San Fernando de Henares depende mucho de cuándo se construyó la vivienda. Los pisos del casco antiguo y los de las promociones más recientes pueden tener alcances muy distintos según el estado de las instalaciones: desde la renovación completa de cuadro y fontanería hasta la reforma centrada en distribución y acabados. La visita técnica lo aclara antes de comprometer ningún número.',
      body: [
        { type: 'h3', text: 'Vivienda antigua o reciente en San Fernando: el alcance cambia' },
        { type: 'p', text: 'En viviendas del casco antiguo de San Fernando donde las instalaciones no se han revisado en tiempo, el cuadro eléctrico y la fontanería pueden condicionar de forma importante el alcance real de la reforma. En las promociones más recientes de Parque Roma y Parque Henares, las instalaciones pueden estar en mejor estado y el presupuesto puede centrarse en distribución y acabados, con el alcance propio de una reforma de piso. El estado de la instalación es lo que determina el alcance; la visita técnica lo aclara antes de comprometer cualquier número.', link: { text: 'reforma de piso', serviceSlug: 'reforma-pisos' } },
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
        { type: 'p', text: 'Si al revisar las instalaciones resultan aprovechables y la necesidad se concentra en acabados y estancias concretas, el alcance puede resolverse con una reforma de piso en lugar de una integral. La visita técnica determina en qué escenario estás antes de comprometer ningún número.', link: { text: 'reforma de piso', serviceSlug: 'reforma-pisos' } },
      ],
    },
    'azuqueca-de-henares': {
      intro: 'Una reforma integral en Azuqueca de Henares con instalaciones en buen estado tiene más margen para invertir en distribución y acabados que en obra pesada. Si el cuadro eléctrico y la fontanería no necesitan renovación completa, el presupuesto puede centrarse en lo que más transforma visualmente la vivienda. Lo verificamos en la visita técnica antes de cerrar el precio.',
      body: [
        { type: 'h3', text: 'Estado de instalaciones en Azuqueca: qué condiciona el alcance de la reforma' },
        { type: 'p', text: 'En muchos pisos de Azuqueca el cuadro eléctrico y la fontanería pueden aprovecharse total o parcialmente. Eso reduce el alcance de la obra y libera presupuesto para dedicarlo a distribución, calidad de materiales o zonas con mayor impacto visual. Lo verificamos en la visita técnica antes de comprometer ningún número; en algunos casos, el alcance encaja con el de una reforma de piso en lugar de una integral.', link: { text: 'reforma de piso', serviceSlug: 'reforma-pisos' } },
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
        { type: 'p', text: 'Si al revisar las instalaciones resultan aprovechables y la necesidad se concentra en acabados y estancias concretas, el alcance puede resolverse con una reforma de piso en lugar de una integral. La visita técnica determina en qué escenario estás antes de comprometer ningún número.', link: { text: 'reforma de piso', serviceSlug: 'reforma-pisos' } },
      ],
    },
    'camarma-de-esteruelas': {
      intro: 'Una reforma integral en Camarma de Esteruelas empieza por definir prioridades: interior, cubierta, cerramientos y exteriores no tienen por qué abordarse todos en la misma fase. En viviendas unifamiliares, el alcance puede ser muy diferente según el estado de cada elemento. En la visita técnica gratuita repasamos qué es urgente y qué puede esperar.',
      body: [
        { type: 'h3', text: 'Reformar la vivienda como conjunto: la diferencia en Camarma' },
        { type: 'p', text: 'Si vas a plantear una reforma integral en una vivienda unifamiliar en Camarma, el alcance puede ir más allá del interior: cubierta, cerramientos, garaje o zonas exteriores si las hay. Definir prioridades antes de presupuestar es la clave para no abrir más frentes de los que el presupuesto puede cubrir en una sola obra. Lo repasamos en la visita técnica gratuita.' },
        { type: 'h3', text: 'Secuencia de obra en vivienda unifamiliar: cómo ordenar los trabajos' },
        { type: 'p', text: 'En una vivienda de dos plantas, el orden de los trabajos condiciona el plazo total. Lo habitual: instalaciones en ambas plantas primero (electricidad y fontanería, que van empotradas), después albañilería y actuación en cubierta si aplica, y finalmente acabados planta a planta. Con esa secuencia, la vivienda recupera habitabilidad lo antes posible sin que una fase bloquee la siguiente.' },
        { type: 'p', text: 'Si las instalaciones de la vivienda aguantan y la intervención se concentra en acabados y distribución, el alcance puede corresponderse con el de una reforma de piso más que con el de una integral. La visita técnica determina cuál de los dos escenarios aplica antes de cerrar el precio.', link: { text: 'reforma de piso', serviceSlug: 'reforma-pisos' } },
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
        { type: 'p', text: 'Si además del baño la vivienda va a necesitar intervención en otras estancias o en las instalaciones de fondo, conviene valorar el alcance completo antes de dividir los trabajos. En ese escenario puede tener más sentido plantear una reforma integral que coordinar varias obras por separado.', link: { text: 'reforma integral', serviceSlug: 'reformas-integrales' } },
      ],
    },
    'torrejon-de-ardoz': {
      intro: 'Si en Torrejón solo tienes un baño en casa, el plazo de la reforma importa tanto como el resultado. Una reforma completa dura entre 1 y 3 semanas: los primeros días de derribo son los más incómodos, y el espacio se va recuperando conforme avanza la obra. Planificamos la secuencia para minimizar el tiempo sin servicio antes de empezar.',
      body: [
        { type: 'h3', text: 'Cuánto tiempo sin baño: cómo planificar si solo tienes uno' },
        { type: 'p', text: 'Si la vivienda tiene un único baño, el plazo de obra es tan importante como el resultado. Una reforma completa dura entre 1 y 3 semanas según el alcance. Los primeros días, con el derribo del alicatado, son los más incómodos. A partir de ahí el espacio se va recuperando. Si el plazo es crítico, planificamos la secuencia de trabajo para acortarlo al máximo sin comprometer la impermeabilización.' },
        { type: 'h3', text: 'Alicatado de gran formato: por qué cambia el resultado visual' },
        { type: 'p', text: 'El formato del alicatado es la decisión que más cambia la percepción visual del baño renovado. Las piezas grandes (60×60 cm o más) reducen la cantidad de juntas y dan sensación de amplitud, especialmente en baños pequeños. Permiten también trabajar sin zócalo y con menos cortes en esquinas, lo que mejora el acabado final. En la visita de diseño te mostramos muestras reales con distintos formatos.' },
        { type: 'p', text: 'Si el baño no es el único espacio que necesita intervención en la vivienda, puede convenir valorar el conjunto antes de cerrar el alcance. Cuando la intervención se extiende a otras estancias o instalaciones, una reforma integral puede resultar más eficiente que varias obras por separado.', link: { text: 'reforma integral', serviceSlug: 'reformas-integrales' } },
      ],
    },
    'coslada': {
      intro: 'Al reformar un baño en Coslada, los primeros metros cuadrados a resolver son los que no se ven: la impermeabilización del suelo y la base de los muros. Sin ella, un alicatado nuevo puede tener humedades en meses. Va incluida en el presupuesto desde la primera partida, no como extra que aparece después de firmar.',
      body: [
        { type: 'h3', text: 'Humedades antes de empezar: lo que hay que revisar en Coslada' },
        { type: 'p', text: 'En muchos bloques de Coslada, las humedades en baños no son solo superficiales. Antes de decidir el alcance, conviene revisar si hay filtraciones desde el baño superior o capilaridad desde la solera, especialmente en plantas bajas. Si se detectan y no se incluyen en el presupuesto, aparecen después de poner el alicatado nuevo. En la visita técnica evaluamos el estado real antes de cerrar el precio.' },
        { type: 'h3', text: 'Baños pequeños: cómo ganar espacio sin cambiar la distribución' },
        { type: 'p', text: 'Si el baño es pequeño y el objetivo es ganar espacio percibido sin cambiar la distribución, hay tres decisiones que cambian el resultado visual: plato de ducha en lugar de bañera, mueble de lavabo con almacenaje integrado y revestimiento de gran formato que reduce la cantidad de juntas. El resultado es radicalmente distinto al estado original sin necesidad de obra pesada.' },
        { type: 'p', text: 'Si además del baño la vivienda va a necesitar intervención en otras estancias o en las instalaciones de fondo, conviene valorar el alcance completo antes de dividir los trabajos. En ese escenario puede tener más sentido plantear una reforma integral que coordinar varias obras por separado.', link: { text: 'reforma integral', serviceSlug: 'reformas-integrales' } },
      ],
    },
    'san-fernando-de-henares': {
      intro: 'La reforma de baño en San Fernando de Henares tiene un alcance muy distinto según la antigüedad de la vivienda. Un piso del casco antiguo puede necesitar fontanería nueva además de los acabados; una vivienda más reciente puede limitarse a alicatado, sanitarios y mueble. La diferencia en presupuesto puede ser relevante. La visita técnica lo aclara antes de comprometer nada.',
      body: [
        { type: 'h3', text: 'Alcance de la reforma según la antigüedad de la vivienda' },
        { type: 'p', text: 'En un piso del casco antiguo de San Fernando de los años 70 u 80, la fontanería del baño suele necesitar renovación además de los acabados. En una vivienda de Parque Roma o Parque Henares de los 90, las instalaciones pueden estar en mejor estado y la reforma puede limitarse a alicatado, sanitarios y mueble. La diferencia en presupuesto puede ser relevante. La visita técnica lo aclara antes de comprometer nada.' },
        { type: 'h3', text: 'Impermeabilización: por qué es la partida que no puede saltarse' },
        { type: 'p', text: 'Una impermeabilización correctamente resuelta en las zonas expuestas al agua reduce el riesgo de filtraciones hacia soportes y estancias colindantes. Antes de colocar revestimientos conviene comprobar cómo se va a proteger cada zona según la distribución del baño. Va incluida desde la primera partida del presupuesto, no como extra que aparece después de firmar.' },
        { type: 'p', text: 'Si el baño no es el único espacio que necesita intervención en la vivienda, puede convenir valorar el conjunto antes de cerrar el alcance. Cuando la intervención se extiende a otras estancias o instalaciones, una reforma integral puede resultar más eficiente que varias obras por separado.', link: { text: 'reforma integral', serviceSlug: 'reformas-integrales' } },
      ],
    },
    'guadalajara': {
      intro: 'Reformar el baño en Guadalajara con instalaciones antiguas que no se han tocado en años plantea una decisión concreta: renovarlas ahora, con el baño ya abierto, o asumir el riesgo de tener que abrir otra vez en pocos años si fallan. Hacerlo con el baño en obras tiene un coste marginal comparado con volver a intervenir. En la visita evaluamos el estado real.',
      body: [
        { type: 'h3', text: 'Fontanería en los baños de Guadalajara: cuándo es imprescindible renovarla' },
        { type: 'p', text: 'En viviendas de Guadalajara que llevan años sin una reforma de baño, es frecuente encontrar fontanería que conviene revisar. Al reformar el baño, renovar la fontanería con el espacio ya abierto tiene un coste pequeño comparado con tener que abrir otra vez el baño reformado si las tuberías fallan dos años después. En la visita evaluamos el estado real y te damos una recomendación concreta.' },
        { type: 'h3', text: 'Accesibilidad en la reforma de baño: opciones que merece la pena considerar' },
        { type: 'p', text: 'Si la vivienda va a usarla durante muchos años la misma persona, o si hay mayores en el hogar, adaptar el baño para mejorar la accesibilidad durante la reforma no supone un coste mayor significativo: plato de ducha al nivel del suelo, barra de apoyo, espacio libre lateral al inodoro. Hacerlo después de haber terminado la reforma implica volver a abrir. En la visita podemos mostrarte las opciones que encajan con tu situación.' },
        { type: 'p', text: 'Cuando el baño es el inicio de una intervención más amplia, tiene sentido valorar el conjunto antes de arrancar. Si hay otras estancias o instalaciones que renovar, comparar con el alcance de una reforma integral puede dar una perspectiva diferente antes de comprometer presupuesto.', link: { text: 'reforma integral', serviceSlug: 'reformas-integrales' } },
      ],
    },
    'azuqueca-de-henares': {
      intro: 'Si en Azuqueca la fontanería del baño está en buen estado, la reforma puede centrarse en lo que más transforma visualmente: alicatado nuevo, sanitarios modernos, mueble con almacenaje y mampara. Es una reforma más rápida y con menor coste que si hay que renovar las instalaciones de fondo. La visita técnica determina qué alcance corresponde antes de cerrar el precio.',
      body: [
        { type: 'h3', text: 'Reforma de modernización: cuando las instalaciones están bien y el problema es estético' },
        { type: 'p', text: 'Si las instalaciones del baño están en buen estado, la reforma puede concentrarse en cambiar el alicatado, los sanitarios, el mueble y la mampara sin tocar la fontanería de fondo. El resultado visual es equivalente al de una reforma completa, con un plazo más corto y un presupuesto más ajustado.' },
        { type: 'h3', text: 'Almacenaje en el baño: soluciones que marcan la diferencia' },
        { type: 'p', text: 'La falta de almacenaje es frecuente en baños pequeños, independientemente del material con el que estén revestidos. Un mueble con cajones y puertas, un botiquín integrado en el espejo y nichos en el alicatado de la ducha pueden resolver el problema sin ampliar el espacio. En la visita de diseño te mostramos cómo funciona cada solución en baños de dimensiones similares al tuyo.' },
        { type: 'p', text: 'Cuando el baño es el inicio de una intervención más amplia, tiene sentido valorar el conjunto antes de arrancar. Si hay otras estancias o instalaciones que renovar, comparar con el alcance de una reforma integral puede dar una perspectiva diferente antes de comprometer presupuesto.', link: { text: 'reforma integral', serviceSlug: 'reformas-integrales' } },
      ],
    },
    'meco': {
      intro: 'En las viviendas de Meco con más de un baño, la primera conversación no es qué materiales elegir: es qué alcance tiene sentido en cada uno. El baño principal puede justificar mayor inversión en diseño y materiales; los secundarios pueden renovarse de manera más ajustada. Lo planificamos en la visita antes de presupuestar.',
      body: [
        { type: 'h3', text: 'Baños más grandes en viviendas de Meco: más opciones de diseño' },
        { type: 'p', text: 'Si el baño principal de la vivienda tiene más espacio que en un piso de bloque, se abren opciones que no son posibles en superficies reducidas: ducha de obra a medida con mampara fija de cristal, doble lavabo con encimera corrida, o separación de la zona de ducha y la de aseo. Si hay más de un baño en la vivienda, el alcance de cada uno se decide en la visita.' },
        { type: 'h3', text: 'Duchas de obra a medida: cuándo tiene sentido' },
        { type: 'p', text: 'Una ducha de obra sin plato prefabricado permite personalizar la forma, el tamaño y el revestimiento sin las limitaciones de un plato estándar. En un baño de más de 6 metros cuadrados puede diseñarse una ducha de 100×100 cm o más, con microcemento, resina de cuarzo o porcelánico de gran formato. El coste es algo mayor que con plato prefabricado, pero el resultado visual y funcional es completamente diferente.' },
        { type: 'p', text: 'Si la vivienda tiene varios espacios que intervenir además del baño, abordar la obra de forma global suele ser más eficiente que planificarla en fases. La visita técnica gratuita permite valorar el escenario de reforma integral antes de decidir cómo organizar los trabajos.', link: { text: 'reforma integral', serviceSlug: 'reformas-integrales' } },
      ],
    },
    'camarma-de-esteruelas': {
      intro: 'Si el baño de tu vivienda en Camarma lleva tiempo sin tocarse, la reforma completa suele ser más eficiente que actuar por partes en diferentes momentos. Con el espacio ya abierto, renovar fontanería, impermeabilización y acabados de una sola vez evita tener que volver a intervenir. Planificamos el alcance completo en la visita gratuita.',
      body: [
        { type: 'h3', text: 'Diseñar el baño desde cero en viviendas de Camarma' },
        { type: 'p', text: 'En las viviendas unifamiliares de Camarma, los baños principales tienen a menudo dimensiones que permiten repensar la distribución completa: colocar la ducha donde estaba la bañera, añadir un segundo lavabo si el espacio lo permite, o separar la zona húmeda de la seca. Cuando el baño lleva más de 15 años sin tocarse, la reforma completa suele ser más eficiente que hacer actuaciones parciales en diferentes momentos.' },
        { type: 'h3', text: 'Varios baños en la misma vivienda: cómo priorizarlos' },
        { type: 'p', text: 'Si la vivienda tiene dos o tres baños, no todos necesitan el mismo alcance. El baño principal suele justificar la mayor inversión en diseño y materiales. Los baños secundarios pueden renovarse con un alcance más ajustado: cambio de sanitarios, mueble y pintura sin necesariamente tocar el alicatado si está en buen estado. Te orientamos sobre qué tiene sentido en cada caso.' },
        { type: 'p', text: 'Si la vivienda tiene varios espacios que intervenir además del baño, abordar la obra de forma global suele ser más eficiente que planificarla en fases. La visita técnica gratuita permite valorar el escenario de reforma integral antes de decidir cómo organizar los trabajos.', link: { text: 'reforma integral', serviceSlug: 'reformas-integrales' } },
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
        { type: 'p', text: 'Si la intervención prevista va más allá de la cocina —otras estancias que renovar o instalaciones que intervenir a la vez—, puede convenir comparar el alcance completo antes de dividir los trabajos. En ese caso, una reforma integral puede ser más eficiente que coordinar varias obras por separado.', link: { text: 'reforma integral', serviceSlug: 'reformas-integrales' } },
      ],
    },
    'torrejon-de-ardoz': {
      intro: 'Si al usar varios electrodomésticos a la vez en Torrejón el diferencial salta o se corta la luz, la instalación eléctrica de la cocina no cumple la normativa actual. En una reforma de cocina, la electricidad nueva con circuitos dedicados no es opcional: es la base que hace que todo lo demás funcione. El presupuesto la incluye desde el primer día.',
      body: [
        { type: 'h3', text: 'Instalación eléctrica en cocinas de Torrejón: qué hay que revisar antes de presupuestar' },
        { type: 'p', text: 'Si tienes cortocircuitos o el diferencial salta cuando usas el horno y la vitrocerámica a la vez, la instalación eléctrica de la cocina no cumple la normativa actual. Es lo que convierte una reforma de cocina que no incluye electricidad en insuficiente desde el primer día de uso. Una reforma completa resuelve el fondo del problema, no solo la estética.' },
        { type: 'h3', text: 'Cuánto tiempo sin cocina: cómo planificar la obra' },
        { type: 'p', text: 'Una reforma completa de cocina dura entre 2 y 4 semanas. La primera parte (derribo, electricidad, fontanería, alicatado de zona de trabajo) requiere que la cocina esté fuera de servicio. La segunda parte, con la instalación de muebles y electrodomésticos, permite ir recuperando funcionalidad. Si tienes todo definido antes de empezar (distribución, muebles, encimera y electrodomésticos pedidos), no hay pausas por espera de materiales.' },
        { type: 'p', text: 'Cuando la cocina no es el único espacio que necesita intervención, tiene sentido valorar el conjunto antes de arrancar. Si hay instalaciones o estancias adicionales que reformar, comparar con el alcance de una reforma integral en la misma visita puede dar una perspectiva diferente.', link: { text: 'reforma integral', serviceSlug: 'reformas-integrales' } },
      ],
    },
    'coslada': {
      intro: 'Al reformar una cocina en Coslada conviene comprobar si la instalación eléctrica puede asumir la distribución y los electrodomésticos previstos. Si necesita renovación, hacerlo dentro de la misma obra evita intervenir de nuevo después. La reforma completa resuelve el fondo del problema, no solo la estética.',
      body: [
        { type: 'h3', text: 'Electricidad en cocinas de Coslada: la primera partida que hay que resolver' },
        { type: 'p', text: 'Si la instalación eléctrica de la cocina no tiene circuitos dedicados para electrodomésticos de alta potencia, se producen sobrecargas cuando se usan simultáneamente el horno, la vitrocerámica y el lavavajillas. En una reforma de cocina, la instalación eléctrica nueva no es un extra: es la base que hace que todos los demás electrodomésticos funcionen correctamente desde el primer día.' },
        { type: 'h3', text: 'Opciones de distribución en cocinas pequeñas' },
        { type: 'p', text: 'En cocinas con distribución en línea o en L, reorganizar la posición del fregadero, la vitrocerámica y el área de trabajo puede mejorar el flujo sin necesidad de cambiar la superficie disponible. Si el presupuesto no permite abrir la cocina al salón, una redistribución inteligente dentro del mismo espacio puede cambiar significativamente cómo funciona.' },
        { type: 'p', text: 'Si la intervención prevista va más allá de la cocina —otras estancias que renovar o instalaciones que intervenir a la vez—, puede convenir comparar el alcance completo antes de dividir los trabajos. En ese caso, una reforma integral puede ser más eficiente que coordinar varias obras por separado.', link: { text: 'reforma integral', serviceSlug: 'reformas-integrales' } },
      ],
    },
    'san-fernando-de-henares': {
      intro: 'El presupuesto de una reforma de cocina en San Fernando de Henares depende de si la vivienda necesita instalación eléctrica nueva o si la que tiene es suficiente para el uso actual. En pisos del casco suele haber que renovarla; en viviendas más recientes puede aprovecharse. La visita técnica aclara qué alcance corresponde antes de comprometer ningún número.',
      body: [
        { type: 'h3', text: 'Instalaciones de cocina según la época de construcción en San Fernando' },
        { type: 'p', text: 'En viviendas del casco antiguo de San Fernando con instalaciones que no se han actualizado, la electricidad de la cocina puede no ser suficiente para el uso actual. En las viviendas de Parque Roma o Parque Henares, construidas en los 90, la instalación puede estar mejor dimensionada y la reforma puede concentrarse en muebles, encimera y acabados. La diferencia en presupuesto entre ambos casos es relevante y la visita técnica la aclara antes de comprometer ningún número.' },
        { type: 'h3', text: 'Cocina americana o con isla: cuándo tiene sentido' },
        { type: 'p', text: 'Abrir la cocina al salón es especialmente efectivo en pisos de San Fernando donde el tabique de la cocina crea un cuello de botella entre la zona de día. Si el tabique es de distribución (no de carga), es una obra menor que no necesita arquitecto y que transforma la percepción de amplitud de toda la vivienda. Lo presupuestamos como partida independiente para que puedas valorar si merece la pena en tu caso.' },
        { type: 'p', text: 'Cuando la cocina no es el único espacio que necesita intervención, tiene sentido valorar el conjunto antes de arrancar. Si hay instalaciones o estancias adicionales que reformar, comparar con el alcance de una reforma integral en la misma visita puede dar una perspectiva diferente.', link: { text: 'reforma integral', serviceSlug: 'reformas-integrales' } },
      ],
    },
    'guadalajara': {
      intro: 'Si quieres abrir la cocina al salón en Guadalajara, primero hay que comprobar qué función tiene el tabique y cómo afectará el cambio a instalaciones, extracción e iluminación. Solo después tiene sentido valorar distribución y presupuesto. El presupuesto incluye la apertura como partida independiente para que puedas valorarla antes de decidir.',
      body: [
        { type: 'h3', text: 'Abrir la cocina al salón en pisos de Guadalajara: proceso y resultado' },
        { type: 'p', text: 'Abrir la cocina al salón puede tener un impacto visual importante en pisos con distribución cerrada. Antes de decidir, conviene comprobar la función del tabique y cómo afectaría el cambio a la electricidad, la extracción y la iluminación. Solo con esa información cerrada tiene sentido valorar distribución y presupuesto.' },
        { type: 'h3', text: 'Qué decidir antes de empezar la reforma de cocina' },
        { type: 'p', text: 'Cuanto más definido esté todo antes de arrancar la obra, mejor se respeta el plazo. Lo mínimo necesario antes de empezar: distribución de muebles cerrada, encimera elegida y electrodomésticos seleccionados y pedidos. Si los materiales no están disponibles cuando termina la obra civil, la espera puede alargar el plazo entre 2 y 4 semanas adicionales. Te guiamos en la selección de todo esto durante la visita de diseño previa a la obra.' },
        { type: 'p', text: 'Si la cocina es el punto de partida de una intervención más amplia en la vivienda, conviene valorar el alcance completo antes de dividir los trabajos. En ese escenario, una reforma integral puede resultar más eficiente que abordar la obra en fases.', link: { text: 'reforma integral', serviceSlug: 'reformas-integrales' } },
      ],
    },
    'azuqueca-de-henares': {
      intro: 'Si en Azuqueca la instalación eléctrica de la cocina está en buen estado, la reforma puede centrarse en lo que más cambia visualmente: muebles nuevos, encimera, electrodomésticos y alicatado de zona de trabajo. El resultado visual es equivalente a una reforma completa, con un plazo de 2 a 3 semanas y un presupuesto más ajustado.',
      body: [
        { type: 'h3', text: 'Reforma de actualización en cocinas de Azuqueca: qué se puede cambiar sin obra pesada' },
        { type: 'p', text: 'Si la instalación eléctrica de la cocina está en buen estado, la reforma puede centrarse en lo que más cambia visualmente: muebles nuevos, encimera, electrodomésticos y alicatado de zona de trabajo, sin tocar los circuitos de fondo. El resultado visual es el mismo que una reforma integral, con un plazo de 2 a 3 semanas y un presupuesto más ajustado.' },
        { type: 'h3', text: 'Encimeras y electrodomésticos: las decisiones con más impacto en el resultado' },
        { type: 'p', text: 'La encimera y los electrodomésticos son las dos partidas que más condicionan el presupuesto y el aspecto final de una cocina nueva. La encimera de silestone o porcelánico de gran formato es más duradera y más fácil de mantener que el granito oscuro o los acabados de cocinas con décadas de uso. Los electrodomésticos integrados mejoran la estética y permiten aprovechar mejor el espacio de almacenaje. En la visita de diseño repasamos todas las opciones con sus precios reales.' },
        { type: 'p', text: 'Si la cocina es el punto de partida de una intervención más amplia en la vivienda, conviene valorar el alcance completo antes de dividir los trabajos. En ese escenario, una reforma integral puede resultar más eficiente que abordar la obra en fases.', link: { text: 'reforma integral', serviceSlug: 'reformas-integrales' } },
      ],
    },
    'meco': {
      intro: 'Si vas a reformar la cocina de un adosado en Meco y dispones de más superficie, merece la pena estudiar la distribución antes de elegir materiales: una isla, una península o una zona adicional de almacenaje necesitan resolverse desde el plano. Con espacio disponible, la primera decisión es la distribución, no los materiales.',
      body: [
        { type: 'h3', text: 'Cocinas con más espacio en adosados de Meco: opciones que no caben en los pisos' },
        { type: 'p', text: 'Si la cocina tiene más superficie de la habitual en los pisos de bloque, se abren opciones que no son posibles en espacios reducidos: isla central con función de encimera y barra, zona de despensa independiente, o cocina americana con acceso directo desde el salón. Con ese espacio disponible, la primera decisión no es qué muebles elegir sino cómo se quiere vivir la cocina: el diseño viene después.' },
        { type: 'h3', text: 'Cocina abierta en adosados: licencia y proceso' },
        { type: 'p', text: 'Abrir la cocina al comedor o al salón en un adosado de Meco puede implicar eliminar un tabique de distribución (obra menor, sin arquitecto) o modificar un hueco existente. En algunos casos la apertura necesita licencia de obra menor en el Ayuntamiento de Meco. Evaluamos la estructura antes de presupuestar y tramitamos la licencia si es necesaria, sin que suponga un trámite adicional para ti.' },
        { type: 'p', text: 'Cuando el espacio disponible y el alcance previsto superan lo que cubre una reforma de cocina, puede ser más eficiente plantear una reforma integral en lugar de varias obras por separado. La visita técnica gratuita permite comparar ambos escenarios antes de comprometer presupuesto.', link: { text: 'reforma integral', serviceSlug: 'reformas-integrales' } },
      ],
    },
    'camarma-de-esteruelas': {
      intro: 'Si la cocina de tu vivienda en Camarma lleva más de una década sin renovar, una reforma de cocina permite repensar el espacio con criterio: más almacenaje, mejor flujo de trabajo, y si tiene sentido integrarla mejor con el comedor. Con espacio disponible en viviendas unifamiliares, las opciones son significativamente mayores que en pisos de bloque.',
      body: [
        { type: 'h3', text: 'Cocinas amplias en viviendas de Camarma: cómo aprovechar el espacio' },
        { type: 'p', text: 'Si la cocina de la vivienda tiene espacio suficiente para replantear la distribución, una reforma puede ir más allá del cambio de muebles: separar la zona de trabajo de la de almacenaje, añadir una isla, o integrar mejor la cocina con el comedor. Cuando la cocina lleva tiempo sin actualizarse, replantear la distribución desde el principio suele dar mejores resultados que adaptar el diseño a los muebles existentes.' },
        { type: 'h3', text: 'Qué conviene decidir antes de la visita de diseño' },
        { type: 'p', text: 'Antes de la primera visita, es útil tener claro cuántas personas usan la cocina y cómo: si la persona que cocina necesita espacio para trabajar con todo desplegado, si hay interés en cocina abierta al comedor, o si el almacenaje es la prioridad. Con esa información, la visita de diseño se convierte en una sesión productiva donde llegamos a opciones concretas con precio real, en lugar de una visita general.' },
        { type: 'p', text: 'Si la vivienda requiere intervención en varias estancias además de la cocina, plantear una reforma integral en lugar de varias obras por separado suele ser más eficiente. La visita técnica gratuita permite comparar ambos escenarios y decidir cuál responde mejor a la situación real.', link: { text: 'reforma integral', serviceSlug: 'reformas-integrales' } },
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
        { type: 'p', text: 'Si las instalaciones están en buen estado, baño completo, cocina con muebles y electrodomésticos, suelos nuevos en toda la vivienda y pintura pueden transformar el piso completamente sin necesitar obra pesada. El resultado es visual y funcionalmente equivalente a un piso renovado, con un presupuesto sensiblemente inferior al de una reforma integral. La visita determina si ese escenario es el correcto para tu vivienda.', link: { text: 'reforma integral', serviceSlug: 'reformas-integrales' } },
      ],
    },
    'torrejon-de-ardoz': {
      intro: 'Antes de reformar un piso en Torrejón de Ardoz conviene decidir si tiene más sentido abordar la vivienda de una vez o trabajar por fases. La respuesta depende del estado de las instalaciones: si el cuadro y la fontanería están al límite, reformar de una vez sale significativamente más barato que abrir el piso en dos obras.',
      body: [
        { type: 'h3', text: 'Qué conviene revisar antes de decidir qué reformar en Torrejón' },
        { type: 'p', text: 'Antes de decidir el alcance de la reforma conviene saber el estado de las instalaciones. Si el cuadro eléctrico y la fontanería están en buen estado, baño, cocina, suelos y pintura pueden transformar el piso sin obra pesada. Si necesitan renovación, lo más eficiente es hacer todo a la vez con el piso abierto una sola vez. La visita técnica gratuita determina en cuál de los dos escenarios estás, antes de comprometer ningún número.' },
        { type: 'h3', text: 'Reformar por partes: qué priorizar cuando no se puede hacer todo a la vez' },
        { type: 'p', text: 'Si el presupuesto no permite hacerlo todo de una vez, suelos nuevos y pintura son lo que más cambia la percepción visual del conjunto por el menor coste por metro cuadrado. El siguiente nivel es baño o cocina por separado, según cuál esté en peor estado o tenga mayor impacto en el día a día. Lo que conviene evitar es renovar acabados sobre instalaciones que van a necesitar cambiarse en poco tiempo: eso obliga a abrir el piso otra vez.', link: { text: 'cocina', serviceSlug: 'reforma-cocinas' } },
      ],
    },
    'coslada': {
      intro: 'Reformar un piso en Coslada tiene una variable que conviene evaluar desde el principio: si hay indicios de humedad en la vivienda, conviene identificar su origen antes de cerrar los acabados. Pintar o revestir sin resolver la causa puede hacer que el problema reaparezca después de la reforma. Conocer el estado real antes de cerrar el presupuesto evita sorpresas a mitad de obra.',
      body: [
        { type: 'h3', text: 'Antes de presupuestar: cómo detectar humedades en un piso de Coslada' },
        { type: 'p', text: 'En algunos bloques de Coslada, las humedades en plantas bajas no son visibles hasta que empieza la obra. Conocer el estado real antes de firmar el contrato es lo que hace que el precio cerrado sea realmente cerrado. En la visita técnica revisamos el estado de la solera, los muros y la cubierta cuando aplica, y lo incluimos en el presupuesto cuando el estado lo requiere.' },
        { type: 'h3', text: 'Qué instalaciones conviene renovar y qué puede esperar' },
        { type: 'p', text: 'No todas las instalaciones de un piso de los 80 en Coslada están en el mismo estado. La revisión en la visita técnica determina qué necesita sustitución urgente y qué puede mantenerse. Esto evita presupuestos que incluyen todo por defecto (más caros de lo necesario) o presupuestos que no incluyen nada y se desvían a mitad de obra cuando aparecen los problemas. Cuando el estado de las instalaciones revela un alcance mayor, la visita permite valorar el escenario de reforma integral.', link: { text: 'reforma integral', serviceSlug: 'reformas-integrales' } },
      ],
    },
    'san-fernando-de-henares': {
      intro: 'Si tienes una vivienda en San Fernando de Henares, el alcance de la reforma depende más de cuándo se construyó que de lo que quieres cambiar. Los pisos del casco antiguo suelen necesitar instalaciones nuevas; los de las promociones más recientes pueden limitarse a acabados y distribución. La diferencia en presupuesto entre ambos casos puede ser relevante. La visita técnica lo determina.',
      body: [
        { type: 'h3', text: 'Alcance de la reforma según la zona y la época de construcción' },
        { type: 'p', text: 'En viviendas del casco antiguo de San Fernando donde las instalaciones no se han actualizado, el cuadro eléctrico, la fontanería y la carpintería exterior pueden necesitar revisión o sustitución además de los acabados. Un piso de Parque Roma o Parque Henares de los años 90 puede tener instalaciones aprovechables y el alcance puede centrarse en acabados y distribución. El presupuesto entre ambos casos puede diferir de manera significativa. La visita técnica lo aclara antes de comprometer cualquier número.' },
        { type: 'h3', text: '¿Se puede vivir en el piso durante la reforma?' },
        { type: 'p', text: 'En reformas parciales (baño, cocina o suelos por separado), es posible vivir en el piso aunque resulte incómodo durante los días de obra más intensa. En reformas integrales con derribo general, no es recomendable por el polvo, el ruido y los cortes de suministros. Si no tienes alternativa, diseñamos una secuencia de trabajo por zonas para que siempre haya una parte habitable de la vivienda.', link: { text: 'reformas integrales', serviceSlug: 'reformas-integrales' } },
      ],
    },
    'guadalajara': {
      intro: 'En Guadalajara, el clima continental hace que el cambio de carpintería exterior a PVC con doble acristalamiento tenga un impacto real en el confort térmico y acústico. Si las ventanas son originales de los años 80, conviene valorar su renovación como parte de la reforma: hacerlo en la misma obra es más eficiente que abordarlas por separado después.',
      body: [
        { type: 'h3', text: 'Carpintería exterior en Guadalajara: cuándo tiene sentido incluirla en la reforma' },
        { type: 'p', text: 'El cambio de carpintería exterior a PVC con doble acristalamiento mejora el confort térmico y acústico de la vivienda. En Guadalajara, con un clima de mayor amplitud térmica que en el Corredor madrileño, la mejora puede ser especialmente perceptible. Si las ventanas llevan décadas sin renovarse, incluir la carpintería en la misma obra evita tener que intervenir por separado después.' },
        { type: 'h3', text: 'Instalaciones en Guadalajara: qué evaluar antes de presupuestar' },
        { type: 'p', text: 'Si la vivienda lleva años sin una revisión de instalaciones, el cuadro eléctrico y la fontanería son las dos partidas que con más frecuencia condicionan el presupuesto final. Evaluarlas en la visita previa evita que aparezcan como extras cuando la obra ya está en marcha. Cuando su estado revela que el alcance supera el de una reforma de piso, la misma visita permite valorar el escenario de reforma integral.', link: { text: 'reforma integral', serviceSlug: 'reformas-integrales' } },
      ],
    },
    'azuqueca-de-henares': {
      intro: 'En pisos de Azuqueca donde las instalaciones están en buen estado, la reforma puede concentrarse en lo que más transforma visualmente: suelos nuevos, baño renovado, cocina actualizada y pintura. El resultado es un piso completamente renovado sin necesitar obra pesada. Lo verificamos en la visita técnica antes de cerrar el alcance.',
      body: [
        { type: 'h3', text: 'Estado de instalaciones en Azuqueca: qué determina la reforma de piso' },
        { type: 'p', text: 'Si las instalaciones de la vivienda están en buen estado, la reforma puede concentrarse en lo que más impacto tiene visualmente: suelos nuevos, baño renovado, cocina actualizada y pintura, sin necesariamente tocar la instalación eléctrica o la fontanería.' },
        { type: 'h3', text: 'Suelos en una reforma de piso: qué opciones hay y cuánto cuestan' },
        { type: 'p', text: 'El suelo es la superficie que más transforma visualmente una vivienda por euro invertido. Las opciones más comunes: porcelánico de gran formato, tarima flotante de laminado AC5, o microcemento en salón (requiere preparación de base específica). El presupuesto cerrado incluye materiales, adhesivo, nivelación de base y remates de transición.' },
        { type: 'p', text: 'Si el estado de las instalaciones o el alcance previsto superan lo que cubre una reforma de piso, puede ser más eficiente plantearlo todo en una sola obra. La visita técnica identifica en cuál de los dos escenarios estás, y si corresponde el de reforma integral, lo clarifica antes de cerrar el precio.', link: { text: 'reforma integral', serviceSlug: 'reformas-integrales' } },
      ],
    },
    'meco': {
      intro: 'Reformar la vivienda en Meco tiene una pregunta específica que no existe en los pisos de bloque: ¿se interviene en las dos plantas a la vez o solo en una? Hacer las dos en la misma obra es más económico y más rápido en total. Reformar solo una planta y dejar la otra para después implica costes adicionales de desescombro y coordinación.',
      body: [
        { type: 'h3', text: 'Reformar un adosado de dos plantas en Meco: cómo organizarlo' },
        { type: 'p', text: 'La distribución en dos plantas de los adosados de Meco plantea una pregunta que no existe en los pisos de bloque: ¿se interviene en ambas plantas a la vez o solo en una? Hacer las dos plantas en la misma obra es más económico (el equipo está en la vivienda, el desescombro se hace una sola vez) y más rápido en total. Reformar solo una planta y dejar la otra para después implica volver a abrir con los costes adicionales que conlleva. Cuando el alcance se extiende a instalaciones y varias plantas, la visita técnica confirma si el escenario corresponde a una reforma integral.', link: { text: 'reforma integral', serviceSlug: 'reformas-integrales' } },
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
        { type: 'p', text: 'Las instalaciones son el primer criterio: instalación eléctrica si el cuadro es de los años 90 o anterior, fontanería si hay tuberías que ya han dado señales de deterioro, y cubierta si hay humedades en la planta superior. Renovarlas a la vez que se hace el resto de la reforma evita volver a abrir la vivienda en pocos años, con los costes adicionales que eso implica. Cuando el estado de las instalaciones y el alcance así lo requieren, la visita técnica confirma si el escenario corresponde a una reforma integral.', link: { text: 'reforma integral', serviceSlug: 'reformas-integrales' } },
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
        { type: 'p', text: 'Si el local está en la planta baja de un edificio residencial, la altura disponible, la distribución existente y el paso de instalaciones pueden condicionar el proyecto. En una nave o espacio más diáfano, el reto suele estar en organizar correctamente las zonas de trabajo, atención, almacenamiento e instalaciones. Cada configuración tiene sus propios requisitos técnicos y tramitación; los evaluamos en la visita inicial antes de comprometer presupuesto.' },
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
      q: '¿Qué tipos de obras realizáis en Alcalá de Henares?',
      a: 'Reformas integrales, reforma de baño, cocina, pisos y chalets, locales comerciales y obras en comunidades de propietarios. Cubrimos Alcalá de Henares con el mismo equipo propio, precio cerrado y plazo garantizado en contrato. La visita técnica gratuita evalúa el estado de la vivienda antes de comprometer ningún número.',
    },
    {
      q: '¿Necesito tramitar algo antes de empezar una reforma en Alcalá de Henares?',
      a: 'Depende del alcance concreto de la obra y de la normativa del Ayuntamiento de Alcalá de Henares. Hay actuaciones que requieren tramitación previa y otras que no; el límite entre unas y otras varía según el alcance y los elementos afectados. Lo revisamos en la fase de proyecto, antes de fijar ninguna fecha de inicio.',
    },
    {
      q: '¿Cómo solicito una visita para valorar una reforma en Alcalá de Henares?',
      a: 'A través del formulario de contacto o por teléfono. La visita técnica es gratuita y sin compromiso. Tras el primer contacto organizamos la visita según disponibilidad. En la visita evaluamos el estado de la vivienda o local, tomamos medidas y escuchamos qué quieres cambiar. El presupuesto lo recibes en las 48 horas siguientes.',
    },
    {
      q: '¿Podéis presupuestar una reforma antes de comprar la vivienda en Alcalá?',
      a: 'Sí. Conocer el coste estimado de la reforma antes de cerrar la compra puede ayudarte a negociar el precio o a decidir si el piso encaja en tu presupuesto total. La visita puede realizarse con el vendedor o el agente inmobiliario presente. El presupuesto orientativo no implica ningún compromiso de obra.',
    },
    {
      q: '¿Cuándo conviene plantear una reforma integral en lugar de ir solo a baño y cocina?',
      a: 'Cuando las instalaciones necesitan renovación. Si el cuadro o la fontanería requieren sustitución, hacerlo todo en la misma obra es más eficiente que hacerlo por separado: se abre el piso una sola vez y se coordinan los gremios en un único periodo. Si las instalaciones están bien, baño, cocina, suelos y pintura pueden renovar el piso sin obra pesada.',
    },
  ],
  'torrejon-de-ardoz': [
    {
      q: '¿Qué tipos de obras realizáis en Torrejón de Ardoz?',
      a: 'Reformas integrales, reforma de baño, cocina, pisos, locales comerciales y obras en comunidades de propietarios. Cubrimos Torrejón de Ardoz con el mismo equipo propio, precio cerrado y plazo garantizado. Si no tienes claro el alcance, la visita técnica gratuita evalúa el estado de la vivienda y orienta antes de presupuestar.',
    },
    {
      q: '¿Cómo solicito una visita para valorar una reforma en Torrejón de Ardoz?',
      a: 'A través del formulario de contacto o por teléfono. La visita técnica es gratuita y sin compromiso. Tras el primer contacto organizamos la visita según disponibilidad. En la visita evaluamos el estado de las instalaciones, tomamos medidas y escuchamos qué quieres cambiar. El presupuesto lo recibes en las 48 horas siguientes.',
    },
    {
      q: '¿Qué hay que comprobar antes de fijar la fecha de inicio de la obra en Torrejón?',
      a: 'Si la obra requiere algún tipo de tramitación municipal, ese plazo condiciona la fecha de inicio. Los requisitos dependen del alcance y de la normativa del Ayuntamiento de Torrejón de Ardoz. Lo revisamos en la fase de proyecto, antes de comprometer ninguna fecha, para que el calendario sea realista desde el principio.',
    },
    {
      q: '¿Puedo pedir presupuesto si todavía no he decidido todo lo que quiero reformar?',
      a: 'Sí. La visita técnica también sirve para orientar el alcance: evaluamos el estado del piso y te explicamos qué tiene más impacto según tu objetivo. No es necesario tener todo decidido antes de la visita; con una descripción general del estado de la vivienda y de tus prioridades es suficiente para empezar.',
    },
    {
      q: '¿Cuándo tiene sentido reformar el piso antes de venderlo o alquilarlo en Torrejón?',
      a: 'Cuando el estado actual limita el precio o el perfil de comprador o inquilino. En pisos donde cocina y baño no se han tocado en muchos años, una reforma centrada en esos espacios puede mejorar la posición en el mercado. Lo orientamos en la visita según el estado del piso y el objetivo concreto.',
    },
  ],
  'coslada': [
    {
      q: '¿Qué reformas realizáis en Coslada?',
      a: 'Reformas integrales, reforma de baño, cocina, piso, locales comerciales y obras en comunidades de propietarios. El mismo equipo, el mismo sistema de presupuesto cerrado y el mismo compromiso de plazo en Coslada que en el resto del Corredor del Henares.',
    },
    {
      q: '¿Cómo solicito una visita técnica en Coslada?',
      a: 'A través del formulario de contacto o por teléfono. La visita es gratuita y sin compromiso. Tras el primer contacto organizamos la visita según disponibilidad. En la visita evaluamos el estado de la vivienda o local, tomamos medidas y escuchamos qué quieres cambiar. El presupuesto llega en las 48 horas siguientes.',
    },
    {
      q: '¿Conviene reformar baño y cocina en la misma obra?',
      a: 'Sí, cuando los dos lo necesitan. Los gremios de fontanería y electricidad trabajan en ambos espacios en la misma movilización, lo que reduce el tiempo total y el coste de coordinación. Hacerlos por separado implica dos movilizaciones de gremios y dos periodos de incomodidad en la vivienda.',
    },
    {
      q: '¿Hay que tramitar algo antes de empezar una reforma en Coslada?',
      a: 'Depende del alcance concreto de la obra y de la normativa del Ayuntamiento de Coslada. Las actuaciones que afectan a elementos comunes del edificio, fachada o estructura tienen un tratamiento diferente a las que solo intervienen en el interior de la vivienda. Revisamos qué corresponde a cada proyecto antes de planificar el inicio.',
    },
    {
      q: '¿Cuándo conviene plantear una reforma integral en lugar de ir por partes?',
      a: 'Cuando las instalaciones necesitan renovación. Si el cuadro eléctrico o la fontanería requieren sustitución, hacerlo todo en la misma obra evita abrir el piso dos veces y repetir la coordinación de gremios. Si las instalaciones están bien, baño, cocina, suelos y pintura pueden renovar el piso sin obra pesada y por menos presupuesto.',
    },
  ],
  'san-fernando-de-henares': [
    {
      q: '¿Qué diferencias hay entre reformar en el casco de San Fernando y en Parque Roma?',
      a: 'El alcance depende del estado de las instalaciones de cada vivienda, no de la zona. En general, cuanto más antigua es la vivienda, más probable es que el cuadro eléctrico o la fontanería necesiten revisión antes de cerrar el presupuesto. La visita técnica gratuita evalúa el estado real de cada caso antes de comprometer ningún número.',
    },
    {
      q: '¿Cómo solicito una visita para valorar una reforma en San Fernando de Henares?',
      a: 'A través del formulario de contacto o por teléfono. La visita técnica es gratuita y sin compromiso. Tras el primer contacto organizamos la visita según disponibilidad. Evaluamos el estado de las instalaciones, tomamos medidas y escuchamos qué quieres cambiar. El presupuesto lo recibes en las 48 horas siguientes.',
    },
    {
      q: '¿Qué información sirve para orientar el presupuesto antes de la visita?',
      a: 'La superficie de la vivienda o local, el año de construcción aproximado y una descripción del alcance previsto. Si ya tienes claro que las instalaciones tienen años sin actualizarse, mencionarlo ayuda a que la visita los evalúe en detalle. Con eso podemos dar una orientación antes de la visita si lo necesitas.',
    },
    {
      q: '¿Podéis reformar locales comerciales en San Fernando de Henares?',
      a: 'Sí. Reforma de locales comerciales, acondicionamiento de naves y gestión de licencias de actividad en San Fernando de Henares. El mismo proceso que en el resto del Corredor: visita técnica gratuita, presupuesto cerrado y contrato con precio y plazo fijados.',
    },
    {
      q: '¿Cuándo conviene hacer toda la reforma a la vez en lugar de ir por fases?',
      a: 'Cuando las instalaciones necesitan renovación o cuando hay redistribución de espacios. En esos casos, abrir el piso una sola vez es más eficiente que dos obras separadas en el tiempo. Si las instalaciones están en buen estado y no hay redistribución, puede tener sentido priorizar las estancias más urgentes y abordar el resto después.',
    },
  ],
  'guadalajara': [
    {
      q: '¿Qué tipo de reformas realizáis en Guadalajara?',
      a: 'Reformas integrales, baño, cocina, piso, locales comerciales y obras en comunidades de propietarios. Cubrimos Guadalajara capital y municipios próximos con el mismo equipo y el mismo sistema de presupuesto cerrado que en el Corredor del Henares madrileño.',
    },
    {
      q: '¿Cómo solicito una visita para valorar una reforma en Guadalajara?',
      a: 'A través del formulario de contacto o por teléfono. La visita técnica es gratuita y sin compromiso. Tras el primer contacto organizamos la visita según disponibilidad. En la visita evaluamos el estado de la vivienda o local y cerramos la información que necesitamos para el presupuesto. Lo recibes en las 48 horas siguientes.',
    },
    {
      q: '¿Los trámites de licencia de obra son diferentes en Guadalajara que en los municipios madrileños?',
      a: 'El proceso es similar pero el trámite se hace en el Ayuntamiento de Guadalajara, con sus propios plazos y documentación. El trámite depende del alcance de la actuación y de los elementos afectados. Antes de fijar una fecha de inicio comprobamos qué procedimiento corresponde y lo gestionamos en su totalidad.',
    },
    {
      q: '¿Cómo se orienta el alcance de la reforma antes de presupuestar en Guadalajara?',
      a: 'La visita técnica evalúa el estado de las instalaciones y el alcance de lo que quieres cambiar. Eso determina si la reforma puede centrarse en acabados o si las instalaciones necesitan también intervención. Cuantas más variables tengamos claras antes de la visita, más preciso puede ser el presupuesto desde el primer momento.',
    },
    {
      q: '¿Cuándo conviene incluir el cambio de carpintería exterior en la reforma?',
      a: 'Cuando presentan deterioro visible, condensaciones, pérdida de hermeticidad o no tienen doble acristalamiento. Incluirlas en la misma obra evita tener que intervenir por separado después. En Guadalajara, la diferencia térmica entre estaciones hace que la mejora de la carpintería exterior tenga un impacto directo en el confort habitual de la vivienda.',
    },
  ],
  'azuqueca-de-henares': [
    {
      q: '¿Trabajáis en Azuqueca de Henares aunque pertenezca a la provincia de Guadalajara?',
      a: 'Sí. Azuqueca de Henares forma parte de nuestra zona habitual de trabajo. El mismo equipo que trabaja en Alcalá, Torrejón y Coslada cubre también Azuqueca y Guadalajara. Mismo proceso, mismo sistema de presupuesto cerrado y mismo compromiso de plazo.',
    },
    {
      q: '¿Cómo solicito una visita para valorar una reforma en Azuqueca de Henares?',
      a: 'A través del formulario de contacto o por teléfono. La visita técnica es gratuita y sin compromiso. Tras el primer contacto organizamos la visita según disponibilidad. Evaluamos el estado de la vivienda o local, tomamos medidas y orientamos el alcance antes de cerrar el presupuesto. Lo recibes en las 48 horas siguientes.',
    },
    {
      q: '¿Cómo se decide si conviene reforma parcial o integral en Azuqueca?',
      a: 'La visita técnica evalúa el estado de las instalaciones. Si el cuadro y la fontanería están en buen estado, la reforma puede centrarse en baño, cocina, suelos y pintura. Si las instalaciones necesitan renovación, hacerlo todo en la misma obra es más eficiente que abrir el piso dos veces. El resultado de la visita define qué alcance tiene más sentido en cada caso.',
    },
    {
      q: '¿Hay que tramitar algo antes de empezar una reforma en Azuqueca de Henares?',
      a: 'Depende del alcance concreto y de la normativa del Ayuntamiento de Azuqueca de Henares. Las actuaciones que afectan a fachada, estructura o elementos comunes tienen un tratamiento diferente a las que solo intervienen en el interior de la vivienda. Lo determinamos antes de planificar el inicio.',
    },
    {
      q: '¿Cuándo conviene reformar el piso completo en lugar de solo baño y cocina?',
      a: 'Cuando las instalaciones necesitan renovación. Si el cuadro eléctrico o la fontanería requieren sustitución, hacerlo todo en la misma obra evita abrir el piso dos veces. Si las instalaciones están en buen estado, baño, cocina, suelos y pintura pueden renovar completamente el piso sin obra pesada.',
    },
  ],
  'meco': [
    {
      q: '¿Hacéis reformas de chalets y adosados en Meco?',
      a: 'Sí. Reforma integral, baño, cocina, instalaciones, cerramiento de terrazas y actuaciones en exterior. El mismo proceso y sistema de presupuesto cerrado que en pisos de bloque, ajustado a las características de la vivienda unifamiliar.',
    },
    {
      q: '¿Cómo solicito una visita para valorar una reforma en Meco?',
      a: 'A través del formulario de contacto o por teléfono. La visita técnica es gratuita y sin compromiso. Tras el primer contacto organizamos la visita según disponibilidad, cubriendo tanto la vivienda como cualquier elemento exterior que quieras incluir en el alcance. El presupuesto llega en las 48 horas siguientes.',
    },
    {
      q: '¿Hay que tramitar algo antes de empezar una reforma en Meco?',
      a: 'Depende del alcance concreto y de la normativa del Ayuntamiento de Meco. Las actuaciones que afectan a fachada, estructura o elementos comunes tienen un tratamiento diferente a las que no los afectan. Gestionamos el proceso completo según lo que corresponda a cada proyecto.',
    },
    {
      q: '¿Qué diferencias tiene reformar una vivienda unifamiliar en Meco respecto a un piso de bloque?',
      a: 'La vivienda unifamiliar puede tener instalaciones independientes y más superficie para gestionar. También puede haber más de una planta a coordinar. La logística de materiales suele ser más sencilla al tener acceso directo. El proceso de presupuesto y obra es el mismo, ajustado a las características de cada vivienda.',
    },
    {
      q: '¿Cuándo tiene sentido reformar toda la vivienda de una vez en lugar de ir por zonas?',
      a: 'Cuando hay instalaciones que renovar o redistribución entre plantas. Abrir la vivienda una sola vez es más eficiente que dos obras separadas. Si las instalaciones están en buen estado y no hay redistribución, puede tener sentido priorizar las zonas más urgentes y dejar el resto para cuando el presupuesto lo permita.',
    },
  ],
  'camarma-de-esteruelas': [
    {
      q: '¿Hacéis reformas integrales de viviendas unifamiliares en Camarma de Esteruelas?',
      a: 'Sí. Reforma integral, baño, cocina, instalaciones, carpintería exterior y actuaciones en cubierta o exterior cuando la vivienda lo requiere. El mismo equipo, el mismo sistema de presupuesto cerrado y el mismo compromiso de plazo que en cualquier tipo de vivienda.',
    },
    {
      q: '¿Cómo solicito una visita para valorar una reforma en Camarma?',
      a: 'A través del formulario de contacto o por teléfono. La visita técnica es gratuita y sin compromiso. Tras el primer contacto organizamos la visita según disponibilidad. Evaluamos el estado de la vivienda, tomamos medidas y escuchamos el alcance previsto. El presupuesto lo recibes en las 48 horas siguientes.',
    },
    {
      q: '¿Hay que tramitar algo antes de empezar una reforma en Camarma de Esteruelas?',
      a: 'Depende del alcance y de la normativa del Ayuntamiento de Camarma de Esteruelas. Las actuaciones que afectan a fachada, estructura o elementos comunes tienen un tratamiento diferente a las que solo intervienen en el interior de la vivienda. Gestionamos la tramitación completa según lo que corresponda a cada proyecto.',
    },
    {
      q: '¿Cuánto tarda una reforma integral en una vivienda unifamiliar de Camarma?',
      a: 'Una reforma integral de una vivienda unifamiliar lleva entre 14 y 20 semanas según la superficie y el alcance. Si la reforma es parcial (solo una planta o solo instalaciones y acabados), el plazo puede ser significativamente menor. La fecha de entrega queda fijada en el contrato antes de empezar.',
    },
    {
      q: '¿Cuándo conviene revisar las instalaciones antes de planificar la reforma?',
      a: 'Antes de cerrar el alcance de cualquier reforma. El estado del cuadro eléctrico, la fontanería y la carpintería exterior condiciona qué tipo de actuación tiene más sentido. En viviendas que llevan tiempo sin una revisión de instalaciones, evaluar su estado antes de planificar los acabados evita que el presupuesto quede desfasado cuando empieza la obra.',
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

export const RELATED_ZONES: Record<string, string[]> = {
  'alcala-de-henares':       ['torrejon-de-ardoz', 'meco', 'camarma-de-esteruelas'],
  'torrejon-de-ardoz':       ['alcala-de-henares', 'san-fernando-de-henares', 'coslada'],
  'coslada':                 ['san-fernando-de-henares', 'torrejon-de-ardoz'],
  'san-fernando-de-henares': ['coslada', 'torrejon-de-ardoz', 'alcala-de-henares'],
  'guadalajara':             ['azuqueca-de-henares', 'meco', 'alcala-de-henares'],
  'azuqueca-de-henares':     ['guadalajara', 'meco', 'alcala-de-henares'],
  'meco':                    ['alcala-de-henares', 'azuqueca-de-henares', 'camarma-de-esteruelas'],
  'camarma-de-esteruelas':   ['alcala-de-henares', 'meco'],
};
