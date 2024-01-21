<script setup>
import diapoconsomacteurscomponent from './diapoconsomacteurscomponent.vue';
const items = [{
  label: 'Rencontre Initiatique à la Maison des Consommacteurs',
  icon: 'i-emojione:four-leaf-clover',
  defaultOpen: true,
  content: 'C\'est par une belle journée ensoleillée que tout a commencé. Dix âmes curieuses et passionnées, guidées par un même désir de changement, se sont rencontrées à la Maison des Consommacteurs dans le cœur vibrant du Médoc. L\'air y était empreint d\'optimisme et de café fraîchement moulu.'
}, {
  label: 'Dix Visionnaires, Un Projet',
  icon: 'i-fluent-emoji-flat:magnifying-glass-tilted-right',
  content: 'Chacun apportant son propre bagage d\'expériences et d\'aspirations, le groupe était un mélange éclectique de rêveurs, d\'innovateurs et de bâtisseurs. Certains parlaient avec passion de permaculture, d\'autres de technologies vertes, mais tous partageaient un rêve commun : créer un écolieu..'
}, {
  label: 'Un Ecolieu pour le Médoc : Plus qu\'un Projet, une Vision',
  icon: 'i-emojione:house-with-garden',
  content: 'L\'écolieu, imaginé comme un havre de paix et de durabilité, serait bien plus qu\'un simple lieu de vie. Il serait un symbole de la cohabitation harmonieuse entre l\'homme et la nature, un modèle de développement durable et un foyer d\'innovations écologiques.'
}, {
  label: 'Premiers Pas et Défis',
  icon: 'i-fluent-emoji-flat:handshake',
  content: 'Les discussions étaient animées et pleines d\'espoir. Le groupe a convenu qu\'il fallait d\'abord comprendre les besoins spécifiques de la région du Médoc. Ils ont prévu des rencontres avec les habitants locaux, des experts en développement durable et des architectes spécialisés en éco-construction.'
}, {
  label: 'Un Avenir Vert et Solidaire',
  icon: 'i-twemoji:face-holding-back-tears',
  content: 'Le chemin sera sans doute parsemé d\'obstacles, mais la détermination du groupe est inébranlable. Ensemble, ils envisagent de créer un lieu où la nature et l\'humain coexistent en harmonie, inspirant d\'autres communautés à travers le Médoc et au-delà..'
}, {
  label: 'Fin 2019 : L\'Ombre du Covid et la Dissolution du Projet',
  icon: 'i-twemoji:nauseated-face',
  content: 'À l\'approche de la fin de l\'année 2019, un vent de changement inattendu a commencé à souffler sur le monde, apportant avec lui des nuages d\'incertitude. L\'émergence du Covid-19, une pandémie mondiale, a projeté une ombre menaçante sur les plans et les rêves de nombreux projets, y compris celui de notre groupe visionnaire.'
}]
</script>

<template>
  <div class="mainwrapper">
  <diapoconsomacteurscomponent/>
  <Ucontainer class="titleaccord">
  <h1 class="title">2019</h1>
  
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