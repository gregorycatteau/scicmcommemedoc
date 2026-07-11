<template>
  <header class="SiteHeader">
    <nav class="HeaderNav" aria-label="Acces principaux">
      <NuxtLink to="/" class="BrandLink">
        <img class="BrandLogo" src="/logo_detoure.webp" alt="M Comme Medoc" width="800" height="800" />
        <span>M Comme Medoc</span>
      </NuxtLink>
      <div class="HeaderActions">
        <NuxtLink to="/bibliotheque">Sommaire</NuxtLink>
        <a href="https://auth.mcommemedoc.fr" target="_blank" rel="noopener noreferrer">Acces membres ↗</a>
      </div>
    </nav>
  </header>
</template>

<script setup lang="ts"></script>

<style scoped>
@reference "~/assets/css/main.css";

.SiteHeader {
  @apply fixed left-0 top-0 z-50 w-full text-white;
}
.HeaderNav {
  @apply mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8;
}
.BrandLink {
  @apply flex shrink-0 items-center gap-3 rounded-full border border-white/10 bg-black/28 px-2 py-1 pr-4 text-xs font-black uppercase tracking-[0.18em] backdrop-blur-xl;
}
.BrandLogo {
  @apply h-9 w-9 object-contain;
}
.HeaderActions {
  @apply flex items-center gap-2 rounded-full border border-white/10 bg-black/28 p-1 text-xs font-black uppercase tracking-[0.14em] backdrop-blur-xl lg:mr-[23rem];
}
.HeaderActions a {
  @apply rounded-full px-3 py-2 text-white/78 transition hover:bg-white hover:text-black;
}
@media (max-width: 640px) {
  .BrandLink span,
  .HeaderActions a:last-child {
    @apply hidden;
  }
}
</style>
