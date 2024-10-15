
# ColorModeSwitcher.vue
<template>
  <div class="container">
    <Button @click="toggleDarkMode()" class="toggle-button" :class="{ dark: isDark }">
      <IconMoon v-if="!isDark" />
      <IconSun v-else />
    </Button>
  </div>
</template>

<script setup>
import { useDark, useToggle } from '@vueuse/core';
import IconMoon from '../icons/IconMoon.vue';
import IconSun from '../icons/IconSun.vue';

const isDark = useDark();
const toggleDarkMode = useToggle(isDark);
</script>

<style lang="scss" scoped>
@import '@/assets/main.scss';

.container {
  border: 2px solid $color-primary;
  border-radius: 2rem;
  width: 5rem;
  display: flex;
  justify-content: start;
  align-items: center;

  .toggle-button {
    padding-top: 0.3rem;
    border: none;
    border-radius: 2rem;
    position: relative;
    cursor: pointer;
    overflow: hidden;

    &.dark {
      transform: translateX(135%);
    }
  }
}
</style>


# Combining Static and Dynamic Classes 
<div :class="['hamburger__line', { 'hamburger__line--active': isActive }]"></div>
