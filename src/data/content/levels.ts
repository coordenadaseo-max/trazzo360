// Clasificación de especificidad de contenido por combinación servicio × zona.
// S1 = dato específico respaldado para esa intersección (tipología local, condicionante técnico único)
// S2 = dato territorial documentado + criterio técnico general (ambos presentes)
// S3 = sin diferenciación suficiente — página compacta transaccional
//
// Para cada S1 hay una intersectionThesis en el CONTENT correspondiente.
// Para S2 y S3 no se inventa tesis: el nivel se refleja en la profundidad de renderizado.

export const SERVICE_ZONE_LEVEL: Record<string, Record<string, 'S1' | 'S2' | 'S3'>> = {
  'reformas-integrales': {
    // S1 alcala: Conjunto Histórico-Artístico — tramitación específica para obras con afección a fachada dentro del ámbito protegido
    // S2 meco: tipología adosado sin referencia primaria exacta sobre predominio del parque
    'alcala-de-henares':        'S1',
    'torrejon-de-ardoz':        'S2',
    'coslada':                  'S2',
    'san-fernando-de-henares':  'S2',
    'guadalajara':              'S2',
    'azuqueca-de-henares':      'S2',
    'meco':                     'S2',
    'camarma-de-esteruelas':    'S2',
  },
  'reforma-banos': {
    // S2 alcala: fuente primaria insuficiente para antigüedad/instalaciones 60-70 como dato territorial
    // S2 meco: fuente primaria insuficiente para m² de baño como dato territorial (6-9 m² no verificable; 4 m² ≠ CTE DB-SUA)
    'alcala-de-henares':        'S2',
    'torrejon-de-ardoz':        'S2',
    'coslada':                  'S2',
    'san-fernando-de-henares':  'S2',
    'guadalajara':              'S2',
    'azuqueca-de-henares':      'S2',
    'meco':                     'S2',
    'camarma-de-esteruelas':    'S2',
  },
  'reforma-cocinas': {
    // S1 alcala: cocinas 60-70 con conductos de ventilación no funcionales
    'alcala-de-henares':        'S1',
    'torrejon-de-ardoz':        'S2',
    'coslada':                  'S2',
    'san-fernando-de-henares':  'S2',
    'guadalajara':              'S2',
    'azuqueca-de-henares':      'S2',
    'meco':                     'S2',
    'camarma-de-esteruelas':    'S2',
  },
  'reforma-pisos': {
    // S2 alcala: fuente primaria insuficiente para terrazo hidráulico 60-70 como dato territorial específico
    'alcala-de-henares':        'S2',
    'torrejon-de-ardoz':        'S2',
    'coslada':                  'S2',
    'san-fernando-de-henares':  'S2',
    'guadalajara':              'S2',
    'azuqueca-de-henares':      'S2',
    'meco':                     'S2',
    'camarma-de-esteruelas':    'S2',
  },
  'locales-comerciales': {
    // S1 alcala: Plan Especial de Protección Conjunto Histórico-Artístico — regula rótulos, carpintería y materiales dentro del ámbito catalogado
    // S2 torrejon: condición eléctrica del Polígono Madrid-Este sin referencia primaria exacta
    // S3 camarma: comercio de proximidad genérico, sin diferenciación suficiente
    'alcala-de-henares':        'S1',
    'torrejon-de-ardoz':        'S2',
    'coslada':                  'S2',
    'san-fernando-de-henares':  'S2',
    'guadalajara':              'S2',
    'azuqueca-de-henares':      'S2',
    'meco':                     'S2',
    'camarma-de-esteruelas':    'S3',
  },
  'comunidades-vecinos': {
    // S1 alcala: IEE como posible requisito de determinados programas + PEPCHA para fachadas dentro del ámbito protegido
    // S2 meco: tipología urbanización sin referencia primaria exacta sobre predominio o elementos comunitarios exteriores
    'alcala-de-henares':        'S1',
    'torrejon-de-ardoz':        'S2',
    'coslada':                  'S2',
    'san-fernando-de-henares':  'S2',
    'guadalajara':              'S2',
    'azuqueca-de-henares':      'S2',
    'meco':                     'S2',
    'camarma-de-esteruelas':    'S2',
  },
};
