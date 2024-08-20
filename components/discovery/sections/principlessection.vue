<template>
  <section class="section">
    <div class="hero-wrapper">
      <!-- Contenu de l'image de fond -->
      <div class="contentplacer">
        <DiscoverySectionsPrinciplesectionessay />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import DiscoverySectionsPrinciplesectionessay from '@/components/discovery/sections/principlesectionessay.vue';

const imagesLoaded = ref(false);

function checkImagesLoaded() {
  const images = document.querySelectorAll('img');
  let loadedCount = 0;
  images.forEach((img) => {
    if (img.complete) {
      loadedCount++;
    } else {
      img.onload = () => {
        loadedCount++;
        if (loadedCount === images.length) {
          imagesLoaded.value = true;
        }
      };
    }
  });
  if (loadedCount === images.length) {
    imagesLoaded.value = true;
  }
}

onMounted(() => {
  checkImagesLoaded();
});
</script>

<style scoped>
/* Styles spécifiques pour cette section */
.section {
  @apply relative h-screen overflow-hidden;
}

.hero-wrapper {
  @apply w-screen bg-no-repeat bg-cover bg-center flex items-center justify-center min-h-screen grid place-content-center relative overflow-hidden shadow-[0_20px_40px_-10px_#000];
  background: radial-gradient(circle at center, #444, #222);
  --bg: url('/Olivier.png') 50% 50% / cover;
  background: var(--bg);
  z-index: 1;
}

.hero-wrapper:before,
.hero-wrapper:after {
  @apply absolute top-0 left-0 w-full h-full transition-opacity ease-in-out duration-200;
  content: "";
  z-index: 1;
}

.hero-wrapper:before {
  background: var(--bg), radial-gradient(closest-side, #222, #fff) 0px 0px / 0.75vmin 0.75vmin;
  background-blend-mode: multiply;
  filter: saturate(0) brightness(1.25) blur(0.5px) contrast(30);
}

.hero-wrapper:after {
  background: linear-gradient(45deg, #2b8c00, #f26612, #ffbf08, #bf87cc, #b0d9ff);
  mix-blend-mode: screen;
}

.hero-wrapper:hover:before,
.hero-wrapper:hover:after {
  @apply opacity-0;
}

.text-wrapper {
  @apply text-center relative z-20;
}

.contentplacer {
  @apply absolute top-1/2 left-1/2 my-10 transform -translate-x-1/2 -translate-y-1/2 p-5 max-w-6xl w-10/12 bg-opacity-80 rounded-lg text-center z-20;
}

.section-title {
  @apply font-serif text-2xl mb-4 text-scicgreen;
}

.developpement {
  @apply text-base leading-relaxed text-scicgreen text-justify indent-2 mb-6;
  font-family: 'Lora', serif;
}

.listing2 {
  @apply list-disc pl-5 list-inside indent-2;
}

.listitem2 {
  @apply mb-2 text-start indent-8 text-balance;
}
</style>
