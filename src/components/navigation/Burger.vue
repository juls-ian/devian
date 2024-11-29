<template>
  <div class="hamburger" @click="handleToggle">
    <!--          STATIC                    DYNAMIC -->
    <div class="hamburger__line" :class="{ 'hamburger__line--active': isActive }"></div>
    <div class="hamburger__line" :class="{ 'hamburger__line--active': isActive }"></div>
    <div class="hamburger__line" :class="{ 'hamburger__line--active': isActive }"></div>
    <!-- <div :class="['hamburger__line', { 'hamburger__line--active': isActive }]"></div> -->
  </div>
</template>

<script setup>
  import { ref } from 'vue';

  const isActive = ref(false);
  const emit = defineEmits(['toggle-burger']);

  const handleToggle = () => {
    isActive.value = !isActive.value;
    // EMIT TOGGLE EVENT TO THE PARENT
    emit('toggle-burger', isActive.value);
  };
</script>

<style lang="scss" scoped>
  @import '@/assets/main';
  .hamburger {
    display: flex;
    flex-direction: column;
    cursor: pointer;
    position: relative;
    z-index: 1001;

    &__line {
      width: 2.5rem;
      height: 0.2rem;
      margin: 4px 0;
      transition: all 0.3s ease;

      &:nth-child(1) {
        background: $color-secondary;
      }

      &:nth-child(2) {
        margin-left: 0.4rem;
        background: $color-pink;
      }

      &:nth-child(3) {
        background: $color-primary-light;
      }

      &--active {
        &:nth-child(1) {
          //                                x, y-axis
          transform: rotate(45deg) translate(5px, 10px);
        }
        &:nth-child(2) {
          opacity: 0;
        }
        &:nth-child(3) {
          transform: rotate(-45deg) translate(5px, -10px);
        }
      }
    }
  }
</style>
