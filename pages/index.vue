<template >
  <div class="wrapper">
    <Firstherosection />
    <Introductionsection />
    <Process />
    index depuis zéro
  </div>
</template>
<script>
import  Firstherosection from '~/components/firstherosection.vue';
import  Introductionsection from '~/components/introductionsection.vue';
import Process from '~/components/process.vue';


</script>
<style scoped>
  .wrapper {
    @apply flex flex-col items-center justify-center max-w-screen-2xl mx-auto rounded-xl gap-8;
    
    animation: fadeIn 1s ease-out;
  }
</style>
