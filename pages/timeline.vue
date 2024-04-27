<template>
  <div class="timeline-container">
    <!-- En-tête -->
    <div class="header ">
      <h1 class="title">Ce que nous avons compris par l'action et l'implication</h1>
      <p class="description">Comprendre M Comme Médoc c'est comprendre les réflexions et les actions de ceux qui l'ont créé.</p>
     </div>
     
 

   <Worldstorytest2 />
    
    <!-- Pied de page / Navigation -->
    
  </div>
</template>

<script>
import Worldstorytest from '~/components/worldstorytest2.vue';

</script>

<style scoped>
.timeline-container {
  @apply flex flex-col items-center gap-10;
}
.header {
  @apply shadow-lg rounded-xl bg-scicgreen p-10 text-center rounded-xl mt-20;
}
.title {
  @apply text-4xl font-semibold text-scicyellow mb-4;
  font-family: kalnia;
}
.description {
  @apply text-lg text-scicyellow;
  font-family: lora;
}
.footer {
  @apply p-5;
}
</style>
