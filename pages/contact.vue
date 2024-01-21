<template>
  <div class="pagewrapper">
    <h1 class="title">Bienvenue sur la page de contact</h1>
    <h2 class="title">FAQ <br><faqcomponent /></h2>
    <h2 class="title">Formulaire de contact <br><contactcomponent /></h2>
    
  </div>
</template>
<script>
import contactcomponent from '~/components/contactcomponent.vue';
import faqcomponent from '~/components/faqcomponent.vue';
export default {
  components: {
    contactcomponent,
    faqcomponent
  }
}
</script>
<style scoped>
  .title {
    @apply text-4xl text-center font-bold shadow-lg p-4 bg-white mt-5  rounded-lg text-slate-900 bg-opacity-30 w-10/12 m-auto;
  }
  .pagewrapper { 
    @apply bg-site-background bg-no-repeat bg-cover bg-center h-full w-full;
  }
</style>
