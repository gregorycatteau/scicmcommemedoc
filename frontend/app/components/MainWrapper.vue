<template>
  <main class="MainWrapper">
    <slot />
  </main>
</template>

<script setup lang="ts"></script>

<style scoped>
@reference "~/assets/css/main.css";

.MainWrapper {
  background: #f4efe5;
}
</style>
