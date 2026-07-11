<template>
  <section class="BookCover">
    <img class="CoverImage" src="/images/medoc-hero.webp" alt="Chemin dans les vignes du Medoc au lever du soleil" width="1680" height="960" fetchpriority="high" />
    <div class="CoverVeil"></div>
    <div class="CoverContent">
      <p class="CoverKicker">M Comme Medoc</p>
      <h1>Un territoire a lire. Une suite a ecrire.</h1>
      <p>
        Entre dans le Livre vivant du Medoc : des situations, des gestes possibles, des ressources a verifier, et une maniere de ne pas rester spectateur.
      </p>
      <div class="CoverActions">
        <NuxtLink class="PrimaryAction" to="/livre">Ouvrir le livre</NuxtLink>
        <NuxtLink class="SecondaryAction" to="/wiki">Chercher une information pratique</NuxtLink>
      </div>
      <span class="CoverMeta">Preface, sept chapitres, un epilogue</span>
    </div>
  </section>
</template>

<script setup lang="ts"></script>

<style scoped>
@reference "~/assets/css/main.css";

.BookCover {
  min-height: calc(100svh - var(--header-height));
  @apply relative isolate overflow-hidden bg-black text-white;
}
.CoverImage {
  @apply absolute inset-0 h-full w-full object-cover opacity-75;
}
.CoverVeil {
  background: linear-gradient(90deg, #18130f 0%, rgb(24 19 15 / 0.6) 52%, rgb(24 19 15 / 0.1) 100%);
  @apply absolute inset-0;
}
.CoverContent {
  min-height: calc(100svh - var(--header-height));
  @apply relative z-10 flex max-w-5xl flex-col justify-center px-4 py-20 sm:px-8 lg:ml-16;
}
.CoverKicker,
.CoverMeta {
  @apply text-sm font-black uppercase tracking-[0.24em] text-white/70;
}
.CoverContent h1 {
  @apply mt-6 max-w-4xl text-5xl font-black leading-none sm:text-7xl lg:text-8xl;
}
.CoverContent p {
  @apply mt-8 max-w-2xl text-xl leading-9 text-white/78;
}
.CoverActions {
  @apply mt-10 flex flex-col gap-3 sm:flex-row;
}
.PrimaryAction,
.SecondaryAction {
  @apply rounded-full px-6 py-3 text-center font-black transition duration-500;
}
.PrimaryAction {
  @apply bg-orange-600 text-white hover:bg-orange-700;
}
.SecondaryAction {
  @apply border border-white/35 text-white hover:bg-white;
}
.SecondaryAction:hover {
  color: #18130f;
}
.CoverMeta {
  @apply mt-10 block;
}
</style>
