<template>
  <p class="Subtitle">
    <slot />
  </p>
</template>

<script setup lang="ts"></script>

<style scoped>
@reference "~/assets/css/main.css";

.Subtitle {
  @apply mt-6 max-w-3xl text-xl leading-9 text-ink/75;
}
</style>
