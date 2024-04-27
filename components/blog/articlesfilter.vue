<template>
  <div class="filters-container">
    <div class="filter-select">
      <label for="category">Catégorie:</label>
      <select id="category" v-model="filters.category" @change="updateFilters">
        <option value="">Toutes</option>
        <ContentQuery path="/blog" :where="{ published: true }" :sort="{ category: 1 }" v-slot="{ data: categories }">
          <option v-for="category in getUnique(categories, 'category')" :key="category" :value="category">
            {{ category }}
          </option>
        </ContentQuery>
      </select>
    </div>

    <div class="filter-select">
      <label for="author">Auteur:</label>
      <select id="author" v-model="filters.author" @change="updateFilters">
        <option value="">Tous</option>
        <ContentQuery path="/blog" :where="{ published: true }" :sort="{ author: 1 }" v-slot="{ data: authors }">
          <option v-for="author in getUnique(authors, 'author')" :key="author" :value="author">
            {{ author }}
          </option>
        </ContentQuery>
      </select>
    </div>

    <div class="filter-select">
      <label for="tags">Tags:</label>
      <select  id="tags" v-model="filters.tags" @change="updateFilters">
        <option value="">Tous</option>
        <ContentQuery path="/blog" :where="{ published: true }" v-slot="{ data: tagsData }">
  <option v-for="tag in flattenTags(tagsData)" :key="tag" :value="tag">
    {{ tag }}
  </option>
</ContentQuery>

      </select>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useFiltersStore } from '~/stores/filters';

// Utilisation du store Pinia pour gérer l'état global des filtres
const filtersStore = useFiltersStore();

// Déclaration unique pour 'filters'
const filters = ref({
  category: '',
  author: '',
  tags: []
});

// Fonction pour mettre à jour les filtres dans le store et émettre un événement
function updateFilters() {
  filtersStore.setFilters(filters.value);  // Met à jour le store Pinia
  emit('update:filters', filters.value);   // Émet un événement pour les écouteurs externes
}

// Fonction pour obtenir des valeurs uniques d'une liste d'objets basée sur un champ spécifique
function getUnique(items, field) {
  const unique = new Set();
  items.forEach(item => {
    if (Array.isArray(item[field])) {
      item[field].forEach(subItem => unique.add(subItem));
    } else {
      unique.add(item[field]);
    }
  });
  return Array.from(unique);
}

// Fonction pour aplatir et obtenir des tags uniques à partir d'une liste d'articles
function flattenTags(items) {
  const tagSet = new Set();
  items.forEach(item => {
    if (Array.isArray(item.tags)) {
      item.tags.forEach(tag => tagSet.add(tag.trim()));
    }
  });
  return Array.from(tagSet);
}
</script>


<style scoped>
.filters-container {
  @apply p-4 bg-scicgreen rounded-lg shadow-md m-4 flex flex-wrap justify-around;
}

.filter-select {
  @apply mb-4 flex flex-row gap-2 justify-center items-center;
}

label {
  @apply font-medium text-white;
}

select, input[type="date"] {
  @apply border-gray-300 rounded p-2;
}
</style>
