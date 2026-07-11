<template>
  <article class="BookLayout">
    <nav class="BookTopNav" aria-label="Navigation du livre">
      <NuxtLink to="/livre">Sommaire</NuxtLink>
      <NuxtLink to="/wiki">Wiki</NuxtLink>
    </nav>
    <slot />
  </article>
</template>

<script setup lang="ts"></script>

<style scoped>
@reference "~/assets/css/main.css";

.BookLayout {
  @apply bg-stone-100 text-black;
}
.BookTopNav {
  @apply mx-auto flex max-w-7xl justify-between px-4 py-5 text-sm font-black uppercase tracking-[0.16em] text-black/55 sm:px-6 lg:px-8;
}
.BookTopNav a {
  @apply transition duration-300;
}
.BookTopNav a:hover {
  color: #18130f;
}
</style>
