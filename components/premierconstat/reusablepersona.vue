<template>
  <div class="content-wrapper">
    <div class="image-container" :style="bubblePosition">
      <img :src="imageSrc" alt="Persona" class="persona-image">
      <div v-if="isTyping" class="speech-bubble">
        <p class="typewriter-text">{{ currentText }}</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Persona",
  props: {
    imageSrc: String,
    bubblePosition: Object, // { right: '50px', top: '50px' }
    paragraphs: Array,// ['Texte 1', 'Texte 2', ...]
    personaPosition: Object, // { left: '50px', top: '50px' }
  },
  data() {
    return {
      currentParagraphIndex: 0,
      currentText: '',
      isTyping: false,
    };
  },
  // ... autres méthodes ...
};
</script>
