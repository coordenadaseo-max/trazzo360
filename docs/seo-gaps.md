# SEO Gaps — Oportunidades pendientes

> Oportunidades identificadas pero **no ejecutadas aún**. Cada bloque indica si requiere decisión previa, presupuesto o contenido nuevo.

---

## Cluster de fontanería (alta prioridad — pendiente de decisión)

### Resumen ejecutivo

El cluster de fontanería tiene volumen de búsqueda consistente en el Corredor del Henares y KD bajo. La barrera de entrada es alta porque requiere posicionarse como servicio diferenciado (fontanería sola vs. fontanería integrada en reforma). La decisión previa es si Trazzo360 ofrece fontanería como servicio independiente o solo dentro de reformas.

**Posición sugerida:** Fontanería integrada en reforma (no servicio independiente de fontanero urgente). Eso permite capturar el volumen de búsquedas de tipo "cambio de tuberías" y "instalación fontanería" sin competir con fontaneros de guardia/urgencia.

### Keywords del cluster (datos DataForSEO — verificar volúmenes del research original)

| Keyword | Vol/mes | KD | Intent | URL sugerida |
|---|---|---|---|---|
| fontanero en {ciudad} | TODO: | TODO: | Transaccional urgente | No ejecutar — compete con fontaneros de urgencia |
| cambio de tuberías | TODO: | TODO: | Transaccional reforma | /servicios/fontaneria/ o integrar en reformas-integrales |
| instalación fontanería | TODO: | TODO: | Transaccional reforma | /servicios/fontaneria/ |
| cambio de bajantes | TODO: | TODO: | Informacional/transaccional | /guias/cuanto-cuesta-cambiar-bajantes/ |
| renovación fontanería piso | TODO: | TODO: | Transaccional | Combinar con reforma-pisos o hub propio |
| fugas de agua en pared | TODO: | TODO: | Informacional urgente | No ejecutar — compete con seguros/urgencias |
| cuánto cuesta cambiar las tuberías de un piso | TODO: | TODO: | Informacional | /guias/cuanto-cuesta-cambiar-tuberias/ |

### Arquitectura propuesta (si se decide ejecutar)

```
/servicios/fontaneria/                    — Hub de servicio (comercial)
/servicios/fontaneria/{zona}/             — 8 combinadas (anti-canibalización con hub)
/guias/cuanto-cuesta-renovar-fontaneria/  — Guía informacional
```

### Razón por la que no está en el roadmap actual

1. Requiere decidir si fontanería es un servicio independiente o siempre parte de reforma mayor
2. El hub de zona `reformas-integrales` ya captura parte del intent (fontanería como partida dentro de reforma)
3. "Fontanero de urgencia" tiene un perfil de cliente diferente al de reforma planificada

### Acción requerida antes de ejecutar

- [ ] Confirmar si Trazzo360 ofrece fontanería como servicio autónomo (sin obra de reforma asociada)
- [ ] Verificar volúmenes reales del research DataForSEO original del cluster fontanería
- [ ] Definir si el hub es `/servicios/fontaneria/` o si se integra en `/servicios/reformas-integrales/`

---

## Otros gaps identificados (menor prioridad)

### Electricidad / instalación eléctrica

Mismo patrón que fontanería: volumen existe, KD bajo, pero requiere decisión sobre si es servicio independiente.

| Keyword | Status |
|---|---|
| electricista {ciudad} | No ejecutar — compete con electricistas de urgencia |
| cambio cuadro eléctrico | Potencial — ya parte del contenido de reformas-integrales |
| instalación eléctrica piso | Potencial guía informacional |

### Pintura / pintores

Volumen alto pero KD también mayor. Competencia con pintores especializados que solo pintan.

| Keyword | Status |
|---|---|
| pintores en {ciudad} | No ejecutar por ahora — muy competido |
| pintura interior piso | Integrar en contenido de reforma-pisos |
| cuánto cuesta pintar un piso | Guía potencial (informacional, baja KD) |

---

*Última actualización: 2026-08-16*
