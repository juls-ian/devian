<template>
  <header class="main-nav">
    <HorizontalNav @toggle="toggleMenu" />
    <BurgerMenu :is-visible="burger.isVisible" />
  </header>
  <!-- MAIN SCREEN -->
  <main class="content">
    <slot />
  </main>
</template>

<script setup>
  import BurgerMenu from '@/components/navigation/BurgerMenu.vue';
  import HorizontalNav from '@/components/navigation/HorizontalNav.vue';
  import { useBurgerStore } from '@/stores/burger';

  const burger = useBurgerStore();
  // const isMenuVisible = ref(false);
  
  const toggleMenu = () => {
    burger.isVisible = !burger.isVisible;
    if (burger.isVisible) {
      document.body.classList.add('hidden');
      burger.show();
    } else {
      document.body.classList.remove('hidden');
      burger.dispose();
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
    overflow-y: visible;
  }

  .hidden {
    overflow: hidden;
  }
</style>
