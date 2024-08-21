<template>
  <UCard class="ucardwrapper">
    <template #header>
      <h2 class="ucardtitle">
        Le constat de départ : <br />Un verre à moitié vide ou à moitié plein
      </h2>
    </template>
    <div class="ucardtextwrapper">
      <h3 class="ucardsubtitle">Remerciements préliminaires</h3>
      <p class="ucardtext">
        Avant toute chose, nous tenions à remercier tous ceux, producteurs et
        consommateurs qui nous permettent d'analyser plus finement les
        réalités de notre territoire en donnant quelques minutes de leur temps
        pour remplir :
      </p>
      <ul class="ucardlist">
        <li class="ucardlistitem">
          Le questionnaire à destination des consommateurs locaux
        </li>
        <li class="ucardlistitem">
          Le questionnaire à destination des producteurs locaux
        </li>
      </ul>
      <p class="ucardtext">
        Ces questionnaires nous permettent de mieux comprendre les attentes et
        les besoins de chacun et de mettre en lumière les forces et les
        faiblesses de notre territoire.
      </p>
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
