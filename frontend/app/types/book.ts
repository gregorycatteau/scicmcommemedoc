export type WikiLink = {
  label: string
  to: string
  description: string
}

export type BookChapterStatus = 'draft' | 'review' | 'published'

export type BookChapter = {
  slug: string
  path: string
  title: string
  eyebrow: string
  subtitle: string
  chapterNumber: number | null
  transformation: string
  summary: string
  light: string
  matter: string
  image: {
    src: string
    alt: string
  }
  previousChapter?: string
  nextChapter?: string
  wikiLinks: WikiLink[]
  seo: {
    title: string
    description: string
    canonical?: string
  }
  status: BookChapterStatus
}

export type WikiCategory = {
  slug: string
  title: string
  description: string
  to: string
  status: 'available' | 'demo' | 'planned'
}
