// Edit-only constants used across the site. Strings that need translating
// live in src/i18n/*.ts — this file is for non-translatable values.

export const SITE = {
  // Luma event for the Open Day. The button.js embed intercepts clicks and
  // opens Luma's checkout modal in-place; the href is the fallback.
  lumaEventUrl: 'https://luma.com/event/evt-XEDi3UAiwfnFeNG',
  lumaEventId: 'evt-XEDi3UAiwfnFeNG',

  socials: {
    facebook: 'https://www.facebook.com/profile.php?id=61588968459322',
    instagram: 'https://www.instagram.com/caiatriatlo/',
  },

  // Hero carousel slides. Drop images into public/images/hero/ and add an
  // entry here. With a single slide, no animation runs. With 2+ slides,
  // they crossfade automatically.
  heroSlides: [
    { src: '/images/hero/hero.jpg', alt: 'Barragem do Caia' },
  ] as Array<{ src: string | null; alt: string }>,

  // Optional photos for the Open Day 3-leg image strip. Drop images into
  // public/images/open-day/ and reference them here. Null = icon placeholder.
  openDayImages: {
    swim: '/images/open-day/swim.jpeg' as string | null,
    bike: '/images/open-day/bike.jpeg' as string | null,
    run:  '/images/open-day/run.jpg' as string | null,
  },

  // Sponsor slots. Set `logo` to an image path under /public/images/sponsors/
  // to render a real logo. Leave null for "Espaço disponível" placeholder.
  sponsors: {
    principais: [
      { logo: null, name: null, url: null },
      { logo: null, name: null, url: null },
      { logo: null, name: null, url: null },
    ],
    apoios: [
      { logo: null, name: null, url: null },
      { logo: null, name: null, url: null },
      { logo: null, name: null, url: null },
      { logo: null, name: null, url: null },
    ],
    parceiros: [
      { logo: null, name: null, url: null },
      { logo: null, name: null, url: null },
      { logo: null, name: null, url: null },
      { logo: null, name: null, url: null },
      { logo: null, name: null, url: null },
      { logo: null, name: null, url: null },
    ],
  },

  // Direção photos. Set `photo` to a path under /public/images/team/.
  // Names + roles come from the i18n dictionary.
  team: [
    { photo: null },
    { photo: null },
    { photo: null },
    { photo: null },
    { photo: null },
  ],
};
