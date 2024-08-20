export default defineNuxtConfig({
  devtools: { enabled: true },
  ssr: false,
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

  // Configuration des polices
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
    display: 'swap',
    prefetch: true,
    preconnect: true,
  },

  // Désactivation du prérendu
  nitro: {
    prerender: {
      routes: [], // Ne prérend aucune route
      crawlLinks: false, // Désactive l'exploration des liens pour le prérendu
    },
  },

  // Configuration globale des composants
  components: {
    dirs: [
      {
        path: '~/components',
        extensions: ['vue'],
        prefix: 'Lazy',
        watch: true,
      }, 
      {
        path: '~/components/blog',
        extensions: ['vue'],
        prefix: 'Lazy',
        watch: true,
      },
      {
        path: '~/components/discovery',
        extensions: ['vue'],
        prefix: 'Lazy',
        watch: true,
      },
      {
        path: '~/components/discovery/sections',
        extensions: ['vue'],
        prefix: 'Lazy',
        watch: true,
      },
      {
        path: '~/components/involvmentforms',
        extensions: ['vue'],
        prefix: 'Lazy',
        watch: true,
      },
      {
        path: '~/components/projects',
        extensions: ['vue'],
        prefix: 'Lazy',
        watch: true,
      },
      {
        path: '~/components/projects/building',
        extensions: ['vue'],
        prefix: 'Lazy',
        watch: true,
      },
      
      {
        path: '~/components/projects/economy',
        extensions: ['vue'],
        prefix: 'Lazy',
        watch: true,
      },
      {
        path: '~/components/projects/familly',
        extensions: ['vue'],
        prefix: 'Lazy',
        watch: true,
      },
      {
        path: '~/components/projects/health',
        extensions: ['vue'],
        prefix: 'Lazy',
        watch: true,
      },
      {
        path: '~/components/projects/knowing',
        extensions: ['vue'],
        prefix: 'Lazy',
        watch: true,
      },
      {
        path: '~/components/projects/navigation',
        extensions: ['vue'],
        prefix: 'Lazy',
        watch: true,
      },
      {
        path: '~/components/navigation',
        extensions: ['vue'],
        prefix: 'Lazy',
        watch: true,
      },
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
});





