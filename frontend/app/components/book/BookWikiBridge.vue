<template>
  <aside class="BookWikiBridge" aria-label="Passer du livre au wiki">
    <p>Dans le Wiki</p>
    <h2>{{ title }}</h2>
    <div>
      <ExplicitLink v-for="link in links" :key="link.to + link.label" :to="link.to" :label="link.label" :description="link.description" />
    </div>
  </aside>
</template>

<script setup lang="ts">
import type { WikiLink } from '~/types/book'

withDefaults(
  defineProps<{
    title?: string
    links: WikiLink[]
  }>(),
  {
    title: 'Passer du recit a l information verifiable.',
  },
)
</script>

<style scoped>
@reference "~/assets/css/main.css";

.BookWikiBridge {
  @apply mx-auto my-16 grid max-w-5xl gap-6 rounded-[1.5rem] bg-white/70 p-6 shadow-sm sm:p-8;
}
.BookWikiBridge > p {
  @apply text-sm font-black uppercase tracking-[0.2em] text-clay;
}
.BookWikiBridge h2 {
  @apply max-w-3xl text-3xl font-black leading-tight;
}
.BookWikiBridge > div {
  @apply flex flex-wrap gap-3;
}
</style>
