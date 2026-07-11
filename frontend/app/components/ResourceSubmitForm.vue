<template>
  <form class="ResourceForm" @submit.prevent="submit">
    <h2>Proposer une ressource a verifier</h2>
    <p>Aucune publication directe. Toute proposition doit etre relue, sourcee et verifiee.</p>
    <input v-model="honeypot" class="Honeypot" tabindex="-1" autocomplete="off" aria-hidden="true" />
    <label><span>Nom de la ressource</span><input v-model="name" maxlength="140" required /></label>
    <label><span>Commune ou zone</span><input v-model="locality" maxlength="120" /></label>
    <label><span>Pourquoi cette ressource est utile ?</span><textarea v-model="reason" maxlength="1200" rows="4" required></textarea></label>
    <label><span>Source publique ou note de verification</span><textarea v-model="source" maxlength="1200" rows="3" required></textarea></label>
    <button :disabled="pending" type="submit">{{ pending ? 'Verification...' : 'Proposer la ressource' }}</button>
    <p v-if="feedback" role="status" aria-live="polite">{{ feedback }}</p>
  </form>
</template>

<script setup lang="ts">
import { normalizeFormText } from '~/utils/formGuards'

const name = ref('')
const locality = ref('')
const reason = ref('')
const source = ref('')
const honeypot = ref('')
const pending = ref(false)
const feedback = ref('')
const startedAt = Date.now()

async function submit() {
  if (pending.value) return
  pending.value = true
  feedback.value = ''
  await new Promise((resolve) => setTimeout(resolve, 300))

  const cleanName = normalizeFormText(name.value, 140)
  const cleanReason = normalizeFormText(reason.value, 1200)
  const cleanSource = normalizeFormText(source.value, 1200)

  if (honeypot.value || Date.now() - startedAt < 1200 || cleanName.length < 2 || cleanReason.length < 10 || cleanSource.length < 5) {
    feedback.value = 'La proposition ne peut pas etre transmise pour le moment. Verifie les champs et reessaie dans quelques instants.'
    pending.value = false
    return
  }

  // Future mutation GraphQL moderee : une proposition doit rester en attente de validation.
  void locality.value
  feedback.value = "Le service de contribution n'est pas encore connecte. La proposition n'a pas ete transmise."
  pending.value = false
}
</script>

<style scoped>
@reference "~/assets/css/main.css";

.ResourceForm {
  @apply grid gap-4 rounded-[2rem] border border-black/10 bg-white/70 p-6;
}
.ResourceForm h2 {
  @apply text-2xl font-black;
}
.ResourceForm p {
  @apply leading-7 text-black/70;
}
.ResourceForm label {
  @apply grid gap-2 font-bold;
}
.ResourceForm input,
.ResourceForm textarea {
  @apply rounded-xl border border-black/10 bg-white px-4 py-3 font-normal;
}
.ResourceForm button {
  @apply rounded-full bg-orange-600 px-5 py-3 font-bold text-white disabled:opacity-60;
}
.Honeypot {
  @apply hidden;
}
</style>
