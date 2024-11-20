<template>
  <MainLayout>
    <main class="content">
      <main class="content">
        <img src="@/assets/images/notices/construction-3.png" alt="" />
      </main>
    </main>
  </MainLayout>
</template>

<script setup>
import MainLayout from '@/layouts/MainLayout.vue';
</script>

<style lang="scss" scoped>
@import '@/assets/main.scss';

.content {
  width: 100%;
  height: 100vh;
  padding: 10rem 5rem 0 5rem;
  background: $color-gray-darkest;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    object-fit: contain;
    height: 40rem;

    @include respond-to(sm) {
      height: 25rem;
    }
    @include respond-to(xs) {
      height: 23rem;
    }
  }
}
</style>
