<template>
  <span class="Badge" :class="`Badge--${status}`">{{ label }}</span>
</template>

<script setup lang="ts">
import type { VerifiedStatus } from '~/types/resources'

const props = defineProps<{ status: VerifiedStatus }>()

const label = computed(
  () =>
    ({
      'non-verifie': 'Non verifie',
      'en-cours': 'Verification en cours',
      verifie: 'Verifie',
      'information-perimee': 'Information perimee',
      ferme: 'Ferme',
      refuse: 'Refuse',
    })[props.status],
)
</script>

<style scoped>
@reference "~/assets/css/main.css";

.Badge {
  @apply inline-flex rounded-full border px-3 py-1 text-xs font-black uppercase tracking-[0.12em];
}
.Badge--verifie {
  @apply border-emerald-700/20 bg-emerald-50 text-emerald-900;
}
.Badge--en-cours {
  @apply border-amber-700/20 bg-amber-50 text-amber-900;
}
.Badge--non-verifie,
.Badge--information-perimee,
.Badge--ferme,
.Badge--refuse {
  @apply border-ink/15 bg-white/70 text-ink/75;
}
</style>
