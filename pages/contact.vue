<template>
  <div class="pagewrapper">
    <h1 class="title">Bienvenue sur la page de contact</h1>
    <faqcomponent />
     <contactcomponent />
    
  </div>
</template>
<script setup>
import contactcomponent from '~/components/contactcomponent.vue';
import faqcomponent from '~/components/faqcomponent.vue';

</script>
<style scoped>
  .title {
    @apply  text-4xl text-center font-bold shadow-lg p-4 bg-white mt-5  rounded-lg text-scicgreen bg-opacity-30 w-10/12 m-auto;
  }
  .pagewrapper { 
    @apply mt-16  bg-no-repeat bg-cover bg-center h-full w-full;
  }
</style>
