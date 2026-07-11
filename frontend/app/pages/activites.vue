<template>
  <MainWrapper>
    <PageHero
      kicker="Les projets"
      title="Les moyens changent. L'intention reste la meme : rendre le territoire plus autonome."
      subtitle="Le terrain, les ateliers, la formation, le reemploi, les producteurs et les consommacteurs sont les outils d'une meme aventure."
      tone="light"
    />

    <section class="ProjectStory">
      <article v-for="project in projects" :key="project.title" class="ProjectPanel">
        <img class="ProjectImage" :src="project.image" :alt="project.alt" width="1680" height="1050" loading="lazy" />
        <div class="ProjectCopy">
          <p class="ProjectStage">{{ project.stage }}</p>
          <h2>{{ project.title }}</h2>
          <p>{{ project.text }}</p>
          <NuxtLink class="ProjectLink" :to="project.href">Je participe</NuxtLink>
        </div>
      </article>
    </section>
  </MainWrapper>
</template>

<script setup lang="ts">
const projects = [
  {
    stage: 'Semer',
    title: 'Des rencontres pour faire emerger les bonnes questions.',
    text: 'Avant de lancer un projet, on prend le temps de comprendre ce qui manque vraiment et qui veut y contribuer.',
    image: '/images/semer.webp',
    alt: 'Une carte locale et des carnets sur une table',
    href: '/evenements',
  },
  {
    stage: 'Cultiver',
    title: 'Des ateliers pour transmettre et refaire ensemble.',
    text: 'Reemploi, artisanat, formation, entraide pratique : les competences deviennent un bien commun.',
    image: '/images/cultiver.webp',
    alt: 'Un atelier ou plusieurs personnes apprennent ensemble',
    href: '/devenir-membre',
  },
  {
    stage: 'Recolter',
    title: 'Des circuits et des liens qui restent ici.',
    text: 'Produits locaux, economies partagees, confiance retrouvee : chaque action doit renforcer la vie du territoire.',
    image: '/images/recolter.webp',
    alt: 'Une table commune avec des produits locaux',
    href: '/devenir-membre',
  },
]

usePageSeo(
  'Projets locaux',
  'Les projets M Comme Medoc : ateliers, producteurs, reemploi, formation et cooperation locale.',
)
</script>

<style scoped>
@reference "~/assets/css/main.css";

.ProjectStory {
  padding-block: var(--section-padding-soft) var(--section-padding);
  @apply mx-auto max-w-7xl px-4 sm:px-6 lg:px-8;
}
.ProjectPanel {
  border-top: 1px solid rgb(24 19 15 / 0.12);
  @apply grid gap-8 py-14 lg:grid-cols-[1.1fr_0.9fr] lg:items-center;
}
.ProjectPanel:nth-child(even) .ProjectImage {
  @apply lg:order-2;
}
.ProjectImage {
  @apply aspect-[16/10] w-full rounded-[2rem] object-cover shadow-2xl shadow-black/15;
}
.ProjectCopy {
  @apply max-w-xl;
}
.ProjectStage {
  @apply text-sm font-black uppercase tracking-[0.22em] text-orange-800;
}
.ProjectCopy h2 {
  @apply mt-4 text-3xl font-black leading-tight text-black sm:text-5xl;
}
.ProjectCopy p:last-of-type {
  @apply mt-6 text-lg leading-8 text-black/70;
}
.ProjectLink {
  @apply mt-8 inline-flex rounded-full bg-orange-600 px-6 py-3 font-bold text-white transition duration-500 hover:bg-orange-700;
}
</style>
