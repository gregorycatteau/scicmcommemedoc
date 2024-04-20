<template>
  <div class="timeline-container">
    <div class="steps-and-progress">
      <!-- Barre de progression verticale centrale -->
      <div class="progress-bar"></div>
      <!-- Placement des numéros d'étape le long de la barre de progression -->
      <div v-for="(point, index) in points" :key="index" 
           class="step-number" :style="{ 'top': `${index * 100 / (points.length - 1)}%` }">
        <div class="number">
           {{ index + 1 }}
        </div>
      </div>
    </div>
    
    <div class="timeline-content-container">
      <div v-for="(point, index) in points" :key="`content-${index}`" class="timeline-content">
        <div class="date">{{ point.date }}</div>
        <div class="title">{{ point.title }}</div>
        <div class="content">
          <p class="description">{{ point.description }}</p>
          <img :src="point.image" alt="Illustration pour {{ point.title }}" class="illustration-image">
        </div>
      </div>
    </div>
  
  </div>
</template>


<script setup lang="ts">
import { ref } from 'vue';

const points = ref([
  {
    date: "2018-2019",
    title: "Premières réflexions et engagement communautaire",
    description: `Les premières idées autour de la création d'un écolieu expérimental dans le Médoc voient le jour, visant à explorer les thèmes de l'Habitat, l'Habitant et l'Habiter. L'association "La Base" est lancée le 31 août 2019, marquant le début de l'engagement commun pour concrétiser cet écolieu.`,
    image: '/firstperiod.png',
  },
  {
    date: "Fin 2019",
    title: "Intégration et élargissement du réseau",
    description: `Le projet s'élargit pour inclure des partenaires locaux et des acteurs de l'économie sociale et solidaire, et tout naturellement les membres fondateurs intègrent "La Maison des consom'acteurs" en novembre 2019. Les reflexions avancent sur la création d'une SCIC (Société Coopérative d'Intérêt Collectif), dans le but de créer un lieu de vie et de travail collectif.`,
    image: '/secondperiod.png',
  },
  {
    date: "2020",
    title: "Adaptation au contexte pandémique",
    description: `La fermeture de "La Maison des consom'acteurs" en février 2020, due à la crise de COVID-19, n'arrête pas l'élan du projet mais stimule une réflexion sur des modalités d'action plus résilientes, adaptées à un nouveau contexte mondial.`,
    image: '/thirdperiod.png',
  },
  {
    date: "2021 - 2022",
    title: "La Solidarité en action",
    description: `La période 2021-2022 est marquée par une série d'actions solidaires et de rencontres avec les acteurs locaux, les possibles partenaires. Peu à peu des initiatives citoyenes et des projets collectifs se dessinent, avec une attention particulière portée sur l'écologie et la sobriété. Ces initiatives sont pour la plupart gratuites et désintéressées mais permettent de mettre en lumière les besoins identifiées sur le territoire. De nombreux projets de grande valeur sociale peinent à avancer faute de moyens financiers et de soutien institutionnel. La nécessité d'un acteur économique fort et d'une structure juridique adaptée se fait de plus en plus pressante.`,
    image: '/fourthperiod.png',
  },
  {
    date: "2023 - 2024",
    title: "Conciliation des ambitions et structuration du projet",
    description: `De décembre 2023 à janvier 2024, des réunions publiques rassemblent une communauté hétérogène autour du projet SCIC. Les démarches de structuration juridique et financière avancent. Les premières réflexions sur le modèle économique et la gouvernance de la SCIC sont lancéées. La reflexion sur la structuration du projet se construit en partenariat avec Finacoop. Le modèle de la société coopérative d'intérêt collectif (SCIC) est retenu pour sa capacité à associer les habitants, les salariés et les partenaires locaux dans la gouvernance de la structure. Le business model s'affine et les premières pistes de financement se dessinent. `,
    image: '/fifthperiod.png',
  },
  {
    date: "2024 - 2025",
    title: "Lancement de la SCIC",
    description: `Sous réserve de contretemps de dernière minute, le lancement de la SCIC M Comme Médoc est prévu pour le 15 juin 2024. A partir de ce jour, une structure totalement novatrice, pensée pour le bien du collectif et du territoire. Cette structure part de zéro, fidèle à sa philosophie de sobriété et d'écologie. Les premiers projets concrets sont attendus pour l'été 2024.`,
    image: '/dichotomie.png',
  },
  { 
    date: "2025 - 2026",
    title: "Des projets ? Quels projets ?",
    description: `Et si c'était à vous de nous dire comment vous voulez que les choses se passent ? Nous avons créé pour vous un formidable outil, une structure qui est destinée à nous appartenir à tous. A vous de jouer, à vous de décider, à vous d'agir. La SCIC M Comme Médoc est un outil pour vous, pour nous, pour tous. A vous de jouer !`,
    image: '/dichotomie.png',
  },
]);

const currentStep = computed(() => points.value.length - 1);
</script>


<style scoped>

/* Container principal de la timeline */
.timeline-container {
  @apply flex flex-row relative min-h-screen justify-start gap-10 p-10;
}

/* Conteneur des étapes et de la barre de progression */
.steps-and-progress {
  @apply flex flex-col items-center w-10/12 relative top-0;
}

/* Barre de progression verticale */
.progress-bar {
  @apply bg-gray-400 w-1 absolute left-1/2 z-0 top-10 bottom-6;
}

/* Numéro de l'étape */
.step-number {
  @apply bg-scicpurple text-scicgreen p-10 rounded-full md:py-3 md:px-3 flex items-center justify-center absolute z-10;
}
.number {
  @apply text-white text-8xl md:text-sm font-semibold;
}

/* Container du contenu pour chaque étape */
.timeline-content-container {
  @apply ml-20 gap-4;
}

/* Contenu de chaque étape */
.timeline-content {
  @apply  p-4 md:p-6 bg-white rounded-xl shadow-md border border-gray-200;
}

/* Date de l'étape */
.date {
  @apply mb-2 text-blue-600 font-medium text-lg;
}

/* Titre de l'étape */
.title {
  @apply mb-4 text-2xl font-bold text-gray-800;
}

/* Flex container pour la description et l'image */
.content {
  @apply flex flex-col md:flex-row md:items-center;
}

/* Description de l'étape */
.description {
  @apply text-gray-600 text-base mb-4 md:mb-0 md:mr-8 flex-1;
}

/* Image d'illustration de l'étape */
.illustration-image {
  @apply w-full md:w-64 md:h-64 object-cover rounded-lg shadow-sm;
}
</style>
