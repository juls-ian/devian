<template>
  <main class="content">
    <img src="@/assets/images/notices/updates.png" alt="" />
    <FooterNotice class="content__footer" />
  </main>
</template>

<script setup>
  import FooterNotice from '@/components/sections/FooterNotice.vue';
</script>

<style lang="scss" scoped>
  @import '@/assets/main.scss';

  .content {
    width: 100%;
    height: 100vh;
    background: $color-gray-darkest;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    overflow-x: hidden;

    @include respond-to(sm) {
      height: auto;
      min-height: 100vh;
      justify-content: flex-start;
      padding-top: 4rem;
    }

    img {
      display: block;
      object-fit: contain;
      height: 40rem;
      max-width: 100%;
      position: relative;
      z-index: 1;

      @include respond-to(sm) {
        height: auto;
        width: 100%;
      }

      @include respond-to(lg) {
        margin-top: 2rem;
      }
    }

    &__footer {
      position: relative;
      margin-top: -3rem !important;
      z-index: 10;

      @include respond-to(lg) {
        margin-top: -8rem;
      }
    }
  }
</style>
