<template>
  <section class="service-section">

    <div class="main-feature-item">
      <h3 class="mainpretitle">Nous savons tous que...</h3>
      <h3 class="maintitle">La VIE,<br/><span class="emphaser">Le VIVANT,</span> <br/>sont notre premières richesses... Non ?</h3>
      <p class="description">Le respect du vivant commence par une prise de conscience profonde de notre interconnexion avec la nature et tous ses habitants. Nous nous engageons à sensibiliser nos communautés au respect de la biodiversité et des ressources naturelles.</p>
      <UButton class="discover-button" @click="isOpenRespect = true">Découvrir</UButton>
    </div>
    <UModal v-model="isOpenRespect" class="modal-respect">
  <UCard :ui="{ divide: 'divide-y divide-gray-100 dark:divide-gray-800' }">
    <template #header>
      <h2 class="modal-title">Honorer le Respect du Vivant : Notre Engagement Étape par Étape</h2>
    </template>

    <div class="steps-container">
      <div class="step-item">
        <h3 class="step-title">Étape 1 : Prendre conscience</h3>
        <p class="step-description">
          Le respect du vivant commence par une prise de conscience profonde de notre interconnexion avec la nature et tous ses habitants. Reconnaître que chaque action a un impact sur l'écosystème est fondamental. Nous nous engageons à sensibiliser nos communautés, en partageant des connaissances et en éduquant sur l'importance de préserver la biodiversité et les ressources naturelles. Cet éveil collectif est le premier pas vers un territoire conscient et respectueux du vivant.
        </p>
      </div>

      <div class="step-item">
        <h3 class="step-title">Étape 2 : Adopter de Pratiques Durables</h3>
        <p class="step-description">
          Fort de cette prise de conscience, notre territoire s'engage à adopter des pratiques durables dans tous les aspects de la vie quotidienne et professionnelle. De l'agriculture respectueuse de l'environnement aux initiatives de réduction des déchets, chaque habitant, entreprise et institution est invité à réfléchir et à modifier ses habitudes pour le bien de notre planète. En cultivant des pratiques écoresponsables, nous posons des actes concrets en faveur du respect du vivant.
        </p>
      </div>

      <div class="step-item">
        <h3 class="step-title">Étape 3 : Création de Synergies pour le Respect du Vivant</h3>
        <p class="step-description">
          Le respect du vivant ne peut être l'œuvre isolée d'individus ou de groupes spécifiques. Il nécessite la création de synergies entre tous les acteurs du territoire. En unissant nos forces, en partageant nos succès et nos défis, nous pouvons développer des solutions innovantes qui bénéficient à l'ensemble de la communauté et à l'environnement. Ce travail collaboratif renforce notre engagement commun envers un territoire vivant et respectueux de toutes ses formes de vie.
        </p>
      </div>

      <div class="step-item">
        <h3 class="step-title">Étape 4 : Amplification et Rayonnement des Initiatives</h3>
        <p class="step-description">
          Chaque initiative réussie en faveur du respect du vivant doit être célébrée, amplifiée et partagée au-delà de nos frontières. En faisant rayonner nos actions et en partageant nos meilleures pratiques, nous inspirons d'autres communautés et territoires à s'engager dans la voie du respect du vivant. C'est par cet essaimage que nous pouvons provoquer un changement significatif à une échelle plus large.
        </p>
      </div>
    </div>

    <template #footer>
      <div class="modal-footer">
        <p class="call-to-action">L'appel est lancé : rejoignez-nous dans cet engagement profond pour le respect du vivant. Ensemble, engageons-nous à protéger notre environnement, à préserver la biodiversité et à assurer un avenir durable pour les générations futures.</p>
        <UButton class="action-button">Participer à l'Engagement</UButton>
      </div>
    </template>
  </UCard>
</UModal>

    <div class="features">
      <div class="feature-item">
        <span class="icon">🍃</span>
        <h3 class="title">Vivants <br/>et <br/>Résilients</h3>
        <p class="description">Nous avons désormais besoin de réfléchir notre territoire en terme de résilience. De trouver des solutions souples et robustes qui plient dans le sens du vent sans jamais...<br/> Se rompre.</p>
        <UButton class="discover-button" @click="isOpenLiving = true">Devenir Résilients</UButton>
      </div>
      <div class="feature-item">
        <span class="icon">❤️</span>
        <h3 class="title">Solidaires<br/> et <br/>Collectifs</h3>
        <p class="description">Les solutions individualistes n'ont plus d'avenir dans un monde qui nécessite l'inclusion en lieu et place de la dispersion. Seuls on va vite,...<br/>Mais ensemble on va beaucoup plus loin.</p>
        <UButton class="discover-button" @click="isOpenSolidarity= true">Agir ensemble</UButton>
      </div>
      <div class="feature-item">
        <span class="icon">🌱</span>
        <h3 class="title">Partenaires <br/> et <br/>Acteurs</h3>
        <p class="description">Les solutions figées ne fonctionnent plus. Par l'expérimentation et l'essaimage, nous transformons les idées en actions concrètes, semant les graines d'un présent heureux et sain.</p>
        <UButton class="discover-button" @click="isOpenPartners = true">Se mettre en action</UButton>
      </div>
    </div>

    <!-- Modals for each feature -->
    <!-- Modal for Living & Resilient -->
    <UModal v-model="isOpenLiving" class="modal-living">
      <UCard :ui="{ divide: 'divide-y divide-gray-100 dark:divide-gray-800' }">
    <template #header>
      <h2 class="modal-title">Vers une Résilience Collective : Un Chemin Étape par Étape</h2>
    </template>

    <div class="steps-container">
      <div class="step-item">
        <h3 class="step-title">Étape 1 : Reconnaître le Nouveau Paysage Mondial</h3>
        <p class="step-description">
          Nous vivons dans une ère marquée par l'incertitude, la complexité, l'ambiguïté et la volatilité. Les anciennes méthodes de pensée, rigides et linéaires,
          ne suffisent plus pour naviguer dans ce monde changeant. Le constat est clair : les défis d'aujourd'hui exigent une nouvelle forme de résilience, une capacité à s'adapter,
          à innover et à persévérer face à l'inconnu.
        </p>
      </div>

      <div class="step-item">
        <h3 class="step-title">Étape 2 : Cultiver la Résilience Individuelle</h3>
        <p class="step-description">
          Dans ce contexte, la résilience devient une compétence essentielle. Il ne s'agit plus seulement de se relever après une chute, mais de savoir naviguer dans les turbulences avec agilité et vision.
          Les personnes résilientes adoptent des stratégies individuelles variées : elles se préparent aux défis, acceptent et comprennent les épreuves, régulent leurs émotions et changent leur perspective pour y voir des opportunités de croissance.
        </p>
      </div>

      <div class="step-item">
        <h3 class="step-title">Étape 3 : Briser l'Isolement par la Solidarité</h3>
        <p class="step-description">
          Cependant, malgré leur force, ces îlots de résilience individuelle demeurent souvent isolés. Dans notre quête d'un futur harmonieux, nous reconnaissons que la véritable résilience ne se limite pas à l'individu.
          Elle s'enrichit et se multiplie à travers le lien et le partage. La solidarité est notre outil le plus puissant pour connecter ces forces individuelles et tisser un réseau de soutien mutuel.
        </p>
      </div>

      <div class="step-item">
        <h3 class="step-title">Étape 4 : Construire une Communauté Résiliente</h3>
        <p class="step-description">
          Chez M Comme Médoc, nous voyons la solidarité non comme un simple mot, mais comme une action concrète, un engagement de tous les instants.
          Nous œuvrons pour unir ces énergies individuelles dans un élan collectif, transformant ainsi la résilience personnelle en une puissante force commune.
          Ensemble, nous formons un collectif capable de répondre avec créativité et courage aux défis de notre temps.
        </p>
      </div>
    </div>

    <template #footer>
      <div class="modal-footer">
        <p class="call-to-action">Nous invitons chacun à rejoindre ce mouvement de résilience collective.</p>
        <UButton class="action-button" @click="goBack">Revenir</UButton>
      </div>
    </template>
  </UCard>
  </UModal>

    <!-- Modal for Solidarity & Collective -->
    <UModal v-model="isOpenSolidarity" class="modal-solidarity">
  <UCard :ui="{ divide: 'divide-y divide-gray-100 dark:divide-gray-800' }">
    <template #header>
      <h2 class="modal-title">La Solidarité : Un Voyage Collectif Étape par Étape sur Notre Territoire</h2>
    </template>

    <div class="steps-container">
      <div class="step-item">
        <h3 class="step-title">Étape 1 : Comprendre l'Ère du Changement sur le Territoire</h3>
        <p class="step-description">
          Face à un monde en constante mutation, il est impératif de reconnaître que les défis contemporains transcendent les limites personnelles et s'étendent à l'ensemble du territoire.
          La solidarité territoriale devient alors essentielle pour faire face ensemble à ces enjeux. Ce premier pas consiste à admettre que notre destin est commun et que la santé,
          la prospérité et le bien-être du territoire dépendent de l'action collective.
        </p>
      </div>

      <div class="step-item">
        <h3 class="step-title">Étape 2 : Valoriser Chaque Contribution Individuelle au Bien du Territoire</h3>
        <p class="step-description">
          La force de notre territoire réside dans la diversité et la richesse de ses habitants. Valoriser chaque individu signifie encourager tout un chacun à mettre ses talents et ressources au service du bien commun.
          Cette reconnaissance mutuelle est le fondement d'une solidarité efficace et durable qui alimente le dynamisme et la résilience de notre territoire.
        </p>
      </div>

      <div class="step-item">
        <h3 class="step-title">Étape 3 : Briser les Barrières de l'Isolement sur le Territoire</h3>
        <p class="step-description">
          Surmonter l'isolement est un défi crucial dans le renforcement de la solidarité territoriale. En créant des espaces de rencontre et d'échange, en favorisant le dialogue intercommunautaire et en encourageant la collaboration
          entre les différents acteurs du territoire, nous pouvons construire des ponts et démanteler les cloisons qui nous séparent.
        </p>
      </div>

      <div class="step-item">
        <h3 class="step-title">Étape 4 : Construire un Territoire Solidaire</h3>
        <p class="step-description">
          Armés de compréhension et de coopération, nous œuvrons maintenant à la consolidation active d'un territoire solidaire. Cela signifie mettre en place des réseaux de soutien,
          développer des projets collaboratifs et lancer des initiatives qui répondent aux besoins et ambitions partagés du territoire.
          Cette étape transforme la solidarité en actions concrètes : assistance aux populations en difficulté, initiatives écologiques, programmes éducatifs, et bien plus encore.
        </p>
      </div>
    </div>

    <template #footer>
      <div class="modal-footer">
        <p class="call-to-action">L'invitation est lancée à tous : devenez acteurs de la transformation de notre territoire.</p>
        <UButton class="action-button" @click="goBack">Rejoindre l'Élan de Solidarité</UButton>
      </div>
    </template>
  </UCard>
</UModal>


    <!-- Modal for Partners & Actors -->
    <UModal v-model="isOpenPartners" class="modal-partners">
  <UCard :ui="{ divide: 'divide-y divide-gray-100 dark:divide-gray-800' }">
    <template #header>
      <h2 class="modal-title">Tisser des Partenariats et Essaimer des Solutions : Notre Plan d'Action Territorial</h2>
    </template>

    <div class="steps-container">
      <div class="step-item">
        <h3 class="step-title">Étape 1 : Reconnaissance de l'Interdépendance sur Notre Territoire</h3>
        <p class="step-description">
          Dans le contexte actuel, marqué par des défis globaux et locaux, la force de notre territoire réside dans notre capacité à reconnaître notre interdépendance.
          La nécessité de développer des partenariats solides est plus critique que jamais. Comprendre que nos réussites et nos défis sont interconnectés nous permet
          d'embrasser une approche collaborative et d'élargir notre champ d'action.
        </p>
      </div>

      <div class="step-item">
        <h3 class="step-title">Étape 2 : Création et Renforcement des Partenariats</h3>
        <p class="step-description">
          Le cœur de notre stratégie repose sur la création et le renforcement des partenariats entre tous les acteurs du territoire : associations, entreprises, institutions éducatives et citoyens.
          Chaque partenaire apporte une perspective unique et des ressources précieuses. En valorisant et en mobilisant ces diverses contributions, nous établissons un réseau solide,
          prêt à explorer et à développer des solutions innovantes pour notre territoire.
        </p>
      </div>

      <div class="step-item">
        <h3 class="step-title">Étape 3 : Exploration et Innovation Collective</h3>
        <p class="step-description">
          Avec les fondations solides de nos partenariats, nous nous lançons dans une exploration collective des défis qui nous font face. C'est dans cet esprit d'innovation partagée que les solutions les plus créatives
          et les plus adaptées émergent. Nous encourageons tous les acteurs à penser hors des sentiers battus, à expérimenter de nouvelles approches et à partager leurs découvertes,
          tout en restant ancrés dans les réalités et les besoins spécifiques de notre territoire.
        </p>
      </div>

      <div class="step-item">
        <h3 class="step-title">Étape 4 : Essaimage et Amplification des Solutions</h3>
        <p class="step-description">
          Les solutions qui émergent de nos efforts collaboratifs ne doivent pas rester isolées. Notre objectif est d'essaimer les initiatives réussies à travers le territoire, amplifiant ainsi leur impact.
          En partageant les connaissances, les compétences et les ressources, nous pouvons reproduire et adapter les solutions efficaces, transformant ainsi les réussites locales en bénéfices pour l'ensemble du territoire.
        </p>
      </div>
    </div>

    <template #footer>
      <div class="modal-footer">
        <p class="call-to-action">Nous invitons chaque membre de notre territoire à se joindre à cette démarche collaborative.</p>
        <UButton class="action-button" @click="goBack">Rejoindre l'Élan de Partenariat</UButton>
      </div>
    </template>
  </UCard>
</UModal>


  </section>
</template>

<script setup lang="ts">

const isOpenRespect = ref(false);
const isOpenLiving = ref(false)
const isOpenSolidarity = ref(false)
const isOpenPartners = ref(false)
import { useRouter } from 'vue-router';
const router = useRouter();
function goBack() {
  router.push('/');
}
</script>


<style scoped>
.service-section {
  @apply flex flex-col w-full items-center text-center p-6 bg-no-repeat bg-cover bg-center max-w-screen-lg mx-auto rounded-xl shadow-lg;
  background-image: url('/vivantorange.png');
}
@media (max-width: 640px) {
  .service-section {
    @apply p-4 rounded-lg; /* Padding et arrondis ajustés pour les petits écrans */
  }
}
.main-feature-item {
  @apply max-w-4xl bg-white bg-opacity-65 p-6 rounded-xl shadow-lg mb-10;
}
.mainpretitle {
  @apply text-2xl font-semibold mb-2;
  font-family: Montserrat;
}
.maintitle {
  @apply text-4xl font-bold mb-4;
  font-family: Display;
}
.emphaser {
  @apply text-scicpurple text-7xl m-10;
}
.title {
  @apply text-3xl font-bold mb-4;
  font-family: Kalnia;
}
.description {
  @apply mb-6;
  font-family: Lora;
}
.features {
  @apply grid grid-cols-1 md:grid-cols-3 gap-4 mb-6;
}
.feature-item {
  @apply flex flex-col items-center p-4 bg-white bg-opacity-65 rounded-xl shadow-lg;
}
.icon {
  @apply mb-2 text-3xl; /* Ajustez la taille de l'icône selon vos besoins */
}
.call-to-action {
  @apply mt-6;
}
.discover-button, .join-button {
  @apply mt-4 mx-2 bg-scicgreen text-white font-bold py-2 px-4 rounded hover:bg-scicorange hover:text-white transition-colors;
}
.modal-living {
  @apply max-w-4xl;
}
.modal-title {
  @apply text-4xl font-bold mb-4 text-center text-scicgreen p-10 bg-scicblue rounded-lg shadow-lg;
  font-family: Display;
}
.steps-container {
  @apply space-y-6;
}
.step-item {
  @apply bg-scicgreen rounded-lg shadow p-6;
}
.step-title {
  @apply text-xl font-semibold mb-2 text-center text-scicpurple bg-white p-2 rounded-lg shadow-lg;
  font-family: Kalnia;
}
.step-description {
  @apply text-lg text-justify text-scicblue indent-8 text-wrap;
  font-family: Lora;
}
.modal-footer {
  @apply flex flex-col items-center;
}
.call-to-action {
  @apply mb-4 text-lg text-scicgreen font-semibold text-center;
}
.action-button {
  @apply bg-scicgreen text-white font-bold py-2 px-6 rounded hover:bg-scicorange transition-colors;
}
</style>
