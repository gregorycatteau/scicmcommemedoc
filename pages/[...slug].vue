<template>
  <main class="pt-20">
    <ContentDoc
      class="prose-2xl prose-h1:text-scicgreen prose-h1:text-center prose-h2:text-scicgreen prose-h2:text-center prose-p:text-scicgreen prose-p:text-justify prose-p:text-xl prose-p:indent-8 prose-p:text-gray-800 prose-p:p-10 prose-table:table-fixed prose-table:w-10/12 prose-table:mx-auto prose-table:shadow-lg prose-table:first-line:bg-scicgreen"
    />
    <div class="return">
      <Button @click="goBack" class="button">Revenir à l'accueil</Button>
    </div>
  </main>
</template>
<script setup>
import { useRouter } from "vue-router";

const router = useRouter();

function goBack() {
  router.push("/");
}
</script>
<style scoped>
.return {
  @apply flex justify-center items-center mt-10;
}
.button {
  @apply bg-scicgreen text-white font-bold mb-10 py-2 px-6 rounded hover:bg-scicyellow transition-colors;
  font-family: Montserrat;
} 

</style>
