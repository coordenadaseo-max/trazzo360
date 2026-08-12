// Contenido de landings locales-comerciales × zona
// CONTENT: intro + body paragraphs por zona
// FAQS:    preguntas de decisión específicas por zona
// META:    meta description por zona

export const CONTENT: Record<string, { intro: string; body: { type: string; text: string; link?: { text: string; serviceSlug: string } }[] }> = {
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
  };

export const FAQS: Record<string, { q: string; a: string }[]> = {
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
  };

export const META: Record<string, string> = {
    'alcala-de-henares':      'Reforma de local comercial en Alcalá de Henares: tramitamos licencia de actividad en paralelo con la obra. Hostelería, comercio, clínicas. Precio cerrado.',
    'torrejon-de-ardoz':      'Reforma de local en Torrejón de Ardoz: tramitación de licencia más ágil que en Alcalá para muchos usos. Casco urbano o polígono industrial. Precio cerrado.',
    'coslada':                'Reforma de local comercial en Coslada: casco urbano o polígono industrial. Instalación desde cero o reforma de local existente. Plazo garantizado en contrato.',
    'san-fernando-de-henares':'Reforma de local comercial en San Fernando de Henares: zona industrial o casco. Régimen de licencia según el uso. Precio cerrado, plazo garantizado.',
    'guadalajara':            'Reforma de local comercial en Guadalajara: tramitación de licencia más ágil que en el Corredor madrileño. Proyecto técnico incluido en el precio cerrado.',
    'azuqueca-de-henares':    'Reforma de local en Azuqueca de Henares: declaración responsable para usos sin licencia clasificada. Plazos reales confirmados en primera reunión.',
    'meco':                   'Reforma de local comercial en Meco: tramitación ágil en municipio pequeño. Naves en polígono con instalación completa desde cero. Precio cerrado.',
    'camarma-de-esteruelas':  'Reforma de local comercial en Camarma de Esteruelas: plazos predecibles en municipio pequeño. Comercios, consultorios y oficinas. Precio cerrado.',
  };
