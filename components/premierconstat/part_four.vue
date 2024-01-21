<template>
  <div class="part-one-container">
    <div class="text-container">
      <h1 class="title">Logement et Précarité : Un Cercle Vicieux</h1>
      <h2 class="subtitle">Les Difficultés d'Accès au Logement pour les Jeunes</h2>
      <p class="description">
        La situation du logement dans le Médoc est critique, avec une offre de logements sociaux insuffisante et seulement 10% des demandes aboutissant. 
      </p>
      <p class="description">Cette problématique de logement, combinée à un taux de pauvreté de 18% chez les jeunes de moins de 30 ans, illustre un cercle vicieux où le manque d'emploi et de logement se renforce mutuellement.</p>
    </div>
    <div class="image-container">
      <img src="/constat_1/logement.png" alt="Décrochage scolaire" class="medoc-image">
    </div>
  </div>
</template>

<script>
export default {
  name: 'PartFour',
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