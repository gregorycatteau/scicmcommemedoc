<template class="global">
  <header class="heading">
    <globalnavigation />
  </header>

  <main class="main">
    <slot />
  </main>
  <footer>
    <FooterComponent />
  </footer>
</template>

<script setup lang="ts">
import Globalnavigation from '~/components/globalnavigation.vue';
import FooterComponent from '~/components/footercomponent.vue';
</script>
<style scoped>

</style>
