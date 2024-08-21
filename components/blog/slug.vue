<template>
  <article class="max-w-5xl mx-auto pt-10">
    
    <ContentDoc path="`/blog/${page}`" v-slot="{ doc, notFound }">
      <header>
        <div class="text-center p-5">
          <h1 class="text-4xl font-bold lg:w-2/3 mx-auto text-scicgreen text-center">{{ doc.title }}</h1>
          <p class="text-gray-500 text-sm mt-2">{{ doc.date }}</p>
        </div>
        
      </header>
      <!-- ./ Header  -->

      <!-- Content -->
      <div class="mt-4 content p-5">
        <!-- Content  -->
        <ContentRenderer :value="doc" />
        <!-- ./ Content  -->
      </div>
      
      </ContentDoc>
</article>

<nuxt-link to="/listing">reviens y</nuxt-link>
</template>

<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

function goBack() {
  router.push('/')
}
</script>

<style scoped>
.not-found {
  text-align: center;
  font-size: 24px;
  color: red;
}
.metadata {
  display: flex;
  justify-content: space-between;
  font-size: 14px;
  margin-top: 20px;
}
</style>
