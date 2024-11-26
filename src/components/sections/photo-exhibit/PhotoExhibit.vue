<template>
  <main class="content">
    <section class="intro">
      <h1 class="intro__title">Capturing</h1>
      <h1 class="intro__title">Fleeting Moments</h1>
      <h1 class="intro__title">of Everyday Life</h1>
      <h1 class="intro__title">Weaving Timeless Stories with</h1>
      <h1 class="intro__title">Lens and Narrative</h1>
    </section>

    <section class="exhibit">
      <!-- Exhibit 01 -->
      <div class="exhibit__container">
        <div class="exhibit__heading">
          <h2 class="exhibit__heading-title">Raw</h2>
          <p class="exhibit__heading-terms">
            <span>Shutter |&nbsp;</span>
            <span>Aperture |&nbsp;</span>
            <span>ISO &nbsp;</span>
          </p>
          <p class="exhibit__heading-subtitle">
            <span>refining techniques</span>
          </p>
        </div>

        <div class="exhibit__thumbnail">
          <img src="@/assets/images/exhibit/t1.webp" alt="" />
          <img src="@/assets/images/exhibit/t2.webp" alt="" />
          <img src="@/assets/images/exhibit/t3.webp" alt="" />
          <img src="@/assets/images/exhibit/t4.webp" alt="" />
          <img src="@/assets/images/exhibit/t5.webp" alt="" />
        </div>

        <div class="exhibit__highlight">
          <figure>
            <img src="@/assets/images/exhibit/h-1.webp" />
          </figure>
        </div>
      </div>
      <!-- Exhibit 02 -->
      <div class="exhibit__container">
        <div class="exhibit__heading">
          <h2 class="exhibit__heading-title">Creative</h2>
          <p class="exhibit__heading-terms">
            <span>Rule of thirds | &nbsp;</span>
            <span>Depth of field |&nbsp;</span>
            <span>Composition</span>
          </p>
          <p class="exhibit__heading-subtitle">
            <span>profound storytelling</span>
          </p>
        </div>

        <div class="exhibit__thumbnail">
          <img src="@/assets/images/exhibit/t6.webp" alt="" />
          <img src="@/assets/images/exhibit/t7.webp" alt="" />
          <img src="@/assets/images/exhibit/t8.webp" alt="" />
          <img src="@/assets/images/exhibit/t9.webp" alt="" />
          <img src="@/assets/images/exhibit/t10.webp" alt="" />
        </div>
        <div class="exhibit__highlight">
          <figure>
            <img src="@/assets/images/exhibit/h-2.webp" />
          </figure>
        </div>
      </div>
      <!-- Exhibit 03 -->
      <div class="exhibit__container">
        <div class="exhibit__heading">
          <h2 class="exhibit__heading-title">Eye-opening</h2>
          <p class="exhibit__heading-terms">
            <span>Perspective |&nbsp;</span>
            <span>Symmetry |&nbsp;</span>
            <span>Contrast |&nbsp;</span>
            <span>Framing &nbsp;</span>
          </p>
          <p class="exhibit__heading-subtitle">
            <span>bending elements</span>
          </p>
        </div>

        <div class="exhibit__thumbnail">
          <img src="@/assets/images/exhibit/t11.webp" alt="" />
          <img src="@/assets/images/exhibit/t12.webp" alt="" />
          <img src="@/assets/images/exhibit/t13.webp" alt="" />
          <img src="@/assets/images/exhibit/t14.webp" alt="" />
          <img src="@/assets/images/exhibit/t15.webp" alt="" />
        </div>

        <div class="exhibit__highlight">
          <figure>
            <img src="@/assets/images/exhibit/h-3.webp" />
          </figure>
        </div>
      </div>
      <!-- Exhibit 04 -->
      <div class="exhibit__container">
        <div class="exhibit__heading">
          <h2 class="exhibit__heading-title">Stories</h2>
          <p class="exhibit__heading-terms">
            <span>Portrait |&nbsp;</span>
            <span>Landscape &nbsp;</span>
          </p>
          <p class="exhibit__heading-subtitle">
            <span>redefining styles</span>
          </p>
        </div>

        <div class="exhibit__thumbnail">
          <img src="@/assets/images/exhibit/t16.webp" alt="" />
          <img src="@/assets/images/exhibit/t17.webp" alt="" />
          <img src="@/assets/images/exhibit/t18.webp" alt="" />
          <img src="@/assets/images/exhibit/t19.webp" alt="" />
          <img src="@/assets/images/exhibit/t20.webp" alt="" />
        </div>

        <div class="exhibit__highlight">
          <figure>
            <img src="@/assets/images/exhibit/h-4.webp" />
          </figure>
        </div>
      </div>

      <!-- Exhibit Ending -->
      <div class="exhibit__ending">
        <div class="exhibit__ending-title">
          <h1>Informative</h1>
        </div>
        <div class="exhibit__ending-title">
          <h1>Captivating</h1>
        </div>
        <div class="exhibit__ending-title">
          <h1>Timely</h1>
        </div>
        <div class="exhibit__ending-title">
          <h1>Authentic</h1>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup>
  import { gsap } from 'gsap';
  import { ScrollTrigger } from 'gsap/ScrollTrigger';
  import Lenis from 'lenis';
  import { onMounted } from 'vue';

  gsap.registerPlugin(ScrollTrigger);

  onMounted(() => {
    const settings = {
      trigger: document.querySelector('.exhibit'),
      containers: document.querySelectorAll('.exhibit__container'),
      lerp: 0.05
    };

    const exhibitEnding = document.querySelectorAll('.exhibit__ending-title > h1');

    const tlMain = gsap.timeline({
      scrollTrigger: {
        trigger: settings.trigger,
        start: 'top top',
        end: '+=8000 bottom',
        scrub: 1,
        pin: true
      }
    });

    const init = () => {
      initLenis();
      animateHighlight();
    };

    const initLenis = () => {
      const lenis = new Lenis({
        lerp: settings.lerp,
        smoothWheel: true
      });

      lenis.on('scroll', ScrollTrigger.update);

      gsap.ticker.add((time) => lenis.raf(time * 1000));
      gsap.ticker.lagSmoothing(0);
    };

    const animateHighlight = () => {
      gsap.set(exhibitEnding, { yPercent: 100 });

      settings.containers.forEach((element) => {
        const thumbnails = element.querySelectorAll('.exhibit__thumbnail'),
          highlights = element.querySelectorAll('.exhibit__highlight');

        const heading = {
          title: element.querySelectorAll('.exhibit__heading-title'),
          terms: element.querySelectorAll('.exhibit__heading-terms > span'),
          subtitle: element.querySelectorAll('.exhibit__heading-subtitle > span')
        };

        gsap.set(thumbnails, { yPercent: 100 });
        gsap.set(highlights, { clipPath: 'inset(0 0 0 0)' });
        gsap.set([heading.title, heading.terms, heading.subtitle], { yPercent: 0 });

        tlMain
          .to(thumbnails, {
            duration: 2,
            yPercent: -150
          })
          .to(
            highlights,
            {
              duration: 2,
              scale: 1.2
            },
            '<-0.5'
          )
          .to(
            highlights,
            {
              clipPath: 'inset(0 0 100% 0)'
            },
            '>-0.2'
          )
          .to([heading.title, heading.terms, heading.subtitle], { yPercent: -150 }, '>-0.7');
      });
      tlMain.to(exhibitEnding, {
        yPercent: 0
      });
    };

    init();
  });
</script>

<style lang="scss" scoped>
  @import '@/assets/main.scss';
  @import '@/assets/vendors/lenis.scss';

  h1 {
    font-size: $font-size-base-2;
    font-family: $font-poppins;

    @include respond-to(sm) {
      font-size: $font-size-base-1;
    }
  }

  h2 {
    font-family: $font-poppins;
  }

  span {
    display: inline-block;
    line-height: 1.3;
  }

  // HEADING
  .intro {
    position: relative;
    height: 100vh;
    margin: 0 4rem;
    display: flex;
    text-transform: uppercase;
    flex-direction: column;
    justify-content: center;
    align-items: start;

    @include respond-to(sm) {
      margin-top: 15rem;
    }

    &__title {
      &:nth-child(1) {
        margin-left: 30rem;

        @include respond-to(td) {
          margin-left: 25rem;
        }
        @include respond-to(sm) {
          margin-left: 0;
        }
      }
      &:nth-child(2) {
        margin-left: 25rem;
        @include respond-to(td) {
          margin-left: 20rem;
        }

        @include respond-to(sm) {
          margin-left: 0;
        }
      }
      &:nth-child(3) {
        margin-left: 20rem;

        @include respond-to(td) {
          margin-left: 15rem;
        }

        @include respond-to(sm) {
          margin-left: 0;
        }
      }
      &:nth-child(4) {
        margin-left: 15rem;

        @include respond-to(td) {
          margin-left: 10rem;
        }

        @include respond-to(sm) {
          margin-left: 0;
        }
      }
      &:nth-child(5) {
        margin-left: 10rem;

        @include respond-to(td) {
          margin-left: 5rem;
        }

        @include respond-to(sm) {
          margin-left: 0;
        }
      }
    }
  }
  // EXHIBIT
  .exhibit {
    position: relative;
    width: 100%;
    height: 100vh;
    overflow: hidden;

    &__container {
      width: 100%;
      height: inherit;
      position: absolute;
      left: 0;
      top: 0;
      z-index: 20;

      &:nth-child(1) {
        z-index: 4;
      }
      &:nth-child(2) {
        z-index: 3;
      }
      &:nth-child(3) {
        z-index: 2;
      }
      &:nth-child(4) {
        z-index: 1;
      }

      &:nth-child(4) {
        .exhibit__heading-title,
        .exhibit__heading-terms,
        .exhibit__heading-subtitle {
          mix-blend-mode: difference;
          color: white;
        }
      }
    }

    &__heading {
      position: absolute;
      left: 2rem;
      top: 4rem;
      z-index: 10;
      overflow: hidden;

      @include respond-to(sm) {
        left: 1rem;
      }
    }

    &__heading-title,
    &__heading-terms,
    &__heading-subtitle {
      overflow: hidden;
      margin-bottom: 0.1rem;
    }

    &__heading-title {
      font-size: $font-size-large;
      overflow: hidden;
      text-transform: uppercase;
      color: $color-primary !important;

      @include respond-to(tsm) {
        font-size: $font-size-base-2;
      }
      @include respond-to(sm) {
        font-size: $font-size-base-1;
      }
    }

    &__heading-terms {
      margin-top: -2rem;
      font-size: $font-size-base;

      span {
        color: white !important;
      }

      @include respond-to(tsm) {
        margin-top: -2rem;
        font-size: $font-size-small;
      }
      @include respond-to(sm) {
        margin-top: -1.5rem;
        font-size: $font-size-smaller;
      }
    }

    &__heading-subtitle {
      margin-top: -1.3rem;
      font-size: $font-size-base-1;
      font-family: $font-oxygen;

      span {
        color: $color-secondary !important;
      }

      @include respond-to(tsm) {
        margin-top: -1rem;
        font-size: $font-size-base;
      }

      @include respond-to(sm) {
        margin-top: -0.8rem;
        font-size: $font-size-small;
      }
    }

    &__heading-terms,
    &__heading-subtitle {
      overflow: hidden;
      text-transform: lowercase;
    }

    // EXHIBIT BG
    &__highlight {
      position: absolute;
      width: 100%;
      height: 100vh;

      figure {
        position: relative;
        width: inherit;
        height: inherit;
        overflow: hidden;
      }

      img {
        position: absolute;
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }

    // EXHIBIT THUMBNAILS

    &__thumbnail {
      position: absolute;
      top: 0;
      right: 4rem;
      display: flex;
      flex-direction: column;
      gap: 2rem;
      z-index: 10;

      @include respond-to(sm) {
        right: 1rem;
      }

      img {
        position: relative;
        width: 20rem;
        height: 20rem;
        object-fit: cover;
      }
    }

    // EXHIBIT ENDING

    &__ending {
      position: relative;
      width: 100%;
      height: 100vh;
      text-transform: uppercase;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      @include respond-to(sm) {
        margin-top: -5rem;
      }
    }

    &__ending-title {
      overflow: hidden;
    }
  }
</style>
