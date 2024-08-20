<template>
  <div class="mainwrapper">
    <mcmstory />
  </div>
</template>

<script setup lang="ts">
import mcmstory from "~/components/discovery/mcmstory.vue";
</script>

<style scoped>
.mainwrapper {
  @apply bg-transparent;
}
@media (max-width: 640px) {
  .mainwrapper {
    @apply mt-4 p-2; /* Marges réduites pour les petits écrans */
  }
}
</style>
