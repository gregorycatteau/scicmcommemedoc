type GraphQLResponse<T> = {
  data?: T
  errors?: Array<{ message: string }>
}

const REQUEST_TIMEOUT_MS = 8000

export function useGraphQL() {
  const config = useRuntimeConfig()

  async function request<T>(query: string, variables: Record<string, unknown> = {}) {
    const endpoint = String(config.public.graphqlEndpoint || '').trim()

    if (!endpoint) {
      throw new Error('GRAPHQL_ENDPOINT_UNAVAILABLE')
    }

    const controller = new AbortController()
    const timeout = window.setTimeout(() => controller.abort(), REQUEST_TIMEOUT_MS)

    try {
      const response = await $fetch<GraphQLResponse<T>>(endpoint, {
        method: 'POST',
        signal: controller.signal,
        headers: {
          'content-type': 'application/json',
        },
        body: {
          query,
          variables,
        },
      })

      if (response.errors?.length) {
        throw new Error('GRAPHQL_REQUEST_FAILED')
      }

      return response.data as T
    } finally {
      window.clearTimeout(timeout)
    }
  }

  return {
    query: request,
    mutate: request,
  }
}
