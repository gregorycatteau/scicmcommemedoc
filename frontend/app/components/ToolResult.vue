<template>
  <section class="ToolResult" aria-live="polite">
    <slot />
  </section>
</template>

<script setup lang="ts"></script>

<style scoped>
@reference "~/assets/css/main.css";

.ToolResult {
  @apply rounded-[2rem] bg-ink p-6 text-white shadow-2xl shadow-ink/15 sm:p-8;
}
</style>
