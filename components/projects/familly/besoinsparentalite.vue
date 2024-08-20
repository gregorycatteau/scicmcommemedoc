<template >
  <UCard class="mainheaderwrapper">
    <template #header>
      <div class="headerwrapper" @click="CloseSlideover">
        <p class="wrappertitle">fermer</p>
        <UIcon name="i-charm-cross" class="icon" dynamic></UIcon>
      </div> 
      

    </template>
    <div class="templatetitling" >
      <h1 class="maintitle">Développons ensemble notre Centre de Ressources Parentales</h1>
<h2 class="mainsubtitle">Enrichissons notre communauté par le soutien et l'éducation</h2>
</div>
<p class="maindescription">Chers membres de la communauté,</p>
<p class="maindescription">Nous sommes enthousiastes à l'idée de vous présenter une initiative essentielle qui émerge dans notre communauté : la création d'un centre de ressources sur la parentalité. Ce projet en phase de planification est une chance exceptionnelle de contribuer à un soutien éducatif et parental enrichissant pour tous.</p> 
<h3 class="descriptionsubtitle">Pourquoi s'engager dans ce projet de centre de ressources sur la parentalité ?</h3>
<ul class="listofitems">
  <li class="listitem"><span class="emphazer">Participation active : </span>Engagez-vous dans la mise en place et le développement du centre pour créer un réseau de soutien solide.</li>
  <li class="listitem"><span class="emphazer">Soutien mutuel : </span>Profitez et contribuez à l'expertise collective de notre communauté pour naviguer ensemble dans les défis de la parentalité.</li>
  <li class="listitem"><span class="emphazer">Impact durable : </span>Aidez à renforcer les familles et à améliorer le bien-être des enfants dans notre région.</li>
</ul>
<p class="maindescription">Nous constituons un groupe dynamique de parents et de professionnels intéressés et vous invitons à nous rejoindre. Votre participation est cruciale pour transformer cette vision en une réalité tangible.</p> 
<h3 class="descriptionsubtitle">Comment pouvez-vous contribuer ?</h3>

<p class="maindescription">Nous recherchons des individus passionnés prêts à enrichir notre projet avec leurs perspectives, leurs compétences, et leur temps. Votre implication aidera à établir un centre ressource de référence pour la parentalité.</p>
<p class="maindescription">De plus...</p>
<p class="maindescription">Nous sommes à la recherche d'un espace qui pourrait servir de lieu temporaire ou permanent pour notre centre. Tout espace disponible et adapté serait d'une grande aide pour démarrer nos activités.</p>
<p class="maindescription">Si vous connaissez un lieu qui pourrait répondre à nos attentes, veuillez partager cette information avec nous.</p>
<h3 class="descriptionsubtitle">Restez informés et préparez-vous à vous engager</h3>
<p class="maindescription">Pour obtenir plus de détails et exprimer votre intérêt, veuillez nous contacter par email à l'adresse suivante : <span class="link"><NuxtLink to="mailto:info@centreressourcesparentales.fr">info@centreressourcesparentales.fr</NuxtLink></span>. Restez à l'écoute pour les mises à jour du projet et inscrivez-vous pour recevoir des informations sur les événements et réunions à venir.</p>


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