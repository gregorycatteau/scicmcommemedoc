<template>
  <aside class="LibraryIndex" :class="{ 'is-open': open }" aria-label="Sommaire de la bibliotheque">
    <button class="IndexToggle" type="button" :aria-expanded="open" @click="$emit('toggle')">{{ open ? 'Fermer' : 'Sommaire' }}</button>
    <div class="IndexPanel">
      <p class="IndexTitle">La bibliotheque</p>
      <nav>
        <section v-for="book in books" :key="book.slug" class="IndexBook" :class="{ 'is-active': book.slug === activeBookSlug }">
          <button type="button" @click="$emit('select', { bookSlug: book.slug, chapterSlug: book.chapters[0]?.slug || '' })">
            <span>{{ book.romanNumber }}</span>
            {{ book.title }}
          </button>
          <ol v-if="book.slug === activeBookSlug">
            <li v-for="chapter in book.chapters" :key="chapter.slug">
              <button type="button" :class="{ 'is-current': chapter.slug === activeChapterSlug }" @click="$emit('select', { bookSlug: book.slug, chapterSlug: chapter.slug })">
                {{ chapter.title }}
              </button>
            </li>
          </ol>
          <a v-if="book.externalService" :href="book.externalService.url" target="_blank" rel="noopener noreferrer">
            {{ book.externalService.label }} <span aria-hidden="true">↗</span>
          </a>
        </section>
        <NuxtLink class="FaqLink" to="/faq">FAQ</NuxtLink>
      </nav>
    </div>
  </aside>
</template>

<script setup lang="ts">
import type { LibraryBook, LibraryPageRef } from '~/types/library'

defineProps<{
  books: LibraryBook[]
  activeBookSlug: string
  activeChapterSlug: string
  open: boolean
}>()

defineEmits<{
  toggle: []
  select: [LibraryPageRef]
}>()
</script>

<style scoped>
@reference "~/assets/css/main.css";

.LibraryIndex {
  @apply fixed right-0 top-0 z-50 h-svh w-[min(23rem,calc(100vw-2rem))] translate-x-[calc(100%-3.25rem)] transition duration-500 ease-out lg:translate-x-0;
}
.LibraryIndex.is-open {
  @apply translate-x-0;
}
.IndexToggle {
  writing-mode: vertical-rl;
  @apply absolute left-0 top-5 z-10 rounded-l-2xl border border-black/10 bg-white/90 px-2 py-4 text-xs font-black uppercase tracking-[0.18em] shadow-lg lg:hidden;
}
.LibraryIndex.is-open .IndexToggle {
  writing-mode: horizontal-tb;
  @apply left-3 top-3 rounded-full px-3 py-2;
}
.IndexPanel {
  @apply ml-12 h-full overflow-y-auto border-l border-black/10 bg-[#f7f1e6]/94 px-5 py-7 shadow-2xl shadow-black/10 backdrop-blur lg:ml-0;
}
.IndexTitle {
  @apply text-xs font-black uppercase tracking-[0.24em] text-black/55;
}
.IndexBook {
  @apply mt-6 border-t border-black/10 pt-5;
}
.IndexBook > button {
  @apply flex w-full items-baseline gap-3 text-left text-lg font-black text-black/62 transition hover:text-black;
}
.IndexBook > button span {
  @apply min-w-7 text-xs uppercase tracking-[0.18em] text-orange-800;
}
.IndexBook.is-active > button {
  @apply text-black;
}
.IndexBook ol {
  @apply mt-4 grid gap-2 pl-10;
}
.IndexBook li button {
  @apply text-left text-sm font-bold leading-5 text-black/58 hover:text-black;
}
.IndexBook li button.is-current {
  @apply text-black underline decoration-orange-600 decoration-2 underline-offset-4;
}
.IndexBook a,
.FaqLink {
  @apply mt-4 inline-flex text-sm font-black text-orange-800 underline underline-offset-4;
}
.FaqLink {
  @apply border-t border-black/10 pt-5;
}
@media (prefers-reduced-motion: reduce) {
  .LibraryIndex {
    @apply transition-none;
  }
}
</style>
