# Propuestas de title y meta — 69 páginas

> **Documento operativo.** Debe contrastarse con TRAZZO360-SYSTEM.md, DECISION-REGISTER.md y la implementación vigente antes de aplicar cambios.

> **Las propuestas de title/meta son un snapshot de trabajo y pueden haber sido sustituidas posteriormente. No sobrescribir metadata vigente únicamente porque aparezca aquí.**

> **Umbral CLAUDE.md:** title 50–60c (warn <45 o >65), meta 140–155c (warn <120 o >165).
> Recuentos calculados manualmente. Verificar con `npm run audit:content` tras construir.
> Símbolo ✅ = dentro del rango ideal. ⚠ = advertencia. ❌ = crítico.

---

## Patrones por tipo de página

### Home
| Campo | Propuesta | c |
|---|---|---|
| title | `Empresa de Reformas en el Corredor del Henares \| Trazzo360` | 58c ✅ |
| meta | `Reformas integrales, baños, cocinas, pisos y locales en el Corredor del Henares. Precio cerrado por contrato, plazo garantizado y presupuesto gratis en 24h.` | 155c ✅ |

### Cómo trabajamos
| Campo | Propuesta | c |
|---|---|---|
| title | `Cómo Trabajamos \| Compromisos y Garantías \| Trazzo360` | 53c ✅ |
| meta | `Precio cerrado por contrato, pago en tres fases, garantía de 2 años en ejecución y 14 días de desistimiento. Los 6 compromisos de Trazzo360 antes de firmar.` | 155c ✅ |

### Proyectos
| Campo | Propuesta | c |
|---|---|---|
| title | `Proyectos de Reforma: Antes y Después \| Trazzo360` | 51c ✅ |
| meta | `Reformas de baños, cocinas, pisos y locales ejecutadas en el Corredor del Henares. Fotografías de obra y resultado final. Precio cerrado, plazo garantizado.` | 154c ✅ |

### Contacto
| Campo | Propuesta | c |
|---|---|---|
| title | `Presupuesto de Reforma Gratis en 24h \| Trazzo360` | 50c ✅ |
| meta | `Solicita tu presupuesto de reforma sin compromiso. Visita técnica gratuita, presupuesto cerrado en 48h. Reformas en el Corredor del Henares con precio fijo.` | 154c ✅ |

---

## Hubs de servicio (6 páginas)

### Patrón actual (en [slug].astro)
```
{service.title} en el Corredor del Henares | {SITE.name}
```

| Servicio | Title actual | c | Propuesta | c |
|---|---|---|---|---|
| Reformas Integrales | `Reformas Integrales en el Corredor del Henares \| Trazzo360` | 59c ✅ | Sin cambio | — |
| Reforma de Baños | `Reforma de Baños en el Corredor del Henares \| Trazzo360` | 55c ✅ | Sin cambio — el piloto usa este title | — |
| Reforma de Cocinas | `Reforma de Cocinas en el Corredor del Henares \| Trazzo360` | 57c ✅ | Sin cambio | — |
| Reforma de Pisos y Chalets | `Reforma de Pisos y Chalets en el Corredor del Henares \| Trazzo360` | 64c ⚠>65 | `Reforma de Pisos y Viviendas en el Corredor del Henares \| Trazzo360` | 63c ⚠ |
| Reformas de Locales Comerciales | `Reformas de Locales Comerciales en el Corredor del Henares \| Trazzo360` | 71c ⚠>70 | `Reforma de Locales y Oficinas en el Corredor del Henares \| Trazzo360` | 63c ⚠ |
| Reformas en Comunidades de Propietarios | `Reformas en Comunidades de Propietarios en el Corredor del Henares \| Trazzo360` | 81c ❌ | `Rehabilitación de Edificios y Comunidades en el Corredor \| Trazzo360` | 62c ⚠ |

> **Acción requerida:** Cambiar las plantillas de locales-comerciales y comunidades-vecinos en `[slug].astro` o en el hub estático.

### Metas de hubs de servicio (patrón actual vs. propuesto)

Patrón actual: `{service.title} en Alcalá, Torrejón de Ardoz y el Corredor del Henares. Precio cerrado y presupuesto gratis en 24h.` ≈ 114–120c (⚠ <120)

**Propuesta de patrón:**
```
{Keyword principal} en el Corredor del Henares: {acción concreta 1}, {acción concreta 2}. Precio cerrado por contrato y presupuesto gratis en 24h.
```

| Servicio | Meta propuesta | c |
|---|---|---|
| reforma-banos | `Reforma de baños en el Corredor del Henares: cambio de bañera por ducha, alicatado, fontanería y sanitarios. Precio cerrado, presupuesto gratis en 24h.` | 152c ✅ |
| reformas-integrales | `Reformas integrales en el Corredor del Henares: redistribución, instalaciones, baño, cocina y acabados. Un interlocutor, precio cerrado, plazo garantizado.` | 153c ✅ |
| reforma-cocinas | `Reforma de cocinas en el Corredor del Henares: muebles, encimera, electrodomésticos, fontanería y electricidad. Diseño incluido, precio cerrado en 48h.` | 150c ✅ |
| reforma-pisos | `Reforma de pisos en el Corredor del Henares: suelos, baño, cocina, carpintería y pintura. Presupuesto cerrado tras visita técnica gratuita. Desde 18.000€.` | 154c ✅ |
| locales-comerciales | `Reforma de locales y oficinas en el Corredor: electricidad, fontanería, pladur y licencia de actividad. Fecha de apertura garantizada. Precio cerrado.` | 148c ✅ |
| comunidades-vecinos | `Rehabilitación de edificios, fachadas y comunidades de propietarios en el Corredor. Proyecto técnico incluido, gestión de licencias, precio cerrado.` | 147c ✅ |

---

## Hubs de zona (8 páginas)

### Patrón actual (en zonas/[slug].astro tras corrección)
```
Empresa de Reformas en {zone.name} | {SITE.name}
```

| Zona | c | Estado | Propuesta si <45c |
|---|---|---|---|
| Alcalá de Henares | 46c | ⚠<45 → 46c, aceptable | `Empresa de Reformas en Alcalá de Henares \| Trazzo360` = 50c ✅ |
| Torrejón de Ardoz | 48c | ⚠ borderline | `Empresa de Reformas en Torrejón de Ardoz \| Trazzo360` = 52c ✅ |
| Coslada | 42c | ⚠<45 | `Reformas en Coslada: Precio Cerrado \| Trazzo360` = 49c ⚠ |
| San Fernando de Henares | 58c | ✅ | Sin cambio |
| Guadalajara | 46c | ⚠<45 → 46c, borderline | `Reformas en Guadalajara: Presupuesto Gratis \| Trazzo360` = 52c ✅ |
| Azuqueca de Henares | 50c | ✅ | Sin cambio |
| Meco | 39c | ⚠<45 | `Empresa de Reformas en Meco: Precio Cerrado \| Trazzo360` = 53c ✅ |
| Camarma de Esteruelas | 56c | ✅ | Sin cambio |

> **Recomendación:** Cambiar el patrón de title en `zonas/[slug].astro` para los municipios cortos.
> Propuesta de patrón condicional: si `zone.name.length < 12`, usar `Empresa de Reformas en ${zone.name}: Precio Cerrado | ${SITE.name}`.

### Metas de hubs de zona (patrón actual)

Patrón actual: `Trazzo360, empresa de reformas en ${zone.name}. Reformas integrales, baños, cocinas, pisos, locales y comunidades de vecinos. Precio cerrado y presupuesto gratis en 24h.`

Recuento ejemplo (Alcalá de Henares): `Trazzo360, empresa de reformas en Alcalá de Henares. Reformas integrales, baños, cocinas, pisos, locales y comunidades de vecinos. Precio cerrado y presupuesto gratis en 24h.` = 175c ⚠>165

**Propuesta de patrón:**
```
Empresa de reformas en {city}: reforma de baños, cocinas, pisos y locales. Presupuesto gratis en 24h. Precio cerrado y plazo garantizado.
```
Ejemplo Alcalá: `Empresa de reformas en Alcalá de Henares: baños, cocinas, pisos y locales. Presupuesto gratis en 24h. Precio cerrado y plazo garantizado.` = 152c ✅

---

## Páginas combinadas (48 páginas)

### Patrón de title actual (en [barrio].astro o equivalente)
```
{service.title} en {zone.name} | {SITE.name}
```

Rango de caracteres:
- Mínimo: "Reforma de Baños en Meco | Trazzo360" = 36c ❌<45
- Máximo: "Reformas en Comunidades de Propietarios en San Fernando de Henares | Trazzo360" = 78c ❌>70

### Propuesta de patrón corregido

Para servicios con título largo, usar el shortTitle en combinadas:

```
{shortTitle} en {zone.name}: Precio Cerrado | {SITE.name}
```

| Servicio | shortTitle | Ejemplo (zona más larga) | c |
|---|---|---|---|
| reforma-banos | Reforma de Baños | `Reforma de Baños en San Fernando de Henares: Precio Cerrado \| Trazzo360` | 72c ⚠ |
| reformas-integrales | Reformas Integrales | `Reformas Integrales en San Fernando de Henares: Precio Cerrado \| Trazzo360` | 75c ❌ |
| reforma-cocinas | Reforma de Cocinas | `Reforma de Cocinas en San Fernando de Henares: Precio Cerrado \| Trazzo360` | 73c ⚠ |
| reforma-pisos | Reforma de Pisos | `Reforma de Pisos en San Fernando de Henares: Precio Cerrado \| Trazzo360` | 70c ⚠ |
| locales-comerciales | Reforma de Locales | `Reforma de Locales en San Fernando de Henares: Precio Cerrado \| Trazzo360` | 73c ⚠ |
| comunidades-vecinos | Obras en Comunidades | `Obras en Comunidades en San Fernando de Henares: Precio Cerrado \| Trazzo360` | 74c ⚠ |

**Alternativa más corta (recomendada para combinadas):**
```
{servicio corto} en {city} | Precio Cerrado | {SITE.name}
```

| Ejemplo | c |
|---|---|
| `Reforma de Baños en Meco \| Precio Cerrado \| Trazzo360` | 52c ✅ |
| `Reforma de Baños en San Fernando de Henares \| Precio Cerrado \| Trazzo360` | 67c ⚠ |
| `Reformas Integrales en Alcalá de Henares \| Precio Cerrado \| Trazzo360` | 65c ⚠ |
| `Obras en Comunidades en Guadalajara \| Precio Cerrado \| Trazzo360` | 63c ⚠ |

> **Acción requerida:** Actualizar el template de `[barrio].astro` con el patrón corregido.
> Las páginas de comunidades-vecinos en zonas largas seguirán quedando ≈65-67c, lo que es
> aceptable (rango de tolerancia) mientras se resuelve con shortTitle más corto.

### Meta de combinadas (patrón propuesto)
```
{Servicio} en {city}: precio cerrado por contrato, presupuesto gratis en 24h. Sin sorpresas de precio ni de plazo.
```

Ejemplo: `Reforma de baños en Meco: precio cerrado por contrato, presupuesto gratis en 24h. Sin sorpresas de precio ni de plazo.` = 119c ⚠<120
→ Ampliar: `Reforma de baños en Meco: cambio de bañera por ducha, alicatado y sanitarios. Precio cerrado, presupuesto gratis en 24h. Sin sorpresas.` = 141c ✅

---

## Páginas legales

| Página | Title actual | c | Estado |
|---|---|---|---|
| /privacidad/ | `Política de Privacidad \| ${SITE.name}` | ~36c | ⚠<45 |
| /aviso-legal/ | `Aviso Legal y Condiciones de Uso \| ${SITE.name} Reformas` | 53c | ✅ |
| /cookies/ | `Política de Cookies \| ${SITE.name}` | ~37c | ⚠<45 |

> Las páginas legales no son páginas SEO objetivo, por lo que las advertencias son aceptables.
> No es prioritario corregirlas.

---

## Resumen de acciones pendientes

1. **[slug].astro (hubs de servicio):** Corregir titles de locales-comerciales y comunidades-vecinos. Ampliar metas a 140-155c.
2. **zonas/[slug].astro (hubs de zona):** Añadir ": Precio Cerrado" para municipios con nombre corto (<12c). Acortar meta a ≤165c.
3. **[barrio].astro (combinadas):** Cambiar patrón de title para incluir "| Precio Cerrado |". Ampliar metas con servicio concreto.
4. **Privacidad + cookies:** Opcional — ampliar a >45c.
