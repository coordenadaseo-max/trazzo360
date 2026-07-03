# Hipótesis priorizadas — Home Trazzo360
**Keyword:** Empresa de reformas en el corredor del henares
**Fecha SERP:** 2026-07-01 · Geo: Province of Madrid, ES · Device: desktop

---

## Paisaje de la SERP

- **PAA/AI Overview:** 4 preguntas, todas de precio → Google usa AIO para intent informacional de precio
- **Map Pack:** 3 resultados GBP visibles. Intención local confirmada.
- **Top 10 orgánico:** Mix de webs propias (posiciones 1, 2, 3, 7, 8, 9, 10) y directorios (5, 6)
- **Relacionadas:** Búsquedas por ciudad ("Azuqueca de Henares"), por oficio ("Albañiles"), por marca ("LJ Reformas", "Henares Rys") → nicho no concentrado en una marca dominante

---

## Datos de competidores analizados

| # | Empresa | URL | Palabras ~| FAQ | Schema | Años | Teléfono en título |
|---|---------|-----|-----------|-----|--------|------|--------------------|
| GBP#1 | Reformas Farkas Ciprian | reformastorrejondeardoz.com | ~1.900 | ✗ | ✗ | No indica | ✅ en title tag |
| GBP#2 | Reformas y Diseño Sueños | sites.google.com | — | — | — | 15 años (GBP) | — |
| GBP#3 | Remacen Reparaciones | reformasmadridcentro.com | — | — | — | 15 años (GBP) | — |
| Org#1 | Reformas Henares | reformashenares.com | ~3.700 | ✅ 6 Qs | ✗ visible | 17 años | ✅ en title tag |
| Org#2 | LJ Reformas | ljreformas.com | ~3.000 | ✗ | ✗ visible | 20 años | ✗ |
| Org#3 | Reprysum | reprysum.es | ~2.300 | ✗ | ✗ visible | 20 años | ✗ |
| Org#10 | Juan Salcedo | reformasjuansalcedo.com | ~2.800 | ✗ | ✗ visible | 25 años | ✗ |

**Nota:** Ningún competidor tiene schema markup visible implementado. Trazzo360 ya lo tiene → ventaja real.

---

## GBP / Local Pack — datos clave

| Posición | Reviews | Rating | Nota destacada |
|----------|---------|--------|----------------|
| #1 | 56 | 5.0 | Torrejón · "Estimaciones online" NO presente |
| #2 | 89 | 4.6 | Alcalá · "Estimaciones online" ✅ |
| #3 | 68 | 4.9 | Alcalá · "Estimaciones online" ✅ |

**Umbral mínimo de reviews** para entrar en pack: ~56 con rating ≥ 4.6.
El volumen más alto en pack son 89 reviews. La mediana está en 68.

---

## Hipótesis priorizadas

### [HIGH · easy] 1. Teléfono en el title tag
**Patrón:** 2/2 líderes (org#1 + GBP#1) incluyen número de teléfono en el title tag.
Ejemplos: "Reformas Henares — Pide presupuesto gratis — 949 96 00 19" · "Reformas Torrejón de Ardoz ║ Farkas Ciprian ☎️ 642 146 733"
**Confianza:** Alta — patrón presente en los dos resultados mejor posicionados (orgánico + local pack)
**Implicación:** Añadir teléfono real al title tag de la home una vez tengamos el número definitivo.
**Esfuerzo:** Bajo (1 línea en index.astro y Layout)
**Impacto estimado:** Medio-alto (CTR en SERP, señal de negocio activo)

---

### [HIGH · easy] 2. Oficios en la meta description, no solo servicios
**Patrón:** Org#1 tiene en snippet: "fontanería, electricidad, albañilería, pintura". Todos los competidores top listan oficios.
Trazzo360 actual: "Baños, cocinas, pisos y locales" (servicios, no oficios).
**Confianza:** Alta — el snippet del #1 orgánico lleva exactamente esta estructura
**Implicación:** Reescribir meta description para incluir "fontanería, electricidad, albañilería, pintura" junto a las zonas
**Esfuerzo:** Bajo
**Impacto estimado:** Medio (mejor match con intent del buscador, más palabras en negrita en SERP)

---

### [HIGH · easy] 3. H3 de ciudad en la sección de zonas
**Patrón:** Org#1 tiene 6 H3 del tipo "Reforma integral en Alcalá de Henares", "Reforma parcial en Coslada", "Reforma de cocina en San Fernando de Henares". Org#3 (Reprysum) tiene 8 H3 por municipio.
Trazzo360 actual: sección Zonas con enlaces pero sin H3 por ciudad con contenido.
**Confianza:** Alta — 2/5 competidores lo hacen; los dos más orientados a SEO local
**Implicación:** En la sección de zonas del home, añadir H3 por ciudad primaria con 1-2 frases descriptivas de los trabajos realizados allí
**Esfuerzo:** Bajo
**Impacto estimado:** Alto (crea relevancia semántica para "[servicio] en [ciudad]" sin página aparte)

---

### [HIGH · easy] 4. FAQs alineadas con PAA — ya implementado ✅
**Patrón:** Org#1 es el único competidor con FAQ (6 preguntas). Las 4 PAA de la SERP son de precio.
Trazzo360 actual: 6 FAQs de precio + FAQPage schema → adelantamos al 80% de la competencia
**Confianza:** Alta
**Implicación:** Mantener. Considerar añadir schema en respuestas más cortas y directas al inicio de cada answer (Google premia párrafo de respuesta en primeras 2 frases).
**Esfuerzo:** Bajo (ajuste de copy)
**Impacto estimado:** Medio-alto (ya en posición favorable, refinar para AIO)

---

### [HIGH · medium] 5. Profundidad de contenido — meta 3.500+ palabras
**Patrón:** Org#1 (líder) tiene ~3.700 palabras. El resto: 1.800-3.000. Google premia el más completo.
Trazzo360 actual: home tiene secciones ricas pero profundidad exacta sin verificar.
**Confianza:** Media (correlación, no causalidad comprobada)
**Implicación:** Verificar palabras actuales. Si < 3.000, añadir contenido real (descripción por servicio más amplia, sección de municipios con párrafo, proceso más detallado)
**Esfuerzo:** Medio
**Impacto estimado:** Medio

---

### [HIGH · medium] 6. WhatsApp como CTA visible en hero
**Patrón:** 3/5 competidores tienen WhatsApp prominente (LJ Reformas, Farkas, Reprysum). El líder orgánico NO lo tiene pero sí los del Local Pack.
**Confianza:** Media — señal de usabilidad/conversión, no directamente SEO
**Implicación:** Añadir botón WhatsApp flotante o en CTA secundario del hero
**Esfuerzo:** Bajo
**Impacto estimado:** Medio (conversión, no ranking)

---

### [MEDIUM · easy] 7. Schema: Trazzo360 ya gana a toda la competencia ✅
**Patrón:** 0/5 competidores tienen schema markup visible. Trazzo360 tiene LocalBusiness + FAQPage.
**Confianza:** Alta (observación directa)
**Implicación:** Mantener. Añadir `openingHoursSpecification` completo si no está, y `priceRange`.
**Esfuerzo:** Bajo
**Impacto estimado:** Alto a largo plazo (Google usa schema para AIO y rich results)

---

### [MEDIUM · easy] 8. Marcas de materiales como señal de calidad
**Patrón:** Org#1 menciona Cosentino, Dekton, Silestone (marcas premium). Ningún otro lo hace.
**Confianza:** Baja (un solo caso)
**Implicación:** Mencionar marcas de confianza que se usan: Porcelanosa, Roca, Grohe, Butech, u otras reales. Solo si son verídicas.
**Esfuerzo:** Bajo
**Impacto estimado:** Bajo-medio (señal E-E-A-T, no ranking directo)

---

### [HIGH · hard] 9. Reviews en GBP — gap crítico para Local Pack
**Patrón:** Top 3 GBP tienen 56-89 reviews con rating ≥ 4.6. Sin reviews no hay pack.
**Confianza:** Alta — esto es el factor más documentado en Local SEO
**Implicación:** Estrategia activa de solicitud de reseñas desde el primer proyecto: SMS/WhatsApp post-obra con link directo al perfil GBP.
**Esfuerzo:** Alto (no es web, es operativa de negocio)
**Impacto estimado:** Muy alto — sin reviews no hay Local Pack

---

## Gaps actuales de Trazzo360 vs competencia

| Gap | Impacto | ¿Fácil? | Acción |
|-----|---------|---------|--------|
| Sin teléfono en title | Alto | ✅ | Añadir cuando tengamos número |
| Meta desc sin oficios | Medio | ✅ | Reescribir ya |
| Sin H3 por ciudad en home | Alto | ✅ | Añadir en sección zonas |
| Sin WhatsApp flotante | Medio | ✅ | Añadir widget |
| Sin reviews GBP | Muy alto | ✗ | Estrategia post-obra |
| Sin fotos en GBP | Alto | ✗ | Subir cuando haya obras |

## Ventajas actuales de Trazzo360 vs competencia

| Ventaja | Detalle |
|---------|---------|
| Schema markup | Único con LocalBusiness + FAQPage implementado |
| FAQs | Solo nosotros y el #1 orgánico las tenemos |
| Arquitectura URLs | 64 páginas vs 1-5 páginas de la mayoría |
| Sitemap automático | via @astrojs/sitemap |
| Precio cerrado explícito | Diferenciador de marca no presente en competidores |
| Garantía 2 años | Más explícita que la competencia |

---

## Próximos pasos recomendados (home)

1. **Inmediato:** Reescribir meta description con oficios + "precio cerrado"
2. **Inmediato:** Añadir H3 por ciudad primaria en sección Zonas
3. **Cuando tengamos teléfono:** Añadir a title tag
4. **Esta semana:** Añadir WhatsApp button visible
5. **Paralelo (negocio):** Activar estrategia de reviews GBP desde primer proyecto
