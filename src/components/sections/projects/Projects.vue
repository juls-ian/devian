<script setup>
import IconGitHub from '@/components/icons/IconGitHub.vue';
import { computed, ref } from 'vue';

// logos
import biteLogo from '@/assets/images/projects/bite.ai/bite-logo.webp';
import natoursLogo from '@/assets/images/projects/natours/natours-logo.webp';
import lsLogo from '@/assets/images/projects/ls/ls-logo.webp';
import caelumLogo from '@/assets/images/projects/caelum/caelum-logo.webp';
import rmLogo from '@/assets/images/projects/rm/rm-logo.webp';
import moviesLogo from '@/assets/images/projects/movies/movies-logo.webp';
import readyLogo from '@/assets/images/projects/readysilience/readysilience-logo.webp';
import julLogo from '@/assets/images/projects/jul/jul-logo.webp';
import jvLogo from '@/assets/images/projects/jv/jv-logo.webp';
import flLogo from '@/assets/images/projects/fl/fl-logo.webp';
import cpockLogo from '@/assets/images/projects/cpock/cpock-logo.webp';
import uniLogo from '@/assets/images/projects/uni/uni-logo.webp';
import encLogo from '@/assets/images/projects/enc/enc-logo.webp';
import cmLogo from '@/assets/images/projects/cm/cm-logo.webp';
import cmApiLogo from '@/assets/images/projects/cm-api/cm-api-logo.webp';
import pmLogo from '@/assets/images/projects/pm/pm-logo.webp';
// previews
import julPreview from '@/assets/images/projects/jul/jul-preview.webp';
import jvPreview from '@/assets/images/projects/jv/jv-preview.webp';
import natoursPreview from '@/assets/images/projects/natours/natours-preview.webp';
import bitePreview from '@/assets/images/projects/bite.ai/bite-preview.webp';
import lsPreview from '@/assets/images/projects/ls/ls-preview.webp';
import caelumPreview from '@/assets/images/projects/caelum/caelum-preview.webp';
import rmPreview from '@/assets/images/projects/rm/rm-preview.webp';
import moviesPreview from '@/assets/images/projects/movies/movies-preview.webp';
import readyPreview from '@/assets/images/projects/readysilience/readysilience-preview.webp';
import encPreview from '@/assets/images/projects/enc/enc-preview.webp';
import flPreview from '@/assets/images/projects/fl/fl-preview.webp';
import cpockPreview from '@/assets/images/projects/cpock/cpock-preview.webp';
import uniPreview from '@/assets/images/projects/uni/uni-preview.webp';
import cmPreview from '@/assets/images/projects/cm/cm-preview.webp';
import cmApiPreview from '@/assets/images/projects/cm-api/cm-api-preview.webp';
import pmPreview from '@/assets/images/projects/pm/pm-preview.webp';

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
    urlPreview: 'biteai.netlify.app',
    url: 'https://biteaibeta.netlify.app',
    logo: biteLogo,
    preview: bitePreview,
    github: 'https://github.com/juls-ian/bite.ai'
  },
  {
    name: 'Readysilience',
    type: 'mobile',
    urlPreview: 'readysilience.mediafire.com',
    url: 'https://www.mediafire.com/file/byl0bvim59k67za/Readysilience.apk/file',
    logo: readyLogo,
    preview: readyPreview,
    github: 'https://github.com/juls-ian/readysilience'
  },
  {
    name: 'Natours',
    type: 'web',
    urlPreview: 'natours.netlify.app',
    url: 'natours.netlify.app',
    logo: natoursLogo,
    preview: natoursPreview,
    github: 'https://github.com/juls-ian/natours'
  },
  {
    name: 'Caelum Movie Hub',
    type: 'web',
    urlPreview: 'caelum.netlify.app',
    url: 'https://caelummh.netlify.app',
    logo: caelumLogo,
    preview: caelumPreview,
    github: 'https://github.com/juls-ian/caelum-moviehub'
  },
  {
    name: 'Luxe Estate',
    type: 'web',
    urlPreview: 'luxe-estate.netlify.app',
    url: 'https://luxeestate.netlify.app',
    logo: lsLogo,
    preview: lsPreview,
    github: 'https://github.com/juls-ian/luxe-estate'
  },

  {
    name: 'Fledge',
    type: 'web',
    urlPreview: 'fund-ledger.vercel.app',
    url: 'https://fund-ledger.vercel.app',
    logo: flLogo,
    preview: flPreview,
    github: 'https://github.com/juls-ian/fund-ledger'
  },

  {
    name: 'Porfolio 1.0',
    type: 'web',
    urlPreview: 'jul.netlify.app',
    url: 'jul.netlify.app',
    logo: julLogo,
    preview: julPreview,
    github: 'https://github.com/juls-ian/portfolio-1.0'
  },
  {
    name: 'Rick and Morty Characters',
    type: 'web',
    urlPreview: 'rickandmorty.netlify.app',
    url: 'https://rmsearcher.netlify.app',
    logo: rmLogo,
    preview: rmPreview,
    github: 'https://github.com/juls-ian/rickandmortysearcher'
  },
  {
    name: 'Portfolio 2.0',
    type: 'web',
    urlPreview: 'jv.netlify.app',
    url: 'jv.netlify.app',
    logo: jvLogo,
    preview: jvPreview,
    github: 'https://github.com/juls-ian/portfolio-2.0'
  },
  {
    name: 'CPock',
    type: 'ui',
    urlPreview: 'cpock.heyzine',
    url: 'https://heyzine.com/flip-book/698041a454.html',
    logo: cpockLogo,
    preview: cpockPreview
  },
  {
    name: 'moVieS',
    type: 'web',
    urlPreview: 'movies.vercel.app',
    url: 'https://mo-vie-s.vercel.app',
    logo: moviesLogo,
    preview: moviesPreview,
    github: 'https://github.com/juls-ian/moVieS'
  },
  {
    name: 'UniDays',
    type: 'ui',
    urlPreview: 'unidays.heyzine',
    url: 'https://heyzine.com/flip-book/07b0fd4a1b.html',
    logo: uniLogo,
    preview: uniPreview
  },

  {
    name: 'CheckMate',
    type: 'web',
    urlPreview: 'encryptify.vercel.app',
    url: '',
    logo: cmLogo,
    preview: cmPreview,
    github: 'https://github.com/juls-ian/checkmate'
  },
  {
    name: 'Encryptify',
    type: 'web',
    urlPreview: 'encryptify.vercel.app',
    url: 'https://encryptify-gamma.vercel.app',
    logo: encLogo,
    preview: encPreview,
    github: 'https://github.com/juls-ian/encryptify'
  },
  {
    name: 'CheckMate API',
    type: 'web',
    urlPreview: '',
    url: '',
    logo: cmApiLogo,
    preview: cmApiPreview,
    github: 'https://github.com/juls-ian/checkmate-api'
  },
  {
    name: 'Product Manager',
    type: 'web',
    urlPreview: 'encryptify.vercel.app',
    url: '',
    logo: pmLogo,
    preview: pmPreview,
    github: 'https://github.com/juls-ian/product-manager'
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
    <div class="nav">
      <ul>
        <li @click="setFilter('all')" :class="{ active: activeFilter === 'all' }">All</li>
        <li @click="setFilter('web')" :class="{ active: activeFilter === 'web' }">Web</li>
        <li @click="setFilter('mobile')" :class="{ active: activeFilter === 'mobile' }">Mobile</li>
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
          <img :src="project.preview" loading="lazy" class="img-hover" />
        </figure>
        <div class="project__details">
          <h5>{{ project.name }}</h5>
          <div class="project__links">
            <a class="url" :href="project.url" target="_blank" v-show="project.url">{{
              project.urlPreview
            }}</a>
            <a :href="project.github" target="_blank" class="icon" v-show="project.github">
              <IconGitHub />
            </a>
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
  padding: 1rem 10rem;
  // background-color: $color-white-pure;

  @include respond-to(td) {
    padding: 1rem 7rem;
  }

  @include respond-to(tsm) {
    padding: 1rem 2rem;
  }

  @include respond-to(sm) {
    padding: 1rem 1rem;
  }

  @include respond-to(xs) {
    overflow-x: hidden;
  }
}

.nav {
  display: flex;
  flex-direction: row;
  margin-top: 2rem;

  li {
    display: inline-block;
    text-decoration: none;
    margin-right: 2rem;
    font-family: $font-poppins;
    font-size: $font-size-small;
    cursor: pointer;
    position: relative;
    color: $color-gray-dark;

    @include respond-to(xs) {
      font-size: $font-size-smaller;
      margin-right: 1rem;
    }

    &:hover,
    &.active {
      color: $color-primary;
    }

    &::before {
      content: '';
      position: absolute;
      background: $color-secondary;
      bottom: 0;
      left: 0;
      width: 0;
      height: 0.2rem;
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

  @include respond-to(tsm) {
    .project {
      flex-basis: 45%;
      max-width: 100%;
    }
  }
  @include respond-to(sm) {
    margin-bottom: 7rem;
  }
}

.project {
  width: 23rem;
  height: 20rem;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  margin: 1rem 1rem;
  // padding-bottom: 1rem;
  background: $color-white-pure;
  // box-shadow: 0 9px 9px rgb(251, 191, 36, 0.1);
  box-shadow: 0 9px 9px rgba(107, 114, 128, 0.2);
  cursor: pointer;
  transition: margin 0.2s ease-in-out;

  @include respond-to(tsm) {
    width: 20rem;
  }

  @include respond-to(xs) {
    width: 15rem;
    height: 15rem;
  }

  &.is-hidden {
    display: none !important;
  }

  &:hover {
    margin-top: 0.1rem;
    box-shadow: 0 5px 10px 10px rgba(59, 130, 246, 0.2);
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
      // pixelated fix
      overflow-clip-margin: unset;
      overflow: visible;
      transition: opacity 0.9s ease-in-out;
    }

    .img-default {
      top: 0;
      left: 0;
      visibility: visible;
    }

    .img-hover {
      top: 0;
      left: 0;
      visibility: hidden;
      opacity: 0;
    }

    &:hover {
      .img-default {
        visibility: hidden;
        opacity: 0;
      }
      .img-hover {
        visibility: visible;
        display: inline-block;
        opacity: 1;
      }
    }
  }

  &__details {
    width: 100%;
    padding-top: 1.5rem;
    padding-left: 2rem;
    padding-bottom: 1rem;
    @include respond-to(xs) {
      padding-left: 1rem;
      padding-top: 0.3rem;
    }

    h5 {
      color: $color-gray-dark;
      font-family: $font-poppins;
      font-weight: 560;
      font-size: $font-size-base;

      @include respond-to(xs) {
        font-size: $font-size-small;
      }
    }
  }

  &__links {
    display: flex;
    justify-content: space-between;
    gap: 1rem;
    padding-right: 1rem;
    color: $color-gray-dark;
    vertical-align: middle;

    .url {
      color: $color-primary;
      text-decoration: none;
      font-family: $font-poppins;
      font-size: $font-size-smaller;

      @include respond-to(xs) {
        font-size: $font-size-smallest;
      }
    }

    .icon {
      color: $color-primary;
    }
  }
}
</style>
