<template>
  <section class="LibraryReader" aria-label="Lecture de la bibliotheque" @keydown.left.prevent="goPrevious" @keydown.right.prevent="goNext">
    <div class="ReaderStage">
      <div class="PageStack" aria-live="polite">
        <article v-if="nextChapter" class="ReaderPage NextPreview" aria-hidden="true">
          <h2>{{ nextChapter.title }}</h2>
        </article>
        <article :key="activeBook.slug + activeChapter.slug" class="ReaderPage ActivePage" :class="`template-${activeChapter.pageTemplate}`" tabindex="0">
          <div class="PageNumber">{{ activeBook.romanNumber }} / {{ activeBook.shortTitle }}</div>
          <div class="PageBody">
            <div class="PageCopy">
              <p class="PageSubject">{{ activeChapter.subject || activeBook.description }}</p>
              <h1>{{ activeChapter.title }}</h1>
              <p class="PageExcerpt">{{ activeChapter.excerpt }}</p>
              <div class="PageText">
                <p v-for="paragraph in activeChapter.body" :key="paragraph">{{ paragraph }}</p>
              </div>
              <p v-if="activeChapter.note" class="MarginalNote">{{ activeChapter.note }}</p>
            </div>
            <figure v-if="activeChapter.image" class="PageImage">
              <img :src="activeChapter.image.src" :alt="activeChapter.image.alt" width="1280" height="900" loading="lazy" />
              <figcaption v-if="activeChapter.image.caption">{{ activeChapter.image.caption }}</figcaption>
            </figure>
          </div>
          <div v-if="activeChapter.externalLinks?.length" class="ExternalPassages">
            <a v-for="link in activeChapter.externalLinks" :key="link.url" :href="link.url" target="_blank" rel="noopener noreferrer">
              <span>{{ link.label }} ↗</span>
              <small>{{ link.description }}</small>
            </a>
          </div>
        </article>
      </div>
      <nav class="ReaderControls" aria-label="Navigation des pages">
        <button type="button" :disabled="!previousRef" @click="goPrevious">Page precedente</button>
        <span>{{ currentIndex + 1 }} / {{ flattenedPages.length }}</span>
        <button type="button" :disabled="!nextRef" @click="goNext">Page suivante</button>
      </nav>
    </div>
    <LibraryIndex :books="books" :active-book-slug="activeBook.slug" :active-chapter-slug="activeChapter.slug" :open="indexOpen" @toggle="indexOpen = !indexOpen" @select="selectPage" />
    <LibraryChatLink />
  </section>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import LibraryChatLink from '~/components/library/LibraryChatLink.vue'
import LibraryIndex from '~/components/library/LibraryIndex.vue'
import { defaultLibraryPage, libraryBooks } from '~/data/library/books'
import type { LibraryBook, LibraryChapter, LibraryPageRef } from '~/types/library'

const books = libraryBooks
const activeRef = ref<LibraryPageRef>({ ...defaultLibraryPage })
const indexOpen = ref(false)

const flattenedPages = computed(() =>
  books.flatMap((book) => book.chapters.map((chapter) => ({ bookSlug: book.slug, chapterSlug: chapter.slug }))),
)

const currentIndex = computed(() =>
  flattenedPages.value.findIndex((page) => page.bookSlug === activeRef.value.bookSlug && page.chapterSlug === activeRef.value.chapterSlug),
)

const activeBook = computed<LibraryBook>(() => books.find((book) => book.slug === activeRef.value.bookSlug) || books[0]!)
const activeChapter = computed<LibraryChapter>(() => activeBook.value.chapters.find((chapter) => chapter.slug === activeRef.value.chapterSlug) || activeBook.value.chapters[0]!)
const previousRef = computed(() => (currentIndex.value > 0 ? flattenedPages.value[currentIndex.value - 1] : undefined))
const nextRef = computed(() => (currentIndex.value >= 0 && currentIndex.value < flattenedPages.value.length - 1 ? flattenedPages.value[currentIndex.value + 1] : undefined))
const nextBook = computed(() => books.find((book) => book.slug === nextRef.value?.bookSlug))
const nextChapter = computed(() => nextBook.value?.chapters.find((chapter) => chapter.slug === nextRef.value?.chapterSlug))

function selectPage(page: LibraryPageRef) {
  if (!page.chapterSlug) return
  activeRef.value = page
  indexOpen.value = false
}

function goPrevious() {
  if (previousRef.value) activeRef.value = previousRef.value
}

function goNext() {
  if (nextRef.value) activeRef.value = nextRef.value
}
</script>

<style scoped>
@reference "~/assets/css/main.css";

.LibraryReader {
  min-height: 100svh;
  background:
    radial-gradient(circle at 18% 12%, rgb(255 255 255 / 0.7), transparent 28%),
    linear-gradient(135deg, #ebe1d0 0%, #f7f1e6 42%, #ded0bb 100%);
  @apply relative overflow-hidden px-4 py-5 text-black sm:px-6 lg:pr-[24rem];
}
.ReaderStage {
  @apply mx-auto flex min-h-[calc(100svh-2.5rem)] max-w-6xl flex-col justify-center gap-4;
}
.PageStack {
  min-height: min(860px, calc(100svh - 7rem));
  perspective: 1600px;
  @apply relative;
}
.ReaderPage {
  @apply absolute inset-0 overflow-hidden rounded-[1.7rem] border border-black/10 bg-[#fffaf0] shadow-2xl shadow-black/18;
}
.NextPreview {
  transform: translate(1.2rem, 1rem) scale(0.985);
  @apply grid place-items-center bg-[#eee4d4] text-black/28;
}
.NextPreview h2 {
  @apply max-w-md text-center text-5xl font-black;
}
.ActivePage {
  transform-origin: right center;
  @apply overflow-y-auto p-5 sm:p-8 lg:p-10;
}
.PageNumber,
.PageSubject {
  @apply text-xs font-black uppercase tracking-[0.22em] text-orange-800;
}
.PageBody {
  @apply mt-7 grid h-[calc(100%-5rem)] gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center;
}
.PageCopy h1 {
  @apply mt-5 text-5xl font-black leading-[0.92] sm:text-6xl xl:text-7xl;
}
.PageExcerpt {
  @apply mt-6 max-w-2xl text-2xl font-bold leading-9 text-black/72;
}
.PageText {
  @apply mt-7 grid max-w-2xl gap-4 text-lg leading-8 text-black/68;
}
.MarginalNote {
  @apply mt-7 max-w-xl border-l-4 border-orange-600 pl-5 text-sm font-bold leading-6 text-black/58;
}
.PageImage {
  @apply self-stretch;
}
.PageImage img {
  @apply h-full max-h-[34rem] w-full rounded-[1.25rem] object-cover;
}
.PageImage figcaption {
  @apply mt-3 text-sm font-semibold leading-6 text-black/55;
}
.template-opening .PageBody {
  @apply lg:grid-cols-[1.15fr_0.85fr];
}
.template-cycle .PageCopy h1 {
  @apply max-w-3xl;
}
.ExternalPassages {
  @apply absolute bottom-5 left-5 right-5 flex flex-wrap gap-3 sm:bottom-8 sm:left-8 sm:right-8;
}
.ExternalPassages a {
  @apply grid max-w-xs gap-1 rounded-2xl border border-black/10 bg-white/78 px-4 py-3 font-black text-black backdrop-blur transition hover:bg-black hover:text-white;
}
.ExternalPassages small {
  @apply text-xs font-semibold leading-5 opacity-70;
}
.ReaderControls {
  @apply flex items-center justify-between gap-3 rounded-full border border-black/10 bg-white/70 px-3 py-2 text-sm font-black shadow-lg shadow-black/5 backdrop-blur sm:w-fit sm:self-center;
}
.ReaderControls button {
  @apply rounded-full px-4 py-2 transition hover:bg-black hover:text-white disabled:cursor-not-allowed disabled:opacity-35 disabled:hover:bg-transparent disabled:hover:text-black;
}
.ReaderControls span {
  @apply text-black/45;
}
@media (prefers-reduced-motion: no-preference) {
  .ActivePage {
    animation: page-cover 480ms cubic-bezier(0.22, 1, 0.36, 1) both;
  }
}
@keyframes page-cover {
  from {
    opacity: 0.82;
    transform: translateX(2rem) rotateY(-4deg);
  }
  to {
    opacity: 1;
    transform: translateX(0) rotateY(0);
  }
}
@media (max-width: 767px) {
  .LibraryReader {
    @apply px-3 pb-20;
  }
  .PageStack {
    min-height: calc(100svh - 9rem);
  }
  .ReaderPage {
    @apply rounded-[1.1rem];
  }
  .ActivePage {
    @apply overflow-y-auto p-5;
  }
  .PageBody {
    @apply mt-5 block h-auto;
  }
  .PageCopy h1 {
    @apply text-4xl;
  }
  .PageExcerpt {
    @apply text-xl leading-8;
  }
  .PageText {
    @apply text-base leading-7;
  }
  .PageImage {
    @apply mt-6;
  }
  .PageImage img {
    @apply max-h-72;
  }
  .ExternalPassages {
    @apply static mt-6;
  }
}
@media (prefers-reduced-motion: reduce) {
  .ActivePage,
  .LibraryReader * {
    animation: none !important;
    transition: none !important;
  }
}
</style>
