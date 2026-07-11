<template>
  <NuxtLink class="WikiCategoryLink" :to="category.to">
    <span>{{ statusLabel }}</span>
    <h2>{{ category.title }}</h2>
    <p>{{ category.description }}</p>
  </NuxtLink>
</template>

<script setup lang="ts">
import type { WikiCategory } from '~/types/book'

const props = defineProps<{
  category: WikiCategory
}>()

const statusLabel = computed(() => {
  if (props.category.status === 'available') return 'Disponible'
  if (props.category.status === 'demo') return 'Demonstration'
  return 'A structurer'
})
</script>

<style scoped>
@reference "~/assets/css/main.css";

.WikiCategoryLink {
  @apply grid min-h-56 content-start rounded-[1.5rem] border border-ink/10 bg-white/65 p-6 transition duration-500 hover:-translate-y-1 hover:bg-white hover:shadow-xl hover:shadow-ink/10;
}
.WikiCategoryLink span {
  @apply text-xs font-black uppercase tracking-[0.18em] text-clay;
}
.WikiCategoryLink h2 {
  @apply mt-5 text-2xl font-black leading-tight;
}
.WikiCategoryLink p {
  @apply mt-4 leading-7 text-ink/68;
}
@media (prefers-reduced-motion: reduce) {
  .WikiCategoryLink {
    @apply hover:translate-y-0;
  }
}
</style>
