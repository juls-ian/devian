<script setup>
  import { ref } from 'vue';
  import { useRouter } from 'vue-router';
  import PreLoader from './components/preloader/PreLoader.vue';

  const isLoading = ref(false);
  const router = useRouter();

  router.beforeEach((to, from, next) => {
    isLoading.value = true;
    next();
  });

  router.afterEach(() => {
    setTimeout(() => {
      isLoading.value = false;
    }, 2000);
  });
</script>

<template>
  <div>
    <PreLoader :is-loaded="!isLoading" />
    <RouterView />
  </div>
</template>

<style lang="scss">
  @import '@/assets/main.scss';
</style>
