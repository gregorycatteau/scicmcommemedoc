import { describe, expect, it } from 'vitest'
import { isSafeHttpUrl, normalizeFormText } from './formGuards'

describe('garde-fous formulaires', () => {
  it('normalise les espaces et neutralise les retours ligne CRLF', () => {
    expect(normalizeFormText('  Bonjour\r\nBCC: test\u0000  ', 200)).toBe('Bonjour BCC: test')
  })

  it('refuse les schemas dangereux pour les liens publics', () => {
    expect(isSafeHttpUrl('javascript:alert(1)')).toBe(false)
    expect(isSafeHttpUrl('https://mcommeedoc.fr')).toBe(true)
  })
})
