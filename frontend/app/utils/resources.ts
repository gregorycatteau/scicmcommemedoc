import type { Resource, ResourceFilters, ResourceSearchResult } from '~/types/resources'
import { includesNormalized, normalizeSearchText, uniqueSorted } from '~/utils/search'

export const DEFAULT_RESOURCE_FILTERS: ResourceFilters = {
  query: '',
  resourceType: '',
  category: '',
  product: '',
  locality: '',
  distributionMode: '',
  accessibility: '',
  season: '',
  recentlyVerified: false,
}

export function resourceSearchText(resource: Resource): string {
  return [
    resource.name,
    resource.shortDescription,
    resource.fullDescription,
    resource.producerName,
    resource.organizationName,
    resource.locality,
    resource.resourceType,
    ...resource.categories,
    ...resource.products,
    ...resource.services,
    ...resource.distributionModes,
  ]
    .filter(Boolean)
    .join(' ')
}

export function isRecentlyVerified(resource: Resource, now = new Date()): boolean {
  if (resource.verifiedStatus !== 'verifie' || !resource.verifiedAt) {
    return false
  }

  const verifiedAt = new Date(resource.verifiedAt)
  const sixMonthsAgo = new Date(now)
  sixMonthsAgo.setMonth(sixMonthsAgo.getMonth() - 6)

  return verifiedAt >= sixMonthsAgo
}

export function shouldWarnOpeningHours(resource: Resource): boolean {
  return resource.verifiedStatus !== 'verifie' || !resource.openingHours || Boolean(resource.openingHoursNote)
}

export function filterResources(resources: Resource[], filters: ResourceFilters): Resource[] {
  const query = normalizeSearchText(filters.query)

  return resources.filter((resource) => {
    if (!resource.active) {
      return false
    }

    if (query && !includesNormalized(resourceSearchText(resource), query)) {
      return false
    }

    if (filters.resourceType && resource.resourceType !== filters.resourceType) {
      return false
    }

    if (filters.category && !resource.categories.includes(filters.category)) {
      return false
    }

    if (filters.product && !resource.products.includes(filters.product)) {
      return false
    }

    if (filters.locality && resource.locality !== filters.locality) {
      return false
    }

    if (filters.distributionMode && !resource.distributionModes.includes(filters.distributionMode as never)) {
      return false
    }

    if (filters.accessibility && !resource.accessibility.includes(filters.accessibility as never)) {
      return false
    }

    if (filters.season && !resource.seasonality.includes(filters.season)) {
      return false
    }

    if (filters.recentlyVerified && !isRecentlyVerified(resource)) {
      return false
    }

    return true
  })
}

export function paginateResources(items: Resource[], page = 1, pageSize = 12): ResourceSearchResult {
  const safePage = Math.max(1, page)
  const safePageSize = Math.min(Math.max(1, pageSize), 48)
  const start = (safePage - 1) * safePageSize

  return {
    items: items.slice(start, start + safePageSize),
    total: items.length,
    page: safePage,
    pageSize: safePageSize,
  }
}

export function buildResourceFacets(resources: Resource[]) {
  return {
    resourceTypes: uniqueSorted(resources.map((resource) => resource.resourceType)),
    categories: uniqueSorted(resources.flatMap((resource) => resource.categories)),
    products: uniqueSorted(resources.flatMap((resource) => resource.products)),
    localities: uniqueSorted(resources.map((resource) => resource.locality || '').filter(Boolean)),
    distributionModes: uniqueSorted(resources.flatMap((resource) => resource.distributionModes)),
    accessibility: uniqueSorted(resources.flatMap((resource) => resource.accessibility)),
    seasons: uniqueSorted(resources.flatMap((resource) => resource.seasonality)),
  }
}
