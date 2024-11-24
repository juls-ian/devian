<template>
  <main class="content">
    <section class="heading">
      <h1 class="heading__title">Capturing</h1>
      <h1 class="heading__title">Fleeting Moments</h1>
      <h1 class="heading__title">of Everyday Life</h1>
      <h1 class="heading__title">Weaving Timeless Stories with</h1>
      <h1 class="heading__title">Lens and Narrative</h1>
    </section>

    <section class="exhibit">
      <!-- Exhibit 01 -->
      <div class="exhibit__container">
        <div class="exhibit__heading">
          <h2 class="exhibit__heading-title">Raw</h2>
          <div class="exhibit__heading-terms">
            <span>Shutter |&nbsp;</span>
            <span>Aperture |&nbsp;</span>
            <span>ISO &nbsp;</span>
          </div>
          <div class="exhibit__heading-subtitle">
            <span>core components</span>
          </div>
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
          <div class="exhibit__heading-terms">
            <span>Rule of thirds | &nbsp;</span>
            <span>Depth of field |&nbsp;</span>
            <span>Composition |&nbsp;</span>
            <span>Exposure</span>
          </div>
          <div class="exhibit__heading-subtitle">
            <span>refining techniques</span>
          </div>
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
          <div class="exhibit__heading-terms">
            <span>Perspective |&nbsp;</span>
            <span>Symmetry |&nbsp;</span>
            <span>Contrast |&nbsp;</span>
            <span>Framing &nbsp;</span>
          </div>
          <div class="exhibit__heading-subtitle">
            <span>applying elements</span>
          </div>
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
          <div class="exhibit__heading-terms">
            <span>Portrait |&nbsp;</span>
            <span>Landscape &nbsp;</span>
          </div>
          <div class="exhibit__heading-subtitle">
            <span>in style</span>
          </div>
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
  }

  h2 {
    font-size: $font-size-large;
    font-family: $font-poppins;
  }

  span {
    font-size: $font-size-base-1;
    font-family: $font-poppins;
    display: inline-block;
    line-height: 1.3;
    color: white;
  }
</style>
