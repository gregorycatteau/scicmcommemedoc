<template>
  <div class="conversation-container">
    <Persona
      v-for="(persona, index) in personas"
      :key="index"
      :imageSrc="persona.imageSrc"
      :bubblePosition="persona.bubblePosition"
      :paragraphs="persona.paragraphs"
      :personaPosition="persona.personaPosition"
    />
  </div>
</template>

<script>
import Persona from '~/components/premierconstat/reusablepersona.vue';

export default {
  components: {
    Persona,
  },
  data() {
    return {
      personas: [
        {
          imageSrc: '/constat_1/consultant.png',
          bubblePosition: { right: '50px', top: '50px' },
          paragraphs: ['Texte de persona 1...', 'Suite du texte...'],
          personaPosition: { left: '50px', top: '50px' },
        },
        {
          imageSrc: '/path/to/image2.png',
          bubblePosition: { left: '50px', top: '50px' },
          paragraphs: ['Réponse de persona 2...', 'Suite de la réponse...'],
          personaPosition: { right: '50px', top: '50px' },
        },
        // ... autres personas ...
      ],
    };
  },
};
</script>
