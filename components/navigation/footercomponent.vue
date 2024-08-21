<template>
  <footer class="mainwrapper">
    <div class="secondarywrapper">
      <div class="logo-section">
        <span class="mb-8">
          <svg width="140" viewBox="0 0 419 95" fill="none" xmlns="http://www.w3.org/2000/svg">
            <!-- SVG content -->
          </svg>
        </span>
        <p class="subtitle">
          Retrouvons nous et prolongeons l'expérience sur les réseaux sociaux.
        </p>
        <ul class="logolisting">
          <li>
            <a href="#" rel="noreferrer" target="_blank" class="icon-link">
              <span class="sr-only">Facebook</span>
              <UIcon name="i-logos-facebook" dynamic class="icon"/>
            </a>
          </li>
          <li>
            <a href="https://t.me/MCommeMedoc" rel="noreferrer" target="_blank" class="icon-link">
              <span class="sr-only">Telegram</span>
              <UIcon name="i-logos-telegram" dynamic class="icon"/>
            </a>
          </li>
          <li>
            <a href="#" rel="noreferrer" target="_blank" class="icon-link">
              <span class="sr-only">YouTube</span>
              <UIcon name="i-logos-youtube-icon" dynamic class="icon"/>
            </a>
          </li>
          <li>
            <a href="#" rel="noreferrer" target="_blank" class="icon-link">
              <span class="sr-only">LinkedIn</span>
              <UIcon name="i-skill-icons:linkedin" dynamic class="icon"/>
            </a>
          </li>
        </ul>
        <div class="links">
          <nuxt-link to="/projects" class="link-title">Nos projets</nuxt-link>
          <nuxt-link to="/legal" class="link-title">Legal</nuxt-link>
          <nuxt-link to="/contact" class="link-title">Contact</nuxt-link>
        </div>
        <div class="social-icons">
          <a href="#" class="text-grey-700 hover:text-grey-900">
            <!-- SVG content for icon -->
          </a>
          <a href="#" class="text-grey-700 hover:text-grey-900">
            <!-- SVG content for icon -->
          </a>
          <a href="#" class="text-grey-700 hover:text-grey-900">
            <!-- SVG content for icon -->
          </a>
          <a href="#" class="text-grey-700 hover:text-grey-900">
            <!-- SVG content for icon -->
          </a>
        </div>
      </div>
      <p class="footer-note">Mentions légales | &copy; 2024. M Comme Médoc. Tous droits réservés. | Un site fièrement propulsé par Pixelprowlers</p>
    </div>
  </footer>
</template>

<script setup>
// Empty setup for now
</script>

<style scoped>
.mainwrapper {
  @apply bg-scicgreen w-full py-4;
  position: absolute; /* Fixé au bas de la fenêtre */
  z-index: 10;
  height: auto;
}


.secondarywrapper {
  @apply mx-auto max-w-screen-xl space-y-4 px-4 sm:px-6 lg:space-y-16 lg:px-8;
}

.logo-section {
  @apply flex flex-col items-center;
}

.subtitle {
  @apply text-lg text-center text-scicblue mb-6;
  font-family: "Lora", serif;
}

.logolisting {
  @apply flex flex-row gap-4 justify-center mt-4;
}

.icon-link {
  @apply text-gray-700 transition hover:opacity-75;
}

.icon {
  @apply w-10 h-10 hover:scale-125 transition-transform duration-300 hover:bg-scicblue hover:p-2 rounded-full;
}

.links {
  @apply flex flex-wrap items-center justify-center gap-5 lg:gap-12 gap-y-3 lg:flex-nowrap text-slate-900 mt-6;
}

.link-title {
  @apply text-scicblue hover:text-gray-900;
}

.social-icons {
  @apply flex items-center gap-8 mt-8;
}

.footer-note {
  @apply text-xs text-scicblue text-center mt-8;
}
</style>
