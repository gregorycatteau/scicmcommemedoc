<template>
  <div class="AppShell">
    <SiteHeader />
    <NuxtPage />
    <SiteFooter />
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
@reference "~/assets/css/main.css";

.AppShell {
  background: #f4efe5;
  color: #18130f;
  @apply min-h-screen antialiased;
}
</style>
