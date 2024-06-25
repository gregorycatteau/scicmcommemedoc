<template>
  <div class="internalorganizer">
    <ClientOnly>
    <DiscoveryNeuralnoise />
  </ClientOnly>
    <div class="textual">
      <h1 ref="titleRef" class="title1">M Comme Médoc</h1>
      <h2 class="subtitle">
        Une coopérative<br />
        <span class="wordwrapper">{{ currentWord }}</span> <br />engagée
      </h2>
      <Icon name="i-ic-baseline-arrow-downward" class="icons" dynamic />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, shallowRef, onMounted } from 'vue';
import { useAnimate } from '@vueuse/core';


const titleRef = shallowRef<HTMLElement | null>(null);
const words = ['socialement', 'solidairement', 'écologiquement', 'respectueusement'];
const currentWord = ref(words[0]);
let index = 0;

function rotateWords() {
  index = (index + 1) % words.length;
  currentWord.value = words[index];
}

const { play } = useAnimate(
  titleRef,
  [
    { transform: 'translateY(-20px)', opacity: 0 },
    { transform: 'translateY(0)', opacity: 1 }
  ],
  {
    duration: 1000,
    iterations: 1,
    easing: 'ease-in-out',
  },
);

onMounted(() => {
  play();
  setInterval(rotateWords, 2000);
});
</script>

<style scoped>
/* Styles pour le Header */
.internalorganizer {
  @apply scroll-my-10 flex flex-col align-middle content-center items-center mt-20;
  min-height: 2rem;
  gap: 16px;
  padding: 16px;
  text-align: center;
  background-color: var(--main-color);
  color: #fff;
  position: relative;
}

.textual {
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: center;
  justify-content: center;
}

.title1 {
  font-size: 3.5rem;
  font-weight: bold;
  text-align: center;
  color: #2b8c00;
  font-family: "Permanent Marker", cursive;
}

.subtitle {
  font-size: 2.25rem;
  font-weight: 600;
  text-align: center;
  color: #2b8c00;
  font-family: "Playfair Display", serif;
}

.wordwrapper {
  font-size: 4.5rem;
  color: #f26612;
  font-weight: bold;
  font-style: italic;
  font-family: "Lora", serif;
}

.icons {
  font-size: 3.75rem;
  color: #2b8c00;
}
</style>
