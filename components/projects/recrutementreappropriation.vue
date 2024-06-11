<template >
  <UCard class="mainheaderwrapper">
    <template #header>
      <div class="headerwrapper" @click="CloseSlideover">
        <p class="wrappertitle">fermer</p>
        <UIcon name="i-charm-cross" class="icon" dynamic></UIcon>
      </div> 

    </template>
    <h1 class="maintitle">(Ré)approprions nous ensemble le territoire par le savoir</h1>
<h2 class="mainsubtitle">Préservons nos savoirs et créons en d'autres. </h2>
<p class="maindescription">Sur notre territoire vous êtes nombreux à disposer de connaissances précieuses dans des domaines particuliers, grâce auxquels vous avez déveoppé une certaine forme de résilence et d'autonomie.</p>
<p class="maindescription">Ces connaissances sont précieuses et méritent d'être partagées, comprises et valorisées.</p>
<h3 class="descriptionsubtitle">Venez donc les partager avec ceux qui ont besoin d'apprendre ou de ré-apprendre.</h3>
<ul class="listofitems">
  <li class="listitem"><span class="emphazer">Mettez en valeur vos compétences : </span> Nous créerons le cadre qui vous permettra de pleinement transmettre vos compétences à des personnes vraiment motivées pour apprendre. </li>
  <li class="listitem"><span class="emphazer">Intégrez-vous dans une dynamique pédagogique unique :</span> Nos apprenants savent combien ce que vous avez à partager est précieux. Après tout, vous l'avez acquis à la force du poignet, non ? Nos apprenants ne sont pas des "étudiants" mais bel et bien des humains qui souhaitent personnellement retirer de votre expertise des aspects pratico-pratiques à mettre en oeuvre sans délai dans leur vie de tous les jours.</li>
  <li class="listitem"><span class="emphazer">Travailler solidairement  :</span> Au delà de la rémunération que vous percevrez, c'est une véritable logique de réappropriation que vous intégrez.</li>
</ul>
<h3 class="descriptionsubtitle">Nos critères de sélection :</h3>
<ul class="listofitems">
  <li class="listitem"><span class="emphazer">Maitrise et passion de votre sujet :</span> Nous recherchons des instructeurs qui connaissent VRAIMENT leur sujet.</li>
  <li class="listitem"><span class="emphazer">Le goût de transmettre :</span> On ne vous demandera pas de partager vos coins à cèpes ! Mais d'expliquer à nos apprenants comment trouver les leurs...</li>
  <li class="listitem"><span class="emphazer">Une attitude bienveillante :</span> Parce que vous allez proposer de partager vos connaissances à des apprenants qui n'ont ni votre expertise ni votre recul...</li>
  <li class="listitem"><span class="emphazer">Adhésion aux valeurs de M Comme Médoc :</span> Vous savez que le partage du savoir est la clé pour un territoire respectueuxdu vivant, plus solidaire et résilient.</li>
</ul>
<h3 class="descriptionsubtitle">Ce que nous offrons :</h3>
<ul class="listofitems">
  <li class="listitem"><span class="emphazer">Un rôle moteur dans la création de notre projet :</span> Participez activement à la conception et au développement de notre école, en apportant votre expertise et votre passion.</li>
  <li class="listitem"><span class="emphazer">Un environnement de travail collaboratif et bienveillant :</span> Intégrez une équipe où chaque membre est valorisé pour ses contributions uniques.</li>
  <li class="listitem"><span class="emphazer">Opportunités de développement personnel et professionnel :</span> Bénéficiez de formations et de soutien pour votre croissance personnelle et professionnelle, en accord avec notre vision éducative.</li>
</ul>
<h3 class="descriptionsubtitle">Comment rejoindre notre équipe ?</h3>
<p class="maindescription">Si vous êtes prêt à vous engager dans un projet significatif et à contribuer à façonner l'avenir de l'éducation, envoyez-nous un mail à l'adresse suivante : <span class="link"><NuxtLink to="mailto:direction@mcommemedoc.fr">direction@mcommemedoc.fr</NuxtLink></span>. Expliquez-nous ce qui vous motive à nous rejoindre et ce que vous pensez pouvoir apporter.</p>
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