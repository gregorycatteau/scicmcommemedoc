<template>
  <header class="BookChapterHeader">
    <div>
      <p>{{ chapter.eyebrow }}</p>
      <h1>{{ chapter.title }}</h1>
      <span>{{ chapter.transformation }}</span>
    </div>
    <p class="Subtitle">{{ chapter.subtitle }}</p>
  </header>
</template>

<script setup lang="ts">
import type { BookChapter } from '~/types/book'

defineProps<{
  chapter: BookChapter
}>()
</script>

<style scoped>
@reference "~/assets/css/main.css";

.BookChapterHeader {
  padding-block: var(--section-padding-soft);
  @apply mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[1fr_0.58fr] lg:px-8;
}
.BookChapterHeader p:first-child {
  @apply text-sm font-black uppercase tracking-[0.22em] text-orange-800;
}
.BookChapterHeader h1 {
  @apply mt-5 text-6xl font-black leading-none sm:text-8xl;
}
.BookChapterHeader span {
  @apply mt-8 block max-w-2xl text-2xl font-black leading-tight text-black/72;
}
.Subtitle {
  @apply self-end text-xl leading-9 text-black/68;
}
</style>
