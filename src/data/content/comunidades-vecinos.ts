// Contenido de landings comunidades-vecinos × zona
// CONTENT: intro + body paragraphs por zona
// FAQS:    preguntas de decisión específicas por zona
// META:    meta description por zona

export const CONTENT: Record<string, { intro: string; body: { type: string; text: string; link?: { text: string; serviceSlug: string } }[] }> = {
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
  };

export const FAQS: Record<string, { q: string; a: string }[]> = {
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
  };

export const META: Record<string, string> = {
    'alcala-de-henares':      'Obras en comunidades de vecinos en Alcalá de Henares: cubiertas, portales y ascensores en edificios de los 70–80. Presupuesto con documentación para junta.',
    'torrejon-de-ardoz':      'Obras en comunidades de vecinos en Torrejón de Ardoz: IEE y acceso a ayudas de rehabilitación de la Comunidad de Madrid. Presupuesto listo para junta.',
    'coslada':                'Obras en comunidades de vecinos en Coslada: humedades por capilaridad en plantas bajas. Presupuesto con fotografías y desglose para presentar en junta.',
    'san-fernando-de-henares':'Obras en comunidades de vecinos en San Fernando de Henares: distintas necesidades según la época del edificio. Asesoramos sobre la mayoría necesaria.',
    'guadalajara':            'Obras en comunidades de vecinos en Guadalajara: permisos más ágiles que en municipios madrileños. Presupuesto con documentación completa para junta.',
    'azuqueca-de-henares':    'Obras en comunidades de vecinos en Azuqueca de Henares: edificios de los 90 con necesidades de mantenimiento. Documentación completa para junta incluida.',
    'meco':                   'Obras en comunidades de vecinos en Meco: urbanizaciones con viales, cercas y zonas comunes exteriores. Coordinación con presidente o administrador de fincas.',
    'camarma-de-esteruelas':  'Obras en comunidades de vecinos en Camarma de Esteruelas: comunidades pequeñas con decisiones más rápidas. Presupuesto con documentación para junta.',
  };
