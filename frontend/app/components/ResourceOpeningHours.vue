<template>
  <p class="OpeningHours">
    <strong>Horaires</strong>
    <span>{{ resource.openingHours || 'Horaires a verifier avant deplacement' }}</span>
    <em v-if="warn">{{ resource.openingHoursNote || 'Information non verifiee recemment.' }}</em>
  </p>
</template>

<script setup lang="ts">
import type { Resource } from '~/types/resources'
import { shouldWarnOpeningHours } from '~/utils/resources'

const props = defineProps<{ resource: Resource }>()
const warn = computed(() => shouldWarnOpeningHours(props.resource))
</script>

<style scoped>
@reference "~/assets/css/main.css";

.OpeningHours {
  @apply grid gap-1 text-sm text-black/75;
}
.OpeningHours strong {
  @apply text-black;
}
.OpeningHours em {
  @apply not-italic text-orange-800;
}
</style>
