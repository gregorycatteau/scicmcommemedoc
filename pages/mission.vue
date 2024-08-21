<template>
  <div class="main-container">
    <Beforeallmission />
  </div>
</template>

<script setup>
import Beforeallmission from '~/components/accueil/beforeallmission.vue';
</script>

<style scoped>
.main-container {
  @apply flex flex-col items-center justify-center min-h-screen mx-auto gap-y-8;
  animation: fadeIn 1s ease-out;
}

</style>
