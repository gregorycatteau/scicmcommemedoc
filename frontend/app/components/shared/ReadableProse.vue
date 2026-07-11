<template>
  <div class="ReadableProse">
    <slot />
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
@reference "~/assets/css/main.css";

.ReadableProse {
  @apply mx-auto max-w-3xl text-lg leading-9 text-black/76;
}
.ReadableProse :deep(p + p) {
  @apply mt-6;
}
.ReadableProse :deep(h2) {
  @apply mt-14 text-4xl font-black leading-tight text-black;
}
.ReadableProse :deep(h3) {
  @apply mt-10 text-2xl font-black leading-tight text-black;
}
.ReadableProse :deep(a) {
  @apply font-bold text-orange-600 underline decoration-orange-600/30 underline-offset-4;
}
</style>
