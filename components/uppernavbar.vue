
<template>


<nav class="mainwrapper">
  <div class="secondwrapper">
  
      <NuxtLink to="/" class="title"><span class="lettering">M</span> Comme Médoc</NuxtLink>
      
      
  
  <div class="separator">
      <button class="button" @click="gotoImplication">S'impliquer</button>
      <button data-collapse-toggle="navbar-sticky" type="button" class="toggler" aria-controls="navbar-sticky" aria-expanded="false">
        <span class="sr-only">Ouvrir le menu principal</span>
        <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
        </svg>
    </button>
  </div>
  <div class="menuwrapper" id="navbar-sticky">
    <ul class="globalist">
      <li class="itemlist">
        <NuxtLink to="/discovery" class="link" aria-current="page">Découvrir</NuxtLink>
      </li>
      <li class="itemlist">
        <NuxtLink to="/fondements" class="link">Fondations</NuxtLink>
      </li>
      <li class="itemlist">
        <NuxtLink to="/timeline" class="link">Historique</NuxtLink>
      </li>
      <li class="itemlist">
        <NuxtLink to="/projects" class="link">Projets</NuxtLink>
      </li>
      <li class="itemlist">
        <NuxtLink to="/listing" class="link">Blog</NuxtLink>
      </li>
    </ul>
  </div>
  </div>
</nav>
</template>
<script setup lang="ts">
import { useRouter } from 'vue-router';

const router = useRouter();

function gotoImplication() {
  router.push('/implication');
}
</script>

<style scoped>
.mainwrapper {
  @apply bg-scicgreen fixed w-full z-20 top-0 start-0 border-b border-scicblue  ;
}
.secondwrapper {
  @apply max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4  ;
}
.title {
  @apply text-white  text-4xl;
  font-family: Permanent Marker;
}
.lettering {
  @apply text-scicorange;
}
.separator {
  @apply flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse;
}
.button {
  @apply text-white bg-scicorange hover:bg-scicblue hover:text-scicgreen focus:ring-4 focus:outline-none focus:ring-scicblue font-medium rounded-lg text-sm px-4 py-2 text-center;
}
.toggler {
  @apply inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600;
}

.menuwrapper {
  @apply items-center justify-between hidden w-full md:flex md:w-auto md:order-1;
}
.globalist {
  @apply flex flex-col p-4 md:p-0 mt-4 font-medium border  md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0  dark:bg-gray-800 md:dark:bg-gray-900 ;
}
.link {
  @apply flex flex-col p-4 md:p-0 mt-4 font-medium text-scicblue border border-gray-100 rounded-lg  md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0  dark:bg-gray-800 ;
}
</style>
