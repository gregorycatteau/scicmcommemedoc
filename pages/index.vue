<template>
  <div class="wrapper">
    <Firstherosection />
    <Introductionsection />
    <Process />
  </div>
</template>

<script setup>
import Firstherosection from '~/components/firstherosection.vue';
import Introductionsection from '~/components/introductionsection.vue';
import Process from '~/components/process.vue';
</script>

<style scoped>
.wrapper {
  @apply flex flex-col items-center justify-center min-h-screen mx-auto gap-y-8;
  animation: fadeIn 1s ease-out;
}
@media (max-width: 640px) {
  .wrapper {
    @apply gap-y-4 px-4;
  }
}
</style>

