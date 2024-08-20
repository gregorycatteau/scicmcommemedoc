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
import { ref } from 'vue';
const slideoverStore = useSlideoverStore();
const CloseSlideover = () => {
  slideoverStore.closeSlideover();
};
const personas = ref([
  {
    name: 'Laura, la Jeune Maman Active',
    description: 'Laura, 32 ans, combine sa carrière en marketing avec son rôle de maman pour Théo, son petit garçon de 18 mois. Elle cherche un environnement de crèche qui soutient son style de vie actif et lui permet de participer pleinement à la vie de Théo.',
    image: '/Sophie.png',
    advantages: [
      'Flexibilité et participation aux activités clés de la crèche.',
      'Soutien professionnel et personnel au sein d\'un réseau de parents.'
    ],
    goals: [
      'Développement harmonieux de Théo.',
      'Concilier carrière et maternité efficacement.'
    ]
  },
  {
    name: 'Julien, le Papa Solo',
    description: 'Julien, 40 ans, gère son rôle de père célibataire et son travail de viticulteur, tout en s\'occupant de Léa, sa fille de 4 ans. Il cherche une crèche qui offre un soutien éducatif et émotionnel adapté pour Léa, tout en lui permettant de rester connecté à d\'autres parents solo.',
    image: '/David.png',
    advantages: [
      'Support éducatif et émotionnel adapté pour Léa.',
      'Réseau de soutien pour réduire l\'isolement des parents solo.'
    ],
    goals: [
      'Assurer une routine stable et enrichissante pour Léa.',
      'Équilibrer travail et parentalité sans compromis.'
    ]
  },
  {
    name: 'Sophie, la Maman en Reconversion',
    description: 'Sophie, 28 ans, a récemment quitté son emploi de comptable pour se consacrer à sa passion pour la photographie. Elle cherche une crèche qui encourage la créativité et l\'expression artistique chez son fils, Lucas, âgé de 2 ans.',
    image: '/Marie.png',
    advantages: [
      'Encouragement de la créativité et de l\'expression artistique chez Lucas.',
      'Opportunités d\'apprentissage et de développement personnel.'
    ],
    goals: [
      'Favoriser l\'épanouissement artistique de Lucas.',
      'Trouver un équilibre entre passion et parentalité.'
    ]
  },
  {
    name: 'Elise Et Thomas, Les Parents Actifs',
    description: 'Elise et Thomas, 35 ans, sont des parents actifs qui travaillent dans le secteur de la construction durable. Ils cherchent une crèche qui offre un environnement stimulant pour le développement social et cognitif de leur fille, Emma, âgée de 3 ans. Ils veulent également trouver un équilibre entre leur carrière et leur rôle de parents.',
    image: '/Elise_et_Thomas.png',
    advantages: [
      'Environnement stimulant pour le développement de compétences sociales et cognitives d\'Emma.',
      'Opportunités d\'apprentissage et de croissance personnelle.'
    ],
    goals: [
      'Favoriser le développement cognitif et social d\'Emma.',
      'Équilibrer travail et parentalité de manière efficace.'
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
