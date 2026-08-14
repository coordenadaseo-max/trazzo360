// Contenido de landings reforma-banos × zona — Tanda F1 (Prompt F v2)
// M1 = intro hero (45-60 palabras, keyword en primera frase)
// M2 = diagnóstico del parque residencial × zona (h3 + 3 párrafos, 180-260 palabras)
// M3 = permisos y logística (h3 + 2 párrafos, 120-160 palabras)
// M4 = decisión clave de presupuesto + enlace cruzado (h3 + párrafo, 120-160 palabras)

export const CONTENT: Record<string, { intro: string; body: { type: string; text: string; link?: { text: string; serviceSlug: string } }[] }> = {

  'alcala-de-henares': {
    intro: 'En la reforma de baño en Alcalá de Henares, el año de construcción del edificio define el alcance real. Los pisos del casco antiguo de los años 60 y 70 casi siempre necesitan renovar la fontanería además de los acabados. Los de barrios más recientes pueden limitarse a alicatado, sanitarios y mueble. La visita técnica gratuita lo determina antes de comprometer cualquier número.',
    body: [
      { type: 'h3', text: 'Baños en el casco de Alcalá: lo que hay detrás del alicatado original' },
      { type: 'p', text: 'En los pisos del casco de Alcalá construidos entre los años 60 y 70, la mayoría de los baños tienen entre 3 y 4 metros cuadrados con bañera de hierro colado original, alicatado de pieza pequeña y fontanería que no se ha tocado desde la construcción. La solera, en muchos casos, no tiene la impermeabilización que se aplica hoy en cualquier reforma de baño.' },
      { type: 'p', text: 'Al derribar el alicatado de uno de estos baños se ve el estado real del soporte. Si hay humedades acumuladas en la base, hay que resolverlas antes de colocar el nuevo revestimiento. Si no se contemplan en el presupuesto y aparecen durante la obra, el coste se desvía. La visita técnica evalúa el estado del soporte antes de cerrar el precio, no durante la ejecución.' },
      { type: 'p', text: 'En barrios como El Chorrillo, Nueva Alcalá o Reyes Católicos, las viviendas son más recientes y las instalaciones suelen estar en mejor estado. Allí la reforma puede centrarse en cambiar el alicatado, los sanitarios y el mueble sin necesidad de tocar la fontanería. La diferencia de presupuesto entre los dos escenarios puede ser de varios miles de euros, y determinarla en la visita evita sorpresas.' },
      { type: 'h3', text: 'Permisos y logística de obra en Alcalá de Henares' },
      { type: 'p', text: 'El Ayuntamiento de Alcalá de Henares exige licencia de obra menor cuando se modifica la posición de los desagües o se cambia la distribución del baño. Cuando la reforma se limita a cambiar revestimientos y sanitarios en la misma posición, basta con comunicación previa. En la visita determinamos qué trámite aplica a tu caso y nos encargamos de gestionarlo sin que tengas que hacer ningún papel.' },
      { type: 'p', text: 'En el centro histórico y en portales sin ascensor, el transporte de escombros se organiza en turnos para no bloquear el acceso durante toda la jornada. La solicitud del contenedor en vía pública ante el Ayuntamiento tarda habitualmente entre 48 y 72 horas. El tiempo de tramitación queda incorporado al calendario de obra antes de que empiece el derribo.' },
      { type: 'h3', text: 'Renovar la fontanería durante la reforma: la decisión que más afecta al presupuesto total' },
      { type: 'p', text: 'Si el baño ya está abierto y las tuberías llevan más de 25 años sin revisarse, renovarlas en la misma obra tiene un coste marginal comparado con tener que desmontar el baño reformado unos años después si las instalaciones fallan. El precio cerrado cubre lo que se incluye en el proyecto; si al abrir aparece algo no contemplado, se comunica antes de actuar y se decide junto con el cliente antes de continuar. Cuando el alcance se extiende a otras estancias o instalaciones de la vivienda, puede resultar más eficiente plantear una reforma integral que coordinar varias obras en momentos distintos.', link: { text: 'reforma integral', serviceSlug: 'reformas-integrales' } },
    ],
  },

  'torrejon-de-ardoz': {
    intro: 'La reforma de baño en Torrejón de Ardoz en los pisos de los años 80 parte de un punto de partida muy concreto: baños de 4 a 5 metros cuadrados con bañera y alicatado original que no se ha renovado desde entonces. La primera decisión es si conviene cambiar solo la bañera o hacer la reforma completa aprovechando que el baño ya se abre.',
    body: [
      { type: 'h3', text: 'El parque de baños en Torrejón: los bloques de los años 80 y su estado real' },
      { type: 'p', text: 'La mayor parte de la vivienda residencial de Torrejón de Ardoz se construyó entre los años 70 y 90. En esos bloques, los baños tienen habitualmente entre 4 y 5 metros cuadrados, bañera empotrada y alicatado de pieza de 20 por 25 centímetros que no se ha renovado desde la construcción. La fontanería, en muchos casos, tampoco se ha tocado.' },
      { type: 'p', text: 'Cuando el alicatado lleva 35 o 40 años en el mismo lugar, el soporte puede presentar pérdida de adherencia o grietas que no se aprecian sin quitar las piezas. Si al derribar el alicatado el soporte está en buen estado, la reforma avanza directamente a impermeabilización y colocación del nuevo revestimiento. Si aparecen problemas en el soporte, se comunica antes de actuar.' },
      { type: 'p', text: 'En las urbanizaciones más recientes de Torrejón como Parque Europas o Soto del Henares, las viviendas son de los años 90 y 2000 y el estado de los baños suele ser mejor. Allí la reforma puede centrarse en cambiar el alicatado, el mueble y los sanitarios sin necesidad de tocar las instalaciones de fondo. La visita técnica determina en cuál de los dos escenarios está la vivienda.' },
      { type: 'h3', text: 'Coordinar la reforma en un bloque de Torrejón: horarios, comunidad y escombros' },
      { type: 'p', text: 'En los bloques de Torrejón de 6 a 8 plantas, la reforma de baño requiere coordinar los horarios de ruido con la comunidad de propietarios. Los trabajos de demolición del alicatado se concentran en las franjas horarias permitidas por la normativa municipal para no afectar a los vecinos durante el resto de la jornada.' },
      { type: 'p', text: 'La solicitud del contenedor de escombros en vía pública se tramita con antelación para que esté disponible el día que empieza el derribo. El vaciado del contenedor se gestiona durante la obra para que no ocupe la plaza de aparcamiento o el carril más tiempo del necesario. Estos trámites quedan incluidos en la gestión de la obra sin gestión adicional por parte del propietario.' },
      { type: 'h3', text: 'Cambiar solo la bañera o reformar todo el baño: la decisión en Torrejón' },
      { type: 'p', text: 'Cambiar la bañera por un plato de ducha sin tocar el alicatado tiene sentido cuando el revestimiento está en buen estado y la instalación no presenta problemas. Si el alicatado tiene grietas, pérdida de adherencia o el baño lleva 35 años sin renovarse, hacer la reforma completa aprovechando que ya se abre el baño es más eficiente que volver a intervenir en pocos años. El precio cerrado especifica exactamente qué está incluido; si durante la reforma aparece algo no previsto, se comunica antes de actuar. Si hay otras estancias en la vivienda que también necesitan intervención, puede valer la pena valorar el alcance conjunto antes de dividir los trabajos en varias obras.', link: { text: 'valorar el alcance conjunto', serviceSlug: 'reformas-integrales' } },
    ],
  },

  'coslada': {
    intro: 'Reformar el baño en Coslada en los bloques de vivienda social de los años 70 y 80 tiene un punto de partida concreto: baños de 2,5 a 3 metros cuadrados sin ventilación natural y con humedad acumulada en los soportes. Antes de elegir el alicatado nuevo conviene resolver lo que hay detrás del viejo. La visita técnica gratuita evalúa el estado antes de cerrar el precio.',
    body: [
      { type: 'h3', text: 'Los baños de la vivienda social de Coslada: espacio reducido y humedad como punto de partida' },
      { type: 'p', text: 'Los bloques de vivienda social construidos en Coslada entre los años 70 y 80 tienen baños de entre 2,5 y 3 metros cuadrados, sin ventilación natural y con fontanería original que puede llevar décadas sin revisarse. En muchos de estos baños, la ausencia de extracción de aire ha generado condensación acumulada en las paredes que no siempre es visible con el alicatado puesto.' },
      { type: 'p', text: 'Al retirar el alicatado en estos baños, es habitual encontrar humedad en el soporte, especialmente en las esquinas del suelo y en la base de las paredes. Si no se trata antes de colocar el nuevo revestimiento, la humedad reaparece en pocos meses. La impermeabilización de las zonas expuestas al agua va incluida en el presupuesto desde la primera partida, no como extra que aparece después de firmar.' },
      { type: 'p', text: 'La falta de ventilación natural también condiciona la elección del acabado: los materiales más porosos y los revestimientos con muchas juntas acumulan más humedad. En la visita de diseño orientamos sobre qué formatos y materiales aguantan mejor en un baño cerrado de estas características, sin necesidad de elevar el presupuesto de materiales de manera significativa.' },
      { type: 'h3', text: 'Permisos y gestión de escombros en Coslada' },
      { type: 'p', text: 'En los bloques de Coslada con acceso desde calle estrecha o sin zona de carga y descarga habilitada, la solicitud del contenedor de escombros requiere verificar qué espacio de la vía pública puede ocuparse y por cuánto tiempo. El Ayuntamiento de Coslada tramita estas autorizaciones con plazos de 48 a 72 horas. El calendario de derribo se planifica según la disponibilidad del contenedor.' },
      { type: 'p', text: 'Los trabajos de demolición con martillo se concentran en las franjas horarias permitidas por la normativa de ruidos del municipio. En bloques con vecinos en plantas adyacentes, comunicamos el calendario de demolición con antelación para evitar molestias no previstas. Todo esto forma parte de la gestión de la obra sin que suponga ninguna gestión adicional por parte del propietario.' },
      { type: 'h3', text: 'La impermeabilización en la reforma de baño de Coslada: incluida desde el principio' },
      { type: 'p', text: 'En baños con historial de humedad o sin ventilación natural, la impermeabilización de la solera y la base de las paredes es la partida que define si el baño reformado dura o si los problemas reaparecen. El precio cerrado la incluye desde el primer presupuesto, no como extra que se añade al abrir el baño. Si al derribar el alicatado aparece un problema no visible en la visita, se comunica antes de actuar y se presupuesta por separado antes de continuar. Cuando el baño es solo el primer paso de una intervención más amplia, valorar el conjunto antes de comprometer presupuesto puede evitar una segunda movilización de gremios.', link: { text: 'valorar el conjunto', serviceSlug: 'reformas-integrales' } },
    ],
  },

  'san-fernando-de-henares': {
    intro: 'La reforma de baño en San Fernando de Henares tiene un alcance muy distinto según si la vivienda está en el casco antiguo o en las urbanizaciones de Parque Roma y Parque Henares. En el casco antiguo la fontanería original puede condicionar el alcance real. En las urbanizaciones de los años 90 el estado de las instalaciones suele permitir centrarse solo en los acabados.',
    body: [
      { type: 'h3', text: 'Casco antiguo o urbanización de los 90: el parque de baños en San Fernando de Henares' },
      { type: 'p', text: 'En San Fernando de Henares conviven dos tipos de vivienda con condiciones de partida muy distintas para una reforma de baño. En el casco antiguo y en los bloques construidos en los años 70, los baños tienen fontanería original que en muchos casos no se ha revisado, y el soporte puede presentar humedades acumuladas no visibles con el revestimiento en su sitio.' },
      { type: 'p', text: 'En las urbanizaciones de Parque Roma y Parque Henares construidas en los años 90, las instalaciones suelen estar en mejor estado. En esos pisos, la reforma puede centrarse en cambiar el alicatado, los sanitarios y el mueble sin necesidad de renovar la fontanería de fondo. La diferencia de presupuesto entre los dos escenarios puede ser significativa, y la visita técnica lo aclara antes de comprometer cualquier número.' },
      { type: 'p', text: 'La antigüedad del edificio orienta, pero no determina el alcance. En algunos pisos del casco antiguo las instalaciones ya se han renovado en obras anteriores. En otros de construcción más reciente puede haber problemas por filtraciones desde el piso superior. El estado real solo se evalúa en la visita técnica antes de cerrar el precio.' },
      { type: 'h3', text: 'Permisos para reformar el baño en San Fernando de Henares' },
      { type: 'p', text: 'El Ayuntamiento de San Fernando de Henares exige licencia de obra menor cuando la reforma implica mover desagües, modificar la posición del inodoro o la ducha, o intervenir en la estructura. Cuando la reforma se limita a cambiar el revestimiento y los sanitarios en la misma posición, basta con comunicación previa. En la visita determinamos qué trámite aplica y lo gestionamos sin que el propietario tenga que hacer ningún papel.' },
      { type: 'p', text: 'En bloques con portero o con acceso controlado por la comunidad, coordinamos el acceso y los horarios de trabajo con antelación. La solicitud del contenedor de escombros en vía pública se tramita antes del inicio de la obra para que esté disponible el día que empieza el derribo. El tiempo de tramitación está incorporado al calendario de obra.' },
      { type: 'h3', text: 'Cuánto puede variar el presupuesto según el estado del baño en San Fernando' },
      { type: 'p', text: 'Dos baños del mismo tamaño en San Fernando pueden tener presupuestos muy distintos si uno necesita renovar las instalaciones y el otro puede conservarlas. El precio cerrado especifica exactamente qué está incluido en cada partida; si al abrir el baño aparece algo no contemplado, se comunica antes de actuar y el propietario decide antes de continuar. Cuando el baño no es el único espacio que necesita intervención en la vivienda, abordar el conjunto en una única obra puede ser más eficiente que planificar varias intervenciones separadas.', link: { text: 'única obra', serviceSlug: 'reformas-integrales' } },
    ],
  },

  'guadalajara': {
    intro: 'La reforma de baño en Guadalajara tiene dos puntos de partida muy distintos según si la vivienda está en el centro histórico o en los barrios de expansión de los años 2000. En el centro, la fontanería original puede llevar décadas sin tocarse. En la periferia más reciente, las instalaciones suelen estar en buen estado y la reforma puede centrarse en los acabados.',
    body: [
      { type: 'h3', text: 'El parque de baños en Guadalajara: centro histórico frente a expansión reciente' },
      { type: 'p', text: 'En Guadalajara capital existen dos tipos de parque residencial con condiciones muy distintas para una reforma de baño. En los edificios del centro histórico y en los construidos antes de los años 80, es habitual encontrar fontanería original con décadas de uso, baños de 3 a 4 metros cuadrados y soportes que pueden presentar humedades acumuladas no visibles desde fuera.' },
      { type: 'p', text: 'En los barrios de expansión construidos desde los años 90 en adelante, las instalaciones suelen estar en mejor estado y los baños son algo más amplios. Allí la reforma puede concentrarse en cambiar el alicatado, los sanitarios y el mueble sin necesidad de abrir la fontanería. Esta diferencia en el estado de partida es lo que más condiciona el presupuesto antes de elegir ningún material.' },
      { type: 'p', text: 'El estado real de las instalaciones no puede determinarse solo por el año del edificio: en algunos pisos del centro ya se han renovado, mientras que en viviendas de construcción más reciente puede haber problemas por uso intensivo o por intervenciones anteriores mal resueltas. La visita técnica gratuita evalúa el estado real y lo incorpora al presupuesto antes de comprometer nada.' },
      { type: 'h3', text: 'Permisos de obra en Guadalajara: tramitación en el Ayuntamiento provincial' },
      { type: 'p', text: 'El Ayuntamiento de Guadalajara, como capital provincial, tiene sus propios procedimientos para la tramitación de licencias de obra menor. Cuando la reforma de baño implica mover desagües o modificar instalaciones empotradas, hay que solicitar licencia. Cuando se limita a cambiar revestimientos y sanitarios en la misma posición, basta con comunicación previa. Los plazos son similares a los de los municipios del Corredor, entre 5 y 15 días hábiles para obra menor.' },
      { type: 'p', text: 'Para obras en el centro histórico de Guadalajara, el Servicio de Urbanismo puede requerir documentación adicional si el edificio tiene algún tipo de protección patrimonial. En la visita técnica identificamos si aplica ese supuesto y qué documentación hay que preparar. La gestión de permisos queda incluida en el presupuesto cuando la normativa lo requiere.' },
      { type: 'h3', text: 'Adaptar el baño en Guadalajara: mejoras de accesibilidad sin obra adicional mayor' },
      { type: 'p', text: 'Si la vivienda va a usarla durante muchos años la misma persona, o si hay personas mayores en el hogar, añadir mejoras de accesibilidad durante la reforma de baño tiene un coste muy inferior a hacerlas en una obra posterior: plato de ducha al nivel del suelo, barra de apoyo abatible o espacio libre lateral al inodoro. Hacerlo una vez terminado el baño implica volver a abrir el revestimiento. Cuando la reforma del baño es el punto de partida de una intervención más amplia, puede tener más sentido plantear una reforma integral que coordinar varias obras por separado.', link: { text: 'reforma integral', serviceSlug: 'reformas-integrales' } },
    ],
  },

  'azuqueca-de-henares': {
    intro: 'En la reforma de baño en Azuqueca de Henares, los bloques de los años 80 y 90 son el parque residencial más habitual. Las instalaciones de esa época suelen aguantar mejor que las de los años 60 y 70, lo que permite centrar la reforma en los acabados sin necesidad de abrir la fontanería. La visita técnica lo confirma antes de cerrar el precio.',
    body: [
      { type: 'h3', text: 'Los baños de los bloques de los años 80 y 90 en Azuqueca de Henares' },
      { type: 'p', text: 'La mayor parte del parque residencial de Azuqueca de Henares se construyó entre los años 80 y 90, cuando los estándares de construcción mejoraron respecto a décadas anteriores. Los baños de esa época tienen habitualmente entre 4 y 5 metros cuadrados, con fontanería que en muchos casos puede aprovecharse si no ha dado problemas y si las tuberías observables no presentan deterioro evidente.' },
      { type: 'p', text: 'Cuando las instalaciones aguantan, la reforma puede concentrarse en lo que más transforma visualmente el baño: cambio del alicatado por piezas de gran formato, sustitución de los sanitarios por modelos de suspensión, mueble con almacenaje integrado y mampara de cristal en lugar de cortina. El resultado es equivalente al de una reforma completa con un plazo más corto y un presupuesto más ajustado.' },
      { type: 'p', text: 'No todas las instalaciones de los bloques de esa época están en el mismo estado. En algunos pisos la fontanería ya se ha renovado en intervenciones anteriores; en otros no se ha tocado desde la construcción. La visita técnica evalúa el estado real de las instalaciones observables antes de cerrar el precio y determina si conviene incluir la renovación de fontanería en el alcance.' },
      { type: 'h3', text: 'Coordinación con la comunidad de propietarios en los bloques de Azuqueca' },
      { type: 'p', text: 'En los bloques de Azuqueca de Henares, la reforma de baño requiere coordinar con la comunidad el uso del portal para el transporte de materiales y escombros. Los trabajos de demolición se concentran en los horarios permitidos por la normativa municipal para no afectar a los vecinos durante las horas de descanso. Lo comunicamos con antelación y lo incluimos en el calendario de obra.' },
      { type: 'p', text: 'La solicitud del contenedor de escombros en vía pública se tramita antes de que empiece la obra. En los bloques con zona de carga y descarga limitada, coordinamos con la comunidad el espacio disponible para no interferir en el acceso. En la visita técnica identificamos cómo se organiza la logística antes de fijar el calendario de inicio.' },
      { type: 'h3', text: 'Reformar baño y cocina al mismo tiempo en Azuqueca: por qué suele ser más eficiente' },
      { type: 'p', text: 'Si el baño y la cocina necesitan intervención en un horizonte de pocos años, hacerlo en la misma obra reduce el coste de movilización de los gremios de fontanería y electricidad, que trabajan en los dos espacios en la misma visita. El desescombro se hace una sola vez y el tiempo total sin uso de los dos espacios es menor que si se hacen en dos obras separadas. Cuando la intervención se extiende a más estancias de la vivienda, puede resultar más eficiente plantear una reforma integral que programar varias obras por separado.', link: { text: 'reforma integral', serviceSlug: 'reformas-integrales' } },
    ],
  },

  'meco': {
    intro: 'La reforma de baño en Meco tiene características que no se dan en los pisos de bloque: los adosados y las viviendas unifamiliares de la zona tienen baños principales de 6 a 9 metros cuadrados, lo que abre opciones que no son posibles en superficies reducidas. Ducha de obra a medida, doble lavabo o separación de zona húmeda y de aseo son opciones reales en estas viviendas.',
    body: [
      { type: 'h3', text: 'Baños de adosados y unifamiliares en Meco: más metros y más opciones de diseño' },
      { type: 'p', text: 'La mayoría de las viviendas en Meco son adosados y casas unifamiliares construidas entre los años 90 y los primeros años 2000. El baño principal de estas viviendas suele tener entre 6 y 9 metros cuadrados, dimensiones que permiten repensar la distribución con opciones que no caben en los baños de 4 metros cuadrados de los pisos de bloque.' },
      { type: 'p', text: 'Con esa superficie, la reforma puede incluir ducha de obra a medida con mampara fija de cristal, doble lavabo con encimera corrida y almacenaje integrado, o separación de la zona de ducha y la zona de inodoro. Estas opciones son las que más diferencian el resultado del estado original y su coste es proporcional al resultado visual y funcional que aportan.' },
      { type: 'p', text: 'Los baños secundarios de estas viviendas, habitualmente de 4 a 5 metros cuadrados, tienen un alcance más ajustado: cambio de sanitarios, alicatado y mueble sin necesariamente tocar la distribución. En la visita decidimos el alcance para cada baño por separado, con el presupuesto detallado de cada uno para que la decisión se tome con los datos sobre la mesa.' },
      { type: 'h3', text: 'Logística de obra en una vivienda de Meco: ventajas frente al piso de bloque' },
      { type: 'p', text: 'Las obras en adosados y viviendas unifamiliares tienen una ventaja logística respecto a los pisos de bloque: no hay comunidad de propietarios que coordinar ni portal compartido por el que pasar los materiales. El acceso directo desde la calle reduce los tiempos de carga y descarga y facilita la gestión del contenedor de escombros, que puede colocarse directamente frente a la vivienda.' },
      { type: 'p', text: 'Cuando la vivienda tiene cubierta propia, la visita técnica verifica si hay alguna filtración que pueda afectar a los baños antes de cerrar el presupuesto. Una filtración desde cubierta que llega al baño del piso superior no se resuelve solo reformando el baño: hay que actuar también en el origen. Si aplica, lo incluimos en el alcance antes de empezar.' },
      { type: 'h3', text: 'Ducha de obra a medida en Meco: cuándo tiene sentido frente al plato prefabricado' },
      { type: 'p', text: 'Una ducha de obra sin plato prefabricado permite elegir forma, tamaño y revestimiento sin las limitaciones de los platos estándar. En un baño de más de 6 metros cuadrados puede diseñarse una ducha de 100 por 100 centímetros o más, con porcelánico de gran formato o resina de cuarzo. El coste es algo mayor que con plato prefabricado, pero el resultado visual y la ausencia de juntas de sellado que deteriorarse con el tiempo justifican la diferencia en los baños principales. Si la vivienda tiene más de un baño o más espacios que reformar, puede valer la pena valorar el conjunto antes de decidir el alcance de cada zona.', link: { text: 'valorar el conjunto', serviceSlug: 'reformas-integrales' } },
    ],
  },

  'camarma-de-esteruelas': {
    intro: 'La reforma de baño en Camarma de Esteruelas parte de un stock residencial concreto: urbanizaciones construidas entre los años 2000 y 2010 con viviendas unifamiliares de calidad media. Los baños tienen materiales de hace 15 a 20 años que ya muestran desgaste y distribuciones que en muchos casos no se han repensado desde la construcción original.',
    body: [
      { type: 'h3', text: 'El parque de baños en Camarma: viviendas de 2000-2010 con 15-20 años de uso' },
      { type: 'p', text: 'Las urbanizaciones de Camarma de Esteruelas se desarrollaron mayoritariamente en los años 2000 y la primera década de los 2010. Las viviendas de esa época tienen baños con materiales que eran estándar en el momento de la construcción pero que con 15 o 20 años de uso ya muestran desgaste: alicatado con juntas manchadas, mampara con perfilería deteriorada y sanitarios que han perdido el acabado.' },
      { type: 'p', text: 'A diferencia de los bloques de los años 70 y 80, las instalaciones de estas viviendas suelen estar en buen estado y no necesitan renovación en la mayoría de los casos. Eso significa que la reforma puede centrarse en lo que más se nota: cambio completo del alicatado, sanitarios nuevos, mueble con mayor almacenaje y mampara de cristal templado sin perfilería visible.' },
      { type: 'p', text: 'La distribución original de estos baños es otro punto a revisar. En algunos casos, la posición del inodoro o la forma de la ducha puede mejorarse moviendo los desagües. En la visita evaluamos si el cambio de distribución está justificado por el resultado que aporta o si la misma distribución con materiales nuevos es suficiente para el objetivo del propietario.' },
      { type: 'h3', text: 'Permisos y normas de obra en las urbanizaciones de Camarma de Esteruelas' },
      { type: 'p', text: 'Algunas urbanizaciones de Camarma tienen normas internas sobre horarios de obra, acceso de vehículos de carga y uso de zonas comunes para el acopio de materiales. Antes de fijar el calendario de obra verificamos qué normativa aplica en la urbanización concreta y la incorporamos a la planificación para no generar incidencias con la comunidad.' },
      { type: 'p', text: 'Para reformas que impliquen mover desagües o modificar instalaciones empotradas hay que solicitar licencia de obra menor al Ayuntamiento de Camarma de Esteruelas. Cuando la reforma se limita a cambiar revestimientos y sanitarios en la misma posición, basta con comunicación previa. Determinamos qué trámite aplica en la visita y nos encargamos de gestionarlo.' },
      { type: 'h3', text: 'Reformar varios baños en Camarma: alcance diferente para cada uno' },
      { type: 'p', text: 'En las viviendas unifamiliares de Camarma con dos o tres baños, no todos necesitan el mismo alcance. El baño principal suele justificar mayor inversión en materiales y en posibles cambios de distribución; los baños secundarios pueden renovarse con alicatado, sanitario y mueble sin tocar la distribución ni las instalaciones de fondo. Hacer los dos o tres en la misma obra reduce el coste de movilización de los gremios y el tiempo total con espacios fuera de servicio. Cuando la reforma se extiende también a otras zonas de la vivienda, puede resultar más eficiente plantear la intervención como una reforma integral desde el principio.', link: { text: 'reforma integral', serviceSlug: 'reformas-integrales' } },
    ],
  },

};

export const FAQS: Record<string, { q: string; a: string }[]> = {

  'alcala-de-henares': [
    {
      q: '¿Cuándo merece la pena renovar la fontanería al reformar el baño en Alcalá?',
      a: 'Si las tuberías llevan más de 25 años sin revisarse y el baño ya está abierto, renovarlas en la misma obra tiene un coste marginal comparado con desmontar el baño reformado unos años después si las instalaciones fallan. La visita técnica evalúa el estado de las instalaciones observables antes de cerrar el precio y lo incluye en el presupuesto cuando está justificado.',
    },
    {
      q: '¿Hace falta licencia para reformar el baño en el casco histórico de Alcalá de Henares?',
      a: 'Depende del alcance. Si la reforma implica mover desagües o cambiar la posición de los sanitarios, se necesita licencia de obra menor en el Ayuntamiento de Alcalá. Si se limita a cambiar revestimientos y sanitarios en la misma posición, basta con comunicación previa. En la visita determinamos qué trámite aplica y nos encargamos de gestionarlo.',
    },
    {
      q: '¿Qué diferencia hay entre reformar un baño del casco antiguo y uno de barrios más nuevos en Alcalá?',
      a: 'Principalmente el estado de las instalaciones. En el casco antiguo, la fontanería puede llevar décadas sin tocarse y conviene evaluarla antes de cerrar el precio. En barrios de los años 80 y 90 como El Chorrillo o Nueva Alcalá, las instalaciones suelen estar en mejor estado y la reforma puede centrarse solo en los acabados. Eso se traduce en una diferencia de presupuesto que puede ser relevante.',
    },
    {
      q: '¿Cómo se gestionan los escombros en portales sin ascensor en el casco de Alcalá?',
      a: 'El transporte de escombros desde el baño hasta el contenedor en vía pública se organiza en turnos para no bloquear el portal durante toda la jornada. En portales sin ascensor, el escombro se saca manualmente en sacos. La autorización del contenedor en vía pública se tramita con 48 a 72 horas de antelación ante el Ayuntamiento. Coordinamos el calendario para minimizar las molestias.',
    },
  ],

  'torrejon-de-ardoz': [
    {
      q: 'Solo tengo un baño en mi piso de Torrejón, ¿cuántos días estaré sin poder usarlo?',
      a: 'En una reforma de baño completa en Torrejón, los primeros días de demolición e instalaciones son los críticos: el baño queda fuera de servicio mientras se hacen el derribo y la renovación de instalaciones, que puede llevar entre 3 y 5 días hábiles. A partir de ahí, el inodoro puede quedar operativo antes de que estén terminados todos los acabados. Planificamos la secuencia para acortar ese periodo al máximo sin comprometer la impermeabilización.',
    },
    {
      q: '¿Es mejor cambiar solo la bañera o aprovechar para reformar todo el baño de una vez en Torrejón?',
      a: 'Depende del estado del alicatado. Si está en buen estado, sin grietas ni pérdida de adherencia, cambiar la bañera por un plato de ducha sin tocar el revestimiento es una opción válida. Si el alicatado lleva 35 o 40 años sin renovarse, hacer la reforma completa aprovechando que ya se abre el baño es más eficiente que dos obras separadas. En la visita evaluamos el estado del alicatado y te damos el coste de cada opción.',
    },
    {
      q: '¿Se necesita autorización de la comunidad para reformar el baño en un bloque de Torrejón?',
      a: 'No para la reforma en sí, que es una intervención en el interior de la vivienda privativa. Lo que sí hay que coordinar con la comunidad es el uso del portal para el transporte de materiales y escombros, y el horario de los trabajos de demolición. Comunicamos el calendario con antelación y organizamos los turnos de trabajo para no interferir en el uso normal del portal.',
    },
    {
      q: '¿Qué suele encontrarse al abrir los baños de los bloques de Torrejón de los años 80?',
      a: 'Lo más habitual es alicatado de pieza pequeña con la adherencia justa después de décadas de uso, fontanería de hierro galvanizado en las tuberías más antiguas y, en algunos casos, humedad en el soporte en las esquinas de suelo y pared. Al retirar el revestimiento se ve el estado real. Si hay algo no previsto, lo comunicamos antes de actuar y lo valoramos por separado antes de continuar.',
    },
  ],

  'coslada': [
    {
      q: '¿Cómo se trata la humedad en baños sin ventilación natural en Coslada?',
      a: 'La impermeabilización correcta de las zonas expuestas al agua es la primera medida. Después, para evitar que vuelva a acumularse condensación, la reforma incluye un extractor de aire que cumpla los caudales mínimos de ventilación. Si el baño no tiene salida al exterior, se puede extraer el aire por el conducto de extracción del edificio o instalar un ventilador con temporizador independiente. Lo valoramos en la visita según la configuración del baño.',
    },
    {
      q: '¿Qué solución hay para ganar espacio percibido en un baño de 2,5 metros cuadrados en Coslada?',
      a: 'Las tres decisiones que más amplían un baño pequeño sin cambiar la distribución son: plato de ducha en lugar de bañera, mueble de lavabo con almacenaje integrado que ocupa el mismo espacio que el actual, y alicatado de gran formato que reduce la cantidad de juntas. El resultado visual es muy diferente al estado original sin necesidad de obra pesada. En la visita de diseño te mostramos ejemplos de baños de dimensiones similares ya reformados.',
    },
    {
      q: '¿Cuándo conviene revisar las tuberías en los bloques de vivienda social de Coslada?',
      a: 'Si el edificio es de los años 70 o 80 y las tuberías no se han revisado, conviene evaluarlas con el baño ya abierto. Renovarlas durante la reforma tiene un coste adicional menor que volver a abrir todo en una obra posterior independiente. La visita técnica evalúa el estado de las instalaciones observables y lo incluye en el presupuesto cuando está justificado por el estado real.',
    },
    {
      q: '¿Puede protegerse el resto del piso del polvo de la demolición en Coslada?',
      a: 'Sí. Protegemos el acceso a la zona de obra con plásticos de sellado y minimizamos la extensión del polvo al resto de la vivienda. En pisos pequeños donde el pasillo da directamente al salón, el sellado es especialmente importante durante la fase de derribo del alicatado. Los muebles de las habitaciones contiguas no se mueven salvo que el acceso a la obra lo requiera, y en ese caso se coordina contigo con antelación.',
    },
  ],

  'san-fernando-de-henares': [
    {
      q: '¿Cuánto puede variar el presupuesto entre un baño del casco antiguo y uno en Parque Roma de San Fernando?',
      a: 'La diferencia puede ser relevante si uno de los baños necesita renovar la fontanería y el otro no. En el casco antiguo, las instalaciones pueden llevar décadas sin tocarse; en Parque Roma y Parque Henares, la fontanería suele estar en mejor estado. Cuando no hace falta renovar las instalaciones, el presupuesto de la reforma puede ser notablemente menor. La visita técnica determina el escenario real antes de cerrar ningún número.',
    },
    {
      q: 'Solo tengo un baño en San Fernando, ¿cómo se minimiza el tiempo sin poder usarlo?',
      a: 'Planificamos la secuencia de obra para que la fase sin baño operativo sea la más corta posible. Los primeros días de derribo e instalaciones son los críticos. A partir de ahí, el inodoro puede quedar operativo antes de que estén terminados todos los acabados. Si el plazo es especialmente crítico, lo valoramos en la visita y diseñamos la secuencia con ese objetivo como prioritario.',
    },
    {
      q: '¿Hay que pedir permiso al Ayuntamiento de San Fernando de Henares para reformar el baño?',
      a: 'Depende del alcance. Si la reforma implica mover desagües o cambiar la posición de algún sanitario, se necesita licencia de obra menor. Si se limita a cambiar el alicatado, los sanitarios y el mueble en la misma posición, basta con comunicación previa. Determinamos qué trámite aplica en la visita y nos encargamos de gestionarlo sin que el propietario tenga que gestionar ningún papel.',
    },
    {
      q: '¿Qué conviene preparar antes de la visita técnica para reformar el baño en San Fernando?',
      a: 'Con la superficie aproximada del baño, una descripción del alcance previsto y si hay alguna restricción de plazo o presupuesto, la visita puede ser productiva desde el inicio. Si tienes alguna referencia de estilo o material que te guste, mencionarla ayuda a orientar las opciones. No es necesario tener nada decidido: la visita puede cubrir también la elección de alcance y materiales.',
    },
  ],

  'guadalajara': [
    {
      q: '¿Se puede reformar el baño en Guadalajara sin quitar el alicatado existente?',
      a: 'Sí, cuando el alicatado está en buen estado y no hay síntomas de humedad. En ese caso, cambiar la bañera, los sanitarios y el mueble sobre el revestimiento existente es una opción válida y más rápida. Si el alicatado tiene pérdida de adherencia, grietas o síntomas de humedad, conviene evaluar si aguanta otro ciclo de vida antes de decidir conservarlo. La visita técnica lo determina.',
    },
    {
      q: '¿Qué mejoras de accesibilidad se pueden añadir a la reforma de baño en Guadalajara?',
      a: 'Las mejoras más habituales son: plato de ducha al nivel del suelo sin escalón, barra de apoyo abatible junto al inodoro y espacio libre lateral al inodoro para maniobra o apoyo. Añadirlas durante la reforma tiene un coste muy inferior a hacerlas en una obra posterior porque el baño ya está abierto. En la visita te mostramos qué opciones encajan con la distribución de tu baño concreto.',
    },
    {
      q: '¿Hace falta permiso del Ayuntamiento de Guadalajara para reformar el baño?',
      a: 'Si la reforma implica mover desagües o cambiar la posición de los sanitarios, se necesita licencia de obra menor en el Ayuntamiento de Guadalajara. Si se limita a cambiar revestimientos y sanitarios en la misma posición, basta con comunicación previa. Para viviendas en el centro histórico con protección patrimonial puede requerirse documentación adicional. Determinamos qué aplica en la visita y nos encargamos de los trámites.',
    },
    {
      q: '¿Cómo se comparan correctamente dos presupuestos de reforma de baño en Guadalajara?',
      a: 'Revisando qué incluye cada uno en fontanería, gestión de escombros y calidad de materiales. Un presupuesto que excluye la renovación de fontanería puede parecer más bajo pero tiene mayor riesgo de desvío si aparecen instalaciones deterioradas al abrir. Pide que cada presupuesto especifique exactamente qué está incluido en cada partida antes de comparar el total.',
    },
  ],

  'azuqueca-de-henares': [
    {
      q: '¿Cuándo merece la pena reformar el baño y la cocina al mismo tiempo en Azuqueca?',
      a: 'Cuando los dos espacios necesitan intervención en un horizonte de 2 a 3 años. Los gremios de fontanería y electricidad trabajan en ambos espacios en la misma movilización, lo que reduce el coste total y el tiempo sin poder usar los dos espacios. Si el presupuesto no alcanza para hacerlo todo a la vez, en la visita valoramos qué tiene más urgencia y cuál puede esperar.',
    },
    {
      q: '¿Qué suele encontrarse al abrir los baños de los bloques de los años 80-90 en Azuqueca de Henares?',
      a: 'En la mayoría de los casos, el soporte está en buen estado y las instalaciones pueden aprovecharse total o parcialmente. Lo más habitual son juntas de sellado deterioradas en la zona de ducha o bañera y adherencia justa en las piezas de alicatado más antiguas. Si al abrir aparece algo no previsto, se comunica antes de actuar y se presupuesta por separado antes de continuar.',
    },
    {
      q: '¿Cuánto tiempo dura una reforma de baño en Azuqueca de Henares?',
      a: 'Una reforma completa de baño en Azuqueca (alicatado, sanitarios, mueble, instalaciones y mampara) dura habitualmente entre 2 y 3 semanas en un baño de 4 a 5 metros cuadrados. Si las instalaciones están en buen estado y no hay que tocarlas, el plazo puede acortarse. Los plazos exactos se fijan en el contrato antes de empezar la obra.',
    },
    {
      q: '¿Puede reformarse el baño mientras el resto del piso está habitado en Azuqueca?',
      a: 'Sí, aunque los primeros días de demolición son los más incómodos por el polvo y el ruido. Protegemos el acceso a la zona de obra con plásticos para limitar la extensión del polvo al resto de la vivienda. Si el piso tiene un único baño, planificamos la secuencia para que el inodoro vuelva a estar operativo lo antes posible durante la fase de acabados.',
    },
  ],

  'meco': [
    {
      q: '¿Qué ventajas tiene reformar el baño en un adosado de Meco frente a un piso de bloque?',
      a: 'Principalmente el tamaño. Con baños de 6 a 9 metros cuadrados hay espacio para opciones que no caben en los baños de 4 metros cuadrados de los pisos de bloque: ducha de obra a medida, doble lavabo con encimera corrida, separación de zona húmeda y zona de aseo. Además, al no haber comunidad de propietarios que coordinar, la logística de la obra es más sencilla.',
    },
    {
      q: '¿Cuándo tiene sentido hacer una ducha de obra en lugar de plato prefabricado en Meco?',
      a: 'Cuando el baño tiene más de 6 metros cuadrados y el presupuesto lo permite. La ducha de obra permite elegir forma y tamaño sin limitaciones, revestirla con el mismo material que las paredes para un resultado sin juntas visibles, y diseñarla con desagüe lineal enrasado con el suelo. El coste es algo mayor que con plato prefabricado, pero en los baños principales de las viviendas de Meco el resultado justifica la diferencia.',
    },
    {
      q: '¿Es mejor reformar los dos baños del adosado en la misma obra o en momentos distintos en Meco?',
      a: 'En la misma obra cuando los dos necesitan intervención. Los gremios trabajan en ambos en la misma movilización, el desescombro se hace una sola vez y el plazo total es menor que hacerlos secuencialmente. Si solo tienes un baño en uso durante la obra, diseñamos la secuencia para tener siempre uno operativo mientras se termina el otro.',
    },
    {
      q: '¿Cuánto puede costar reformar el baño principal de una vivienda en Meco?',
      a: 'El precio depende del alcance: si se renueva la fontanería, si hay cambio de distribución y el tipo de materiales. En un baño de 6 a 9 metros cuadrados con reforma completa (alicatado, sanitarios, mueble, mampara y fontanería incluidas) el precio parte desde los 4.500 euros. El presupuesto cerrado y sin letra pequeña lo recibes en 48 horas tras la visita técnica gratuita.',
    },
  ],

  'camarma-de-esteruelas': [
    {
      q: '¿Qué materiales suelen sustituirse en los baños de las urbanizaciones de Camarma de 2000-2010?',
      a: 'En los baños de esa época lo que más ha envejecido es el alicatado (juntas manchadas y piezas con pérdida de brillo), la mampara (perfilería deteriorada y sellados con fisuras) y los grifos (con mecanismos desgastados). Los sanitarios y el mueble pueden estar en mejor estado dependiendo del uso. En la visita evaluamos qué merece la pena conservar y qué conviene sustituir.',
    },
    {
      q: '¿Merece la pena reformar los dos o tres baños de la vivienda al mismo tiempo en Camarma?',
      a: 'Cuando los dos necesitan intervención, hacerlos en la misma obra reduce el coste de movilización de gremios y el tiempo con espacios fuera de servicio. El baño principal suele justificar mayor inversión; los secundarios pueden reformarse con un alcance más ajustado. En la visita presentamos el presupuesto de cada uno por separado para que la decisión se tome con los datos sobre la mesa.',
    },
    {
      q: '¿Hay restricciones de horario para obras en las urbanizaciones de Camarma de Esteruelas?',
      a: 'Algunas urbanizaciones tienen normativa interna que regula los horarios de obras y el acceso de vehículos de carga. Antes de fijar el calendario de obra verificamos qué normativa aplica en la urbanización concreta para incorporarla a la planificación. La normativa municipal general de Camarma también establece franjas horarias para trabajos con ruido, que se respetan en todo caso.',
    },
    {
      q: '¿Puede reformarse el baño sin cambiar la distribución en una vivienda de Camarma?',
      a: 'Sí, y en muchos casos es la opción más eficiente. Si la distribución funciona bien y el soporte está en buen estado, cambiar el alicatado, los sanitarios y el mueble sin tocar los desagües permite un resultado radicalmente distinto sin la complejidad ni el coste de las modificaciones de distribución. La visita evalúa si hay alguna razón que justifique el cambio de distribución o si basta con renovar los acabados.',
    },
  ],

};

export const META: Record<string, string> = {
  'alcala-de-henares':      'Reforma de baño en Alcalá de Henares: evaluamos soporte e instalaciones en visita gratuita. Casco antiguo o barrios recientes. Precio cerrado. Desde 3.200€.',
  'torrejon-de-ardoz':      'Reforma de baño en Torrejón de Ardoz: bloques de los 80 con alicatado original. Bañera por ducha o reforma completa. Precio cerrado. Desde 3.200€.',
  'coslada':                'Reforma de baño en Coslada: baños compactos con historial de humedad. Impermeabilización incluida desde el primer presupuesto. Precio cerrado. Desde 3.200€.',
  'san-fernando-de-henares':'Reforma de baño en San Fernando de Henares: casco antiguo o Parque Roma, el alcance cambia. Fontanería evaluada en visita. Precio cerrado. Desde 3.200€.',
  'guadalajara':            'Reforma de baño en Guadalajara: centro histórico o expansión reciente. Accesibilidad sin obra adicional mayor. Permisos incluidos. Precio cerrado. Desde 3.200€.',
  'azuqueca-de-henares':    'Reforma de baño en Azuqueca de Henares: bloques 80-90, instalaciones que suelen aguantar. Reforma de acabados sin tocar fontanería. Precio cerrado. Desde 3.200€',
  'meco':                   'Reforma de baño en Meco: adosados con baños de 6 a 9 m². Ducha de obra, doble lavabo o separación de zonas. Precio cerrado. Desde 3.200€.',
  'camarma-de-esteruelas':  'Reforma de baño en Camarma de Esteruelas: urbanizaciones 2000-2010 con materiales de 15-20 años. Varios baños, alcances distintos. Precio cerrado.',
};
