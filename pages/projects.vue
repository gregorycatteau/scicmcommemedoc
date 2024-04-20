<template>
  <div>
    <!-- Hero Section -->
    <section :style="{ backgroundImage: 'url(' + getHeroImage(selectedPole) + ')' }" class="bg-cover bg-center h-64 flex items-center justify-center bg-black bg-opacity-50">
      <h1 class="text-white text-4xl font-bold">{{ getHeroTitle(selectedPole) }}</h1>
    </section>

    <!-- Tabs for Activity Areas -->
    <div class="flex justify-center space-x-4 my-4">
      <button v-for="pole in poles" :key="pole" @click="selectedPole = pole" :class="{ 'bg-gray-800 text-white': selectedPole === pole }" class="bg-white shadow px-6 py-2 rounded hover:bg-gray-200 transition-colors">
        {{ pole }}
      </button>
    </div>

    <!-- Dynamic Component for Content -->
    <component :is="getComponentName(selectedPole)" />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import Family from '@/components/family.vue';
import Knowledge from '@/components/knowledge.vue';
import Economy from '@/components/economy.vue';
import Health from '@/components/health.vue';
import Building from '@/components/building.vue';

const poles = ['famille', '(ré)appropriation du savoir', 'économie locale et circulaire', 'santé bien être', 'habitat solidaire'];
const selectedPole = ref(poles[0]); // Default to first pole

function getHeroImage(pole) {
  const images = {
    'famille': '/Amandine.png',
    '(ré)appropriation du savoir': '/Alexandre.png',
    'économie locale et circulaire': '/Caroline.png',
    'santé bien être': '/David.png',
    'habitat solidaire': '/Eric.png'
  };
  return images[pole];
}

function getHeroTitle(pole) {
  const titles = {
    'famille': 'La famille est un atout',
    '(ré)appropriation du savoir': '(Ré)apprendre pour mieux vivre',
    'économie locale et circulaire': 'Mieux consommer, moins gaspiller',
    'santé bien être': 'Se maintenir en santé',
    'habitat solidaire': 'Repenser l\'habitat'
  };
  return titles[pole];
}

function getComponentName(pole) {
  const components = {
    'famille': Family,
    '(ré)appropriation du savoir': Knowledge,
    'économie locale et circulaire': Economy,
    'santé bien être': Health,
    'habitat solidaire': Building
  };
  return components[pole];
}
</script>

<style scoped>
section {
  min-height: 20rem; /* Ensure a good looking hero section */
}

button {
  min-width: 8rem; /* Ensure buttons have a uniform size */
}

/* Optional: Add responsive design features */
@media (max-width: 640px) {
  .flex {
    flex-direction: column;
    
  }
}
</style>
