<template>
  <blockquote class="ChapterQuote">
    <p>{{ quote }}</p>
    <cite v-if="cite">{{ cite }}</cite>
  </blockquote>
</template>

<script setup lang="ts">
defineProps<{
  quote: string
  cite?: string
}>()
</script>

<style scoped>
@reference "~/assets/css/main.css";

.ChapterQuote {
  @apply mx-auto max-w-5xl px-4 py-20 sm:px-6 lg:px-8;
}
.ChapterQuote p {
  @apply text-4xl font-black leading-tight text-ink sm:text-6xl;
}
.ChapterQuote cite {
  @apply mt-6 block text-base not-italic text-ink/60;
}
</style>
