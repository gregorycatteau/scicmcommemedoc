<template>
  <div class="AppShell">
    <a class="SkipLink" href="#contenu">Aller au contenu</a>
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
.SkipLink {
  position: fixed;
  left: 1rem;
  top: 1rem;
  z-index: 100;
  transform: translateY(-6rem);
  border-radius: 9999px;
  background: white;
  color: #18130f;
  padding: 0.75rem 1.25rem;
  font-weight: 900;
  box-shadow: 0 20px 25px -5px rgb(24 19 15 / 0.1), 0 8px 10px -6px rgb(24 19 15 / 0.1);
  transition: transform 300ms ease;
}
.SkipLink:focus {
  transform: translateY(0);
}
</style>
