<template>
  <div>
    <UContainer>
    <img :src="currentImage" alt="Diaporama" class="image">
  </UContainer>
  </div>
</template>

<script>
export default {
  name: "diapoconsomacteurscomponent",
  data() {
    return {
      // Utiliser des chemins relatifs
      images: [
        "/consomacteurs.png",
        "/consomacteurs2.png",
        "/consomacteurs3.png",
        "/consomacteurs4.png",
      ],
      currentIndex: 0
    };
  },
  computed: {
    currentImage() {
      return this.images[this.currentIndex];
    }
  },
  mounted() {
    setInterval(() => {
      this.currentIndex = (this.currentIndex + 1) % this.images.length;
    }, 5000);
  }
};
</script>

<style scoped>
  .image {
    @apply h-[30rem] w-[30rem] object-cover rounded-2xl grayscale mt-5 ml-20;
  }
</style>
