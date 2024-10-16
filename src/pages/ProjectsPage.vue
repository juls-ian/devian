<template>
  <MainLayout>
    <main class="content">
      <Particles />
      <Projects />
      <ContactGeneral />
    </main>
    <FooterGeneral />
  </MainLayout>
</template>

<script setup>
import Projects from '@/components/sections/projects/Projects.vue';
import Particles from '@/components/backgrounds/Particles.vue';
import MainLayout from '@/layouts/MainLayout.vue';
import ContactGeneral from '@/components/sections/ContactGeneral.vue';
import FooterGeneral from '@/components/sections/FooterGeneral.vue';
</script>

<style lang="scss" scoped>
@import '@/assets/main.scss';
</style>
