<template>
  <div class="SectionDivider" aria-hidden="true">
    <span></span>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
@reference "~/assets/css/main.css";

.SectionDivider {
  @apply mx-auto flex max-w-7xl px-4 py-14 sm:px-6 lg:px-8;
}
.SectionDivider span {
  @apply h-px w-full bg-black/12;
}
</style>
