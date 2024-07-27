<!-- pages/test.vue -->
<template>
  <div class="mainwrapper">
    <h1 class="title">Informations complémentaires sur l'adhésion</h1>
    <div v-if="membershipDetails">
      <h2 class="subtitle">{{ membershipDetails.title }}</h2>
      <p class="description">{{ membershipDetails.description }}</p>
      <h3 class="beneficestitle">Avantages :</h3>
      <ul class="listing">
        <li class="listitems" v-for="benefit in membershipDetails.benefits" :key="benefit">{{ benefit }}</li>
      </ul>
      <p class="description">Collège : {{ membershipDetails.collegeName }}</p>
      <p class="descriptioncollege">{{ membershipDetails.collegedescription }}</p>
      <p class="description" v-if="membershipDetails.isactionnary">Vous devez souscrire {{ membershipDetails.minactions }} parts sociales.</p>
      <p class="description" v-if="membershipDetails.isactivemember">Vous pouvez participer activement aux activités de la SCIC.</p>

      <!-- Formulaire spécifique -->
      <component :is="currentFormComponent" v-if="currentFormComponent" />
      <p v-else>Formulaire non disponible pour le type d'utilisateur sélectionné.</p>
    </div>
    <div v-else>
      <p>Les détails de l'adhésion ne sont pas disponibles. Veuillez vérifier vos choix précédents.</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, defineAsyncComponent, onMounted, ref } from 'vue';
import { useRouter } from 'vue-router';
import { useUserStore } from '@/stores/user';
import memberships from '@/data/membership';

// Store, router et calculs réactifs
const router = useRouter();
const store = useUserStore();

const userType = computed(() => store.userType);
const userChoice = computed(() => store[`${userType.value}Choice` as keyof typeof store]);

const membershipDetails = computed(() => {
  if (!userType.value || !userChoice.value) {
    return null;
  }
  return memberships[userType.value]?.find(option => option.id === userChoice.value) || null;
});

// Utilisation de defineAsyncComponent pour importer les composants dynamiquement
const formComponents: { [key: string]: ReturnType<typeof defineAsyncComponent> } = {
  individual: defineAsyncComponent(() => import('@/components/involvmentforms/individualform.vue')),
  family: defineAsyncComponent(() => import('@/components/involvmentforms/individualform.vue')),
  entrepreneur: defineAsyncComponent(() => import('@/components/involvmentforms/entrepreneurform.vue')),
  association: defineAsyncComponent(() => import('@/components/involvmentforms/associationform.vue')),
  enterprise: defineAsyncComponent(() => import('@/components/involvmentforms/societyform.vue')),
};

const currentFormComponent = computed(() => formComponents[userType.value] || null);

onMounted(() => {
  if (!userType.value || !userChoice.value) {
    router.push('/');
  }
});
</script>

<style scoped>
.mainwrapper {
  @apply flex flex-col justify-center items-center h-full mt-20 border border-solid border-scicgreen rounded-lg p-5 w-3/4 mx-auto;
}
.title {
  @apply text-3xl text-center text-scicgreen font-bold;
}
.subtitle {
  @apply text-2xl text-center text-scicgreen font-bold;
}
.description {
  @apply text-base text-center text-scicgreen;
}
.beneficestitle {
  @apply text-lg text-center text-scicgreen font-bold;
  font-family: 'Montserrat', 'sans-serif';
}
.listing {
  @apply list-disc list-inside;
  font-family: 'Lora', 'sans-serif';
}
.listitems {
  @apply text-base text-scicgreen;
  font-family: 'Lora', 'sans-serif';
}
.descriptioncollege {
  @apply text-base text-justify indent-2 text-scicgreen font-semibold;
  font-family: 'Lora', 'sans-serif';
}
</style>

