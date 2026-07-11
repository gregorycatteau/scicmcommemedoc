<template>
  <figure class="EditorialImage">
    <img :src="src" :alt="alt" :width="width" :height="height" :loading="loading" />
    <figcaption v-if="caption">{{ caption }}</figcaption>
  </figure>
</template>

<script setup lang="ts">
withDefaults(
  defineProps<{
    src: string
    alt: string
    caption?: string
    width?: string | number
    height?: string | number
    loading?: 'lazy' | 'eager'
  }>(),
  {
    width: 1680,
    height: 1050,
    loading: 'lazy',
  },
)
</script>

<style scoped>
@reference "~/assets/css/main.css";

.EditorialImage {
  @apply mx-auto max-w-6xl;
}
.EditorialImage img {
  @apply aspect-[16/10] w-full rounded-[1.5rem] object-cover shadow-2xl shadow-ink/15;
}
.EditorialImage figcaption {
  @apply mt-3 text-sm leading-6 text-ink/55;
}
</style>
