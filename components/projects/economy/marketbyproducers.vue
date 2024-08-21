<template>
  <div class="wrappercontentdev2">
    <div class="wrappercontenttext">
      <h3 class="ucardsubtitle">
        Le marché local vu par les producteurs
      </h3> <img src="/Lucas.png" alt="Lucas" class="image" />
      <ul class="ucardlist">
        <li class="ucardlistitem">
          <span class="emphazer">Des difficultés logistiques :</span>
          Produire des produits locaux en adoptant des pratiques vertueuses nécessite de valoriser la terre et le vivant avant tout. Ceci oblige à une grande disponibilité pour tout ce qui concerne la production. Et donc, de fait, nos producteurs sont moins disponibles pour la commercialisation de leurs produits et leur logistique. Le stockage et la distribution sont donc impactés.
        </li>
        <li class="ucardlistitem">
          <span class="emphazer">Un coût de production cohérent mais peu valorisé :</span>
          Les producteurs locaux peuvent avoir des coûts de production plus élevés comparés aux grandes exploitations en raison de l'absence d'économies d'échelle. Cela inclut les coûts des intrants, de la main-d'œuvre, et parfois des pratiques agricoles plus durables qui peuvent être plus coûteuses.
        </li>
        <li class="ucardlistitem">
          <span class="emphazer">Un manque d'accès aux financements :</span>
          L'accès à des solutions financières peut être limité, ce qui rend difficile l'investissement dans des équipements modernes ou dans l'expansion des activités. Les institutions financières peuvent être réticentes à prêter aux petites exploitations en raison de la perception d'un risque plus élevé.
        </li>
        <li class="ucardlistitem">
          <span class="emphazer">Des barrières réglementaires :</span>
          Les producteurs peuvent également se heurter à des réglementations complexes ou à des exigences de certification qui peuvent être difficiles à respecter sans les ressources adéquates. Cela inclut les réglementations sanitaires et phytosanitaires, les normes de qualité, et les certifications biologiques ou environnementales. Dans de nombreux cas, ces barrières sont simplement incompatibles avec des axes de développement souhaitables.
        </li>
        <li class="ucardlistitem">
          <span class="emphazer">Un manque de visibilité :</span>
          Les producteurs locaux peuvent également rencontrer des difficultés à se faire connaître et à atteindre les consommateurs locaux. La concurrence avec les grandes chaînes de distribution et les produits importés peut rendre difficile la mise en valeur des produits locaux.
        </li>
      </ul>
    </div>
   
     
    
  </div>
</template>

<style scoped>
.wrappercontentdev2 {
  @apply flex flex-row;
}
.wrapperimagecontainer2 {
  @apply p-2 sm:p-4 md:p-6 rounded-lg shadow-2xl shadow-inner hover:scale-105;
  background-image: url("/Lucas.png");
  background-size: cover;
  background-position: center;
}
.image {
  @apply w-64 mx-6 rounded-lg shadow-lg float-right object-cover object-center mb-0 [clip-path:polygon(0%_0%,55%_100%,85%_0%,100%_55%)] [shape-outside:polygon(0%_0%,55%_100%,85%_0%,100%_55%)];
}
.ucardsubtitle {
  @apply text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-white text-center p-2 sm:p-4;
  font-family: "Lora", serif;
}
.ucardlist {
  @apply list-disc pl-4 sm:pl-8 p-2 sm:p-4;
}
.ucardlistitem {
  @apply text-base p-2 sm:p-4 text-white;
  font-family: "Lora", serif;
}
.emphazer {
  @apply font-bold;
}
.ucardtext {
  @apply text-base sm:text-lg md:text-xl text-justify indent-4 sm:indent-8;
  font-family: "Lora", serif;
}
</style>
