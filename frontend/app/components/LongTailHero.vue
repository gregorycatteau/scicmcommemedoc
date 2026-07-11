<template>
  <section class="LongTailHero" :class="toneClass">
    <div>
      <p class="HeroKicker">{{ kicker }}</p>
      <h1>{{ title }}</h1>
      <p>{{ description }}</p>
    </div>
    <aside class="HeroPromise">
      <span>{{ promiseLabel }}</span>
      <strong>{{ promise }}</strong>
    </aside>
  </section>
</template>

<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    kicker: string
    title: string
    description: string
    promise: string
    promiseLabel?: string
    tone?: 'light' | 'dark' | 'clay'
  }>(),
  {
    promiseLabel: 'Benefice immediat',
    tone: 'light',
  },
)

const toneClass = computed(() => `LongTailHero--${props.tone}`)
</script>

<style scoped>
@reference "~/assets/css/main.css";

.LongTailHero {
  min-height: min(760px, calc(100svh - var(--header-height)));
  padding-block: var(--section-padding-soft);
  @apply mx-auto grid max-w-7xl content-center gap-8 px-4 sm:px-6 lg:grid-cols-[1fr_0.42fr] lg:px-8;
}
.LongTailHero--light {
  @apply bg-parchment text-ink;
}
.LongTailHero--dark {
  @apply bg-ink text-white;
}
.LongTailHero--clay {
  @apply bg-mist text-ink;
}
.HeroKicker {
  @apply text-sm font-black uppercase tracking-[0.22em] text-clay;
}
.LongTailHero--dark .HeroKicker {
  @apply text-primary;
}
.LongTailHero h1 {
  @apply mt-5 max-w-5xl text-5xl font-black leading-none sm:text-6xl lg:text-7xl;
}
.LongTailHero p:not(.HeroKicker) {
  @apply mt-6 max-w-3xl text-xl leading-9 opacity-75;
}
.HeroPromise {
  @apply self-end rounded-[2rem] border border-ink/10 bg-white/65 p-6 shadow-sm;
}
.LongTailHero--dark .HeroPromise {
  @apply border-white/15 bg-white/10;
}
.HeroPromise span {
  @apply text-sm font-black uppercase tracking-[0.18em] text-clay;
}
.HeroPromise strong {
  @apply mt-4 block text-2xl font-black leading-tight;
}
</style>
