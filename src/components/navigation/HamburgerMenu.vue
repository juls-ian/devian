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
        :duration="1200"
        >About</RouterLink
      >
      <RouterLink
        to="projects"
        class="menu__link"
        v-motion
        :initial="{ opacity: 0, y: 100 }"
        :enter="{ opacity: 1, y: 0, scale: 1 }"
        :variants="{ custom: { scale: 2 } }"
        :delay="200"
        :duration="1200"
        >Projects</RouterLink
      >
      <RouterLink
        to="photo-exhibit"
        class="menu__link"
        v-motion
        :initial="{ opacity: 0, y: 100 }"
        :enter="{ opacity: 1, y: 0, scale: 1 }"
        :variants="{ custom: { scale: 2 } }"
        :delay="300"
        :duration="1200"
        >Photo Exhibit</RouterLink
      >
      <RouterLink
        to="resume"
        class="menu__link"
        v-motion
        :initial="{ opacity: 0, y: 100 }"
        :enter="{ opacity: 1, y: 0, scale: 1 }"
        :variants="{ custom: { scale: 2 } }"
        :delay="400"
        :duration="1200"
        >Resume</RouterLink
      >
    </ul>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
@import '@/assets/main';

.menu {
  display: flex;
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
}
</style>
