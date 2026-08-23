# PRE-LAUNCH CHECKLIST — Trazzo360

> Estado: **READY FOR PRE-LAUNCH DATA**
> Última revisión: 2026-08-21 (Lote F — Auditoría Global Preproducción)
>
> La web está técnicamente preparada. Solo quedan los datos reales del titular antes del lanzamiento.

---

## 🔴 BLOQUEANTES (obligatorios antes de publicar)

### 1. Teléfono real
- **Archivo**: `src/data/site.ts`
- `phone: 'TU_TELEFONO'` → número real sin espacios ni '+', ej: `'34912345678'`
- `phoneDisplay: 'TU TELÉFONO'` → número formateado, ej: `'912 345 678'`
- `whatsapp: 'TU_TELEFONO'` → mismo número que `phone`
- **Efecto**: desbloquea teléfono en header/footer/contacto, WhatsApp en header/flotante, horario visible, `openingHoursSpecification` en schema JSON-LD

### 2. Formspree (formulario de contacto)
- **Archivo**: `src/pages/contacto.astro`, línea 45
- `action="https://formspree.io/f/YOUR_FORM_ID"` → reemplaza `YOUR_FORM_ID` con tu ID real
- Crear cuenta en https://formspree.io, crear formulario, copiar ID (ej: `xpzgkwqr`)

### 3. CIF/NIF (páginas legales)
- **Archivo**: `src/pages/aviso-legal.astro`, línea 32
- **Archivo**: `src/pages/privacidad.astro`, línea 31
- Reemplaza `[Completar con tu CIF/NIF]` con el NIF/CIF real del titular

### 4. Domicilio social (páginas legales)
- **Archivo**: `src/data/site.ts`
- `address: 'Corredor del Henares, Madrid'` → dirección postal real del titular
- Se usa en aviso-legal y privacidad

### 5. Años de experiencia (opcional, pero aprobado como vacío)
- **Archivo**: `src/data/site.ts` → `AUTHOR.yearsInTrade = 15`
- El número NO se renderiza en producción (bloqueado en `index.astro` y `como-trabajamos.astro`)
- Cuando el titular confirme la cifra: descomentar los bloques marcados con `PRE-LAUNCH BLOCKER: cifra de años`

---

## 🟡 RECOMENDADOS antes de publicar

### 6. Imagen OG real (`/public/og.jpg`)
- La imagen OG por defecto (`og.jpg`) debe existir en `/public/` con dimensiones 1200×630 px
- Sin imagen, las redes sociales mostrarán el alt por defecto

### 7. Favicon real (`/public/favicon.svg` + `/public/favicon.ico`)
- Actualmente el favicon puede ser el placeholder por defecto
- Crear favicon con branding Trazzo360

### 8. Google Analytics / Search Console (opcional)
- No hay script de analytics en el sitio
- Añadir GA4 o similar en `src/layouts/Layout.astro` si se desea tracking

### 9. Sitemap submit a Google Search Console
- URL sitemap: `https://trazzo360.es/sitemap-index.xml`
- Enviar tras el primer deploy

### 10. robots.txt — verificar dominio en producción
- Actualmente: `Sitemap: https://trazzo360.es/sitemap-index.xml`
- Confirmar que el dominio final es `trazzo360.es`

---

## ✅ VERIFICADO Y LISTO

| Área | Estado |
|------|--------|
| Build (86 páginas) | ✅ OK |
| 0 claims 24h/48h | ⚠️ PENDIENTE — existen promesas de "48 horas" en index.astro:366 y zones-content.ts:14. Confirmar con titular si son realistas antes de publicar |
| yearsInTrade no renderizado | ✅ OK — bloqueado en index y como-trabajamos |
| wa.me condicional (0 renders con placeholder) | ✅ OK — Layout, Header, contacto |
| openingHoursSpecification condicional | ✅ OK — Layout.astro |
| SITE.hours condicional | ✅ OK — Header, Footer, contacto |
| noindex global (staging/dev) | ✅ OK — controlado por PUBLIC_SITE_INDEXING=false en .env. Activar con PUBLIC_SITE_INDEXING=true en servidor de producción |
| Sitemap: 71 URLs (excluye noindex + lab) | ✅ OK |
| robots.txt (Disallow: /lab/, /gracias/) | ✅ OK |
| Formulario: labels, required, privacidad, redirect /gracias/ | ✅ OK (pendiente ID real) |
| Tablas con overflow-x wrapper | ✅ OK |
| 0 KB JavaScript cliente | ✅ OK |
| ADN visual: #111827, #F9F7F4, #A85535 | ✅ OK |
| Sin em-dash, sin orange-400 | ✅ OK |
| Precios alineados con calculator.ts | ✅ OK |
| Plazos reforma-banos alineados (2-3 semanas) | ✅ OK |
| 404 page con noindex | ✅ OK |
| Breadcrumb JSON-LD sin URLs inexistentes | ✅ OK — eliminado item /servicios/ de breadcrumb en 6 páginas hub |
| Schema JSON-LD GeneralContractor | ✅ OK |
| Canonical URLs | ✅ OK |
| Meta descriptions en todas las páginas | ✅ OK |

---

## Secuencia de lanzamiento recomendada

1. Titular entrega: teléfono, CIF/NIF, domicilio social
2. Crear cuenta Formspree → copiar ID
3. Editar `src/data/site.ts` con datos reales
4. Editar `src/pages/contacto.astro` con ID Formspree
5. Editar `src/pages/aviso-legal.astro` y `privacidad.astro` con CIF/NIF
6. Si se confirman años de experiencia: descomentar en `index.astro:287` y `como-trabajamos.astro:93`
7. `npm run build` — verificar 86 páginas OK
8. Deploy a producción
9. Submit sitemap en Google Search Console
10. Verificar formulario enviando prueba real
