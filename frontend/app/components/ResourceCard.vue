<template>
  <article class="ResourceCard">
    <div class="ResourceCardHeader">
      <ResourceVerificationBadge :status="resource.verifiedStatus" />
      <span v-if="resource.demo" class="DemoTag">Demo</span>
    </div>
    <h3>{{ resource.name }}</h3>
    <p>{{ resource.shortDescription }}</p>
    <dl>
      <div><dt>Type</dt><dd>{{ resource.resourceType }}</dd></div>
      <div><dt>Commune</dt><dd>{{ resource.locality || 'A verifier' }}</dd></div>
      <div><dt>Produits / services</dt><dd>{{ [...resource.products, ...resource.services].slice(0, 4).join(', ') || 'Non renseigne' }}</dd></div>
      <div><dt>Distribution</dt><dd>{{ resource.distributionModes.join(', ') || 'Non renseigne' }}</dd></div>
    </dl>
    <ResourceOpeningHours :resource="resource" />
    <button class="CardButton" type="button" @click="$emit('select', resource.slug)">Voir la fiche</button>
  </article>
</template>

<script setup lang="ts">
import type { Resource } from '~/types/resources'

defineProps<{ resource: Resource }>()
defineEmits<{ select: [slug: string] }>()
</script>

<style scoped>
@reference "~/assets/css/main.css";

.ResourceCard {
  @apply grid gap-4 rounded-[2rem] border border-black/10 bg-white/65 p-5;
}
.ResourceCardHeader {
  @apply flex flex-wrap items-center gap-2;
}
.DemoTag {
  @apply rounded-full bg-orange-800 px-3 py-1 text-xs font-black uppercase tracking-[0.12em] text-white;
}
.ResourceCard h3 {
  @apply text-2xl font-black leading-tight;
}
.ResourceCard p {
  @apply leading-7 text-black/70;
}
.ResourceCard dl {
  @apply grid gap-2 text-sm;
}
.ResourceCard div {
  @apply grid gap-1;
}
.ResourceCard dt {
  @apply font-black text-black;
}
.ResourceCard dd {
  @apply text-black/70;
}
.CardButton {
  @apply min-h-11 rounded-full bg-black px-5 py-3 font-bold text-white transition duration-300 hover:bg-orange-600;
}
</style>
