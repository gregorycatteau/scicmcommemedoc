<template>
  <aside v-if="lastChapter" class="BookProgress" aria-label="Progression de lecture locale">
    <p>Lecture locale</p>
    <NuxtLink :to="lastChapter.path">Reprendre : {{ lastChapter.title }}</NuxtLink>
    <button type="button" @click="clearProgress">Effacer</button>
  </aside>
</template>

<script setup lang="ts">
import { bookChapterBySlug } from '~/data/book/chapters'

const STORAGE_KEY = 'mcm:last-book-chapter'
const lastSlug = ref('')
const lastChapter = computed(() => bookChapterBySlug.get(lastSlug.value))

onMounted(() => {
  lastSlug.value = window.localStorage.getItem(STORAGE_KEY) || ''
})

function clearProgress() {
  window.localStorage.removeItem(STORAGE_KEY)
  lastSlug.value = ''
}
</script>

<style scoped>
@reference "~/assets/css/main.css";

.BookProgress {
  @apply fixed bottom-4 right-4 z-40 hidden max-w-xs rounded-2xl border border-ink/10 bg-white/90 p-4 text-sm shadow-xl shadow-ink/10 backdrop-blur md:grid;
}
.BookProgress p {
  @apply font-black uppercase tracking-[0.16em] text-clay;
}
.BookProgress a {
  @apply mt-2 font-bold text-ink;
}
.BookProgress button {
  @apply mt-3 w-fit text-xs font-bold text-ink/60 underline;
}
</style>
