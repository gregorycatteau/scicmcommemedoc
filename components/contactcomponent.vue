<!-- contactform.vue -->
<template>
  <div class="mainwrapper">
    <h2 class="title">Formulaire de contact</h2>
    <div class="containered">
      <img src="/contact.png" alt="Logo" class="image" />
      <UForm :schema="schema" :state="state" class="schema">
        <UFormGroup label="Nom d'utilisateur" name="username" eager-validation>
          <UInput v-model="state.username" placeholder="Par exemple : Jean Dupont" />
        </UFormGroup>
        
        <UFormGroup label="Email" name="email" eager-validation>
          <UInput v-model="state.email" placeholder="Par exemple : jean.dupont@example.com" />
        </UFormGroup>
        
        <UFormGroup label="Numéro de téléphone" name="phone" eager-validation>
          <UInput v-model="state.phone" placeholder="Par exemple : 0123456789" />
        </UFormGroup>
        
        <UFormGroup label="Message" name="message" eager-validation>
          <UTextarea v-model="state.message" placeholder="Votre message..." />
        </UFormGroup>
      </UForm>
    </div>
    <MailSender v-if="mounted" :formData="state" :onSuccess="onEmailSent" />
    <gratefulmessage v-if="showModal" @close="showModal = false" />
  </div>
</template>

<script setup>
import { z } from 'zod'
import { reactive, ref, onMounted } from 'vue'
import MailSender from '@/components/mailsender.vue'
import GratefulMessage from '@/components/gratefulmessage.vue'

const schema = z.object({
  username: z.string().min(2, 'Doit contenir au moins 2 caractères'),
  email: z.string().email('Adresse email invalide'),
  phone: z.string().regex(/^\d{10}$/, 'Numéro de téléphone invalide'),
  message: z.string().min(10, 'Le message doit contenir au moins 10 caractères')
})

const state = reactive({
  username: '',
  email: '',
  phone: '',
  message: ''
})

const mounted = ref(false)
const showModal = ref(false)

const onEmailSent = () => {
  // Réinitialise le formulaire
  state.username = ''
  state.email = ''
  state.phone = ''
  state.message = ''

  // Affiche le modal de remerciement
  showModal.value = true
}

onMounted(() => {
  mounted.value = true
})
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
.schema {
  @apply bg-white opacity-85 p-4 rounded-lg shadow-lg w-9/12 mx-auto;
}
</style>
