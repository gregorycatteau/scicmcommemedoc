<template>
  <section class="WikiLanding">
    <div class="WikiIntro">
      <p>Wiki operationnel</p>
      <h1>Les informations pour agir doivent rester verifiables.</h1>
      <span>Le Livre donne le sens. Le Wiki porte les fiches, sources, corrections et procedures.</span>
    </div>
    <WikiVerificationNotice />
    <div class="WikiGrid">
      <WikiCategoryLink v-for="category in categories" :key="category.slug" :category="category" />
    </div>
  </section>
</template>

<script setup lang="ts">
import type { WikiCategory } from '~/types/book'

defineProps<{
  categories: WikiCategory[]
}>()
</script>

<style scoped>
@reference "~/assets/css/main.css";

.WikiLanding {
  padding-block: var(--section-padding-soft);
  @apply mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:px-8;
}
.WikiIntro {
  @apply max-w-5xl;
}
.WikiIntro p {
  @apply text-sm font-black uppercase tracking-[0.22em] text-orange-800;
}
.WikiIntro h1 {
  @apply mt-5 text-5xl font-black leading-tight sm:text-7xl;
}
.WikiIntro span {
  @apply mt-7 block max-w-3xl text-xl leading-9 text-black/70;
}
.WikiGrid {
  @apply grid gap-4 md:grid-cols-2 lg:grid-cols-3;
}
</style>
