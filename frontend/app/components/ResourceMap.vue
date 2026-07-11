<template>
  <section class="MapPanel" aria-label="Carte des ressources">
    <div class="MapHeader">
      <h2>Carte schématique</h2>
      <p>Les positions de demonstration ne sont pas des coordonnees reelles. La liste reste la source principale.</p>
    </div>
    <div class="MapCanvas" role="img" aria-label="Vue schematique des ressources de demonstration">
      <button
        v-for="resource in mappableResources"
        :key="resource.id"
        class="MapMarker"
        type="button"
        :style="{ left: `${resource.demoMapPosition?.x}%`, top: `${resource.demoMapPosition?.y}%` }"
        @click="$emit('select', resource.slug)"
      >
        <span>{{ resource.name }}</span>
      </button>
      <p v-if="!mappableResources.length" class="MapEmpty">Aucune coordonnee verifiee disponible.</p>
    </div>
    <p class="MapNote">Aucune geolocalisation automatique. Aucune cle cartographique exposee.</p>
  </section>
</template>

<script setup lang="ts">
import type { Resource } from '~/types/resources'

const props = defineProps<{ resources: Resource[] }>()
defineEmits<{ select: [slug: string] }>()

const mappableResources = computed(() => props.resources.filter((resource) => resource.demoMapPosition))
</script>

<style scoped>
@reference "~/assets/css/main.css";

.MapPanel {
  @apply sticky top-24 grid gap-4 rounded-[2rem] bg-black p-5 text-white;
}
.MapHeader h2 {
  @apply text-2xl font-black;
}
.MapHeader p,
.MapNote {
  @apply mt-2 text-sm leading-6 text-white/70;
}
.MapCanvas {
  @apply relative h-80 overflow-hidden rounded-[1.5rem] border border-white/10 bg-[radial-gradient(circle_at_35%_40%,rgba(255,255,255,.18),transparent_22%),linear-gradient(135deg,rgba(255,255,255,.08),rgba(255,255,255,.02))];
}
.MapCanvas::before {
  content: '';
  @apply absolute inset-x-8 top-1/2 h-px rotate-[-14deg] bg-white/20;
}
.MapMarker {
  @apply absolute min-h-10 -translate-x-1/2 -translate-y-1/2 rounded-full bg-orange-600 px-3 py-2 text-xs font-black text-white shadow-lg;
}
.MapMarker span {
  @apply sr-only;
}
.MapEmpty {
  @apply absolute inset-0 grid place-items-center text-center text-white/70;
}
</style>
