/**
 * Prefix a path with Astro's BASE_URL so it works whether the site is
 * deployed at root (custom domain, Vercel, Netlify) or under a subpath
 * (GitHub Pages at /ATAA/). Pass an absolute-style path like '/pt/' or
 * '/logo.png' and it returns the base-aware version.
 */
export function withBase(path: string): string {
  const base = import.meta.env.BASE_URL; // always ends with '/'
  return base + (path.startsWith('/') ? path.slice(1) : path);
}
