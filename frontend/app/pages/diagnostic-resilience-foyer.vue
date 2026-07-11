<template>
  <MainWrapper>
    <Breadcrumbs :items="[{ label: 'Diagnostic resilience' }]" />
    <LongTailHero
      kicker="Diagnostic doux"
      title="Situer les appuis du foyer sans dramatiser."
      description="Un questionnaire court pour regarder les gestes du quotidien : contacts utiles, reserves simples, organisation et entraide. Aucune donnee personnelle n est necessaire."
      promise="Un score par domaine et un plan d action 7, 30 et 90 jours."
      tone="dark"
    />
    <section class="DiagnosticGrid">
      <RevealOnScroll class="QuestionPanel CompassPanel" variant="fade">
        <ToolProgress :current="currentIndex + 1" :total="resilienceDomains.length" />
        <h2>{{ current.label }}</h2>
        <p>{{ current.question }}</p>
        <div class="Answers">
          <button type="button" @click="answer(0)">Pas encore clair</button>
          <button type="button" @click="answer(1)">Partiellement</button>
          <button type="button" @click="answer(2)">Oui, plutot</button>
        </div>
        <button class="BackButton" type="button" :disabled="currentIndex === 0" @click="currentIndex--">Revenir</button>
      </RevealOnScroll>
      <ToolResult class="ResilienceResult">
        <RevealOnScroll variant="fade" delay="short">
          <p class="ResultEyebrow">Boussole du foyer</p>
          <div class="CompassScore"><span>{{ result.globalScore }}</span><small>/ 100</small></div>
        </RevealOnScroll>
        <p>Score pedagogique. Il ne promet aucune securite et ne remplace aucun conseil specialise.</p>
        <section class="PriorityBand">
          <h3>Priorites calmes</h3>
          <ul><li v-for="item in result.priorities" :key="item">{{ item }}</li></ul>
        </section>
        <div class="PlanSteps">
          <section>
            <h3>7 jours</h3>
            <ul><li v-for="item in result.plan7Days" :key="item">{{ item }}</li></ul>
          </section>
          <section>
            <h3>30 jours</h3>
            <ul><li v-for="item in result.plan30Days" :key="item">{{ item }}</li></ul>
          </section>
          <section>
            <h3>90 jours</h3>
            <ul><li v-for="item in result.plan90Days" :key="item">{{ item }}</li></ul>
          </section>
        </div>
      </ToolResult>
    </section>
    <section class="EditorialBlock ResilienceEditorial">
      <h2>Avancer par petits appuis</h2>
      <p>La resilience du foyer commence souvent par des gestes ordinaires : savoir qui appeler, quoi verifier, quoi partager et quoi simplifier avant une situation tendue.</p>
      <NuxtLink to="/evenements">Rencontrer d autres personnes qui developpent des solutions concretes</NuxtLink>
    </section>
    <RelatedTools />
  </MainWrapper>
</template>

<script setup lang="ts">
import { resilienceDomains, scoreResilience, type ResilienceAnswer, type ResilienceDomain } from '~/utils/resilience'

const currentIndex = ref(0)
const answers = reactive<Record<string, ResilienceAnswer>>({})
const current = computed<ResilienceDomain>(() => resilienceDomains[currentIndex.value] || resilienceDomains[0] as ResilienceDomain)
const result = computed(() => scoreResilience(answers))

function answer(value: ResilienceAnswer) {
  answers[current.value.id] = value
  if (currentIndex.value < resilienceDomains.length - 1) currentIndex.value++
}

usePageSeo('Diagnostic de resilience du foyer', 'Questionnaire court pour evaluer pedagogiquement la resilience quotidienne du foyer sans collecte de donnees personnelles.')
</script>

<style scoped>
@reference "~/assets/css/main.css";
.DiagnosticGrid { padding-block: var(--section-padding-soft); @apply mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[1fr_0.9fr] lg:px-8; }
.QuestionPanel { @apply grid content-start gap-6 rounded-[1.5rem] bg-white/70 p-6; }
.CompassPanel { border: 1px solid rgb(46 79 79 / 0.1); @apply shadow-sm; }
.QuestionPanel h2 { @apply text-4xl font-black; }
.QuestionPanel p { @apply text-xl leading-9 text-black/70; }
.Answers { @apply grid gap-3; }
.Answers button,.BackButton { @apply rounded-full border border-black/10 bg-white px-5 py-3 font-bold hover:bg-teal-900 hover:text-white disabled:opacity-50; }
.ResilienceResult { @apply bg-teal-900; }
.ResultEyebrow { @apply text-sm font-black uppercase tracking-[0.18em] text-orange-600; }
.CompassScore { @apply mt-5 flex aspect-square max-w-56 items-center justify-center rounded-full border border-white/20 bg-white/10 text-center; }
.CompassScore span { @apply text-6xl font-black; }
.CompassScore small { @apply ml-1 text-lg text-white/65; }
.ToolResult h3 { @apply text-xl font-black; }
.ToolResult ul { @apply mt-3 grid gap-2 text-white/80; }
.PriorityBand { @apply mt-7 border-y border-white/15 py-5; }
.PlanSteps { @apply mt-6 grid gap-4; }
.PlanSteps section { @apply rounded-2xl bg-white/10 p-4; }
.EditorialBlock { padding-block: var(--section-padding-soft); @apply mx-auto max-w-4xl px-4 sm:px-6 lg:px-8; }
.EditorialBlock h2 { @apply text-4xl font-black; }
.EditorialBlock p { @apply mt-5 text-lg leading-8 text-black/70; }
.EditorialBlock a { @apply mt-8 inline-flex rounded-full bg-orange-600 px-6 py-3 font-bold text-white; }
.ResilienceEditorial { @apply max-w-3xl; }
</style>
