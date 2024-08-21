<template>
  <div>
    <button @click="sendEmail" class="btn-send" :disabled="isSending">
      <span v-if="!isSending">Envoyer le message</span>
      <span v-else>Envoi en cours <i class="fa fa-spinner fa-spin"></i></span>
    </button>
  </div>
</template>

<script setup>
import { useNuxtApp } from '#app'
import { toRefs, ref } from 'vue'

const props = defineProps({
  formData: {
    type: Object,
    required: true
  },
  onSuccess: {
    type: Function,
    required: true
  }
})

const { $mail } = useNuxtApp()
const isSending = ref(false)

const sendEmail = async () => {
  const { username, email, phone, message } = toRefs(props.formData)

  try {
    isSending.value = true
    await $mail.send({
      host: process.env.SMTP_HOST,
      port: 465,
      secure: true,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS
      },
      from: process.env.SMTP_FROM,
      to: process.env.SMTP_USER,
      subject: 'Message du formulaire de contact',
      text: `Nom: ${username.value}\nEmail: ${email.value}\nTéléphone: ${phone.value}\nMessage: ${message.value}`
    })
    props.onSuccess()  // Appel de la fonction de callback pour la réussite
  } catch (error) {
    console.error('Error sending email:', error)
  } finally {
    isSending.value = false
  }
}
</script>

<style scoped>
.btn-send {
  @apply mt-4 bg-scicgreen text-white py-2 px-4 rounded text-base font-semibold;
  font-family: 'Lora', 'sans-serif';
}
.btn-send:disabled {
  @apply cursor-not-allowed opacity-75;
}
</style>

<style>
@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css');
</style>
