// Contenido de landings reformas-integrales × zona — Tanda F1 (Prompt F v2)
// M1 = intro hero (45-60 palabras, keyword en primera frase)
// M2 = diagnóstico del parque residencial × zona (h3 + 3 párrafos, 180-260 palabras)
// M3 = permisos y logística (h3 + 2 párrafos, 120-160 palabras)
// M4 = decisión clave de presupuesto + enlace cruzado a reforma-pisos (h3 + párrafo, 120-160 palabras)

export const CONTENT: Record<string, { intro: string; intersectionThesis?: string; body: { type: string; text: string; link?: { text: string; serviceSlug: string } }[] }> = {

  'alcala-de-henares': {
    intro: 'El primer paso de una reforma integral en Alcalá de Henares no es elegir materiales: es saber qué estado tienen las instalaciones. En los pisos del Ensanche y el casco de los años 70 y 80, el cuadro eléctrico y la fontanería son los dos elementos que más condicionan el alcance real y el precio final antes de comprometer cualquier número.',
    intersectionThesis: 'Las obras con afección a fachada ubicadas dentro del ámbito del Conjunto Histórico-Artístico de Alcalá requieren tramitación específica. Si la actuación afecta a elementos exteriores del edificio, lo confirmamos en visita antes de cerrar el alcance y el precio.',
    body: [
      { type: 'h3', text: 'Pisos de los años 70 y 80 en Alcalá: cuadro eléctrico y fontanería como puntos de partida' },
      { type: 'p', text: 'En el Ensanche y el entorno de la calle Mayor de Alcalá, la vivienda predominante es de los años 70 y 80. En esos pisos, los cuadros eléctricos pueden ser de una generación anterior, con capacidad insuficiente para el uso actual y sin diferencial independiente por circuito. La fontanería de hierro galvanizado, cuando no se ha tocado, presenta corrosión interior que reduce la sección de paso.' },
      { type: 'p', text: 'Si no se evalúan antes de firmar el presupuesto, estas dos variables pueden hacer que el precio cerrado quede obsoleto en cuanto empieza la obra. Por eso la visita técnica incluye la revisión de las instalaciones observables: el cuadro, las tuberías accesibles y los síntomas de problemas en techos y paredes. Con esa información, el presupuesto cerrado contempla lo que realmente hay que hacer.' },
      { type: 'p', text: 'En los barrios de construcción más reciente, como El Ensanche de los años 90 o las promociones de Nueva Alcalá, las instalaciones pueden estar en mejor estado. En esos pisos el alcance puede concentrarse en distribución y acabados, con menor necesidad de renovar la instalación eléctrica completa. La visita técnica determina en cuál de los dos escenarios está la vivienda antes de comprometer ningún número.' },
      { type: 'h3', text: 'Licencias y logística de reforma integral en Alcalá de Henares' },
      { type: 'p', text: 'Una reforma integral en Alcalá que incluya derribo de tabiques o modificación de instalaciones requiere licencia de obra menor en el Ayuntamiento. Para obras en el casco histórico con protección patrimonial, puede requerirse documentación técnica adicional. Tramitamos el expediente y hacemos el seguimiento sin que el propietario tenga que gestionar ningún papel.' },
      { type: 'p', text: 'La gestión de residuos en una reforma integral en Alcalá requiere planificar varios contenedores a lo largo de la obra, ya que el volumen de escombro supera lo que puede gestionarse con un solo vaciado. Los puntos de recogida y los permisos de ocupación de vía pública se tramitan con antelación y se coordinan con la progresión de la obra para no acumular escombro en el piso más tiempo del necesario.' },
      { type: 'h3', text: 'Reforma integral o reforma de piso en Alcalá: cuándo las instalaciones deciden' },
      { type: 'p', text: 'Si el cuadro eléctrico y la fontanería necesitan renovación completa, hacerlo dentro de la misma obra es más eficiente que abrir la vivienda en dos momentos distintos: una sola movilización de gremios, un solo periodo sin vivienda y un precio total inferior al de dos obras separadas. Si en cambio las instalaciones aguantan, la intervención puede concentrarse en distribución y acabados, con el alcance propio de una reforma de piso. La visita técnica determina en qué escenario está la vivienda antes de comprometer ningún número.', link: { text: 'reforma de piso', serviceSlug: 'reforma-pisos' } },
    ],
  },

  'torrejon-de-ardoz': {
    intro: 'Antes de empezar una reforma integral en Torrejón de Ardoz, la pregunta más importante no es qué muebles elegir: es si las instalaciones de la vivienda necesitan renovación completa o pueden aprovecharse. Cuando la fontanería y el cuadro eléctrico están al límite, hacer la obra en dos fases implica abrir el piso dos veces. La visita técnica determina cuál es tu caso.',
    body: [
      { type: 'h3', text: 'El parque de vivienda del Ensanche de Torrejón: instalaciones que piden diagnóstico' },
      { type: 'p', text: 'Los bloques del Ensanche Norte y Sur de Torrejón de Ardoz, construidos principalmente entre los años 75 y 90, tienen pisos de 70 a 90 metros cuadrados en bloques de 4 a 6 plantas. En esa franja de antigüedad, el estado de las instalaciones varía mucho de un edificio a otro: algunos han renovado el cuadro eléctrico en intervenciones anteriores, otros mantienen la instalación original sin tocar.' },
      { type: 'p', text: 'La fontanería es el otro punto crítico. En los edificios con tuberías de hierro galvanizado sin renovar, la sección interior puede estar reducida por la corrosión acumulada, lo que se traduce en presión baja y riesgo de fuga. Detectarlo antes de cerrar el presupuesto es la diferencia entre un precio cerrado que se cumple y un precio que crece a mitad de obra cuando aparecen las instalaciones.' },
      { type: 'p', text: 'En las urbanizaciones más recientes de Torrejón como Parque Europas o Soto del Henares, construidas en los años 90 y 2000, las instalaciones pueden estar en mejor estado. En esos casos, el presupuesto puede concentrarse en distribución y acabados con un alcance más acotado. La visita técnica determina el escenario real y el tipo de reforma que corresponde.' },
      { type: 'h3', text: 'Secuencia y coordinación de una reforma integral en Torrejón' },
      { type: 'p', text: 'Una reforma integral tiene una secuencia que no puede alterarse sin encarecer la obra: primero derribo y vaciado; después instalaciones empotradas (electricidad y fontanería); luego albañilería; después solados y alicatados; por último carpintería interior y pintura. Alterar ese orden implica volver a abrir lo que ya está terminado. En Torrejón coordinamos cada fase para que cada gremio aparezca en el momento correcto, sin esperas que alargan el plazo ni aperturas innecesarias.' },
      { type: 'p', text: 'La fecha de entrega se fija en el contrato y se cumple. Los dos factores que más alargan el plazo en una reforma integral son los materiales pedidos con obra ya empezada y los cambios de distribución decididos durante la ejecución. El primero se evita pediendo los materiales antes de arrancar; el segundo, cerrando la distribución en el proyecto antes de la primera jornada.' },
      { type: 'h3', text: 'Qué debe estar cerrado antes de firmar el presupuesto de reforma integral en Torrejón' },
      { type: 'p', text: 'La distribución final, el diseño de baño y cocina, y la selección de suelos deben estar definidos antes de empezar la obra. Si se modifican durante la ejecución, el coste se desvía y el plazo se alarga. En la visita técnica evaluamos el estado de las instalaciones, identificamos qué puede aprovecharse y qué necesita renovación y cerramos el precio con todos esos datos sobre la mesa. Si al revisar las instalaciones resultan aprovechables y la necesidad se concentra en acabados, el alcance puede resolverse con una reforma de piso.', link: { text: 'reforma de piso', serviceSlug: 'reforma-pisos' } },
    ],
  },

  'coslada': {
    intro: 'Una reforma integral en Coslada en los bloques de vivienda social de los años 70 y 80 casi siempre implica renovar la instalación eléctrica completa y revisar la fontanería. En muchas de estas viviendas es la primera intervención de ese alcance desde la construcción original. Saber el estado real de las instalaciones antes de cerrar el precio es lo que hace que ese precio sea real.',
    body: [
      { type: 'h3', text: 'Primera reforma integral en vivienda social de Coslada: qué puede encontrarse' },
      { type: 'p', text: 'En los bloques de vivienda social de Coslada construidos en los años 70 y 80, muchos pisos llegan a la primera reforma integral con la instalación eléctrica original: cuadros sin diferencial por circuito, cableado de aluminio en algunos casos y potencia contratada insuficiente para los electrodomésticos actuales. La fontanería original de hierro o plomo, donde no se ha tocado, es otro elemento que hay que evaluar antes de cerrar el alcance.' },
      { type: 'p', text: 'Cuando estas instalaciones se renuevan dentro de una reforma integral, el presupuesto incluye desde el principio los trabajos de electricidad y fontanería junto con el resto de partidas. El coste de renovarlas en la misma obra es muy inferior al de hacerlo en una segunda intervención posterior, que implicaría volver a abrir los solados y la albañilería ya terminados.' },
      { type: 'p', text: 'En algunos edificios de Coslada, la planta baja puede presentar además problemas de humedad por capilaridad desde la solera. Si se detectan indicios en la visita, se incorporan al alcance del presupuesto. Si no se contemplan y aparecen durante la obra, el coste se desvía. La visita técnica evalúa el estado real antes de comprometer ningún número.' },
      { type: 'h3', text: 'Gestión de residuos y permisos en una reforma integral en Coslada' },
      { type: 'p', text: 'El volumen de escombro de una reforma integral supera ampliamente el de una reforma parcial. En los bloques de Coslada, la gestión del contenedor de escombros en vía pública requiere tramitar la autorización con el Ayuntamiento y planificar varios vaciados a lo largo de la obra. El acceso desde portales estrechos y sin zona de carga habilitada requiere organizar los turnos de transporte de escombro sin bloquear el paso.' },
      { type: 'p', text: 'La licencia de obra menor es necesaria cuando la reforma integral incluye derribo de tabiques, cambio de instalaciones o modificación de la distribución. El Ayuntamiento de Coslada tramita estas licencias con plazos similares al resto del Corredor madrileño. Tramitamos el expediente completo y hacemos el seguimiento hasta la resolución sin que el propietario tenga que gestionar ningún trámite.' },
      { type: 'h3', text: 'Reforma integral por fases en Coslada: por qué puede ser menos eficiente' },
      { type: 'p', text: 'Cuando las instalaciones necesitan renovación, dividir la reforma integral en dos fases implica abrir el piso dos veces: en la primera para instalaciones y en la segunda para acabados. Eso duplica el coste de movilización de gremios, el periodo sin vivienda habitable y la coordinación de trabajos. Hacerlo todo en una única obra es la opción más eficiente salvo que haya una razón económica muy concreta que lo justifique. Si las instalaciones aguantan y la intervención puede concentrarse en acabados, la alternativa es una reforma de piso con un alcance más acotado.', link: { text: 'reforma de piso', serviceSlug: 'reforma-pisos' } },
    ],
  },

  'san-fernando-de-henares': {
    intro: 'El alcance de una reforma integral en San Fernando de Henares depende mucho de cuándo se construyó la vivienda. Los pisos del casco antiguo y los de las urbanizaciones de Parque Roma y Parque Henares pueden tener alcances y presupuestos muy distintos según el estado de las instalaciones. La visita técnica gratuita lo aclara antes de comprometer cualquier número.',
    body: [
      { type: 'h3', text: 'Casco histórico o Parque Roma: el parque de vivienda de San Fernando y su estado real' },
      { type: 'p', text: 'En San Fernando de Henares conviven dos realidades muy distintas para una reforma integral. En el casco histórico y los bloques de los años 70, las instalaciones pueden llevar décadas sin revisarse: cuadros eléctricos insuficientes para el uso actual y fontanería original que puede presentar corrosión. Cuando hay que renovarlas, el alcance de la reforma integral es completo y el presupuesto lo refleja.' },
      { type: 'p', text: 'En las promociones de Parque Roma y Parque Henares, construidas en los años 90, las instalaciones pueden estar en mejor estado. En esos pisos, la reforma puede centrarse en distribución y acabados sin necesidad de renovar el cuadro eléctrico completo ni la fontanería de fondo. El alcance es menor y el presupuesto se ajusta a lo que realmente requiere la vivienda.' },
      { type: 'p', text: 'La antigüedad del edificio orienta, pero no determina el alcance. En algunos pisos del casco antiguo las instalaciones ya se han renovado en intervenciones anteriores. En otros más recientes puede haber problemas que no son visibles hasta abrir. El estado real solo puede evaluarse en la visita técnica antes de cerrar el precio.' },
      { type: 'h3', text: 'Licencias para reforma integral en San Fernando de Henares' },
      { type: 'p', text: 'El Ayuntamiento de San Fernando de Henares exige licencia de obra menor para reformas integrales que incluyan derribo de tabiques, cambio de ventanas en fachada o modificación de instalaciones. El plazo de resolución es similar al del resto de municipios del Corredor, entre 10 y 15 días hábiles. Tramitamos el expediente y hacemos el seguimiento técnico hasta la resolución.' },
      { type: 'p', text: 'En los bloques con portero o acceso controlado, coordinamos las visitas de los gremios con la comunidad. El transporte de materiales y el vaciado de contenedores se planifican para no interferir en el uso habitual del portal ni en los accesos al edificio. Todo forma parte de la gestión de la obra sin que el propietario tenga que coordinar ningún trámite.' },
      { type: 'h3', text: 'Precio cerrado en reforma integral: qué garantiza y cuándo puede variar en San Fernando' },
      { type: 'p', text: 'El precio cerrado especifica por partidas exactamente qué está incluido antes de firmar: no hay precios orientativos que luego suben. Los únicos desvíos posibles son los que se comunican antes de ejecutarse, cuando al abrir la vivienda aparece algo no contemplado en la visita técnica. Si las instalaciones resultan en mejor estado del esperado y la intervención puede concentrarse en acabados y distribución, el alcance puede ajustarse al de una reforma de piso con un presupuesto más acotado.', link: { text: 'reforma de piso', serviceSlug: 'reforma-pisos' } },
    ],
  },

  'guadalajara': {
    intro: 'El alcance de una reforma integral en Guadalajara capital depende del estado de las instalaciones, no solo de la superficie. Si la vivienda lleva años sin una renovación importante, el cuadro eléctrico y la fontanería pueden condicionar de forma importante lo que conviene hacer. La visita técnica determina qué alcance corresponde antes de comprometer ningún número.',
    body: [
      { type: 'h3', text: 'El parque de vivienda de Guadalajara: centro histórico densificado y periferia de los 90s' },
      { type: 'p', text: 'En Guadalajara capital conviven dos tipos de parque residencial con condiciones muy distintas para una reforma integral. En el centro histórico y en los edificios construidos antes de los años 80, pueden encontrarse instalaciones eléctricas de generaciones anteriores y fontanería que puede llevar décadas sin tocarse. En muchos de estos edificios se han hecho reformas parciales a lo largo de los años sin abordar nunca las instalaciones de fondo.' },
      { type: 'p', text: 'En la periferia construida en los años 90 y 2000, las instalaciones pueden estar en mejor estado: cuadros más recientes, cableado de cobre y fontanería de cobre o multicapa. En esos pisos, la reforma integral puede concentrar el presupuesto en lo que más transforma la vivienda: redistribución, calidad de materiales, baño y cocina.' },
      { type: 'p', text: 'El estado de las instalaciones de Guadalajara capital también está influido por el clima continental de la ciudad, con inviernos más fríos que en el Corredor madrileño. Las viviendas sin aislamiento adecuado tienen un comportamiento térmico que conviene revisar si la reforma integral incluye intervención en la envolvente. Lo evaluamos en la visita para que el presupuesto contemple si tiene sentido mejorar el aislamiento en esa obra.' },
      { type: 'h3', text: 'Permisos para reforma integral en Guadalajara: tramitación en capital de provincia' },
      { type: 'p', text: 'El Ayuntamiento de Guadalajara tiene sus propios procedimientos para la tramitación de licencias de obras de reforma integral. Para proyectos que incluyan redistribución de tabiques, cambio de carpintería exterior o modificación de instalaciones, se necesita licencia de obra menor. El plazo de tramitación depende del alcance y el tipo de obra; lo confirmamos en la primera reunión antes de comprometer ninguna fecha de inicio. Para edificios del centro histórico con algún tipo de protección patrimonial, puede requerirse documentación técnica adicional.' },
      { type: 'p', text: 'Tramitamos el expediente completo en el Ayuntamiento de Guadalajara y hacemos el seguimiento hasta la resolución. Si el proyecto necesita visado de colegio profesional, lo gestionamos también. El tiempo de tramitación está incorporado al calendario de obra antes de que empiece el derribo, para que no condicione el inicio de los trabajos.' },
      { type: 'h3', text: 'Carpintería y aislamiento en la reforma integral de Guadalajara' },
      { type: 'p', text: 'Si la reforma integral incluye intervención en el perímetro de la vivienda, el cambio de carpintería exterior puede añadirse a la misma obra sin coste adicional de desescombro o coordinación. El doble acristalamiento mejora el confort térmico en el clima continental de Guadalajara, especialmente perceptible en las viviendas que llevan décadas con ventanas sin renovar. Cuando las instalaciones aguantan y la intervención puede concentrarse en acabados y distribución, el alcance puede corresponderse con el de una reforma de piso en lugar de una integral.', link: { text: 'reforma de piso', serviceSlug: 'reforma-pisos' } },
    ],
  },

  'azuqueca-de-henares': {
    intro: 'Una reforma integral en Azuqueca de Henares con instalaciones en buen estado tiene más margen para invertir en distribución y acabados que en obra pesada. Si el cuadro eléctrico y la fontanería no necesitan renovación completa, el presupuesto puede centrarse en lo que más transforma visualmente la vivienda. Lo verificamos en la visita técnica gratuita antes de cerrar el precio.',
    body: [
      { type: 'h3', text: 'El parque residencial de Azuqueca de los años 80 y 90: instalaciones con mejor punto de partida' },
      { type: 'p', text: 'Azuqueca de Henares tuvo un fuerte crecimiento residencial ligado a la expansión industrial del Corredor en los años 80 y 90. En esa franja de construcción, los estándares eléctricos ya incluían cuadros con diferencial y la fontanería se hizo en cobre en la mayoría de las promociones. Eso significa que las instalaciones tienen un punto de partida mejor que las de los edificios de los años 70.' },
      { type: 'p', text: 'En muchos pisos de Azuqueca, el cuadro eléctrico y la fontanería pueden aprovecharse total o parcialmente. Eso reduce el alcance de la obra pesada y libera presupuesto para dedicarlo a distribución, calidad de materiales o zonas con mayor impacto visual. Lo verificamos en la visita técnica antes de comprometer ningún número.' },
      { type: 'p', text: 'No todas las instalaciones de los bloques de esa época están en el mismo estado. En algunos pisos la fontanería ya se ha renovado; en otros no se ha tocado. La visita técnica evalúa el estado real y determina si conviene incluir la renovación de instalaciones o si el alcance puede concentrarse en distribución y acabados. En ese segundo caso, el alcance puede corresponderse con el de una reforma de piso.' },
      { type: 'h3', text: 'Logística de reforma integral en los bloques de Azuqueca de Henares' },
      { type: 'p', text: 'En una reforma integral en Azuqueca hay que coordinar el acceso de varios gremios a lo largo de semanas, el transporte de materiales en distintas fases y el vaciado de varios contenedores de escombro. En los bloques con acceso estrecho o sin zona de carga habilitada, la planificación del acceso de vehículos se organiza con la comunidad antes de empezar, para no interferir en el uso habitual del edificio.' },
      { type: 'p', text: 'Los horarios de trabajo con ruido se ajustan a la normativa municipal de Azuqueca. La licencia de obras, cuando el alcance de la reforma la requiere, se tramita antes de arrancar para que los plazos de resolución no condicionen el inicio. Los trámites quedan incluidos en la gestión de la obra.' },
      { type: 'h3', text: 'Qué incluye una reforma integral en Azuqueca cuando las instalaciones aguantan' },
      { type: 'p', text: 'Si las instalaciones no necesitan renovación completa, una reforma integral en Azuqueca puede concentrarse en lo que más se nota: redistribución de espacios para ganar amplitud, suelos nuevos de porcelánico o tarima, reforma completa de baño y cocina, carpintería interior y pintura. El presupuesto cerrado incluye todas las partidas acordadas; si durante la obra aparece algo no previsto, se comunica antes de actuar. Si el alcance de la intervención se concentra en acabados sin redistribuir, puede corresponderse con el de una reforma de piso.', link: { text: 'reforma de piso', serviceSlug: 'reforma-pisos' } },
    ],
  },

  'meco': {
    intro: 'Reformar integralmente una vivienda en Meco tiene variables que no aparecen en los pisos de bloque: más metros, posiblemente dos plantas, y cubierta o terraza que evaluar. Antes de cerrar el alcance conviene saber si la cubierta necesita intervención, porque es una partida que puede cambiar el presupuesto de manera significativa si se descubre durante la obra.',
    body: [
      { type: 'h3', text: 'Adosados de dos plantas en Meco: un alcance diferente al de los pisos de bloque' },
      { type: 'p', text: 'La vivienda predominante en Meco es el adosado de dos plantas construido en los años 90 y primeros 2000, con superficies de 120 a 160 metros cuadrados. Una reforma integral en una vivienda de estas características tiene complejidades que no aparecen en un piso de bloque: hay que coordinar las instalaciones en dos plantas, el acceso a la cubierta y las zonas exteriores propias (terraza o jardín) que pueden estar en el alcance.' },
      { type: 'p', text: 'La cubierta es la partida que más puede cambiar el presupuesto si se descubre durante la obra. Si hay filtraciones activas o la cubierta no está en buen estado, incorporarla al alcance de la reforma integral es más eficiente que abordarla en una obra posterior. Lo evaluamos en la visita técnica antes de cerrar el precio: si hay indicios de problema en cubierta, quedan contemplados desde el principio.' },
      { type: 'p', text: 'Las instalaciones en los adosados de Meco pueden ser independientes: caldera propia, acometida de agua directa, cuadro eléctrico con potencia suficiente. Eso da más libertad en el alcance de la reforma. En muchos de estos adosados de los años 90 y 2000, las instalaciones pueden aprovecharse parcial o totalmente, lo que deja más presupuesto disponible para distribución y acabados.' },
      { type: 'h3', text: 'Permisos para cerrar terraza o ampliar en adosados de Meco' },
      { type: 'p', text: 'Si el proyecto de reforma incluye cerrar una terraza para ganar metros habitables, el proceso requiere licencia de obra menor en el Ayuntamiento de Meco y, en algunas urbanizaciones, también la aprobación de la comunidad de propietarios. Verificamos ambas condiciones antes de comprometer plazos o presupuesto: el trámite queda incluido en el precio cerrado desde el principio.' },
      { type: 'p', text: 'Para reformas que no impliquen modificaciones en el exterior, la licencia de obra menor se tramita por el alcance interior: redistribución de tabiques, cambio de instalaciones y modificación de espacios. El Ayuntamiento de Meco tiene plazos de resolución similares al resto del Corredor. Gestionamos el expediente completo sin que el propietario tenga que hacer ningún trámite.' },
      { type: 'h3', text: 'Cubierta y terraza en el alcance: la partida que más cambia el presupuesto en Meco' },
      { type: 'p', text: 'En los adosados de Meco, decidir si la cubierta entra en el alcance de la reforma integral es la decisión que más puede condicionar el presupuesto total. Si hay indicios de filtración y no se incluye, el problema aparece una vez terminada la reforma interior. Si se incluye preventivamente sin que sea necesario, el coste sube sin justificación. La visita técnica evalúa el estado real de la cubierta y da una recomendación concreta antes de cerrar el precio. Si la intervención se concentra solo en el interior sin necesidad de tocar cubierta ni redistribuir, el alcance puede encajar con el de una reforma de piso.', link: { text: 'reforma de piso', serviceSlug: 'reforma-pisos' } },
    ],
  },

  'camarma-de-esteruelas': {
    intro: 'Una reforma integral en Camarma de Esteruelas empieza por definir prioridades: las viviendas unifamiliares de las urbanizaciones tienen entre 15 y 20 años y pueden llegar a la primera reforma integral con instalaciones en estado medio-bueno. Eso deja más margen para concentrar el presupuesto en distribución y acabados. La visita técnica gratuita determina qué es urgente y qué puede esperar.',
    body: [
      { type: 'h3', text: 'Primera reforma integral en las viviendas de Camarma: instalaciones con 15-20 años de uso' },
      { type: 'p', text: 'Las urbanizaciones de Camarma de Esteruelas se desarrollaron principalmente en los años 2000 y la primera década de los 2010. Las viviendas unifamiliares de esa época llegan ahora a su primera reforma integral con instalaciones que tienen entre 15 y 20 años de uso. A diferencia de los pisos de los años 70 y 80, el cuadro eléctrico y la fontanería pueden estar en estado suficientemente bueno como para aprovecharlos total o parcialmente.' },
      { type: 'p', text: 'Ese mejor estado de las instalaciones deja más presupuesto disponible para lo que más transforma la vivienda: cambio de distribución para ganar amplitud, suelos nuevos, reforma completa de baño y cocina, carpintería interior y pintura. Con las instalaciones en buen estado, la reforma integral puede concentrarse en lo que más se nota en el resultado final.' },
      { type: 'p', text: 'Lo que puede necesitar evaluación en estas viviendas es la cubierta y la carpintería exterior, que con 15 o 20 años de exposición puede presentar sellados deteriorados o cámara de aire comprometida. Si se detectan en la visita, se incorporan al alcance. Si no se evalúan y aparecen durante la obra, condicionan el plazo y el coste.' },
      { type: 'h3', text: 'Logística de reforma integral en una vivienda unifamiliar de Camarma' },
      { type: 'p', text: 'En una vivienda unifamiliar de Camarma, la logística de la reforma integral tiene ventajas frente al piso de bloque: no hay comunidad de propietarios que coordinar, el acceso es directo y el contenedor de escombros puede colocarse frente a la vivienda sin tramitar ocupación de zona común. Eso simplifica la organización de los gremios y los turnos de transporte de materiales.' },
      { type: 'p', text: 'Algunas urbanizaciones de Camarma tienen normativa interna sobre horarios de obras y acceso de vehículos de carga. Antes de fijar el calendario verificamos qué aplica en la urbanización concreta. La licencia de obra menor se tramita en el Ayuntamiento de Camarma cuando el alcance de la reforma la requiere. Gestionamos los trámites sin que el propietario tenga que intervenir en ningún paso.' },
      { type: 'h3', text: 'Secuencia de obra en dos plantas: cómo recuperar habitabilidad antes en Camarma' },
      { type: 'p', text: 'En una vivienda de dos plantas, el orden de los trabajos condiciona cuándo se puede volver a usar cada zona. Lo recomendable es completar las instalaciones en ambas plantas antes de cerrar ninguna, para que fontanería y electricidad no tengan que reabrirse cuando se pasa de un nivel a otro. Después se avanza planta a planta, terminando los acabados de la planta de día antes de subir a la planta de noche. Con esa secuencia, la vivienda recupera habitabilidad parcial antes y el periodo sin poder usarla es menor. Si las instalaciones aguantan y la intervención puede concentrarse en acabados, el alcance puede encajar con el de una reforma de piso.', link: { text: 'reforma de piso', serviceSlug: 'reforma-pisos' } },
    ],
  },

};

export const FAQS: Record<string, { q: string; a: string }[]> = {

  'alcala-de-henares': [
    {
      q: '¿Qué información necesito preparar antes de la visita técnica para una reforma integral en Alcalá?',
      a: 'La superficie aproximada del piso, el año de construcción del edificio y una descripción del alcance previsto: qué quieres cambiar, si hay distribuciones que modificar y si el cuadro eléctrico o la fontanería ya han dado problemas. Con eso la visita puede ser más concreta y el presupuesto más ajustado desde el primer momento.',
    },
    {
      q: '¿Puede la visita técnica en Alcalá determinar si es mejor reforma parcial o integral?',
      a: 'Sí, ese es uno de sus objetivos principales. El estado del cuadro eléctrico y la fontanería es lo que condiciona la decisión: si las instalaciones funcionan, baño, cocina, suelos y pintura pueden transformar completamente el piso con un alcance de reforma parcial. Si necesitan renovación, hacerlo todo en la misma obra sale más eficiente que dos intervenciones separadas.',
    },
    {
      q: '¿Qué puede alargar el plazo en las reformas integrales en Alcalá?',
      a: 'Los materiales con plazo de entrega largo y los cambios de distribución decididos con la obra ya empezada son los dos factores que más alargan el plazo. El primero se controla pidiendo los materiales antes de arrancar; el segundo, cerrando la distribución en el proyecto antes de la primera jornada de obra.',
    },
    {
      q: '¿Puedo pedir presupuesto de reforma integral en Alcalá sin haber decidido los materiales?',
      a: 'Sí. Para cerrar el presupuesto necesitamos la distribución final y el alcance de las instalaciones, no los materiales concretos. Los acabados pueden elegirse después con la obra ya planificada, dentro de las franjas de calidad del presupuesto cerrado. Trabajar con un porfolio de materiales orientativos desde la visita ayuda a que las elecciones encajen en el presupuesto.',
    },
  ],

  'torrejon-de-ardoz': [
    {
      q: '¿Qué debería preparar antes de la visita técnica para una reforma integral en Torrejón?',
      a: 'Tener claro qué quieres cambiar y en qué estado crees que están las instalaciones. Si el cuadro eléctrico o la fontanería ya han dado problemas, conviene mencionarlo para que la visita los evalúe con detalle. Si hay ideas de redistribución de tabiques, cualquier boceto o referencia ayuda a orientar la visita y acelerar el presupuesto.',
    },
    {
      q: '¿Cuándo tiene sentido plantear la reforma integral en Torrejón como dos fases separadas?',
      a: 'En pocos casos, salvo razones económicas muy concretas. Hacer instalaciones en una primera fase y acabados en una segunda implica abrir y cerrar el piso dos veces, repetir la coordinación de gremios y alargar el periodo sin vivienda. En general, cuando las instalaciones necesitan renovación, hacerlo todo en una única obra es la opción más eficiente.',
    },
    {
      q: '¿Cuánto dura una reforma integral en Torrejón de Ardoz?',
      a: 'Una reforma de 70 a 90 metros cuadrados sin redistribución y con materiales disponibles desde el inicio lleva entre 8 y 12 semanas. Con redistribución o cambio de instalaciones completo, puede extenderse hasta 14 a 16 semanas. El plazo se fija en el contrato antes de empezar y se cumple salvo causas de fuerza mayor documentadas.',
    },
    {
      q: '¿Cómo se organiza la obra si hay que seguir viviendo en el piso durante la reforma integral en Torrejón?',
      a: 'No es recomendable convivir con una reforma integral completa, pero si no hay alternativa diseñamos la secuencia de obra por zonas para que siempre haya una parte habitable. Esto alarga el plazo total porque algunos trabajos no pueden solaparse cuando el piso está ocupado. Lo calculamos en el proyecto antes de empezar.',
    },
  ],

  'coslada': [
    {
      q: '¿Qué debería revisar antes de solicitar presupuesto de reforma integral en Coslada?',
      a: 'El estado general de las instalaciones: si el cuadro eléctrico está actualizado, si la fontanería ha dado problemas y si hay humedades visibles en paredes o solera. Esa información ayuda a orientar el alcance antes de la visita y a que el presupuesto sea más preciso desde el primer momento.',
    },
    {
      q: '¿Merece la pena reformar por fases en lugar de hacerlo todo a la vez en Coslada?',
      a: 'Solo si hay una razón económica muy concreta. Hacer dos obras separadas implica movilizar gremios dos veces, desescombrar dos veces y convivir con el caos en dos periodos distintos. Cuando las instalaciones necesitan renovación, hacerlo todo en la misma obra puede ser más eficiente que afrontarlo en dos proyectos independientes.',
    },
    {
      q: '¿Cómo se gestiona si aparecen humedades no previstas durante la reforma integral en Coslada?',
      a: 'Si durante la obra aparece humedad no prevista en la visita, lo comunicamos antes de actuar y lo presupuestamos por separado. No ampliamos el alcance sin autorización previa. Esto es especialmente relevante en plantas bajas o en pisos con síntomas que no eran visibles en la visita inicial.',
    },
    {
      q: '¿Puedo pedir presupuesto de reforma integral en Coslada con el piso actualmente alquilado?',
      a: 'Sí, aunque en ese caso hay que coordinar el acceso y el vaciado del piso con el inquilino. Para reformas integrales, el piso debe estar vacío durante la obra. Si el arrendamiento está próximo a vencer, podemos planificar el proyecto para empezar en cuanto quede libre y tener el presupuesto cerrado antes.',
    },
  ],

  'san-fernando-de-henares': [
    {
      q: '¿Cuándo conviene pasar de reforma parcial a integral en San Fernando de Henares?',
      a: 'Cuando las instalaciones necesitan renovación. Si el cuadro o la fontanería hay que cambiarlos, hacerlo en paralelo con el resto de la obra ahorra el coste de una segunda movilización de gremios. Si las instalaciones están en buen estado, la reforma parcial puede ser suficiente y más económica.',
    },
    {
      q: '¿Qué aporta la visita técnica que no puede determinarse por fotos en San Fernando?',
      a: 'El estado real de las instalaciones. La fontanería y el cableado están empotrados y no son visibles sin abrir. La visita técnica evalúa indicios: la fecha del cuadro, el tipo de tuberías observables y síntomas de problemas en techos y paredes. Eso permite cerrar un precio que contemple lo que realmente hay que hacer.',
    },
    {
      q: '¿Cómo queda fijado el precio en el contrato de reforma integral en San Fernando?',
      a: 'El precio queda cerrado por partidas antes de firmar: no hay precios orientativos que luego suben. El contrato especifica exactamente qué está incluido, con qué materiales y con qué acabados. Los únicos desvíos posibles son los que se comunican y autorizan antes de ejecutarse.',
    },
    {
      q: '¿Puedo pedir presupuesto de reforma integral con el piso habitado y con los muebles dentro en San Fernando?',
      a: 'Sí. La visita técnica puede realizarse con la vivienda ocupada y con muebles. Lo que necesitamos evaluar son las instalaciones y la distribución actual. Algunos elementos solo son visibles una vez vaciado el piso, y eso se indica en el presupuesto cuando aplica para no dejar partidas sin determinar.',
    },
  ],

  'guadalajara': [
    {
      q: '¿Qué debería tener decidido antes de pedir presupuesto de reforma integral en Guadalajara?',
      a: 'La distribución final: qué tabiques se eliminan y cómo quedan las estancias. El presupuesto de instalaciones y acabados puede ajustarse después, pero si la distribución cambia con la obra empezada, el coste se desvía. Las ideas de redistribución conviene llevarlas a la visita para que el proyecto las tenga en cuenta desde el inicio.',
    },
    {
      q: '¿Cómo se coordina la obra si no puedo estar presente en Guadalajara durante la ejecución?',
      a: 'Con el jefe de obra como interlocutor directo. Enviamos fotos e informes de avance en cada fase relevante y consultamos antes de tomar cualquier decisión no prevista en el proyecto. El seguimiento a distancia es habitual y no afecta a la ejecución siempre que las decisiones de diseño estén cerradas antes de empezar.',
    },
    {
      q: '¿Por qué son difíciles de comparar dos presupuestos de reforma integral en Guadalajara?',
      a: 'Porque pueden no especificar lo mismo. Dos presupuestos con el mismo total pueden diferir en qué instalaciones dan por renovadas, si el desescombro está incluido, qué calidad de materiales contemplan o si la gestión de residuos está en el precio. Para comparar bien, pide que cada uno especifique por escrito qué incluye y qué excluye en cada partida.',
    },
    {
      q: '¿Cuándo tiene sentido añadir redistribución de tabiques a una reforma integral en Guadalajara?',
      a: 'Cuando la distribución actual no responde bien a cómo se usa la vivienda o cuando se puede ganar espacio útil sin un coste desproporcionado. En pisos con pasillos largos que ocupan superficie, eliminar un tabique puede mejorar la distribución más que cualquier acabado. Lo valoramos en la visita con la distribución existente sobre la mesa.',
    },
  ],

  'azuqueca-de-henares': [
    {
      q: '¿Hay alguna diferencia en el proceso para una reforma integral en Azuqueca frente a otros municipios del Corredor?',
      a: 'El proceso es el mismo: visita técnica gratuita, presupuesto cerrado por escrito y contrato con precio y plazo fijados. El mismo equipo que trabaja en Alcalá y Torrejón cubre Azuqueca sin coste adicional de desplazamiento. Si la reforma necesita licencia, el trámite es en el Ayuntamiento de Azuqueca de Henares.',
    },
    {
      q: '¿Cómo puedo verificar que el presupuesto de reforma integral en Azuqueca cubre realmente lo que hay que hacer?',
      a: 'Revisando las partidas una por una. Un presupuesto cerrado debe detallar qué se hace en cada categoría: derribo, electricidad, fontanería, solados, alicatados, carpintería, baño, cocina, pintura. Si alguna partida dice genéricamente "electricidad a determinar", no es un precio cerrado: es un precio orientativo que puede crecer durante la obra.',
    },
    {
      q: '¿Qué decisiones son difíciles de cambiar una vez empezada la reforma integral en Azuqueca?',
      a: 'La distribución de tabiques y la posición de los puntos de agua y electricidad. Una vez cerradas las instalaciones empotradas o levantados los solados, cambiar dónde va una ducha o dónde va un punto de luz implica reabrir lo que ya está terminado. Por eso se cierran antes de la primera jornada, no a mitad de la obra.',
    },
    {
      q: '¿Qué debería preparar para la primera visita técnica de reforma integral en Azuqueca de Henares?',
      a: 'El acceso al piso y una idea clara del alcance: si quieres cambiar distribución, cuáles son las estancias más prioritarias y si ya tienes alguna referencia de materiales o estilo. Con eso la visita puede ser más productiva y el presupuesto más ajustado a lo que realmente quieres desde el inicio.',
    },
  ],

  'meco': [
    {
      q: '¿Qué diferencias tiene una reforma integral en un adosado de Meco frente a un piso de bloque?',
      a: 'La vivienda unifamiliar puede tener instalaciones independientes (caldera propia, acometidas directas) que dan más libertad en el alcance. También puede haber más de una planta que coordinar y, en algunos casos, cubierta o terraza que evaluar. La superficie mayor también implica más semanas de obra. Lo evaluamos en la visita según la configuración concreta.',
    },
    {
      q: '¿Puedo presupuestar la reforma integral en Meco antes de tener todos los detalles definidos?',
      a: 'Sí. Para cerrar el presupuesto necesitamos el alcance estructural: qué instalaciones se renuevan y si hay redistribución. Los acabados concretos pueden definirse con el proyecto ya cerrado, dentro de las franjas de calidad acordadas. Trabajar con un porfolio de materiales orientativos desde la visita ayuda a que las elecciones posteriores encajen en el presupuesto.',
    },
    {
      q: '¿Cómo se organiza una reforma integral en una casa de dos plantas en Meco?',
      a: 'Con una secuencia que evite abrir instalaciones dos veces. Lo recomendable es completar la fase de instalaciones en ambas plantas antes de cerrar ninguna, para que fontanería y electricidad no tengan que reabrirse cuando se pasa de un nivel al otro. Después se completa planta por planta según el uso previsto durante la obra.',
    },
    {
      q: '¿Qué conviene tener decidido antes de que empiece la obra de reforma integral en Meco?',
      a: 'La distribución final, las instalaciones que se renuevan y el tipo de materiales en términos generales. Con eso cerrado antes de arrancar, la obra puede ejecutarse sin paradas por decisiones pendientes. Los detalles de cada acabado pueden concretarse durante la fase de derribo e instalaciones, cuando todavía hay margen antes de llegar a los acabados.',
    },
  ],

  'camarma-de-esteruelas': [
    {
      q: '¿Qué hace diferente una reforma integral en una casa unifamiliar de Camarma respecto a un piso?',
      a: 'La cantidad de instalaciones propias y la superficie. Una vivienda unifamiliar puede tener más de una planta, caldera propia y saneamiento independiente. Eso requiere más planificación de secuencias pero también da más libertad para organizar el trabajo por zonas y recuperar habitabilidad parcial antes de terminar la obra completa.',
    },
    {
      q: '¿Puedo pedir presupuesto de reforma integral en Camarma si la vivienda está desocupada?',
      a: 'Sí, es la situación ideal para la visita técnica. Sin muebles se pueden evaluar mejor los suelos, las paredes y el estado de las instalaciones observables. En viviendas desocupadas también es más sencillo empezar la obra en cuanto el proyecto esté cerrado, sin coordinar vaciado con mudanza.',
    },
    {
      q: '¿Qué información aporta la visita técnica antes de comprometer nada en Camarma de Esteruelas?',
      a: 'Una evaluación del estado de las instalaciones observables, una orientación sobre qué tipo de reforma tiene sentido según el estado de la vivienda, y un plazo estimado para recibir el presupuesto cerrado. No hay ningún compromiso en la visita; el presupuesto lo recibes después con todo el alcance detallado y sin letra pequeña.',
    },
    {
      q: '¿Cómo se gestiona el aprovisionamiento de materiales para una vivienda en una zona más alejada como Camarma?',
      a: 'El aprovisionamiento lo gestionamos nosotros y forma parte de la planificación de obra. La distancia no añade retrasos cuando los materiales están pedidos antes de empezar. Si algún material concreto tiene un plazo de entrega largo, lo anticipamos para que no condicione el ritmo de la obra ni el cumplimiento del plazo fijado en el contrato.',
    },
  ],

};

export const META: Record<string, string> = {
  'alcala-de-henares':      'Reforma integral en Alcalá de Henares: revisamos cuadro eléctrico y fontanería antes de cerrar precio. Pisos de los 70 y 80. Presupuesto cerrado por escrito.',
  'torrejon-de-ardoz':      'Reforma integral en Torrejón de Ardoz: diagnóstico de instalaciones en visita gratuita. Todo a la vez o por fases. Precio cerrado. Plazo garantizado.',
  'coslada':                'Reforma integral en Coslada: evaluamos instalaciones y humedades en visita. Primera obra integral en vivienda social. Presupuesto cerrado que no cambia a mitad.',
  'san-fernando-de-henares':'Reforma integral en San Fernando de Henares: casco antiguo o Parque Roma, el alcance cambia. Instalaciones evaluadas en visita gratuita. Precio cerrado.',
  'guadalajara':            'Reforma integral en Guadalajara: permisos en capital de provincia. Aislamiento en clima continental. Instalaciones evaluadas en visita gratuita. Precio cerrado.',
  'azuqueca-de-henares':    'Reforma integral en Azuqueca de Henares: bloques 80-90 con instalaciones aprovechables. Más margen para distribución y acabados. Precio cerrado.',
  'meco':                   'Reforma integral en Meco: viviendas unifamiliares con particularidades de cubierta y zonas exteriores. Evaluamos el alcance completo en visita gratuita. Precio cerrado.',
  'camarma-de-esteruelas':  'Reforma integral en Camarma de Esteruelas: viviendas unifamiliares 2000-2010, primera reforma integral. Instalaciones en buen estado. Precio cerrado.',
};
