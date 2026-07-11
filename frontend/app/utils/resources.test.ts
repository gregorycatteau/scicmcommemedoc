import { describe, expect, it } from 'vitest'
import { demoResources } from '../data/demoResources'
import { DEFAULT_RESOURCE_FILTERS, buildResourceFacets, filterResources, paginateResources, shouldWarnOpeningHours } from './resources'

describe('recherche de ressources', () => {
  it('filtre par texte libre avec tolerance aux accents', () => {
    const results = filterResources(demoResources, { ...DEFAULT_RESOURCE_FILTERS, query: 'marche' })

    expect(results.map((resource) => resource.slug)).toContain('demo-marche-des-liens')
  })

  it('combine produit et mode de distribution', () => {
    const results = filterResources(demoResources, {
      ...DEFAULT_RESOURCE_FILTERS,
      product: 'miel',
      distributionMode: 'point-relais',
    })

    expect(results).toHaveLength(1)
    expect(results[0]?.slug).toBe('demo-panier-clairiere')
  })

  it('ne presente pas les horaires ambigus comme fiables', () => {
    expect(shouldWarnOpeningHours(demoResources[0]!)).toBe(true)
  })

  it('limite la pagination a une taille raisonnable', () => {
    expect(paginateResources(demoResources, 1, 200).pageSize).toBe(48)
  })

  it('construit les facettes depuis les donnees disponibles', () => {
    const facets = buildResourceFacets(demoResources)

    expect(facets.products).toContain('miel')
    expect(facets.resourceTypes).toContain('point-relais')
  })
})
