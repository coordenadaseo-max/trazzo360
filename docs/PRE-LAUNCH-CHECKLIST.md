# PRE-LAUNCH CHECKLIST — Trazzo360

> Estado: **READY FOR PRE-LAUNCH DATA**
> Última revisión: 2026-08-21 (Lote F — Auditoría Global Preproducción)
>
> La web está técnicamente preparada. Solo quedan los datos reales del titular antes del lanzamiento.

---

## 🔴 BLOQUEANTES (obligatorios antes de publicar)

### 1. ~~Teléfono real~~ ✅ COMPLETADO
- **Archivo**: `src/data/site.ts`
- ✅ **RESUELTO 2026-09-10.** `phone: '+34614530656'` (E.164: alimenta los `tel:` y el
  `telephone` del schema) · `phoneDisplay: '614 53 06 56'` · `whatsapp: '34614530656'`
  (wa.me exige el prefijo de país **sin** `+`; por eso los dos campos difieren).
- **Efecto**: desbloquea teléfono en header/footer/contacto, WhatsApp en header/flotante, horario visible, `openingHoursSpecification` en schema JSON-LD

### 2. Formspree (formulario de contacto)
- **Archivo**: `src/data/site.ts` → `formspreeId`. Está centralizado: lo consumen el
  formulario de contacto y el de captura de la calculadora.
- **Efecto al ponerlo:** el bloque «¿Te enviamos este desglose por correo?» de la
  calculadora **aparece solo**. Hoy no se renderiza, a propósito: un formulario que
  apunta a un ID inexistente pierde cada lead sin avisar.
- `action="https://formspree.io/f/YOUR_FORM_ID"` → reemplaza `YOUR_FORM_ID` con tu ID real
- Crear cuenta en https://formspree.io, crear formulario, copiar ID (ej: `xpzgkwqr`)

### 3. CIF/NIF (páginas legales)
- **Archivo**: `src/pages/aviso-legal.astro` — buscar `[Completar con tu CIF/NIF]`
- **Archivo**: `src/pages/privacidad.astro` — buscar `[Completar con tu CIF/NIF]`
- Reemplaza `[Completar con tu CIF/NIF]` con el NIF/CIF real del titular

### 4. Domicilio social (páginas legales)
- **Archivo**: `src/data/site.ts`
- `address: 'Corredor del Henares, Madrid'` → dirección postal real del titular
- Se usa en aviso-legal y privacidad

### 5. ~~Años de experiencia~~ — NO es bloqueante
- **Archivo**: `src/data/trust.ts` → `AUTHOR.yearsInTrade = 15`
- **Ya se publica** en 8 páginas como «más de 15 años en obra». CLAUDE.md §0 lo autoriza
  expresamente: es experiencia de la persona, no antigüedad de la marca.
- La versión anterior de esta entrada decía que el número no se renderizaba y mandaba
  descomentar bloques que no existen. Corregido junto a DEC-A09 el 2026-09-07.

### 6. `PUBLIC_SITE_INDEXING` en las variables de entorno del deploy
- **Dónde**: panel de Vercel → Settings → Environment Variables del proyecto. **No en el repo.**
- **Referencia**: [`.env.example`](../.env.example) documenta la variable y el efecto de cada valor.
- `PUBLIC_SITE_INDEXING=true` en el entorno de Production.
- **Por qué es bloqueante:** `.env` está en `.gitignore`, así que la variable **no viaja al
  deploy**. Si no se declara en Vercel, el build de producción publica un `robots.txt` con
  `Disallow: /`, mete `noindex, nofollow` en todas las páginas y **no genera el sitemap**.
  El sitio quedaría online y completamente invisible para Google, sin ningún error visible que lo delate.
- **Cómo verificarlo tras el deploy:** abrir `https://trazzo360.es/robots.txt` — debe decir
  `Allow: /` y anunciar el sitemap — y `https://trazzo360.es/sitemap-index.xml`, que debe
  existir y no dar 404.

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
| 0 claims 24h/48h | ⚠️ PENDIENTE — existen promesas de "48 horas" en `src/pages/index.astro` (paso «Presupuesto cerrado» del proceso) y en `src/data/zones-content.ts` (FAQ «cómo pedir presupuesto»); localizar con `grep -rn "48 horas" src/`. Confirmar con titular si son realistas antes de publicar |
| yearsInTrade no renderizado | ✅ OK — bloqueado en index y como-trabajamos |
| wa.me condicional (0 renders con placeholder) | ✅ OK — Layout, Header, contacto |
| openingHoursSpecification condicional | ✅ OK — Layout.astro |
| SITE.hours condicional | ✅ OK — Header, Footer, contacto |
| noindex global (staging/dev) | ✅ OK en local — controlado por `PUBLIC_SITE_INDEXING`. **En producción depende del bloqueante 6**: la variable no viaja en el repo |
| Sitemap: 71 URLs (excluye noindex) | ✅ OK — 71 sobre el build del 2026-09-07, calculado aplicando el filtro de `astro.config.mjs` al listado de 74 páginas. Falta confirmarlo leyendo el `sitemap-index.xml` real con `PUBLIC_SITE_INDEXING=true` |
| robots.txt (Disallow: /gracias/) | ✅ OK — `Disallow: /lab/` retirado al eliminarse las páginas de laboratorio. En staging emite `Disallow: /` |
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
6. ~~Descomentar años de experiencia~~ — no aplica: «más de 15 años en obra» ya se publica como experiencia de la persona. Ver DEC-A09
7. `npm run build` — verificar el recuento con `find dist -name 'index.html' | wc -l` (75 páginas: 74 + `404.html` en el build del 2026-09-07)
8. Deploy a producción
9. Submit sitemap en Google Search Console
10. Verificar formulario enviando prueba real
