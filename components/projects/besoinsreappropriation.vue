<template >
  <UCard class="mainheaderwrapper">
    <template #header>
      <div class="headerwrapper" @click="CloseSlideover">
        <p class="wrappertitle">fermer</p>
        <UIcon name="i-charm-cross" class="icon" dynamic></UIcon>
      </div> 
      

    </template>
    <div class="templatetitling">
  <h1 class="maintitle">Développons ensemble notre Pôle de (ré)appropriation du savoir</h1>
  <h2 class="mainsubtitle">Enrichissons notre territoire en se réappropriant le savoir</h2>
</div>
<p class="maindescription">Chers médocains,</p>
<p class="maindescription">Nous sommes ravis de vous présenter le lencement d'une initiative passionnante sur notre territoire : la création du pôle de (ré)appropriation du savoir de M Comme Médoc. Ce projet émergeant offre une opportunité exceptionnelle de contribuer à une nouvelle manière d'entrevoir la (ré)appropriation solidaire du savoir pour tous et par tous. </p>
<h3 class="descriptionsubtitle">Pourquoi s'engager dans ce projet de pôle de (ré)appropriation du savoir ?</h3>
<ul class="listofitems">
  <li class="listitem"><span class="emphazer">Participation active : </span> Engagez-vous dans la mise en place et le développement du pôle pour créer un réseau de soutien solide.</li>
  <li class="listitem"><span class="emphazer">Soutien mutuel : </span> Profitez et contribuez à l'expertise collective de notre communauté pour naviguer ensemble dans les défis de la parentalité.</li>
  <li class="listitem"><span class="emphazer">Impact durable : </span> En quelque sorte, acquérir de nouvelles compétences ou participer à l'émergence de compétences individuelles et collectives ouvre la voie de l\'autonomie et de la résilience'</li>
</ul>
<p class="maindescription">Nous rassemblons donc tous ceux qui d'une manière ou d'une autre pensent que savoir comment faire, comprendre le pourquoi et le comment permettent d'agir</p>
<h3 class="descriptionsubtitle">Comment pouvez-vous contribuer ?</h3>
<p class="maindescription">Nous recherchons des individus passionnés prêts à enrichir notre projet avec leurs perspectives, leurs compétences, et leur temps. Votre implication aidera à établir un pôle de réappropriation parentale de référence.</p>
<p class="maindescription">Si vous avez des idées, des compétences ou du temps à partager, nous vous encourageons à vous impliquer dès maintenant.</p>
<h3 class="descriptionsubtitle">Restez informés et préparez-vous à vous engager</h3>
<p class="maindescription">Pour obtenir plus de détails et exprimer votre intérêt, veuillez nous contacter par email à l'adresse suivante : <span class="link"><NuxtLink to="mailto:direction@mcommemedoc.fr">info@polereappropriationparentale.fr</NuxtLink></span>. Restez à l'écoute pour les mises à jour du projet et inscrivez-vous pour recevoir des informations sur les événements et réunions à venir.</p>


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