<template>
  <header class="main-nav">
    <HorizontalNav @toggle="toggleMenu" />
    <BurgerMenu :is-visible="isMenuVisible" />
  </header>
  <!-- MAIN SCREEN -->
  <main class="content">
    <slot />
  </main>
</template>

<script setup>
  import { ref } from 'vue';
  import BurgerMenu from '@/components/navigation/BurgerMenu.vue';
  import HorizontalNav from '@/components/navigation/HorizontalNav.vue';

  const isMenuVisible = ref(false);
  const toggleMenu = () => {
    isMenuVisible.value = !isMenuVisible.value;
    if (isMenuVisible.value) {
      document.documentElement.classList.add('hidden');
    } else {
      document.documentElement.classList.remove('hidden');
    }
  };
</script>
<style lang="scss">
  @import '@/assets/main.scss';

  .main-nav {
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

  html.hidden {
    overflow: hidden;
  }
</style>
