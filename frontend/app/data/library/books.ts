import type { LibraryBook, LibraryPageRef } from '~/types/library'

export const serviceLinks = {
  wiki: {
    label: 'Ouvrir le Wiki',
    url: 'https://wiki.mcommemedoc.fr',
    description: 'Fiches, sources, procedures et informations verifiables.',
  },
  projects: {
    label: 'Ouvrir les projets',
    url: 'https://projets.mcommemedoc.fr',
    description: 'Tableaux de bord, taches et espaces de travail OpenProject.',
    requiresAuth: true,
  },
  docs: {
    label: 'Ouvrir les documents',
    url: 'https://docs.mcommemedoc.fr',
    description: 'Documents, comptes rendus et archives dans Nextcloud.',
    requiresAuth: true,
  },
  chat: {
    label: 'Ouvrir le Chat',
    url: 'https://chat.mcommemedoc.fr',
    description: 'Conversation et coordination dans Rocket.Chat.',
    requiresAuth: true,
  },
  auth: {
    label: 'Acceder aux espaces membres',
    url: 'https://auth.mcommemedoc.fr',
    description: 'Authentification Authelia pour les services proteges.',
    requiresAuth: true,
  },
} as const

export const libraryBooks: LibraryBook[] = [
  {
    slug: 'genese',
    romanNumber: 'I',
    title: 'La Genese',
    shortTitle: 'Genese',
    description: 'L origine, la vision et le cycle vivant de M Comme Medoc.',
    tone: 'ample, sensible, lumineux',
    cover: {
      title: 'Semer. Cultiver. Recolter.',
      subtitle: 'Un cycle pour habiter, relier et transmettre.',
      image: {
        src: '/images/medoc-hero.webp',
        alt: 'Chemin entre les vignes du Medoc dans une lumiere basse',
      },
    },
    chapters: [
      {
        slug: 'seuil',
        title: 'Pourquoi nous sommes ici',
        subject: 'Entrer sans discours',
        pageTemplate: 'opening',
        excerpt: 'Il ne s agit pas de promouvoir un territoire. Il s agit de retrouver une maniere d y prendre part.',
        body: [
          'M Comme Medoc commence par une sensation simple : beaucoup de ressources existent deja, mais elles ne se rencontrent pas toujours au bon moment.',
          'La bibliotheque ne remplace pas l action. Elle donne le temps de comprendre ce que l on peut semer, ce que l on peut cultiver, et ce que l on peut recolter ensemble.',
        ],
        image: {
          src: '/images/medoc-hero.webp',
          alt: 'Groupe de personnes marchant sur un chemin au bord des vignes',
          caption: 'Le premier geste n est pas de remplir un formulaire. C est d entrer dans le territoire.',
        },
        note: 'Le texte fondateur personnel sera integre ici lorsqu il sera fourni et valide.',
      },
      {
        slug: 'territoire',
        title: 'Le Medoc comme personnage',
        subject: 'Paysage, distances, saisons',
        pageTemplate: 'landscape',
        excerpt: 'Le Medoc n est pas un decor. Il ralentit, eloigne, rassemble, expose au vent, donne envie de rester.',
        body: [
          'Habiter ici, ce n est pas seulement choisir une adresse. C est composer avec les routes, les saisons, les marches, les ateliers, les voisins, les lieux qui ouvrent et ceux qui manquent encore.',
          'La bibliotheque doit rendre cette presence sensible sans tomber dans la brochure touristique. Elle montre les matieres, les gestes, les tensions ordinaires et les appuis possibles.',
        ],
        image: {
          src: '/images/cultiver.webp',
          alt: 'Atelier collectif dans une lumiere chaude',
          caption: 'Le territoire devient lisible quand les personnes, les lieux et les gestes se repondent.',
        },
      },
      {
        slug: 'cycle',
        title: 'Semer, cultiver, recolter',
        subject: 'Le rythme du mouvement',
        pageTemplate: 'cycle',
        excerpt: 'Semer une idee. Cultiver un lien. Recolter une capacite d agir.',
        body: [
          'Semer, c est autoriser une idee fragile a exister. Cultiver, c est lui donner des soins, des allies, une methode. Recolter, ce n est pas finir : c est constater qu une ressource circule mieux qu avant.',
          'Ce cycle devient la grammaire de M Comme Medoc. Il permet de lire les ressources, les projets, les documents et les conversations comme les parties d un meme organisme.',
        ],
        image: {
          src: '/images/recolter.webp',
          alt: 'Table de recolte et gestes partages',
          caption: 'La recolte n est pas seulement un resultat. C est une preuve que quelque chose a pris.',
        },
        externalLinks: [serviceLinks.wiki, serviceLinks.projects],
      },
    ],
  },
  {
    slug: 'ressources',
    romanNumber: 'II',
    title: 'Les Ressources',
    shortTitle: 'Ressources',
    description: 'Portraits, chemins de decouverte et recits des acteurs du territoire.',
    tone: 'portraits, matieres, gestes',
    cover: {
      title: 'Ce qui existe deja',
      subtitle: 'Producteurs, lieux, savoir-faire et appuis proches.',
      image: { src: '/images/recolter.webp', alt: 'Produits et table commune' },
    },
    chapters: [
      {
        slug: 'ouvrir-le-wiki',
        title: 'Le repertoire vivant reste dans le Wiki',
        subject: 'Donnees verifiables',
        pageTemplate: 'collection',
        excerpt: 'Le site raconte les chemins. Le Wiki porte les fiches a jour.',
        body: ['Aucune fiche producteur reelle n est inventee dans ce prototype. Les horaires, coordonnees et sources doivent vivre dans le Wiki operationnel.'],
        externalLinks: [serviceLinks.wiki],
      },
    ],
    externalService: serviceLinks.wiki,
  },
  {
    slug: 'projets',
    romanNumber: 'III',
    title: 'Les Projets',
    shortTitle: 'Projets',
    description: 'Recits des idees naissantes, besoins, et dynamiques en cours.',
    tone: 'carnet de chantier, etapes, besoins',
    cover: {
      title: 'Ce qui cherche sa forme',
      subtitle: 'Les projets se racontent ici et s organisent dans OpenProject.',
      image: { src: '/images/semer.webp', alt: 'Carnets et table de travail' },
    },
    chapters: [
      {
        slug: 'ouvrir-openproject',
        title: 'Organiser sans perdre le recit',
        subject: 'Contribution',
        pageTemplate: 'workbench',
        excerpt: 'Le Livre donne le sens d un projet. OpenProject porte le travail quotidien.',
        body: ['Les tickets, feuilles de route et responsabilites ne sont pas reproduits dans le frontend public.'],
        externalLinks: [serviceLinks.projects],
      },
    ],
    externalService: serviceLinks.projects,
  },
  {
    slug: 'vivre-autrement',
    romanNumber: 'IV',
    title: 'Vivre autrement',
    shortTitle: 'Vivre',
    description: 'Guides et exercices pour reprendre prise localement.',
    tone: 'guide illustre, exercice, mise en pratique',
    cover: {
      title: 'Essayer autrement',
      subtitle: 'Budget, alimentation, resilience, projets et cooperation.',
      image: { src: '/images/cultiver.webp', alt: 'Atelier et gestes de transmission' },
    },
    chapters: [
      {
        slug: 'exercices',
        title: 'Les outils deviennent des exercices',
        subject: 'Pratique',
        pageTemplate: 'guide',
        excerpt: 'Les calculateurs restent disponibles, mais ils ne deviennent pas des chapitres geants.',
        body: ['Ils seront integres comme prolongements pratiques : budget, manger local, resilience, projet citoyen et developpement.'],
      },
    ],
  },
  {
    slug: 'administratif',
    romanNumber: 'V',
    title: 'Le Livre administratif',
    shortTitle: 'Administratif',
    description: 'Fonctionnement, gouvernance, droits et documents sans reproduire Nextcloud.',
    tone: 'clair, sobre, oriente',
    cover: {
      title: 'Comprendre les portes',
      subtitle: 'Documents, droits, gouvernance et acces membres.',
      image: { src: '/images/semer.webp', alt: 'Documents et notes sur une table' },
    },
    chapters: [
      {
        slug: 'documents',
        title: 'Les documents vivent dans Nextcloud',
        subject: 'Acces membres',
        pageTemplate: 'administrative',
        excerpt: 'Le site explique. Nextcloud conserve. Authelia protege.',
        body: ['Les statuts, comptes rendus et archives doivent rester dans les espaces documentaires dedies.'],
        externalLinks: [serviceLinks.docs, serviceLinks.auth],
      },
    ],
    externalService: serviceLinks.docs,
  },
]

export const defaultLibraryPage: LibraryPageRef = {
  bookSlug: 'genese',
  chapterSlug: 'seuil',
}

export function getLibraryBook(slug: string) {
  return libraryBooks.find((book) => book.slug === slug)
}

export function getLibraryChapter(bookSlug: string, chapterSlug: string) {
  return getLibraryBook(bookSlug)?.chapters.find((chapter) => chapter.slug === chapterSlug)
}
