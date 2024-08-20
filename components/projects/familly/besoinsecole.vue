<template >
  <UCard class="mainheaderwrapper">
    <template #header>
      <div class="headerwrapper" @click="CloseSlideover">
        <p class="wrappertitle">fermer</p>
        <UIcon name="i-charm-cross" class="icon" dynamic></UIcon>
      </div> 
      

    </template>
    <div class="templatetitling" >
  <h1 class="maintitle">Prenons l'ascension pédagogique avec La Montgolfière</h1>
  <h2 class="mainsubtitle">Elevons nous ensemble</h2>
</div>
<p class="maindescription">Chers parents rejoignez nous,</p>
<p class="maindescription">Nous sommes ravis de vous présenter une opportunité captivante qui se dessine sur notre territoire : la création d'une école hors contrat. Ce projet en phase de développement est une occasion unique de contribuer à la mise en place d'un environnement éducatif adapté à nos enfants, dès leur plus jeune âge.</p> 
<h3 class="descriptionsubtitle">Pourquoi soutenir ce projet d'école hors contrat ?</h3>
<ul class="listofitems">
  <li class="listitem"><span class="emphazer">Engagement actif : </span>Participez activement à la conception et à la gestion de l'école pour offrir un cadre éducatif enrichissant.</li>
  <li class="listitem"><span class="emphazer">Soutien communautaire : </span>Bénéficiez du soutien de notre association et de l'expertise de ses membres pour concrétiser ce projet éducatif.</li>
  <li class="listitem"><span class="emphazer">Impact local : </span>Contribuez à renforcer notre communauté en offrant une alternative éducative de qualité, accessible à tous.</li>
</ul>
<p class="maindescription">Nous sommes en train de constituer un groupe de parents et de membres fondateurs et nous vous invitons chaleureusement à nous rejoindre dans cette aventure. Votre implication est essentielle pour faire de cette initiative une réalité.</p> 
<h3 class="descriptionsubtitle">Comment pouvez-vous participer ?</h3>

<p class="maindescription">Nous recherchons des parents et des membres motivés pour rejoindre notre équipe, apporter leurs idées et leurs compétences afin de faire de notre école hors contrat un lieu d'apprentissage exceptionnel.</p>
<p class="maindescription">Mais ce n'est pas tout...</p>
<P class="maindescription">Nous sommes également à la recherche du lieu qui nous servira de point de départ le temps que l'école sorte de terre.</p>
<p class="maindescription">Si vous avez connaissance d'un lieu qui pourrait correspondre à nos besoins, n'hésitez pas à nous contacter pour nous en faire part.</p>
<h3 class="descriptionsubtitle">Restez informés et prêts à vous impliquer</h3>
<p class="maindescription">Pour plus de détails et pour manifester votre intérêt, n'hésitez pas à nous contacter par email à l'adresse suivante : <span class="link"><NuxtLink to="mailto:direction@lamontgolfiere.fr">direction@lamontgolfiere.fr</NuxtLink></span>. Vous y trouverez les dernières actualités sur le projet et pourrez vous inscrire pour recevoir des informations sur les prochaines étapes, y compris l'organisation de réunions à venir.</p>

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