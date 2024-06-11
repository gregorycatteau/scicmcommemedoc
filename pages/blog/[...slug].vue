<template>
  <main class="max-w-5xl mx-auto pt-20">
    <ContentQuery :path="'/blog/' + $route.params.slug" find="one" v-slot="{ data, notFound }">
      <template v-if="notFound">
        <p class="text-center text-lg text-red-500">Article non trouvé.</p>
      </template>
      <template v-else>
        <article class="articleformatter">
          <h1 class="title">{{ data.title }}</h1>
          <div class="imagewrapper mb-5">
            <img :src="data.image" alt="Image principale de l'article" v-if="data.image" class="max-w-full h-auto mx-auto"/>
          </div>
          <ContentDoc :document="data" class="prosing"/>
        </article>
      </template>
    </ContentQuery>
    <div class="flex justify-center mt-10">
      <nuxt-link to="/listing" class="bg-scicgreen text-white font-bold py-2 px-6 rounded hover:bg-yellow-500 transition-colors">Revenir au blog</nuxt-link>
    </div>
  </main>
</template>

<script setup>
import { useRoute } from 'vue-router'
const { params } = useRoute()
</script>

<style scoped>
main {
  padding-top: 20px; /* Updated for consistency with Tailwind's spacing */
}

.imagewrapper img {
  max-width: 100%;
  height: auto;
  display: block;
  margin: 0 auto;
}
.articleformatter {
  @apply pt-20 prose-2xl 

  prose-h2:text-scicgreen 
  prose-h2:text-center
  prose-h3:text-scicorange
  prose-h3:text-center
  prose-h4:text-scicgreen
  prose-h4:indent-8
  prose-blockquote:text-scicblue
    prose-blockquote:text-center
    prose-blockquote:text-2xl
  prose-blockquote:bg-scicgreen
  prose-blockquote:px-8
  prose-blockquote:py-2
  prose-blockquote:rounded-2xl
  prose-blockquote:shadow-lg
  
  prose-blockquote:text-center
  prose-blockquote:italic
  

  prose-p:text-lg
  prose-p:text-justify
  prose-p:indent-8;
  
  
}
.title {
  @apply text-4xl text-center text-scicgreen font-bold my-5;
}
.prosing {
  @apply prose-blockquote:text-scicblue
    prose-blockquote:text-center
    prose-blockquote:text-2xl
  prose-blockquote:bg-scicgreen
  prose-blockquote:px-8
  prose-blockquote:py-2
  prose-blockquote:rounded-2xl
  prose-blockquote:shadow-lg
  
  prose-blockquote:text-center
  prose-blockquote:italic;
}

</style>
