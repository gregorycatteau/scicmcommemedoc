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
    name: 'Alex, l\'Apprenant Engagé',
    description: 'Alex, 24 ans, récemment diplômé en ingénierie, passionné par l\'application pratique de ses compétences. Il cherche à se former sur des projets réels pour améliorer ses capacités et obtenir une expérience concrète.',
    image: '/Alex.png',
    advantages: [
      'Opportunités d\'apprendre directement sur le terrain, en travaillant sur des projets qui nécessitent une réelle application des compétences techniques.',
      'Exposition à des défis réels et développement d\'un réseau professionnel grâce à la collaboration avec des porteurs de projet expérimentés.'
    ],
    goals: [
      'Acquérir une expérience précieuse et renforcer son CV.',
      'Transformer ses connaissances théoriques en compétences pratiques hautement demandées sur le marché du travail.'
    ]
  },
  {
    name: 'Sandra, la vannière solidaire',
    description: 'Sandra, 38 ans, est une spécialiste de la vannerie en osier. Elle souhaite transmettre son savoir et inspirer les nouvelles générations à adopter des pratiques durables.',
    image: '/Sandra.png',
    advantages: [
      'Partager son expertise en encadrant des projets concrets, permettant ainsi aux apprenants de comprendre l\'ensemble du processus, de la plantation de l\'osier au produit fini .',
      'Contribuer activement à la formation de professionnels compétents et d\'amateurs éclairés conscients des défis environnementaux.'
    ],
    goals: [
      'Inspirer et former des artisans, des artistes et des amateurs.',
      'Voir ses apprenants réussir et mettre en œuvre des projets innovants qui font la différence.'
    ]
  },
  {
    name: 'Thomas, le Porteur de Projet Visionnaire',
    description: 'Thomas, 45 ans, entrepreneur chevronné dans le secteur de la construction, cherche à intégrer des pratiques innovantes et durables dans ses projets. Il voit l\'éducation comme un moyen de propulser ses initiatives.',
    image: '/Thomas.png',
    advantages: [
      'Collaboration avec des formateurs et des apprenants pour explorer et implémenter des techniques de construction novatrices et écologiques.',
      'Bénéficier d\'idées neuves et d\'approches fraîches qui peuvent être intégrées dans ses projets, augmentant ainsi leur valeur et leur efficacité.'
    ],
    goals: [
      'Mener à bien des projets exemplaires qui servent à la fois de modèle d\'affaires et de cas d\'étude éducatif.',
      'Renforcer sa réputation comme un leader innovant qui soutient l\'éducation et l\'application pratique des connaissances.'
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
