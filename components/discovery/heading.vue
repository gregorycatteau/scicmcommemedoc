<template>
  <div class="internalorganizer">
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
  @apply scroll-my-10 flex flex-col align-middle content-center items-center mt-20 gap-4 p-4 text-center;
  @apply relative min-h-[2rem] bg-transparent;
}

.textual {
  @apply flex flex-col gap-4 items-center justify-center;
}

.title1 {
  @apply text-[3.5rem] font-bold text-center text-[#2b8c00];
  font-family: "Permanent Marker", cursive;
}

.subtitle {
  @apply text-[2.25rem] font-semibold text-center text-[#2b8c00];
  font-family: "Playfair Display", serif;
}

.wordwrapper {
  @apply text-[4.5rem] text-[#f26612] font-bold italic;
  font-family: "Lora", serif;
}

.icons {
  @apply text-[3.75rem] text-[#2b8c00];
}
</style>
