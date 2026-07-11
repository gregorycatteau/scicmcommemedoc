export type ResourceType =
  | 'producteur'
  | 'artisan'
  | 'commerce'
  | 'marche'
  | 'association'
  | 'service'
  | 'lieu'
  | 'partenaire'
  | 'atelier'
  | 'point-relais'
  | 'autre'

export type VerifiedStatus =
  | 'non-verifie'
  | 'en-cours'
  | 'verifie'
  | 'information-perimee'
  | 'ferme'
  | 'refuse'

export type DistributionMode =
  | 'vente-ferme'
  | 'marche'
  | 'point-relais'
  | 'groupement-achat'
  | 'magasin-producteurs'
  | 'atelier'
  | 'sur-rendez-vous'

export type PaymentMethod = 'especes' | 'carte' | 'cheque' | 'virement' | 'non-renseigne'

export type ResourceAccessibility =
  | 'a-verifier'
  | 'plain-pied'
  | 'parking-proche'
  | 'transport-collectif'
  | 'non-renseigne'

export type Resource = {
  id: string
  slug: string
  name: string
  shortDescription: string
  fullDescription: string
  resourceType: ResourceType
  categories: string[]
  products: string[]
  services: string[]
  producerName?: string
  organizationName?: string
  address?: string
  locality?: string
  postalCode?: string
  latitude?: number | null
  longitude?: number | null
  phone?: string
  email?: string
  website?: string
  openingHours?: string
  openingHoursNote?: string
  distributionModes: DistributionMode[]
  paymentMethods: PaymentMethod[]
  accessibility: ResourceAccessibility[]
  certifications: string[]
  labels: string[]
  seasonality: string[]
  priceLevel?: 'non-renseigne' | 'accessible' | 'intermediaire' | 'premium'
  verifiedStatus: VerifiedStatus
  verifiedAt?: string
  verifiedBy?: string
  sourceUrl?: string
  sourceNote: string
  expiresAt?: string
  featured: boolean
  active: boolean
  createdAt: string
  updatedAt: string
  demo: boolean
  demoMapPosition?: {
    x: number
    y: number
  }
}

export type ResourceFilters = {
  query: string
  resourceType: string
  category: string
  product: string
  locality: string
  distributionMode: string
  accessibility: string
  season: string
  recentlyVerified: boolean
}

export type ResourceSearchResult = {
  items: Resource[]
  total: number
  page: number
  pageSize: number
}
