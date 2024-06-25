<template>
  <div class="navigation-container">
    <Primarynavbar />
    <Secondnavbar />
  </div>
</template>
<script setup>
import Primarynavbar from '~/components/projects/navigation/primarynavbar.vue';
import Secondnavbar from '~/components/projects/navigation/secondnavbar.vue';
</script>
<style scoped>
.navigation-container {
  @apply fixed top-0 left-0 right-0 z-50 transition-transform duration-300 ease-in-out;
}
</style>