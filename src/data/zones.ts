export const ZONES = [
  // ─────────────────────────────────────────────────────────────────────────
  // ALCALÁ DE HENARES — standalone (alcala-de-henares.astro). SIN heroVariant.
  // ─────────────────────────────────────────────────────────────────────────
  {
    slug: 'alcala-de-henares',
    name: 'Alcalá de Henares',
    primary: true,
    province: 'Madrid',
    desc: 'Ciudad histórica a 35 km de Madrid. Reformas de pisos, baños, cocinas y locales en Alcalá y sus barrios.',
    heroIntro: 'Si tienes un proyecto de reforma en Alcalá de Henares, lo gestionamos todo desde la primera visita hasta la entrega: un único interlocutor, precio cerrado y plazo garantizado por escrito. La visita técnica evalúa el estado real de la vivienda antes de comprometer ningún número.',
    localAngle: 'es una ciudad con gran parque de edificios de los años 70 y 80 en barrios como El Val, Barrio del Pilar y Reyes Católicos, donde la actualización de instalaciones eléctricas, fontanería y acabados es una intervención habitual',
    neighborhoods: ['Casco Histórico', 'Nueva Alcalá', 'Reyes Católicos', 'El Val', 'Barrio del Pilar', 'Ensanche', 'La Garena', 'Espartales'],
    m2BarrioNotes: [
      {
        barrio: 'El Val y Barrio del Pilar',
        text: 'Los barrios con mayor concentración de bloques de los años 70 y 80 en Alcalá. La evaluación de instalaciones precede a la elección de acabados: el cuadro eléctrico lleva en muchos casos décadas sin actualizar y suele ser la primera partida que aparece en la evaluación técnica antes de cerrar el presupuesto.',
      },
      {
        barrio: 'Casco Histórico y Reyes Católicos',
        text: 'El Casco combina vivienda antigua rehabilitada con pisos que no se han tocado en décadas. El alcance varía mucho según el estado real de cada inmueble. En Reyes Católicos predominan promociones de los 80-90 donde la reforma puede centrarse en baño y cocina con menor necesidad de intervenir en instalaciones.',
      },
      {
        barrio: 'La Garena y Espartales',
        text: 'Zona de crecimiento más reciente con vivienda más nueva. La reforma puede centrarse en acabados: suelos de porcelánico resistente, baño renovado y cocina funcional. El plazo puede ser relevante cuando hay un contrato de arrendamiento pendiente.',
      },
    ],
    topWorks: [
      {
        title: 'Reforma integral con instalaciones',
        desc: 'La actuación más completa en El Val y Barrio del Pilar. Cuadro eléctrico, fontanería, baño, cocina, suelos y pintura en una sola obra. Cuando las instalaciones necesitan renovación, abordar todo a la vez es más eficiente que intervenir en dos momentos distintos.',
      },
      {
        title: 'Reforma de baño completa',
        desc: 'Cambio de bañera por ducha, alicatado hasta el techo, sanitarios y mueble. En bloques de los 70-80, conviene evaluar la fontanería de la vivienda en la misma visita para no tener que reabrir tras el alicatado.',
      },
      {
        title: 'Reforma orientada al alquiler',
        desc: 'Materiales de alta durabilidad, suelos resistentes, cocina funcional y baño actualizado. El objetivo: dejar la vivienda en condiciones de arrendamiento en el menor plazo posible.',
      },
      {
        title: 'Reforma de cocina',
        desc: 'Muebles, encimera y alicatado con electrodomésticos integrados. En Alcalá es frecuente combinarla con la renovación del suelo de toda la vivienda en la misma obra para aprovechar la movilización.',
      },
    ],
    m3Permits: 'El Ayuntamiento de Alcalá de Henares clasifica las obras según el alcance y los elementos afectados. Las reformas interiores que no modifican elementos estructurales ni fachada suelen tramitarse con procedimientos abreviados. Gestionamos la tramitación necesaria para cada proyecto antes de planificar el inicio, para que la fecha de comienzo sea realista desde el primer día.',
  },

  // ─────────────────────────────────────────────────────────────────────────
  // TORREJÓN DE ARDOZ — Nivel B · template directa
  // ─────────────────────────────────────────────────────────────────────────
  {
    slug: 'torrejon-de-ardoz',
    name: 'Torrejón de Ardoz',
    heroVariant: 'directa' as const,
    thesis: 'Presupuesto cerrado y coordinación completa desde la primera visita hasta la entrega.',
    metaDesc: 'Empresa de reformas en Torrejón de Ardoz. Precio cerrado y coordinación completa para toda la obra. Visita técnica gratuita y presupuesto en 48h.',
    primary: true,
    province: 'Madrid',
    desc: 'Municipio de referencia en el Corredor. Precio cerrado, presupuesto gratis en 24h.',
    heroIntro: 'Si tienes un proyecto de reforma en Torrejón de Ardoz y estás valorando si tiene más sentido hacerlo de una sola vez o ir por fases, la visita técnica gratuita te da una respuesta concreta basada en el estado real de tu vivienda. Precio cerrado y plazo garantizado desde el primer día.',
    localAngle: 'cuenta con bloques de distintas épocas en barrios como Soto del Henares, Parque Cataluña y Las Veredillas, donde el estado de las instalaciones varía según la época de construcción y determina el alcance adecuado de cada reforma',
    neighborhoods: ['Centro', 'Casco Antiguo', 'Soto del Henares', 'Parque Cataluña', 'Las Veredillas', 'San José', 'Fronteras', 'Cobos'],
    m2BarrioNotes: [
      {
        barrio: 'Centro y Casco Antiguo',
        text: 'La zona con mayor antigüedad media del parque residencial. Cuando las instalaciones llevan décadas sin actualizarse, la evaluación técnica previa determina si la reforma puede centrarse en acabados o conviene incluir también el cuadro eléctrico y la fontanería en el proyecto. Abordar todo en la misma obra evita abrir el piso en dos momentos distintos.',
      },
      {
        barrio: 'Soto del Henares',
        text: 'Bloques de los años 80 donde conviene evaluar la fontanería en la misma visita que se presupuesta el baño: si lleva décadas sin revisarse, es más eficiente incluirla en el alcance antes de alicatar que tener que deshacer el trabajo nuevo en el futuro.',
      },
      {
        barrio: 'Parque Cataluña y Las Veredillas',
        text: 'Promociones de los años 90 con instalaciones en mejor estado relativo. El alcance puede centrarse en acabados: cocinas, suelos y baños sin necesidad de intervenir en instalaciones, salvo que la evaluación previa indique lo contrario.',
      },
    ],
    topWorks: [
      {
        title: 'Cambio de bañera por ducha',
        desc: 'En bloques de los años 80, cambio a ducha de obra con mamparas, alicatado nuevo hasta el techo, sanitarios y mueble de baño. Conviene evaluar la fontanería en la misma visita.',
      },
      {
        title: 'Renovación de cocina',
        desc: 'Muebles, encimera y alicatado con electrodomésticos integrados. El fontanero y el electricista trabajan en la misma movilización para no abrir el espacio en dos obras distintas.',
      },
      {
        title: 'Reforma integral con instalaciones',
        desc: 'Cuando el cuadro o la fontanería necesitan renovación, la reforma completa es más eficiente: se abre el piso una sola vez y los gremios se coordinan en un único periodo de obra.',
      },
      {
        title: 'Suelos y pintura completa',
        desc: 'Porcelánico o tarima de ingeniería en toda la vivienda, más pintura completa con previo de paredes. La actuación adecuada cuando las instalaciones están en buen estado.',
      },
    ],
    m3Permits: 'El Ayuntamiento de Torrejón de Ardoz establece distintos procedimientos según el alcance y los elementos afectados. Las reformas interiores que no afectan a estructura ni fachada suelen tramitarse por vía simplificada. Gestionamos la tramitación completa antes de fijar la fecha de inicio, para que el calendario sea realista desde el principio.',
  },

  // ─────────────────────────────────────────────────────────────────────────
  // COSLADA — Nivel B · template directa
  // ─────────────────────────────────────────────────────────────────────────
  {
    slug: 'coslada',
    name: 'Coslada',
    heroVariant: 'directa' as const,
    thesis: 'Presupuesto cerrado. Pisos de bloque y locales comerciales.',
    metaDesc: 'Reformas en Coslada con precio cerrado: pisos de bloque y locales comerciales. El mismo equipo del Corredor del Henares. Visita técnica gratuita.',
    primary: true,
    province: 'Madrid',
    desc: 'Reformas en Coslada con profesionales de confianza. Presupuesto gratis en 24h.',
    heroIntro: 'En Coslada trabajamos en bloques del núcleo urbano y en locales de la zona comercial. Antes de cerrar cualquier presupuesto, evaluamos el estado real de las instalaciones: qué puede aprovecharse, qué necesita renovación y qué conviene abordar en la misma obra para no tener que volver a abrir. El presupuesto puede cerrarse con más precisión cuando el alcance parte de una revisión previa del estado de la vivienda.',
    localAngle: 'tiene un tejido residencial denso con bloques de los años 70, 80 y 90 en zonas como Valleaguado, Ciudad 70 y Ciudad San Pablo, donde el estado de las instalaciones varía según la época y condiciona el alcance de cada reforma',
    neighborhoods: ['Valleaguado', 'Ciudad 70', 'Ciudad San Pablo', 'Barrio del Puerto', 'Barrio de la Estación', 'El Esparragal', 'La Colina', 'Casco (Pueblo)'],
    m2BarrioNotes: [
      {
        barrio: 'Valleaguado y Ciudad 70',
        text: 'Las zonas con mayor concentración de bloques de los años 80 en Coslada. Cuando la fontanería lleva muchos años sin revisarse, conviene incluirla en el alcance antes de alicatar: hacerlo en la misma obra evita abrir el piso en dos momentos.',
      },
      {
        barrio: 'Ciudad San Pablo',
        text: 'Bloques con algo más de antigüedad en algunas zonas. La evaluación previa determina si el alcance puede limitarse a acabados o si conviene incluir también el cuadro eléctrico y la fontanería en el proyecto.',
      },
      {
        barrio: 'Barrio del Puerto y zona comercial',
        text: 'Vivienda más diversa, con mezcla de pisos de distintas épocas. En la zona comercial, los locales pueden requerir cambio de distribución, pavimento nuevo, instalación de ventilación y gestión de licencia de actividad si procede.',
      },
    ],
    topWorks: [
      {
        title: 'Baño con revisión de fontanería',
        desc: 'En bloques de los años 80 conviene revisar las derivaciones de fontanería antes de alicatar, evitando tener que deshacer el trabajo nuevo si hay una intervención en los próximos años.',
      },
      {
        title: 'Cocina en piso de bloque',
        desc: 'Muebles, encimera y alicatado, con redistribución del espacio cuando la distribución original no es funcional. Electricidad y fontanería revisadas en la misma obra.',
      },
      {
        title: 'Reforma integral de piso',
        desc: 'Cuando instalaciones, baño, cocina y suelos necesitan actuación. Un único periodo de obra, un único equipo coordinado.',
      },
      {
        title: 'Reforma de local comercial',
        desc: 'Acondicionamiento de locales en Coslada con gestión de licencia de actividad cuando procede. Distribución, instalaciones, pavimento y acabados con presupuesto cerrado.',
      },
    ],
    m3Permits: 'El Ayuntamiento de Coslada establece requisitos distintos según el alcance y los elementos afectados. Las obras que intervienen exclusivamente en el interior de una vivienda sin modificar elementos comunes ni fachada tienen un trámite diferente a las que sí los afectan. En locales comerciales, el cambio de actividad puede requerir tramitación adicional. Lo evaluamos antes de planificar el inicio.',
  },

  // ─────────────────────────────────────────────────────────────────────────
  // SAN FERNANDO DE HENARES — Nivel B · template editorial (2 perfiles)
  // ─────────────────────────────────────────────────────────────────────────
  {
    slug: 'san-fernando-de-henares',
    name: 'San Fernando de Henares',
    heroVariant: 'editorial' as const,
    thesis: 'El año del edificio condiciona el alcance. Evaluamos el estado real antes de presupuestar.',
    metaDesc: 'Reformas en San Fernando de Henares. El año del edificio condiciona el alcance. Evaluamos el estado real antes de presupuestar. Precio cerrado.',
    heroContext: {
      label: 'Dos perfiles de vivienda',
      items: [
        {
          title: 'Casco histórico',
          subtitle: 'Pisos años 60–80',
          note: 'Instalaciones que pueden llevar décadas sin actualizarse. El estado del cuadro eléctrico y la fontanería condiciona si la reforma puede limitarse a acabados o necesita ir más a fondo.',
        },
        {
          title: 'Parque Roma · Parque Henares',
          subtitle: 'Promociones más recientes',
          note: 'Instalaciones en mejor estado. La reforma puede centrarse en baño y cocina. En Fuencasa puede aparecer también vivienda unifamiliar con partidas de cerramiento o cubierta.',
        },
      ],
    },
    primary: true,
    province: 'Madrid',
    desc: 'Reformas integrales y parciales en San Fernando de Henares.',
    heroIntro: 'San Fernando de Henares combina vivienda de épocas muy distintas, desde el casco antiguo hasta las promociones más recientes. El alcance de una reforma varía significativamente según cuándo se construyó la vivienda. En la visita técnica gratuita evaluamos el estado real y te decimos qué opciones tienes según lo que hay dentro.',
    localAngle: 'combina vivienda del casco histórico con promociones en Parque Roma y Parque Henares, con épocas de construcción distintas que implican alcances de reforma muy diferentes según cada caso',
    neighborhoods: ['Centro', 'Parque Roma', 'Montserrat', 'Parque Henares', 'Fuencasa'],
    m2BarrioNotes: [
      {
        barrio: 'Centro y Casco Histórico',
        text: 'La vivienda más antigua de San Fernando. Pisos de los años 60-80 donde las instalaciones pueden llevar décadas sin actualizarse. El estado del cuadro eléctrico y la fontanería condiciona si la reforma puede limitarse a acabados o necesita incluir instalaciones.',
      },
      {
        barrio: 'Parque Roma',
        text: 'Vivienda más reciente, con instalaciones en mejor estado y acabados que empiezan a mostrar el paso del tiempo. La reforma puede centrarse en baño y cocina con atención al diseño y los materiales.',
      },
      {
        barrio: 'Parque Henares y Fuencasa',
        text: 'Zona con mezcla de promociones de distintas épocas. Los proyectos son heterogéneos: desde una reforma de baño puntual hasta una reforma integral. En Fuencasa hay también vivienda unifamiliar donde el alcance puede incluir cubierta o cerramiento de terraza.',
      },
    ],
    topWorks: [
      {
        title: 'Reforma integral en pisos del Casco',
        desc: 'La actuación más completa en el Centro: instalaciones, baño, cocina y suelos. Cuando el estado de la vivienda lo justifica, abordar todo en la misma obra es más eficiente que intervenir en dos momentos.',
      },
      {
        title: 'Baño y cocina en Parque Roma',
        desc: 'Renovación de baño y cocina con criterio de diseño. Materiales actuales, equipamiento eficiente. La combinación adecuada cuando las instalaciones están en buen estado.',
      },
      {
        title: 'Reforma de local en San Fernando',
        desc: 'Acondicionamiento de locales con gestión de licencia de actividad cuando procede. Mismo sistema de precio cerrado y plazo garantizado que en vivienda.',
      },
      {
        title: 'Cerramiento de terraza',
        desc: 'Actuación posible en Parque Henares y Fuencasa. Gestión del permiso correspondiente, materiales y sistema constructivo que respeta la estética del edificio.',
      },
    ],
    m3Permits: 'El Ayuntamiento de San Fernando de Henares establece distintos procedimientos según el alcance y los elementos afectados. Las obras en el interior sin modificar fachada ni elementos estructurales suelen tramitarse por vía simplificada. Los cerramientos de terraza tienen requisitos específicos, incluyendo en algunos casos el visto bueno de la comunidad. Lo evaluamos antes de planificar el inicio.',
  },

  // ─────────────────────────────────────────────────────────────────────────
  // GUADALAJARA — Nivel B+ · template editorial (clima como contexto)
  // ─────────────────────────────────────────────────────────────────────────
  {
    slug: 'guadalajara',
    name: 'Guadalajara',
    heroVariant: 'editorial' as const,
    thesis: 'El clima también cuenta al decidir qué merece la pena renovar en una vivienda de Guadalajara.',
    metaDesc: 'Reformas en Guadalajara capital. El clima también cuenta al decidir qué renovar. Precio cerrado y tramitación gestionada desde Guadalajara.',
    heroContext: {
      label: 'Contexto territorial',
      text: 'Guadalajara es provincia propia con tramitación municipal independiente de los ayuntamientos madrileños del Corredor. El clima continental de la ciudad —con mayor amplitud térmica que en la zona madrileña del Corredor— puede hacer que la carpintería exterior forme parte del alcance cuando el confort térmico lo justifique.',
    },
    primary: false,
    province: 'Guadalajara',
    seoTitle: 'Reformas en Guadalajara · Precio Cerrado | Trazzo360',
    desc: 'También operamos en Guadalajara capital y su entorno.',
    heroIntro: 'En Guadalajara capital trabajamos con el mismo sistema de precio cerrado y el mismo compromiso de plazo que en el resto del Corredor. El alcance de la reforma depende del estado real de las instalaciones y de lo que quieras cambiar: la visita técnica gratuita lo determina antes de comprometer ningún número ni plazo.',
    localAngle: 'es la capital provincial con un parque de vivienda de los años 70 y 90 en el Balconcillo y Aguas Vivas, con tramitación en el Ayuntamiento de Guadalajara, independiente de los municipios madrileños del Corredor',
    neighborhoods: ['Casco Histórico', 'El Balconcillo', 'Aguas Vivas', 'El Alamín', 'Los Manantiales', 'Estación', 'Los Valles'],
    m2BarrioNotes: [
      {
        barrio: 'El Balconcillo',
        text: 'El barrio con mayor densidad de bloques de los años 70 y 80 en Guadalajara. Las actuaciones que se evalúan con frecuencia combinan renovación de instalaciones con mejora de la carpintería exterior, especialmente cuando las ventanas tienen décadas sin cambiarse.',
      },
      {
        barrio: 'Aguas Vivas',
        text: 'Promociones de los años 90 con instalaciones en mejor estado relativo. La reforma puede centrarse en baño y cocina. La carpintería exterior puede plantearse como segunda intervención cuando el presupuesto no da para todo en la misma obra.',
      },
      {
        barrio: 'Casco Histórico y El Alamín',
        text: 'Vivienda heterogénea: pisos ya rehabilitados conviven con inmuebles que no se han tocado en décadas. El alcance varía mucho de un caso a otro, por lo que la visita técnica es imprescindible antes de orientar ninguna cifra.',
      },
    ],
    topWorks: [
      {
        title: 'Reforma integral con carpintería exterior',
        desc: 'Cuando el estado de las ventanas lo justifica, incluirlas en la misma obra puede tener impacto en el confort habitual dado el clima continental de Guadalajara, con mayor amplitud térmica que en la zona madrileña.',
      },
      {
        title: 'Baño y cocina en una misma obra',
        desc: 'Cuando los dos necesitan intervención, hacerlos juntos reduce el tiempo total: fontanería y electricidad trabajan en ambos espacios sin doble movilización.',
      },
      {
        title: 'Sustitución de cuadro eléctrico y fontanería',
        desc: 'Partida que puede aparecer en Balconcillo y Casco Histórico. Cuadros de los años 80 que conviene incluir en la reforma para no tener que volver a abrir el piso.',
      },
      {
        title: 'Evaluación de carpintería exterior',
        desc: 'La visita técnica puede evaluar el estado de la carpintería exterior junto al interior para que la decisión sobre las ventanas se tome con el presupuesto completo delante.',
      },
    ],
    m3Permits: 'El Ayuntamiento de Guadalajara gestiona sus propios procedimientos de tramitación con plazos y documentación independientes de los municipios madrileños del Corredor. El tiempo de respuesta puede variar según el tipo de actuación y la carga del servicio técnico municipal. Evaluamos qué tramitación corresponde a cada proyecto y la gestionamos en su totalidad antes de fijar la fecha de inicio.',
  },

  // ─────────────────────────────────────────────────────────────────────────
  // AZUQUECA DE HENARES — Nivel C · template directa · compact
  // ─────────────────────────────────────────────────────────────────────────
  {
    slug: 'azuqueca-de-henares',
    name: 'Azuqueca de Henares',
    heroVariant: 'directa' as const,
    thesis: 'Precio cerrado. Tramitación en el Ayuntamiento de Azuqueca de Henares, provincia de Guadalajara.',
    metaDesc: 'Empresa de reformas en Azuqueca de Henares, provincia de Guadalajara. Mismo equipo y precio cerrado que en el Corredor madrileño. Visita técnica gratuita.',
    compact: true as const,
    primary: false,
    province: 'Guadalajara',
    desc: 'Reformas en Azuqueca de Henares y alrededores.',
    heroIntro: 'Azuqueca de Henares pertenece a la provincia de Guadalajara pero forma parte habitual de nuestra zona de trabajo en el Corredor. El mismo sistema de precio cerrado y el mismo compromiso de plazo que en el resto del Corredor, sin coste adicional por desplazamiento.',
    localAngle: 'pertenece a la provincia de Guadalajara y tiene un núcleo residencial con bloques de distintas épocas donde el baño y la cocina son las actuaciones que se evalúan con mayor frecuencia',
    neighborhoods: ['Centro', 'El Vallejo', 'La Paloma', 'Bulevar - Plaza Castilla', 'La Estación', 'La Quebradilla', 'Vallehermoso', 'Postas'],
    m2BarrioNotes: [
      {
        barrio: 'Centro y Bulevar',
        text: 'El núcleo residencial más denso de Azuqueca. Bloques de los años 90 donde baño y cocina son las partidas que se evalúan con mayor frecuencia. La fontanería conviene revisarla antes de alicatar si acumula años sin intervención.',
      },
      {
        barrio: 'El Vallejo, La Paloma y zonas más recientes',
        text: 'Zonas residenciales con bloques de distintas épocas. En las promociones más recientes el estado de las instalaciones suele ser mejor, lo que puede permitir reformas centradas en acabados sin necesidad de intervenir en fontanería o electricidad.',
      },
    ],
    topWorks: [] as Array<{ title: string; desc: string }>,
    m3Permits: 'El Ayuntamiento de Azuqueca de Henares, en la provincia de Guadalajara, tiene sus propios procedimientos de tramitación con plazos independientes de los municipios madrileños del Corredor. Las reformas interiores sin afección a fachada ni estructura suelen tramitarse con procedimientos simplificados. Revisamos qué corresponde a cada proyecto antes de fijar la fecha de inicio.',
  },

  // ─────────────────────────────────────────────────────────────────────────
  // MECO — Nivel B · template tipológica (unifamiliar/adosado)
  // ─────────────────────────────────────────────────────────────────────────
  {
    slug: 'meco',
    name: 'Meco',
    heroVariant: 'tipologica' as const,
    thesis: 'Adosados y unifamiliares. Variables de alcance distintas a las de un piso de bloque.',
    metaDesc: 'Reformas en Meco: adosados y viviendas unifamiliares. Variables de alcance distintas al piso de bloque. Cerramiento, cubierta, distribución. Precio cerrado.',
    heroContext: {
      label: 'Tipología predominante',
      text: 'La mayor parte del parque residencial de Meco son urbanizaciones con adosados y viviendas unifamiliares. El alcance de una reforma en vivienda de dos plantas puede incluir cerramiento de terraza, cubierta o coordinación en más de una planta, además del interior habitual.',
    },
    primary: false,
    province: 'Madrid',
    seoModifier: '· Presupuesto Gratis',
    desc: 'Cubrimos Meco y municipios próximos.',
    heroIntro: 'Si vas a reformar una vivienda unifamiliar o un adosado en Meco, conviene tener en cuenta variables que no aparecen en los pisos de bloque: cubierta, terraza, distribución en dos plantas. El alcance puede ser muy diferente. La visita técnica gratuita identifica qué necesita intervención y qué puede esperar antes de presupuestar.',
    localAngle: 'es un municipio con predominio de viviendas unifamiliares y adosados en urbanizaciones, donde el cerramiento de terrazas, las actuaciones en cubierta y la reforma integral en dos plantas son variables del alcance que no aparecen en los pisos de bloque',
    neighborhoods: ['Casco Antiguo', 'Escritores', 'Pintores', 'Ciudad de la Luz', 'Belvalle', 'Los Ríos', 'Europa', 'Barrio Alto'],
    m2BarrioNotes: [
      {
        barrio: 'Escritores y Pintores',
        text: 'Las urbanizaciones de adosados más consolidadas de Meco. Los proyectos pueden incluir baño principal, baño de servicio, cocina y cerramiento de terraza cuando procede. La coordinación de gremios en dos plantas requiere una planificación más detallada que en un piso de bloque.',
      },
      {
        barrio: 'Ciudad de la Luz y Belvalle',
        text: 'Urbanizaciones de mayor superficie media. La doble planta y el garaje pueden añadir partidas que no aparecen en las reformas de piso: coordinación en dos zonas, escalera, instalaciones en ambas plantas.',
      },
      {
        barrio: 'Casco Antiguo',
        text: 'La parte más antigua de Meco con algunas viviendas unifamiliares de mayor antigüedad. Antes de cerrar el alcance, la evaluación de cuadro eléctrico, fontanería y estado de cubierta determina qué tipo de actuación tiene más sentido en cada caso.',
      },
    ],
    topWorks: [
      {
        title: 'Cerramiento de terraza',
        desc: 'Actuación propia de la vivienda unifamiliar. Gestión del permiso necesario en el Ayuntamiento de Meco y sistema constructivo que respeta la normativa de la urbanización.',
      },
      {
        title: 'Reforma integral de adosado',
        desc: 'Baño, cocina, suelos, instalaciones y coordinación en dos plantas. La planificación de gremios en vivienda de dos plantas es más compleja que en un piso, pero el alcance puede ser significativamente mayor.',
      },
      {
        title: 'Baño y cocina en adosado',
        desc: 'La combinación adecuada cuando la vivienda no necesita tocar instalaciones. Reforma de baño principal y cocina, a veces con baño de servicio, en la misma obra.',
      },
      {
        title: 'Cubierta e impermeabilización',
        desc: 'Reparación o sustitución de cubierta e impermeabilización de terraza exterior. Partidas que solo aparecen en vivienda unifamiliar y que pueden evaluarse en la misma visita técnica que el interior.',
      },
    ],
    m3Permits: 'El Ayuntamiento de Meco clasifica las obras según afecten a interior, fachada, cubierta o elementos estructurales. Los cerramientos de terraza requieren tramitación específica cuyo plazo y documentación dependen del tipo de cerramiento y los materiales. Gestionamos la tramitación completa antes de fijar la fecha de inicio de la obra.',
  },

  // ─────────────────────────────────────────────────────────────────────────
  // CAMARMA DE ESTERUELAS — Nivel C · template directa · compact
  // ─────────────────────────────────────────────────────────────────────────
  {
    slug: 'camarma-de-esteruelas',
    name: 'Camarma de Esteruelas',
    heroVariant: 'directa' as const,
    thesis: 'Precio cerrado en vivienda unifamiliar. La visita técnica evalúa interior, cubierta y cerramientos.',
    metaDesc: 'Reformas en Camarma de Esteruelas. Precio cerrado en vivienda unifamiliar: interior, cubierta y cerramientos evaluados en visita técnica gratuita.',
    compact: true as const,
    primary: false,
    province: 'Madrid',
    desc: 'Reformas en Camarma de Esteruelas.',
    heroIntro: 'En Camarma de Esteruelas trabajamos con el mismo sistema de precio cerrado y el mismo compromiso de plazo que en el resto del Corredor. Si tienes un proyecto de reforma en vivienda unifamiliar o adosado, la visita técnica gratuita evalúa el alcance completo antes de presupuestar: interior, cubierta o cerramientos, según lo que necesite la vivienda.',
    localAngle: 'es un municipio con predominio de viviendas unifamiliares y adosados en urbanizaciones, donde el alcance de una reforma puede incluir interior, cubierta y carpintería exterior según el estado de la vivienda',
    neighborhoods: ['Casco Urbano', 'Urb. Nueva Camarma', 'Urb. El Practicante', 'Gran Vía'],
    m2BarrioNotes: [
      {
        barrio: 'Urb. Nueva Camarma y Urb. El Practicante',
        text: 'Las urbanizaciones con mayor concentración de viviendas unifamiliares y adosados en Camarma. El alcance de una reforma en estas viviendas puede incluir actuaciones en cubierta, carpintería exterior y coordinación en dos plantas, además del interior. La visita técnica evalúa el estado de cada elemento antes de cerrar el presupuesto.',
      },
    ],
    topWorks: [] as Array<{ title: string; desc: string }>,
    m3Permits: 'El Ayuntamiento de Camarma de Esteruelas clasifica las obras según el alcance y los elementos afectados. Las actuaciones en cubierta, fachada o que afectan a la estructura tienen requisitos específicos distintos a las que solo intervienen en el interior. Los proyectos de ampliación pueden requerir documentación técnica adicional. Gestionamos la tramitación completa desde el inicio del proyecto.',
  },
];

// Ring geográfico del Corredor del Henares (A-2, de oeste a este + Guadalajara).
// Cada zona enlaza a las 2 anteriores y 2 siguientes del anillo (4 vecinos total).
const ZONE_RING = [
  'coslada',
  'san-fernando-de-henares',
  'torrejon-de-ardoz',
  'alcala-de-henares',
  'camarma-de-esteruelas',
  'meco',
  'azuqueca-de-henares',
  'guadalajara',
] as const;

export function getZoneRingNeighbors(slug: string): string[] {
  const i = ZONE_RING.indexOf(slug as typeof ZONE_RING[number]);
  if (i === -1) return [];
  const n = ZONE_RING.length;
  return [
    ZONE_RING[(i - 2 + n) % n],
    ZONE_RING[(i - 1 + n) % n],
    ZONE_RING[(i + 1) % n],
    ZONE_RING[(i + 2) % n],
  ];
}

// Computed from ring topology — kept for backward compatibility with existing templates.
export const RELATED_ZONES: Record<string, string[]> = Object.fromEntries(
  ZONE_RING.map(slug => [slug, getZoneRingNeighbors(slug)])
);
