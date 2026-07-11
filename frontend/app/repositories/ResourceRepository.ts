import type { Resource, ResourceFilters, ResourceSearchResult } from '~/types/resources'

export type ResourceRepository = {
  search(filters: ResourceFilters, page?: number, pageSize?: number): Promise<ResourceSearchResult>
  findBySlug(slug: string): Promise<Resource | null>
  listFeatured(limit?: number): Promise<Resource[]>
  facets(): Promise<ReturnType<typeof import('~/utils/resources').buildResourceFacets>>
}
