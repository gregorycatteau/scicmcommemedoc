<template>
  <NuxtLink :to="to" class="CtaButton">
    <slot />
  </NuxtLink>
</template>

<script setup lang="ts">
defineProps<{ to: string }>()
</script>

<style scoped>
@reference "~/assets/css/main.css";

.CtaButton {
  @apply rounded-full border border-white bg-primary px-6 py-3 text-center font-bold text-white shadow-sm transition duration-500 hover:bg-primary-dark;
}
</style>
