import { demoResources } from '~/data/demoResources'
import type { Resource, ResourceFilters, ResourceSearchResult } from '~/types/resources'
import { buildResourceFacets, filterResources, paginateResources } from '~/utils/resources'
import type { ResourceRepository } from './ResourceRepository'

export class LocalResourceRepository implements ResourceRepository {
  private readonly resources: Resource[]

  constructor(resources: Resource[] = demoResources) {
    this.resources = resources
  }

  async search(filters: ResourceFilters, page = 1, pageSize = 12): Promise<ResourceSearchResult> {
    return paginateResources(filterResources(this.resources, filters), page, pageSize)
  }

  async findBySlug(slug: string): Promise<Resource | null> {
    return this.resources.find((resource) => resource.slug === slug && resource.active) || null
  }

  async listFeatured(limit = 4): Promise<Resource[]> {
    return this.resources.filter((resource) => resource.featured && resource.active).slice(0, limit)
  }

  async facets() {
    return buildResourceFacets(this.resources.filter((resource) => resource.active))
  }
}
