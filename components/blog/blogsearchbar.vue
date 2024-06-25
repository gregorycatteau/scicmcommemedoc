<template>
  <div class="searchbar-container">
    <UInput
      icon="i-heroicons-magnifying-glass-20-solid"
      size="sm"
      color="white"
      :trailing="false"
      placeholder="Rechercher un article..."
      v-model="searchQuery"
      @input="debouncedSearch"
      @keyup.enter="performSearch"
      @click:icon="performSearch"
    />
    <ContentQuery :path="'/blog'" :search="searchQuery" v-slot="{ data: articles }">
      <div v-if="articles && articles.length && searchPerformed" class="search-results">
        <div v-for="(result, index) in searchResults" :key="index" class="search-result-item">
          <span @click="selectResult(result)">{{ result.label }}: {{ result.count }} articles</span>
        </div>
      </div>
      <div v-else-if="searchQuery.length > 0 && searchPerformed" class="no-results">
        Aucun article ne correspond à votre recherche.
      </div>
    </ContentQuery>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue';
import { useFiltersStore } from '~/stores/filters';
import { useDebounceFn } from '@vueuse/core';

const searchQuery = ref('');
const searchResults = ref([]);
const searchPerformed = ref(false);
const filtersStore = useFiltersStore();

const performSearch = async () => {
  if (searchQuery.value.length < 2) {
    searchResults.value = [];
    searchPerformed.value = false;
    return;
  }

  searchPerformed.value = true;
};

const debouncedSearch = useDebounceFn(performSearch, 500);

function handleSearchResults(articles) {
  if (!Array.isArray(articles) || searchQuery.value.length < 2) {
    searchResults.value = [];
    searchPerformed.value = false;
    return;
  }

  const matches = {
    category: 0,
    title: 0,
    summary: 0,
    author: 0,
    tags: 0
  };

  articles.forEach(article => {
    if (article.category && article.category.toLowerCase().includes(searchQuery.value.toLowerCase())) {
      matches.category++;
    }
    if (article.title && article.title.toLowerCase().includes(searchQuery.value.toLowerCase())) {
      matches.title++;
    }
    if (article.summary && article.summary.toLowerCase().includes(searchQuery.value.toLowerCase())) {
      matches.summary++;
    }
    if (article.author && article.author.toLowerCase().includes(searchQuery.value.toLowerCase())) {
      matches.author++;
    }
    if (article.tags && article.tags.some(tag => tag.toLowerCase().includes(searchQuery.value.toLowerCase()))) {
      matches.tags++;
    }
  });

  searchResults.value = Object.keys(matches)
    .filter(key => matches[key] > 0)
    .map(key => ({ label: key, count: matches[key] }));
}

watch(searchQuery, (newQuery) => {
  if (newQuery.length >= 2) {
    performSearch();
  }
});

function selectResult(result) {
  const filters = {
    category: [],
    author: [],
    tags: []
  };

  switch (result.label) {
    case 'category':
      filters.category = [searchQuery.value];
      break;
    case 'title':
      // Pas de filtre direct sur le titre, peut-être rediriger vers les articles correspondants ?
      break;
    case 'summary':
      // Pas de filtre direct sur le résumé, peut-être rediriger vers les articles correspondants ?
      break;
    case 'author':
      filters.author = [searchQuery.value];
      break;
    case 'tags':
      filters.tags = [searchQuery.value];
      break;
  }

  filtersStore.setFilters(filters);
  searchQuery.value = '';
  searchResults.value = [];
}
</script>

<style scoped>
.searchbar-container {
  @apply my-4 p-2 bg-transparent rounded-lg shadow-md w-full flex items-center;
}

.search-results {
  @apply bg-white border border-gray-300 rounded-lg shadow-md mt-2;
}

.search-result-item {
  @apply p-2 cursor-pointer hover:bg-gray-200;
}

.no-results {
  @apply mt-2 text-red-500;
}
</style>
