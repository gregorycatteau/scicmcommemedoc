<template>
  <MainWrapper>
    <Breadcrumbs :items="[{ label: 'Developper un projet' }]" />
    <LongTailHero kicker="Parcours utile" title="Choisir la prochaine trajectoire d une activite utile." description="Professionnelle, associative, agricole, artisanale, sociale ou cooperative : l outil aide a situer le besoin suivant sans donner de conseil juridique." promise="Un profil de progression, une trajectoire et trois prochaines actions." tone="clay" />
    <section class="ActivityGrid">
      <RevealOnScroll as="form" class="ActivityForm PathForm" variant="left" @submit.prevent>
        <div class="PathLegend" aria-label="Etapes de maturite">
          <span :class="{ active: input.maturity === 'idee' }">Explorer</span>
          <span :class="{ active: input.maturity === 'test' }">Tester</span>
          <span :class="{ active: input.maturity === 'structure' }">Structurer</span>
        </div>
        <label><span>Nature de l idee</span><input v-model="input.nature" maxlength="120" /></label>
        <label><span>Maturite</span><select v-model="input.maturity"><option value="idee">idee</option><option value="test">test en cours</option><option value="structure">deja structure</option></select></label>
        <label><span>Finalite</span><input v-model="input.goal" maxlength="160" /></label>
        <label><span>Marchand ou non marchand</span><select v-model="input.market"><option>marchand</option><option>non marchand</option><option>mixte</option></select></label>
        <label><span>Competences disponibles</span><textarea v-model="input.skills" rows="3" maxlength="500"></textarea></label>
        <label><span>Besoin materiel</span><input v-model="input.materialNeeds" maxlength="160" /></label>
        <label><span>Besoin de lieu</span><select v-model="input.placeNeed"><option value="non">non</option><option value="oui">oui</option></select></label>
        <label><span>Besoin de financement</span><select v-model="input.fundingNeed"><option value="non">non</option><option value="oui">oui</option></select></label>
        <label><span>Besoin de partenaires</span><select v-model="input.partnersNeed"><option value="non">non</option><option value="oui">oui</option></select></label>
        <label><span>Public vise</span><input v-model="input.audience" maxlength="160" /></label>
        <label><span>Impact territorial</span><textarea v-model="input.impact" rows="3" maxlength="500"></textarea></label>
        <label><span>Delai envisage</span><input v-model="input.timeline" maxlength="120" /></label>
      </RevealOnScroll>
      <ToolResult class="ActivityResult">
        <RevealOnScroll variant="right">
          <p class="ResultEyebrow">Chemin recommande</p>
          <h2>{{ result.profile }}</h2>
        </RevealOnScroll>
        <p>{{ result.explanation }}</p>
        <div class="RouteLine" aria-hidden="true">
          <span class="is-lit">Explorer</span>
          <span :class="{ 'is-lit': input.maturity !== 'idee' }">Tester</span>
          <span :class="{ 'is-lit': input.maturity === 'structure' }">Structurer</span>
          <span :class="{ 'is-lit': input.fundingNeed === 'oui' }">Financer</span>
          <span :class="{ 'is-lit': input.partnersNeed === 'oui' }">Cooperer</span>
        </div>
        <ol><li v-for="step in result.nextSteps" :key="step">{{ step }}</li></ol>
        <p class="Warning">Information generale uniquement. Aucune recommandation juridique ou financiere personnalisee.</p>
      </ToolResult>
    </section>
    <section class="EditorialBlock ActivityEditorial">
      <h2>Nommer le besoin avant de chercher le statut</h2>
      <p>Le bon parcours depend souvent moins du statut que du besoin suivant : verifier, tester, trouver un lieu, mobiliser des partenaires, financer une etape ou rejoindre une dynamique existante.</p>
      <NuxtLink to="/devenir-membre">Faire connaitre son besoin ou son projet</NuxtLink>
    </section>
    <RelatedTools />
  </MainWrapper>
</template>

<script setup lang="ts">
import { recommendActivityPath, type ActivityInput } from '~/utils/activityPath'
const input = reactive<ActivityInput>({ nature: '', maturity: 'idee', goal: '', market: 'mixte', skills: '', materialNeeds: '', placeNeed: 'non', fundingNeed: 'non', partnersNeed: 'non', audience: '', impact: '', timeline: '' })
const result = computed(() => recommendActivityPath(input))
usePageSeo('Developper une activite utile dans le Medoc', 'Guide personnalise pour faire progresser une idee professionnelle, associative, agricole ou cooperative dans le Medoc.')
</script>

<style scoped>
@reference "~/assets/css/main.css";
.ActivityGrid { padding-block: var(--section-padding-soft); @apply mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[1fr_0.85fr] lg:px-8; }
.ActivityForm { @apply grid gap-4 rounded-[1.5rem] bg-white/70 p-5 sm:p-6 md:grid-cols-2; }
.PathForm { @apply border border-secondary/10; }
.PathLegend { @apply col-span-full grid grid-cols-3 overflow-hidden rounded-full border border-ink/10 bg-white text-center text-xs font-black uppercase tracking-[0.12em]; }
.PathLegend span { @apply px-3 py-3 text-ink/55; }
.PathLegend .active { @apply bg-secondary text-white; }
.ActivityForm label { @apply grid gap-2 font-bold; }
.ActivityForm input,.ActivityForm select,.ActivityForm textarea { @apply rounded-lg border border-ink/10 bg-white px-4 py-3 font-normal; }
.ActivityResult { @apply bg-ink; }
.ResultEyebrow { @apply text-sm font-black uppercase tracking-[0.18em] text-primary; }
.ToolResult h2 { @apply text-5xl font-black; }
.ToolResult p { @apply mt-5 text-white/75; }
.ToolResult ol { @apply mt-6 grid gap-3 list-decimal pl-5; }
.RouteLine { @apply mt-7 grid gap-3 border-y border-white/15 py-5; }
.RouteLine span { @apply rounded-full border border-white/15 px-4 py-2 text-sm font-bold text-white/50; }
.RouteLine .is-lit { @apply border-primary/50 bg-primary/15 text-white; }
.Warning { @apply rounded-2xl bg-white/10 p-4; }
.EditorialBlock { padding-block: var(--section-padding-soft); @apply mx-auto max-w-4xl px-4 sm:px-6 lg:px-8; }
.EditorialBlock h2 { @apply text-4xl font-black; }
.EditorialBlock p { @apply mt-5 text-lg leading-8 text-ink/70; }
.EditorialBlock a { @apply mt-8 inline-flex rounded-full bg-primary px-6 py-3 font-bold text-white; }
.ActivityEditorial { @apply max-w-5xl; }
@media (min-width: 640px) {
  .RouteLine { @apply grid-cols-5; }
}
</style>
