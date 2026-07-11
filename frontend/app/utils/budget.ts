export type BudgetInput = {
  householdAdults: number
  householdChildren: number
  housingStatus: string
  housing: number
  vehicles: number
  kilometersPerWeek: number
  energy: number
  food: number
  telecom: number
  childcare: number
  health: number
  leisure: number
  contingency: number
  other: number
}

export type BudgetResult = {
  monthlyTotal: number
  yearlyTotal: number
  essentialTotal: number
  housingShare: number
  mobilityShare: number
  mobilityEstimate: number
  posts: Array<{ label: string; value: number }>
  recommendations: string[]
}

export function calculateBudget(input: BudgetInput): BudgetResult {
  const mobilityEstimate = Math.max(0, input.vehicles * 80 + input.kilometersPerWeek * 4.3 * 0.18)
  const posts = [
    { label: 'Logement', value: input.housing },
    { label: 'Mobilite', value: mobilityEstimate },
    { label: 'Energie', value: input.energy },
    { label: 'Alimentation', value: input.food },
    { label: 'Telecommunications', value: input.telecom },
    { label: 'Garde d enfants', value: input.childcare },
    { label: 'Sante', value: input.health },
    { label: 'Loisirs', value: input.leisure },
    { label: 'Imprevus', value: input.contingency },
    { label: 'Autres charges', value: input.other },
  ]
  const monthlyTotal = posts.reduce((sum, post) => sum + post.value, 0)
  const essentialTotal = input.housing + mobilityEstimate + input.energy + input.food + input.telecom + input.health
  const recommendations: string[] = []

  if (mobilityEstimate > monthlyTotal * 0.18) {
    recommendations.push('Regarder les trajets repetitifs qui pourraient etre mutualises, regroupes ou partages.')
  }
  if (input.food > monthlyTotal * 0.22) {
    recommendations.push('Comparer les achats isoles avec un panier groupe ou une commande collective quand elle existe.')
  }
  if (input.energy > monthlyTotal * 0.14) {
    recommendations.push('Identifier les postes d energie suivis chaque mois avant de chercher une solution couteuse.')
  }
  if (recommendations.length < 3) {
    recommendations.push('Mettre de cote une petite marge d imprevus avant d ajouter une nouvelle charge fixe.')
  }
  if (recommendations.length < 3) {
    recommendations.push('Chercher les achats, outils ou deplacements qui peuvent etre partages localement.')
  }

  return {
    monthlyTotal,
    yearlyTotal: monthlyTotal * 12,
    essentialTotal,
    housingShare: monthlyTotal ? input.housing / monthlyTotal : 0,
    mobilityShare: monthlyTotal ? mobilityEstimate / monthlyTotal : 0,
    mobilityEstimate,
    posts,
    recommendations: recommendations.slice(0, 3),
  }
}
