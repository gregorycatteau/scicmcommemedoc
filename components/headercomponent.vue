<template>
  <welcome-section />
  <stylisedheader />
  
</template>

<script>
import welcomeSection from '~/components/welcome.vue'
import stylisedheader from './stylisedheader.vue';

export default {
  name: 'HeaderComponent',
  components: {
    welcomeSection,
    stylisedheader
  }
}
</script>

<style scoped>
.title {
  @apply text-4xl text-center font-bold shadow-lg p-4;
}
</style>