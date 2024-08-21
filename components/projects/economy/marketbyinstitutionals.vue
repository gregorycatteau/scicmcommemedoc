<template>
  <div class="ucardtextwrapper">
    <h3 class="ucardsubtitle">Le marché local vu par les institutionnels</h3>
    <ul class="ucardlist">
      <li class="ucardlistitem">
        <span class="emphazer">Une insuffisance des infrastructures :</span>
        Le manque d'infrastructures appropriées pour le stockage, la transformation et la distribution des produits locaux peut limiter leur accès aux marchés. Cela inclut des installations de stockage frigorifique, des abattoirs locaux, et des systèmes de transport adaptés.
      </li>
      <li class="ucardlistitem">
        <span class="emphazer">Des réglementations peu adaptées :</span>
        Les institutions locales sont souvent confrontées à des cadres législatifs et réglementaires qui ne distinguent pas les spécificités des petites productions locales des grandes industries. Ces réglementations peuvent parfois représenter un obstacle significatif pour les petits producteurs souhaitant entrer sur le marché local.
      </li>
      <li class="ucardlistitem">
        <span class="emphazer">Un manque d'allocation ciblée des financements :</span>
        Les programmes de subventions et de financement ne répondent pas toujours aux besoins spécifiques des petites entreprises et des producteurs locaux. Les critères d'obtention souvent rigides et la complexité administrative peuvent limiter l'accès à ces ressources essentielles.
      </li>
      <li class="ucardlistitem">
        <span class="emphazer">Une concurrence qui ne devrait pas en être une :</span>
        Comme explicité plus haut, le manque de distinction entre les acteurs implique de fait une concurrence entre des acteurs qui n'ont rien à voir. Il y a autant de rapport entre une grande surface et un maraicher local qu'entre un silex et une grenouille ! Mais pour autant... Le silex continue de bénéficier de la nourriture de la grenouille et cette dernière peine à croasser de joie...
      </li>
      <li class="ucardlistitem">
        <span class="emphazer">Un manque de coordination :</span> La stratification et la compartimentation des différents acteurs institutionnels sont encore malheureusement trop souvent à l'origine de doublons et d'initiatives contradictoires. La réévaluation et le réajustement sont des nécessités rendues difficiles dans des contextes socio économiques en tension sur nos territoires.
      </li>
    </ul>
  </div>
</template>

<style scoped>
.ucardtextwrapper {
  @apply flex flex-col gap-2 sm:gap-4 md:gap-6;
}
.ucardsubtitle {
  @apply text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-white text-center p-2 sm:p-4;
  font-family: "Lora", serif;
}
.ucardlist {
  @apply list-disc pl-4 sm:pl-8 p-2 sm:p-4;
}
.ucardlistitem {
  @apply text-lg text-justify indent-4 sm:indent-8 p-2 sm:p-4 text-white;
  font-family: "Lora", serif;
}
.emphazer {
  @apply font-bold text-scicyellow;
}
</style>
