<template>
  <section class="EmptyState">
    <h3>{{ title }}</h3>
    <p>{{ text }}</p>
    <button v-if="actionLabel" type="button" @click="$emit('action')">{{ actionLabel }}</button>
  </section>
</template>

<script setup lang="ts">
defineProps<{ title: string; text: string; actionLabel?: string }>()
defineEmits<{ action: [] }>()
</script>

<style scoped>
@reference "~/assets/css/main.css";

.EmptyState {
  @apply rounded-[2rem] border border-dashed border-ink/20 bg-white/50 p-8 text-center;
}
.EmptyState h3 {
  @apply text-2xl font-black;
}
.EmptyState p {
  @apply mx-auto mt-3 max-w-2xl leading-7 text-ink/70;
}
.EmptyState button {
  @apply mt-6 rounded-full bg-ink px-5 py-3 font-bold text-white;
}
</style>
