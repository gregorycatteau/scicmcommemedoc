export type ProjectDraft = {
  problem: string
  people: string
  solution: string
  territory: string
  availableResources: string
  missingResources: string
  partners: string
  firstTest: string
  calendar: string
  risks: string
  nextAction: string
}

export function generateProjectName(draft: ProjectDraft): string {
  const territory = draft.territory.trim() || 'territoire'
  const solution = draft.solution.trim().split(/[,.]/)[0] || 'initiative locale'
  return `${solution} - ${territory}`.slice(0, 90)
}

export function generateProjectMarkdown(draft: ProjectDraft): string {
  const name = generateProjectName(draft)
  return `# ${name}

## Probleme constate
${draft.problem || 'A completer'}

## Personnes concernees
${draft.people || 'A completer'}

## Proposition
${draft.solution || 'A completer'}

## Territoire vise
${draft.territory || 'A completer'}

## Ressources disponibles
${draft.availableResources || 'A completer'}

## Ressources manquantes
${draft.missingResources || 'A completer'}

## Partenaires possibles
${draft.partners || 'A completer'}

## Experimentation minimale
${draft.firstTest || 'A completer'}

## Trois prochaines etapes
1. ${draft.nextAction || 'Identifier une prochaine action simple'}
2. Partager la fiche avec deux personnes concernees
3. Fixer une date de test

## Questions non resolues
- ${draft.risks || 'Freins et risques a clarifier'}
- Moyens a confirmer
- Personnes a mobiliser
`
}
