<script setup>
import IconArrowRight from '@/components/icons/IconArrowRight.vue';

IconArrowRight;
</script>

<template>
  <section class="pursuits" id="pursuits">
    <div class="pursuits__wrapper">
      <div class="pursuits__content">
        <div class="pursuits__career">
          <h1 class="pursuits__heading pursuits__heading--career">I tinker & develop stuff</h1>
          <p class="pursuits__description pursuits__description--career">
            Web apps, experimental, and personal projects
          </p>
          <a class="pursuits__button btn-primary btn-primary--sweep-variant-1">
            <RouterLink class="text" to="projects">See my works</RouterLink>
            <span class="icon"><IconArrowRight /></span>
          </a>
        </div>
        <div class="pursuits__hobby">
          <h1 class="pursuits__heading pursuits__heading--hobby">I photograph, sometimes</h1>
          <p class="pursuits__description pursuits__description--hobby">
            Capturing portraits, landscapes, and journalism
          </p>
          <a class="pursuits__button btn-primary btn-primary--sweep-variant-2">
            <RouterLink class="text" to="photo-exhibit">Check my gallery</RouterLink>
            <span class="icon"><IconArrowRight /></span>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@import '@/assets/main.scss';

.pursuits {
  display: flex;
  flex-direction: row;
  justify-content: center;
  height: 100vh;
  width: 100%;
  background: $color-white-variant-1;

  @include respond-to(sm) {
    flex-direction: column;
    height: 100%;
    padding: 4rem 0;
  }

  &__wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    padding: 5rem 4.8rem;

    @include respond-to(sm) {
      padding: 0 2rem;
    }
  }

  &__content {
    display: flex;
    flex-direction: row;
    background: #ffff;
    width: 100%;
    height: 100%;
    margin-top: 2rem;

    @include respond-to(sm) {
      flex-direction: column;
    }
  }

  &__career {
    padding: 7rem 0 10rem 6rem;
    border-right: 2px solid $color-gray-light;

    @include respond-to(sm) {
      padding: 4rem 0 3rem 3rem;
      border-right: none;
      border-bottom: 2px solid $color-gray-light;
    }
  }

  &__hobby {
    padding: 7rem 0 10rem 6rem;
    @include respond-to(sm) {
      padding: 4rem 0 3rem 3rem;
    }
  }

  &__heading {
    font-size: $font-size-base-2;
    font-family: $font-poppins;
    line-height: 4rem;

    @include respond-to(sm) {
      font-size: $font-size-base;
    }

    &--career {
      width: 80%;
      color: $color-primary !important;
      @include respond-to(sm) {
        width: 50%;
        line-height: 2rem;
      }
    }

    &--hobby {
      width: 80%;
      color: $color-secondary !important;
      @include respond-to(sm) {
        width: 60%;
        line-height: 2rem;
      }
    }
  }

  &__description {
    font-size: $font-size-small;
    font-family: $font-oxygen;
    font-weight: 500;
    color: $color-gray-darkest !important;
    // margin: 0 20rem 0 0;
    @include respond-to(sm) {
      font-size: $font-size-smaller;
      line-height: 1.5rem;
    }

    &--career {
      width: 50%;
    }

    &--hobby {
      width: 40%;
      @include respond-to(sm) {
        width: 45%;
      }
    }
  }

  &__button {
    margin-top: 3rem;
  }
}
</style>
