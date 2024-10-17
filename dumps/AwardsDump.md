<script setup>
import 'vue3-carousel/dist/carousel.css';
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel';

import laudeMob from '@/assets/images/awards/transparent/1.webp';
import plMob from '@/assets/images/awards/transparent/2.webp';
import comMob from '@/assets/images/awards/transparent/3.webp';
import devMob from '@/assets/images/awards/transparent/4.webp';
import katagaMob from '@/assets/images/awards/transparent/5.webp';
import comsocMob from '@/assets/images/awards/transparent/6.webp';
import kataga2Mob from '@/assets/images/awards/transparent/7.webp';
import gdscMob from '@/assets/images/awards/transparent/8.webp';
import psychMob from '@/assets/images/awards/transparent/9.webp';
import searcherMob from '@/assets/images/awards/transparent/10.webp';

import laudeDesk from '@/assets/images/awards/bg/1.webp';
import plDesk from '@/assets/images/awards/bg/2.webp';
import comDesk from '@/assets/images/awards/bg/3.webp';
import devDesk from '@/assets/images/awards/bg/4.webp';
import katagaDesk from '@/assets/images/awards/bg/5.webp';
import comsocDesk from '@/assets/images/awards/bg/6.webp';
import kataga2Desk from '@/assets/images/awards/bg/7.webp';
import gdscDesk from '@/assets/images/awards/bg/8.webp';
import psychDesk from '@/assets/images/awards/bg/9.webp';
import searcherDesk from '@/assets/images/awards/bg/10.webp';
import { ref } from 'vue';

const awards = [
  {
    name: 'President Lister',
    giver: 'Polytechnic University of the Philippines',
    imageDesk: plDesk,
    imageMob: plMob
  },
  {
    name: 'Cum Laude',
    giver: 'Polytechnic University of the Philippines',
    imageDesk: laudeDesk,
    imageMob: laudeMob
  },
  {
    name: 'Graduation Service',
    giver: 'PUP STC - Graduating Class Committee',
    imageDesk: comDesk,
    imageMob: comMob
  },
  {
    name: 'Participation',
    giver: 'deVexpress',
    imageDesk: devDesk,
    imageMob: devMob
  },
  {
    name: 'Internal Relations',
    giver: 'Google Student Developer Club',
    imageDesk: gdscDesk,
    imageMob: gdscMob
  },
  {
    name: 'Facilitator',
    giver: 'Kapatiran ng Talino at Galing',
    imageDesk: katagaDesk,
    imageMob: katagaMob
  },
  {
    name: 'Auditor',
    giver: 'Computer Society',
    imageDesk: comsocDesk,
    imageMob: comsocMob
  },
  {
    name: 'Senior Photojournalist',
    giver: 'The Searcher',
    imageDesk: searcherDesk,
    imageMob: searcherMob
  },
  {
    name: 'Auditor',
    giver: 'Kapatiran ng Talino at Galing',
    imageDesk: kataga2Desk,
    imageMob: kataga2Mob
  },
  {
    name: 'Judge',
    giver: 'Psychology Society',
    imageDesk: psychDesk,
    imageMob: psychMob
  }
];

const settings = ref({
  itemsToShow: 1,
  snapAlign: 'center'
});

const breakpoints = ref({
  320: {
    itemsToShow: 1,
    snapAlign: 'center'
  },

  // 700px+
  700: {
    itemsToShow: 3.5,
    snapAlign: 'center'
  },
  // 1024+
  1024: {
    itemsToShow: 3,
    snapAlign: 'start'
  }
});
</script>

<template>
  <section id="awards">
    <h1>Awards & Recognition</h1>
    <div class="passion__lines lines-wave-2">
      <div class="line"></div>
      <div class="line"></div>
    </div>
    <main class="awards">
      <div class="awards__wrapper">
        <Carousel
          class="awards__carousel"
          v-bind="settings"
          :items-to-show="3"
          :breakpoints="breakpoints"
          :wrap-around="true"
        >
          <Slide class="awards__slider" v-for="award in awards" :key="award.name">
            <div class="awards__container">
              <figure class="awards__image-container">
                <img :src="award.imageDesk" alt="" class="awards__image awards__image--desktop" />
                <!-- <img :src="award.imageMob" alt="" class="awards__image awards__image--mobile" /> -->
              </figure>
              <article class="awards__details">
                <h2>{{ award.name }}</h2>
                <p>
                  from <span> {{ award.giver }}</span>
                </p>
              </article>
            </div>
          </Slide>
          <template #addons>
            <Navigation class="awards__navigation" />
            <Pagination class="awards__pagination" />
          </template>
        </Carousel>
      </div>
    </main>
  </section>
</template>

<style lang="scss" scoped>
@import '@/assets/main.scss';

#awards {
  margin-top: 5rem;
  width: 100%;

  h1 {
    font-size: $font-size-base-1;
    text-transform: uppercase;
    font-family: $font-poppins;
    font-weight: 550;
    letter-spacing: 0.4rem;
    color: $color-primary;

    @include respond-to(sm) {
      font-size: $font-size-base;
      text-align: center;
    }
  }
}

.awards {
  &__wrapper {
    width: 100%;
  }

  &__carousel {
    margin-top: 3rem;
    height: max-content;
  }

  &__slider {
    border-right: 1.5px solid $color-gray-dark;
    padding-bottom: 1rem;

    @include respond-to(sm) {
      border-left: 1.5px solid $color-gray-dark;
    }
  }

  &__container {
    // padding-top: 5rem;
    transition: transform 0.3s ease-in-out;

    &:hover {
      transform: scale(1.05);
    }
  }

  &__details {
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: start;
    padding-left: 1rem;
    width: 100%;

    @include respond-to(sm) {
      text-align: center;
      justify-content: center;
      align-items: center;
      padding-left: 1rem;
    }

    h2 {
      font-family: $font-poppins;
      font-size: $font-size-small;
      font-weight: 600;
      color: $color-primary;
    }

    p {
      font-size: $font-size-smaller;
      font-family: $font-poppins;
      font-weight: 400;

      @include respond-to(sm) {
        font-size: $font-size-smallest;
        text-align: center;
      }
    }

    span {
      font-weight: 500;
    }
  }

  &__image {
    // background: $color-gray-darkest;
    border-top-right-radius: 5px;
    border-top-left-radius: 5px;
    max-height: 35rem;
    object-fit: cover;

    @include respond-to(sm) {
      max-height: 25rem;
    }

    @include respond-to(xs) {
      max-height: 22rem;
    }

    &--desktop {
    }

    &--mobile {
      display: none;
    }
  }
  &__pagination {
    margin-top: 3rem;
    padding-bottom: 3rem;
    border-radius: 100px;
  }

  &__navigation {
    top: 90%;
  }
}
</style>
