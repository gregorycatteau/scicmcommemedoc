<template>
  <MainWrapper>
    <BookLayout>
      <section class="AliasPage">
        <p>Preface</p>
        <h1>Pourquoi je suis ici</h1>
        <p>Cette entree conserve une adresse directe vers le texte fondateur du Livre.</p>
        <NuxtLink to="/livre/preface">Lire la preface</NuxtLink>
      </section>
    </BookLayout>
  </MainWrapper>
</template>

<script setup lang="ts">
usePageSeo(
  'Pourquoi je suis ici - M Comme Medoc',
  'Acces direct a la preface du Livre vivant M Comme Medoc.',
)
</script>

<style scoped>
@reference "~/assets/css/main.css";

.AliasPage {
  min-height: calc(100svh - var(--header-height));
  @apply mx-auto flex max-w-4xl flex-col justify-center px-4 py-20 sm:px-6 lg:px-8;
}
.AliasPage p:first-child {
  @apply text-sm font-black uppercase tracking-[0.22em] text-clay;
}
.AliasPage h1 {
  @apply mt-5 text-5xl font-black leading-tight sm:text-7xl;
}
.AliasPage p:not(:first-child) {
  @apply mt-6 text-xl leading-9 text-ink/70;
}
.AliasPage a {
  @apply mt-8 inline-flex w-fit rounded-full bg-ink px-6 py-3 font-black text-white;
}
</style>
