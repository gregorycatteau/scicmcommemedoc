export type ActivityInput = {
  nature: string
  maturity: string
  goal: string
  market: string
  skills: string
  materialNeeds: string
  placeNeed: string
  fundingNeed: string
  partnersNeed: string
  audience: string
  impact: string
  timeline: string
}

export type ActivityPathResult = {
  profile: string
  explanation: string
  nextSteps: string[]
}

export function recommendActivityPath(input: ActivityInput): ActivityPathResult {
  if (input.maturity === 'idee') {
    return {
      profile: 'Explorer',
      explanation: 'L idee doit encore rencontrer le terrain avant de se structurer.',
      nextSteps: ['Formuler le besoin en une phrase', 'Parler a cinq personnes concernees', 'Noter ce qui revient le plus souvent'],
    }
  }

  if (input.partnersNeed === 'oui') {
    return {
      profile: 'Trouver des partenaires',
      explanation: 'Le besoin principal semble etre la mise en relation et la confiance.',
      nextSteps: ['Lister les partenaires evidents', 'Preparer une demande precise', 'Proposer un test court'],
    }
  }

  if (input.placeNeed === 'oui') {
    return {
      profile: 'Rechercher un lieu',
      explanation: 'Le projet a besoin d un cadre materiel avant de grandir.',
      nextSteps: ['Definir les contraintes du lieu', 'Tester un format mobile ou temporaire', 'Chercher une mutualisation possible'],
    }
  }

  if (input.fundingNeed === 'oui') {
    return {
      profile: 'Valider avant de financer',
      explanation: 'Avant de chercher de l argent, il faut verifier que le besoin est clair et partage.',
      nextSteps: ['Chiffrer un premier test', 'Verifier l interet du public vise', 'Identifier les depenses evitables'],
    }
  }

  return {
    profile: 'Tester a petite echelle',
    explanation: 'Le projet semble pret pour une experimentation limitee, observable et reversible.',
    nextSteps: ['Choisir un public test', 'Fixer une date courte', 'Mesurer ce qui a vraiment fonctionne'],
  }
}
