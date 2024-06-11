<template>
  <UCarousel class="carousel" v-slot="{ item }" :items="points" :ui="{ item: 'basis-full' }" arrows>
    <div class="card-wrapper">
      <div class="wrapperucard">
        
        <UCard ref="parallaxEffect" class="content-card" :style="{ backgroundImage: 'url(' + item.image + ')' }">
          <template #header>
            <p class="date">{{ item.date }}</p>
          </template>
          <div class="content-carding">
            <h1 class="title">{{ item.title }}</h1>
            <p class="description">{{ item.description }}</p>
            <div class="content-carding">
              <h2 class="subtitle">{{ item.firstsubtitle }}</h2>
              <p class="description">{{ item.firstdescription }}</p>
              <h2 class="subtitle">{{ item.secondsubtitle }}</h2>
              <p class="description">{{ item.seconddescription }}</p>
              <h2 class="subtitle">{{ item.thirdsubtitle }}</h2>
              <p class="description">{{ item.thirddescription }}</p>
            </div>
          </div>
        </UCard>
      </div>
    </div>
  </UCarousel>
</template>






<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue';

// Spécifier le type comme HTMLDivElement
const parallaxEffect = ref<HTMLDivElement | null>(null);

onMounted(() => {
  const handleScroll = () => {
    if (parallaxEffect.value) {
      const offset = window.scrollY;
      parallaxEffect.value.style.backgroundPositionY = offset * 0.5 + 'px';
    }
  };

  window.addEventListener('scroll', handleScroll, { passive: true });

  // Nettoyage de l'événement lors du démontage du composant
  onBeforeUnmount(() => {
    window.removeEventListener('scroll', handleScroll);
  });
});
const points = ref([
  {
    date: "2018-2019",
    title: "Premières réflexions et engagement communautaire",
    image: '/firstperiod.png',
    firstsubtitle: "Fondation de l'Association 'La Base': Penser le Futur de l'Habitat",
    firstdescription: "L'association 'La Base', initiée le 31 août 2019, marque un tournant dans l'approche éco-responsable dans le Médoc, par la création d'un écolieu expérimental. Ce projet est né de la volonté de redéfinir les interactions entre l'Habitat, l'Habitant et l'Habiter, explorant des alternatives durables qui remettent en question les pratiques conventionnelles de la vie communautaire et de l'urbanisme. 'La Base' sert de plateforme pour des réflexions profondes, en se concentrant sur des stratégies innovantes pour un développement respectueux de l'environnement.",
    secondsubtitle: "Expérimentations et Réflexions: Le Cœur des Activités de 'La Base'.",
    seconddescription: "Les premières années de l'association sont marquées par des expérimentations et des réflexions sur les modes de vie alternatifs, les pratiques agricoles durables, et les solutions énergétiques renouvelables. Les membres fondateurs de 'La Base' s'engagent dans des projets de sensibilisation et de formation pour partager leurs connaissances et encourager l'adoption de pratiques plus respectueuses de l'environnement. Les activités de l'association sont ouvertes à tous les citoyens intéressés par la transition écologique et sociale.",
    thirdsubtitle: "Impact et Vision à Long Terme de 'La Base'",
    thirddescription: "L'approche de 'La Base' vise à établir un nouveau paradigme pour les communautés durables. En favorisant une réflexion continue et une participation active de ses membres, l'association aspire à devenir un modèle de développement écologique et social. L'écolieu projeté est envisagé non seulement comme un lieu physique mais comme une initiative changeante, contribuant à un futur plus vert et inclusif. Les efforts de 'La Base' démontrent comment une communauté peut collaborer pour relever les défis environnementaux et sociaux contemporains, en offrant des solutions pratiques et inspirantes pour d'autres initiatives similaires."
  },
  {
    date: "Fin 2019",
    title: "Intégration et élargissement du réseau",
    image: '/secondperiod.png',
    firstsubtitle: "Intégration de Partenaires Locaux et Acteurs de l'ESS",
    firstdescription: "Le projet prend une nouvelle envergure avec l'implication accrue de partenaires locaux et d'acteurs de l'économie sociale et solidaire. Cette expansion naturelle reflète une volonté d'élargir les horizons du projet et de renforcer les liens avec la communauté locale. La collaboration avec ces partenaires vise à enrichir le projet par des expertises variées et à assurer une intégration harmonieuse dans l'écosystème local.",
    secondsubtitle: "Intégration de 'La Maison des Consom'acteurs'",
    seconddescription: "En novembre 2019, les membres fondateurs franchissent une étape clé en intégrant 'La Maison des consom'acteurs'. Cette initiative marque un tournant dans le projet, symbolisant la concrétisation des idées et la matérialisation des efforts collaboratifs. 'La Maison des consom'acteurs' est un espace dédié à l'échange, à l'apprentissage mutuel et à la mise en pratique des principes de consommation responsable et engagée.",
    thirdsubtitle: "Vers la Création d'une SCIC",
    thirddescription: "Les réflexions progressent vers la création d'une Société Coopérative d'Intérêt Collectif (SCIC). L'objectif est de structurer le projet autour d'un modèle de gouvernance coopératif, permettant de créer un lieu de vie et de travail collectif. Cette démarche vise à établir des bases solides pour une gestion démocratique et participative, où chaque membre peut contribuer de manière significative au développement et à la réussite du projet."
  },
  {
    date: "2020",
    title: "Adaptation et Résilience face à la Crise",
    image: '/thirdperiod.png',
    firstsubtitle: "Fermeture de 'La Maison des Consom'acteurs'",
    firstdescription: "En février 2020, 'La Maison des consom'acteurs' a dû fermer ses portes en raison des impacts de la crise de COVID-19. Cette fermeture, bien que temporaire, a marqué un moment significatif pour le projet. Elle a mis en lumière la vulnérabilité des initiatives communautaires face à des crises globales inattendues et a souligné l'importance de la flexibilité dans la gestion des espaces collectifs.",
    secondsubtitle: "Stimulation d'une Réflexion sur la Résilience",
    seconddescription: "Loin de décourager les membres du projet, la fermeture a agi comme un catalyseur pour repenser les fondements de l'initiative. Cela a stimulé une réflexion profonde sur la nécessité de développer des modalités d'action plus résilientes. L'objectif étant de renforcer la capacité du projet à résister et à s'adapter aux chocs extérieurs, en anticipant d'autres perturbations potentielles.",
    thirdsubtitle: "Adaptation au Nouveau Contexte Mondial",
    thirddescription: "La crise du COVID-19 a également ouvert la voie à une adaptation aux nouvelles réalités du monde. Les membres fondateurs et les participants ont commencé à explorer des stratégies pour opérer dans un contexte mondial transformé, en intégrant des technologies numériques pour le travail à distance et en renforçant les réseaux locaux pour une plus grande autonomie. Ces ajustements visent à assurer la continuité et l'impact du projet, même en temps de crise."
  },
  {
    date: "2021 - 2022",
    title: "Une période d'intense activité locale",
    firstsubtitle:"Renforcement des Actions Solidaires et Rencontres Locales",
    firstdescription: "La période de 2021 à 2022 a été marquée par un enrichissement des interactions communautaires, illustré par une série d'actions solidaires et de rencontres significatives avec les acteurs locaux et les potentiels partenaires. Ces événements ont permis de tisser des liens plus étroits au sein de la communauté et d'identifier des alliés clés pour les initiatives à venir. L'accent mis sur l'échange et la solidarité a favorisé une dynamique positive dans le développement de projets à impact social.",
    secondsubtitle: "Éclosion d'Initiatives Citoyennes et Projets Collectifs",
    seconddescription: "Au fil des mois, plusieurs initiatives citoyennes et projets collectifs ont commencé à se dessiner, avec une attention particulière portée à l'écologie et à la sobriété. Ces projets, souvent gratuits et désintéressés, ont non seulement renforcé la cohésion communautaire mais ont aussi mis en lumière les besoins spécifiques identifiés sur le territoire. Cela a permis une prise de conscience accrue des enjeux locaux et a encouragé davantage de citoyens à s'engager activement.",
    thirdtsubtitle: "Défis Financiers et Besoin de Structures Solides",
    thirddessciption:"Malgré l'enthousiasme et l'engagement général, de nombreux projets de grande valeur sociale ont rencontré des difficultés à progresser, principalement en raison de contraintes financières et d'un manque de soutien institutionnel. Cette situation a souligné la nécessité pressante d'un acteur économique robuste capable de soutenir ces initiatives, ainsi que l'importance d'une structure juridique adaptée qui pourrait offrir un cadre plus stable pour la réalisation et la pérennité de ces projets.",
    image: '/fourthperiod.png',
  },
  {
    date: "2023 - 2024",
    title: "Vers la Création d'une SCIC",
    image: '/fifthperiod.png',
    firstsubtitle: "Mobilisation Communautaire Autour du Projet SCIC",
    firstdescription: "De décembre 2023 à janvier 2024, une série de réunions publiques a réussi à rassembler une communauté hétérogène autour du projet de Société Coopérative d'Intérêt Collectif (SCIC). Ces réunions ont été cruciales pour engager les habitants, les salariés et les partenaires locaux, qui ont pu exprimer leurs attentes et envisager leur implication future dans le projet. L'interaction directe avec la communauté a permis de renforcer l'intérêt collectif et de valider la pertinence du modèle SCIC.",
    secondsubtitle: "Élaboration du Cadre Juridique et Financier de la SCIC",
    seconddescription: "Parallèlement aux efforts de mobilisation, les démarches pour structurer juridiquement et financièrement la SCIC ont avancé de manière significative. La collaboration avec Finacoop, un partenaire spécialisé dans l'accompagnement des structures de l'économie sociale et solidaire, a été essentielle pour affiner le modèle économique et les principes de gouvernance de la SCIC. Cette période a vu les premières réflexions concrètes sur la manière de structurer la coopérative pour qu'elle réponde au mieux aux besoins de ses futurs membres.",
    thirdsubtitle: "Définition du Business Model et Exploration des Options de Financement",
    thirddescription: "Le modèle de la société coopérative d'intérêt collectif a été choisi pour sa capacité à intégrer divers groupes d'intérêt dans la gouvernance de la structure. Au cours de cette phase, le business model de la SCIC a été précisé, en tenant compte des spécificités du territoire et des aspirations des membres de la coopérative. En outre, les premières pistes de financement ont commencé à se dessiner, explorant à la fois des ressources locales et des mécanismes de financement innovants adaptés à la nature coopérative de la SCIC."
  },
  {
    date: "2024 - 2025",
    title: "Lancement Officiel de la SCIC M Comme Médoc",
    image: '/sixthperiod.png',
    firstsubtitle: "Planification du Lancement de la SCIC M Comme Médoc",
    firstdescription: "Sous réserve de contretemps de dernière minute, la date du 15 juin 2024 est marquée pour le lancement officiel de la SCIC M Comme Médoc. Cette date représente un moment clé pour le projet, symbolisant le début d'une nouvelle ère de gestion coopérative et de développement territorial. Le lancement est l'occasion de mettre en lumière une structure innovante, conçue pour maximiser les bénéfices pour le collectif et pour l'écosystème local.",
    secondsubtitle: "Principes Fondateurs de la Nouvelle Structure",
    seconddescription: "Dès son inauguration, la SCIC M Comme Médoc incarnera une approche novatrice, construite sur les principes de sobriété et d'écologie. Partant de zéro, cette structure vise à transformer les idéaux en pratiques concrètes, en restant fidèle à une philosophie qui valorise le minimalisme et l'impact écologique positif. C'est une démarche qui reflète un engagement profond envers le développement durable et responsable.",
    thirdsubtitle: "Anticipation des Premiers Projets Concrets",
    thirddescription: "Avec le lancement de la SCIC prévu en juin, les premiers projets concrets sont attendus pour l'été 2024. Ces initiatives seront les premières manifestations tangibles de l'efficacité de la nouvelle structure en action. Elles permettront de démontrer la capacité de la SCIC M Comme Médoc à traduire ses principes fondateurs en résultats mesurables et bénéfiques pour la communauté et l'environnement local."
  },
  {
    date: "2025 - 2026",
    title: "Des projets ? Quels projets ?",
    image: '/seventhperiod.png',
    firstsubtitle: "Invitation à l'Engagement Communautaire",
    firstdescription: "Et si c'était à vous de nous dire comment vous voulez que les choses se passent ? Cette question ouvre la voie à une implication directe de la communauté dans la gestion et l'orientation de nos projets. Nous avons créé un formidable outil, une structure destinée à appartenir à tous ses membres. C'est une invitation ouverte à tous ceux qui souhaitent participer activement et influencer positivement les développements futurs.",
    secondsubtitle: "Présentation de la SCIC M Comme Médoc",
    seconddescription: "La SCIC M Comme Médoc est conçue comme un outil pour vous, pour nous, pour tous. Cette structure coopérative est le reflet de notre engagement à opérer de manière transparente et démocratique, où chaque voix compte. Elle est fondée sur les principes de collaboration et de partage, garantissant que tous les membres ont un mot à dire dans les décisions qui affectent la communauté et le territoire.",
    thirdsubtitle: "Vous pouvez maintenant agir",
    thirddescription: "À vous de jouer, à vous de décider, à vous d'agir. Vous pouvez d'ores et déjà nous rejoindre et porter plus loin les projets qui vous passionnent. La SCIC M Comme Médoc vous offre le cadre pour transformer vos idées en actions concrètes. C'est une chance de faire partie d'un mouvement qui valorise l'engagement individuel et collectif dans la poursuite d'objectifs communs."
  }
]);
</script>
<style scoped>
.carousel {
  @apply w-full mx-auto max-w-7xl; /* Max width increased for larger screens */
}

.card-wrapper {
  @apply relative flex flex-col md:flex-row items-stretch bg-white shadow-lg rounded-lg overflow-hidden; /* More shadow for depth */
}

.wrapperucard {
  @apply flex flex-col md:flex-row items-stretch p-6 gap-6; /* Increased padding and gap, responsive layout */
}

/* Parallax Background */
.content-card {
  @apply relative flex-grow overflow-hidden;
  background-attachment: fixed;
  background-size: cover;
  background-position: center;
}

/* Glass effect on the text container */
.content-carding {
  @apply flex flex-col justify-between p-4 bg-white/30 backdrop-blur-md rounded-lg border border-white/50 shadow-lg; /* Applying glass effect */
}

.date {
  @apply text-lg md:text-xl font-semibold bg-scicgreen text-white text-center rounded-2xl p-4; /* Responsive font size, bold style */
  font-family: 'Montserrat', sans-serif; /* Custom font */
}

.title {
  @apply text-xl md:text-4xl font-bold my-2 text-slate-800 text-center; /* Responsive font size, darker text for better readability */
  font-family: 'Playfair Display', serif; /* Custom font */
}

.description {
  @apply text-lg mb-4 text-gray-800 leading-relaxed text-justify indent-8; /* Smaller text for description with a lighter color for hierarchy and relaxed leading for better readability */
  font-family:'Lora', serif; /* Custom font */
}

.subtitle {
  @apply font-semibold text-lg text-scicgreen; /* Subtitles with bold and larger text for emphasis */
  font-family:'Kalnia', serif; /* Custom font */
}



</style>



