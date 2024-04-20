<template>
  <div class="wrapperall">
    <uppernavbar />
    <div class="upperheader relative z-30">
      <welcome-section />
    </div>
    <div class="downheader relative z-20">
      <stylisedheader />
    </div>
  </div>
</template>

<script>
import WelcomeSection from '~/components/welcome.vue';
import StylisedHeader from './stylisedheader.vue';
import uppernavbar from './uppernavbar.vue';

export default {
  name: 'HeaderComponent',
  components: {
    WelcomeSection, // Bonne pratique : les noms des composants importés commencent par une majuscule
    StylisedHeader,
    uppernavbar
  }
}
</script>

<style scoped>
.wrapperall {
  @apply overflow-hidden;
}

.upperheader {
  @apply relative z-20; /* Assure la surimpression sur downheader */
}

.downheader {
  @apply relative z-30 mt-[-20px]; /* Réajuste la marge pour superposer les sections */
}
</style>

