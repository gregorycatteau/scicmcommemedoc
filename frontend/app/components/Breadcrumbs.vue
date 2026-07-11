<template>
  <nav class="Breadcrumbs" aria-label="Fil d'Ariane">
    <ol>
      <li><NuxtLink to="/">Accueil</NuxtLink></li>
      <li v-for="item in items" :key="item.to || item.label" :aria-current="item.to ? undefined : 'page'">
        <NuxtLink v-if="item.to" :to="item.to">{{ item.label }}</NuxtLink>
        <span v-else>{{ item.label }}</span>
      </li>
    </ol>
  </nav>
</template>

<script setup lang="ts">
defineProps<{
  items: Array<{ label: string; to?: string }>
}>()
</script>

<style scoped>
@reference "~/assets/css/main.css";

.Breadcrumbs {
  @apply mx-auto max-w-7xl px-4 pt-4 text-xs text-ink/58 sm:px-6 lg:px-8;
}
.Breadcrumbs ol {
  @apply flex flex-wrap items-center gap-2;
}
.Breadcrumbs li:not(:last-child)::after {
  content: '/';
  @apply ml-2 text-ink/30;
}
.Breadcrumbs a {
  @apply font-semibold underline-offset-4 hover:underline;
}
</style>
