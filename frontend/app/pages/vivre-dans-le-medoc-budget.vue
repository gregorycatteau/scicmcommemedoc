<template>
  <MainWrapper>
    <Breadcrumbs :items="[{ label: 'Budget Medoc' }]" />
    <LongTailHero
      kicker="Calculateur"
      title="Estimer son budget mensuel pour vivre dans le Medoc."
      description="Un carnet de projection pour poser les grandes lignes du mois : logement, mobilite, energie, alimentation et marge de securite."
      promise="Une lecture en proportions, puis trois ajustements possibles."
      tone="light"
    />

    <section class="ToolGrid">
      <RevealOnScroll as="form" class="ToolForm LedgerForm" variant="left" @submit.prevent>
        <fieldset>
          <legend>Foyer</legend>
          <label><span>Adultes</span><input v-model.number="input.householdAdults" type="number" min="1" max="8" /></label>
          <label><span>Enfants</span><input v-model.number="input.householdChildren" type="number" min="0" max="8" /></label>
          <label><span>Commune ou zone approximative</span><input v-model="zone" maxlength="120" /></label>
        </fieldset>
        <fieldset>
          <legend>Charges structurantes</legend>
          <label><span>Statut logement</span><select v-model="input.housingStatus"><option>locataire</option><option>proprietaire</option><option>heberge</option></select></label>
          <label><span>Logement mensuel</span><input v-model.number="input.housing" type="number" min="0" /></label>
          <label><span>Vehicules</span><input v-model.number="input.vehicles" type="number" min="0" max="6" /></label>
          <label><span>Kilometres par semaine</span><input v-model.number="input.kilometersPerWeek" type="number" min="0" /></label>
        </fieldset>
        <fieldset>
          <legend>Postes du mois</legend>
          <label><span>Energie</span><input v-model.number="input.energy" type="number" min="0" /></label>
          <label><span>Alimentation</span><input v-model.number="input.food" type="number" min="0" /></label>
          <label><span>Telecommunications</span><input v-model.number="input.telecom" type="number" min="0" /></label>
          <label><span>Garde d enfants</span><input v-model.number="input.childcare" type="number" min="0" /></label>
          <label><span>Sante</span><input v-model.number="input.health" type="number" min="0" /></label>
          <label><span>Loisirs</span><input v-model.number="input.leisure" type="number" min="0" /></label>
          <label><span>Imprevus</span><input v-model.number="input.contingency" type="number" min="0" /></label>
          <label><span>Autres charges</span><input v-model.number="input.other" type="number" min="0" /></label>
        </fieldset>
      </RevealOnScroll>

      <ToolResult class="BudgetResult">
        <RevealOnScroll variant="right">
          <p class="ResultEyebrow">Paysage mensuel</p>
          <h2>{{ euro(result.monthlyTotal) }}</h2>
          <p>{{ euro(result.yearlyTotal) }} par an. Estimation indicative, pas un conseil financier.</p>
        </RevealOnScroll>
        <dl class="LedgerSummary">
          <div><dt>Incompressible</dt><dd>{{ euro(result.essentialTotal) }}</dd></div>
          <div><dt>Logement</dt><dd>{{ percent(result.housingShare) }}</dd></div>
          <div><dt>Mobilite</dt><dd>{{ percent(result.mobilityShare) }}</dd></div>
        </dl>
        <div class="BudgetBars">
          <p v-for="post in result.posts" :key="post.label">
            <span>{{ post.label }}</span>
            <i :style="{ width: `${Math.min(100, (post.value / Math.max(result.monthlyTotal, 1)) * 100)}%` }"></i>
            <strong>{{ euro(post.value) }}</strong>
          </p>
        </div>
        <div class="BudgetRecommendations">
          <h3>Trois prochains reglages</h3>
          <ul><li v-for="item in result.recommendations" :key="item">{{ item }}</li></ul>
        </div>
      </ToolResult>
    </section>

    <section class="EditorialBlock BudgetEditorial">
      <h2>Lire les tensions avant de chercher une solution</h2>
      <p>Dans le Medoc, un trajet regulier, une energie mal anticipee ou des achats disperses peuvent peser autant qu une ligne plus visible.</p>
      <p>Les valeurs par defaut sont des exemples modifiables. Elles ne sont pas des statistiques locales officielles.</p>
      <NuxtLink to="/ressources">Decouvrir comment mutualiser certaines depenses et initiatives locales</NuxtLink>
    </section>
    <RelatedTools />
  </MainWrapper>
</template>

<script setup lang="ts">
import { calculateBudget, type BudgetInput } from '~/utils/budget'

const zone = ref('')
const input = reactive<BudgetInput>({
  householdAdults: 2,
  householdChildren: 0,
  housingStatus: 'locataire',
  housing: 750,
  vehicles: 1,
  kilometersPerWeek: 180,
  energy: 180,
  food: 520,
  telecom: 60,
  childcare: 0,
  health: 80,
  leisure: 120,
  contingency: 120,
  other: 150,
})
const result = computed(() => calculateBudget(input))
const euro = (value: number) => new Intl.NumberFormat('fr-FR', { style: 'currency', currency: 'EUR', maximumFractionDigits: 0 }).format(value)
const percent = (value: number) => `${Math.round(value * 100)} %`

usePageSeo('Budget pour vivre dans le Medoc', 'Calculateur indicatif du cout de la vie dans le Medoc : logement, mobilite, energie, alimentation et imprevus.')
</script>

<style scoped>
@reference "~/assets/css/main.css";

.ToolGrid { padding-block: var(--section-padding-soft); @apply mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[1fr_0.8fr] lg:px-8; }
.ToolForm { @apply grid gap-5 rounded-2xl border border-earth/15 bg-white/70 p-5 shadow-sm sm:p-6; }
.ToolForm fieldset { @apply grid gap-4 border-t border-earth/15 pt-5 md:grid-cols-2; }
.ToolForm fieldset:first-child { @apply border-t-0 pt-0; }
.ToolForm legend { @apply col-span-full pb-1 text-sm font-black uppercase tracking-[0.18em] text-earth; }
.ToolForm label { @apply grid gap-2 font-bold; }
.ToolForm input,.ToolForm select { @apply min-h-12 rounded-lg border border-ink/10 bg-white px-4; }
.LedgerForm { background-image: linear-gradient(transparent 95%, rgb(115 88 58 / 0.12) 96%); background-size: 100% 3.25rem; }
.BudgetResult { @apply relative overflow-hidden border border-white/10; }
.BudgetResult::before { content: ""; @apply absolute inset-x-0 top-0 h-1 bg-primary; }
.ToolResult h2 { @apply text-5xl font-black; }
.ToolResult p { @apply mt-4 text-white/75; }
.ResultEyebrow { @apply mt-0 text-sm font-black uppercase tracking-[0.18em] text-primary; }
.LedgerSummary { @apply mt-6 grid gap-3 sm:grid-cols-3; }
.LedgerSummary div { @apply grid gap-1 border-l border-white/15 pl-4; }
.LedgerSummary dt { @apply text-xs uppercase tracking-[0.14em] text-white/55; }
.LedgerSummary dd { @apply text-xl font-black; }
.BudgetBars { @apply mt-6 grid gap-3; }
.BudgetBars p { @apply grid grid-cols-[minmax(7rem,1fr)_2fr_auto] items-center gap-3 text-sm; }
.BudgetBars i { @apply block h-2 rounded-full bg-primary; }
.BudgetBars strong { @apply text-right text-sm; }
.ToolResult h3 { @apply mt-8 text-2xl font-black; }
.ToolResult ul { @apply mt-4 grid gap-2; }
.BudgetRecommendations { @apply mt-8 border-t border-white/15 pt-6; }
.EditorialBlock { padding-block: var(--section-padding-soft); @apply mx-auto max-w-4xl px-4 sm:px-6 lg:px-8; }
.EditorialBlock h2 { @apply text-4xl font-black leading-tight; }
.EditorialBlock p { @apply mt-5 text-lg leading-8 text-ink/70; }
.EditorialBlock a { @apply mt-8 inline-flex rounded-full bg-primary px-6 py-3 font-bold text-white; }
.BudgetEditorial { @apply border-y border-earth/10; }
@media (max-width: 640px) {
  .BudgetBars p { @apply grid-cols-1; }
  .BudgetBars strong { @apply text-left; }
}
</style>
