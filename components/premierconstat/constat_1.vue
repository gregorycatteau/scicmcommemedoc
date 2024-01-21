<template>
  <div class="content-wrapper">
    <div class="image-container">
      <img src="/constat_1/consultant.png" alt="Consultant" class="consultant-image">
      <div v-if="isTyping" class="speech-bubble">
        <p class="typewriter-text">{{ currentText }}</p>
      </div>
    </div>
    <UContainer class="tableau">
      <img src="/constat_1/tableau.png" alt="Tableau" class="tableau-image">
    </UContainer>
  </div>
</template>

<script>
export default {
  name: "Consultant",
  data() {
    return {
      paragraphs: [
        "Je suis Marc, consultant spécialisé en économie...",
        "On m'a récemment missionné pour effectuer un bilan concernant la petite enfance dans le Médoc...",
        "Plutôt que de me baser sur des données statistiques, j'ai décidé de mener une enquête de terrain...",
        "J'ai rencontré des parents, des professionnels de la petite enfance, des élus, des citoyens...",
        "J'ai ainsi pu identifier les besoins et les attentes des habitants du Médoc...",
        "J'ai également pu identifier les services et les produits qui répondent le mieux à leurs besoins...",
        "C'est ainsi que j'ai découvert la SCIC M Comme Médoc...",
        "Cette coopérative propose des services et des produits qui répondent aux besoins de la communauté...",
        "Je suis convaincu que la SCIC M Comme Médoc est un projet qui a du sens et qui a un bel avenir devant lui...",
        "Mais avant de leur laisser la parole, laissez moi vous présenter le bilan que j'ai réalisé",
        "Ce bilan va défiler dans un instant sur l'écran qui va apparaitre devant vous...",
        "On y va ? Alors c'est parti !"
      ],
      currentParagraphIndex: 0,
      currentText: '',
      isTyping: false,
    };
  },
  mounted() {
    this.nextParagraph();
  },
  methods: {
    nextParagraph() {
      if (this.currentParagraphIndex < this.paragraphs.length) {
        this.currentText = '';
        this.isTyping = true;
        this.typeWriterEffect(this.paragraphs[this.currentParagraphIndex], 0);
      }
    },
    typeWriterEffect(text, i) {
      if (i < text.length) {
        this.currentText += text.charAt(i);
        setTimeout(() => this.typeWriterEffect(text, i + 1), 100);
      } else {
        setTimeout(() => {
          this.isTyping = false;
          if (this.currentParagraphIndex < this.paragraphs.length - 1) {
            this.currentParagraphIndex++;
            setTimeout(this.nextParagraph, 1000); // Attente avant le prochain paragraphe
          }
        }, 1000); // Attendre 1 seconde avant de passer au paragraphe suivant
      }
    },
  },
};
</script>





<style scoped>
.content-wrapper {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 20px;
}

.image-container {
  position: relative;
}

.consultant-image {
  width: 300px; /* Ajustez selon vos besoins */
  height: auto;
  border-radius: 20px;
}

.speech-bubble {
  position: absolute;
  right: -350px; /* Ajustez selon la position de l'image */
  top: 50px; /* Ajustez selon la position de l'image */
  max-width: 400px;
  padding: 10px;
  background-color: white;
  border: 2px solid black;
  border-radius: 20px;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.3);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  opacity: 1; 
  transition: opacity is ease-in-out;/* Valeur par défaut pour l'opacité */
}
.speech-bubble-enter, .speech-bubble-leave-to {
  animation: fadeIn 1s ease forwards;
}
.speech-bubble-enter-to, .speech-bubble-leave {
  opacity: 0;
}
.typewriter-text {
  font-family: 'Courier New', monospace;
  white-space: pre-wrap;
  word-wrap: break-word;
  border-right: 3px solid black; /* Curseur de l'effet machine à écrire */
}

@keyframes fadeIn {
  0% { opacity: 0; }
  100% { opacity: 1; }
}
</style>
