<template>
  <UCard class="ucardwrapper">
    <template #header>
      <h2 class="ucardtitle">
       Nos objectifs
      </h2>
    </template>
    <div class="ucardtextwrapper">
      <h3 class="ucardsubtitle">Promouvoir la Prévention</h3>
      <p class="ucardtext">
        La prévention sera au cœur de notre démarche. 
        Nous proposerons des ateliers et des campagnes de vulgarisation pour sensibiliser 
        la population aux bonnes pratiques de santé. Nos initiatives couvriront divers aspects du bien-être, 
        allant de la nutrition à la gestion du stress, en passant par l'exercice physique. 
        L'objectif sera de donner à chacun les outils nécessaires pour maintenir une bonne santé de manière autonome.
      </p>
      <h3 class="ucardsubtitle">Faciliter l'Accès aux Praticiens</h3>
      <p class="ucardtext">
        Nous nous engagerons à rapprocher les praticiens de santé des citoyens. 
        En facilitant l'accès aux consultations et en encourageant les échanges, 
        nous aiderons les habitants à prendre en main leur santé de manière proactive. 
        Des consultations de proximité seront mises en place pour que les habitants, 
        notamment ceux des zones rurales comme la notre, puissent consulter facilement des professionnels de santé. </p>
     
    </div>
  </UCard>
</template>
<script setup>

</script>
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

</style>