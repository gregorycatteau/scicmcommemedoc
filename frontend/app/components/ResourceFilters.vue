<template>
  <section class="Filters" aria-label="Filtres des ressources">
    <label>
      <span>Type</span>
      <select :value="filters.resourceType" @change="update('resourceType', ($event.target as HTMLSelectElement).value)">
        <option value="">Tous</option>
        <option v-for="item in facets.resourceTypes" :key="item" :value="item">{{ item }}</option>
      </select>
    </label>
    <label>
      <span>Categorie</span>
      <select :value="filters.category" @change="update('category', ($event.target as HTMLSelectElement).value)">
        <option value="">Toutes</option>
        <option v-for="item in facets.categories" :key="item" :value="item">{{ item }}</option>
      </select>
    </label>
    <label>
      <span>Produit</span>
      <select :value="filters.product" @change="update('product', ($event.target as HTMLSelectElement).value)">
        <option value="">Tous</option>
        <option v-for="item in facets.products" :key="item" :value="item">{{ item }}</option>
      </select>
    </label>
    <label>
      <span>Commune / zone</span>
      <select :value="filters.locality" @change="update('locality', ($event.target as HTMLSelectElement).value)">
        <option value="">Toutes</option>
        <option v-for="item in facets.localities" :key="item" :value="item">{{ item }}</option>
      </select>
    </label>
    <label>
      <span>Distribution</span>
      <select :value="filters.distributionMode" @change="update('distributionMode', ($event.target as HTMLSelectElement).value)">
        <option value="">Toutes</option>
        <option v-for="item in facets.distributionModes" :key="item" :value="item">{{ item }}</option>
      </select>
    </label>
    <label class="CheckboxLabel">
      <input :checked="filters.recentlyVerified" type="checkbox" @change="update('recentlyVerified', ($event.target as HTMLInputElement).checked)" />
      <span>Verifie recemment</span>
    </label>
    <button type="button" @click="$emit('reset')">Reinitialiser</button>
  </section>
</template>

<script setup lang="ts">
import type { ResourceFilters } from '~/types/resources'

defineProps<{
  filters: ResourceFilters
  facets: ReturnType<typeof import('~/utils/resources').buildResourceFacets>
}>()

const emit = defineEmits<{
  update: [filters: Partial<ResourceFilters>]
  reset: []
}>()

function update(key: keyof ResourceFilters, value: string | boolean) {
  emit('update', { [key]: value })
}
</script>

<style scoped>
@reference "~/assets/css/main.css";

.Filters {
  @apply grid gap-4 rounded-[2rem] border border-black/10 bg-white/60 p-5 md:grid-cols-3;
}
.Filters label {
  @apply grid gap-2;
}
.Filters span {
  @apply text-sm font-black text-black;
}
.Filters select,
.Filters button {
  @apply min-h-11 rounded-xl border border-black/10 bg-white px-3 font-semibold text-black;
}
.CheckboxLabel {
  @apply flex items-center gap-3 self-end;
}
.CheckboxLabel input {
  @apply h-5 w-5;
}
.Filters button {
  @apply self-end bg-black text-white;
}
</style>
