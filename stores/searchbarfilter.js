import { defineStore } from 'pinia';

export const useSearchbarFilterStore = defineStore('searchbarFilter', {
  state: () => ({
    searchQuery: '',
    searchResults: [],
    searchPerformed: false
  }),
  actions: {
    setSearchQuery(query) {
      this.searchQuery = query;
    },
    setSearchResults(results) {
      this.searchResults = results;
    },
    setSearchPerformed(status) {
      this.searchPerformed = status;
    },
    resetSearch() {
      this.searchQuery = '';
      this.searchResults = [];
      this.searchPerformed = false;
    }
  }
});

