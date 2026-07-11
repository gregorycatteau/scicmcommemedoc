<template>
  <MainWrapper>
    <section class="WikiGate" aria-labelledby="wiki-gate-title">
      <div>
        <p>Service operationnel</p>
        <h1 id="wiki-gate-title">Le Wiki vit hors du site editorial.</h1>
        <span>Le site raconte et oriente. Le Wiki porte les fiches, sources, procedures et informations mises a jour.</span>
      </div>
      <div class="WikiGatePanel">
        <p>Les producteurs, horaires, documents de verification et corrections ne sont pas recopies ici. Cette porte envoie vers le service qui doit rester la source operationnelle.</p>
        <a href="https://wiki.mcommemedoc.fr" target="_blank" rel="noopener noreferrer">Ouvrir le Wiki M Comme Medoc ↗</a>
        <NuxtLink to="/bibliotheque">Retourner a la bibliotheque</NuxtLink>
      </div>
    </section>
  </MainWrapper>
</template>

<script setup lang="ts">
usePageSeo(
  'Wiki M Comme Medoc - Service operationnel',
  'Acceder au Wiki operationnel M Comme Medoc pour les fiches, sources, procedures et informations verifiables.',
)
</script>

<style scoped>
@reference "~/assets/css/main.css";

.WikiGate {
  min-height: 100svh;
  background:
    radial-gradient(circle at 80% 18%, rgb(255 107 53 / 0.14), transparent 24%),
    linear-gradient(135deg, #f7f1e6 0%, #e8dac4 100%);
  @apply grid content-center gap-10 px-5 py-20 sm:px-8 lg:grid-cols-[1fr_0.8fr] lg:px-16;
}
.WikiGate > div:first-child p {
  @apply text-sm font-black uppercase tracking-[0.22em] text-orange-800;
}
.WikiGate h1 {
  @apply mt-5 max-w-4xl text-5xl font-black leading-[0.95] sm:text-7xl;
}
.WikiGate span {
  @apply mt-7 block max-w-2xl text-xl leading-9 text-black/68;
}
.WikiGatePanel {
  @apply self-center rounded-[1.5rem] border border-black/10 bg-white/70 p-6 shadow-xl shadow-black/10 backdrop-blur sm:p-8;
}
.WikiGatePanel p {
  @apply text-lg leading-8 text-black/68;
}
.WikiGatePanel a,
.WikiGatePanel :deep(a) {
  @apply mt-6 flex w-fit rounded-full bg-black px-5 py-3 font-black text-white transition hover:bg-orange-600;
}
.WikiGatePanel :deep(a:last-child) {
  @apply bg-transparent text-black underline underline-offset-4 hover:bg-transparent hover:text-orange-800;
}
</style>
