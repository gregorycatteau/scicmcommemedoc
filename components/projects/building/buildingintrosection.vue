<template>
  <UCard class="ucardwrapper">
    <template #header>
      <h2 class="ucardtitle">
       Des logements sains et accessibles pour tous
      </h2>
    </template>
    <div class="ucardtextwrapper">
      <h3 class="ucardsubtitle">Des disparités marquées</h3>
      <p class="ucardtext">
        Chez M Comme Médoc, nous croyons que l'habitat est un élément fondamental 
        pour le bien-être et l'épanouissement des habitants du Médoc. 
        Notre pôle Habitat Solidaire se concentrera sur la promotion de solutions 
        de logement accessibles, durables et communautaires. Nous viserons à créer 
        des habitats qui favorisent la solidarité, l'entraide et la cohésion sociale.
      </p>
      <p class="ucardtext">
        Nous sommes conscients des disparités marquées en matière de logement dans notre territoire. 
        De nombreux habitants rencontrent des difficultés pour se loger décemment, 
        que ce soit en raison de la précarité de leur situation financière, de l'isolement social 
        ou de l'inadaptation des logements à leurs besoins. 
        C'est pourquoi nous nous engageons à proposer des solutions innovantes et inclusives pour répondre 
        aux besoins de tous les habitants du Médoc. </p>
     
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