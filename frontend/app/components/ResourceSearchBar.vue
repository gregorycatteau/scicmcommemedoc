<template>
  <label class="SearchBar">
    <span>Rechercher une ressource</span>
    <input :value="modelValue" type="search" placeholder="Produit, service, commune, nom..." @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)" />
  </label>
</template>

<script setup lang="ts">
defineProps<{ modelValue: string }>()
defineEmits<{ 'update:modelValue': [value: string] }>()
</script>

<style scoped>
@reference "~/assets/css/main.css";

.SearchBar {
  @apply grid gap-2;
}
.SearchBar span {
  @apply font-black text-ink;
}
.SearchBar input {
  @apply min-h-14 rounded-2xl border border-ink/10 bg-white px-5 text-lg outline-none focus:border-primary;
}
</style>
