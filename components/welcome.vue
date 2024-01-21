<template>
  <section class="relative welcome-section" >
    <div class="parallax-bg"></div>
    <div class="glass-overlay">
      <h1 class="title">SCIC M Comme Médoc</h1>
      <p class="paragraph">Une coopérative pour un futur durable et solidaire.</p>
    </div>
  </section>
</template>

<script>
export default {
  name: 'WelcomeSection',
}
</script>

<style scoped>
.welcome-section {
  @apply relative flex flex-col justify-center items-center h-28;
  perspective: 1px;
  overflow-x: hidden;
  overflow-y: auto;
}

.parallax-bg {
  @apply absolute top-0 left-0 w-full h-full bg-site-background bg-cover bg-center rounded-3xl ;
  transform: translateZ(-1px) scale(2);
  z-index: -1;
}

.glass-overlay {
  @apply relative text-center p-10 md:p-20 rounded-full m-5;
  background-color: rgba(255, 255, 255, 0.5);
  backdrop-filter: blur(10px);
  
}

.title {
  @apply text-4xl md:text-5xl font-bold text-slate-500 mb-4;
}

.paragraph {
  @apply text-stone-600 text-lg md:text-xl;
}
</style>

