// @ts-check
import { defineConfig } from 'astro/config';
import { loadEnv } from 'vite';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

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
        return (
          !page.includes('/gracias/') &&
          !page.includes('/aviso-legal/') &&
          !page.includes('/privacidad/')
        );
      },
    }),
  ],
});
