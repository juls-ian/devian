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
          <RouterLink
            to="projects"
            class="pursuits__button btn-primary btn-primary--sweep-variant-1"
          >
            <span class="text" to="projects">See my works</span>
            <span class="icon"><IconArrowRight /></span>
          </RouterLink>
        </div>
        <div class="pursuits__hobby">
          <h1 class="pursuits__heading pursuits__heading--hobby">I take pictures, sometimes</h1>
          <p class="pursuits__description pursuits__description--hobby">
            Capturing portraits, landscapes, and journalism
          </p>
          <RouterLink
            to="photo-exhibit"
            class="pursuits__button btn-primary btn-primary--sweep-variant-2"
          >
            <span class="text" to="photo-exhibit">Check my exhibit</span>
            <span class="icon"><IconArrowRight /></span>
          </RouterLink>
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

    @include respond-to(tsm) {
      height: 100%;
    }

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

      @include respond-to(lg) {
        padding: 3rem 3rem;
      }

      @include respond-to(td) {
        padding: 5rem 4.8rem;
      }

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
      padding: 7rem 3rem 10rem 6rem;
      border-right: 2px solid $color-gray-light;

      @include respond-to(lg) {
        padding: 4rem 0 3rem 4rem;
      }

      @include respond-to(td) {
        padding: 5rem 0 1rem 3rem;
      }

      @include respond-to(tsm) {
        padding: 5rem 0 5rem 3rem;
      }

      @include respond-to(sm) {
        padding: 4rem 0 3rem 3rem;
        border-right: none;
        border-bottom: 2px solid $color-gray-light;
      }
    }

    &__hobby {
      padding: 7rem 0 10rem 6rem;

      @include respond-to(lg) {
        padding: 4rem 0 3rem 4rem;
      }

      @include respond-to(td) {
        padding: 5rem 0 1rem 3rem;
      }

      @include respond-to(tsm) {
        padding: 5rem 0 5rem 3rem;
      }

      @include respond-to(sm) {
        padding: 4rem 0 3rem 3rem;
      }

      @include respond-to(xs) {
        padding: 4rem 3rem 3rem 3rem;
      }
    }

    &__heading {
      font-size: $font-size-base-2;
      font-family: $font-poppins;
      line-height: 4rem;
      margin-bottom: 1rem;

      @include respond-to(tsm) {
        font-size: $font-size-base;
        line-height: 2rem;
      }

      @include respond-to(sm) {
        font-size: $font-size-base;
      }

      @include respond-to(xs) {
        font-size: $font-size-small;
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
      font-size: $font-size-base;
      font-family: $font-oxygen;
      font-weight: 500;
      color: $color-gray-darkest !important;
      // margin: 0 20rem 0 0;

      @include respond-to(sm) {
        font-size: $font-size-smaller;
        line-height: 1.5rem;
      }

      &--career {
        width: 60%;

        @include respond-to(tsm) {
          width: 70%;
        }
      }

      &--hobby {
        width: 60%;

        @include respond-to(tsm) {
          width: 70%;
        }
        @include respond-to(sm) {
          width: 45%;
        }
      }
    }

    &__button {
      margin-top: 2rem;

      @include respond-to(tsm) {
        margin-top: 1rem;
      }
    }
  }
</style>
