<template>
  <section class="LivingTableOfContents" aria-labelledby="toc-title">
    <div class="TocIntro">
      <p>Sommaire vivant</p>
      <h1 id="toc-title">Lire le Medoc comme une suite de decisions possibles.</h1>
    </div>
    <div class="ChapterRiver">
      <article v-for="chapter in chapters" :key="chapter.slug" class="ChapterLine">
        <div class="ChapterImageWrap">
          <img :src="chapter.image.src" :alt="chapter.image.alt" width="1680" height="1050" loading="lazy" />
        </div>
        <div class="ChapterCopy">
          <span>{{ chapter.eyebrow }}</span>
          <h2>{{ chapter.title }}</h2>
          <p>{{ chapter.summary }}</p>
          <small>{{ chapter.light }} · {{ chapter.matter }}</small>
          <NuxtLink :to="chapter.path">Ouvrir {{ chapter.title }}</NuxtLink>
        </div>
      </article>
    </div>
  </section>
</template>

<script setup lang="ts">
import type { BookChapter } from '~/types/book'

defineProps<{
  chapters: BookChapter[]
}>()
</script>

<style scoped>
@reference "~/assets/css/main.css";

.LivingTableOfContents {
  @apply bg-stone-100;
}
.TocIntro {
  padding-block: var(--section-padding-soft);
  @apply mx-auto max-w-7xl px-4 sm:px-6 lg:px-8;
}
.TocIntro p,
.ChapterCopy span {
  @apply text-sm font-black uppercase tracking-[0.22em] text-orange-800;
}
.TocIntro h1 {
  @apply mt-5 max-w-5xl text-5xl font-black leading-tight sm:text-7xl;
}
.ChapterRiver {
  @apply mx-auto grid max-w-7xl gap-12 px-4 pb-24 sm:px-6 lg:px-8;
}
.ChapterLine {
  @apply grid gap-8 border-t border-black/10 pt-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center;
}
.ChapterLine:nth-child(even) .ChapterImageWrap {
  @apply lg:order-2;
}
.ChapterLine:nth-child(3n) {
  @apply lg:grid-cols-[0.7fr_1.3fr];
}
.ChapterImageWrap img {
  @apply aspect-[16/10] w-full rounded-[1.5rem] object-cover shadow-2xl shadow-black/15;
}
.ChapterCopy {
  @apply max-w-2xl;
}
.ChapterCopy h2 {
  @apply mt-4 text-4xl font-black leading-tight sm:text-6xl;
}
.ChapterCopy p {
  @apply mt-6 text-lg leading-8 text-black/72;
}
.ChapterCopy small {
  @apply mt-6 block text-sm font-bold text-black/50;
}
.ChapterCopy a {
  @apply mt-8 inline-flex rounded-full bg-black px-6 py-3 font-black text-white transition duration-500 hover:bg-orange-600;
}
</style>
