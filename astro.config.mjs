// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// Deployed via Vercel at root. When a custom domain (e.g. caia-triatlo.pt)
// is connected, set `site` to it for proper canonical URLs + sitemap.
export default defineConfig({
  i18n: {
    defaultLocale: 'pt',
    locales: ['pt', 'es', 'en'],
    routing: {
      prefixDefaultLocale: true,
      redirectToDefaultLocale: false,
    },
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
