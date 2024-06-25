<template>
  <ContentQuery :path="'/blog'" :where="queryFilters" v-slot="{ data: articles }">
    <h2 class="title-count">Nombre d'articles disponibles : {{ articles.length }}</h2>
  </ContentQuery>
</template>

<script setup>
import { computed } from 'vue';
import { useFiltersStore } from '~/stores/filters';

const filtersStore = useFiltersStore();

const queryFilters = computed(() => {
  const filters = filtersStore.filters;
  const where = { published: true };
  if (filters.category.length) where.category = { $in: filters.category };
  if (filters.author.length) where.author = { $in: filters.author };
  if (filters.tags.length) where.tags = { $in: filters.tags };
  return where;
});
</script>

<style scoped>
.title-count {
  @apply text-base font-bold mb-4 text-scicgreen;
}
</style>

