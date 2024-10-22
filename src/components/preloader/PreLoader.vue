<template>
  <transition name="slide-up">
    <div class="page-loader" v-if="!isLoaded">
      <div class="circle"></div>
      <div class="circle"></div>
    </div>
  </transition>
</template>

<script setup>
defineProps({
  isLoaded: {
    type: Boolean,
    required: true
  }
});
</script>

<style lang="scss" scoped>
@import '@/assets/main.scss';

$circle-colors: $color-primary, $color-secondary;

.page-loader {
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: $color-primary-darkest;
  z-index: 999;
  gap: 1rem;

  .circle {
    width: 4rem;
    height: 4rem;
    border-radius: 3rem;

    @include respond-to(sm) {
      width: 3rem;
      height: 3rem;
    }

    @for $i from 1 through length($circle-colors) {
      &:nth-child(#{$i}) {
        background: nth($circle-colors, $i);
      }
    }

    &:first-child {
      animation: left 0.7s ease-in-out infinite alternate;
    }
    &:last-child {
      animation: right 0.7s ease-in-out infinite alternate;
    }
  }
}

.slide-up-enter-active,
.slide-up-leave-active {
  transition: all 0.8s ease-in-out;
}

.slide-up-enter-from,
.slide-up-leave-to {
  transform: translateY(0);
}

.slide-up-leave-active {
  transform: translateY(-100%);
}
</style>
