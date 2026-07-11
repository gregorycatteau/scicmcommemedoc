<template>
  <footer class="ChapterEnding">
    <div>
      <p class="EndingKicker">Micro-victoire</p>
      <h2>{{ transformation }}</h2>
      <p>{{ closing }}</p>
    </div>
    <nav class="EndingNav" aria-label="Navigation entre chapitres">
      <NuxtLink v-if="previous" class="BackLink" :to="previous.path">Revenir : {{ previous.title }}</NuxtLink>
      <NuxtLink v-if="next" class="NextLink" :to="next.path">
        <span>Chapitre suivant</span>
        {{ next.title }}
      </NuxtLink>
      <NuxtLink v-else class="NextLink" to="/wiki">
        <span>Continuer</span>
        Chercher une information pratique
      </NuxtLink>
    </nav>
    <BookWikiBridge :links="wikiLinks" />
  </footer>
</template>

<script setup lang="ts">
import type { BookChapter, WikiLink } from '~/types/book'

defineProps<{
  transformation: string
  closing: string
  previous?: BookChapter
  next?: BookChapter
  wikiLinks: WikiLink[]
}>()
</script>

<style scoped>
@reference "~/assets/css/main.css";

.ChapterEnding {
  padding-block: var(--section-padding-soft);
  @apply mx-auto max-w-7xl px-4 sm:px-6 lg:px-8;
}
.ChapterEnding > div:first-child {
  @apply max-w-4xl;
}
.EndingKicker {
  @apply text-sm font-black uppercase tracking-[0.22em] text-orange-800;
}
.ChapterEnding h2 {
  @apply mt-4 text-4xl font-black leading-tight sm:text-6xl;
}
.ChapterEnding p:not(.EndingKicker) {
  @apply mt-6 text-xl leading-9 text-black/70;
}
.EndingNav {
  @apply mt-10 flex flex-col gap-3 sm:flex-row sm:items-stretch;
}
.BackLink,
.NextLink {
  border: 1px solid rgb(24 19 15 / 0.12);
  @apply rounded-[1.25rem] px-6 py-4 font-black transition duration-500 hover:text-white;
}
.BackLink:hover,
.NextLink:hover {
  background: #18130f;
}
.NextLink {
  background: #18130f;
  @apply text-white;
}
.NextLink:hover {
  background: #ff6b35;
}
.NextLink span {
  @apply block text-xs uppercase tracking-[0.16em] opacity-65;
}
</style>
