

<template>
  <div class="part-one-container">
    <div class="text-container">
      <h1 class="title">La Mosaïque Démographique du Médoc</h1>
      <h2 class="subtitle">Un Territoire Diversifié aux Défis Multiples</h2>
      <p class="description">
        Le Médoc se dévoile comme un territoire aux multiples visages, marqué par une population de 105 000 habitants répartie en zones périurbaines, rurales et balnéaires...
      </p>
      <p class="description">La région, caractérisée par sa faible densité et ses vastes étendues, fait face à des défis de mobilité significatifs et à une tendance croissante de paupérisation, reflétant une complexité sociale et économique.</p>
    </div>
    <div class="image-container">
      <img src="/constat_1/medoc.png" alt="Médoc" class="medoc-image">
    </div>
  </div>
</template>

<script>
export default {
  name: 'PartOne',
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
  @apply flex-1 p-5; /* Donne plus d'espace au texte et ajoute un padding à droite */
}

.title {
  @apply text-3xl text-gray-200 mb-4 text-center; /* Taille de police, couleur et marge pour le titre */
  opacity: 0; /* Défini initialement à invisible pour l'animation */
}

.subtitle {
  @apply text-2xl text-gray-100 mb-6 font-bold text-center; /* Taille de police, couleur et marge pour le sous-titre */
  opacity: 0; /* Défini initialement à invisible pour l'animation */
}

.description {
  @apply text-lg text-gray-200 mb-8 text-justify; /* Taille de police, couleur et marge pour la description */
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



