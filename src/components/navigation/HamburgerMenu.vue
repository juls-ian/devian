<template>
  <div class="menu">
    <ul class="menu__links">
      <RouterLink
        to="about"
        class="menu__link"
        v-motion
        :initial="{ opacity: 0, y: 100 }"
        :enter="{ opacity: 1, y: 0, scale: 1 }"
        :variants="{ custom: { scale: 2 } }"
        :delay="100"
        :duration="1000"
        >About</RouterLink
      >
      <RouterLink
        to="projects"
        class="menu__link"
        v-motion
        :initial="{ opacity: 0, y: 100 }"
        :enter="{ opacity: 1, y: 0, scale: 1 }"
        :delay="200"
        :duration="1000"
        >Projects</RouterLink
      >
      <RouterLink
        to="photo-exhibit"
        class="menu__link"
        v-motion
        :initial="{ opacity: 0, y: 100 }"
        :enter="{ opacity: 1, y: 0, scale: 1 }"
        :delay="300"
        :duration="1000"
        >Photo Exhibit</RouterLink
      >
      <RouterLink
        to="resume"
        class="menu__link"
        v-motion
        :initial="{ opacity: 0, y: 100 }"
        :enter="{ opacity: 1, y: 0, scale: 1 }"
        :delay="400"
        :duration="1000"
        >Resume</RouterLink
      >
    </ul>

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
</template>

<script setup>
import IconGitHub from '../icons/IconGitHub.vue';
import IconLinkedin from '../icons/IconLinkedin.vue';
</script>

<style lang="scss" scoped>
@import '@/assets/main';

.menu {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  // background-image: linear-gradient(to right bottom, #1f2937, #1a293f, #172846, #15274e, #172554);
  // background-image: linear-gradient(to left bottom, #374151, #2d3a53, #243454, #1d2d54, #172554);
  // background-image: linear-gradient(to left bottom, #172554, #233a79, #2e51a1, #3669ca, #3b82f6);
  // background-image: linear-gradient(to left bottom, #3b82f6, #3371e4, #2c60d3, #2550c1, #1e40af);
  background-image: linear-gradient(to left bottom, #3b82f6, #3175ef, #2868e8, #215be0, #1d4ed8);
  // background-image: linear-gradient(to left bottom, #3b82f6, #3175ef, #2868e8, #215be0, #1d4ed8);
  width: 100vw;
  height: 100vh;

  &__links {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: start;
  }

  &__link {
    text-decoration: none;
    font-size: $font-size-base-1;
    font-weight: 400;
    font-family: $font-poppins;
    color: $color-white;
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
    }

    a {
      text-decoration: none;
      color: inherit;
      height: 4rem;
    }
  }
}
</style>
