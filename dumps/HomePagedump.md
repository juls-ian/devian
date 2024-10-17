// FOR SLOWER SCROLL FOR SNAP SCROLL
// const handleScroll = (event) => {
//   event.preventDefault();
//   window.scrollBy({
//     top: event.deltaY * 0.9,
//     left: 0,
//     behavior: 'smooth'
//   });
// };

// // SCROLL ISSUE ON OTHER PAGES FIXES
// onMounted(() => {
//   document.addEventListener('wheel', handleScroll, { passive: false });
// });

// onBeforeUnmount(() => {
//   document.removeEventListener('wheel', handleScroll);
// });



<template>
  <MainLayout>
    <div class="sections" id="sections">
      <VerticalNav class="vertical-nav" />
      <div class="section">
        <Hero />
      </div>
      <div class="section">
        <About />
      </div>
      <div class="section">
        <Stack />
      </div>
      <div class="section">
        <Pursuits />
      </div>
      <div class="section">
        <Contact />
      </div>
      <div class="section">
        <Footer />
      </div>
    </div>
  </MainLayout>
</template>

<script setup>
import MainLayout from '@/layouts/MainLayout.vue';
import Hero from '@/components/sections/home/Hero.vue';
import About from '@/components/sections/home/About.vue';
import Stack from '@/components/sections/home/Stack.vue';
import Pursuits from '@/components/sections/home/Pursuits.vue';
import Contact from '@/components/sections/home/Contact.vue';
import Footer from '@/components/sections/home/Footer.vue';
import VerticalNav from '@/components/navigation/VerticalNav.vue';
</script>

<style lang="scss" scoped>
.sections {
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;
  height: 100vh; // Ensure the container has full view height
  overflow-y: scroll; // Allow vertical scrolling
  &::-webkit-scrollbar {
    display: none;
  }
}

.section {
  scroll-behavior: smooth;
  height: 100vh; // Ensure each section fills the view height
  scroll-snap-align: start; // Snap to the start of each section
  scroll-snap-stop: always; // Ensure the scroll stops at each section
}
</style>
