<template>
  <MainWrapper>
    <PageHero
      kicker="Participer"
      title="Un premier pas doit rester simple."
      subtitle="Dis-nous ce qui t'amene ici, puis viens a une rencontre. Le reste se construit avec le temps, a ta mesure."
      tone="light"
    />

    <ContentSection>
      <div class="JoinGrid">
        <div class="PathPanel">
          <article class="PathStep">
            <span>Semer</span>
            <h2>Tu poses une intention.</h2>
            <p>Une idee, un savoir-faire, une question, une envie d'aider ou juste le besoin de comprendre.</p>
          </article>
          <article class="PathStep">
            <span>Cultiver</span>
            <h2>On se rencontre.</h2>
            <p>Une discussion courte permet de trouver le bon point d'entree : projet, atelier, producteur, entraide.</p>
          </article>
          <article class="PathStep">
            <span>Recolter</span>
            <h2>Tu contribues a ta mesure.</h2>
            <p>Le but n'est pas de tout demander a quelques personnes, mais de rendre chaque contribution possible.</p>
          </article>
        </div>

        <section class="FormPanel">
          <p class="FormKicker">Premier pas</p>
          <h2>Raconte-nous pourquoi tu veux venir.</h2>
          <form class="MemberForm" @submit.prevent="submit">
            <label class="FormLabel">
              <span>Nom</span>
              <input v-model="form.name" required minlength="2" maxlength="120" class="FormInput" name="name" autocomplete="name" @input="clearFieldError('name')" />
              <small v-if="errors.name" class="FieldError">{{ errors.name }}</small>
            </label>
            <label class="FormLabel">
              <span>Email</span>
              <input v-model="form.email" required type="email" maxlength="180" class="FormInput" name="email" autocomplete="email" @input="clearFieldError('email')" />
              <small v-if="errors.email" class="FieldError">{{ errors.email }}</small>
            </label>
            <label class="FormLabel">
              <span>Ce qui t'amene ici</span>
              <textarea v-model="form.reason" required minlength="10" maxlength="1200" rows="6" class="FormInput" name="reason" @input="clearFieldError('reason')" />
              <small v-if="errors.reason" class="FieldError">{{ errors.reason }}</small>
            </label>
            <button :disabled="status === 'pending'" class="SubmitButton">
              {{ status === 'pending' ? 'Envoi en cours...' : 'Envoyer mon intention' }}
            </button>
            <p v-if="message" class="FormMessage" role="status" aria-live="polite">{{ message }}</p>
          </form>
        </section>
      </div>
    </ContentSection>
  </MainWrapper>
</template>

<script setup lang="ts">
const form = reactive({ name: '', email: '', reason: '' })
const status = ref<'idle' | 'pending'>('idle')
const message = ref('')
const errors = reactive<Record<'name' | 'email' | 'reason', string>>({
  name: '',
  email: '',
  reason: '',
})
const { mutate } = useGraphQL()

function normalizeSingleLine(value: string, maxLength: number) {
  return value
    .replace(/[\u0000-\u001F\u007F]+/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
    .slice(0, maxLength)
}

function normalizeMessage(value: string, maxLength: number) {
  return value
    .replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F\u007F]+/g, ' ')
    .replace(/\r/g, '')
    .replace(/[ \t]+/g, ' ')
    .replace(/\n{3,}/g, '\n\n')
    .trim()
    .slice(0, maxLength)
}

function clearFieldError(field: 'name' | 'email' | 'reason') {
  errors[field] = ''
  message.value = ''
}

function validateForm() {
  errors.name = ''
  errors.email = ''
  errors.reason = ''

  const name = normalizeSingleLine(form.name, 120)
  const email = normalizeSingleLine(form.email.toLowerCase(), 180)
  const reason = normalizeMessage(form.reason, 1200)

  form.name = name
  form.email = email
  form.reason = reason

  if (name.length < 2) {
    errors.name = 'Indique au moins deux caracteres.'
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    errors.email = 'Indique une adresse email valide.'
  }

  if (reason.length < 10) {
    errors.reason = 'Ajoute quelques mots pour situer ta demande.'
  }

  return !errors.name && !errors.email && !errors.reason
}

async function submit() {
  if (status.value === 'pending') {
    return
  }

  if (!validateForm()) {
    message.value = 'Corrige les champs signales avant de renvoyer ta demande.'
    return
  }

  status.value = 'pending'
  try {
    // Le backend GraphQL doit etre actif pour que l'envoi fonctionne.
    await mutate(`
      mutation CreateMemberRequest($name: String!, $email: String!, $reason: String!) {
        createMemberRequest(name: $name, email: $email, reason: $reason) {
          ok
        }
      }
    `, { ...form })
    message.value = 'Intention recue. On revient vers toi avec la prochaine rencontre.'
    form.name = ''
    form.email = ''
    form.reason = ''
  } catch {
    message.value = "Nous n'avons pas pu transmettre ta demande pour le moment. Tes informations sont conservees dans le formulaire. Tu peux reessayer dans quelques instants."
  } finally {
    status.value = 'idle'
  }
}

usePageSeo(
  'Faire le premier pas',
  'Faire un premier pas vers M Comme Medoc et participer a un mouvement local fonde sur la cooperation.',
)
</script>

<style scoped>
@reference "~/assets/css/main.css";

.JoinGrid {
  @apply grid gap-8 lg:grid-cols-[0.95fr_1.05fr];
}
.PathPanel {
  @apply grid gap-4;
}
.PathStep {
  @apply rounded-[2rem] border border-ink/10 bg-white/55 p-7;
}
.PathStep span {
  @apply text-sm font-black uppercase tracking-[0.2em] text-clay;
}
.PathStep h2 {
  @apply mt-5 text-3xl font-black leading-tight text-ink;
}
.PathStep p {
  @apply mt-4 text-lg leading-8 text-ink/70;
}
.FormPanel {
  @apply rounded-[2rem] bg-ink p-7 text-white shadow-2xl shadow-ink/20 sm:p-10;
}
.FormKicker {
  @apply text-sm font-black uppercase tracking-[0.22em] text-primary;
}
.FormPanel h2 {
  @apply mt-5 text-4xl font-black leading-tight;
}
.MemberForm {
  @apply mt-8 grid gap-5;
}
.FormLabel {
  @apply grid gap-2 font-semibold text-white;
}
.FormInput {
  @apply rounded-2xl border border-white/15 bg-white/10 px-4 py-4 font-normal text-white outline-none transition duration-500 placeholder:text-white/40 focus:border-primary focus:bg-white/15;
}
.FieldError {
  @apply text-sm font-semibold text-orange-200;
}
.SubmitButton {
  @apply rounded-full border border-white bg-primary px-6 py-4 font-bold text-white transition duration-500 hover:bg-primary-dark disabled:cursor-not-allowed disabled:opacity-70;
}
.FormMessage {
  @apply rounded-2xl border border-white/15 bg-white/10 px-4 py-3 text-sm text-white;
}
</style>
