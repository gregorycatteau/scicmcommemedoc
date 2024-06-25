<template>
  <section class="section">
    <ImageContainer :src="imgSrc" :alt="imgAlt" />
    <Content :title="title" :paragraphs="paragraphs" />
  </section>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';
import ImageContainer from '@/components/discovery/imagecontainer.vue';
import Content from '@/components/discovery/content.vue';

const props = defineProps({
  imgSrc: String,
  imgAlt: String,
  title: String,
  paragraphs: Array,
});
</script>

<style scoped>
.section {
  transform-origin: center top;
  transform: scaleY(calc(1 - var(--scale)));
}
</style>
