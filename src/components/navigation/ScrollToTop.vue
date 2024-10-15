<template>
  <div class="scroll-to-top">
    <button class="scroll-to-top__button" @click="scrollToSection('hero')"><IconUp /></button>
  </div>
</template>

<script setup>
import IconUp from '../icons/IconUp.vue';

const scrollToSection = (sectionId) => {
  const section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' });
  }
};
</script>

<style lang="scss" scoped>
@import '@/assets/main.scss';

.scroll-to-top {
  .icon {
    z-index: -1;
  }
  &__button {
    width: 100%;
    height: 3rem;
    background: $color-primary;
    border: solid transparent;
    border-radius: 16px;
    border-width: 0 0 4px;
    color: #ffffff;
    margin: 0;
    outline: none;
    padding: 13px 16px;
    transform: translateZ(0);
    transition: filter 0.2s;
    z-index: 2;
    user-select: auto;
    &:focus {
      user-select: auto;
    }

    &:after {
      background-clip: padding-box;
      background-color: $color-primary-light;
      border: solid transparent;
      border-radius: 16px;
      border-width: 0 0 4px;
      cursor: pointer;
      bottom: -4px;
      content: '';
      left: 0;
      position: absolute;
      right: 0;
      top: 0;
      z-index: -1;
    }

    &:hover:not(:disabled) {
      filter: brightness(1.1);
      -webkit-filter: brightness(1.1);
    }

    &:hover:not(:disabled) {
      filter: brightness(1.1);
      -webkit-filter: brightness(1.1);
    }

    &:active {
      border-width: 4px 0 0;
      background: none;
    }
  }
}
</style>
