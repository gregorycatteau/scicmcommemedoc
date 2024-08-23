export default defineNuxtConfig({
  devtools: { enabled: true },

  // Activation du SSR
  ssr: true,
  compatibilityDate: '2024-08-21',
  modules: [
    "@nuxt/ui",
    "@nuxt/content",
    "@nuxt/image",
    "@hypernym/nuxt-anime",
    "@nuxt/fonts",
    "@pinia/nuxt",
    "@vueuse/nuxt",
    [
      "nuxt-mail",
      {
        message: {
          to: process.env.EMAIL_TO,
          cc: process.env.EMAIL_CC || "",
          bcc: process.env.EMAIL_BCC || "",
        },
        smtp: {
          host: process.env.SMTP_HOST,
          port: Number(process.env.SMTP_PORT),
          auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASS,
          },
        },
      },
    ],
    "nuxt-booster",
    "nuxt-security",
     '@nuxtjs/seo'
  ],

  css: ['~/assets/css/tailwind.css'],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  seo: {
    site: {
      name: "M Comme Médoc",
      url: "https://www.mcommemedoc.fr",
    },
    metas: {
      titleTemplate: "%s - M Comme Médoc",
      defaultTitle: "M Comme Médoc - Engagez-vous dans l'économie sociale en Médoc",
      description: "M Comme Médoc, une SCIC dynamique en Médoc, favorise une économie solidaire et durable.",
      keywords: [
        "M Comme Médoc", "SCIC", "économie sociale", "développement territorial",
        "Médoc", "coopérative", "engagement communautaire", "développement durable"
      ],
      ogImage: {
        path: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "M Comme Médoc - Engagez-vous dans l'économie sociale en Médoc"
      }
    },
    robots: {
      enabled: true,
      sitemap: "/sitemap.xml",
      disallow: ["/admin", "/login"],
    },
    sitemap: {
      hostname: "https://www.mcommemedoc.fr",
      gzip: true,
      routes: async (): Promise<string[]> => {
        const { $content } = require('@nuxt/content');
        
        type Article = {
          slug: string;
        };
        
        const articles: Article[] = await $content('articles').fetch();
        return articles.map((article: Article) => `/articles/${article.slug}`);
      }
    },
    schemaOrg: {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: "M Comme Médoc",
      url: "https://www.mcommemedoc.fr",
      logo: "https://www.mcommemedoc.fr/logo.png",
      sameAs: [
        "https://www.facebook.com/mcommemedoc"
      ]
    }
  },
  
  

  security: {
    strict: true, // Active le mode strict pour une sécurité renforcée

    headers: {
      crossOriginResourcePolicy: "same-origin",
      crossOriginOpenerPolicy: "same-origin",
      crossOriginEmbedderPolicy: "credentialless",
      contentSecurityPolicy: {
        "base-uri": ["'none'"],
        "font-src": ["'self'", "https:", "data:"],
        "form-action": ["'self'"],
        "frame-ancestors": ["'self'"],
        "img-src": ["'self'", "data:"],
        "object-src": ["'none'"],
        "script-src-attr": ["'none'"],
        "style-src": ["'self'", "https:", "'unsafe-inline'"],
        "script-src": ["'self'", "'strict-dynamic'", "'nonce-{{nonce}}'"], // Utilise un nonce dynamique si possible
        "upgrade-insecure-requests": true,
      },
      originAgentCluster: "?1",
      referrerPolicy: "no-referrer",
      strictTransportSecurity: {
        maxAge: 15552000, // 180 jours
        includeSubdomains: true,
      },
      xContentTypeOptions: "nosniff",
      xDNSPrefetchControl: "off",
      xDownloadOptions: "noopen",
      xFrameOptions: "SAMEORIGIN",
      xPermittedCrossDomainPolicies: "none",
      xXSSProtection: "0",
      permissionsPolicy: {
        camera: ["none"],
        "display-capture": ["none"],
        fullscreen: ["none"],
        geolocation: ["none"],
        microphone: ["none"],
      },
    },

    requestSizeLimiter: {
      maxRequestSizeInBytes: 2000000, // 2 Mo
      maxUploadFileRequestInBytes: 8000000, // 8 Mo
      throwError: true,
    },

    rateLimiter: {
      tokensPerInterval: 150,
      interval: 300000, // 5 minutes
      headers: false,
      driver: {
        name: "lruCache",
      },
      throwError: true,
    },

    xssValidator: {
      throwError: true,
    },

    corsHandler: {
      origin: process.env.ORIGIN_URL || "https://www.mcommemedoc.fr",
      methods: ["GET", "HEAD", "PUT", "PATCH", "POST", "DELETE"],
      preflight: {
        statusCode: 204,
      },
    },

    allowedMethodsRestricter: {
      methods: "*",
      throwError: true,
    },

    hidePoweredBy: true, // Cache l'en-tête X-Powered-By
    basicAuth: false, // Désactive l'authentification de base
    csrf: true, // Active la protection CSRF pour les formulaires
    nonce: true, // Ajoute un nonce aux scripts pour renforcer la sécurité
    removeLoggers: {
      external: [],
      consoleType: ["log", "debug"],
      include: [/\.[jt]sx?$/, /\.vue\??/],
      exclude: [/node_modules/, /\.git/],
    },

    ssg: {
      meta: true,
      hashScripts: true,
      hashStyles: false,
      nitroHeaders: true,
      exportToPresets: true,
    },

    sri: true, // Active Subresource Integrity (SRI) pour les assets
  },

  // Configuration des polices
  fonts: {
    families: [
      {
        name: "Montserrat",
        provider: "google",
        weights: ["400", "700"],
        styles: ["normal", "italic"],
      },
      {
        name: "Playfair Display",
        provider: "google",
        weights: ["400", "700"],
        styles: ["normal", "italic"],
      },
      {
        name: "Lora",
        provider: "google",
        weights: ["400", "700"],
        styles: ["normal", "italic"],
      },
      {
        name: "Kalnia",
        provider: "google",
        weights: ["400", "700"],
        styles: ["normal", "italic"],
      },
      {
        name: "Permanent Marker",
        provider: "google",
        weights: ["400", "700"],
        styles: ["normal", "italic"],
      },
    ],
    display: "swap",
    prefetch: true,
    preconnect: true,
  },

  image: {
    formats: ["webp"],
    screens: {
      xs: 320,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
      xxl: 1536,
      "2xl": 1536,
    },
    densities: [1, 2, 3],
    quality: 80,
  },
  icon: {
    provider: "iconify",
    serverBundle: false,
    clientBundle: {
      icons: [
        "material-symbols:add-location-alt",
        "gravity-ui:house",
        "material-symbols:timer",
        "material-symbols:360",
        "lucide:newspaper",
        "material-symbols:groups-2-outline",
        "logos:facebook",
        "logos:telegram",
        "skill-icons:linkedin",
        "logos:youtube-icon",
        "fa:spinner",
        "noto:leaf-fluttering-in-wind",
        "noto:red-heart",
        "noto:seedling",
        "heroicons:magnifying-glass-20-solid"


      ],
   },
  },
  nitro: {
    prerender: {
      routes: [
        "/", // Prérendu de la page d'accueil
        
      ],
      crawlLinks: false,
     
    },
    compressPublicAssets: true,
    
  },

  anime: {
    provide: true,
  },

  colorMode: {
    preference: "light",
  },

  content: {
    api: {
      baseURL: "/api/_my_content",
    },
  },

  booster: {
    optimizeSSR: {
      cleanPreloads: true,
      cleanPrefetches: true,
      inlineStyles: true,
    },
    detection: {
      performance: true,
      browserSupport: true,
      battery: true,
    },
    imageSizeCache: {
      stdTTL: 3600,
      checkperiod: 1800,
    },
    lazyOffset: {
      component: "0%",
      asset: "0%",
    },
  },

  components: {
    dirs: [
      "~/components/accueil",
      "~/components/blog",
      "~/components/contact",
      "~/components/discovery",
      "~/components/fondations",
      "~/components/history",
      "~/components/involvment",
      "~/components/involvmentforms",
      "~/components/navigation",
      "~/components/projects/building",
      "~/components/projects/economy",
      "~/components/projects/familly",
      "~/components/projects/health",
      "~/components/projects/knowing",
      "~/components/projects/navigation",
    ],
  },

});