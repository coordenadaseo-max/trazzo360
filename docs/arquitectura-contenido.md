# Arquitectura de contenido — Módulos M1–M9

> **Documento operativo.** Debe contrastarse con TRAZZO360-SYSTEM.md, DECISION-REGISTER.md y la implementación vigente antes de aplicar cambios.

> Sistema de 9 módulos reutilizables para las páginas hub de servicio.
> Cada módulo tiene un tipo que indica qué parte del contenido es única (LOCAL/SERVICIO) o reutilizable (PARAM/BOILERPLATE).

---

## Tipos de módulo

| Tipo | Significado | % de boilerplate |
|---|---|---|
| `[LOCAL]` | Contenido único por municipio | 0% — nunca copiar entre zonas |
| `[SERVICIO]` | Contenido único por servicio | 0% — nunca copiar entre servicios |
| `[LOCAL+SERVICIO]` | Único por combinación | 0% — no compartir |
| `[PARAM]` | Parametrizable con datos reales | Estructura compartida, datos únicos |
| `[BOILERPLATE]` | Idéntico en todas las páginas | Cuenta como boilerplate en % |

---

## M1 — Lead / Extracto [SERVICIO]

**Posición:** Inmediatamente bajo el H1, antes del primer H2.  
**Extensión:** 45–60 palabras exactas.  
**Propósito:** Responder en una frase la intención principal de búsqueda.

### Patrón HTML

```html
<div role="doc-abstract" class="...">
  <p class="lead">
    [Qué hacemos] en [zona] con [diferenciador principal]: [servicios concretos].
    [Plazo típico]. [Compromiso de precio].
  </p>
</div>
```

### Ejemplo (reforma-banos)

```html
<div role="doc-abstract" class="border-l-4 border-[#A85535] pl-6 my-8">
  <p class="lead text-lg text-gray-700 leading-relaxed">
    Reformamos baños en el Corredor del Henares con precio cerrado por contrato:
    cambio de bañera por ducha, alicatado completo, fontanería y sanitarios.
    El plazo habitual es de 10 a 15 días laborables para un baño de 5 m².
    El presupuesto, cerrado tras la visita técnica gratuita, no varía una vez firmado.
  </p>
</div>
```

### Checklist M1
- [ ] Incluye la keyword principal en las primeras 10 palabras
- [ ] Menciona precio cerrado o garantía de precio
- [ ] Menciona plazo concreto (con rango numérico)
- [ ] 45–60 palabras (no más)

---

## M2 — Diagnóstico del parque residencial [LOCAL]

**Posición:** Primera sección de contenido, bajo el lead.  
**Extensión:** 200–280 palabras.  
**Propósito:** Contextualizar el problema real del usuario en SU municipio concreto.

> **Regla de integridad:** Cada municipio tiene una tipología de edificación real y diferente.
> Nunca copiar párrafos entre zonas. Si no tienes datos verificados, usa `TODO:`.

### Estructura

```
H2: Qué [servicio] vemos habitualmente en [municipio]

P1: Período de construcción predominante + características específicas
P2: Problemas típicos derivados de esa época (verificados o TODO:)
P3: Qué evalúa la visita técnica gratuita en ese contexto
```

### Patrón HTML

```html
<section class="py-16 bg-[#F9F7F4]" aria-labelledby="h-parque">
  <div class="max-w-4xl mx-auto px-4">
    <h2 id="h-parque" class="...">
      Qué baños vemos habitualmente en el Corredor del Henares
    </h2>
    <p>...</p>
    <p>...</p>
    <p>...</p>
  </div>
</section>
```

---

## M3 — Licencias y trámites [LOCAL]

**Posición:** Después del contenido de servicio principal, antes de comparativa de precios.  
**Extensión:** 200–280 palabras.  
**Propósito:** Resolver la duda de tramitación para evitar sorpresas post-contrato.

> **Regla de integridad:** Los plazos exactos de tramitación varían por ayuntamiento.
> Si no están verificados para un municipio concreto, marcar con `TODO:`.

### Estructura

```
H2: ¿Necesitas licencia para [servicio] en [municipio]?

P1: Tipo de trámite más habitual para este servicio (comunicación previa / licencia menor)
P2: Cuándo aplica licencia de obra mayor (qué lo desencadena)
P3: Comunidad de propietarios (si aplica)
P4: Horario de obras y normativa de ruido (TODO: verificar por municipio)
```

### Patrón HTML

```html
<section class="py-16 bg-white" aria-labelledby="h-licencias">
  <div class="max-w-4xl mx-auto px-4">
    <h2 id="h-licencias" class="...">
      ¿Necesitas licencia para reformar el baño?
    </h2>
    <p>...</p>
    <!-- Callout para dato importante -->
    <div class="border-l-4 border-amber-400 bg-amber-50 p-5 my-6">
      <p class="text-sm font-semibold">Importante</p>
      <p class="text-sm">...</p>
    </div>
  </div>
</section>
```

---

## M4 — La decisión que condiciona el presupuesto [SERVICIO+LOCAL]

**Posición:** Dentro de la sección de descripción del servicio.  
**Extensión:** 180–250 palabras.  
**Propósito:** Ayudar al usuario a tomar LA decisión clave antes de pedir presupuesto.

### Por servicio

| Servicio | Decisión clave |
|---|---|
| reforma-banos | Bañera → ducha: extraplano vs. ducha italiana |
| reforma-cocinas | Conservar distribución vs. redistribuir |
| reformas-integrales | Reforma parcial vs. integral (threshold instalaciones) |
| reforma-pisos | Suelos+acabados vs. reforma con instalaciones |
| locales-comerciales | Obra menor vs. obra con licencia de actividad |
| comunidades-vecinos | Rehabilitación parcial vs. fachada completa |

---

## M5 — Comparativa de alternativas [SERVICIO]

**Posición:** Después de M4.  
**Extensión:** Tabla + 1 párrafo de contexto.

### Patrón HTML

```html
<section class="py-12 bg-[#F9F7F4]" aria-labelledby="h-comparativa">
  <div class="max-w-4xl mx-auto px-4">
    <h2 id="h-comparativa" class="...">Opciones y precios orientativos</h2>
    <p class="text-gray-600 mb-6">...</p>
    <div class="overflow-x-auto">
      <table class="w-full text-sm border-collapse">
        <caption class="text-left text-xs text-gray-400 mb-3">
          Precios orientativos para el Corredor del Henares. El precio final se cierra
          tras la visita técnica gratuita.
        </caption>
        <thead>
          <tr class="border-b-2 border-[#A85535]">
            <th class="text-left py-3 pr-4">Alcance</th>
            <th class="text-right py-3 pr-4">Coste orientativo</th>
            <th class="text-right py-3">Plazo</th>
          </tr>
        </thead>
        <tbody>
          <tr class="border-b border-gray-200">
            <td class="py-3 pr-4">...</td>
            <td class="text-right py-3 pr-4">...</td>
            <td class="text-right py-3">...</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</section>
```

---

## M6 — Cómo comparar presupuestos [SERVICIO]

**Posición:** Después de M5.  
**Extensión:** 6–8 pares término-definición.

### Patrón HTML

```html
<section class="py-16 bg-white" aria-labelledby="h-comparar">
  <div class="max-w-4xl mx-auto px-4">
    <h2 id="h-comparar" class="...">Cómo leer un presupuesto de reforma de baño</h2>
    <p class="text-gray-600 mb-8">...</p>
    <dl class="divide-y divide-gray-100">
      <div class="py-4 grid grid-cols-1 md:grid-cols-3 gap-2">
        <dt class="font-semibold text-gray-900 md:col-span-1">Impermeabilización</dt>
        <dd class="text-gray-600 md:col-span-2">...</dd>
      </div>
      <!-- … más pares … -->
    </dl>
  </div>
</section>
```

---

## M7 — Plazos reales [SERVICIO]

**Posición:** Después de M6.  
**Extensión:** 1 párrafo introductorio + tabla de fases.

### Patrón HTML

```html
<section class="py-12 bg-[#F9F7F4]" aria-labelledby="h-plazos">
  <div class="max-w-4xl mx-auto px-4">
    <h2 id="h-plazos" class="...">Plazos reales de una reforma de baño</h2>
    <p class="mb-6">...</p>
    <div class="overflow-x-auto">
      <table class="w-full text-sm border-collapse">
        <thead>
          <tr class="border-b-2 border-[#A85535]">
            <th class="text-left py-2 pr-4">Fase</th>
            <th class="text-right py-2 pr-4">Cambio bañera/ducha</th>
            <th class="text-right py-2">Reforma completa</th>
          </tr>
        </thead>
        <tbody>
          <!-- filas de fases -->
        </tbody>
      </table>
    </div>
    <p class="text-xs text-gray-400 mt-4">
      Plazos para baño estándar de 4–6 m². La fecha de entrega queda fijada en el contrato.
    </p>
  </div>
</section>
```

---

## M8 — Compromisos [BOILERPLATE / PARAM]

**Posición:** Antes del proceso paso a paso.  
**Extensión:** Usa el componente `Compromisos.astro`.

```astro
<Compromisos variant="full" />
```

En páginas combinadas usar `variant="condensed"` para reducir el peso de boilerplate.

---

## M9 — Obras realizadas [LOCAL]

**Posición:** Al final de la página, antes del CTA.  
**Estado actual:** Placeholder oculto hasta tener imágenes reales.

```html
<!-- M9: Obras realizadas — activar cuando haya imágenes verificadas -->
<!-- REGLA: solo imágenes de obras ejecutadas en este municipio específico -->
<!-- No usar imágenes genéricas de stock ni de otras ciudades -->
<!--
<section class="py-16 bg-white" aria-labelledby="h-obras">
  <div class="max-w-7xl mx-auto px-4">
    <h2 id="h-obras" class="...">Reformas de baño en [municipio]: ejemplos reales</h2>
    ...
  </div>
</section>
-->
```

---

## Objetivos de palabra por tipo de página

| Tipo | Rango | Máximo boilerplate |
|---|---|---|
| Hub de servicio (piloto) | 2.800–3.200 palabras | < 25% |
| Hub de zona | 1.700–1.900 palabras | < 30% |
| Página combinada | 1.500–1.700 palabras | < 35% |
| Guía informacional | 1.800–2.500 palabras | < 15% |

---

## Lista de comprobación antes de publicar una página nueva

- [ ] M1 lead presente y < 60 palabras
- [ ] Todos los `[LOCAL]` son únicos para este municipio (no copiados)
- [ ] Sin datos inventados (números, fechas, referencias a competidores)
- [ ] Sin frases prohibidas: "equipo propio", "sin subcontratas", sede en Alcalá
- [ ] Title 50–60c, meta 140–155c
- [ ] Schema válido (ningún campo con valor `undefined` o placeholder)
- [ ] FAQs: mínimo 7, máximo 12; preguntas reales, no de relleno
- [ ] Imágenes: alt descriptivo; si son de stock o de otra zona, no publicar
- [ ] `npm run preflight` pasa sin críticos
