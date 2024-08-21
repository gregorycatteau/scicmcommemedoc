<template>
  <UCard class="ucardwrapper">
    <template #header>
      <h2 class="ucardtitle">
       La santé de tous : un enjeu majeur pour notre territoire
      </h2>
    </template>
    <div class="ucardtextwrapper">
      <h3 class="ucardsubtitle">Le contexte et les enjeux</h3>
      <p class="ucardtext">
        Chez M Comme Médoc, nous croyons fermement que le bien-être et la santé sont les piliers d'une communauté épanouie. 
        Notre pôle Santé et Bien-être se concentrera sur la promotion de la prévention et du maintien 
        en bonne santé grâce à une approche holistique. Nous viserons à réduire la distance entre les 
        praticiens de santé et les citoyens de notre territoire et à rendre les concepts de prévention accessibles à tous.
      </p>
      <p class="ucardtext">
        Nous sommes convaincus que la santé est un droit fondamental et que chacun devrait avoir accès à des soins de qualité. 
        C'est pourquoi nous travaillons en étroite collaboration avec les professionnels de santé locaux pour offrir des services de qualité 
        et adaptés aux besoins de chacun. Nous croyons également que la santé ne se limite pas à l'absence de maladie, mais qu'elle englobe 
        également le bien-être physique, mental et social. C'est pourquoi nous proposons une approche globale de la santé qui prend en compte
        tous les aspects de la vie quotidienne. </p>
     
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