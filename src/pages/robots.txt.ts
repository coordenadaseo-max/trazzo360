import type { APIRoute } from 'astro';

const isIndexingEnabled = import.meta.env.PUBLIC_SITE_INDEXING === 'true';

export const GET: APIRoute = () => {
  const content = isIndexingEnabled
    ? [
        'User-agent: *',
        'Allow: /',
        'Disallow: /lab/',
        'Disallow: /gracias/',
        '',
        'Sitemap: https://trazzo360.es/sitemap-index.xml',
        '',
      ].join('\n')
    : [
        '# STAGING/DESARROLLO — indexación desactivada',
        'User-agent: *',
        'Disallow: /',
        '',
      ].join('\n');

  return new Response(content, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
};
