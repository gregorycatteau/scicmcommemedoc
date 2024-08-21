// stores/slideover.js
import { defineStore } from 'pinia';

export const useSlideoverStore = defineStore('slideover', {
  state: () => ({
    isOpen: false,
    contentComponent: null
  }),
  actions: {
    openSlideover(component) {
      this.contentComponent = component;
      this.isOpen = true;
    },
    closeSlideover() {
      this.isOpen = false;
      this.contentComponent = null;
    }
  }
});
