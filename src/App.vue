<template>
  <div>
    <PreLoader :is-visible="preload.isLoading" />
    <RouterView />
  </div>
</template>

<script setup>
  import PreLoader from '@/components/preloader/PreLoader.vue';
  import { usePreloadStore } from '@/stores/preload';

  const preload = usePreloadStore();

  window.addEventListener('DOMContentLoaded', () => {
    document.onreadystatechange = () => {
      if (document.readyState === 'complete') {
        preload.hide();
      } else {
        preload.show();
      }
    };
  });
</script>

<style lang="scss">
  @import '@/assets/main.scss';
</style>
