// src/data/site.ts — fachada principal
// Todos los datos residen en módulos hijos; aquí solo se define SITE y se re-exporta todo.
// Los imports de las plantillas no necesitan cambiar.

// ── Configuración global ──────────────────────────────────────────────────────
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
  mainCity: 'Torrejón de Ardoz',  // municipio principal — Torrejón, no Alcalá
  zone: 'Corredor del Henares',
  // Reseñas Google — activar cuando haya valoraciones reales
  reviewCount: 0,       // ← número de reseñas. Aparece en el hero cuando > 0
  ratingValue: 0,       // ← media de valoración (ej: 4.9). Aparece cuando > 0
  googleBusinessUrl: '', // ← URL de la ficha de Google Business Profile
};

// ── Re-exports desde módulos hijos ────────────────────────────────────────────
export { SERVICES } from './services';
export { ZONES, RELATED_ZONES } from './zones';
export { SERVICE_ICONS } from './icons';
export { ZONE_FAQS } from './zones-content';
export { AUTHOR, COMPROMISOS } from './trust';
export { IMAGE_SLOTS } from './images';
export { LEGAL } from './legal';

// ── Proyectos antes/después
// PROTECCIÓN: published: false bloquea renderizado público.
// Solo activar un proyecto cuando existan fotos reales verificadas en /public/img/proyectos/
// y el proyecto haya sido confirmado como obra real ejecutada.
// Los componentes deben filtrar con PROJECTS.filter(p => p.published) antes de renderizar.
// Nunca activar por la mera presencia accidental de un archivo de imagen con el mismo nombre.
export const PROJECTS = [
  {
    slug: 'reforma-integral-alcala',
    title: 'Reforma integral de piso',
    location: 'Alcalá de Henares',
    surface: '85 m²',
    duration: '10 semanas',
    service: 'Reforma integral',
    type: 'obra-propia' as const,
    published: false,
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
    type: 'obra-propia' as const,
    published: false,
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
    type: 'obra-propia' as const,
    published: false,
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
    type: 'obra-propia' as const,
    published: false,
    desc: 'Transformación de local vacío en espacio comercial. Instalaciones completas y tramitación de licencia de actividad incluidas.',
    imgBefore: '/img/proyectos/local-san-fernando-antes.jpg',
    imgAfter: '/img/proyectos/local-san-fernando-despues.jpg',
  },
];

// ── Contenido de combinadas servicio × zona (agrupado por servicio) ───────────
import { CONTENT as RI_C, FAQS as RI_F, META as RI_M } from './content/reformas-integrales';
import { CONTENT as RB_C, FAQS as RB_F, META as RB_M } from './content/reforma-banos';
import { CONTENT as RC_C, FAQS as RC_F, META as RC_M } from './content/reforma-cocinas';
import { CONTENT as RP_C, FAQS as RP_F, META as RP_M } from './content/reforma-pisos';
import { CONTENT as LC_C, FAQS as LC_F, META as LC_M } from './content/locales-comerciales';
import { CONTENT as CV_C, FAQS as CV_F, META as CV_M } from './content/comunidades-vecinos';

export const SERVICE_ZONE_CONTENT = {
  'reformas-integrales': RI_C,
  'reforma-banos':       RB_C,
  'reforma-cocinas':     RC_C,
  'reforma-pisos':       RP_C,
  'locales-comerciales': LC_C,
  'comunidades-vecinos': CV_C,
};

export const SERVICE_ZONE_FAQS = {
  'reformas-integrales': RI_F,
  'reforma-banos':       RB_F,
  'reforma-cocinas':     RC_F,
  'reforma-pisos':       RP_F,
  'locales-comerciales': LC_F,
  'comunidades-vecinos': CV_F,
};

export const SERVICE_ZONE_META = {
  'reformas-integrales': RI_M,
  'reforma-banos':       RB_M,
  'reforma-cocinas':     RC_M,
  'reforma-pisos':       RP_M,
  'locales-comerciales': LC_M,
  'comunidades-vecinos': CV_M,
};
