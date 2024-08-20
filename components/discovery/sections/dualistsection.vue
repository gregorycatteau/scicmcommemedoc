<template>
  <section class="section">
    <div class="hero-wrapper">
      <article class="content">
        <h2 class="section-title">M Comme Médoc est une SCIC SA dualiste</h2>
        <p class="developpement">
          Une SCIC SA dualiste, ou Société Coopérative d'Intérêt Collectif sous forme de Société Anonyme avec structure dualiste, est une forme juridique particulière de coopérative qui se distingue par son mode de gouvernance séparé en deux organes principaux : le conseil de surveillance et le directoire.
        </p>
        <p class="developpement">
          Dans cette structure, le directoire est chargé de la gestion quotidienne de la SCIC. Il est composé de membres nommés par le conseil de surveillance pour un mandat déterminé. Ces membres, souvent des professionnels de la gestion, ont la responsabilité d'implémenter les stratégies et les politiques définies par le conseil de surveillance, tout en assurant le bon fonctionnement opérationnel de la coopérative.
        </p>
      </article>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';

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
  --bg: url('/Marc.png') 50% 50% / cover;
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

.content {
  @apply absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-5 w-10/12 bg-white bg-opacity-80 rounded-lg text-center z-20;
}

.section-title {
  @apply font-serif text-2xl mb-4 text-scicgreen;
}

.developpement {
  @apply text-base leading-relaxed text-black text-justify indent-2 text-balance mb-6;
  font-family: 'Lora', serif;
}
</style>

