<template>
  <section class="RelatedTools">
    <p>Continuer le chemin</p>
    <div>
      <NuxtLink v-for="tool in tools" :key="tool.to" :to="tool.to">
        <span>{{ tool.label }}</span>
        <strong>{{ tool.title }}</strong>
      </NuxtLink>
    </div>
  </section>
</template>

<script setup lang="ts">
const tools = [
  { to: '/vivre-dans-le-medoc-budget', label: 'Budget', title: 'Estimer le cout de vie' },
  { to: '/manger-local-medoc', label: 'Panier', title: 'Preparer un panier local' },
  { to: '/diagnostic-resilience-foyer', label: 'Foyer', title: 'Evaluer sa resilience' },
  { to: '/creer-projet-citoyen-medoc', label: 'Idee', title: 'Structurer un projet citoyen' },
  { to: '/developper-projet-medoc', label: 'Activite', title: 'Faire avancer une activite utile' },
]
</script>

<style scoped>
@reference "~/assets/css/main.css";

.RelatedTools {
  padding-block: var(--section-padding-soft);
  @apply mx-auto max-w-7xl px-4 sm:px-6 lg:px-8;
}
.RelatedTools > p {
  @apply text-sm font-black uppercase tracking-[0.22em] text-orange-800;
}
.RelatedTools > div {
  @apply mt-6 grid gap-3 md:grid-cols-5;
}
.RelatedTools a {
  @apply rounded-[1.5rem] border border-black/10 bg-white/55 p-4 transition duration-300 hover:-translate-y-1 hover:bg-white;
}
.RelatedTools span {
  @apply text-xs font-black uppercase tracking-[0.18em] text-orange-800;
}
.RelatedTools strong {
  @apply mt-3 block text-lg leading-tight;
}
</style>
