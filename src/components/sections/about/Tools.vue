<template>
  <section id="tools">
    <h1>Tools</h1>
    <div class="passion__lines lines-wave-2">
      <div class="line"></div>
      <div class="line"></div>
    </div>
    <main class="tools">
      <div class="tools__upper">
        <div class="tools__intro">
          <p :class="isDark ? 'dark' : ''">
            Doing full stack development is quite a demanding task. Therefore, I use a lot of tools
            to make everything i can imagine possible. These tech stacks helped me to embrace and
            improve my expertise as a web developer. With hard work and dedication I treat them as
            my companions.
            <br />
            <br />
            Here are the tools I use in a regular basis and some I utilized from the past
            comfortably.
          </p>
        </div>

        <div class="tools__grid">
          <div class="tools__grid-item">
            <a href="https://code.visualstudio.com"
              ><img
                src="@/assets/images/tools/gen-1.webp"
                alt="Visual Studio Code logo"
                loading="lazy"
            /></a>
          </div>
          <div class="tools__grid-item">
            <a href="https://www.figma.com"
              ><img src="@/assets/images/tools/gen-2.webp" alt="Figma logo" loading="lazy"
            /></a>
          </div>
          <div class="tools__grid-item">
            <a
              href="https://www.google.com/intl/en_uk/chrome/dr/download/?brand=FHFK&gad_source=1&gclid=CjwKCAjw3624BhBAEiwAkxgTOl06wMyCfloA4ABvNMlgyHT5izvELw4bdrw4SQi9dKfyqGA-OxCn2hoC7PoQAvD_BwE&gclsrc=aw.ds"
              ><img src="@/assets/images/tools/gen-9.webp" alt="Google Chrome logo" loading="lazy"
            /></a>
          </div>

          <div class="tools__grid-item">
            <a href="https://git-scm.com/"
              ><img src="@/assets/images/tools/gen-3.webp" alt="GIT logo" loading="lazy"
            /></a>
          </div>
          <div class="tools__grid-item">
            <a href="https://www.ibm.com/topics/rest-apis"
              ><img src="@/assets/images/tools/gen-4.webp" alt="REST API logo" loading="lazy"
            /></a>
          </div>
          <div class="tools__grid-item">
            <a href="https://www.canva.com"
              ><img src="@/assets/images/tools/gen-5.webp" alt="Canva logo" loading="lazy"
            /></a>
          </div>
          <div class="tools__grid-item">
            <a href="https://www.npmjs.com/"
              ><img src="@/assets/images/tools/gen-6.webp" alt="NPM logo" loading="lazy"
            /></a>
          </div>
          <div class="tools__grid-item">
            <a href="https://www.postman.com/"
              ><img src="@/assets/images/tools/gen-7.webp" alt="Postman logo" loading="lazy"
            /></a>
          </div>
          <div class="tools__grid-item">
            <a href="https://www.mozilla.org/en-US/firefox/developer/"
              ><img
                src="@/assets/images/tools/gen-8.webp"
                alt="Firefox Developer Edition logo"
                loading="lazy"
            /></a>
          </div>
        </div>
      </div>

      <div class="tools__lower">
        <div class="tools__slider tools__slider--front" style="--quantity: 10">
          <div class="tools__list">
            <div class="tools__slider-item tools__slider-item--front" style="--position: 1">
              <img src="@/assets/images/tools/front-1.webp" alt="" loading="lazy" />
              <p class="tools__name tools__name--css">CSS</p>
            </div>
            <div class="tools__slider-item tools__slider-item--front" style="--position: 2">
              <img src="@/assets/images/tools/front-2.webp" alt="" loading="lazy" />
              <p class="tools__name tools__name--html">HTML</p>
            </div>
            <div class="tools__slider-item tools__slider-item--front" style="--position: 3">
              <img src="@/assets/images/tools/front-3.webp" alt="" loading="lazy" />
              <p class="tools__name tools__name--sass">Sass</p>
            </div>
            <div class="tools__slider-item tools__slider-item--front" style="--position: 4">
              <img src="@/assets/images/tools/front-4.webp" alt="" loading="lazy" />
              <p class="tools__name tools__name--js">JavaScript</p>
            </div>
            <div class="tools__slider-item tools__slider-item--front" style="--position: 5">
              <img src="@/assets/images/tools/front-5.webp" alt="" loading="lazy" />
              <p class="tools__name tools__name--vue">Vue</p>
            </div>
            <div class="tools__slider-item tools__slider-item--front" style="--position: 6">
              <img src="@/assets/images/tools/front-6.webp" alt="" loading="lazy" />
              <p class="tools__name tools__name--tw">Tailwind</p>
            </div>
            <div class="tools__slider-item tools__slider-item--front" style="--position: 7">
              <img src="@/assets/images/tools/front-7.webp" alt="" loading="lazy" />
              <p class="tools__name tools__name--nuxt">Nuxt</p>
            </div>
            <div class="tools__slider-item tools__slider-item--front" style="--position: 8">
              <img src="@/assets/images/tools/front-8.webp" alt="" loading="lazy" />
              <p class="tools__name tools__name--bs">Bootstrap</p>
            </div>
            <div class="tools__slider-item tools__slider-item--front" style="--position: 9">
              <img src="@/assets/images/tools/front-9.webp" alt="" loading="lazy" />
              <p class="tools__name tools__name--vite">Vite</p>
            </div>
            <div class="tools__slider-item tools__slider-item--front" style="--position: 10">
              <img src="@/assets/images/tools/front-10.webp" alt="" loading="lazy" />
              <p class="tools__name tools__name--vue">VueUse</p>
            </div>
          </div>
        </div>
        <div class="tools__slider tools__slider--back" style="--quantity: 8">
          <div class="tools__list">
            <div class="tools__slider-item tools__slider-item--back" style="--position: 1">
              <img src="@/assets/images/tools/back-1.webp" alt="" loading="lazy" />
              <p class="tools__name tools__name--php">PHP</p>
            </div>
            <div class="tools__slider-item tools__slider-item--back" style="--position: 2">
              <img src="@/assets/images/tools/back-2.webp" alt="" loading="lazy" />
              <p class="tools__name tools__name--sql">MySQL</p>
            </div>
            <div class="tools__slider-item tools__slider-item--back" style="--position: 3">
              <img src="@/assets/images/tools/back-3.webp" alt="" loading="lazy" />
              <p class="tools__name tools__name--laravel">Laravel</p>
            </div>
            <div class="tools__slider-item tools__slider-item--back" style="--position: 4">
              <img src="@/assets/images/tools/back-4.webp" alt="" loading="lazy" />
              <p class="tools__name tools__name--firebase">Firebase</p>
            </div>
            <div class="tools__slider-item tools__slider-item--back" style="--position: 5">
              <img src="@/assets/images/tools/back-5.webp" alt="" loading="lazy" />
              <p class="tools__name tools__name--inertia">Inertia</p>
            </div>
            <div class="tools__slider-item tools__slider-item--back" style="--position: 6">
              <img src="@/assets/images/tools/back-6.webp" alt="" loading="lazy" />
              <p class="tools__name tools__name--node">Node.js</p>
            </div>
            <div class="tools__slider-item tools__slider-item--back" style="--position: 7">
              <img src="@/assets/images/tools/back-7.webp" alt="" loading="lazy" />
              <p class="tools__name tools__name--supabase">Supabase</p>
            </div>
            <div class="tools__slider-item tools__slider-item--back" style="--position: 8">
              <img src="@/assets/images/tools/back-8.webp" alt="" loading="lazy" />
              <p class="tools__name tools__name--java">Java</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  </section>
</template>

<script setup>
import { useDark } from '@vueuse/core';
const isDark = useDark();
</script>

<style lang="scss" scoped>
@import '@/assets/main.scss';

.dark {
  color: $color-gray-light !important;
}

#tools {
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
      text-align: center;
    }
  }
}

.tools {
  width: 100%;
  display: flex;
  flex-direction: column;

  &__upper {
    display: flex;
    flex-direction: row;
    margin-top: 2rem;

    @include respond-to(sm) {
      flex-direction: column;
    }

    p {
      font-size: $font-size-small;
      font-family: $font-oxygen;
      font-weight: 400;
      color: $color-gray-dark;
      text-align: justify;
    }
  }

  &__intro {
    width: 60%;

    @include respond-to(sm) {
      width: 100%;
    }
  }

  &__grid {
    display: grid;
    justify-items: center;
    align-items: center;
    grid-template-columns: 10rem 10rem 10rem 10rem 1fr;
    grid-template-rows: 1fr 1fr;
    column-gap: 1rem;
    row-gap: 1rem;
    width: 100%;
    height: 100%;
    padding-left: 2rem;

    @include respond-to(td) {
      grid-template-columns: repeat(3, 1fr);
    }

    @include respond-to(tsm) {
      grid-template-columns: repeat(2, 1fr);
    }

    @include respond-to(sm) {
      justify-content: center;
      padding-left: 0;
      grid-template-columns: 1fr 1fr;
      margin-top: 3rem;
    }
  }

  &__grid-item {
    border: 1px solid $color-gray-dark;
    cursor: pointer;
    transition: transform 0.3s ease-in-out;

    &:nth-child(1) {
      grid-row: 1/3;

      @include respond-to(td) {
        grid-row: 1;
      }

      @include respond-to(tsm) {
        grid-column: 1/3;
      }

      @include respond-to(sm) {
        grid-column: 1/3;
      }
    }

    &:hover {
      transform: scale(1.05);
    }

    img {
      max-width: 8rem;
      max-height: 9rem;
      object-fit: cover;
    }
  }

  &__slider {
    display: flex;
    align-items: start;
    justify-content: start;
    width: 100%;
    height: 12rem;
    overflow: hidden;
    margin-top: 0.8rem;

    &:hover {
      div {
        animation-play-state: paused !important;
        filter: grayscale(1);

        &:hover {
          filter: grayscale(0);
        }
      }
    }

    &--front {
      margin-bottom: 0.5rem;
    }

    &--back {
    }
  }

  &__list {
    display: flex;
    width: 100%;
    //             width * quantity of images
    min-width: calc(100px * var(--quantity)); // responsiveness helper
    position: relative;
  }

  &__slider-item {
    width: 10rem;
    height: 10rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: absolute;
    animation-delay: calc((20s / var(--quantity)) * (var(--position) - 1) - 20s) !important;
    transition: transform 0.4s ease-in-out;
    cursor: pointer;

    img {
      width: 100%;
    }

    &:hover {
      filter: grayscale(0);
      transform: scale(1.05);

      p {
        visibility: visible;
      }
    }

    &--front {
      animation: autoRunLeft 20s linear infinite;
      left: 100%;
    }

    &--back {
      animation: autoRunRight 20s linear infinite;

      right: 100%;
    }
  }

  &__name {
    font-size: $font-size-smallest;
    font-family: $font-poppins;
    color: $color-primary;
    margin-top: -1rem;
    visibility: hidden;

    &--vs {
      color: $color-primary;
    }
    &--css {
      color: $css-color;
    }
    &--html {
      color: $html-color;
    }
    &--sass {
      color: $sass-color;
    }
    &--js {
      color: $javascript-color;
    }
    &--vue {
      color: $vue-color;
    }
    &--tw {
      color: $tailwind-color;
    }
    &--nuxt {
      color: $nuxt-color;
    }
    &--bs {
      color: $bootstrap-color;
    }
    &--vite {
      color: $vite-color;
    }
    &--php {
      color: $php-color;
    }
    &--sql {
      color: $mysql-color;
    }
    &--laravel {
      color: $laravel-color;
    }
    &--firebase {
      color: $firebase-color;
    }
    &--inertia {
      color: $inertia-color;
    }
    &--node {
      color: $node-color;
    }
    &--supabase {
      color: $vue-color;
    }
    &--java {
      color: $java-color;
    }
  }
}
</style>
