<template>
  <div class="articles-list-container">
    <!-- Utilisez ContentQuery avec des filtres dynamiques basés sur le store Pinia -->
    <ContentQuery :path="'/blog'" :where="queryFilters" v-slot="{ data: articles, notFound }">
      <div v-if="articles.length === 0" class="no-articles">
        Aucun article disponible pour le moment.
      </div>
      <div v-else v-for="article in articles" :key="article.slug" class="article-preview">
        <div class="secondwrapper">
          <h2 class="article-title">{{ article.title }}</h2>
          <img :src="article.image" alt="Cover image for article" class="article-image">
          <p class="articlesummary">{{ article.summary }}</p>
        </div>
        <div class="metadata">
          <span class="date">{{ article.date }}</span>
          <span class="author">{{ article.author }}</span>
          <span class="reading-time">{{ article.readingTime }}</span>
        </div>
        <nuxt-link :to="`/blog/${article.page}`" class="read-more">Lire plus</nuxt-link>
      </div>
      <div class="notfound">
        <div class="no-articles">
          Aucun article trouvé.
        </div>
      </div>
    </ContentQuery>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { useFiltersStore } from '@/stores/filters';
  // Assurez-vous que le chemin est correct

const filtersStore = useFiltersStore();

// Calculer dynamiquement les critères de la requête basée sur les filtres définis
const queryFilters = computed(() => {
  const { category, author, tags } = filtersStore.filters;
  let where = { published: true };

  if (category) {
    where.category = category;
  }
  if (author) {
    where.author = author;
  }
  if (tags && tags.length > 0) {
    // Assurez-vous que le backend peut gérer la requête avec $contains pour les tableaux
    where.tags = { $contains: tags };
  }

  return where;
});
</script>

<style scoped>
.articles-list-container {
  @apply flex flex-col items-center justify-center;
}

.no-articles {
  @apply text-center text-lg text-gray-600;
}

.article-preview {
  @apply bg-white p-8 my-10 flex flex-col gap-4 items-center text-center rounded-lg shadow-lg;
}

.article-title {
  @apply text-3xl font-bold text-scicgreen hover:text-scicorange p-10;
}

.article-image {
  @apply w-full h-48 object-cover rounded-lg;
}

.metadata {
  @apply flex justify-between w-full text-lg text-gray-500;
}
.articlesummary
{
  @apply text-lg text-scicpurple mt-10;
}

.read-more {
  @apply mt-4 text-scicgreen text-2xl hover:underline;
}
.date {
  @apply bg-scicgreen text-gray-100 p-4 rounded-2xl shadow-2xl;
}
.author {
  @apply bg-scicgreen text-gray-100 p-4 rounded-2xl shadow-2xl;
}
.reading-time {
  @apply bg-scicgreen text-gray-100 p-4 rounded-2xl shadow-2xl;
}
.notfound {
  @apply text-center text-lg text-gray-600;
}
.secondwrapper {
  @apply flex flex-col items-center justify-center;
}

</style>
