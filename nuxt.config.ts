export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    "@nuxt/ui",
    "@nuxt/content",
    '@nuxt/image',
    "@hypernym/nuxt-anime",
    "@nuxt/fonts",
    "@pinia/nuxt",
    '@vueuse/nuxt',
    ['nuxt-mail', {
      message: {
        to: process.env.EMAIL_TO,
        cc: process.env.EMAIL_CC || '',
        bcc: process.env.EMAIL_BCC || '',
      },
      smtp: {
        host: process.env.SMTP_HOST,
        port: Number(process.env.SMTP_PORT),
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASS,
        },
      },
    }],
  ],

  // Configuration de lazy loading pour les images
  image: {
    formats: ['webp'],
    quality: 70,
    screens: {
      xs: 320,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
      xxl: 1536
    },
    sizes: {
      default: 1200,
    },
    provider: 'public',
    presets: {
      default: {
        modifiers: {
          format: 'webp',
          quality: 70,
          fit: 'cover',
        },
      },
    },
    staticFilename: '[publicPath]/images/[name]-[hash][ext]',
  },

  // Désactivation complète du prérendu et SSR
  // Désactiver le SSR pour un site statique
  nitro: {
    prerender: {
      routes: [],
      crawlLinks: false,
    },
  },

  // Configuration globale des composants
  components: {
    dirs: [
      {
        path: '~/components',
        extensions: ['vue'],
        prefix: 'Lazy', // Ajoute un préfixe "Lazy" pour les composants importés automatiquement
        watch: true, // Option pour surveiller les changements dans le dossier de composants
      }
    ]
  },

  app: {
    head: {
      title: 'M Comme Médoc - Engagez-vous dans l\'économie sociale en Médoc',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: 'M Comme Médoc, une SCIC dynamique en Médoc, favorise une économie solidaire et durable. Participez à nos projets innovants de développement territorial et social, et engagez-vous à nos côtés pour un territoire plus fort et plus vert. Découvrez comment vous impliquer aujourd\'hui.' },
        { hid: 'keywords', name: 'keywords', content: 'M Comme Médoc, SCIC, économie sociale, développement territorial, Médoc, coopérative, engagement communautaire, développement durable' },
        { hid: 'robots', name: 'robots', content: 'index, follow' },
        { hid: 'og:title', property: 'og:title', content: 'M Comme Médoc - Engagez-vous dans l\'économie sociale en Médoc' },
        { hid: 'og:description', property: 'og:description', content: 'Rejoignez M Comme Médoc pour promouvoir une économie solidaire en Médoc. Engagez-vous dans nos projets de coopération pour un impact social durable.' },
        { hid: 'og:url', property: 'og:url', content: 'https://www.mcommemedoc.fr' },
        { hid: 'og:type', property: 'og:type', content: 'website' }
      ],
      link: [
        { rel: 'canonical', href: 'https://www.mcommemedoc.fr' }
      ]
    },
  },

  anime: {
    provide: true,
  },
  colorMode: {
    preference: 'light',
  },
  content: {
    api: {
      baseURL: '/api/_my_content'
    }
  },
  fonts: {
    families: [
      {
        name: 'Montserrat',
        provider: 'google',
        weights: ['400', '700'],
        styles: ['normal', 'italic']
      },
      {
        name: 'Playfair Display',
        provider: 'google',
        weights: ['400', '700'],
        styles: ['normal', 'italic']
      },
      {
        name: 'Lora',
        provider: 'google',
        weights: ['400', '700'],
        styles: ['normal', 'italic']
      },
      {
        name: 'Kalnia',
        provider: 'google',
        weights: ['400', '700'],
        styles: ['normal', 'italic']
      },
      {
        name: 'Permanent Marker',
        provider: 'google',
        weights: ['400', '700'],
        styles: ['normal', 'italic']
      }
    ],
  }
});





