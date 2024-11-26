import { defineStore } from 'pinia';
import { computed, ref } from 'vue';

export const usePreloadStore = defineStore('preload', () => {
  const isLoading = ref(true);

  const show = () => {
    isLoading.value = true;
  };

  const hide = () => {
    isLoading.value = false;
  };

  return { isLoading, show, hide };
});
