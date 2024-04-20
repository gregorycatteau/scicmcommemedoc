<template class="global">
  <header class="heading">
    <uppernavbar />
  </header>

  <main class="main">
    <slot />
  </main>
  <footer>
    <FooterComponent />
  </footer>
</template>

<script setup lang="ts">
import uppernavbar from '~/components/uppernavbar.vue';
import FooterComponent from '~/components/footercomponent.vue';
</script>
<style scoped>

</style>
