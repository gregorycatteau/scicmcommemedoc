<template>
  <div class="blog-page-container">
    <Articlesfilter />
    <Articleslist />
  </div>
</template>

<script setup>
// Importer le composant ArticlesList
import Articleslist from '~/components/blog/articleslist.vue';
import Articlesfilter from '~/components/blog/articlesfilter.vue';
</script>

<style scoped>
.blog-page-container {
  @apply mt-20 p-4 bg-gray-100; 
}
</style>
