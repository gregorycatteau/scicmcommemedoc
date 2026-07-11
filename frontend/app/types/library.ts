export type ExternalServiceLink = {
  label: string
  url: string
  description: string
  requiresAuth?: boolean
}

export type LibraryPageTemplate = 'opening' | 'landscape' | 'cycle' | 'collection' | 'workbench' | 'guide' | 'administrative'

export type LibraryChapter = {
  slug: string
  title: string
  subject?: string
  pageTemplate: LibraryPageTemplate
  excerpt: string
  body: string[]
  image?: {
    src: string
    alt: string
    caption?: string
  }
  note?: string
  externalLinks?: ExternalServiceLink[]
}

export type LibraryBook = {
  slug: string
  romanNumber?: string
  title: string
  shortTitle: string
  description: string
  tone: string
  cover: {
    title: string
    subtitle: string
    image: {
      src: string
      alt: string
    }
  }
  chapters: LibraryChapter[]
  externalService?: ExternalServiceLink
}

export type LibraryPageRef = {
  bookSlug: string
  chapterSlug: string
}
