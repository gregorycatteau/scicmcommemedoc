import { describe, expect, it } from 'vitest'
import { recommendActivityPath, type ActivityInput } from './activityPath'

const baseInput: ActivityInput = {
  nature: 'artisanale',
  maturity: 'test',
  goal: 'utile au territoire',
  market: 'marchand',
  skills: 'production',
  materialNeeds: 'outils',
  placeNeed: 'non',
  fundingNeed: 'non',
  partnersNeed: 'non',
  audience: 'habitants',
  impact: 'reemploi',
  timeline: '3 mois',
}

describe('parcours de developpement', () => {
  it('oriente une idee jeune vers exploration', () => {
    expect(recommendActivityPath({ ...baseInput, maturity: 'idee' }).profile).toBe('Explorer')
  })

  it('priorise la recherche de partenaires quand elle est declaree', () => {
    expect(recommendActivityPath({ ...baseInput, partnersNeed: 'oui' }).profile).toBe('Trouver des partenaires')
  })

  it('propose un test limite par defaut', () => {
    expect(recommendActivityPath(baseInput).profile).toBe('Tester a petite echelle')
  })
})
