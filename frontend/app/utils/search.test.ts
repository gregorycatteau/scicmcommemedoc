import { describe, expect, it } from 'vitest'
import { includesNormalized, normalizeSearchText, uniqueSorted } from './search'

describe('normalisation de recherche', () => {
  it('ignore les accents, la casse et les espaces multiples', () => {
    expect(normalizeSearchText('  MÉDOC   Local \n')).toBe('medoc local')
    expect(includesNormalized('Asperges du Medoc', 'médoc')).toBe(true)
  })

  it('retire les caracteres de controle', () => {
    expect(normalizeSearchText('panier\u0000local')).toBe('panier local')
  })

  it('dedoublonne et trie les facettes', () => {
    expect(uniqueSorted(['miel', 'pain', 'miel', ''])).toEqual(['miel', 'pain'])
  })
})
