<template class="global">
  <header>
    <HeaderComponent />
  </header>

  <main class="main">
    <slot />
  </main>
  <footer>
    <FooterComponent />
  </footer>
</template>

<script>
import HeaderComponent from '~/components/headercomponent.vue'
import FooterComponent from '~/components/footercomponent.vue'
export default {
  components: {
    HeaderComponent,
    FooterComponent

  }
}
</script>
<style scoped>
</style>
