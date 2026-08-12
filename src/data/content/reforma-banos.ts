// Contenido de landings reforma-banos × zona
// CONTENT: intro + body paragraphs por zona
// FAQS:    preguntas de decisión específicas por zona
// META:    meta description por zona

export const CONTENT: Record<string, { intro: string; body: { type: string; text: string; link?: { text: string; serviceSlug: string } }[] }> = {
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
  };

export const FAQS: Record<string, { q: string; a: string }[]> = {
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
  };

export const META: Record<string, string> = {
    'alcala-de-henares':      'Reforma de baño en Alcalá de Henares: cambio de bañera por ducha o reforma completa. Fontanería evaluada en visita técnica. Desde 3.200€. Precio cerrado.',
    'torrejon-de-ardoz':      'Reforma de baño en Torrejón de Ardoz: reforma completa en 1 a 3 semanas. Planificamos el plazo para minimizar días sin servicio. Desde 3.200€.',
    'coslada':                'Reforma de baño en Coslada: revisamos humedades y fontanería oculta antes de presupuestar. Baños renovados con gran formato. Desde 3.200€.',
    'san-fernando-de-henares':'Reforma de baño en San Fernando de Henares: alcance según la antigüedad del edificio. Impermeabilización siempre incluida. Precio cerrado. Desde 3.200€.',
    'guadalajara':            'Reforma de baño en Guadalajara: fontanería original de los 70–80 evaluada en visita. Opciones de accesibilidad sin obra adicional mayor. Desde 3.200€.',
    'azuqueca-de-henares':    'Reforma de baño en Azuqueca de Henares: modernización de acabados sin tocar instalaciones en pisos de los 90. Alicatado, sanitarios y mueble. Desde 3.200€.',
    'meco':                   'Reforma de baño en Meco: baños de 6 a 9 m² en adosados con más opciones que un piso de bloque. Duchas de obra a medida. Precio cerrado. Desde 3.200€.',
    'camarma-de-esteruelas':  'Reforma de baño en Camarma de Esteruelas: baños amplios para diseñar desde cero. Varios baños, distintos alcances. Precio cerrado. Desde 3.200€.',
  };
