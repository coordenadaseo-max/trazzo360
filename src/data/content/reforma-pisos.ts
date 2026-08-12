// Contenido de landings reforma-pisos × zona
// CONTENT: intro + body paragraphs por zona
// FAQS:    preguntas de decisión específicas por zona
// META:    meta description por zona

export const CONTENT: Record<string, { intro: string; body: { type: string; text: string; link?: { text: string; serviceSlug: string } }[] }> = {
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
        { type: 'p', text: 'Si las instalaciones de la vivienda están en buen estado, la reforma puede concentrarse en lo que más impacto tiene visualmente: suelos nuevos, baño renovado, cocina actualizada y pintura, sin necesariamente tocar la instalación eléctrica o la fontanería.', link: { text: 'baño renovado', serviceSlug: 'reforma-banos' } },
        { type: 'h3', text: 'Suelos en una reforma de piso: qué opciones hay y cuánto cuestan' },
        { type: 'p', text: 'El suelo es la superficie que más transforma visualmente una vivienda por euro invertido. Las opciones más comunes: porcelánico de gran formato, tarima flotante de laminado AC5, o microcemento en salón (requiere preparación de base específica). El presupuesto cerrado incluye materiales, adhesivo, nivelación de base y remates de transición.' },
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
  };

export const FAQS: Record<string, { q: string; a: string }[]> = {
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
  };

export const META: Record<string, string> = {
    'alcala-de-henares':      'Reforma de piso en Alcalá de Henares: estado de instalaciones determina el alcance. Baño, cocina y suelos o reforma integral. Precio cerrado. Desde 18.000€.',
    'torrejon-de-ardoz':      'Reforma de piso en Torrejón de Ardoz: te decimos si sale mejor todo de una vez o por fases según el estado real de las instalaciones. Desde 18.000€.',
    'coslada':                'Reforma de piso en Coslada: revisamos humedades antes de cerrar el precio. Presupuesto que no cambia a mitad de obra. Pisos de los 80 y 90. Desde 18.000€.',
    'san-fernando-de-henares':'Reforma de piso en San Fernando de Henares: alcance muy distinto entre casco antiguo y Parque Roma. Lo evaluamos en visita gratuita. Desde 18.000€.',
    'guadalajara':            'Reforma de piso en Guadalajara: ventanas de PVC con mayor retorno energético en clima continental. Instalaciones y acabados. Precio cerrado. Desde 18.000€.',
    'azuqueca-de-henares':    'Reforma de piso en Azuqueca de Henares: suelos, baño, cocina y pintura en pisos de los 90 con instalaciones en mejor estado. Precio cerrado. Desde 18.000€.',
    'meco':                   'Reforma de piso en Meco: adosados de dos plantas, terrazas y jardines. Más económico haciendo las dos plantas a la vez. Precio cerrado. Desde 18.000€.',
    'camarma-de-esteruelas':  'Reforma de piso en Camarma de Esteruelas: viviendas unifamiliares con cubierta y exterior. Definimos prioridades en visita gratuita. Desde 18.000€.',
  };
