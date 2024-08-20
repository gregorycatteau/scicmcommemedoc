<template >
  <UCard class="mainheaderwrapper">
    <template #header>
      <div class="headerwrapper" @click="CloseSlideover">
        <p class="wrappertitle">fermer</p>
        <UIcon name="i-charm-cross" class="icon" dynamic></UIcon>
      </div> 

    </template>
    <h1 class="maintitle">Venez Créer Votre Emploi avec Nous : Rejoignez le Projet Innovant de Notre Crèche Parentale</h1>
    <h2 class="mainsubtitle">Une Opportunité Unique de Construire Ensemble un Avenir Éducatif Meilleur</h2>
    <p class="maindescription">Dans le cadre du lancement de notre nouvelle crèche parentale, soutenue par la SCIC M Comme Médoc, nous cherchons à former une équipe fondatrice pas comme les autres. Nous recherchons des individus non seulement motivés par une carrière, mais animés par la volonté de participer à une aventure humaine et éducative enrichissante.</p>
    
    <h3 class="descriptionsubtitle">Nous Recherchons des Personnes qui Veulent :</h3>
    <ul class="listofitems">
      <li class="listitem"><span class="emphazer">Co-créer leur Poste : </span> Engagez-vous dans un projet où votre rôle sera façonné par vos idées, votre créativité et votre engagement envers notre mission.</li>
      <li class="listitem"><span class="emphazer">Développer une Approche Éducative Innovante : </span> Contribuez activement à la création d'un environnement éducatif basé sur le respect, l'empathie et la communication non-violente.</li>
      <li class="listitem"><span class="emphazer">Travailler selon des Valeurs de Solidarité et de Résilience : </span> Rejoignez une équipe qui valorise la solidarité, la durabilité et le respect de toutes les formes de vie.</li>
    </ul>
    <h3 class="descriptionsubtitle">Profil Idéal:</h3>
    <ul class="listofitems">
      <li class="listitem"><span class="emphazer">Passion pour l'Éducation et le Développement de la Petite Enfance :  </span> Vous êtes passionné par l'éducation et désireux de contribuer à un projet qui va au-delà du simple cadre de la crèche traditionnelle.</li>
      <li class="listitem"><span class="emphazer">Aptitudes à l'Adaptation et à l'Innovation : </span> Vous êtes flexible, prêt à apprendre et à vous adapter dans un environnement dynamique où les parents jouent un rôle actif.</li>
      <li class="listitem"><span class="emphazer">Fortes Compétences en Communication et en Collaboration : </span> Vous êtes capable de communiquer efficacement et avec bienveillance au sein d'une équipe diverse.</li>
      <li class="listitem"><span class="emphazer">Alignement avec les Valeurs Éthiques de la SCIC : </span> Vous partagez nos valeurs de solidarité, d'écologie et d'engagement communautaire.</li>
    </ul>
    <h3 class="descriptionsubtitle">Ce que Nous Offrons :</h3>
    <ul class="listofitems">
      <li class="listitem"><span class="emphazer">Un Rôle Actif dans la Création du Projet : </span> Soyez au cœur de la création et du développement de notre crèche, en apportant votre touche personnelle et professionnelle.</li>
      <li class="listitem"><span class="emphazer">Un Environnement de Travail Collaboratif et Soutenant : </span> Intégrez une équipe où chaque membre est valorisé pour ses contributions uniques.</li>
      <li class="listitem"><span class="emphazer">Opportunités de Croissance Personnelle et Professionnelle : </span> Bénéficiez de formations et de développement professionnel en lien avec nos valeurs et notre vision éducative.</li>
    </ul>
    <h3 class="descriptionsubtitle">Comment Rejoindre Notre Équipe ?</h3>
    
      <p class="maindescription">Si vous êtes prêt à vous investir dans un projet significatif et à co-créer votre futur emploi, envoyez-nous votre lettre de motivation et votre CV à l'adresse mail suivante : <span class="link"><NuxtLink to="mailto:direction@mcommemedoc.fr">direction@mcommemedoc.fr</NuxtLink></span> <br>. Expliquez-nous pourquoi vous souhaitez participer à ce projet et comment vos valeurs et votre vision correspondent à celles de notre crèche parentale.</p>
      
    
    
    
    <h3 class="descriptionsubtitle">Rejoignez-nous pour façonner l'avenir de l'éducation dans notre territoire !</h3>
    
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