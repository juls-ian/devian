<script setup>
import RippleBackground from '@/components/backgrounds/RippleBackground.vue';
import IconArrowRight from '@/components/icons/IconArrowRight.vue';
import Wave from '@/components/shapes/Wave.vue';
import pdf from '@/assets/pdf/DevianResume.pdf';
</script>

<template>
  <section class="hero" id="hero">
    <Wave class="hero__wave" />
    <div class="hero__content hero__content--left">
      <div class="hero__details">
        <p class="hero__greetings">Hi there!, I am</p>
        <h1 class="hero__name">
          <span>Julius </span>
          <span>Ian</span>
        </h1>
        <div class="hero__lines lines-wave">
          <div class="line"></div>
          <div class="line"></div>
        </div>
        <h5 class="hero__profession">
          Full Stack Developer <code class="html-sign">&lt;/&gt;</code>
        </h5>
        <a class="hero__button btn-primary btn-primary--forward" :href="pdf" target="_blank">
          <span class="text">Get Resume</span>
          <span class="icon"><IconArrowRight /></span>
        </a>
      </div>
    </div>

    <div class="hero__content hero__content--right">
      <div class="hero__frame">
        <div class="hero__photo">
          <img src="@/assets/images/ian/casual.png" class="photo" alt="Julius Ian Valdez Photo" />
        </div>
      </div>

      <RippleBackground class="hero__ripple" />
    </div>
  </section>
</template>

<style lang="scss" scoped>
@import '@/assets/main.scss';

.hero {
  background-color: transparent;
  display: flex;
  position: relative;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  height: 100vh;

  @include respond-to(sm) {
    flex-direction: column;
    height: 100%;
  }

  &__wave {
    @include respond-to(sm) {
      display: none;
    }
  }
  &__ripple {
    @include respond-to(sm) {
      height: 50vh;
    }
  }

  &__content {
    width: 100%;

    &--left {
      height: inherit;
      width: 100%;
      flex-basis: 60%; // mainly for the wave partition & image placement only
      background-color: $color-primary;

      // @include respond-to(tsm) {
      //   flex-basis: 70%;
      // }
    }

    &--right {
      height: inherit;
      flex-basis: 40%; // mainly for the wave partition & image placement only
      width: 100%;
      background-color: $color-secondary;

      // @include respond-to(tsm) {
      //   flex-basis: 30%;
      // }
      @include respond-to(sm) {
        height: 10%;
      }
    }
  }

  &__details {
    padding: 8rem 6rem;

    @include respond-to(tsm) {
      padding: 6rem 3rem;
    }

    @include respond-to(sm) {
      padding: 8rem 2rem;
    }
  }

  &__greetings {
    font-family: $font-poppins;
    font-size: $font-size-base-1;
    font-weight: 600;
    color: $color-secondary;

    @include respond-to(td) {
      font-size: $font-size-base;
    }

    @include respond-to(xs) {
      font-size: $font-size-small;
    }
  }

  &__name {
    display: flex;
    flex-direction: column;
    font-family: $font-poppins;
    text-transform: uppercase;
    font-size: $font-size-largest;
    letter-spacing: 0.8rem;

    @include respond-to(td) {
      font-size: $font-size-base-2;
    }

    @include respond-to(sm) {
      font-size: $font-size-large;
    }

    @include respond-to(xs) {
      font-size: $font-size-base-1;
    }

    span {
      margin-bottom: 0;
      line-height: 1;
    }
  }

  &__lines {
  }

  &__profession {
    margin: 2rem 0;
    color: $color-gray-darker !important;
    font-family: $font-oxygen;
    font-size: $font-size-base;
    color: $color-gray-lighter !important;

    @include respond-to(tsm) {
      font-size: $font-size-small;
      width: 100%;
    }

    .html-sign {
      color: $color-secondary;
    }
  }

  &__frame {
    position: absolute;
    max-width: 4rem;
    height: auto;

    @include respond-to(sm) {
      height: 50%;
      max-width: 100%;
    }
  }

  &__photo {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding-right: 20rem;

    @include respond-to(sm) {
      padding-right: 0;
      height: 30vh;
    }

    img {
      height: 100vh;
      object-fit: cover;
      z-index: 3;

      @include respond-to(sm) {
        height: 70vh;
      }
    }
  }
}
</style>
