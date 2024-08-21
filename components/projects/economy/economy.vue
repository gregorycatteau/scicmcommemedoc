<template>
  <div class="maindiv">
    <Economyherosection />
    <Constatdepart />
    <Economyquestionnary />
    <Marketbycustomers />
    <Marketbyproducers />
    <Marketbyinstitutionals />
    <Economystrategy />

  </div>
</template>
<script setup>
import Economyherosection from '@/components/projects/economy/economyherosection.vue';
import Constatdepart from '@/components/projects/economy/constatdepart.vue';
import Economyquestionnary from '@/components/projects/economy/economyquestionnary.vue';
import Marketbycustomers from '@/components/projects/economy/marketbycustomers.vue';
import Marketbyproducers from '@/components/projects/economy/marketbyproducers.vue';
import Economystrategy from '@/components/projects/economy/economystrategy.vue';
import Marketbyinstitutionals from '@/components/projects/economy/marketbyinstitutionals.vue';
</script>
<style scoped>
  .maindiv {
    @apply flex flex-col items-center justify-center;
   
  }
</style>