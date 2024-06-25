<template>
  <div class="blog-page-container">  
    <BlogBlogherosection class="hero" />
    <div class="content-wrapper">
    
      <BlogFilteraccordion class="filters" />
      <BlogArticleslist class="articles" />
    </div>
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped>
.blog-page-container {
  @apply  p-4 bg-transparent;
}

.content-wrapper {
  @apply flex;
}

.filters {
  @apply w-1/4;
}

.articles {
  @apply w-3/4;
}
</style>
