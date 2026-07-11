<template>
  <MainWrapper>
    <Breadcrumbs :items="[{ label: 'Projet citoyen' }]" />
    <LongTailHero kicker="Fiche projet" title="Donner une premiere forme a une idee citoyenne." description="Un plan de travail simple pour passer d une intuition a une fiche partageable. Rien n est enregistre sans action explicite." promise="Une fiche copiable, imprimable et exportable en Markdown." tone="light" />
    <section class="ProjectGrid">
      <RevealOnScroll as="form" class="ProjectForm WorkshopForm" variant="left" @submit.prevent>
        <p class="FormIntro">Chaque bloc peut rester imparfait. Une case vide indique surtout ce qu il faut clarifier ensuite.</p>
        <label v-for="field in fields" :key="field.key"><span>{{ field.label }}</span><textarea v-model="draft[field.key]" rows="3" maxlength="900"></textarea></label>
        <div class="Actions">
          <button type="button" @click="copyMarkdown">Copier</button>
          <button type="button" @click="downloadMarkdown">Exporter Markdown</button>
          <button type="button" @click="reset">Remise a zero</button>
        </div>
        <p v-if="feedback" role="status">{{ feedback }}</p>
      </RevealOnScroll>
      <ToolResult class="ProjectResult">
        <RevealOnScroll variant="right">
          <p class="ResultEyebrow">Fiche partageable</p>
          <h2>Version de travail</h2>
        </RevealOnScroll>
        <div class="SheetFrame">
          <pre>{{ markdown }}</pre>
        </div>
      </ToolResult>
    </section>
    <section class="EditorialBlock ProjectEditorial">
      <h2>Partager assez tot pour trouver les bons appuis</h2>
      <p>Une fiche projet sert a tester une idee, pas a la figer. Les questions non resolues sont utiles : elles montrent ce qu il faut apprendre, demander ou verifier.</p>
      <NuxtLink to="/devenir-membre">Presenter cette idee a la communaute</NuxtLink>
    </section>
    <RelatedTools />
  </MainWrapper>
</template>

<script setup lang="ts">
import { generateProjectMarkdown, type ProjectDraft } from '~/utils/projectSheet'

const emptyDraft: ProjectDraft = { problem: '', people: '', solution: '', territory: '', availableResources: '', missingResources: '', partners: '', firstTest: '', calendar: '', risks: '', nextAction: '' }
const draft = reactive<ProjectDraft>({ ...emptyDraft })
const feedback = ref('')
const fields: Array<{ key: keyof ProjectDraft; label: string }> = [
  { key: 'problem', label: 'Probleme ou besoin constate' }, { key: 'people', label: 'Personnes concernees' }, { key: 'solution', label: 'Solution envisagee' }, { key: 'territory', label: 'Territoire vise' }, { key: 'availableResources', label: 'Ressources disponibles' }, { key: 'missingResources', label: 'Ressources manquantes' }, { key: 'partners', label: 'Partenaires a mobiliser' }, { key: 'firstTest', label: 'Premier test realisable' }, { key: 'calendar', label: 'Calendrier initial' }, { key: 'risks', label: 'Risques et freins' }, { key: 'nextAction', label: 'Prochaine action concrete' },
]
const markdown = computed(() => generateProjectMarkdown(draft))
async function copyMarkdown() { await navigator.clipboard?.writeText(markdown.value); feedback.value = 'Fiche copiee dans le presse-papiers.' }
function downloadMarkdown() { const blob = new Blob([markdown.value], { type: 'text/markdown' }); const url = URL.createObjectURL(blob); const a = document.createElement('a'); a.href = url; a.download = 'fiche-projet-medoc.md'; a.click(); URL.revokeObjectURL(url); feedback.value = 'Export Markdown genere localement.' }
function reset() { Object.assign(draft, emptyDraft); feedback.value = 'Fiche remise a zero.' }
usePageSeo('Creer un projet citoyen dans le Medoc', 'Generateur de fiche projet pour transformer une idee citoyenne en premiere experimentation locale.')
</script>

<style scoped>
@reference "~/assets/css/main.css";
.ProjectGrid { padding-block: var(--section-padding-soft); @apply mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[1fr_0.95fr] lg:px-8; }
.ProjectForm { @apply grid gap-4 rounded-[1.5rem] bg-white/70 p-5 sm:p-6; }
.WorkshopForm { background-image: linear-gradient(90deg, rgb(185 104 63 / 0.08) 1px, transparent 1px), linear-gradient(rgb(185 104 63 / 0.08) 1px, transparent 1px); background-size: 2.25rem 2.25rem; }
.FormIntro { border: 1px solid rgb(185 104 63 / 0.15); @apply rounded-2xl bg-stone-100/80 p-4 text-sm font-semibold leading-6 text-black/70; }
.ProjectForm label { @apply grid gap-2 font-bold; }
.ProjectForm textarea { @apply rounded-lg border border-black/10 bg-white px-4 py-3 font-normal; }
.Actions { @apply flex flex-wrap gap-3; }
.Actions button { @apply rounded-full bg-black px-5 py-3 font-bold text-white; }
.ProjectResult { @apply bg-stone-700; }
.ResultEyebrow { @apply text-sm font-black uppercase tracking-[0.18em] text-orange-600; }
.ProjectResult h2 { @apply mt-3 text-3xl font-black; }
.SheetFrame { @apply mt-6 rounded-xl bg-stone-100 p-5 text-black shadow-inner; }
pre { @apply max-h-[70vh] overflow-auto whitespace-pre-wrap text-sm leading-7 text-black; }
.EditorialBlock { padding-block: var(--section-padding-soft); @apply mx-auto max-w-4xl px-4 sm:px-6 lg:px-8; }
.EditorialBlock h2 { @apply text-4xl font-black; }
.EditorialBlock p { @apply mt-5 text-lg leading-8 text-black/70; }
.EditorialBlock a { @apply mt-8 inline-flex rounded-full bg-orange-600 px-6 py-3 font-bold text-white; }
.ProjectEditorial { border-top: 1px solid rgb(115 88 58 / 0.1); }
@media print {
  .ProjectForm,
  .EditorialBlock,
  :deep(header),
  :deep(footer) { display: none; }
  .ProjectResult { background: white; color: #18130f; box-shadow: none; }
  .SheetFrame { box-shadow: none; }
}
</style>
