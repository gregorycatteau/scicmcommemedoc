<template>
  <aside v-if="resource" class="DetailPanel">
    <button type="button" class="CloseButton" @click="$emit('close')">Fermer</button>
    <ResourceVerificationBadge :status="resource.verifiedStatus" />
    <h2>{{ resource.name }}</h2>
    <p>{{ resource.fullDescription }}</p>
    <dl>
      <div><dt>Commune</dt><dd>{{ resource.locality || 'A verifier' }}</dd></div>
      <div><dt>Produits</dt><dd>{{ resource.products.join(', ') || 'Non renseigne' }}</dd></div>
      <div><dt>Services</dt><dd>{{ resource.services.join(', ') || 'Non renseigne' }}</dd></div>
      <div><dt>Distribution</dt><dd>{{ resource.distributionModes.join(', ') || 'Non renseigne' }}</dd></div>
      <div><dt>Saisonnalite</dt><dd>{{ resource.seasonality.join(', ') || 'Non renseignee' }}</dd></div>
      <div><dt>Source</dt><dd>{{ resource.sourceNote }}</dd></div>
    </dl>
    <ResourceOpeningHours :resource="resource" />
    <a v-if="safeWebsite" :href="safeWebsite" target="_blank" rel="noopener noreferrer">Voir le site source</a>
    <button type="button" class="ReportButton" @click="$emit('report', resource.slug)">Signaler une erreur</button>
  </aside>
</template>

<script setup lang="ts">
import type { Resource } from '~/types/resources'
import { isSafeHttpUrl } from '~/utils/formGuards'

const props = defineProps<{ resource: Resource | null }>()
defineEmits<{ close: []; report: [slug: string] }>()

const safeWebsite = computed(() => (props.resource?.website && isSafeHttpUrl(props.resource.website) ? props.resource.website : ''))
</script>

<style scoped>
@reference "~/assets/css/main.css";

.DetailPanel {
  @apply grid gap-4 rounded-[2rem] border border-black/10 bg-white p-6 shadow-2xl shadow-black/10;
}
.CloseButton {
  @apply justify-self-end rounded-full border border-black/10 px-4 py-2 font-bold;
}
.DetailPanel h2 {
  @apply text-3xl font-black leading-tight;
}
.DetailPanel p {
  @apply leading-8 text-black/75;
}
.DetailPanel dl {
  @apply grid gap-3 text-sm;
}
.DetailPanel dt {
  @apply font-black;
}
.DetailPanel dd {
  @apply text-black/70;
}
.DetailPanel a,
.ReportButton {
  @apply rounded-full bg-black px-5 py-3 text-center font-bold text-white;
}
.ReportButton {
  @apply bg-orange-600;
}
</style>
