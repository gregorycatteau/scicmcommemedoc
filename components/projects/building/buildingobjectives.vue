<template>
  <UCard class="ucardwrapper">
    <template #header>
      <h2 class="ucardtitle">
       Nos objectifs
      </h2>
    </template>
    <div class="ucardtextwrapper">
      <h3 class="ucardsubtitle">Promouvoir l'Habitat Accessible et Durable</h3>
      <p class="ucardtext">
        Nous nous engagerons à développer des solutions de logement qui soient à 
        la fois abordables et respectueuses de l'environnement. Nous proposerons 
        des projets qui intégreront des pratiques de construction durable, 
        l'utilisation de matériaux écologiques et des solutions énergétiques renouvelables. 
        Notre objectif sera de rendre l'habitat accessible à tous, tout en minimisant 
        l'empreinte écologique.
      </p>
      <h3 class="ucardsubtitle">Favoriser la Cohésion Sociale</h3>
      <p class="ucardtext">
        L'habitat solidaire sera conçu pour encourager les interactions 
        sociales et le soutien mutuel entre les résidents. 
        Nous créerons des espaces partagés où les habitants pourront se rencontrer, 
        échanger et collaborer sur des projets communs. Ces espaces contribueront à 
        renforcer le sentiment d'appartenance et de communauté. </p>
     
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