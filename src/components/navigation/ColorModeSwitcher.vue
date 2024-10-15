<template>
  <div class="container">
    <a @click="toggleDarkMode()" class="container__button">
      <IconMoon v-if="!isDark" />
      <IconSun v-else />
    </a>
  </div>
</template>

<script setup>
import { useDark, useToggle } from '@vueuse/core';
import IconMoon from '../icons/IconMoon.vue';
import IconSun from '../icons/IconSun.vue';

const isDark = useDark({
  selector: 'body',
  attribute: 'color-scheme',
  valueDark: 'dark-mode',
  valueLight: 'light-mode'
});

const toggleDarkMode = useToggle(isDark);
</script>

<style lang="scss" scoped>
@import '@/assets/main.scss';

.container {
  display: flex;
  justify-content: center;
  align-items: center;

  &__button {
    border: none;
    background: transparent;
    cursor: pointer;
  }
}

.moon-dark-mode {
  fill: $color-primary-light;
}

.sun-dark {
  fill: $color-secondary;
}
</style>
