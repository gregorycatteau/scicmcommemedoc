<template>
  <div class="part-one-container">
    <div class="text-container">
      <h1 class="title">Le Chômage des Jeunes : Un Enjeu Majeur</h1>
      <h2 class="subtitle">Les Difficultés d'Insertion Professionnelle des Jeunes Médocains</h2>
      <p class="description">
        Le Médoc fait face à un taux de chômage des jeunes alarmant de 29,1%, dépassant largement la moyenne régionale. 
      </p>
      <p class="description">Ce constat est aggravé par la présence de 620 jeunes sans emploi, formation ou qualification, soulignant les barrières à l'emploi telles que les lacunes numériques, les problèmes de santé, et les limitations en matière de mobilité.</p>
    </div>
    <div class="image-container">
      <img src="/constat_1/pauvrete.png" alt="Décrochage scolaire" class="medoc-image">
    </div>
  </div>
</template>

<script>
export default {
  name: 'PartThree',
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