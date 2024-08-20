<template class="global">
  <div class="flex-container">
    <NeuralNoiseExtended />
    <header class="heading">
      <Globalnavigation />
    </header>

    <main class="main flex-grow">
      <slot />
    </main>

    <footer class="footer">
      <FooterComponent />
    </footer>
  </div>
</template>

<script setup lang="ts">
import Globalnavigation from "~/components/navigation/globalnavigation.vue";
import FooterComponent from "~/components/navigation/footercomponent.vue";
import NeuralNoiseExtended from "~/components/styles/neuralnoiseextended.vue";
</script>

<style scoped>
.flex-container {
  @apply flex flex-col min-h-screen;
}

.main {
  @apply flex-grow;
}


</style>
