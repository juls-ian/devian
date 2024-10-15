<template>
  <MainLayout>
    <main class="content">
      <div class="header">
        <h1><span>/</span>about.</h1>
        <p>Get to know me.</p>
      </div>
      <Introduction />
      <Passion />
      <Tools />
      <Awards />
    </main>
  </MainLayout>
  <FooterGeneral />
</template>

<script setup>
import Awards from '@/components/sections/about/Awards.vue';
import Introduction from '@/components/sections/about/Introduction.vue';
import Passion from '@/components/sections/about/Passion.vue';
import Tools from '@/components/sections/about/Tools.vue';
import FooterGeneral from '@/components/sections/FooterGeneral.vue';
import MainLayout from '@/layouts/MainLayout.vue';
</script>

<style lang="scss" scoped>
@import '@/assets/main.scss';

.content {
  width: 100%;
  height: auto;
  padding: 10rem 5rem 0 5rem;
}

.header {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-bottom: 2px solid $color-primary-dark;

  h1 {
    font-size: $font-size-base-1;
    // color: $color-gray-dark;
    color: $color-primary;
    font-family: $font-oxygen;
    font-weight: 550;

    span {
      // color: $color-primary;
      color: $color-secondary;
      font-size: $font-size-base-1;
    }
  }

  p {
    font-family: $font-poppins;
    font-size: $font-size-small;
    font-weight: 450;
    color: $color-gray-dark;
    margin-bottom: 2rem;
  }
}
</style>
