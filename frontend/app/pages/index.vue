<template>
  <MainWrapper>
    <section class="HeroSection">
      <img
        class="HeroImage motion-breathe"
        src="/images/medoc-hero.webp"
        alt="Un chemin dans les vignes du Medoc au lever du soleil"
        width="1680"
        height="960"
        fetchpriority="high"
      />
      <div class="HeroVeil"></div>
      <div class="HeroContent">
        <p class="HeroKicker">Medoc, territoire vivant</p>
        <h1 class="HeroTitle">Et si habiter ici redevenait une force collective ?</h1>
        <p class="HeroText">
          M Comme Medoc rassemble celles et ceux qui veulent reprendre prise sur leur economie locale, leurs savoir-faire et leurs liens.
        </p>
        <div class="HeroActions">
          <CtaButton to="/devenir-membre">Faire le premier pas</CtaButton>
          <NuxtLink class="GhostAction" to="#histoire">Comprendre le chemin</NuxtLink>
        </div>
      </div>
      <a class="ScrollCue" href="#histoire" aria-label="Descendre vers l'histoire">Comprendre</a>
    </section>

    <section id="histoire" class="AwakeningSection section-transition">
      <RevealOnScroll class="AwakeningIntro" variant="left">
        <p class="SectionKicker">La prise de conscience</p>
        <h2 class="ChapterTitle">Un territoire peut perdre ses commerces, ses gestes et ses rencontres sans faire de bruit.</h2>
      </RevealOnScroll>
      <div class="ProblemGrid">
        <RevealOnScroll v-for="problem in problems" :key="problem.number" as="article" class="ProblemCard" variant="fade" :delay="problem.delay">
          <span class="ProblemNumber">{{ problem.number }}</span>
          <h3>{{ problem.title }}</h3>
          <p>{{ problem.text }}</p>
        </RevealOnScroll>
      </div>
    </section>

    <div class="bridge-dark" aria-hidden="true"></div>

    <section class="BeliefSection">
      <RevealOnScroll class="BeliefText" variant="left">
        <p class="SectionKicker">L'espoir</p>
        <h2 class="BeliefTitle">La reponse n'est pas un service de plus. C'est une maniere de faire a plusieurs.</h2>
      </RevealOnScroll>
      <RevealOnScroll as="p" class="BeliefQuote" variant="right" delay="short">
        M Comme Medoc sert de cadre. Les habitants gardent la main sur les decisions, les gestes et les projets.
      </RevealOnScroll>
    </section>

    <div class="bridge-light" aria-hidden="true"></div>

    <section id="cycle" class="CycleIntroSection">
      <RevealOnScroll class="CycleHeader" variant="mask">
        <p class="SectionKicker">Le cycle</p>
        <h2 class="ChapterTitle">Semer. Cultiver. Recolter.</h2>
        <p class="ChapterLead">
          Ce n'est pas un slogan. C'est le rythme d'un mouvement qui avance sans bruler les etapes.
        </p>
        <nav class="CycleNav" aria-label="Acces rapide aux etapes du cycle">
          <a href="#semer">Semer</a>
          <a href="#cultiver">Cultiver</a>
          <a href="#recolter">Recolter</a>
        </nav>
      </RevealOnScroll>
    </section>

    <section class="CyclePanels" aria-label="Les etapes Semer Cultiver Recolter">
      <article v-for="step in cycle" :id="step.id" :key="step.title" class="CyclePanel">
        <RevealOnScroll class="CycleImageWrap" variant="image" :delay="step.imageDelay">
          <img class="CycleImage" :src="step.image" :alt="step.alt" width="1680" height="1050" loading="lazy" />
        </RevealOnScroll>
        <RevealOnScroll class="CycleCopy" :variant="step.copyVariant">
          <span class="CycleIndex">{{ step.index }}</span>
          <h3>{{ step.title }}</h3>
          <p>{{ step.text }}</p>
          <ul>
            <li v-for="item in step.items" :key="item">{{ item }}</li>
          </ul>
          <NuxtLink class="CycleAction" :to="step.href">{{ step.action }}</NuxtLink>
        </RevealOnScroll>
      </article>
    </section>

    <section class="CommunitySection">
      <RevealOnScroll class="CommunityContent" variant="left">
        <p class="SectionKicker">La confiance</p>
        <h2 class="CommunityTitle">Le territoire donne le cap. Les habitants font le mouvement.</h2>
        <p>
          Ici, on ne demande pas a chacun de tout porter. On construit des chemins d'entree simples : une rencontre, un atelier, un projet, une contribution.
        </p>
      </RevealOnScroll>
      <div class="SignalGrid">
        <RevealOnScroll v-for="signal in signals" :key="signal.title" class="SignalCard" variant="fade" :delay="signal.delay">
          <strong>{{ signal.title }}</strong>
          <span>{{ signal.text }}</span>
        </RevealOnScroll>
      </div>
    </section>

    <section class="InvitationSection">
      <RevealOnScroll variant="mask">
        <p class="SectionKicker">L'envie de participer</p>
        <h2>Tu n'as pas besoin d'avoir tout compris pour commencer.</h2>
        <p>Viens voir. Pose tes questions. Choisis une premiere action a ta mesure.</p>
        <div class="InvitationActions">
          <CtaButton to="/devenir-membre">Faire le premier pas</CtaButton>
          <NuxtLink class="SecondaryAction" to="/evenements">Nous rencontrer</NuxtLink>
        </div>
      </RevealOnScroll>
    </section>
  </MainWrapper>
</template>

<script setup lang="ts">
const problems = [
  {
    number: '01',
    title: "Les plateformes decident loin d'ici.",
    text: "L'argent circule vite, mais il revient rarement dans les ateliers, les fermes et les rues du territoire.",
    delay: 'none' as const,
  },
  {
    number: '02',
    title: "Les savoir-faire s'isolent.",
    text: 'On sait reparer, produire, transmettre. Mais trop souvent chacun le fait dans son coin.',
    delay: 'short' as const,
  },
  {
    number: '03',
    title: 'Les liens deviennent fragiles.',
    text: 'Quand les lieux communs disparaissent, la confiance devient plus rare que les idees.',
    delay: 'medium' as const,
  },
]

const signals = [
  { title: '1 membre = 1 voix', text: 'La decision reste humaine, lisible et partagee.', delay: 'none' as const },
  { title: 'Des gestes concrets', text: 'Reparer, produire, transmettre, mutualiser.', delay: 'short' as const },
  { title: 'Un territoire plus autonome', text: 'Chaque projet doit renforcer le Medoc.', delay: 'medium' as const },
]

const cycle = [
  {
    id: 'semer',
    copyVariant: 'left' as const,
    imageDelay: 'short' as const,
    index: 'Semer',
    title: 'On commence par les idees, les rencontres et les envies.',
    text: 'On fait emerger les besoins, les idees et les personnes pretes a essayer. Cette etape rend la parole locale visible.',
    image: '/images/semer.webp',
    alt: 'Des mains autour d une carte et de carnets sur une table en bois',
    items: ['Identifier les besoins', 'Creer des rencontres', 'Exprimer les idees', 'Ouvrir les premiers projets'],
    action: 'Venir a une rencontre',
    href: '/evenements',
  },
  {
    id: 'cultiver',
    copyVariant: 'right' as const,
    imageDelay: 'none' as const,
    index: 'Cultiver',
    title: 'On donne du temps aux competences et a la cooperation.',
    text: 'Les projets grandissent quand les moyens sont mutualises, les roles clarifies et les initiatives accompagnees.',
    image: '/images/cultiver.webp',
    alt: 'Des personnes apprennent ensemble dans un atelier artisanal',
    items: ['Mutualiser les moyens', 'Faire grandir les projets', 'Creer des cooperations', 'Accompagner les initiatives'],
    action: 'Voir les projets',
    href: '/activites',
  },
  {
    id: 'recolter',
    copyVariant: 'left' as const,
    imageDelay: 'short' as const,
    index: 'Recolter',
    title: 'On partage les benefices communs.',
    text: 'Les resultats doivent etre visibles, mesures et partages pour renforcer le territoire au lieu de sortir de lui.',
    image: '/images/recolter.webp',
    alt: 'Une table commune au soleil avec des produits locaux et des habitants',
    items: ['Rendre visible', 'Mesurer les effets', 'Partager les resultats', 'Renforcer le territoire'],
    action: 'Faire le premier pas',
    href: '/devenir-membre',
  },
]

usePageSeo(
  'Une nouvelle maniere d habiter le Medoc',
  'M Comme Medoc propose aux habitants de reprendre prise sur leur economie locale, leurs savoir-faire, leur autonomie et leurs liens sociaux.',
)
</script>

<style scoped>
@reference "~/assets/css/main.css";

.HeroSection {
  min-height: calc(100svh - var(--header-height));
  @apply relative isolate overflow-hidden bg-ink text-white;
}
.HeroImage {
  @apply absolute inset-0 h-full w-full object-cover opacity-80;
}
.HeroVeil {
  @apply absolute inset-0 bg-linear-to-r from-ink via-ink/45 to-transparent;
}
.HeroContent {
  min-height: calc(100svh - var(--header-height));
  @apply relative z-10 flex max-w-4xl flex-col justify-center px-4 py-20 sm:px-8 lg:ml-16;
}
.HeroKicker {
  @apply text-sm font-bold uppercase tracking-[0.25em] text-white/75;
}
.HeroTitle {
  @apply mt-6 text-5xl font-black leading-none text-white sm:text-7xl lg:text-8xl;
}
.HeroText {
  @apply mt-8 max-w-2xl text-xl leading-9 text-white/82;
}
.HeroActions {
  @apply mt-10 flex flex-col gap-3 sm:flex-row;
}
.GhostAction {
  @apply rounded-full border border-white/45 px-6 py-3 text-center font-bold text-white transition duration-500 hover:bg-white hover:text-ink;
}
.ScrollCue {
  @apply absolute bottom-8 left-1/2 z-10 -translate-x-1/2 rounded-full border border-white/25 px-5 py-2 text-sm font-bold text-white/75 backdrop-blur transition duration-500 hover:text-white;
}
.AwakeningSection {
  min-height: calc(100svh - var(--header-height));
  @apply mx-auto grid max-w-7xl content-center px-4 sm:px-6 lg:px-8;
  padding-block: var(--section-padding);
}
.AwakeningIntro {
  @apply max-w-5xl;
}
.SectionKicker {
  @apply text-sm font-black uppercase tracking-[0.22em] text-clay;
}
.ChapterTitle {
  @apply mt-5 text-4xl font-black leading-tight text-ink sm:text-6xl;
}
.ChapterLead {
  @apply mt-6 max-w-3xl text-xl leading-9 text-ink/70;
}
.ProblemGrid {
  @apply mt-14 grid gap-4 md:grid-cols-3;
}
.ProblemCard {
  @apply min-h-72 rounded-4xl border border-ink/10 bg-white/55 p-7 shadow-sm backdrop-blur;
}
.ProblemNumber {
  @apply text-sm font-black text-clay;
}
.ProblemCard h3 {
  @apply mt-10 text-2xl font-black leading-tight text-ink;
}
.ProblemCard p {
  @apply mt-5 text-base leading-7 text-ink/70;
}
.BeliefSection {
  min-height: calc(100svh - var(--header-height));
  @apply grid content-center gap-10 bg-ink px-4 text-white sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:px-16;
  padding-block: var(--section-padding);
}
.BeliefText {
  @apply max-w-2xl;
}
.BeliefTitle {
  @apply mt-5 text-4xl font-black leading-tight sm:text-5xl;
}
.BeliefQuote {
  @apply self-end text-3xl font-black leading-tight text-white/85 sm:text-5xl;
}
.CycleIntroSection {
  min-height: calc(100svh - var(--header-height));
  @apply grid content-center bg-parchment px-4 sm:px-6 lg:px-8;
  padding-block: var(--section-padding);
}
.CycleHeader {
  @apply mx-auto max-w-5xl text-center;
}
.CycleNav {
  @apply mx-auto mt-10 flex max-w-2xl flex-col justify-center gap-3 sm:flex-row;
}
.CycleNav a {
  @apply rounded-full border border-ink/15 px-5 py-3 text-sm font-black uppercase tracking-[0.18em] text-ink/70 transition duration-500 hover:border-ink hover:bg-ink hover:text-white;
}
.CyclePanels {
  @apply mx-auto max-w-7xl px-4 sm:px-6 lg:px-8;
}
.CyclePanel {
  min-height: calc(100svh - var(--header-height));
  @apply grid content-center gap-8 border-t border-ink/12 py-16 lg:grid-cols-[1.15fr_0.85fr] lg:items-center;
}
.CyclePanel:nth-child(even) .CycleImageWrap {
  @apply lg:order-2;
}
.CycleImageWrap {
  @apply overflow-hidden rounded-4xl bg-ink shadow-2xl shadow-ink/15;
}
.CycleImage {
  @apply aspect-16/10 h-full w-full object-cover transition duration-1000 hover:scale-[1.025];
}
.CycleCopy {
  @apply max-w-xl;
}
.CycleIndex {
  @apply text-sm font-black uppercase tracking-[0.22em] text-clay;
}
.CycleCopy h3 {
  @apply mt-4 text-3xl font-black leading-tight text-ink sm:text-5xl;
}
.CycleCopy p {
  @apply mt-6 text-lg leading-8 text-ink/72;
}
.CycleCopy ul {
  @apply mt-8 grid grid-cols-2 gap-3;
}
.CycleCopy li {
  @apply rounded-full border border-ink/12 bg-white/55 px-4 py-3 text-sm font-bold text-ink/75;
}
.CycleAction {
  @apply mt-8 inline-flex rounded-full bg-ink px-6 py-3 font-bold text-white transition duration-500 hover:bg-primary;
}
.CommunitySection {
  @apply bg-mist px-4 sm:px-8 lg:px-16;
  padding-block: var(--section-padding);
}
.CommunityContent {
  @apply max-w-5xl;
}
.CommunityTitle {
  @apply mt-5 text-4xl font-black leading-tight text-ink sm:text-6xl;
}
.CommunityContent p {
  @apply mt-8 max-w-3xl text-xl leading-9 text-ink/70;
}
.SignalGrid {
  @apply mt-14 grid gap-4 md:grid-cols-3;
}
.SignalCard {
  @apply rounded-4xl bg-white/70 p-7;
}
.SignalCard strong {
  @apply block text-2xl font-black text-ink;
}
.SignalCard span {
  @apply mt-4 block leading-7 text-ink/70;
}
.InvitationSection {
  @apply mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8;
  padding-block: var(--section-padding);
}
.InvitationSection h2 {
  @apply mt-5 text-4xl font-black leading-tight text-ink sm:text-6xl;
}
.InvitationSection p {
  @apply mx-auto mt-6 max-w-2xl text-xl leading-9 text-ink/70;
}
.InvitationActions {
  @apply mt-10 flex flex-col justify-center gap-3 sm:flex-row;
}
.SecondaryAction {
  @apply rounded-full border border-ink/20 px-6 py-3 text-center font-bold text-ink transition duration-500 hover:border-ink hover:bg-ink hover:text-white;
}
</style>
