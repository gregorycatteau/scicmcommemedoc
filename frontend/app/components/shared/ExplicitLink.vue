<template>
  <NuxtLink class="ExplicitLink" :to="to">
    <span>{{ label }}</span>
    <small v-if="description">{{ description }}</small>
  </NuxtLink>
</template>

<script setup lang="ts">
defineProps<{
  to: string
  label: string
  description?: string
}>()
</script>

<style scoped>
@reference "~/assets/css/main.css";

.ExplicitLink {
  @apply inline-grid gap-1 rounded-full border border-ink/15 px-5 py-3 font-bold text-ink transition duration-500 hover:border-ink hover:bg-ink hover:text-white;
}
.ExplicitLink small {
  @apply max-w-xs text-xs font-semibold leading-5 opacity-70;
}
</style>
