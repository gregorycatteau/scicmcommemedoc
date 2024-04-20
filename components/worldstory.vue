<template>
  <div class="world-story my-8">
    <UAccordion :items="accordionItems" multiple class="accordionclass" size="xl">
      <template #item="{ item, isOpen }">
        <div :class="['content', { 'open': isOpen }]">
          <div class="icon">
            <UIcon :name="item.icon" class="icon-size" />
          </div>
          <div class="text">
            <p>{{ item.content }}</p>
          </div>
          <div class="image">
            <img :src="item.image" alt="" class="illustration">
          </div>
        </div>
      </template>
    </UAccordion>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';


const accordionItems = ref([
  {
    label: "2017-2019 : L'éveil et la mobilisation",
    content: `L'urgence climatique a émergé avec force en 2017, révélant une dichotomie entre la gravité des alertes scientifiques et les mesures concrètes adoptées, souvent entachées de greenwashing. Les initiatives contre la pollution plastique en 2018 et les marches pour le climat en 2019 ont amplifié la conscience écologique, bien que confrontées à des réponses institutionnelles et commerciales ambivalentes.`,
    icon: 'i-heroicons-paper-airplane-20-solid',
    image: '/dichotomie.png',
    defaultOpen: false
  },
  {
    label: "2020 : La Pandémie de COVID-19 - Un Changement Radical",
    content: `La pandémie de COVID-19 a représenté un tournant radical, démontrant de manière frappante la vulnérabilité globale et l'interconnexion profonde de notre monde. Les confinements ont imposé une pause mondiale, forçant chacun à s'interroger sur nos modes de vie et notre rapport à la planète. Cette période de réflexion forcée a révélé la complexité des défis que nous affrontons, ainsi que l'urgence d'agir.`,
    icon: 'i-heroicons-globe-alt',
    image: '/confinement.png',
    defaultOpen: false
  },
  {
    label: "Révélation et Culpabilisation",
    content: `La pandémie a fonctionné comme un révélateur des liens entre la santé humaine, animale et environnementale, mais elle a aussi été l'occasion pour certains acteurs économiques de manipuler la peur environnementale à des fins politiques ou économiques. Cette instrumentalisation a exacerbé l'ambiguïté et le sentiment d'impuissance face aux décisions économiques globales, soulignant la difficulté de distinguer la vérité dans un flux constant d'information et de désinformation.

`,
    icon: 'i-heroicons-exclamation-circle',
    image: '/peur.png',
    defaultOpen: false
  },
  {
    label: "Un Appel à l'Action",
    content: `Malgré ces défis, 2020 a également vu émerger un appel à l'action sans précédent. Face à l'incertitude, des communautés à travers le monde ont commencé à reconnaître l'importance de l'engagement local et des solutions concrètes. Cette période a illustré la capacité de la société à s'unir face à l'adversité, même si ces efforts ont souvent été freinés par des réponses gouvernementales parfois incohérentes ou répressives.

`,
    icon: 'i-heroicons-exclamation-circle',
    image: '/jardin.png',
    defaultOpen: false
  },
  {
    label: "2021-2022 : Le Retour à la 'Normalité' et ses Dilemmes",
    content: `Les années suivant la pandémie ont été marquées par un désir profond de retour à la normale. Cependant, cette aspiration s'est heurtée à la réalité d'un monde changé, où les initiatives citoyennes locales, bien que prometteuses, ont été confrontées à la répression et à la guerre médiatique. Ces années ont souligné la complexité croissante de notre environnement global, mettant en lumière la nécessité de solutions locales pragmatiques.`,
    icon: 'i-heroicons-arrow-path',
    image: '/wallpaper13.png',
    defaultOpen: false
  },
  {
    label: "2023-2024 : Vers une Redéfinition du Local",
    content: `Face à une confusion géopolitique accrue et à l'impossibilité d'agir efficacement à l'échelle globale, l'accent a été mis sur l'importance cruciale du local comme levier d'action tangible. Les communautés ont commencé à se concentrer sur des projets locaux centrés sur la durabilité et le bien-être communautaire, offrant un contraste saisissant avec le chaos ambiant.

`,
    icon: 'i-heroicons-arrow-path',
    image: '/wallpaper13.png',
    defaultOpen: false
  }, // Ajoutez ici d'autres éléments si nécessaire
]);
</script>

<style scoped>
.world-story {
  @apply max-w-6xl mx-auto;

}

.content {
  @apply flex flex-row items-center justify-between p-4 cursor-pointer bg-scicblue;
}

.content.open {
  @apply mb-4 ;
}

.icon-size {
  @apply w-6 h-6 text-primary-500;
}

.text {
  @apply text-justify text-xl p-2 indent-4 text-scicgreen;
  font-family: 'Lora', serif;
}

.image {
  @apply flex justify-center p-4 min-w-96;
}

.illustration {
  @apply max-w-full h-auto rounded-lg shadow-md;
}

/* Styles pour l'accordéon et les icônes */
.divide-y {
  @apply divide-gray-200 dark:divide-gray-700;
}

.i-heroicons-paper-airplane-20-solid,
.i-heroicons-globe-alt,
.i-heroicons-exclamation-circle,
.i-heroicons-arrow-path,
.i-heroicons-home-modern {
  @apply text-primary-500 mr-2;
}
</style>

