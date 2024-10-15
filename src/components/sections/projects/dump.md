# SIMPLE APPROACH BUT LESS PERFORMANCE WISE

<script setup>
import IconGitHub from '@/components/icons/IconGitHub.vue';
import { ref } from 'vue';
import { useMotion } from '@vueuse/motion';
import { TransitionPresets, useTransition } from '@vueuse/core';

// active filter ref | default = all
const activeFilter = ref('all');

// updating filter
const setFilter = (filter) => {
  activeFilter.value = filter;
};

// displaying the project
const showProject = (projectType) => {
  return activeFilter.value === 'all' || activeFilter.value === projectType;
};
</script>

<template>
  <section id="project">
    <div class="header">
      <h1><span>/</span>projects.</h1>
      <p>Some of the projects I've worked on from the past until recently</p>
    </div>
    <div class="nav">
      <ul>
        <li @click="setFilter('all')" :class="{ active: activeFilter === 'all' }">All</li>
        <li @click="setFilter('web')" :class="{ active: activeFilter === 'web' }">Web</li>
        <li @click="setFilter('mobile')" :class="{ active: activeFilter === 'mobile' }">
          Mobile app
        </li>
        <li @click="setFilter('ui')" :class="{ active: activeFilter === 'ui' }">UI/UX</li>
      </ul>
    </div>

    <div class="projects-gallery">
      <!-- BITE AI -->
      <div class="project web" v-if="showProject('web')" v-motion-pop-visible-once>
        <figure class="project__logo">
          <img src="@/assets/images/projects/bite.ai/bite-logo.webp" class="img-default" />
          <img src="@/assets/images/projects/bite.ai/bite-logo.webp" class="img-hover" />
        </figure>
        <div class="project__details">
          <h5>Bite.ai</h5>
          <div class="project__links">
            <h6>biteai.netlify.app</h6>
            <IconGitHub class="icon" />
          </div>
        </div>
      </div>

      <!-- NATOURS -->
      <div class="project web" v-if="showProject('web')" v-motion-pop-visible-once>
        <figure class="project__logo">
          <img src="@/assets/images/projects/natours/natours-logo.webp" class="img-default" />
          <img src="@/assets/images/projects/bite.ai/bite-logo.webp" class="img-hover" />
        </figure>
        <div class="project__details">
          <h5>Natours</h5>
          <div class="project__links">
            <h6>natours.netlify.app</h6>
            <IconGitHub class="icon" />
          </div>
        </div>
      </div>

      <!-- LUXXE ESTATE -->
      <div class="project web" v-if="showProject('web')" v-motion-pop-visible-once>
        <figure class="project__logo">
          <img src="@/assets/images/projects/ls/ls-logo-text.webp" class="img-default" />
          <img src="@/assets/images/projects/bite.ai/bite-logo.webp" class="img-hover" />
        </figure>
        <div class="project__details">
          <h5>Luxxe Estate</h5>
          <div class="project__links">
            <h6>luxxe-estate.netlify.app</h6>
            <IconGitHub class="icon" />
          </div>
        </div>
      </div>

      <!-- CAELUM MH -->
      <div class="project mobile" v-if="showProject('mobile')" v-motion-pop-visible-once>
        <figure class="project__logo">
          <img src="@/assets/images/projects/caelum/caelum-logo.webp" class="img-default" />
          <img src="@/assets/images/projects/bite.ai/bite-logo.webp" class="img-hover" />
        </figure>
        <div class="project__details">
          <h5>Caelum Movie Hub</h5>
          <div class="project__links">
            <h6>caelum.netlify.app</h6>
            <IconGitHub class="icon" />
          </div>
        </div>
      </div>

      <!-- RICK AND MORTY  -->
      <div class="project" v-if="showProject('web')" v-motion-pop-visible-once>
        <figure class="project__logo">
          <img src="@/assets/images/projects/rm/rm-logo.webp" class="img-default" />
          <img src="@/assets/images/projects/bite.ai/bite-logo.webp" class="img-hover" />
        </figure>
        <div class="project__details">
          <h5>Rick and Morty Char API</h5>
          <div class="project__links">
            <h6>rickandmorty.netlify.app</h6>
            <IconGitHub class="icon" />
          </div>
        </div>
      </div>

      <!-- MOVIES -->
      <div class="project" v-if="showProject('web')" v-motion-pop-visible-once>
        <figure class="project__logo">
          <img src="@/assets/images/projects/movies/movies-logo.webp" class="img-default" />
          <img src="@/assets/images/projects/bite.ai/bite-logo.webp" class="img-hover" />
        </figure>
        <div class="project__details">
          <h5>moVieS</h5>
          <div class="project__links">
            <h6>movies.netlify.app</h6>
            <IconGitHub class="icon" />
          </div>
        </div>
      </div>

      <!-- READYSILIENCE -->
      <div class="project ui" v-if="showProject('web')" v-motion-pop-visible-once>
        <figure class="project__logo">
          <img src="@/assets/images/projects/movies/movies-logo.webp" class="img-default" />
          <img src="@/assets/images/projects/bite.ai/bite-logo.webp" class="img-hover" />
        </figure>
        <div class="project__details">
          <h5>Readysilience</h5>
          <div class="project__links">
            <h6>movies.netlify.app</h6>
            <IconGitHub class="icon" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@import '@/assets/main.scss';

section {
  position: relative;
  width: 100%;
  height: auto;
  padding: 10rem 10rem;
  background-color: $color-white-pure;
}

.header {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1 {
    font-size: $font-size-base-1;
    color: $color-gray-dark;
    font-family: $font-poppins;
    font-weight: 550;

    span {
      color: $color-gray;
    }
  }

  p {
    font-family: $font-poppins;
    font-size: $font-size-small;
    font-weight: 450;
  }
}

.nav {
  display: flex;
  flex-direction: row;
  margin-top: 1rem;

  li {
    display: inline-block;
    text-decoration: none;
    margin-right: 2rem;
    font-family: $font-poppins;
    font-size: $font-size-small;
    cursor: pointer;
    position: relative;

    &::before {
      content: '';
      position: absolute;
      background: $color-primary;
      bottom: 0;
      left: 0;
      width: 0;
      height: 0.3rem;
      transition: width 0.4s ease;
    }

    &.active::before {
      width: 100%;
    }
  }
}

.projects-gallery {
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  justify-content: start;
  align-items: start;
  margin-top: 3rem;
}

.project {
  width: 23rem;
  height: 20rem;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  flex-grow: 0;
  margin: 1rem 1rem;
  padding-bottom: 1rem;
  background: $color-white-pure;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  cursor: pointer;

  &.is-hidden {
    display: none !important;
  }

  &__logo {
    width: 100%;
    height: 100%;
    position: relative;
    background-color: $color-white;
    overflow: hidden; // image stay within the container

    img {
      position: absolute;
      width: 100%;
      height: 100%;
      object-fit: cover;
      // border-bottom: 2px solid $color-gray-dark;
    }

    .img-default {
      top: 0;
      left: 0;
      visibility: visible;
      transform: scale(0.95);
      transition: transform 0.3s ease;
    }

    .img-hover {
      top: 0;
      left: 0;
      visibility: hidden;
      transform: scale(1);
      transition: transform 0.3s ease;
    }

    &:hover {
      .img-default {
        visibility: hidden;
      }
      .img-hover {
        visibility: visible;
        display: inline-block;
      }
    }
  }

  &__details {
    width: 100%;
    padding-top: 1.5rem;
    padding-left: 2rem;
    padding-bottom: 1rem;

    h5 {
      color: $color-gray-dark;
      font-family: $font-poppins;
      font-weight: 560;
    }

    h6 {
      color: $color-primary-dark;
      font-family: $font-poppins;
      font-weight: 350;
    }
  }

  &__links {
    display: flex;
    justify-content: space-between;
    gap: 1rem;
    padding-right: 1rem;
    color: $color-gray-dark;
    vertical-align: middle;

    a {
      color: $color-primary;
    }

    .icon {
      color: $color-primary;
    }
  }
}
</style>


## PERFORMANCE WISE
<script setup>
import IconGitHub from '@/components/icons/IconGitHub.vue';
import { computed, ref } from 'vue';
import { useMotion } from '@vueuse/motion';
import { TransitionPresets, useTransition } from '@vueuse/core';

import biteLogo from '@/assets/images/projects/bite.ai/bite-logo.webp';
import natoursLogo from '@/assets/images/projects/natours/natours-logo.webp';
import lsLogo from '@/assets/images/projects/ls/ls-logo-text.webp';
import caelumLogo from '@/assets/images/projects/caelum/caelum-logo.webp';
import rmLogo from '@/assets/images/projects/rm/rm-logo.webp';
import moviesLogo from '@/assets/images/projects/movies/movies-logo.webp';
import readyLogo from '@/assets/images/projects/movies/movies-logo.webp';

// ACTIVE filter | default = all
const activeFilter = ref('all');
// LI filter
const setFilter = (filter) => {
  activeFilter.value = filter;
};

// PROJECTS data
const projects = ref([
  {
    name: 'Bite.ai',
    type: 'web',
    url: 'biteai.netlify.app',
    logo: biteLogo,
    ui: ''
  },
  {
    name: 'Natours',
    type: 'web',
    url: 'natours.netlify.app',
    logo: natoursLogo,
    ui: ''
  },
  {
    name: 'Luxxe Estate',
    type: 'web',
    url: 'luxxe-estate.netlify.app',
    logo: lsLogo,
    ui: ''
  },
  {
    name: 'Caelum Movie Hub',
    type: 'mobile',
    url: 'caelum.netlify.app',
    logo: caelumLogo,
    ui: ''
  },
  {
    name: 'Rick and Morty Char API',
    type: 'web',
    url: 'rickandmorty.netlify.app',
    logo: rmLogo,
    ui: ''
  },
  {
    name: 'moVieS',
    type: 'web',
    url: 'movies.netlify.app',
    logo: moviesLogo,
    ui: ''
  },
  {
    name: 'Readysilience',
    type: 'mobile',
    url: 'readysilience.netlify.app',
    logo: readyLogo,
    ui: ''
  }
]);

// FILTER
const filteredProjects = computed(() => {
  // display all
  return activeFilter.value === 'all'
    ? projects.value
    : // create a filtered array matching activeFilter
      projects.value.filter((project) => project.type === activeFilter.value);
});
</script>

<template>
  <section id="project">
    <div class="header">
      <h1><span>/</span>projects.</h1>
      <p>Some of the projects I've worked on from the past until recently</p>
    </div>
    <div class="nav">
      <ul>
        <li @click="setFilter('all')" :class="{ active: activeFilter === 'all' }">All</li>
        <li @click="setFilter('web')" :class="{ active: activeFilter === 'web' }">Web</li>
        <li @click="setFilter('mobile')" :class="{ active: activeFilter === 'mobile' }">
          Mobile app
        </li>
        <li @click="setFilter('ui')" :class="{ active: activeFilter === 'ui' }">UI/UX</li>
      </ul>
    </div>

    <div class="projects-gallery">
      <div
        v-for="project in filteredProjects"
        :key="project.name"
        class="project"
        v-motion-pop-visible-once
      >
        <figure class="project__logo">
          <img :src="project.logo" loading="lazy" class="img-default" />
          <img :src="project.logo" loading="lazy" class="img-hover" />
        </figure>
        <div class="project__details">
          <h5>{{ project.name }}</h5>
          <div class="project__links">
            <h6>{{ project.url }}</h6>
            <IconGitHub class="icon" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@import '@/assets/main.scss';

section {
  position: relative;
  width: 100%;
  height: auto;
  padding: 10rem 10rem;
  background-color: $color-white-pure;
}

.header {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1 {
    font-size: $font-size-base-1;
    color: $color-gray-dark;
    font-family: $font-poppins;
    font-weight: 550;

    span {
      color: $color-gray;
    }
  }

  p {
    font-family: $font-poppins;
    font-size: $font-size-small;
    font-weight: 450;
  }
}

.nav {
  display: flex;
  flex-direction: row;
  margin-top: 1rem;

  li {
    display: inline-block;
    text-decoration: none;
    margin-right: 2rem;
    font-family: $font-poppins;
    font-size: $font-size-small;
    cursor: pointer;
    position: relative;

    &::before {
      content: '';
      position: absolute;
      background: $color-primary;
      bottom: 0;
      left: 0;
      width: 0;
      height: 0.3rem;
      transition: width 0.4s ease;
    }

    &.active::before {
      width: 100%;
    }
  }
}

.projects-gallery {
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  justify-content: start;
  align-items: start;
  margin-top: 3rem;
}

.project {
  width: 23rem;
  height: 20rem;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  flex-grow: 0;
  margin: 1rem 1rem;
  padding-bottom: 1rem;
  background: $color-white-pure;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  cursor: pointer;

  &.is-hidden {
    display: none !important;
  }

  &__logo {
    width: 100%;
    height: 100%;
    position: relative;
    background-color: $color-white;
    overflow: hidden; // image stay within the container

    img {
      position: absolute;
      width: 100%;
      height: 100%;
      object-fit: cover;
      // border-bottom: 2px solid $color-gray-dark;
    }

    .img-default {
      top: 0;
      left: 0;
      visibility: visible;
      transform: scale(0.95);
      transition: transform 0.3s ease;
    }

    .img-hover {
      top: 0;
      left: 0;
      visibility: hidden;
      transform: scale(1);
      transition: transform 0.3s ease;
    }

    &:hover {
      .img-default {
        visibility: hidden;
      }
      .img-hover {
        visibility: visible;
        display: inline-block;
      }
    }
  }

  &__details {
    width: 100%;
    padding-top: 1.5rem;
    padding-left: 2rem;
    padding-bottom: 1rem;

    h5 {
      color: $color-gray-dark;
      font-family: $font-poppins;
      font-weight: 560;
    }

    h6 {
      color: $color-primary-dark;
      font-family: $font-poppins;
      font-weight: 350;
    }
  }

  &__links {
    display: flex;
    justify-content: space-between;
    gap: 1rem;
    padding-right: 1rem;
    color: $color-gray-dark;
    vertical-align: middle;

    a {
      color: $color-primary;
    }

    .icon {
      color: $color-primary;
    }
  }
}
</style>