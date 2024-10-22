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
