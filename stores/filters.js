// stores/filters.js
import { defineStore } from 'pinia';

export const useFiltersStore = defineStore('filters', {
  state: () => ({
    filters: {
      category: '',
      author: '',
      tags: [],
    }
  }),
  actions: {
    setFilters(newFilters) {
      this.filters = newFilters;
    },
    resetFilters() {
      this.filters = {
        category: '',
        author: '',
        tags: [],
      };
    }
  }
});
