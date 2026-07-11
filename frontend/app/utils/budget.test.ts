import { describe, expect, it } from 'vitest'
import { calculateBudget } from './budget'

const baseBudget = {
  householdAdults: 2,
  householdChildren: 1,
  housingStatus: 'locataire',
  housing: 800,
  vehicles: 1,
  kilometersPerWeek: 200,
  energy: 180,
  food: 550,
  telecom: 60,
  childcare: 120,
  health: 90,
  leisure: 150,
  contingency: 100,
  other: 70,
}

describe('calcul budget', () => {
  it('calcule les totaux mensuels et annuels', () => {
    const result = calculateBudget(baseBudget)

    expect(result.monthlyTotal).toBeGreaterThan(0)
    expect(result.yearlyTotal).toBe(result.monthlyTotal * 12)
    expect(result.essentialTotal).toBeGreaterThan(baseBudget.housing)
  })

  it('retourne trois pistes d optimisation maximum', () => {
    expect(calculateBudget(baseBudget).recommendations).toHaveLength(3)
  })
})
