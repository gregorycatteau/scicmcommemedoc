<template>
  <form class="ResourceForm" @submit.prevent="submit">
    <h2>Signaler une information</h2>
    <p>Le formulaire prepare le futur circuit de moderation. Tant que le service n est pas branche, l envoi echoue proprement.</p>
    <input v-model="honeypot" class="Honeypot" tabindex="-1" autocomplete="off" aria-hidden="true" />
    <label>
      <span>Type de signalement</span>
      <select v-model="kind">
        <option value="erreur">Information incorrecte</option>
        <option value="mise-a-jour">Mise a jour</option>
        <option value="fermeture">Fermeture</option>
      </select>
    </label>
    <label>
      <span>Message</span>
      <textarea v-model="message" maxlength="1200" rows="4" required></textarea>
    </label>
    <button :disabled="pending" type="submit">{{ pending ? 'Verification...' : 'Envoyer le signalement' }}</button>
    <p v-if="feedback" role="status" aria-live="polite">{{ feedback }}</p>
  </form>
</template>

<script setup lang="ts">
import { normalizeFormText } from '~/utils/formGuards'

const props = defineProps<{ resourceSlug?: string }>()
const kind = ref('erreur')
const message = ref('')
const honeypot = ref('')
const pending = ref(false)
const feedback = ref('')
const startedAt = Date.now()

async function submit() {
  if (pending.value) return
  pending.value = true
  feedback.value = ''

  await new Promise((resolve) => setTimeout(resolve, 300))
  const cleanMessage = normalizeFormText(message.value, 1200)

  if (honeypot.value || Date.now() - startedAt < 1200 || cleanMessage.length < 10) {
    feedback.value = 'Le signalement ne peut pas etre transmis pour le moment. Verifie le message et reessaie dans quelques instants.'
    pending.value = false
    return
  }

  // Future mutation GraphQL moderee : aucun signalement public ne doit publier directement une fiche.
  void props.resourceSlug
  void kind.value
  feedback.value = "Le service de contribution n'est pas encore connecte. Ton message n'a pas ete transmis."
  pending.value = false
}
</script>

<style scoped>
@reference "~/assets/css/main.css";

.ResourceForm {
  @apply grid gap-4 rounded-[2rem] border border-ink/10 bg-white/70 p-6;
}
.ResourceForm h2 {
  @apply text-2xl font-black;
}
.ResourceForm p {
  @apply leading-7 text-ink/70;
}
.ResourceForm label {
  @apply grid gap-2 font-bold;
}
.ResourceForm select,
.ResourceForm textarea {
  @apply rounded-xl border border-ink/10 bg-white px-4 py-3 font-normal;
}
.ResourceForm button {
  @apply rounded-full bg-primary px-5 py-3 font-bold text-white disabled:opacity-60;
}
.Honeypot {
  @apply hidden;
}
</style>
