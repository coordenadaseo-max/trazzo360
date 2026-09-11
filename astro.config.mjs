// @ts-check
import { defineConfig } from 'astro/config';
import { loadEnv } from 'vite';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import { isLabUrl, isNeverIndexedUrl } from './scripts/lib/scope.mjs';

const { PUBLIC_SITE_INDEXING } = loadEnv(process.env.NODE_ENV ?? 'production', process.cwd(), '');
const isIndexingEnabled = PUBLIC_SITE_INDEXING === 'true';

export default defineConfig({
  site: 'https://trazzo360.es',
  output: 'static',
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [
    sitemap({
      filter: (page) => {
        if (!isIndexingEnabled) return false;
        if (isLabUrl(page)) return false;            // laboratorio: scripts/lib/scope.mjs
        if (isNeverIndexedUrl(page)) return false;    // páginas con noindex propio: scripts/lib/scope.mjs
        return true;
      },
    }),
    {
      // Elimina el laboratorio del output en builds de producción. Los patrones
      // salen de scripts/lib/scope.mjs, la misma definición que usan las auditorías.
      name: 'exclude-lab-in-production',
      hooks: {
        'astro:build:done': async ({ dir }) => {
          if (!isIndexingEnabled) return;
          const { rm, readdir } = await import('node:fs/promises');
          const { join } = await import('node:path');
          const root = dir.pathname;
          let removed = 0;
          for (const entry of await readdir(root, { withFileTypes: true })) {
            if (!entry.isDirectory() || !isLabUrl(`/${entry.name}/`)) continue;
            await rm(join(root, entry.name), { recursive: true, force: true });
            removed++;
          }
          if (removed) console.log(`[build] ✓ ${removed} directorio(s) de laboratorio eliminados del output`);
        },
      },
    },
  ],
});
