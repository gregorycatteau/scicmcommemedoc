<template>
  <div class="hero-wrapper">
    <div class="text-wrapper">
      <h1 class="slogan">Semer la résilience, <br/>cultiver la solidarité, <br/>récolter le respect du vivant</h1>
      <UContainer class="buttoncontainer">
        <UButton size="xl" class="action-button" @click="gotomission">Découvrez notre mission</UButton>
      </UContainer>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';
const router = useRouter();
function gotomission() {
  router.push('/mission');
}
</script>

<style scoped>
.hero-wrapper {
  @apply w-full bg-no-repeat bg-cover bg-center flex items-center justify-center min-h-screen rounded-2xl;
  background-image: url('/resilience.png');
  animation: fadeIn 1s ease-out;
}
.text-wrapper {
  @apply text-center;
  animation: fadeIn 2s ease-out; /* Delay de 1s pour commencer après l'animation de l'image de fond */
}
.slogan {
  @apply text-5xl font-bold p-6 bg-opacity-50 bg-scicgreen text-scicorange rounded-md; /* Taille de texte réduite pour mobile */
  font-family: "Playfair Display", serif;
}
.buttoncontainer {
  @apply mt-4; /* Espacement réduit pour mobile */
}
.action-button {
  @apply bg-scicorange text-white font-bold py-3 px-5 rounded hover:bg-scicyellow transition-colors;
  font-family: "Montserrat", sans-serif;
}
@media (max-width: 640px) {
  .hero-wrapper {
    @apply rounded-none min-h-0 py-12;
  }
  .slogan {
    @apply text-3xl p-4; /* Texte encore plus petit pour les très petits écrans */
  }
}
</style>
