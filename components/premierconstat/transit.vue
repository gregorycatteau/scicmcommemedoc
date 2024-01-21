<template>
  <img src="/constat_1/consultant.png" alt="Consultant" class="consultant-image" />
<div class="content-wrapper">
<div class="image-container">nt-image">
  <div v-if="isTyping" class="speech-bubble">
    <p class="typewriter-text">{{ currentText }}</p>
  </div>
</div>
<UContainer v-if="showTableau" class="tableau">
  <PartOne />    
</UContainer>
</div>
</template>

<script setup>
import PartOne from '~/components/premierconstat/part_one.vue';
const { $anime } = useNuxtApp();
const paragraphs = [
"Je suis Marc, consultant spécialisé en économie...!",
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
];
const currentParagraphIndex = ref(0);
const currentText = ref('');
const isTyping = ref(false);
const showTableau = ref(false);

const typeWriterEffect = (text, i = 0) => {
if (i < text.length) {
currentText.value += text.charAt(i);
setTimeout(() => typeWriterEffect(text, i + 1), 100);
} else {
setTimeout(() => {
  isTyping.value = false;
  if (currentParagraphIndex.value < paragraphs.length - 1) {
    currentParagraphIndex.value++;
    nextParagraph();
  } else {
    showTableau.value = true;
  }
}, 1000);
}
};

const nextParagraph = () => {
if (currentParagraphIndex.value < paragraphs.length) {
currentText.value = '';
isTyping.value = true;
typeWriterEffect(paragraphs[currentParagraphIndex.value]);
}
};

onMounted(() => {
$anime({
targets: '.consultant-image',
opacity: [0, 1],
translateY: [-50, 0],
duration: 1000,
easing: 'easeOutQuad'
});
nextParagraph();
});

watch(showTableau, (newVal) => {
if (newVal) {
// Peut-être ajouter une logique supplémentaire si nécessaire lorsque showTableau devient true
}
});
</script>






<style scoped>
.content-wrapper {
@apply flex justify-start items-center p-5;
}

.image-container {
@apply relative;
}

.consultant-image {
@apply w-72 h-auto rounded-lg opacity-0; /* Taille et arrondis */
/* Défini initialement à invisible pour l'animation */
}

.speech-bubble {
@apply absolute right-[-350px] top-12 max-w-lg p-2.5 bg-white border-2 border-black rounded-lg shadow-lg flex flex-col justify-center items-center;
opacity: 1; /* Valeur par défaut pour l'opacité */
}

.typewriter-text {
@apply font-mono whitespace-pre-wrap break-words;
border-right: 3px solid black; /* Curseur de l'effet machine à écrire */
}
.tableau {
@apply relative bg-cover bg-center;
background-image: url('/constat_1/tableau.png');
}
</style>
