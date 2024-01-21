<template>
  <div class="part-one-container">
    <div class="text-container">
      <h1 class="title">Initiatives Locales et Résilience</h1>
      <h2 class="subtitle">Mobilisation Communautaire et Ressources pour les Jeunes</h2>
      <p class="description">
        En réponse aux défis rencontrés, le Médoc montre une dynamique locale positive avec des initiatives telles que le Réseau Médoc Tiers-Lieux et la Fédération Médoc Initiatives. 
      </p>
      <p class="description">Ces structures, en collaboration avec des partenaires locaux, déploient des efforts considérables pour offrir des services de soutien, de santé, et de mobilité, démontrant un engagement communautaire fort envers la jeunesse.</p>
    </div>
    <div class="image-container">
      <img src="/constat_1/logement.png" alt="Décrochage scolaire" class="medoc-image">
    </div>
  </div>
</template>

<script>
export default {
  name: 'PartFive',
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