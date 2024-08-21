<template>
  <div class="articles-list-container">
    <div class="masonry">
      <ContentQuery :path="'/blog'" :where="queryFilters" v-slot="{ data: articles, notFound }">
        <div v-if="articles.length === 0 && !notFound" class="no-articles">
          Aucun article disponible pour le moment.
        </div>
        <div v-if="notFound" class="notfound">
          <div class="no-articles">
            Aucun article trouvé.
          </div>
        </div>
        <div v-else v-for="article in articles" :key="article.slug" class="article-card masonry-item">
          <div class="card-content">
            <img :src="article.image" alt="Cover image for article" class="article-image">
            <div class="category-label">{{ article.category }}</div>
            <h2 class="article-title">{{ article.title }}</h2>
            <p class="articlesummary">{{ article.summary }}</p>
            <div class="metadata">
              <span class="date">{{ new Date(article.date).toLocaleDateString() }}</span>
              <span class="author">{{ article.author }}</span>
            </div>
            <nuxt-link :to="`/blog/${article.page}`" class="read-more">Lire plus</nuxt-link>
          </div>
        </div>
      </ContentQuery>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { useFiltersStore } from '~/stores/filters';

const filtersStore = useFiltersStore();

const queryFilters = computed(() => {
  const filters = filtersStore.filters;
  const where = { published: true };
  if (filters.category.length) where.category = { $in: filters.category };
  if (filters.author.length) where.author = { $in: filters.author };
  if (filters.tags.length) where.tags = { $in: filters.tags };
  return where;
});
</script>

<style scoped>
.articles-list-container {
  @apply p-4;
}

.masonry {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-auto-rows: minmax(200px, auto);
  gap: 16px;
}

.masonry-item {
  display: flex;
  flex-direction: column;
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: transform 0.2s;
}

.masonry-item:hover {
  transform: translateY(-5px);
}

.article-image {
  width: 100%;
  height: 200px;
  object-fit: cover;
  object-position: center;
  border-top-right-radius: 48px;
  border-bottom-left-radius: 112px;
  border-bottom-right-radius: 8px;
}

.card-content {
  padding: 16px;
  position: relative;
}

.category-label {
  background-color: #2b8c00;
  color: white;
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.05em;
  padding: 4px 8px;
  position: absolute;
  top: 16px;
  left: 16px;
  text-transform: uppercase;
  border-radius: 4px;
}

.article-title {
  @apply text-xl font-bold mb-2 mt-4 text-center text-balance;
}

.articlesummary {
  @apply text-base text-gray-700 mb-4 text-justify indent-2 text-balance;
}

.metadata {
  @apply flex flex-row gap-4 text-sm text-gray-500 mb-2 items-center justify-center;
}

.read-more {
  @apply text-scicgreen text-center hover:underline;
}

.no-articles, .notfound {
  @apply text-center text-gray-500 mt-4;
}
</style>
