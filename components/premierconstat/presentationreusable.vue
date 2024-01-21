<template>
  <div class="presentation-container">
    <PersonaAnimation @animationEnd="showPresentation = true" />
    <UContainer v-if="showPresentation" class="presentation-board">
      <component :is="currentComponent" />
      <div class="navigation-controls">
        <UButton v-if="!isFirstPart" @click="goToPreviousPart" class="button-prev">Revenir en arrière</UButton>
        <UButton v-if="!isLastPart" @click="goToNextPart" class="button-next">Poursuivre la présentation</UButton>
        <UButton v-if="isLastPart" @click="endPresentation" class="button-end">Terminer la visite</UButton>
      </div>
    </UContainer>
  </div>
</template>

<script>
import PartOne from '~/components/premierconstat/part_one.vue';
import PartTwo from '~/components/premierconstat/part_two.vue';
import PartThree from '~/components/premierconstat/part_three.vue';
import PartFour from '~/components/premierconstat/part_four.vue';
import PartFive from '~/components/premierconstat/part_five.vue';       

export default {
  name: 'PresentationPage',
  components: {
    PartOne,
    PartTwo,
    PartThree,
    PartFour,
    PartFive,
    // Déclarez vos sous-composants ici
  },
  data() {
    return {
      showPresentation: false,
      currentPart: 0,
    };
  },
  computed: {
    currentComponent() {
      const components = ['PartOne', 'PartTwo', 'PartThree', 'PartFour', 'PartFive'];
      return components[this.currentPart];
    },
    isFirstPart() {
      return this.currentPart === 0;
    },
    isLastPart() {
      const totalParts = 5; // Mettre à jour avec le nombre total de parties
      return this.currentPart === totalParts - 1;
    }
  },
  methods: {
    animateButtons() {
      this.$anime({
        targets: '.button-prev, .button-next, .button-end',
        opacity: [0, 1],
        translateY: [20, 0],
        duration: 1000,
        easing: 'easeOutQuad',
        delay: (el, i) => 4000 + 100 * i // Un délai pour chaque bouton
      });
    },
    goToPreviousPart() {
      if (this.currentPart > 0) {
        this.currentPart--;
      }
    },
    goToNextPart() {
      if (this.currentPart < 4) { // 4 étant le dernier index (5 composants - 1)
        this.currentPart++;
      }
    },
    endPresentation() {
      // Logique pour terminer la présentation, par exemple, fermer le container ou naviguer vers une autre page
    }
  },
  mounted() {
    this.animateButtons();
  }
};
</script>


<style>
.button-prev, .button-next, .button-end {
  @apply bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded;
  @apply transition duration-300 ease-in-out;
}

.button-prev {
  @apply mr-2;
}

.button-next {
  @apply ml-2;
}

.button-end {
  @apply mt-4;
}

</style>
