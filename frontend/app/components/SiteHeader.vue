<template>
  <header class="SiteHeader">
    <nav class="HeaderNav" aria-label="Navigation principale">
      <NuxtLink to="/" class="BrandLink">
        <img class="BrandLogo" src="/logo_detoure.webp" alt="M Comme Medoc" width="800" height="800" />
      </NuxtLink>

      <div class="DesktopLinks">
        <NuxtLink class="NavLink" to="/#cycle">Semer Cultiver Recolter</NuxtLink>
        <NuxtLink class="NavLink" to="/ressources">Ressources</NuxtLink>
        <NuxtLink class="NavLink" to="/activites">Projets</NuxtLink>
        <NuxtLink class="NavLink" to="/evenements">Nous rencontrer</NuxtLink>
        <NuxtLink class="NavLink" to="/vie-cooperative">Vie cooperative</NuxtLink>
        <NuxtLink class="NavLink" to="/faq">FAQ</NuxtLink>
      </div>

      <NuxtLink to="/devenir-membre" class="HeaderCta">Participer</NuxtLink>
      <button class="MobileMenuButton" type="button" :aria-expanded="isOpen" aria-controls="mobile-navigation" @click="isOpen = !isOpen">
        Menu
      </button>
    </nav>

    <nav v-if="isOpen" id="mobile-navigation" class="MobileNav" aria-label="Navigation mobile">
      <NuxtLink class="MobileNavLink" to="/#cycle" @click="isOpen = false">Semer Cultiver Recolter</NuxtLink>
      <NuxtLink class="MobileNavLink" to="/ressources" @click="isOpen = false">Ressources</NuxtLink>
      <NuxtLink class="MobileNavLink" to="/activites" @click="isOpen = false">Projets</NuxtLink>
      <NuxtLink class="MobileNavLink" to="/evenements" @click="isOpen = false">Nous rencontrer</NuxtLink>
      <NuxtLink class="MobileNavLink" to="/vie-cooperative" @click="isOpen = false">Vie cooperative</NuxtLink>
      <NuxtLink class="MobileNavLink" to="/faq" @click="isOpen = false">FAQ</NuxtLink>
      <NuxtLink class="MobilePrimaryLink" to="/devenir-membre" @click="isOpen = false">Participer</NuxtLink>
    </nav>
  </header>
</template>

<script setup lang="ts">
const isOpen = ref(false)
</script>

<style scoped>
@reference "~/assets/css/main.css";

.SiteHeader {
  background: rgb(24 19 15 / 78%);
  @apply sticky top-0 z-50 border-b border-white/10 text-white backdrop-blur-xl;
}
.HeaderNav {
  @apply mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-1 sm:px-6 lg:px-8;
}
.BrandLink {
  @apply flex shrink-0 items-center;
}
.BrandLogo {
  @apply h-11 w-11 object-contain sm:h-12 sm:w-12 lg:h-14 lg:w-14;
}
.DesktopLinks {
  @apply hidden items-center gap-4 text-xs font-semibold uppercase tracking-[0.12em] text-white/62 md:flex;
}
.NavLink {
  @apply transition duration-300 hover:text-white;
}
.HeaderCta {
  @apply hidden rounded-full border border-white/20 bg-transparent px-3 py-1.5 text-xs font-bold uppercase tracking-[0.14em] text-white/70 transition duration-300 hover:border-white/45 hover:text-white sm:inline-flex;
}
.MobileMenuButton {
  @apply min-h-10 rounded-full border border-white/25 px-3 py-1.5 text-sm font-bold text-white/85 md:hidden;
}
.MobileNav {
  @apply grid gap-1 border-t border-white/10 px-4 py-3 text-white md:hidden;
}
.MobileNavLink {
  @apply rounded-xl px-3 py-2.5 text-sm font-bold text-white/82 hover:bg-white/10 hover:text-white;
}
.MobilePrimaryLink {
  @apply mt-1 rounded-xl border border-white/25 px-3 py-2.5 text-sm font-black text-white;
}
</style>
