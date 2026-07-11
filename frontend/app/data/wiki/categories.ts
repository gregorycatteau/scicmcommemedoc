import type { WikiCategory } from '~/types/book'

export const wikiCategories: WikiCategory[] = [
  {
    slug: 'ressources',
    title: 'Ressources locales',
    description: 'Chercher les fiches existantes, avec statut de verification visible et donnees de demonstration signalees.',
    to: '/ressources',
    status: 'demo',
  },
  {
    slug: 'producteurs',
    title: 'Producteurs',
    description: 'Futures fiches producteurs, horaires et modes de distribution lorsque les donnees auront ete verifiees.',
    to: '/wiki',
    status: 'planned',
  },
  {
    slug: 'fonctionnement',
    title: 'Fonctionnement',
    description: 'Comprendre comment M Comme Medoc accueille, verifie, relie et organise les contributions.',
    to: '/vie-cooperative',
    status: 'available',
  },
  {
    slug: 'rencontres',
    title: 'Rencontres',
    description: 'Trouver une prochaine occasion de poser une question, proposer une idee ou rejoindre une action.',
    to: '/evenements',
    status: 'available',
  },
  {
    slug: 'corrections',
    title: 'Corrections',
    description: 'Signaler une information incomplete, obsolete ou a retirer de la memoire operationnelle.',
    to: '/ressources',
    status: 'demo',
  },
]
