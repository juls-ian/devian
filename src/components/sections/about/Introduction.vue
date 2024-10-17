<template>
  <section id="about">
    <main class="about">
      <div class="about__details">
        <h1>Who I am</h1>
        <div class="about__lines lines-grow">
          <div class="line"></div>
          <div class="line"></div>
        </div>
        <h2>Julius Ian Infiles Valdez</h2>
        <p :class="isDark ? 'dark' : ''" class="about__paragraph about__paragraph--first">
          Born in Pasig City, Metro Manila, Philippines. I graduated
          <span class="about__span about__span--grad"><strong>Cum Laude</strong></span> with a
          Bachelor of Science in
          <span class="about__span about__span--grad"><strong>Information Technology</strong></span>
          at Polytechnic University of the Philippines Sto. Tomas Campus.
          <br />
          <br />
          Skilled Full Stack Developer with extensive experience in developing applications.
          Dedicated in engineering and developing web-based solutions utilizing wide array of
          programming languages and frameworks to standardize manual processes.
          <br />
          <br />
          Possesses a quick learning ability, resourceful, and proficient in adapting to emerging
          new technologies and conventions to enhance and refine processes.
          <br />
          <br />
          Currently focused on web development, capitalizing on expertise in
          <span class="about__span about__span--vue">Vue</span>,
          <span class="about__span about__span--laravel">Laravel</span>,
          <span class="about__span about__span--nuxt">Nuxt</span>,
          <span class="about__span about__span--inertia">Inertia</span>,
          <span class="about__span about__span--bootstrap">Bootstrap</span>,
          <span class="about__span about__span--sass">Sass</span>, and
          <span class="about__span about__span--tailwind">Tailwind</span>
          <br />
        </p>
        <br />
        <h2>Core Competencies</h2>
        <p :class="isDark ? 'dark' : ''" class="about__paragraph about__paragraph--second">
          &bullet;Extensive knowledge of web development frameworks, technologies, and conventions
          <br />
          &bullet;Adept problem-solving skills and attention to detail
          <br />
          &bullet;Progressive learning and development in latest technologies
          <br />
          &bullet;Strong communication and effective collaboration with teams
          <br />
          &bullet;Proven leadership record
        </p>
      </div>
      <div class="about__image">
        <img src="@/assets/images/ian/formal.jpeg" alt="" />
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
  color: $color-gray !important;
}

#about {
  position: relative;
}

.about {
  display: flex;
  flex-direction: row;
  margin-top: 5rem;

  @include respond-to(sm) {
    flex-direction: column;
    height: 100%;
  }

  &__details {
    h1 {
      font-size: $font-size-base-1;
      text-transform: uppercase;
      font-family: $font-poppins;
      font-weight: 550;
      letter-spacing: 0.4rem;
      color: $color-primary;

      @include respond-to(sm) {
        width: 100%;
        font-size: $font-size-base;
        text-align: center;
      }
    }

    h2 {
      font-size: $font-size-small;
      text-transform: uppercase;
      font-family: $font-poppins;
      font-weight: 450;
      color: $color-primary;

      @include respond-to(sm) {
        text-align: center;
      }
    }
  }

  &__span {
    font-family: $font-poppins;
    &--grad {
      color: $color-secondary !important;
    }

    &--vue {
      color: $vue-color !important;
    }

    &--nuxt {
      color: $nuxt-color !important;
    }

    &--laravel {
      color: $laravel-color !important;
    }

    &--inertia {
      color: $inertia-color !important;
    }

    &--sass {
      color: $sass-color !important;
    }

    &--tailwind {
      color: $tailwind-color !important;
    }

    &--bootstrap {
      color: $bootstrap-color !important;
    }
  }

  &__paragraph {
    font-family: $font-poppins;
    font-size: $font-size-smaller;
    line-height: 1.5rem;
    font-weight: 400;
    color: $color-gray-dark;

    @include respond-to(td) {
      width: 70%;
    }

    @include respond-to(sm) {
      width: 100%;
    }

    &--first {
      margin-top: 2rem;
    }
    &--second {
      margin-top: 1rem;
    }
  }

  &__image {
    width: 100%;
    height: 100%;

    img {
      height: 45rem;
      position: absolute;
      object-fit: cover;
      // pixelated fix
      overflow-clip-margin: unset;
      overflow: visible;
      margin-top: 0.8rem;
      box-shadow: 0 5px 10px 10px rgba(59, 130, 246, 0.2);

      @include respond-to(td) {
        height: 35rem;
        left: 52%;
      }

      @include respond-to(tsm) {
        height: 25rem;
        top: 15%;
        left: 55%;
      }

      @include respond-to(sm) {
        height: 25rem;
        right: -2%;
      }

      @include respond-to(xs) {
        height: 20rem;
        right: -2%;
      }
    }
  }
}
</style>
