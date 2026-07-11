<template>
  <section class="ContentSection">
    <slot />
  </section>
</template>

<script setup lang="ts"></script>

<style scoped>
@reference "~/assets/css/main.css";

.ContentSection {
  padding-block: var(--section-padding);
  @apply mx-auto max-w-7xl px-4 sm:px-6 lg:px-8;
}
</style>
