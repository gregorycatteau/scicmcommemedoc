import type { BookChapter } from '~/types/book'

export const bookChapters: BookChapter[] = [
  {
    slug: 'preface',
    path: '/livre/preface',
    title: 'Pourquoi je suis ici',
    eyebrow: 'Preface',
    subtitle: 'Une voix personnelle ouvre le Livre avant les outils, les statuts et les methodes.',
    chapterNumber: null,
    transformation: 'Comprendre que ce projet part d une presence au territoire, pas d une vitrine.',
    summary: 'Un texte fondateur pose le ton : habiter, relier, transmettre et commencer sans tout verrouiller.',
    light: 'Lumiere basse, table ouverte',
    matter: 'Carnet, voix, seuil',
    image: { src: '/images/medoc-hero.webp', alt: 'Un chemin dans les vignes du Medoc au lever du soleil' },
    nextChapter: 'habiter',
    wikiLinks: [
      {
        label: 'Comprendre le fonctionnement de la cooperative',
        to: '/wiki',
        description: 'Retrouver les informations pratiques et les procedures hors du recit.',
      },
    ],
    seo: {
      title: 'Pourquoi je suis ici - M Comme Medoc',
      description: 'Preface du Livre M Comme Medoc : le recit fondateur avant les chapitres et les gestes concrets.',
    },
    status: 'published',
  },
  {
    slug: 'habiter',
    path: '/livre/habiter',
    title: 'Habiter',
    eyebrow: 'Chapitre 1',
    subtitle: 'Comment habiter reellement un territoire, au-dela d y resider ?',
    chapterNumber: 1,
    transformation: 'Reprendre prise sur ce qui pese.',
    summary: 'Distances, budget, saisonnalite et choix ordinaires deviennent lisibles pour choisir une premiere marge de manoeuvre.',
    light: 'Matin clair',
    matter: 'Carnet, lignes, routes',
    image: { src: '/images/medoc-hero.webp', alt: 'Route et vignes dans une lumiere de matin' },
    previousChapter: 'preface',
    nextChapter: 'se-nourrir',
    wikiLinks: [
      {
        label: 'Consulter les ressources par commune',
        to: '/wiki',
        description: 'Chercher les appuis pratiques quand une depense, un trajet ou un besoin devient concret.',
      },
    ],
    seo: {
      title: 'Habiter le Medoc - Livre M Comme Medoc',
      description: 'Chapitre sur le quotidien, les distances, le budget et la capacite a reprendre prise dans le Medoc.',
    },
    status: 'published',
  },
  {
    slug: 'se-nourrir',
    path: '/livre/se-nourrir',
    title: 'Se nourrir',
    eyebrow: 'Chapitre 2',
    subtitle: 'Comment retrouver la saison, la proximite et les producteurs dans ses choix alimentaires ?',
    chapterNumber: 2,
    transformation: 'Retrouver la saison dans ses courses.',
    summary: 'Le panier devient une maniere de regarder les marches, les habitudes et les liens de proximite.',
    light: 'Fin de matinée',
    matter: 'Panier, table, saison',
    image: { src: '/images/recolter.webp', alt: 'Table commune avec des produits locaux' },
    previousChapter: 'habiter',
    nextChapter: 'tenir',
    wikiLinks: [
      {
        label: 'Voir les producteurs verifies et leurs horaires',
        to: '/wiki',
        description: 'Acceder aux fiches operationnelles lorsque les donnees auront ete verifiees.',
      },
    ],
    seo: {
      title: 'Se nourrir localement dans le Medoc - Livre M Comme Medoc',
      description: 'Chapitre sur la saison, les marches, les producteurs et les habitudes alimentaires de proximite.',
    },
    status: 'published',
  },
  {
    slug: 'tenir',
    path: '/livre/tenir',
    title: 'Tenir',
    eyebrow: 'Chapitre 3',
    subtitle: 'Qu est-ce qui permet a un foyer ou a un voisinage de tenir lorsque quelque chose se deregle ?',
    chapterNumber: 3,
    transformation: 'Voir ce qui tient deja.',
    summary: 'Sans dramatiser, le chapitre rend visibles les appuis ordinaires : eau, energie, communication, entourage.',
    light: 'Soir calme',
    matter: 'Maison, lampe, boussole',
    image: { src: '/images/cultiver.webp', alt: 'Personnes reunies dans un atelier chaleureux' },
    previousChapter: 'se-nourrir',
    nextChapter: 'faire-emerger',
    wikiLinks: [
      {
        label: 'Trouver une ressource proche',
        to: '/wiki',
        description: 'Chercher une piste d entraide ou une information pratique avec son statut de verification.',
      },
    ],
    seo: {
      title: 'Tenir au quotidien - Livre M Comme Medoc',
      description: 'Chapitre serein sur les appuis d un foyer, d une famille ou d un voisinage dans le Medoc.',
    },
    status: 'published',
  },
  {
    slug: 'faire-emerger',
    path: '/livre/faire-emerger',
    title: 'Faire emerger',
    eyebrow: 'Chapitre 4',
    subtitle: 'Comment une idee encore fragile peut-elle devenir un premier projet ?',
    chapterNumber: 4,
    transformation: 'Faire sortir une idee de l isolement.',
    summary: 'Le brouillon devient legitime : formuler, tester, trouver de premiers allies, avancer petit.',
    light: 'Apres-midi d atelier',
    matter: 'Feuille, bois, notes',
    image: { src: '/images/semer.webp', alt: 'Mains autour de carnets et d une carte sur une table' },
    previousChapter: 'tenir',
    nextChapter: 'developper',
    wikiLinks: [
      {
        label: 'Comprendre comment proposer une idee',
        to: '/wiki',
        description: 'Retrouver les methodes et les prochains points de contact hors du recit.',
      },
    ],
    seo: {
      title: 'Faire emerger une idee citoyenne - Livre M Comme Medoc',
      description: 'Chapitre sur le passage d une intuition fragile a une premiere fiche projet utile.',
    },
    status: 'published',
  },
  {
    slug: 'developper',
    path: '/livre/developper',
    title: 'Developper',
    eyebrow: 'Chapitre 5',
    subtitle: 'Comment choisir le prochain pas sans devoir resoudre tout le projet ?',
    chapterNumber: 5,
    transformation: 'Nommer le prochain pas utile.',
    summary: 'Maturite, lieux, partenaires, financement et cooperation deviennent une trajectoire lisible.',
    light: 'Lumiere qui avance',
    matter: 'Chemin, bifurcations, horizon',
    image: { src: '/images/medoc-hero.webp', alt: 'Chemin du Medoc ouvert vers l horizon' },
    previousChapter: 'faire-emerger',
    nextChapter: 'relier',
    wikiLinks: [
      {
        label: 'Comprendre le fonctionnement de la cooperative',
        to: '/wiki',
        description: 'Situer les cadres pratiques, les roles et les contacts utiles.',
      },
    ],
    seo: {
      title: 'Developper une activite utile - Livre M Comme Medoc',
      description: 'Chapitre sur les prochains pas possibles pour une activite utile dans le Medoc.',
    },
    status: 'published',
  },
  {
    slug: 'relier',
    path: '/livre/relier',
    title: 'Relier',
    eyebrow: 'Chapitre 6',
    subtitle: 'Comment rendre visibles les forces deja presentes sans les transformer en catalogue ?',
    chapterNumber: 6,
    transformation: 'Trouver un premier appui proche.',
    summary: 'Producteurs, lieux, initiatives, associations et services deviennent des appuis relies par une methode prudente.',
    light: 'Clairiere ouverte',
    matter: 'Carte, liens, points d appui',
    image: { src: '/images/recolter.webp', alt: 'Table partagee avec produits et gestes communs' },
    previousChapter: 'developper',
    nextChapter: 'faire-ensemble',
    wikiLinks: [
      {
        label: 'Consulter les ressources par commune',
        to: '/wiki',
        description: 'Passer du recit a la recherche operationnelle avec statuts de verification.',
      },
    ],
    seo: {
      title: 'Relier les ressources du Medoc - Livre M Comme Medoc',
      description: 'Chapitre sur la mise en relation des ressources, lieux et initiatives deja presentes dans le Medoc.',
    },
    status: 'published',
  },
  {
    slug: 'faire-ensemble',
    path: '/livre/faire-ensemble',
    title: 'Faire ensemble',
    eyebrow: 'Chapitre 7',
    subtitle: 'Comment passer d une intention individuelle a une dynamique collective ?',
    chapterNumber: 7,
    transformation: 'Identifier une maniere concrete de rejoindre le mouvement.',
    summary: 'Rencontrer, contribuer, participer et comprendre le fonctionnement sans se perdre dans la structure.',
    light: 'Chaleur partagee',
    matter: 'Table, voix, places',
    image: { src: '/images/cultiver.webp', alt: 'Atelier collectif et transmission de gestes' },
    previousChapter: 'relier',
    nextChapter: 'epilogue',
    wikiLinks: [
      {
        label: 'Comprendre le fonctionnement de la cooperative',
        to: '/wiki',
        description: 'Lire les informations pratiques avant de rejoindre une rencontre ou une contribution.',
      },
    ],
    seo: {
      title: 'Faire ensemble dans le Medoc - Livre M Comme Medoc',
      description: 'Chapitre sur la participation, les rencontres, la cooperation et la place utile de chacun.',
    },
    status: 'published',
  },
  {
    slug: 'epilogue',
    path: '/livre/epilogue',
    title: 'Ecrire la suite',
    eyebrow: 'Epilogue',
    subtitle: 'Le Livre ne se referme pas vraiment : il indique ou poser le prochain geste.',
    chapterNumber: null,
    transformation: 'Comprendre que l histoire continue avec ce que chacun devient capable de faire.',
    summary: 'Une derniere page ouvre vers idee, ressource, correction, rencontre, adhesion ou contribution.',
    light: 'Lumiere ouverte',
    matter: 'Page blanche, main, suite',
    image: { src: '/images/semer.webp', alt: 'Carnets et carte prets a recevoir une nouvelle idee' },
    previousChapter: 'faire-ensemble',
    wikiLinks: [
      {
        label: 'Signaler une information a corriger',
        to: '/wiki',
        description: 'Aider la memoire operationnelle a rester fiable et utile.',
      },
    ],
    seo: {
      title: 'Ecrire la suite - Livre M Comme Medoc',
      description: 'Epilogue du Livre M Comme Medoc : choisir une action, proposer une ressource ou rejoindre une rencontre.',
    },
    status: 'published',
  },
]

export const bookChapterBySlug = new Map(bookChapters.map((chapter) => [chapter.slug, chapter]))

export function getBookChapter(slug: string) {
  return bookChapterBySlug.get(slug)
}

export function getNextBookChapter(slug: string) {
  const chapter = getBookChapter(slug)
  return chapter?.nextChapter ? getBookChapter(chapter.nextChapter) : undefined
}

export function getPreviousBookChapter(slug: string) {
  const chapter = getBookChapter(slug)
  return chapter?.previousChapter ? getBookChapter(chapter.previousChapter) : undefined
}
