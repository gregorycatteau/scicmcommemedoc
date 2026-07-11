<template>
  <footer class="SiteFooter">
    <div class="FooterGrid">
      <div>
        <p class="FooterTitle">M Comme Medoc</p>
        <p class="FooterText">Semer des idees. Cultiver des savoir-faire. Recolter des liens, de l autonomie et de la resilience.</p>
      </div>
      <div>
        <p class="FooterHeading">Feuilleter</p>
        <div class="FooterLinks">
          <NuxtLink to="/bibliotheque">Ouvrir la bibliotheque</NuxtLink>
          <NuxtLink to="/livre">Entree compatible Livre</NuxtLink>
          <NuxtLink to="/faq">FAQ</NuxtLink>
        </div>
      </div>
      <div>
        <p class="FooterHeading">Services</p>
        <div class="FooterLinks">
          <a href="https://wiki.mcommemedoc.fr" target="_blank" rel="noopener noreferrer">Wiki operationnel ↗</a>
          <a href="https://projets.mcommemedoc.fr" target="_blank" rel="noopener noreferrer">OpenProject ↗</a>
          <a href="https://docs.mcommemedoc.fr" target="_blank" rel="noopener noreferrer">Documents ↗</a>
          <a href="https://chat.mcommemedoc.fr" target="_blank" rel="noopener noreferrer">Chat ↗</a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts"></script>

<style scoped>
@reference "~/assets/css/main.css";

.SiteFooter {
  background: #18130f;
  @apply border-t border-white/10 text-white;
}
.FooterGrid {
  @apply mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-3 lg:px-8;
}
.FooterTitle {
  @apply text-xl font-black text-white;
}
.FooterText {
  @apply mt-3 max-w-sm text-sm leading-6 text-white/70;
}
.FooterHeading {
  @apply font-semibold text-white;
}
.FooterLinks {
  @apply mt-3 grid gap-2 text-sm text-white/70;
}
.FooterLinks a {
  @apply w-fit transition hover:text-white;
}
</style>
