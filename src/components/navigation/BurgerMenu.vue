<template>
  <Transition name="slide">
    <div class="menu" v-if="isVisible">
      <div class="menu__links">
        <RouterLink
          to="about"
          class="menu__link"
          v-motion
          :initial="{ opacity: 0, y: 50 }"
          :enter="{ opacity: 1, y: 0, scale: 1 }"
          :delay="400"
          :duration="1000"
          >About</RouterLink
        >
        <RouterLink
          to="projects"
          class="menu__link"
          v-motion
          :initial="{ opacity: 0, y: 50 }"
          :enter="{ opacity: 1, y: 0 }"
          :delay="500"
          :duration="1000"
          >Projects</RouterLink
        >
        <RouterLink
          to="photo-exhibit"
          class="menu__link"
          v-motion
          :initial="{ opacity: 0, y: 50 }"
          :enter="{ opacity: 1, y: 0 }"
          :delay="600"
          :duration="1000"
          >Photo Exhibit</RouterLink
        >
        <RouterLink
          to="resume"
          class="menu__link"
          v-motion
          :initial="{ opacity: 0, y: 50 }"
          :enter="{ opacity: 1, y: 0 }"
          :delay="700"
          :duration="1000"
          >Resume</RouterLink
        >
      </div>
      <div
        class="menu__socials"
        v-motion
        :initial="{ opacity: 0, y: 100 }"
        :enter="{ opacity: 1, y: 0, scale: 1 }"
        :delay="500"
        :duration="1000"
      >
        <div class="menu__social-icon">
          <a href="https://github.com/juls-ian">
            <IconGitHub class="navbar__icon" />
          </a>
        </div>
        <div class="menu__social-icon">
          <a href="https://www.linkedin.com/in/julius-ian-valdez/">
            <IconLinkedin class="navbar__icon" />
          </a>
        </div>
      </div>
    </div>
  </Transition>
</template>

<script setup>
  import IconGitHub from '../icons/IconGitHub.vue';
  import IconLinkedin from '../icons/IconLinkedin.vue';

  defineProps({
    isVisible: {
      type: Boolean,
      required: true
    }
  });
</script>

<style lang="scss" scoped>
  @import '@/assets/main';

  .menu {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-image: linear-gradient(to left bottom, #3b82f6, #3175ef, #2868e8, #215be0, #1d4ed8);
    width: 100vw;
    height: 100vh;
    position: fixed; // overlays the main slot content

    &__links {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: start;
      flex-wrap: wrap;
      text-wrap: stable;
    }

    &__link {
      text-decoration: none;
      font-size: $font-size-base-1;
      font-weight: 400;
      font-family: $font-poppins;
      color: $color-white;

      @include respond-to(sm) {
        overflow: hidden;
      }
    }

    &__socials {
      display: flex;
      gap: 2rem;
      display: none;

      @include respond-to(sm) {
        display: flex;
        align-items: start;
        justify-content: space-between;
        font-size: 2rem;
        position: absolute;
        bottom: 20%;
      }

      a {
        text-decoration: none;
        color: inherit;
        height: 4rem;
      }
    }
  }

  // Enter start from top
  .slide-enter-from {
    transform: translateY(-100%);
  }

  // Smooth animation
  .slide-enter-active {
    transition:
      transform 0.7s ease-in-out,
      opacity 0.5s ease;
  }

  // End at original position
  .slide-enter-to {
    transform: translateY(0);
  }

  // Exit start at current position
  .slide-leave-from {
    transform: translateY(0);
  }

  .slide-leave-active {
    transition:
      transform 0.7s ease-in-out,
      opacity 0.5s ease;
  }
  // Exit upward
  .slide-leave-to {
    transform: translateY(-100%);
  }
</style>
