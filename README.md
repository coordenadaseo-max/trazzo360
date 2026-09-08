# Trazzo360

Sitio estático en Astro para una empresa de reformas del Corredor del Henares.
SEO local: home, 6 hubs de servicio, 8 hubs de zona, 48 combinadas `/{servicio}/{zona}/`,
calculadora de precios, guías y páginas de utilidad.

## Arranque

```sh
npm install
npm run dev        # http://localhost:4321
```

Requiere Node `>=22.12.0` (declarado en `engines.node`). Con `nvm`, basta `nvm use 22`.
No hay `.nvmrc`: la versión mínima vive en `package.json`.

## Scripts

| Script | Qué hace |
|---|---|
| `npm run dev` | Servidor de desarrollo |
| `npm run build` | Genera el sitio en `dist/` |
| `npm run preview` | Sirve el `dist/` ya construido |
| `npm run check` | Busca placeholders bloqueantes en `dist/` y avisa de em-dash usado como marcador de lista |
| `npm run audit:content` | Longitud de `<title>` y `<meta description>`, y un solo `<h1>` por página |
| `npm run audit:schema` | JSON-LD parseable, `name` en entidades y breadcrumbs |
| `npm run audit:links` | Enlaces internos rotos, páginas huérfanas, mínimo de enlaces entrantes |
| `npm run audit:design` | Canon tipográfico del H1 de hero y radios fuera del sistema |
| `npm run audit:docs` | Contrato de artefactos externos: dónde vive cada documento y si declara su origen |
| `npm run audit` | Encadena las cinco auditorías anteriores |
| `npm run preflight` | `build` + `check` + `audit`. Puerta de publicación |

Una tarea de desarrollo se cierra con `npm run build && npm run audit`.
`npm run check` falla hoy a propósito: quedan placeholders de lanzamiento sin resolver
(teléfono real y ID de Formspree). Eso bloquea la publicación comercial, no el desarrollo.

## Indexación

`PUBLIC_SITE_INDEXING` controla si el sitio es indexable, y se lee en un único sitio
(`loadEnv` de Vite en `astro.config.mjs`) para que la configuración y `robots.txt` no puedan
discrepar.

- **Sin definir o `false`** — `robots.txt` emite `Disallow: /`, todas las páginas llevan
  `noindex, nofollow` y no se genera el sitemap. Es el estado de desarrollo.
- **`true`** — `robots.txt` emite `Allow: /` y se genera `sitemap-index.xml`.

Actívala en las variables de entorno del servidor de producción, no en el `.env` del repo.
Las variables y sus efectos están documentados en [`.env.example`](./.env.example); cópialo a
`.env` para desarrollo local.

## Documentación

[`CLAUDE.md`](./CLAUDE.md) es el punto de entrada: reglas de trabajo, copy, SEO, enlazado,
la jerarquía de precedencia entre documentos y qué documento manda en cada materia.
