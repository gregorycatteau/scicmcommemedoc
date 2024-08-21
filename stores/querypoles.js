// stores/querypole.js
import { defineStore } from 'pinia';

export const usePoleStore = defineStore('poleStore', {
  state: () => ({
    selectedPole: null,
  }),
  actions: {
    setSelectedPole(pole) {
      this.selectedPole = pole;
    },
    clearPole() {
      this.selectedPole = null;
    }
  }
});
