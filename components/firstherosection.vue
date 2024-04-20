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
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

.hero-wrapper {
  @apply bg-no-repeat bg-cover bg-center flex items-center justify-center h-screen rounded-2xl;
  background-image: url('/resilience.png');
  animation: fadeIn 1s ease-out;
}

.text-wrapper {
  @apply text-center;
  animation: fadeIn 2s ease-out; /* Delay de 1s pour commencer après l'animation de l'image de fond */
}

.slogan {
  @apply text-scicyellow text-7xl font-bold p-10 bg-opacity-50 bg-scicgreen rounded-md;
  font-family: Playfair Display;
  animation: fadeIn 3s ease-out; /* Delay de 2s pour commencer après l'animation du texte wrapper */
}

.buttoncontainer {
  @apply mt-8;
  animation: fadeIn 4s ease-out; /* Delay de 3s pour commencer après l'animation du slogan */
}

.action-button {
  @apply bg-scicorange text-white font-bold py-2 px-6 rounded hover:bg-scicyellow transition-colors;
  font-family: Montserrat;
}
</style>

