<script setup>
const items = [{
  label: 'Qu\'est-ce que "M comme Médoc" ?',
  icon: 'i-heroicons-information-circle',
  defaultOpen: true,
  slot: 'getting-started'
}, {
  label: 'Quels types de produits/services proposez-vous ?',
  icon: 'i-heroicons-arrow-down-tray',
  defaultOpen: true,
  slot: 'installation'
}, {
  label: 'Comment puis-je devenir membre de la SCIC "M comme Médoc" ?',
  icon: 'i-heroicons-eye-dropper',
  defaultOpen: true,
  description: 'Pour devenir membre, il vous suffit de nous contacter via notre formulaire en ligne. Tous les passionnés du Médoc sont les bienvenus pour contribuer à notre mission.'
}, {
  label: 'Quels sont les avantages de devenir membre ?',
  icon: 'i-heroicons-rectangle-group',
  description: 'En tant que membre, vous aurez un droit de vote dans les décisions importantes, accès à des événements exclusifs et des réductions sur nos produits et services.'
}, {
  label: 'Comment "M comme Médoc" soutient-elle le développement durable ?',
  icon: 'i-heroicons-square-3-stack-3d',
  defaultOpen: true,
  description: 'Nous adoptons des pratiques écoresponsables dans toutes nos activités, collaborons avec des producteurs locaux et participons activement à des projets environnementaux dans la région.'
}, {
  label: 'Pouvons-nous visiter vos installations ou participer à des événements ?',
  icon: 'i-heroicons-wrench-screwdriver',
  defaultOpen: true,
  description: 'Absolument ! Nous organisons régulièrement des visites et des événements pour faire découvrir le patrimoine du Médoc. Consultez notre calendrier d\'événements pour plus d\'informations.'
}]
</script>

<template>
  <UAccordion :items="items" class="w-8/12 m-auto bg-slate-50 p-3">
    <template #item="{ item }">
      <p class="italic text-gray-900 dark:text-white text-center">
        {{ item.description }}
      </p>
    </template>

    <template #getting-started>
      <div class="text-gray-900 dark:text-white text-center">
        <Logo class="w-auto h-8 mx-auto" />

        <p class="text-sm text-gray-500 dark:text-gray-400 mt-2">
          "M comme Médoc" est une SCIC dédiée à la promotion et à la valorisation des produits et services du Médoc, avec un accent particulier sur le développement durable et l'implication communautaire.
        </p>
      </div>
    </template>

    <template #installation>
      
      <p class="text-sm text-gray-500 dark:text-gray-400 mt-2">
        Nous offrons une gamme diversifiée de produits et services allant des produits alimentaires locaux aux expériences touristiques uniques, en mettant l'accent sur la qualité et l'authenticité.
        </p>
      

      
    </template>
  </UAccordion>
</template>

