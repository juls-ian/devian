<template>
  <div class="navbar">
    <RouterLink class="navbar__logo" :class="{ hidden: isHidden }" to="/">devian</RouterLink>
    <div class="navbar__list">
      <div class="navbar__item">
        <ColorModeSwitcher class="navbar__icon" :class="{ hidden: isHidden }" />
      </div>
      <pre :class="{ hidden: isHidden }">|</pre>
      <div class="navbar__item navbar__item--icon">
        <a href="https://github.com/juls-ian">
          <IconGithub class="navbar__icon" :class="{ hidden: isHidden }" />
        </a>
      </div>
      <div class="navbar__item navbar__item--icon">
        <a href="https://www.linkedin.com/in/julius-ian-valdez/">
          <IconLinkedin class="navbar__icon" :class="{ hidden: isHidden }" />
        </a>
      </div>

      <div class="navbar__item">
        <!-- Re-emit event from Burger to MainLayout-->
        <BurgerButton
          class="navbar__burger"
          @toggle-burger="$emit('toggle', $event)"
          @click="toggleIconsVisibility"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
  import IconGithub from '@/components/icons/IconGitHub.vue';
  import IconLinkedin from '@/components/icons/IconLinkedin.vue';
  import BurgerButton from '@/components/navigation/BurgerButton.vue';
  import ColorModeSwitcher from '@/components/navigation/ColorModeSwitcher.vue';
  import { ref } from 'vue';

  // EMIT TOGGLE EVENT TO PARENT: MainLayout
  const emit = defineEmits(['toggle']);

  const isHidden = ref(false);

  const toggleIconsVisibility = () => {
    isHidden.value = !isHidden.value;
  };
</script>

<style lang="scss" scoped>
  @import '@/assets/main.scss';

  .navbar {
    width: 100vw;
    display: flex;
    flex-direction: row;
    position: absolute; /**scroll up white space issue fix */
    justify-content: space-between;
    justify-items: center;
    align-items: center;
    padding: 2rem 5rem 1rem 5rem;
    background-color: transparent;

    @include respond-to(sm) {
      padding: 2rem 1rem 0 2rem;
    }

    .hidden {
      opacity: 0;
      pointer-events: none;
      transition: opacity 0.3s ease;
    }

    &__item {
      a {
        text-decoration: none;
        color: inherit;
      }

      &--icon {
        @include respond-to(sm) {
          display: none;
        }
      }
    }

    pre {
      margin: 0.1rem 0;
    }

    &__logo {
      display: block;
      justify-content: center;
      justify-items: center;
      align-items: center;
      text-decoration: none;
      font-family: $font-fredoka;
      color: $color-secondary;
    }

    &__list {
      display: flex;
      justify-content: center;
      justify-items: center;
      align-items: center;
      flex-direction: row;
      gap: 2rem;

      @include respond-to(sm) {
        gap: 1rem;
      }
    }

    &__burger {
      @include respond-to(sm) {
        padding-left: 0.1rem;
      }
    }
  }
</style>
