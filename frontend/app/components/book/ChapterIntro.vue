<template>
  <section class="ChapterIntro">
    <p>{{ question }}</p>
    <slot />
  </section>
</template>

<script setup lang="ts">
defineProps<{
  question: string
}>()
</script>

<style scoped>
@reference "~/assets/css/main.css";

.ChapterIntro {
  @apply mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8;
}
.ChapterIntro > p {
  @apply text-3xl font-black leading-tight text-ink sm:text-5xl;
}
.ChapterIntro :deep(p:not(:first-child)) {
  @apply mt-8 text-xl leading-9 text-ink/70;
}
</style>
