<script setup>
import diapoconsomacteurscomponent from './diapoconsomacteurscomponent.vue';
const items = [{
  label: '2020, Année Noire',
  icon: 'i-fxemoji:brokenheart',
  defaultOpen: true,
  content: 'L\'année 2020 s\'est avérée être un défi sans précédent. Les restrictions sanitaires et les confinements ont profondément impacté la vie sociale, économique et environnementale. La Maison des Consom\'acteurs, qui avait été un lieu de rencontre et d\'inspiration, a dû fermer ses portes, laissant notre groupe sans son point de ralliement essentiel.'
}, {
  label: 'Février 2020 : La Dissolution du Groupe',
  icon: 'i-streamline-emojis:bomb',
  content: 'Face à ces obstacles inédits, la cohésion du groupe a été mise à rude épreuve. Les membres, confrontés à leurs propres luttes personnelles et professionnelles dues à la crise sanitaire, ont trouvé de plus en plus difficile de maintenir le cap sur le projet d\'écolieu. Malgré leur passion et leur engagement initial, la distance et les circonstances ont finalement conduit à la séparation du groupe.'
}, {
  label: 'Un Projet Abandonné, Mais Pas les Rêves',
  icon: 'i-emojione:house-with-garden',
  content: 'Le projet d\'écolieu dans le Médoc, si plein de promesses et d\'espoir, s\'est retrouvé abandonné dans le sillage de la pandémie. Cependant, les idées et les visions partagées au cours de cette aventure restent vivantes dans le cœur de chaque membre. Même si le projet n\'a pas pu se concrétiser comme prévu, l\'expérience et les leçons apprises continuent d\'inspirer chacun dans leurs parcours individuels, nourrissant l\'espoir qu\'un jour, un nouveau projet similaire puisse éclore dans des circonstances plus clémentes.'
}, {
  label: 'Mars - Septembre 2020 : Isolement et Réflexion',
  icon: 'i-covid:covid19-virus-reinfected',
  content: 'Entre mars et septembre 2020, la vie a pris un tournant inattendu pour chacun. La pandémie de Covid-19 a imposé un isolement forcé, enfermant les gens dans leurs domiciles, les confrontant à une solitude inédite et à la peur face à un ennemi invisible. Durant ces longs mois de confinement, chacun s\'est efforcé de naviguer dans cet univers incertain, vivant au jour le jour, essayant de se préserver tant physiquement que mentalement.'
}, {
  label: 'Un Besoin de Renouveau Social',
  icon: 'i-twemoji:man-climbing-medium-skin-tone',
  content: 'Cette période de repli forcé a, contre toute attente, engendré un besoin profond de renouveau social. L\'isolement a fait naître une soif de partage, d\'entraide et de connexion humaine. Beaucoup ont commencé à réévaluer leurs priorités, leurs relations et leur rapport à la société. Le besoin de bâtir des réseaux de soutien et de solidarité s\'est fait ressentir plus que jamais.'
}, {
  label: 'L\'Obligation Vaccinale et la Tension Sociale',
  icon: 'i-emojione-v1:syringe',
  content: 'À l\'approche de la fin de l\'année 2019, un vent de changement inattendu a commencé à souffler sur le monde, apportant avec lui des nuages d\'incertitude. L\'émergence du Covid-19, une pandémie mondiale, a projeté une ombre menaçante sur les plans et les rêves de nombreux projets, y compris celui de notre groupe visionnaire.'
},{
  label: 'L\'Émergence du Réseau Solaris',
  icon: 'i-twemoji:people-hugging',
  content: 'C\'est dans ce contexte de désarroi et de quête de sens que le réseau Solaris a vu le jour. Né quelque part dans l\'Aude, il se répand rapidement à travers la France et notamment en Gironde. Solaris est devenu un symbole d\'espoir et de renouveau. Ce réseau a proposé une nouvelle manière de se connecter, de collaborer et de coexister. Il représentait un mouvement vers une société plus résiliente, plus solidaire, où le partage et l\'entraide n\'étaient pas de vains mots mais des principes d\'action. Le réseau Solaris a offert un espace où les personnes pouvaient à nouveau se rassembler, partager des idées, et travailler ensemble pour un avenir meilleur, marquant ainsi le début d\'une nouvelle ère de coopération et de solidarité.',
}, {
  label: 'Septembre - Décembre 2020 : L\'Expansion Rapide du Réseau Solaris',
  icon: 'i-twemoji:tiger-face',
  content: 'La période de septembre à décembre 2020 a marqué une croissance spectaculaire pour le réseau Solaris. Partant d\'un petit groupe de 5 membres initiaux, le réseau a connu une expansion fulgurante, attirant plus de 1000 adhérents en Gironde. Cette croissance rapide témoigne d\'un besoin croissant de communauté et de solidarité dans une période marquée par l\'incertitude et le changement.',
}, {
  label: 'Mise en Place d\'un Découpage Territorial',
  icon: 'i-openmoji:antenna-bars',
  content: 'Avec une telle augmentation des membres, l\'organisation et la communication sont devenues cruciales. Le réseau a donc mis en place un découpage territorial efficace, principalement via le réseau de messagerie Telegram. Cette stratégie a permis la création de 35 cellules locales, assurant une gestion plus intime et personnalisée des activités et des interactions au sein du réseau.',
}, {
  label: 'Naissance des Cellules Locales et Participation Active',
  icon: 'i-openmoji:birthday-cake',
  content: 'Dans chaque région, les choses se sont rapidement organisées. Les adhérents ont embrassé l\'esprit de Solaris avec enthousiasme, participant activement à la vie du réseau. Cette dynamique a rapidement consolidé la structure de Solaris, le transformant en un réseau solide et résilient.',
}, {
  label: 'Le Médoc se Mobilise : Trois Cellules et des Activités Florissantes',
  icon: 'i-twemoji:people-hugging',
  content: 'Dans le Médoc, la réponse au réseau Solaris a été particulièrement forte, avec la création de trois cellules et la participation d\'environ 90 personnes. Cette mobilisation a donné lieu à une effervescence d\'activités diverses, allant de la formation à la solidarité. Des ateliers et des séances de formation ont été organisés pour améliorer les compétences des membres dans divers domaines, tandis que le système d\'échange mis en place a permis un partage enrichissant de ressources, de compétences et de connaissances. Par ailleurs, des initiatives solidaires ont été mises en œuvre, visant à soutenir les membres en difficulté et à promouvoir le bien-être de la communauté. Cette dynamique a non seulement renforcé le réseau Solaris dans le Médoc, mais a aussi ravivé l\'esprit du projet d\'écolieu initial, bien qu\'adapté aux circonstances et besoins actuels.',
}, 

]
</script>

<template>
  <div class="mainwrapper">
  <diapoconsomacteurscomponent/>
  <Ucontainer class="titleaccord">
  <h1 class="title">2020 - Renaissance</h1>
  
  <UAccordion :items="items" :ui="{ wrapper: 'flex flex-col w-full m-10' }">
    <template #default="{ item, index, open }">
      <UButton color="gray" variant="ghost" class="border-b border-gray-200 dark:border-gray-700" :ui="{ rounded: 'rounded-none', padding: { sm: 'p-3' } }">
        <template #leading>
          <div class="w-6 h-6 rounded-full bg-white dark:bg-primary-400 flex items-center justify-center -my-1">
            <UIcon :name="item.icon" class="w-4 h-4 text-primary-900 dark:text-gray-900" dynamic/>
          </div>
        </template>

        <span class="truncate">{{ index + 1 }}. {{ item.label }}</span>

        <template #trailing>
          <UIcon
            name="i-heroicons-chevron-right-20-solid"
            class="w-5 h-5 ms-auto transform transition-transform duration-200"
            :class="[open && 'rotate-90']"
          />
        </template>
      </UButton>
    </template>
  </UAccordion></Ucontainer>
  </div>
</template>

<style scoped>
.mainwrapper {
  @apply flex flex-row justify-between items-center h-full;
}
.divider {
  @apply flex flex-row justify-between items-center h-full;
}
.titleaccord {
  @apply flex flex-col w-8/12 h-[30rem] p-5 m-5;
}
.title {
  @apply text-4xl text-center font-bold shadow-lg p-4 bg-red-600;
}
</style>

