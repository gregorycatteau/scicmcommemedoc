<!-- IndividualForm.vue -->
<template>
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
</template>

<script setup>
import { z } from 'zod';
import { reactive } from 'vue';

const schema = z.object({
  username: z.string().min(2, 'Doit contenir au moins 2 caractères'),
  email: z.string().email('Adresse email invalide'),
  phone: z.string().regex(/^\d{10}$/, 'Numéro de téléphone invalide'),
  message: z.string().min(10, 'Le message doit contenir au moins 10 caractères')
});

const state = reactive({
  username: '',
  email: '',
  phone: '',
  message: ''
});
</script>

<style scoped>
.schema {
  @apply bg-white opacity-85 p-4 rounded-lg shadow-lg w-9/12 mx-auto;
}
</style>
