// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// Deployed to GitHub Pages at https://pgranate.github.io/ATAA/
// Once a custom domain (e.g. caia-triatlo.pt) is set up, change `site` to
// the domain root and clear `base` (or set base: '/').
export default defineConfig({
  site: 'https://pgranate.github.io',
  base: '/ATAA/',
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
