<template>
  <div class="space-y-6">
    <!-- Hero Section -->
    <section class="wrapper">
      <h1 class="maintitle">Savoir, Comprendre, Agir</h1>
    </section>

    <!-- UCard for fonctionnement centre de formation -->
    <UCard class="ucardwrapper">
      <template #header>
    
        <h2 class="ucardtitle">Notre centre de (Ré)appropriation du savoir</h2>
      </template>
      <div class="ucardtextwrapper">
        <p class="ucardtext">M Comme Médoc propose un programme de formation innovant, "Basic Formation", structuré autour du triptyque "Savoir, comprendre, agir". Ce programme vise à développer des compétences pratiques essentielles à travers des ateliers ciblés et des cycles de formation graduels, permettant une acquisition progressive et approfondie des savoirs.</p>
        
        

        <h3 class="ucardsubtitle">Format des Formations</h3>
        <ul class="ucardlist">
          <li class="ucardlistitem"><span class="emphazer">Ateliers Isolés :</span> Ces sessions sont conçues pour cibler des compétences spécifiques, permettant aux participants de se concentrer sur des besoins immédiats et pratiques. Chaque atelier dure quelques heures à une journée et est destiné à fournir des compétences concrètes et immédiatement applicables.</li>
          <li class="ucardlistitem"><span class="emphazer">Cycles de Formation :</span> Pour une compréhension plus profonde et une intégration complète des compétences, les cycles de formation abordent tous les aspects d'un sujet de manière graduelle et détaillée. Ces cycles peuvent s'étendre sur plusieurs semaines ou mois, offrant une progression logique du savoir de base vers des compétences plus avancées.</li>
          
        </ul>

        <h2 class="ucardtitle">Thématiques de Formation</h2>
        <h3 class="ucardsubtitle">Formations en Lien avec la Nature</h3>
        <ul class="ucardlist">
          <li class="ucardlistitem"><span class="emphazer">Permaculture :</span> <br> Apprendre les principes de l'agriculture durable qui respecte et utilise les modèles naturels pour créer des systèmes agricoles productifs et auto-suffisants.</li>
          <li class="ucardlistitem"><span class="emphazer">Petit Élevage :</span> Techniques de base pour élever des petits animaux, tels que poules ou lapins, dans un contexte urbain ou rural, pour une autosuffisance alimentaire.</li>
          <li class="ucardlistitem"><span class="emphazer">Bushcraft :</span> Compétences de vie en pleine nature, utilisant les ressources environnantes pour construire un abri, trouver de la nourriture, et plus encore.</li>
          <li class="ucardlistitem"><span class="emphazer">Entretien des Espaces Verts :</span> Gestion et maintenance des jardins et espaces verts, avec des méthodes écologiques et durables.</li>
        </ul>
        <h3 class="ucardsubtitle">Formations en Lien avec le Bien-être au Quotidien</h3>
        <ul class="ucardlist">
          <li class="ucardlistitem"><span class="emphazer">Cuisine :</span> Techniques culinaires pour préparer des repas sains et économiques, avec un accent sur la nutrition et l'utilisation efficace des produits locaux.</li>
          <li class="ucardlistitem"><span class="emphazer">Hygiène et Santé :</span> Pratiques d'hygiène personnelle et de santé préventive pour maintenir un mode de vie sain et équilibré.</li>
          <li class="ucardlistitem"><span class="emphazer">Gestion du Temps :</span> Stratégies pour organiser son emploi du temps, prioriser les tâches, et maximiser la productivité.</li>
          <li class="ucardlistitem"><span class="emphazer">Organiser sa Maison : </span>Stratégies pour maximiser l'espace, réduire le désordre, et créer un environnement domestique harmonieux et fonctionnel.</li>
          <li class="ucardlistitem"><span class="emphazer">Gérer un Budget :</span>Principes de base de la gestion financière personnelle pour optimiser les ressources et planifier ses dépenses de manière efficace.</li>
          
        </ul>
        <h3 class="ucardsubtitle">Formations en Lien avec les Compétences Utiles</h3>
        <ul class="ucardlist">
          <li class="ucardlistitem"><span class="emphazer">Bricolage : </span>Compétences pratiques pour effectuer des réparations courantes et des améliorations domestiques, utilisant des outils simples et des matériaux économiques.</li>
          <li class="ucardlistitem"><span class="emphazer">Petite Mécanique : </span>Notions élémentaires de mécanique pour entretenir et réparer des appareils ménagers et des véhicules, réduisant la dépendance aux services professionnels.</li>  
          <li class="ucardlistitem"><span class="emphazer">Lowtechs : </span>Création et utilisation de technologies simples et accessibles pour résoudre des problèmes quotidiens de manière durable et économique.</li>
        </ul>
      </div>
      
      <h2 class="ucardtitle">Formation des Instructeurs</h2>
      <h3 class="ucardsubtitle">Un système dynamique</h3>
      <p class="ucardtext">Le centre Basic Formation de M Comme Médoc adopte une approche unique dans la formation de ses instructeurs. Chaque instructeur, expert dans son domaine, subit une formation de formateurs rigoureuse. Cela assure que non seulement ils détiennent une expertise approfondie dans leur spécialité, mais qu'ils sont également capables de transmettre efficacement cette connaissance. Cette double compétence garantit une qualité d'enseignement supérieure, essentielle pour un apprentissage efficace et engageant.</p>
      <h2 class="ucardtitle">Dynamique d'Apprentissage</h2>
      <p class="ucardtext">Dans ce système dynamique, chaque personne ayant une compétence reconnue a l'opportunité de devenir instructeur tout en restant apprenant dans d'autres domaines. Ce modèle permet aux participants de constamment évoluer, enrichissant ainsi leur parcours professionnel et personnel. Enseigner devient une extension naturelle de l'apprentissage, où chacun contribue à la communauté en partageant son savoir et en enrichissant son propre développement.</p>
      <template #footer>
        <div class="footerwrapper">
          <button class="button" @click="openExampleReappropriation">Exemples</button>
          <button class="button" @click="openBesoinsReappropriation">Nos besoins</button>
          <button class="button" @click="openRecrutementReappropriation">Recrutement</button>
        </div>
      </template>
    </UCard>

    

  </div>
  <USlideover v-model="slideoverStore.isOpen" class="uslideoverwrapper" >
      <component :is="slideoverStore.contentComponent" />
    </USlideover>
</template>

<script setup>
import exemplereappropriation from '~/components/projects/exemplereappropriation.vue';
import besoinsreappropriation from '~/components/projects/besoinsreappropriation.vue';
import recrutementreappropriation from '~/components/projects/recrutementreappropriation.vue';
// Directement utiliser le store importé sans redéclaration
const slideoverStore = useSlideoverStore();

function openExampleReappropriation() {
  slideoverStore.openSlideover(exemplereappropriation);
}
function openBesoinsReappropriation() {
  slideoverStore.openSlideover(besoinsreappropriation);
}
function openRecrutementReappropriation() {
  slideoverStore.openSlideover(recrutementreappropriation);
}

</script>


<style scoped>
.wrapper {
  @apply bg-family-hero bg-cover bg-center h-64 flex items-center justify-center bg-black bg-opacity-50;
} 

.bg-family-hero {
  background-image: url('/wallpaperreappro.png');
}
.maintitle {
  @apply text-white text-center text-4xl font-bold;
}
.ucardwrapper {
  @apply bg-white shadow-xl rounded-lg p-6;
}

.ucardtitle {
  @apply text-2xl font-semibold bg-scicgreen my-4 text-center text-scicblue p-10 text-5xl rounded-3xl shadow-lg;
  font-family: 'Playfair Display', serif;
}
.ucardtextwrapper {
  @apply flex flex-col gap-4;
}
.ucardtext {
  @apply text-lg text-justify indent-8;
  font-family: 'Lora', serif;
}
.ucardsubtitle {
  @apply text-xl font-semibold text-scicgreen text-center p-4 bg-scicblue rounded-lg shadow-lg my-4;
  font-family: 'Lora', serif;
}
.ucardlist {
  @apply  pl-8;
}
.ucardlistitem {
  @apply text-lg text-justify indent-8;
  font-family: 'Lora', serif;
}
.emphazer {
  @apply font-bold text-scicorange;
}
.footerwrapper {
  @apply flex justify-center items-center gap-4;
}
.button {
  @apply bg-scicgreen text-white font-bold mb-10 py-2 px-6 rounded hover:bg-scicorange transition-colors;
  font-family: Montserrat;
}


</style>
