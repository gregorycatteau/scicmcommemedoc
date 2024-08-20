<template>
  <UCard class="mainwrapper">
    
    <template #header>
      <div class="headerwrapper" @click="CloseSlideover">
        <p class="wrappertitle">fermer</p>
        <UIcon name="i-charm-cross" class="icon" dynamic></UIcon>
      </div> 
    </template>

    <div class="persona-carousel">
    <UCarousel :items="personas" class="rounded-lg overflow-hidden" arrows indicators>
      <template #default="{ item }">
        <div class="persona-card">
          <div class="imageplaceholder">
          <img :src="item.image" alt="Persona Image" class="persona-image">
        </div>
          <div class="content">
            <h2 class="title">{{ item.name }}</h2>
            <p class="description">{{ item.description }}</p>
            <h3 class="subtitle">Avantages de la Crèche:</h3>
            <ul class="list">
              <li class="listitem" v-for="advantage in item.advantages" :key="advantage">{{ advantage }}</li>
            </ul>
            <h3 class="subtitle">Objectifs:</h3>
            <ul class="list">
              <li class="listitem"v-for="goal in item.goals" :key="goal">{{ goal }}</li>
            </ul>
          </div>
        </div>
      </template>
    </UCarousel>
  </div>


    <template #footer>
      <Placeholder class="h-8" />
    </template>
  </UCard>
</template>

<script setup>
 import { useSlideoverStore } from '@/stores/slideover';

const slideoverStore = useSlideoverStore();
const CloseSlideover = () => {
  slideoverStore.closeSlideover();
}; 
import { ref } from 'vue';

const personas = ref([
  {
    name: 'Nadia, la Jeune Maman Engagée',
    description: 'Nadia, 34 ans, combine son travail dans une ONG avec son rôle de maman pour Émilie, une fillette de 7 ans présentant des besoins éducatifs particuliers. Elle cherche une école qui soutient une approche éducative personnalisée et inclusives.',
    image: '/Nadia.png',
    advantages: [
      'Approche éducative adaptée aux besoins particuliers d’Émilie.',
      'Participation active dans le processus éducatif et la communauté scolaire.'
    ],
    goals: [
      'Assurer un développement équilibré et épanouissant pour Émilie.',
      'Intégrer ses valeurs personnelles dans l’éducation de sa fille.'
    ]
  },
  {
    name: 'Jean, le Papa Impliqué',
    description: 'Jean, 38 ans, entrepreneur dans le secteur viticole, et père de Jules, 9 ans, qui a du mal à s’adapter au système scolaire traditionnel. Il cherche une école offrant une structure flexible et une pédagogie centrée sur l’enfant.',
    image: '/Jean.png',
    advantages: [
      'Flexibilité et adaptation pédagogique pour répondre aux besoins de Jules.',
      'Environnement favorisant l’autonomie et la confiance en soi.'
    ],
    goals: [
      'Stimuler l’engagement et la curiosité intellectuelle de Jules.',
      'Contribuer personnellement à un modèle éducatif innovant.'
    ]
  },
  {
    name: 'Camille, la Maman en Transition',
    description: 'Camille, 30 ans, en transition de carrière vers le secteur social, mère de Léo, un jeune garçon de 8 ans très créatif mais en risque de décrochage. Elle souhaite une école qui valorise les compétences individuelles et encourage les approches éducatives alternatives.',
    image: '/Camille.png',
    advantages: [
      'Valorisation des talents uniques de Léo et encouragement de sa créativité.',
      'Approches pédagogiques innovantes adaptées à son profil atypique.'
    ],
    goals: [
      'Favoriser l’épanouissement personnel et académique de Léo.',
      'Trouver un équilibre entre sa nouvelle carrière et son rôle de maman.'
    ]
  },
  {
    name: 'Aline et Julien, Les Parents Conscients',
    description: 'Aline et Julien, 36 ans, travaillent respectivement dans l’éducation spécialisée et l’environnement. Ils cherchent pour leur fille Clara, 6 ans, une école qui intègre les principes de durabilité et de respect du vivant dans son curriculum.',
    image: '/Aline_et_Julien.png',
    advantages: [
      'Environnement éducatif aligné avec les valeurs de durabilité et de respect de la nature.',
      'Approches pédagogiques centrées sur le développement global et respectueux de l’enfant.'
    ],
    goals: [
      'Assurer une éducation qui prépare Clara à être une citoyenne consciente et active.',
      'Partager et vivre leurs valeurs de famille à travers l’éducation de leur fille.'
    ]
  }


]);
</script>

<style scoped>

.mainwrapper {
  @apply flex flex-col gap-4 overflow-y-auto;
  min-height: 100vh;
}
.headerwrapper {
  @apply h-8 bg-scicgreen flex  flex-row justify-between items-center p-4 rounded-2xl cursor-pointer hover:bg-opacity-75 transition-opacity;
}
.wrappertitle {
  @apply text-white font-bold ml-5;
}
.icon {
  @apply text-white;
}
.persona-carousel {
  @apply flex justify-center items-center  bg-gray-100 overflow-x-auto;
   /* Adjust based on your design needs */
}

.persona-card {
  @apply bg-scicgreen shadow-lg rounded-lg p-4 w-96 h-auto m-4;
}
.imageplaceholder {
  @apply  bg-gray-200 rounded-2xl aspect-w-1 aspect-h-1;
}
.persona-image {
  @apply  object-cover rounded-2xl  ;
}

.content {
  @apply p-4 flex flex-col gap-4;
}
.title {
  @apply text-white font-bold text-center text-xl;
}
.subtitle {
  @apply text-white font-bold text-center text-lg;
}
.description {
  @apply text-white text-justify indent-8;
}
.list {
  @apply text-white text-justify indent-8 list-disc;
}
.listitem {
  @apply text-white;
}



</style>
