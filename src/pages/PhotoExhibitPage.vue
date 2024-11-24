<template>
  <MainLayout>
    <main class="content">
      <PhotoExhibit />
    </main>
  </MainLayout>
</template>

<script setup>
  import PhotoExhibit from '@/components/sections/photo-exhibit/PhotoExhibit.vue';
  import MainLayout from '@/layouts/MainLayout.vue';
</script>

<style lang="scss" scoped>
  @import '@/assets/main.scss';

  .content {
    width: 100%;
    height: 100vh;
    padding: 1rem 0 0 0;
  }
</style>
