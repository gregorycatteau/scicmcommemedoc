<template>
  <article class="content">
    <h2 class="section-title">{{ title }}</h2>
    <p v-for="(paragraph, index) in paragraphs" :key="index" class="developpement" v-html="paragraph"></p>
  </article>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';

const props = defineProps({
  title: String,
  paragraphs: Array,
});
</script>

<style scoped>
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

.developpement {
  margin-top: 16px;
  margin-left: 10px;
  margin-right: 10px;
  text-align: justify;
  font-size: 1.125rem;
  text-indent: 2rem;
  background-color: white;
  padding: 16px;
  border-radius: 8px;
  color: #2b8c00;
  font-family: "Lora", serif;
}

.section-title {
  font-family: var(--font-heading);
  font-size: clamp(2.5rem, 6vw, 4.5rem);
  font-weight: bold;
  line-height: 1.125;
  background-color: var(--main-color);
  color: #fff;
  padding: 1rem;
  text-align: center;
  border-radius: 2rem;
}
</style>
