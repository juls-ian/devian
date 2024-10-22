<template>
  <header class="header">
    <HorizontalNav @toggle="toggleMenu" />
    <HamburgerMenu v-if="isMenuVisible" />
  </header>
  <!--  avoid scrolling when hamburgermenu is visible -->
  <main :class="{ hidden: isMenuVisible }" class="content">
    <slot />
  </main>
</template>

<script setup>
import HamburgerMenu from '@/components/navigation/HamburgerMenu.vue';
import { ref } from 'vue';
import HorizontalNav from '@/components/navigation/HorizontalNav.vue';

const isMenuVisible = ref(false);
const toggleMenu = () => {
  isMenuVisible.value = !isMenuVisible.value;
};
</script>
<style lang="scss" scoped>
@import '@/assets/main.scss';

.header {
  width: 100%;
  max-width: 100vw;
  top: 0;
  position: sticky;
  z-index: 99;
}

.content {
  ::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
}

.hidden {
  visibility: hidden;
  pointer-events: none;
  position: fixed;
}
</style>
