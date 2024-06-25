<template>
  <div class="mainwrapper">
    <h2 class="title">Formulaire de contact</h2>
    <div class="containered">
      <img src="/contact.png" alt="Logo" class="image" />
      <component :is="currentFormComponent" />
    </div>
    <MailSender v-if="mounted" :formData="formData" :onSuccess="onEmailSent" />
    <GratefulMessage v-if="showModal" @close="showModal = false" />
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import { useUserStore } from '@/stores/user';
import MailSender from '@/components/involvmentforms/involvedmailsender.vue';
import GratefulMessage from '@/components/gratefulmessage.vue';

const userStore = useUserStore();
const currentState = userStore.currentState;

const formData = ref({});
const mounted = ref(false);
const showModal = ref(false);

const formComponents = {
  individual: () => import('@/components/involvmentforms/individualform.vue'),
  company: () => import('@/components/involvmentforms/societyform.vue'),
  association: () => import('@/components/involvmentforms/associationform.vue'),
};

const currentFormComponent = computed(() => formComponents[currentState]);

const onEmailSent = () => {
  // Réinitialise le formulaire
  formData.value = {};

  // Affiche le modal de remerciement
  showModal.value = true;
};

onMounted(() => {
  mounted.value = true;
});
</script>

<style scoped>
.mainwrapper {
  @apply flex flex-col justify-center items-center h-full;
}
.title {
  @apply text-2xl text-scicgreen font-bold;
}
.containered {
  @apply flex flex-row gap-4 justify-center items-center w-10/12 my-3 p-3 border border-solid border-scicgreen rounded-lg shadow-lg bg-transparent;
}
.image {
  @apply w-44 rounded-2xl;
}
</style>
