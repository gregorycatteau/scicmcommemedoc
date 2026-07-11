<template>
  <section class="LibraryCover" aria-labelledby="library-cover-title">
    <img class="CoverImage" src="/images/medoc-hero.webp" alt="Chemin dans les vignes du Medoc dans une lumiere basse" width="1680" height="960" fetchpriority="high" />
    <div class="CoverLight"></div>
    <div class="CoverFrame">
      <p class="CoverBrand">M Comme Medoc</p>
      <h1 id="library-cover-title">Semer. Cultiver. Recolter.</h1>
      <p class="CoverLine">Une bibliotheque vivante pour habiter, relier et transmettre.</p>
      <div class="CoverGesture">
        <NuxtLink class="OpenButton" to="/bibliotheque">Ouvrir</NuxtLink>
        <NuxtLink class="TocButton" to="/bibliotheque">Sommaire</NuxtLink>
      </div>
      <p class="CoverWhisper">Cinq livres. Un territoire. Des portes reelles pour agir.</p>
    </div>
    <LibraryChatLink />
  </section>
</template>

<script setup lang="ts">
import LibraryChatLink from '~/components/library/LibraryChatLink.vue'
</script>

<style scoped>
@reference "~/assets/css/main.css";

.LibraryCover {
  min-height: 100svh;
  @apply relative isolate overflow-hidden bg-black text-white;
}
.CoverImage {
  @apply absolute inset-0 h-full w-full object-cover;
}
.CoverLight {
  background:
    radial-gradient(circle at 78% 24%, rgb(255 214 150 / 0.22), transparent 30%),
    linear-gradient(90deg, rgb(14 11 8 / 0.96) 0%, rgb(24 19 15 / 0.72) 44%, rgb(24 19 15 / 0.08) 100%);
  @apply absolute inset-0;
}
.CoverFrame {
  min-height: 100svh;
  @apply relative z-10 grid max-w-7xl content-center px-5 py-20 sm:px-10 lg:px-16;
}
.CoverBrand,
.CoverWhisper {
  @apply text-xs font-black uppercase tracking-[0.28em] text-white/68;
}
.CoverFrame h1 {
  max-width: 10ch;
  @apply mt-8 text-6xl font-black leading-[0.88] sm:text-8xl lg:text-[9rem];
}
.CoverLine {
  @apply mt-8 max-w-xl text-xl leading-9 text-white/76;
}
.CoverGesture {
  @apply mt-10 flex items-center gap-3;
}
.OpenButton,
.TocButton {
  @apply rounded-full px-6 py-3 font-black transition duration-500;
}
.OpenButton {
  @apply bg-white text-black hover:bg-orange-600 hover:text-white;
}
.TocButton {
  @apply border border-white/30 text-white hover:bg-white hover:text-black;
}
.CoverWhisper {
  @apply mt-12;
}
@media (prefers-reduced-motion: no-preference) {
  .CoverImage {
    animation: cover-breathe 22s ease-in-out infinite;
  }
}
@keyframes cover-breathe {
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.035);
  }
}
</style>
