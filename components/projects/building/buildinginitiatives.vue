<template>
  <UCard class="ucardwrapper">
    <template #header>
      <h2 class="ucardtitle">
        Nos initiatives principales
      </h2>
    </template>
    <div class="ucardtextwrapper">
      <h3 class="ucardsubtitle">Projets de Logement Durable</h3>
      <p class="ucardtext">
        Nos projets de logement durable viseront à fournir des habitations de qualité tout en respectant l'environnement. Ces projets incluront :
      </p>
      <ul class="ucardlist">
        <li class="ucardlistitem">
          <span class="emphazer">Éco-Quartiers : </span>
          Développement de quartiers écologiques intégrant des maisons passives, des espaces verts, et des infrastructures pour les mobilités douces (vélos, piétons).
        </li>
        <li class="ucardlistitem">
          <span class="emphazer">Rénovation Énergétique : </span>
          Programmes de rénovation pour améliorer l'efficacité énergétique des logements existants, réduire les coûts énergétiques et augmenter le confort des habitants.
        </li>
        <li class="ucardlistitem">
          <span class="emphazer">Construction en Matériaux Écologiques : </span>
          Utilisation de matériaux de construction durables et recyclables pour minimiser l'impact environnemental.
        </li>
      </ul>
      <h3 class="ucardsubtitle">Espaces Partagés et Collaboratifs</h3>
      <p class="ucardtext">
        Pour encourager la solidarité et l'entraide, nous mettrons en place des espaces partagés dans nos projets de logement. Ces espaces comprendront :
      </p>
      <ul class="ucardlist">
        <li class="ucardlistitem">
          <span class="emphazer">Jardins Collectifs : </span>
          Espaces verts où les résidents pourront cultiver des légumes, des fruits et des plantes aromatiques ensemble, favorisant ainsi la convivialité et l'autosuffisance alimentaire.
        </li>
        <li class="ucardlistitem">
          <span class="emphazer">Salles Communes : </span>
          Espaces polyvalents pour des activités communautaires, des réunions, des ateliers et des événements culturels.
        </li>
        <li class="ucardlistitem">
          <span class="emphazer">Cuisines Partagées : </span>
          Espaces de cuisine collectifs pour encourager le partage de repas et les interactions sociales.
        </li>
      </ul>
      <h3 class="ucardsubtitle">Programmes d'Accompagnement</h3>
      <p class="ucardtext">
        Nous proposerons des programmes d'accompagnement pour aider les habitants à s'installer et à s'intégrer dans leur nouvel environnement. Ces programmes incluront :
      </p>
      <ul class="ucardlist">
        <li class="ucardlistitem">
          <span class="emphazer">Ateliers de Sensibilisation : </span>
          Sessions pour informer les résidents sur les pratiques de vie durable, la gestion des déchets, et les économies d'énergie.
        </li>
        <li class="ucardlistitem">
          <span class="emphazer">Soutien à la Mobilité : </span>
          Aide à la mobilité douce avec des services de prêt de vélos, des navettes partagées et des informations sur les transports publics.
        </li>
        <li class="ucardlistitem">
          <span class="emphazer">Services de Médiation : </span>
          Assistance pour résoudre les conflits et promouvoir une coexistence harmonieuse entre les résidents.
        </li>
      </ul>
      <h3 class="ucardsubtitle">Collaboration avec les Acteurs Locaux</h3>
      <p class="ucardtext">
        Nous travaillerons en étroite collaboration avec les collectivités locales, les associations et les entreprises pour développer des projets d'habitat solidaire. Ces partenariats permettront de mobiliser les ressources nécessaires et d'assurer la viabilité et le succès de nos initiatives.
      </p>
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
.ucardlist {
  @apply list-disc pl-4 sm:pl-8 p-2 sm:p-4;
}
.ucardlistitem {
  @apply text-base sm:text-lg md:text-xl text-justify indent-4 sm:indent-8 p-2 sm:p-4;
  font-family: "Lora", serif;
}
.emphazer {
  @apply font-bold;
}
</style>
