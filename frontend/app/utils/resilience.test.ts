import { describe, expect, it } from 'vitest'
import { resilienceDomains, scoreResilience, type ResilienceAnswer } from './resilience'

describe('score de resilience', () => {
  it('produit un score global pedagogique par domaine', () => {
    const answers: Record<string, ResilienceAnswer> = Object.fromEntries(resilienceDomains.map((domain) => [domain.id, 1]))
    const result = scoreResilience(answers)

    expect(result.globalScore).toBe(50)
    expect(result.domainScores).toHaveLength(resilienceDomains.length)
  })

  it('priorise les domaines faibles sans vocabulaire anxiogene', () => {
    const result = scoreResilience({ water: 0, food: 2 })

    expect(result.priorities).toContain('Eau')
    expect(result.strengths).toContain('Alimentation')
    expect(result.plan7Days.length).toBeGreaterThan(0)
  })
})
