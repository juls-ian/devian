<template>
  <MainLayout>
    <main class="sections" id="sections">
      <VerticalNav class="vertical-nav" />
      <div>
        <Hero />
      </div>
      <div>
        <About />
      </div>
      <div>
        <Stack />
      </div>
      <div>
        <Pursuits />
      </div>

      <div>
        <Contact />
      </div>
      <div>
        <Footer />
      </div>
    </main>
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
  import { onBeforeUnmount, onMounted, ref } from 'vue';

  onMounted(() => {
    const sections = document.getElementById('sections');
    const isTrackPad = ref(false);

    // Scroll Device Detector
    const detectScrollDevice = (e) => {
      if (Math.abs(e.deltaY) < 100) {
        isTrackPad.value = true;
      } else {
        isTrackPad.value = false;
      }
    };

    // Scroll Position Restoration
    const savedScrollPosition = sessionStorage.getItem('scrollPosition');
    if (savedScrollPosition) {
      requestAnimationFrame(() => {
        sections.scrollTo({
          top: parseInt(savedScrollPosition, 10),
          behavior: 'instant'
        });
      });
    }

    // Session storage
    const saveScrollPosition = () => {
      sessionStorage.setItem('scrollPosition', sections.scrollTop);
    };

    // Slow Mouse Wheel (FOR LARGE SCREENS ONLY)
    const customScroll = (e) => {
      const screenWidth = window.innerWidth;
      if (screenWidth >= 1280 && !isTrackPad.value) {
        // Apply only on larger screens
        e.preventDefault();
        const scrollSpeed = 100; // Slowing the scroll
        sections.scrollBy({
          top: e.deltaY > 0 ? scrollSpeed : -scrollSpeed,
          behavior: 'smooth'
        });
      }
    };

    sections.addEventListener('wheel', detectScrollDevice, { passive: true });
    sections.addEventListener('wheel', customScroll, { passive: false });
    sections.addEventListener('scroll', saveScrollPosition);

    onBeforeUnmount(() => {
      sections.removeEventListener('wheel', detectScrollDevice);
      sections.removeEventListener('wheel', customScroll);
    });
  });
</script>

<style lang="scss" scoped>
  @import '@/assets/main.scss';

  .sections {
    scroll-snap-type: y mandatory;
    scroll-behavior: smooth;
    height: 100vh;
    overflow-y: scroll;
    overflow-x: hidden; // BUG FIX

    // Hide Scrollbar
    &::-webkit-scrollbar {
      display: none;
    }
    -ms-overflow-style: none; /* Internet Explorer 10+ */
    scrollbar-width: none; /* Firefox */

    @include respond-to(td) {
      scroll-snap-type: none;
    }
    @include respond-to(sm) {
      scroll-snap-type: none;
    }
  }

  .vertical-nav {
    @include respond-to(td) {
      display: none;
    }
    @include respond-to(sm) {
      display: none;
    }
  }

  .sections > div,
  .hero,
  .about,
  .stack,
  .pursuits,
  .contact,
  .footer {
    scroll-behavior: smooth;
    scroll-snap-align: start;
    scroll-snap-stop: always;
  }
</style>
