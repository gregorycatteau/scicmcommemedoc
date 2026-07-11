<template>
  <section class="ResourceList" :aria-busy="loading">
    <p class="ResultCount" aria-live="polite">{{ total }} ressource{{ total > 1 ? 's' : '' }} trouvee{{ total > 1 ? 's' : '' }}</p>
    <ResourceEmptyState v-if="!loading && !resources.length" title="Aucun resultat" text="Essaie de retirer un filtre ou propose une ressource a verifier." action-label="Retirer les filtres" @action="$emit('reset')" />
    <div v-else class="Cards">
      <ResourceCard v-for="resource in resources" :key="resource.id" :resource="resource" @select="$emit('select', $event)" />
    </div>
  </section>
</template>

<script setup lang="ts">
import type { Resource } from '~/types/resources'

defineProps<{ resources: Resource[]; total: number; loading?: boolean }>()
defineEmits<{ select: [slug: string]; reset: [] }>()
</script>

<style scoped>
@reference "~/assets/css/main.css";

.ResourceList {
  @apply grid gap-4;
}
.ResultCount {
  @apply font-black text-ink/70;
}
.Cards {
  @apply grid gap-4;
}
</style>
