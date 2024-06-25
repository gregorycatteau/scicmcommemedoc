<template>
  <section class="section">
    <figure class="image-container">
      <img src="/Myriam.png" alt="Myriam" />
    </figure>
    <article class="content">
      <h2 class="section-title">C'est quoi une SCIC ?</h2>
      <p class="developpement">
        Une Société Coopérative d'Intérêt Collectif (SCIC) est une forme de coopérative qui permet à différents acteurs:<br />
        <ul class="listing2">
          <li class="listitem2">Salariés,</li>
          <li class="listitem2">Bénéficiaires,</li>
          <li class="listitem2">Utilisateurs,</li>
          <li class="listitem2">Volontaires,</li>
          <li class="listitem2">Collectivités locales,</li>
          <li class="listitem2">Ou toute personne physique ou morale</li>
        </ul>
        De se regrouper autour de <nuxt-link to="/projects" class="links">projets communs</nuxt-link> une finalité d'utilité sociale.
      </p>
      <p class="developpement">
        Caractérisée par sa <NuxtLink to="/gouvernance" class="links">gouvernance démocratique</NuxtLink>, "un associé, une voix", elle favorise une gestion participative où les décisions sont prises collectivement, indépendamment des parts de capital détenues par chacun.
      </p>
    </article>
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
  transform-origin: center top;
  transform: scaleY(calc(1 - var(--scale)));
}

.image-container {
  position: sticky;
  top: 0;
  width: 100vw;
  height: 100vh;
  z-index: -2;
  overflow: hidden;
  transition: opacity 0.25s ease-in-out;
}

.image-container img {
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.content {
  @apply rounded-2xl;
  position: relative;
  margin: -50vh auto 0;
  padding: var(--space);
  max-width: 95ch;
  width: calc(100% - var(--space));
  background: hsla(5, 15%, 5%, 0.9);
  transform-origin: center top;
  transform: scaleY(calc(1 - var(--scale)));
}

.section-title {
  font-family: var(--font-heading);
  font-size: clamp(2.5rem, 6vw,
