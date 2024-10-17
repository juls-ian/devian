<script setup>
import IconArrowRight from '@/components/icons/IconArrowRight.vue';
import GeometricShapes from '@/components/shapes/GeometricShapes.vue';
import Patterns from '@/components/shapes/Patterns.vue';
</script>

<template>
  <section class="about" id="about">
    <GeometricShapes class="about__bg-shapes about__bg-shapes--1" />
    <Patterns class="about__bg-shapes about__bg-shapes--2" />
    <div class="about__content about__content--left">
      <div class="about__details">
        <p class="about__greetings">Good day!</p>
        <h1 class="about__text">
          <span>About Me </span>
        </h1>
        <div class="about__lines lines-pulse-color">
          <div class="line"></div>
          <div class="line"></div>
        </div>
        <h5 class="about__description">
          Crafting web solutions with a strong emphasis on seamless user experience, security, and
          adherence to best practices with front-end and back-end prowess.
        </h5>
        <RouterLink to="about" class="about__button btn-primary btn-primary--sweep">
          <span class="text">Get to know me</span>
          <span class="icon"><IconArrowRight /></span>
        </RouterLink>
      </div>
    </div>

    <div class="about__content about__content--right">
      <div class="about__photo">
        <img src="@/assets/images/ian/casual-squared.png" alt="" />
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@import '@/assets/main.scss';

.about {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  position: relative;
  height: 100vh;

  @include respond-to(sm) {
    flex-direction: column;
    height: 100%;
  }

  &__button {
    text-decoration: none;
  }

  &__bg-shapes {
    position: absolute;
    top: 4rem;
    left: 35rem;
    width: 70%;
    height: 80%;
    z-index: -1;

    @include respond-to(sm) {
      top: 30%;
      left: -1.8rem;
      width: 100%;
      height: auto;
    }

    &--1 {
      @include respond-to(sm) {
        top: 60%;
        left: 5%;
      }
    }

    &--2 {
      @include respond-to(sm) {
        top: 70%;
      }
    }
  }

  &__content {
    display: flex;
    height: inherit;
    padding: 8rem 6rem;
    width: 100%;

    @include respond-to(tlg) {
      padding: 5rem 5rem;
    }
    @include respond-to(sm) {
      padding: 1rem 2rem;
    }

    &--left {
      display: flex;
      flex-direction: column;
      width: 100%;
      flex-basis: 70%;

      @include respond-to(tlg) {
        display: flex;
        flex-direction: row-reverse;
        flex-basis: 100%;
      }

      @include respond-to(sm) {
        height: 10%;
      }
    }

    &--right {
      width: 100%;
      flex-basis: 30%;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }

  &__greetings {
    font-family: $font-poppins;
    font-size: $font-size-base;
    font-weight: 600;
    padding: 1rem 0 2rem 0;

    @include respond-to(xs) {
      font-size: $font-size-small;
    }
    @include respond-to(sm) {
      padding: 5rem 0 2rem 0;
    }
  }

  &__text {
    width: 100%;
    margin-top: -2rem;
    font-family: $font-poppins;
    font-size: $font-size-largest;
    letter-spacing: 0.2rem;
    padding-left: 1rem;
    width: 100%;

    span {
      margin-bottom: 0;
      line-height: 1;
    }

    @include respond-to(tlg) {
      font-size: $font-size-base-1;
    }

    @include respond-to(sm) {
      font-size: $font-size-large;
    }

    @include respond-to(xs) {
      margin-top: -1rem;
      font-size: $font-size-base-1;
    }
  }

  &__lines {
  }

  &__description {
    margin: 2rem 0;
    // color: $color-gray-lighter;
    font-family: $font-oxygen;
    font-style: normal;
    font-weight: 500;
    font-size: $font-size-base;

    @include respond-to(tlg) {
      font-size: $font-size-small;
      width: 90%;
      margin: 1rem 0;
    }

    @include respond-to(sm) {
      font-size: $font-size-small;
    }
  }

  &__photo {
    img {
      height: 30rem;

      @include respond-to(tlg) {
        margin-top: 9rem;
        margin-left: 3rem;
        height: 20rem;
        position: absolute;
        left: 60%;
        bottom: 15%;
      }

      @include respond-to(tsm) {
        height: 20rem;
        left: 55%;
      }

      @include respond-to(sm) {
        margin-top: 2rem;
        height: 20rem;
        position: relative;
        left: 1%;
      }

      @include respond-to(xs) {
        margin-top: 0.7rem;
        height: 15rem;
        position: relative;
        left: 1%;
      }
    }
  }
}
</style>
