<template>
  <main class="max-w-5xl mx-auto pt-10">
    <ContentDoc class="prose prose-lg prose-green mx-auto text-justify shadow-lg p-10" />
    <div class="flex justify-center mt-10">
      <Button @click="goBack" class="bg-scicgreen text-white font-bold py-2 px-6 rounded hover:bg-yellow-500 transition-colors">Revenir à l'accueil</Button>
    </div>
  </main>
</template>

<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();

function goBack() {
  router.push('/');
}
</script>
<style scoped>
main {
  @apply pt-20;
}

.return {
  @apply flex justify-center items-center mt-10;
}

.button {
  @apply bg-green-500 text-white font-bold mb-10 py-2 px-6 rounded hover:bg-yellow-500 transition-colors;
}
</style>


