import { describe, expect, it } from 'vitest'
import { generateProjectMarkdown, generateProjectName } from './projectSheet'

const draft = {
  problem: 'Des outils dorment dans les garages.',
  people: 'Habitants et petites associations.',
  solution: 'Creer une outiltheque de proximite.',
  territory: 'Nord Medoc',
  availableResources: 'Un local temporaire.',
  missingResources: 'Un inventaire et des referents.',
  partners: 'Associations locales.',
  firstTest: 'Une permanence de deux heures.',
  calendar: 'Premier test en septembre.',
  risks: 'Responsabilites et stockage.',
  nextAction: 'Reunir trois personnes interessees.',
}

describe('fiche projet citoyen', () => {
  it('genere un nom provisoire exploitable', () => {
    expect(generateProjectName(draft)).toContain('Nord Medoc')
  })

  it('genere une synthese markdown structurée', () => {
    const markdown = generateProjectMarkdown(draft)

    expect(markdown).toContain('## Probleme constate')
    expect(markdown).toContain('## Trois prochaines etapes')
    expect(markdown).toContain(draft.nextAction)
  })
})
