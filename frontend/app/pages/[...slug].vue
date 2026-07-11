<template>
  <MainWrapper>
    <section class="NotFoundSection">
      <p class="NotFoundKicker">Chemin introuvable</p>
      <h1>Cette page n'existe pas encore.</h1>
      <p>
        Le site avance par etapes. Tu peux revenir au recit principal, voir les projets ou trouver une prochaine rencontre.
      </p>
      <div class="NotFoundActions">
        <NuxtLink class="PrimaryLink" to="/">Retour a l'accueil</NuxtLink>
        <NuxtLink class="SecondaryLink" to="/evenements">Voir les rencontres</NuxtLink>
      </div>
    </section>
  </MainWrapper>
</template>

<script setup lang="ts">
setResponseStatus(404)

usePageSeo(
  'Page introuvable',
  "Cette page n'existe pas encore. Retourne vers le recit principal de M Comme Medoc.",
)
</script>

<style scoped>
@reference "~/assets/css/main.css";

.NotFoundSection {
  min-height: calc(100svh - var(--header-height));
  padding-block: var(--section-padding-soft);
  @apply mx-auto flex max-w-4xl flex-col justify-center px-4 sm:px-6 lg:px-8;
}
.NotFoundKicker {
  @apply text-sm font-black uppercase tracking-[0.22em] text-orange-800;
}
.NotFoundSection h1 {
  @apply mt-5 text-5xl font-black leading-tight sm:text-7xl;
}
.NotFoundSection p {
  @apply mt-6 max-w-2xl text-xl leading-9 text-black/70;
}
.NotFoundActions {
  @apply mt-10 flex flex-col gap-3 sm:flex-row;
}
.PrimaryLink {
  @apply rounded-full bg-orange-600 px-6 py-3 text-center font-bold text-white transition duration-500 hover:bg-orange-700;
}
.SecondaryLink {
  @apply rounded-full border border-black/20 px-6 py-3 text-center font-bold text-black transition duration-500 hover:border-black hover:bg-black hover:text-white;
}
</style>
