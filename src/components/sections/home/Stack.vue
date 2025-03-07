<script setup lang="ts">
import GeometricShapesLeft from '@/components/shapes/GeometricShapesLeft.vue';
import GeometricShapesRight from '@/components/shapes/GeometricShapesRight.vue';
</script>

<template>
  <section class="stack" id="stack">
    <GeometricShapesLeft class="stack__pattern stack__pattern--left" />
    <div class="stack__content">
      <div class="stack__left">
        <h1 class="stack__text stack__text--frontend">Frontend</h1>
        <p class="stack__description stack__description--front">
          Probably not the most fond of frontend side but I can build it. You'll mostly find me
          contemplating on the best mixes of colors, fonts, responsiveness, and layouts. Sometimes I
          can't even center a div. I'm dedicated in developing seamless user experience with Vue.
        </p>
      </div>
      <div class="stack__right">
        <h1 class="stack__text stack__text--backend">Backend</h1>
        <p class="stack__description stack__description--back">
          Upon learning web development, backend mostly drew my interest. I enjoyed building
          server-side logic and managing databases using PHP. Later adopting Laravel to fully
          leverage its features and make development more efficient and enjoyable.
        </p>
      </div>
      <GeometricShapesRight class="stack__pattern stack__pattern--right" />
    </div>
  </section>
</template>

<style lang="scss" scoped>
@import '@/assets/main.scss';

.stack {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  background-color: $color-primary-darkest;
  position: relative;
  z-index: 1;
  height: 100vh;

  @include respond-to(sm) {
    flex-direction: column;
    height: auto;
  }

  @include respond-to(xs) {
  }

  &__pattern {
    position: absolute;
    z-index: -1;

    &--left {
      top: 20rem;
      right: 50%;
      z-index: -1;

      @include respond-to(sm) {
        right: -10%;
        top: 42%;
        height: 15rem;
      }

      @include respond-to(xs) {
        left: 1%;
      }
    }

    &--right {
      left: 50rem;
      z-index: -1;

      @include respond-to(sm) {
        top: 10%;
        left: -10%;
        height: 10rem;
      }

      @include respond-to(xs) {
        left: -1%;
      }
    }
  }

  &__content {
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 9rem;
    margin: 8rem 10rem;

    @include respond-to(td) {
      margin: 8rem 4rem;
    }

    @include respond-to(sm) {
      flex-direction: column;
      gap: 0;
      margin: 4rem 2rem;
    }

    @include respond-to(xs) {
      margin: 5rem 2rem;
    }
  }

  &__left {
    margin-bottom: 12rem;
    left: 50%;

    @include respond-to(tsm) {
      margin-top: 5rem;
    }
    @include respond-to(sm) {
      margin-bottom: 1rem;
      margin-top: 2rem;
    }
  }

  &__right {
    margin-top: 12rem;
    @include respond-to(tsm) {
      margin-top: 11rem;
    }
    @include respond-to(sm) {
      margin-top: 1rem;
    }
  }

  &__text {
    font-size: $font-size-larger;
    font-family: $font-poppins;

    @include respond-to(td) {
      font-size: $font-size-base-2;
    }

    @include respond-to(sm) {
      font-size: $font-size-base-1;
    }

    &--frontend {
      color: $color-secondary !important;
    }

    &--backend {
      color: $color-primary-light !important;
    }
  }

  &__description {
    font-family: $font-fredoka;
    text-align: start;
    font-weight: 300;
    font-size: $font-size-small;
    color: $color-white !important;

    @include respond-to(td) {
      font-size: $font-size-smaller;
      text-align: start;
    }
  }
}
</style>
