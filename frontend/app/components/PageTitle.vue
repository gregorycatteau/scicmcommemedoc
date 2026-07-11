<template>
  <h1 class="PageTitle">
    <slot />
  </h1>
</template>

<script setup lang="ts"></script>

<style scoped>
@reference "~/assets/css/main.css";

.PageTitle {
  @apply max-w-5xl text-5xl font-black leading-none text-black sm:text-6xl lg:text-7xl;
}
</style>
