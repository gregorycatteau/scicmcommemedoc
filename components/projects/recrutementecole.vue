<template >
  <UCard class="mainheaderwrapper">
    <template #header>
      <div class="headerwrapper" @click="CloseSlideover">
        <p class="wrappertitle">fermer</p>
        <UIcon name="i-charm-cross" class="icon" dynamic></UIcon>
      </div> 

    </template>
    <h1 class="maintitle">Nous recrutons nos futurs professionnels encadrants</h1>
<h2 class="mainsubtitle">Bâtissons ensemble l'Éducation de Demain</h2>
<p class="maindescription">Dans le cadre du lancement de l'école La Montgolfière, nous sommes à la recherche de professionnel(le)s investis pour former notre équipe fondatrice.</p>
<p class="maindescription">Nous recherchons des humain(e)s motivé(e)s pour s'impliquer vraiment dans une aventure éducative et humaine enrichissante.</p>
<h3 class="descriptionsubtitle">Nous Recherchons des humain(e)s qui Veulent :</h3>
<ul class="listofitems">
  <li class="listitem"><span class="emphazer">Contribuer à la Création de leur Poste :</span> Parce que l'on croit au bien être professionnel, nous vous laisserons une grande autonomie pour créer le poste que vous ambitionnez.</li>
  <li class="listitem"><span class="emphazer">Développer une Approche Pédagogique Innovante :</span> Steiner, Montessorri, Forrest School... Ou sans doute un mélange subtil et parfaitement adapté à l'éducation de nos enfants... Nous voulons bâtir avec vous, selon vous pour le bien être de nos enfants.</li>
  <li class="listitem"><span class="emphazer">Travailler selon des Valeurs d'Échange et de Collaboration :</span> Vous intégrerez une école où parents, enfants et enseignants ouvrent de concert pour créer une symbiose éducative vectrice d'harmonie et de paix.</li>
</ul>
<h3 class="descriptionsubtitle">Profil Idéal :</h3>
<ul class="listofitems">
  <li class="listitem"><span class="emphazer">Passion pour l'Éducation et le Développement des Enfants :</span> Vous êtes passionné par l'éducation et désireux de contribuer à un projet novateur qui repousse les limites de l'école traditionnelle.</li>
  <li class="listitem"><span class="emphazer">Aptitudes à l'Adaptation et à l'Innovation :</span> Vous êtes flexible, prêt à apprendre et à vous adapter dans un environnement dynamique où les membres de la communauté jouent un rôle actif.</li>
  <li class="listitem"><span class="emphazer">Compétences en Communication et en Collaboration :</span> Vous communiquez efficacement et avec bienveillance au sein d'une équipe diversifiée.</li>
  <li class="listitem"><span class="emphazer">Adhésion aux Valeurs de l'Association La Montgolfière et de M Comme Médoc:</span> Vous partagez nos valeurs de solidarité, d'écologie et d'engagement communautaire.</li>
</ul>
<h3 class="descriptionsubtitle">Ce que Nous Offrons :</h3>
<ul class="listofitems">
  <li class="listitem"><span class="emphazer">Un Rôle moteur dans la Création de Notre Projet :</span> Participez activement à la conception et au développement de notre école, en apportant votre expertise et votre passion.</li>
  <li class="listitem"><span class="emphazer">Un Environnement de Travail Collaboratif et Bienveillant :</span> Intégrez une équipe où chaque membre est valorisé pour ses contributions uniques et où le bien-être de chacun est une priorité.</li>
  <li class="listitem"><span class="emphazer">Opportunités de Développement Personnel et Professionnel :</span> Bénéficiez de formations et de soutien pour votre croissance personnelle et professionnelle, en accord avec nos valeurs et notre vision éducative.</li>
</ul>
<h3 class="descriptionsubtitle">Comment Rejoindre Notre Équipe ?</h3>

<p class="maindescription">Si vous êtes prêt à vous engager dans un projet significatif et à contribuer à façonner l'avenir de l'éducation, envoyez-nous votre lettre de motivation et votre CV à l'adresse suivante : <span class="link"><NuxtLink to="mailto:direction@lamontgolfiere.fr">direction@lamontgolfiere.fr</NuxtLink></span>. Expliquez-nous ce qui vous motive à rejoindre notre école hors contrat et comment vos valeurs et vos aspirations correspondent à notre vision éducative.</p>

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
    @apply text-lg text-justify indent-8 list-disc;
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