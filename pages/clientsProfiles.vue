<template>
  <div>
    ici la page des profils du projet
  </div>
  <div class="wrapper">
    <div class="wrapperiternal">
      <h1 class="title">Les utilisateurs engagés</h1>
    <Clientsprofilescomponent v-if="showComponent[0]" />
    </div>
    <div class="wrapperiternal">
      <h1 class="title">Les citoyens actifs</h1>
    <Clientsprofilescomponentactivecitizens v-if="showComponent[1]" />
    </div>
    <div class="wrapperinternal">
      <h1 class="title">Les clients potentiels</h1>
    <Clientsprofilescomponent v-if="showComponent[2]" />
  </div>
  </div>
</template>
<script>
import Clientsprofilescomponent from '@/components/clientsprofilescomponent.vue'
import clientsprofilescomponentactivecitizens from '~/components/clientsprofilescomponentactivecitizens.vue';

export default {
  components: {
    Clientsprofilescomponent
  },
  data() {
    return {
      showComponent: [false, false, false],
    };
  },
  mounted() {
    setTimeout(() => { this.showComponent[0] = true; }, 1000); // 1 seconde
    setTimeout(() => { this.showComponent[1] = true; }, 2000); // 2 secondes
    setTimeout(() => { this.showComponent[2] = true; }, 3000); // 3 secondes
  }
}
</script>
<style scoped>
  .wrapper {
    @apply flex flex-row justify-center gap-4;
  }
  .wrapperiternal {
    @apply flex flex-col justify-center gap-4;
  }
  .title {
    @apply text-4xl font-bold text-center;
  }
</style>