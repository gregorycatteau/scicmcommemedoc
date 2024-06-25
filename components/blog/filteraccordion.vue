<template>
  <div class="accordion-container">
    <Blogtitlecount />
    <Blogblogsearchbar />
    <div class="accordion-section" v-for="filterType in Object.keys(filterOptions)" :key="filterType">
      <button @click="toggleSection(filterType)" class="accordion-title">
        {{ getFilterLabel(filterType) }}
      </button>
      <div v-show="activeSection === filterType" class="accordion-content">
        <div v-if="filterType === 'category'">
          <ContentQuery path="/blog" :where="{ published: true }" :sort="{ category: 1 }" v-slot="{ data: categories }">
            <div v-for="category in getUnique(categories, 'category')" :key="category" class="checkbox-container">
              <input type="checkbox" :id="`category-${category}`" :value="category" v-model="filters.category" @change="updateFilters">
              <label :for="`category-${category}`">{{ category }} ({{ getCount(categories, 'category', category) }})</label>
            </div>
          </ContentQuery>
        </div>
        <div v-if="filterType === 'author'">
          <ContentQuery path="/blog" :where="{ published: true }" :sort="{ author: 1 }" v-slot="{ data: authors }">
            <div v-for="author in getUnique(authors, 'author')" :key="author" class="checkbox-container">
              <input type="checkbox" :id="`author-${author}`" :value="author" v-model="filters.author" @change="updateFilters">
              <label :for="`author-${author}`">{{ author }} ({{ getCount(authors, 'author', author) }})</label>
            </div>
          </ContentQuery>
        </div>
        <div v-if="filterType === 'tags'">
          <ContentQuery path="/blog" :where="{ published: true }" v-slot="{ data: tagsData }">
            <div v-for="tag in flattenTags(tagsData)" :key="tag" class="checkbox-container">
              <input type="checkbox" :id="`tag-${tag}`" :value="tag" v-model="filters.tags" @change="updateFilters">
              <label :for="`tag-${tag}`">{{ tag }} ({{ getCount(tagsData, 'tags', tag) }})</label>
            </div>
          </ContentQuery>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, watch, getCurrentInstance } from 'vue';
import { useFiltersStore } from '~/stores/filters';
import Blogtitlecount from '@/components/blog/titlecount.vue';
import Blogblogsearchbar from '@/components/blog/blogsearchbar.vue';

// Utilisation du store Pinia pour gérer l'état global des filtres
const filtersStore = useFiltersStore();
const filters = ref({
  category: [],
  author: [],
  tags: []
});

const activeSection = ref(null);

const filterOptions = {
  category: [],
  author: [],
  tags: []
};

// Map des labels en français
const filterLabels = {
  category: 'Catégories',
  author: 'Auteur',
  tags: 'Mots-clés'
};

// Fonction pour obtenir le label en français
function getFilterLabel(filterType) {
  return filterLabels[filterType] || filterType;
}

// Fonction pour basculer l'affichage des sections de l'accordéon
function toggleSection(section) {
  activeSection.value = activeSection.value === section ? null : section;
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

// Fonction pour obtenir le nombre d'articles pour une valeur spécifique dans un champ
function getCount(items, field, value) {
  return items.reduce((count, item) => {
    if (Array.isArray(item[field])) {
      if (item[field].includes(value)) count++;
    } else if (item[field] === value) {
      count++;
    }
    return count;
  }, 0);
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

// Fonction pour mettre à jour les filtres dans le store et émettre un événement
const instance = getCurrentInstance();

function updateFilters() {
  filtersStore.setFilters(filters.value);  // Met à jour le store Pinia
  instance.proxy.$emit('update:filters', filters.value);   // Émet un événement pour les écouteurs externes
}

// Mise à jour des filtres dans le store lorsque les filtres locaux changent
watch(filters, (newFilters) => {
  filtersStore.setFilters(newFilters);
});
</script>

<style scoped>
.accordion-container {
  @apply p-4 bg-white rounded-lg shadow-md m-4 ;
  border: 1px solid #e0e0e0;
}

.accordion-section {
  @apply mb-4 accent-scicgreen;
}

.accordion-title {
  @apply w-full p-2 text-left bg-gray-100 text-black font-semibold rounded cursor-pointer;
  border-bottom: 1px solid #e0e0e0;
}

.accordion-content {
  @apply p-2 border-t border-gray-300;
}

.checkbox-container {
  @apply flex items-center my-2;
}

input[type="checkbox"] {
  @apply mr-2;
}

label {
  @apply font-medium text-gray-700;
}
</style>




