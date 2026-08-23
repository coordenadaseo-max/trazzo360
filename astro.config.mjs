// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

const isIndexingEnabled = process.env.PUBLIC_SITE_INDEXING === 'true';

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
        return (
          !page.includes('/gracias/') &&
          !page.includes('/lab/') &&
          !page.includes('/aviso-legal/') &&
          !page.includes('/privacidad/')
        );
      },
    }),
    {
      // Elimina /lab/ del output en builds de producción.
      // En desarrollo las páginas se sirven normalmente para uso interno.
      name: 'exclude-lab-in-production',
      hooks: {
        'astro:build:done': async () => {
          if (isIndexingEnabled) {
            const { rm } = await import('node:fs/promises');
            const { join } = await import('node:path');
            try {
              await rm(join(process.cwd(), 'dist', 'lab'), { recursive: true, force: true });
              console.log('[build] ✓ /lab/ eliminado del output de producción');
            } catch {
              // directorio no existe, no hay nada que hacer
            }
          }
        },
      },
    },
  ],
});
