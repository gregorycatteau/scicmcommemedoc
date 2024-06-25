<template>
  <section class="wrapper">
    <buildingintrosection />
    <buildingobjectives />
    <buildinginitiatives />
  </section>
</template>
<script setup lang="ts">
import buildingintrosection from '@/components/projects/building/buildingintrosection.vue';
import buildingobjectives from '@/components/projects/building/buildingobjectives.vue';
import buildinginitiatives from '@/components/projects/building/buildinginitiatives.vue';
</script>
<style scoped>
  .wrapper {
    @apply mt-10 p-4 bg-gray-100;
  }
</style>