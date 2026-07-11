export type ResilienceAnswer = 0 | 1 | 2

export type ResilienceDomain = {
  id: string
  label: string
  question: string
  freeAction: string
  modestAction: string
  structuringAction: string
}

export type ResilienceResult = {
  globalScore: number
  domainScores: Array<{ label: string; score: number }>
  strengths: string[]
  priorities: string[]
  plan7Days: string[]
  plan30Days: string[]
  plan90Days: string[]
}

export const resilienceDomains: ResilienceDomain[] = [
  { id: 'water', label: 'Eau', question: 'Sais-tu comment tenir 24h si l eau courante est interrompue ?', freeAction: 'Identifier les points d eau et contenants disponibles.', modestAction: 'Prevoir quelques litres de reserve tournante.', structuringAction: 'Organiser une solution de quartier pour les personnes fragiles.' },
  { id: 'food', label: 'Alimentation', question: 'As-tu de quoi preparer plusieurs repas simples sans achat immediat ?', freeAction: 'Lister les repas possibles avec le stock actuel.', modestAction: 'Constituer une base tournante de produits simples.', structuringAction: 'Participer a un groupement d achat ou un panier local.' },
  { id: 'energy', label: 'Energie', question: 'Connais-tu tes usages essentiels en cas de coupure courte ?', freeAction: 'Lister lumiere, cuisson, chauffage et recharge utiles.', modestAction: 'Prevoir lampes, piles rechargeables ou batterie simple.', structuringAction: 'Comparer les solutions mutualisables avec des voisins.' },
  { id: 'mobility', label: 'Mobilite', question: 'Peux-tu rejoindre un lieu utile sans ton trajet habituel ?', freeAction: 'Noter deux alternatives de trajet.', modestAction: 'Prevoir un contact de covoiturage de proximite.', structuringAction: 'Construire une petite carte d entraide locale.' },
  { id: 'communication', label: 'Communication', question: 'Tes proches savent-ils comment te joindre si le telephone est perturbe ?', freeAction: 'Definir un point de rendez-vous ou contact relais.', modestAction: 'Imprimer les numeros importants.', structuringAction: 'Partager un protocole simple avec quelques voisins.' },
  { id: 'health', label: 'Sante', question: 'Les besoins de sante ordinaires sont-ils anticipes sans conseil medical ?', freeAction: 'Verifier les documents et contacts utiles.', modestAction: 'Completer une trousse de premiers secours simple.', structuringAction: 'Suivre une initiation aux gestes de premiers secours.' },
  { id: 'finance', label: 'Finances', question: 'Connais-tu les charges qui doivent absolument passer chaque mois ?', freeAction: 'Identifier les depenses incompressibles.', modestAction: 'Creer une petite enveloppe imprevus.', structuringAction: 'Construire un budget partage au sein du foyer.' },
  { id: 'mutualAid', label: 'Entraide', question: 'As-tu au moins deux personnes a qui demander un coup de main concret ?', freeAction: 'Nommer deux contacts de proximite.', modestAction: 'Proposer un echange de services simple.', structuringAction: 'Participer a un groupe local d entraide.' },
  { id: 'skills', label: 'Competences', question: 'Le foyer sait-il reparer, cuisiner, transmettre ou organiser un geste utile ?', freeAction: 'Lister trois competences deja presentes.', modestAction: 'Choisir une competence a renforcer.', structuringAction: 'Participer a un atelier de transmission.' },
  { id: 'documents', label: 'Documents', question: 'Les documents importants sont-ils faciles a retrouver ?', freeAction: 'Lister les documents essentiels.', modestAction: 'Faire une copie papier ou numerique securisee.', structuringAction: 'Mettre en place une routine de mise a jour.' },
]

export function scoreResilience(answers: Record<string, ResilienceAnswer>): ResilienceResult {
  const domainScores = resilienceDomains.map((domain) => ({
    label: domain.label,
    score: ((answers[domain.id] ?? 0) / 2) * 100,
  }))
  const globalScore = Math.round(domainScores.reduce((sum, domain) => sum + domain.score, 0) / domainScores.length)
  const weakDomains = resilienceDomains.filter((domain) => (answers[domain.id] ?? 0) < 1)
  const mediumDomains = resilienceDomains.filter((domain) => (answers[domain.id] ?? 0) === 1)
  const strongDomains = resilienceDomains.filter((domain) => (answers[domain.id] ?? 0) === 2)

  return {
    globalScore,
    domainScores,
    strengths: strongDomains.slice(0, 3).map((domain) => domain.label),
    priorities: weakDomains.slice(0, 3).map((domain) => domain.label),
    plan7Days: weakDomains.slice(0, 3).map((domain) => domain.freeAction),
    plan30Days: [...weakDomains, ...mediumDomains].slice(0, 3).map((domain) => domain.modestAction),
    plan90Days: [...mediumDomains, ...weakDomains].slice(0, 3).map((domain) => domain.structuringAction),
  }
}
