<template>
  <div class="herosection">
    <UContainer class="containermain">
      <diapoherocomponent class="full-width" />
    </UContainer>
  </div>
</template>

<script>
import diapoherocomponent from '~/components/diaporamaheroes.vue';

export default {
  components: {
    diapoherocomponent
  }
}
</script>

<style scoped>
.herosection {
  @apply flex flex-col justify-center items-center;
}

.full-width {
  width: 100%;
  height: 100%;
}
</style>