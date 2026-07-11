import { LocalResourceRepository } from '~/repositories/LocalResourceRepository'

export function useResourceRepository() {
  return new LocalResourceRepository()
}
