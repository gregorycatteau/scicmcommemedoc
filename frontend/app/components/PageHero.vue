<template>
  <section class="PageHero" :class="toneClass">
    <div class="HeroInner">
      <p class="HeroKicker">{{ kicker }}</p>
      <h1>{{ title }}</h1>
      <p class="HeroSubtitle">{{ subtitle }}</p>
    </div>
  </section>
</template>

<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    kicker: string
    title: string
    subtitle: string
    tone?: 'light' | 'dark' | 'clay'
  }>(),
  {
    tone: 'light',
  },
)

const toneClass = computed(() => `PageHero--${props.tone}`)
</script>

<style scoped>
@reference "~/assets/css/main.css";

.PageHero {
  @apply border-b border-black/8;
}
.PageHero--light {
  @apply bg-stone-100 text-black;
}
.PageHero--dark {
  @apply bg-black text-white;
}
.PageHero--clay {
  @apply bg-stone-200 text-black;
}
.HeroInner {
  min-height: min(760px, calc(100svh - var(--header-height)));
  padding-block: var(--section-padding-soft);
  @apply mx-auto grid max-w-7xl content-center px-4 sm:px-6 lg:px-8;
}
.HeroKicker {
  @apply text-xs font-black uppercase tracking-[0.24em] text-orange-800;
}
.PageHero--dark .HeroKicker {
  @apply text-orange-600;
}
.PageHero h1 {
  @apply mt-4 max-w-5xl text-4xl font-black leading-[0.98] sm:text-5xl lg:text-6xl;
}
.HeroSubtitle {
  @apply mt-5 max-w-3xl text-lg leading-8 opacity-75 sm:text-xl;
}
</style>
