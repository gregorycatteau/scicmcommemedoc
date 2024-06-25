<template>
  <UCard class="ucardwrapper">
    <template #header>
      <h2 class="ucardtitle">
        Nos initiatives principales
      </h2>
    </template>
    <div class="ucardtextwrapper">
      <h3 class="ucardsubtitle">Ateliers de Prévention</h3>
      <p class="ucardtext">
        Nos ateliers de prévention seront conçus pour informer et éduquer les habitants sur les 
        pratiques de santé holistiques. Ces sessions interactives couvriront des thèmes tels que :
      </p>
      <ul class="ucardlist">
        <li class="ucardlistitem">
          <span class="emphazer">Nutrition et Alimentation : </span>
          Apprendre à manger sainement en utilisant des produits locaux et de saison. 
          Nous proposerons des ateliers de cuisine, des conseils diététiques et des informations 
          sur les bénéfices des aliments bio et locaux.
        </li>
        <li class="ucardlistitem">
          <span class="emphazer">Exercice Physique : </span>
          Programmes d'activité physique adaptés à tous les âges et niveaux de forme. 
          Des cours de fitness, des séances de yoga, et des randonnées seront organisés régulièrement.
        </li>
        <li class="ucardlistitem">
          <span class="emphazer">Gestion du Stress :</span>
          Techniques de relaxation et de méditation en pleine conscience pour une meilleure santé mentale. 
          Nous offrirons des ateliers de méditation, 
          des exercices de respiration et des séances de relaxation guidée.
        </li>
        <li class="ucardlistitem">
          <span class="emphazer">Hygiène de Vie : </span>
          Conseils pour maintenir une bonne hygiène personnelle et environnementale. 
          Des formations sur l'hygiène quotidienne, la gestion de l'environnement domestique 
          et des conseils sur les produits naturels seront disponibles.
        </li>
      </ul>
      <h3 class="ucardsubtitle">Consultations de Proximité</h3>
      <p class="ucardtext">
        Nous organiserons des journées de consultation de proximité 
        où des praticiens se déplaceront dans différentes communes 
        pour offrir des consultations gratuites ou à tarif réduit. 
        Cette initiative visera à rendre les soins de santé plus accessibles, 
        surtout dans les zones rurales. Des médecins, des naturopathes, 
        des kinésithérapeutes et d'autres professionnels de santé participeront à ces journées.
      </p>
      <h3 class="ucardsubtitle">Clubs de Santé et Bien-Être</h3>
      <p class="ucardtext">
        Les clubs de santé et bien-être seront des espaces communautaires 
        où les habitants pourront se réunir pour pratiquer des activités 
        physiques, des loisirs créatifs et des activités de bien-être. 
        Ces clubs offriront un espace de socialisation, de partage et de soutien 
        pour promouvoir la santé et le bien-être de tous.
        Ces clubs proposeront diverses activités telles que : </p>
        <ul class="ucardlist">
        <li class="ucardlistitem">
          <span class="emphazer">Clubs de Marche : </span>
          Randonnées et marches collectives pour encourager l'activité physique. 
          Ces clubs organiseront des sorties régulières dans la nature pour promouvoir 
          l'exercice en plein air.
        </li>
        <li class="ucardlistitem">
          <span class="emphazer">Groupes de Soutien :  </span>
          Espaces de discussion et de soutien pour les personnes soucieuses de leur maintien en santé. 
          Ces groupes offriront un espace sûr pour partager des expériences.

        </li> 
        </ul>
        <h3 class="ucardsubtitle">Programmes de sensibilisation</h3>
        <p class="ucardtext">
          Pour rendre la prévention et le bien-être accessibles à tous, 
          nous lancerons des campagnes de vulgarisation sur des sujets de santé holistiques. 
          Nos supports incluront : </p>
          <ul class="ucardlist">
        <li class="ucardlistitem">
          <span class="emphazer">Conférences et Séminaires :</span>
          Événements organisés pour sensibiliser et informer sur les pratiques de santé préventives. 
          Des experts seront invités à partager leurs connaissances et à répondre aux questions du public.
        </li>
        <li class="ucardlistitem">
          <span class="emphazer">Articles en Ligne :   </span>
          Contenus éducatifs publiés sur notre site web pour une large diffusion. 
          Nous publierons régulièrement des articles détaillés et des guides pratiques 
          sur différents aspects de la santé.

        </li> 
        
        </ul>
    </div>
  </UCard>
</template>

<style scoped>
.ucardwrapper {
  @apply bg-white shadow-xl rounded-lg p-4 sm:p-6 md:p-8;
}
.ucardtitle {
  @apply text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold ring ring-scicgreen text-center p-6 text-scicgreen rounded-3xl shadow-lg;
  font-family: "Playfair Display", serif;
}
.ucardtextwrapper {
  @apply flex flex-col gap-2 sm:gap-4 md:gap-6;
}
.ucardtext {
  @apply text-base sm:text-lg md:text-xl text-justify indent-4 sm:indent-8;
  font-family: "Lora", serif;
}
.ucardsubtitle {
  @apply text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-scicgreen text-center p-2 sm:p-4;
  font-family: "Lora", serif;
}
.ucardlist {
  @apply list-disc pl-4 sm:pl-8 p-2 sm:p-4;
}
.ucardlistitem {
  @apply text-base sm:text-lg md:text-xl text-justify indent-4 sm:indent-8 p-2 sm:p-4;
  font-family: "Lora", serif;
}
</style>
