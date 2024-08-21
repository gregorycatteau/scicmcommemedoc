<template>
  <div class="wrappercontentdev">
    <ProjectsEconomyFirstimagelayout />
    <div class="wrappercontenttext">
      <h3 class="ucardsubtitle">
        Le marché local vu par les consommateurs
      </h3>
      <ul class="ucardlist">
        <li class="ucardlistitem">
          <span class="emphazer">L'éloignement entre vous et les producteurs :</span>
          Notre territoire n'a pour l'instant pas de lieu central
          permettant de valoriser les productions locales. Faire ses
          courses sur les marchés, se rendre sur les lieux de production
          est une démarche pas toujours facile à assumer du fait des
          horaires, des distances et des spécificités des produits que
          l'on peut trouver individuellement auprès de chaque producteur.
        </li>
        <li class="ucardlistitem">
          <span class="emphazer">Le manque de choix des produits :</span>
          Vous êtes nombreux à mettre en avant le fait que les solutions
          proposées en l'état ne vous permettent pas d'effectuer des choix
          de consommation efficaces du fait de l'absence d'une offre
          regroupée. Entre raison et envie, pas facile de pouvoir
          effectuer des choix satisfaisants...
        </li>
        <li class="ucardlistitem">
          <span class="emphazer">Un manque important de lisibilité :</span>
          Il vous est globalement difficile de vous repérer dans l'offre
          proposée et de savoir véritablement distinguer les démarches à
          très forte valeur environnementales et sociales des entreprises
          commerciales plus classiques.
        </li>
        <li class="ucardlistitem">
          <span class="emphazer">Un surcoût potentiel :</span> Il y a une
          réalité intangible que vous soulevez tous et qui nous démontre
          votre haut niveau de conscience de la situation actuelle. On ne
          produit pas des légumes en utilisant des techniques de
          production propres, en respectant les sols et en travaillant la
          terre tous les jours qu'en mettant en place des fermes immenses
          à l'autre bout du monde et qui emploient des techniques pour le
          moins discutables.
        </li>
      </ul>
      
    </div>
    
  </div><p class="ucardtext">
        Ces constats sont parfaitement encourageants puisqu'ils dénotent à
        la fois une conscience aigue de la situation et une envie sincère
        de voir les choses évoluer sur notre territoire.
      </p>
</template>

<script setup lang="ts">

</script>

<style scoped>
.wrappercontentdev {
  @apply grid grid-rows-1 gap-2 sm:gap-4 md:gap-6;
  @apply sm:grid-cols-2 md:grid-cols-2;
}

.wrappercontenttext {
  @apply p-2 sm:p-4 md:p-6;
}

.ucardsubtitle {
  @apply text-4xl  font-semibold text-white text-center p-2 sm:p-4;
  font-family: "Lora", serif;
}

.ucardlist {
  @apply list-disc pl-4 sm:pl-8 p-2 sm:p-4 list-outside;
}

.ucardlistitem {
  @apply text-base  text-justify indent-4 sm:indent-8 p-2 sm:p-4 text-white;
  font-family: "Lora", serif;
}

.emphazer {
  @apply font-bold;
}

.ucardtext {
  @apply text-2xl text-center indent-4 sm:indent-8 text-white font-semibold mb-10;
  font-family: "Lora", serif;
}
</style>
