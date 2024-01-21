

<template>
  <div class="part-one-container">
    <div class="text-container">
      <h1 class="title">Éducation et Précarité : Une Réalité Alarmante</h1>
      <h2 class="subtitle">L'Impact de la Paupérisation sur le Parcours Éducatif</h2>
      <p class="description">
        L'analyse révèle des inégalités éducatives frappantes, avec des écoles dans le nord-nord-est du Médoc affichant un Indice de Position Sociale (IPS) préoccupant. 
      </p>
      <p class="description">La fragilisation économique et sociale affecte particulièrement les jeunes, avec 444 individus identifiés comme étant à risque de décrochage scolaire et 755 enfants de moins de 10 ans en situation de vulnérabilité.</p>
    </div>
    <div class="image-container">
      <img src="/constat_1/decrochage.png" alt="Décrochage scolaire" class="medoc-image">
    </div>
  </div>
</template>

<script>
export default {
  name: 'PartTwo',
  mounted() {
    this.animateElements();
  },
  methods: {
    animateElements() {
      // Anime.js animations
      this.$anime({
        targets: '.title',
        opacity: [0, 1],
        duration: 1000,
        easing: 'easeOutQuad',
      });
      this.$anime({
        targets: '.subtitle',
        opacity: [0, 1],
        duration: 1000,
        delay: 1000,
        easing: 'easeOutQuad',
      });
      this.$anime({
        targets: '.description',
        opacity: [0, 1],
        duration: 1000,
        delay: 2000,
        easing: 'easeOutQuad',
      });
      this.$anime({
        targets: '.medoc-image',
        opacity: [0, 1],
        translateX: [50, 0],
        duration: 1000,
        delay: 3000,
        easing: 'easeOutQuad',
      });
    }
  }
}
</script>

<style scoped>
.part-one-container {
  @apply flex justify-between items-center text-left;
}

.text-container {
  @apply flex-1 pr-5; /* Donne plus d'espace au texte et ajoute un padding à droite */
}

.title {
  @apply text-3xl text-gray-700 mb-4; /* Taille de police, couleur et marge pour le titre */
  opacity: 0; /* Défini initialement à invisible pour l'animation */
}

.subtitle {
  @apply text-2xl text-gray-600 mb-6; /* Taille de police, couleur et marge pour le sous-titre */
  opacity: 0; /* Défini initialement à invisible pour l'animation */
}

.description {
  @apply text-lg text-gray-800 mb-8; /* Taille de police, couleur et marge pour la description */
  opacity: 0; /* Défini initialement à invisible pour l'animation */
}

.image-container {
  @apply flex-1 pl-5; /* Espace à gauche de l'image */
}

.medoc-image {
  @apply h-auto rounded-lg shadow-md; /* Taille maximale, hauteur automatique, arrondi et ombre pour l'image */
  opacity: 0; /* Défini initialement à invisible pour l'animation */
}
</style>