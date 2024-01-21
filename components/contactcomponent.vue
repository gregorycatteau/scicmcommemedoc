<template>
  <div class="mainwrapper">
    <UContainer class="containered">
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
    </UContainer>
  </div>
</template>

<script setup>
import { z } from 'zod'
import { reactive } from 'vue'

const schema = z.object({
  username: z.string().min(2, 'Doit contenir au moins 2 caractères'),
  email: z.string().email('Adresse email invalide'),
  phone: z.string().regex(/^\d{10}$/, 'Numéro de téléphone invalide'),
  message: z.string().min(10, 'Le message doit contenir au moins 10 caractères')
})

const state = reactive({
  username: undefined,
  email: undefined,
  phone: undefined,
  message: undefined
})

</script>

<style scoped>
.mainwrapper {
  @apply flex justify-center items-center h-full;
}
.containered {
  @apply flex justify-center items-center w-9/12 my-3 p-3 border border-solid border-green-800 rounded-lg shadow-lg bg-white;
}
.image {
  @apply w-48 rounded-2xl;
}
.schema {
  @apply bg-white p-4 rounded-lg shadow-lg w-9/12 mx-auto;
}
</style>