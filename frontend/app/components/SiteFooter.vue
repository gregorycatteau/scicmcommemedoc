<template>
  <footer class="SiteFooter">
    <div class="FooterGrid">
      <div>
        <p class="FooterTitle">Mcomme Medoc</p>
        <p class="FooterText">Semer des idees. Cultiver des savoir-faire. Recolter des liens, de l'autonomie et de la resilience.</p>
      </div>
      <div>
        <p class="FooterHeading">Avancer</p>
        <div class="FooterLinks">
          <NuxtLink to="/livre">Ouvrir le Livre</NuxtLink>
          <NuxtLink to="/wiki">Chercher dans le Wiki</NuxtLink>
          <NuxtLink to="/ressources">Ressources utiles</NuxtLink>
          <NuxtLink to="/activites">Les projets</NuxtLink>
          <NuxtLink to="/evenements">Nous rencontrer</NuxtLink>
        </div>
      </div>
      <div>
        <p class="FooterHeading">Comprendre</p>
        <div class="FooterLinks">
          <NuxtLink to="/vie-cooperative">Vie cooperative</NuxtLink>
          <NuxtLink to="/faq">FAQ</NuxtLink>
          <NuxtLink class="FooterButton" to="/contact">Nous contacter</NuxtLink>
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
.FooterButton {
  @apply mt-2 inline-flex w-fit rounded-full border border-white/25 px-4 py-2 font-bold text-white transition duration-300 hover:border-white/60 hover:bg-white;
}
.FooterButton:hover {
  color: #18130f;
}
</style>
