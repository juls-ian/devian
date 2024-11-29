<template>
  <nav class="navbar">
    <ul>
      <li>
        <button class="boxes" @click="(scrollToSection('hero'), rotateBox($event))"></button>
      </li>
      <li>
        <button class="boxes" @click="(scrollToSection('about'), rotateBox($event))"></button>
      </li>
      <li>
        <button class="boxes" @click="(scrollToSection('stack'), rotateBox($event))"></button>
      </li>
      <li>
        <button class="boxes" @click="(scrollToSection('pursuits'), rotateBox($event))"></button>
      </li>
      <li>
        <button class="boxes" @click="(scrollToSection('contact'), rotateBox($event))"></button>
      </li>
      <li>
        <button
          class="boxes hidden"
          @click="(scrollToSection('footer'), rotateBox($event))"
        ></button>
      </li>
    </ul>
  </nav>
</template>

<script setup>
  import { onMounted, ref } from 'vue';
  const boxes = ref([]);
  const sections = ref([]);

  // scrolling to homepage sections
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const rotateBox = (event) => {
    boxes.value.forEach((box) => {
      box.classList.remove('rotated');
    });
    event.target.classList.toggle('rotated');
  };

  // helper function to update box styles for stack section
  const applyStackStyles = (boxIndex) => {
    boxes.value.forEach((box) => {
      box.style.backgroundColor = '#fbbf24'; // secondary color
    });
    boxes.value[boxIndex].style.border = '2px solid #fbbf24';
    boxes.value[boxIndex].style.backgroundColor = 'transparent';
  };

  // helper function to reset box styles
  const resetBoxStyles = () => {
    boxes.value.forEach((box) => {
      box.style.backgroundColor = ''; // Reset to default
      box.style.border = '';
      box.style.opacity = 1;
    });
  };

  const hideBoxes = () => {
    boxes.value.forEach((box) => {
      box.style.opacity = 0;
    });
  };

  // BOXES RESPONDING TO SCROLL
  const observeSections = () => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const sectionId = entry.target.id;
          const boxIndex = sections.value.indexOf(sectionId);

          // IF INTERSECTING
          if (entry.isIntersecting) {
            boxes.value[boxIndex].classList.add('rotated');

            if (sectionId === 'stack') {
              applyStackStyles(boxIndex);
            } else {
              resetBoxStyles();
            }

            if (sectionId === 'footer') {
              hideBoxes();
            } else if (sectionId === 'contact') {
              resetBoxStyles();
            }
            // IF NOT INTERSECTING
          } else {
            boxes.value[boxIndex].classList.remove('rotated');
          }
        });
      },
      { threshold: 0.5 }
    );

    sections.value.forEach((sectionId) => {
      const section = document.getElementById(sectionId);
      observer.observe(section);
    });
  };

  onMounted(() => {
    boxes.value = document.querySelectorAll('.boxes');
    sections.value = ['hero', 'about', 'stack', 'pursuits', 'contact', 'footer']; //depends on the buttons

    observeSections();
  });
</script>

<style lang="scss" scoped>
  @import '@/assets/main.scss';

  * {
    transition: all 0.2s linear;
  }

  .navbar {
    position: fixed;
    top: 80%;
    right: 3rem;
    transform: translateY(-50%);
    z-index: 2;

    ul {
      list-style: none;
    }

    .hidden {
      visibility: hidden;
    }

    .boxes {
      background: $color-primary;
      border-radius: 2px;

      border: none;
      cursor: pointer;
      width: 1rem;
      height: 1rem;
      transform: rotate(45deg);
      margin: 0.2rem;

      &.rotated {
        transform: rotate(0);
        border-radius: 2px;
        background: transparent;
        border: 2px solid $color-primary;
      }
    }
  }
</style>
