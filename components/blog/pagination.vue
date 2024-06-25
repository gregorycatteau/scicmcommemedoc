<template>
  <div class="pagination-container">
    <button @click="previousPage" :disabled="currentPage === 1">Précédent</button>
    <span>Page {{ currentPage }} sur {{ totalPages }}</span>
    <button @click="nextPage" :disabled="currentPage === totalPages">Suivant</button>
  </div>
</template>

<script setup>
import { ref, computed, watch } from 'vue';

const props = defineProps({
  totalItems: {
    type: Number,
    required: true
  },
  itemsPerPage: {
    type: Number,
    default: 10
  }
});

const emit = defineEmits(['pageChanged']);

const currentPage = ref(1);

const totalPages = computed(() => {
  return Math.ceil(props.totalItems / props.itemsPerPage);
});

function nextPage() {
  if (currentPage.value < totalPages.value) {
    currentPage.value++;
  }
}

function previousPage() {
  if (currentPage.value > 1) {
    currentPage.value--;
  }
}

watch(currentPage, (newPage) => {
  emit('pageChanged', newPage);
});
</script>

<style scoped>
.pagination-container {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  margin-top: 1rem;
}

button {
  padding: 0.5rem 1rem;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 0.25rem;
  cursor: pointer;
}

button:disabled {
  background-color: #d3d3d3;
  cursor: not-allowed;
}

span {
  font-size: 1rem;
}
</style>
