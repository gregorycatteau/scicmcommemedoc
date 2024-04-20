<template>
  <section class="upperheader">
    <div class="backgrounding"></div> 
    <div class="content-overlay">
      <h1 class="title">M Comme Médoc</h1>
      
    
    </div>
  </section>
</template>

<script>
export default {
  name: 'UpperHeader',
}
</script>

<style scoped>


.upperheader {
  @apply relative flex items-center justify-center h-32 md:h-48 m-4 rounded-3xl shadow-lg bg-gradient-to-r from-scicgreen to-scicblue;
  overflow: hidden;
}

.backgrounding {
  @apply absolute top-0 left-0 w-full h-full bg-cover bg-center bg-site-background contrast-50 grayscale hover:grayscale-0;
  z-index: -1;

}

.content-overlay {
  @apply relative text-center p-4 bg-white/50 backdrop-blur-2xl rounded-xl bg-opacity-30;
}

.title {
  @apply text-lg md:text-xl lg:text-7xl  text-scicgreen;
  font-family: Permanent Marker;
}

.description {
  @apply hidden md:block text-scicgreen text-xl md:text-2xl;
  font-family: Lora;
}
</style>
