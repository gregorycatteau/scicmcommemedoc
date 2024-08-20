<template>
  <section class="wrapper">
    <healthintrosection />
    <healthobjectives />
    <healthinitiatives />
  </section>
</template>
<script setup lang="ts">
import healthintrosection from '@/components/projects/health/healthintrosection.vue';
import healthobjectives from '@/components/projects/health/healthobjectives.vue';
import healthinitiatives from '@/components/projects/health/healthinitiatives.vue';
</script>
<style scoped>
  .wrapper {
    @apply mt-10 p-4 bg-gray-100;
  }
</style>