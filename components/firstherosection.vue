<template>
  <div class="hero-wrapper">
    <div class="text-wrapper">
      <h1 class="slogan">Semer la résilience,<br />cultiver la solidarité,<br />récolter le respect du vivant</h1>
      <UContainer class="buttoncontainer">
        <button class="action-button" @click="gotomission">Découvrez notre mission</button>
      </UContainer>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';
import { onMounted } from 'vue';

const router = useRouter();

function gotomission() {
  console.log('Button clicked'); // Vérifie que l'événement est déclenché
  router.push('/mission').catch(err => {
    console.error('Navigation error:', err);
  });
}

// Vérifie que le router est bien initialisé
onMounted(() => {
  if (!router) {
    console.error('Router not initialized');
  } else {
    console.log('Router initialized');
  }

  // Ajoute des écouteurs d'événements passifs
  document.addEventListener('touchstart', function () {}, { passive: true });
});
</script>

<style scoped>
.hero-wrapper {
  @apply w-screen bg-no-repeat bg-cover bg-center flex items-center justify-center min-h-screen;
  display: grid;
  place-content: center;
  background: radial-gradient(circle at center, #444, #222);
  position: relative;
  overflow: hidden;
  box-shadow: 0 20px 40px -10px #000;
  --bg: url('/resilience.png') 50% 50% / cover;
  background: var(--bg);
  z-index: 1;
}
.hero-wrapper:before,
.hero-wrapper:after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transition: opacity 0.25s ease-in-out;
  z-index: 1;
}
.hero-wrapper:before {
  filter: saturate(0);
  background: var(--bg),
    radial-gradient(closest-side, #222, #fff) 0px 0px / 0.75vmin 0.75vmin;
  background-blend-mode: multiply;
  filter: saturate(0) brightness(1.25) blur(0.5px) contrast(30);
  z-index: 1;
}
.hero-wrapper:after {
  background: linear-gradient(45deg, #2b8c00, #f26612, #ffbf08, #bf87cc, #b0d9ff);
  mix-blend-mode: screen;
  z-index: 1;
}
.hero-wrapper:hover:before,
.hero-wrapper:hover:after {
  opacity: 0;
  z-index: 1;
}
.text-wrapper {
  @apply text-center;
  position: relative;
  z-index: 2; /* Assurez-vous que le texte est au-dessus des animations de fond */
}
.slogan {
  @apply text-3xl font-bold p-4 bg-opacity-70 bg-scicgreen text-white rounded-md mt-10;
  font-family: "Playfair Display", serif;
}
.buttoncontainer {
  @apply mt-4;
  position: relative;
  z-index: 2; /* Assurez-vous que le conteneur du bouton est au-dessus des animations de fond */
}
.action-button {
  @apply bg-scicorange text-white font-bold py-3 px-5 rounded hover:ring-2 hover:text-scicorange hover:ring-scicorange hover:bg-transparent transition-colors;
  font-family: "Montserrat", sans-serif;
  position: relative;
  z-index: 2; /* Assurez-vous que le bouton est au-dessus des animations de fond */
}
@media (max-width: 640px) {
  .hero-wrapper {
    @apply rounded-none min-h-0 py-12;
  }
}
</style>
