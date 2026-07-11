<template>
  <MainWrapper>
    <PageHero
      kicker="Contact"
      title="Un message simple suffit pour commencer une conversation."
      subtitle="Laisse-nous tes coordonnees et l objet de ta demande. Le formulaire sera relie au service d envoi lors du branchement backend."
      tone="clay"
    />

    <ContentSection>
      <form class="ContactForm" @submit.prevent="submit">
        <input v-model="honeypot" class="Honeypot" tabindex="-1" autocomplete="off" aria-hidden="true" />

        <label class="FormLabel">
          <span>Nom</span>
          <input v-model="form.lastName" required maxlength="120" autocomplete="family-name" @input="clearFieldError('lastName')" />
          <small v-if="errors.lastName" class="FieldError">{{ errors.lastName }}</small>
        </label>

        <label class="FormLabel">
          <span>Prenom</span>
          <input v-model="form.firstName" required maxlength="120" autocomplete="given-name" @input="clearFieldError('firstName')" />
          <small v-if="errors.firstName" class="FieldError">{{ errors.firstName }}</small>
        </label>

        <label class="FormLabel">
          <span>Email</span>
          <input v-model="form.email" required type="email" maxlength="180" autocomplete="email" @input="clearFieldError('email')" />
          <small v-if="errors.email" class="FieldError">{{ errors.email }}</small>
        </label>

        <label class="FormLabel">
          <span>Telephone</span>
          <input v-model="form.phone" type="tel" maxlength="30" autocomplete="tel" @input="clearFieldError('phone')" />
          <small v-if="errors.phone" class="FieldError">{{ errors.phone }}</small>
        </label>

        <label class="FormLabel FormLabelWide">
          <span>Objet du contact</span>
          <textarea v-model="form.subject" required maxlength="1200" rows="6" @input="clearFieldError('subject')" />
          <small v-if="errors.subject" class="FieldError">{{ errors.subject }}</small>
        </label>

        <button class="SubmitButton" :disabled="status === 'pending'" type="submit">
          {{ status === 'pending' ? 'Verification...' : 'Envoyer ma demande' }}
        </button>
        <p v-if="message" class="FormMessage" role="status" aria-live="polite">{{ message }}</p>
      </form>
    </ContentSection>
  </MainWrapper>
</template>

<script setup lang="ts">
import { normalizeFormText } from '~/utils/formGuards'

type ContactField = 'lastName' | 'firstName' | 'email' | 'phone' | 'subject'

const form = reactive({
  lastName: '',
  firstName: '',
  email: '',
  phone: '',
  subject: '',
})
const errors = reactive<Record<ContactField, string>>({
  lastName: '',
  firstName: '',
  email: '',
  phone: '',
  subject: '',
})
const honeypot = ref('')
const status = ref<'idle' | 'pending'>('idle')
const message = ref('')
const startedAt = Date.now()

function clearFieldError(field: ContactField) {
  errors[field] = ''
  message.value = ''
}

function validateForm() {
  errors.lastName = ''
  errors.firstName = ''
  errors.email = ''
  errors.phone = ''
  errors.subject = ''

  form.lastName = normalizeFormText(form.lastName, 120)
  form.firstName = normalizeFormText(form.firstName, 120)
  form.email = normalizeFormText(form.email.toLowerCase(), 180)
  form.phone = normalizeFormText(form.phone, 30)
  form.subject = normalizeFormText(form.subject, 1200)

  if (form.lastName.length < 2) errors.lastName = 'Indique au moins deux caracteres.'
  if (form.firstName.length < 2) errors.firstName = 'Indique au moins deux caracteres.'
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) errors.email = 'Indique une adresse email valide.'
  if (form.phone && !/^[0-9 +().-]{6,30}$/.test(form.phone)) errors.phone = 'Indique un numero lisible ou laisse ce champ vide.'
  if (form.subject.length < 10) errors.subject = 'Ajoute quelques mots pour situer ta demande.'

  return !errors.lastName && !errors.firstName && !errors.email && !errors.phone && !errors.subject
}

async function submit() {
  if (status.value === 'pending') return

  if (!validateForm()) {
    message.value = 'Corrige les champs signales avant de renvoyer ta demande.'
    return
  }

  status.value = 'pending'
  await new Promise((resolve) => setTimeout(resolve, 300))

  if (honeypot.value || Date.now() - startedAt < 1200) {
    message.value = 'La demande ne peut pas etre transmise pour le moment. Verifie les champs et reessaie dans quelques instants.'
    status.value = 'idle'
    return
  }

  // Future mutation GraphQL moderee : ne pas simuler de succes tant que le service d envoi n est pas branche.
  message.value = "Le formulaire de contact n'est pas encore connecte. Ta demande n'a pas ete transmise."
  status.value = 'idle'
}

usePageSeo(
  'Contact',
  'Contacter M Comme Medoc avec un formulaire simple : nom, prenom, email, telephone et objet de la demande.',
)
</script>

<style scoped>
@reference "~/assets/css/main.css";

.ContactForm {
  @apply mx-auto grid max-w-4xl gap-5 rounded-[2rem] border border-black/10 bg-white/70 p-6 sm:grid-cols-2 sm:p-8;
}
.FormLabel {
  @apply grid gap-2 font-bold text-black;
}
.FormLabelWide {
  @apply sm:col-span-2;
}
.FormLabel input,
.FormLabel textarea {
  @apply rounded-2xl border border-black/10 bg-white px-4 py-4 font-normal text-black outline-none transition duration-300 focus:border-orange-600;
}
.FieldError {
  @apply text-sm font-semibold text-orange-700;
}
.SubmitButton {
  @apply rounded-full bg-black px-6 py-4 font-bold text-white transition duration-300 hover:bg-orange-600 disabled:cursor-not-allowed disabled:opacity-70;
}
.FormMessage {
  @apply rounded-2xl border border-black/10 bg-white px-4 py-3 text-sm text-black/75 sm:col-span-2;
}
.Honeypot {
  @apply hidden;
}
</style>
