<template>
  <div class="sticky-buttons">
    <div class="flex justify-center space-x-4 my-4 bg-scicgreen bg-opacity-0">
      <button v-for="pole in poles" :key="pole" @click="scrollToPole(pole)" :class="{ 'bg-scicpurple text-scicgreen': selectedPole === pole }" class="bg-scicgreen text-scicblue shadow px-6 py-2 rounded hover:bg-scicorange hover:text-scicblue transition-colors">
        {{ pole }}
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const poles = [
  'famille',
  '(ré)appropriation du savoir',
  'économie locale et circulaire',
  'santé bien être',
  'habitat solidaire'
];
const selectedPole = ref(poles[0]);

function scrollToPole(pole) {
  const target = document.getElementById(pole.replace(/\s+/g, '-').replace(/[()]/g, '').toLowerCase());
  if (target) {
    window.scrollTo({
      top: target.offsetTop,
      behavior: 'smooth'
    });
    selectedPole.value = pole;
  }
}
</script>

<style scoped>
.sticky-buttons {
  @apply flex justify-center items-center w-full bg-scicgreen bg-opacity-40 p-4 mt-16;
}
</style>