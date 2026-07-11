<template>
  <section class="ToolResult" aria-live="polite">
    <slot />
  </section>
</template>

<script setup lang="ts"></script>

<style scoped>
@reference "~/assets/css/main.css";

.ToolResult {
  @apply rounded-[2rem] bg-black p-6 text-white shadow-2xl shadow-black/15 sm:p-8;
}
</style>
