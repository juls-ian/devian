<template>
  <MainLayout>
    <main class="content">
      <div class="header">
        <h1><span>/</span>projects.</h1>
        <p>Some of the projects I developed in the past.</p>
      </div>
      <Particles />
      <Projects />
    </main>
    <ContactGeneral />
    <FooterGeneral />
  </MainLayout>
</template>

<script setup>
import Projects from '@/components/sections/projects/Projects.vue';
import Particles from '@/components/backgrounds/Particles.vue';
import MainLayout from '@/layouts/MainLayout.vue';
import FooterGeneral from '@/components/sections/FooterGeneral.vue';
import ContactGeneral from '@/components/sections/ContactGeneral.vue';
</script>

<style lang="scss" scoped>
@import '@/assets/main.scss';

.content {
  width: 100%;
  height: auto;
  padding: 10rem 0 0 0;

  @include respond-to(sm) {
    overflow-x: hidden;
  }
  @include respond-to(xs) {
    padding: 10rem 2rem 0 2rem;
  }
}

.header {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 5rem 0 5rem;
  border-bottom: 2px solid $color-primary-dark;

  @include respond-to(sm) {
    margin: 0 2.5rem 0 2.5rem;
  }

  h1 {
    font-size: $font-size-base-1;
    // color: $color-gray-dark;
    color: $color-primary;
    font-family: $font-oxygen;
    font-weight: 550;

    @include respond-to(xs) {
      font-size: $font-size-base;
    }

    span {
      // color: $color-primary;
      color: $color-secondary;
      font-size: $font-size-base-1;

      @include respond-to(xs) {
        font-size: $font-size-base;
      }
    }
  }

  p {
    font-family: $font-poppins;
    font-size: $font-size-small;
    font-weight: 450;
    color: $color-gray-dark;
    margin-bottom: 2rem;

    @include respond-to(sm) {
      text-align: center;
    }

    @include respond-to(xs) {
      font-size: $font-size-smallest;
    }
  }
}
</style>
