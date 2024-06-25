<template>
  <figure class="image-container">
    <img :src="src" :alt="alt" />
  </figure>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';

const props = defineProps({
  src: String,
  alt: String,
});
</script>

<style scoped>
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
</style>
