<template >
  <UCard class="mainheaderwrapper">
    <template #header>
      <div class="headerwrapper" @click="CloseSlideover">
        <p class="wrappertitle">fermer</p>
        <UIcon name="i-charm-cross" class="icon" dynamic></UIcon>
      </div> 
      

    </template>
      <div class="templatetitling" >
        <h1 class="maintitle">Rejoignez le Projet de Création d'une Crèche Parentale Innovante sur le territoire</h1>
        <h2 class="mainsubtitle">Participez à une Initiative Unique pour une Éducation de Qualité dès la Petite Enfance</h2>
      </div>
    <p class="maindescription">Chers parents,</p>
    <p class="maindescription">Nous sommes enthousiastes à l'idée de vous présenter une opportunité exceptionnelle en cours de développement au sein de notre communauté : la création d'une crèche parentale. Ce projet en phase de réflexion est votre chance de jouer un rôle actif dans la création d'un environnement éducatif optimal pour nos enfants.</p> 
    <h3 class="descriptionsubtitle">Pourquoi s'engager dans ce projet de crèche parentale ?</h3>
    <ul class="listofitems">
      <li class="listitem"><span class="emphazer">Participation directe : </span>Impliquez-vous dans la gestion et les activités de la crèche pour créer un lieu éducatif sur mesure.</li>
      <li class="listitem"><span class="emphazer">Soutien institutionnel : </span>Profitez de l'appui de nos partenaires institutionnels et de l'expertise administrative de la SCIC M Comme Médoc.</li>
      <li class="listitem"><span class="emphazer">Impact sur le territoire : </span>Contribuez à un projet qui renforce notre communauté en offrant des services essentiels pour la petite enfance.</li>
    </ul>
    <p class="maindescription">Nous sommes en pleine constitution d'un groupe de parents fondateurs et nous vous invitons à nous rejoindre pour concrétiser ce projet. Votre participation est essentielle pour donner vie à cette initiative.

    </p> 
    <h3 class="descriptionsubtitle">Comment pouvez-vous contribuer ?</h3>
    
    <p class="maindescription">Nous recherchons des parents motivés pour enrichir notre équipe avec leurs idées, leur temps et leurs compétences. Votre implication est cruciale pour le succès de ce projet éducatif enrichissant.</p>
    <h3 class="descriptionsubtitle">Restez informés et préparez-vous à participer</h3>
    <p class="maindescription">Pour plus d'informations et pour exprimer votre intérêt, veuillez nous contacter par email à l'adresse suivante : <span class="link"><NuxtLink to="mailto:direction@mcommemedoc.fr">direction@mcommemedoc.fr</NuxtLink></span> <br> Vous y trouverez les dernières mises à jour et pourrez vous inscrire pour recevoir des notifications sur les prochaines étapes, y compris l'organisation de réunions futures.

</p>
    <template #footer>
      <button class="button"><NuxtLink to="/contact">Contactez-nous</NuxtLink></button>
    </template>
  </UCard>
</template>
<script setup lang="ts">
import { useSlideoverStore } from '@/stores/slideover';
const slideoverStore = useSlideoverStore();
const CloseSlideover = () => {
  slideoverStore.closeSlideover();
};
</script>
<style scoped>
  .mainheaderwrapper {
    @apply flex flex-col;
    max-height: 120vh;
    overflow-y: auto;
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
  .maintitle {
    @apply text-4xl font-bold text-scicgreen mb-4 text-center;
    font-family: 'Playfair Display', serif;
  } 
  .mainsubtitle {
    @apply text-2xl font-bold text-scicgreen mb-4 text-center;
    font-family: 'Playfair Display', serif;
  }
  .maindescription {
    @apply text-lg text-justify indent-8;
  }
  .descriptionsubtitle {
    @apply text-2xl font-bold text-scicgreen mb-4 text-center;
  }
  .listofitems {
    @apply text-lg text-justify indent-8 decoration-slice;
  }
  .listitem {
    @apply mb-4;
  }
  .emphazer {
    @apply font-bold;
  }
  .button {
    @apply bg-scicgreen text-white font-bold py-2 px-4 rounded-lg items-center justify-center;
  }
</style>