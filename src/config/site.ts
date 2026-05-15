// Edit-only constants used across the site. Strings that need translating
// live in src/i18n/*.ts — this file is for non-translatable values.

export const SITE = {
  // Master switch for the registration flow. Set to false until the event has
  // municipal authorization — disables both Luma CTAs (Hero + Open Day) and
  // overlays an "Em breve" banner on the Open Day section. Flip to `true`
  // when registration is ready to open publicly.
  registrationOpen: false,

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
      { logo: '/images/sponsors/cm-campo-maior.svg', name: 'Câmara Municipal de Campo Maior', url: 'https://www.cm-campo-maior.pt/' },
      { logo: null, name: null, url: null },
      { logo: null, name: null, url: null },
    ],
    apoios: [
      { logo: '/images/sponsors/analizza.png', name: 'Analizza', url: 'https://analizza.pt', offsetY: 8 },
      { logo: '/images/sponsors/delta.png', name: 'Delta Cafés', url: 'https://deltacafes.com' },
      { logo: '/images/sponsors/fito-gr.png', name: 'Fito GR', url: 'https://www.facebook.com/fitogrlojaagricola/', scale: 1.15 },
      { logo: '/images/sponsors/carnalentejana.png', name: 'Carnalentejana', url: 'https://www.carnalentejana.com/', scale: 1.3, offsetY: -12 },
    ],
    parceiros: [
      { logo: '/images/sponsors/bricoelvas.png', name: 'Bricoelvas', url: 'https://bricoelvas.pt' },
      { logo: '/images/sponsors/infinite-glassworks.png', name: 'Infinite Glassworks', url: 'https://infinitegw.com/' },
      { logo: '/images/sponsors/astteca.png', name: 'Astteca', url: 'https://www.facebook.com/p/Astteca-Topografia-Servi%C3%A7os-de-topografia-Lda-100054499148000/', scale: 1.2 },
      { logo: '/images/sponsors/ambisolution.png', name: 'Ambisolution', url: 'https://ambisolution.pt', scale: 1.2 },
      { logo: '/images/sponsors/casas-alentejo.png', name: 'Casas Alentejo', url: 'https://www.casasalentejo.pt/' },
      { logo: '/images/sponsors/vendap.svg', name: 'Vendap', url: 'https://www.vendap.pt/' },
    ],
  },

};
