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
            <h3 class="subtitle">Avantages du centre de parentalité :</h3>
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
  name: 'Myriam, la Nouvelle Maman Bienveillante',
  description: 'Myriam, 28 ans, jeune maman de Léa, un bébé de 6 mois. Elle cherche des ressources pour accompagner son parcours de parentalité avec bienveillance et soutien dans le respect du rythme de développement de son enfant.',
  image: '/Myriam.png',
  advantages: [
    'Accès à des informations et des outils pour soutenir le développement de Léa de manière bienveillante.',
    'Communauté engagée et solidaire pour partager les défis et les succès de la parentalité.'
  ],
  goals: [
    'Favoriser un lien sécurisant et une relation harmonieuse avec son bébé.',
    'Trouver des méthodes et des pratiques parentales adaptées à ses valeurs et à son style de vie.'
  ]
},
{
  name: 'Jean-Pierre, le Jeune Papa Curieux',
  description: 'Jean-Pierre, 31 ans, père de deux jeunes enfants, cherche à s\'informer et à se former pour mieux comprendre les besoins et les défis de la parentalité. Il souhaite accéder à des ressources éducatives et pratiques pour soutenir son rôle de père.',
  image: '/Jean-Pierre.png',
  advantages: [
    'Accès à des conseils et des informations pratiques pour accompagner le développement de ses enfants.',
    'Formation et ateliers pour renforcer ses compétences parentales et son implication dans la vie familiale.'
  ],
  goals: [
    'Développer une relation de confiance et de complicité avec ses enfants.',
    'Acquérir des compétences éducatives pour favoriser l\'épanouissement de sa famille.'
  ]
},
{
  name: 'Emma, la Maman en Quête de Sérénité',
  description: 'Emma, 35 ans, mère de trois enfants, cherche des ressources pour gérer le quotidien familial avec calme et bien-être. Elle souhaite découvrir des méthodes de parentalité positive et des techniques de gestion du stress pour mieux concilier vie professionnelle et familiale.',
  image: '/Emma.png',
  advantages: [
    'Stratégies et astuces pour cultiver la sérénité et l\'équilibre au sein de sa famille.',
    'Ressources pour améliorer la communication et la résolution de conflits avec ses enfants.'
  ],
  goals: [
    'Créer un environnement familial harmonieux et épanouissant.',
    'Trouver des moyens concrets pour mieux gérer le stress et les défis du quotidien.'
  ]
},
{
  name: 'Marc et Sandrine, Les Parents Engagés',
  description: 'Marc et Sandrine, 40 ans, parents de deux adolescents, s\'investissent activement dans l\'éducation et le bien-être de leurs enfants. Ils cherchent des ressources pour approfondir leurs connaissances en parentalité positive et renforcer la relation parent-enfant dans le respect et l\'écoute mutuelle.',
  image: '/Marc_et_Sandrine.png',
  advantages: [
    'Accès à des formations et des conférences pour enrichir leurs pratiques éducatives.',
    'Réseautage avec d\'autres parents engagés pour partager des expériences et des conseils.'
  ],
  goals: [
    'Renforcer le lien familial et favoriser la confiance et la communication avec leurs adolescents.',
    'Promouvoir des valeurs de respect, d\'écoute et de bienveillance au sein de leur famille.'
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
