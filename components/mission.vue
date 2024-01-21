<template>
  <section class="mission-section">
    <div class="glasser">
    <h1 class="maintitle">Réponses Innovantes de la SCIC M Comme Médoc aux Besoins du Territoire</h1>
    <h2 class="subtitle">Vous trouverez ci-dessous une liste de besoins identifiés sur le Médoc</h2>
  </div>
    <UDivider class="divider" />
    <div class="container-content">
    <UContainer class="titleaccord">
  <h1 class="title">Les besoins identifiés</h1>
  
  <UAccordion :items="items" variant="soft" :ui="{ wrapper: 'flex flex-col w-auto m-10 rounded-3xl gap-4' }">
    <template #default="{ item, index, open }">
      <UButton color="gray"  class="border-b border-gray-200 dark:border-gray-700" :ui="{ rounded: 'rounded-none', padding: { sm: 'p-3' } }">
        <template #leading>
          <div class="w-10 h-10 rounded-full bg-white dark:bg-primary-400 flex items-center justify-center -my-1">
            <UIcon :name="item.icon" class="w-8 h-8 text-white dark:text-gray-900" dynamic/>
          </div>
        </template>

        <span class="truncate text-lime-600 text-3xl font-bold">{{ index + 1 }}. {{ item.label }}</span>

        <template #trailing>
          <UIcon
            name="i-heroicons-chevron-right-20-solid"
            class="w-5 h-5 ms-auto transform transition-transform duration-200"
            :class="[open && 'rotate-90']"
          />
        </template>
      </UButton>
    </template>
    <template #constat1="{ open}">
      <div class="title">titre ici</div>
      <p class="paragraphe">Réponse de la SCIC : Face à un manque de structures d\'accueil pour la petite enfance, nous prévoyons de développer un pôle dédié, comprenant une école hors contrat et une crèche à horaires élargis. Ces établissements offriront un environnement éducatif alternatif répondant aux besoins des familles locales.</p>
    <Consultant :isOpen="open"/>  
    </template>
  </UAccordion>
</UContainer>
</div>    
  </section>
</template>

<script setup>
import Consultant from '@/components/premierconstat/constat_1.vue'
const items = [{
  label: 'Constat 1 : Manque de Structures pour la Petite Enfance',
  icon: 'i-emojione:four-leaf-clover',
  slot: 'constat1',
   

}, {
  label: 'Constat 2 : Besoin d\'Autonomie et de Savoir-Faire Locaux',
  icon: 'i-fluent-emoji-flat:magnifying-glass-tilted-right',
  content: 'Réponse de la SCIC : Notre centre de (ré)appropriation des connaissances se concentrera sur l\'apprentissage et la maîtrise de compétences essentielles comme l\'agriculture durable, les lowtechs, et l\'éducation environnementale, renforçant l\'autonomie et le savoir-faire des habitants.'
}, {
  label: 'Constat 3 : Accès Limité aux Thérapies Alternatives et à l\'Éducation en Santé',
  icon: 'i-emojione:house-with-garden',
  content: 'Réponse de la SCIC : Nous développerons un pôle de maintien en santé axé sur la diversification et l\'accessibilité des thérapies alternatives et de l\'éducation en santé, promouvant ainsi un bien-être global et inclusif.'
}, {
  label: 'Constat 4 : Nécessité de Dynamiser l\'Économie Locale',
  icon: 'i-fluent-emoji-flat:handshake',
  content: 'Réponse de la SCIC : Pour stimuler l\'économie locale, nous nous engageons à soutenir les circuits courts, à valoriser les ressources écologiques, et à faciliter la connexion entre consommateurs et producteurs locaux, dynamisant ainsi l\'économie régionale.'
}, {
  label: 'Constat 5 : Défis en Matière d\'Immobilier Durable',
  icon: 'i-twemoji:face-holding-back-tears',
  content: 'Réponse de la SCIC : Notre projet aborde les enjeux de l\'immobilier en promouvant des modes de construction écologiques, en rationalisant l\'utilisation de l\'énergie, et en adoptant des ressources énergétiques renouvelables pour un habitat plus sain et durable.'
}, {
  label: 'Constat 6 : Besoin de Lieux de Vie et de Travail Partagés',
  icon: 'i-twemoji:house-with-garden',
  content: 'Réponse de la SCIC : Nous prévoyons de développer des lieux de vie et de travail partagés, favorisant la mixité sociale et la création de liens entre les habitants, et offrant un cadre de travail adapté aux besoins des travailleurs indépendants.'
}, {
  label: 'Constat 7 : Manque de Lieux de Rencontre et d\'Échanges',
  icon: 'i-twemoji:handshake',
  content: 'Réponse de la SCIC : Nous prévoyons de développer des lieux de vie et de travail partagés, favorisant la mixité sociale et la création de liens entre les habitants, et offrant un cadre de travail adapté aux besoins des travailleurs indépendants.'
}, {
  label: 'Constat 8 : Besoin de Lieux de Vie et de Travail Partagés',
  icon: 'i-twemoji:house-with-garden',
  content: 'Réponse de la SCIC : Nous prévoyons de développer des lieux de vie et de travail partagés, favorisant la mixité sociale et la création de liens entre les habitants, et offrant un cadre de travail adapté aux besoins des travailleurs indépendants.'
}, ]
</script>

<style scoped>
.glasser {
  @apply mt-5 p-5 rounded-3xl shadow-md;
  backdrop-filter: blur(10px);
  background-color: rgba(255, 255, 255, 0.5);
  border: 1px solid rgba(255, 255, 255, 0.3);
  transition: all 0.3s ease;

}
.maintitle {
  font-size: 3rem;
  text-align: center;
  color: #720d0d;
  margin-top: 2rem;
  margin-bottom: 2rem;
}
.subtitle {
  font-size: 2rem;
  text-align: center;
  color: #720d0d;
  margin-top: 2rem;
  margin-bottom: 2rem;
} 
.mission-section {
  @apply w-[95%] m-auto rounded-3xl shadow-md;
  background-image: url('/wallpaper13.png');
  background-size: cover;
  background-attachment: fixed;
  background-repeat: no-repeat;
}
.titleaccord {
  @apply w-[100%] m-auto rounded-3xl shadow-md;
  backdrop-filter: blur(10px);
  background-color: rgba(255, 255, 255, 0.5);
  border: 1px solid rgba(255, 255, 255, 0.3);
  transition: all 0.3s ease;
}
.UAccordion .UIcon {
  transition: transform 0.3s ease;
}

.UAccordion .UButton:hover {
  background-color: rgba(255, 255, 255, 0.7);
}

.UAccordion .UButton {
  
  color: #333; /* ou une autre couleur selon votre design */
}


.UAccordion .UButton[aria-expanded="true"] {
  background-color: rgba(200, 200, 200, 0.5); 
  opacity: 0;
transform: translateY(20px);
animation: fadeInUp 0.3s ease forwards;
}

@keyframes fadeInUp {
from {
opacity: 0;
transform: translateY(20px);
}
to {
opacity: 1;
transform: translateY(0);
}
}


.UAccordion .UButton:nth-child(1) { animation-delay: 0.1s; }
.UAccordion .UButton:nth-child(2) { animation-delay: 0.2s; }
.UAccordion .UButton:nth-child(3) { animation-delay: 0.3s; }/* Choisissez une couleur appropriée */


.container-content {
  @apply flex flex-col items-center justify-center w-full h-[50rem] p-5 m-auto rounded-3xl shadow-md;
}

.title {
  @apply text-4xl font-bold text-center text-gray-800 p-5;
}
</style>
