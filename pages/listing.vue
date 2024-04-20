<template>
  <div class="blog-page-container">
    <Articleslist />
  </div>
</template>

<script setup>
// Importer le composant ArticlesList
import Articleslist from '~/components/blog/articleslist.vue';
</script>

<style scoped>
.blog-page-container {
  @apply p-4 bg-gray-100; 
}
</style>
