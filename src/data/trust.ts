// Compromisos verificables de Trazzo360 — paso 4 del PROMPT A
// Este módulo se rellena con el componente <Compromisos /> en el paso 4.
// Exportaciones vacías por ahora para que site.ts pueda importarlas sin error.

export const AUTHOR = {
  role: 'Fundador y responsable de obra de Trazzo360',
  yearsInTrade: 15,        // experiencia de la persona, no de la empresa
  name: null as string | null, // TODO: sustituir por nombre real cuando la empresa esté dada de alta
};

export const COMPROMISOS = [
  {
    id: 'contrato-escrito',
    title: 'Contrato por escrito',
    body: 'Antes de empezar cualquier obra se firma un contrato que especifica el alcance exacto, el precio cerrado y la fecha de entrega. No se inicia la obra sin contrato firmado.',
    short: 'Precio, plazo y alcance por escrito antes del primer día',
  },
  {
    id: 'pago-fases',
    title: 'Pago en tres fases',
    body: '40 % a la firma del contrato, 40 % cuando la obra llega a la mitad y 20 % a la entrega conforme. El tramo final solo se abona cuando el cliente recibe la obra a su satisfacción. No se anticipa nada antes de tener contrato con precio y fecha cerrados.',
    short: '40 / 40 / 20 — el último tramo solo al recibir la obra conforme',
  },
  {
    id: 'garantia-ejecucion',
    title: 'Garantía de 2 años en la ejecución',
    body: 'La mano de obra y la instalación tienen garantía de 2 años frente a defectos de ejecución. Si aparece un problema derivado del trabajo realizado, volvemos a resolverlo sin coste adicional.',
    short: '2 años de garantía sobre la ejecución',
  },
  {
    id: 'garantia-materiales',
    title: 'Garantía del fabricante en materiales',
    body: 'Los materiales instalados conservan la garantía de su fabricante, con sus plazos propios según el producto. La documentación se entrega al cliente en la recepción de obra.',
    short: 'Garantía de fabricante en materiales, documentada en la entrega',
  },
  {
    id: 'imprevistos',
    title: 'Imprevistos: primero comunicamos, luego actuamos',
    body: 'Si al abrir aparece algo no previsto, lo comunicamos y lo valoramos antes de actuar. Nunca se amplía el alcance ni el coste sin autorización previa del cliente.',
    short: 'Cualquier imprevisto se comunica y valora antes de ejecutarse',
  },
  {
    id: 'desistimiento',
    title: '14 días de desistimiento',
    body: 'Cuando el contrato se firma en el domicilio del cliente, la ley reconoce 14 días naturales de desistimiento sin penalización, salvo que el cliente solicite expresamente el inicio anterior. Es una obligación de información que respetamos y explicamos antes de firmar.',
    short: '14 días naturales de desistimiento si el contrato se firma en domicilio',
  },
] as const;
