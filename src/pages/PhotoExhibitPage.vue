<template>
  <MainLayout>
    <main class="content">
      <PhotoExhibit />
    </main>
  </MainLayout>
</template>

<script setup>
import MainLayout from '@/layouts/MainLayout.vue';
import PhotoExhibit from '@/components/sections/photo-exhibit/PhotoExhibit.vue';
</script>

<style lang="scss" scoped>
@import '@/assets/main.scss';

.content {
  width: 100%;
  padding: 5rem 2rem 0 2rem;
}
</style>
