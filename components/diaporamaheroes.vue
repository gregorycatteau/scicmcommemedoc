<template>
  <div>
    <UContainer>
    <img :src="currentImage" alt="Diaporama" class="image">
  </UContainer>
  </div>
</template>

<script>
export default {
  name: "diapoherocomponent",
  data() {
    return {
      // Utiliser des chemins relatifs
      images: [
        "/superheros/Christine.jpg",
        "/superheros/Dania.jpg",
        "/superheros/Francois.jpg",
        "/superheros/jenny.jpg",
        "/superheros/Martine.jpg",
        "/superheros/Kate.jpg",
        "/superheros/Mael.jpg",
        "/superheros/Seb.jpg",
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
    @apply h-[1200px] w-[1200px] object-cover rounded-2xl mt-5 ml-20;
    animation: rotateImage 20s linear infinite, fadeInOut 10s ease-in-out infinite;
    box-shadow: 0 0 20px 5px rgba(0, 123, 255, 0.5);
    border: 4px solid #fff;
    transform-origin: center;
    transition: transform 0.5s, box-shadow 0.5s;
  }

  .image:hover {
    transform: scale(1.05);
    box-shadow: 0 0 25px 8px rgba(0, 123, 255, 0.7);
  }

  @keyframes rotateImage {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }

  @keyframes fadeInOut {
    0%, 100% { opacity: 0; }
    20%, 80% { opacity: 1; }
  }
</style>




