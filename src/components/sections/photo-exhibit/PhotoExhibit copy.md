<template>
  <h1>Photo Exhibit</h1>

  <div class="box"></div>

  <main class="exhibit">
    <div class="wheel">
      <figure class="wheel-card" style="--position: 1">
        <img src="@/assets/images/exhibit/l-1.webp" alt="" />
        <div class="wheel-card-detail">
          <p>Elem Days</p>
        </div>
      </figure>

      <figure class="wheel-card" style="--position: 2">
        <img src="@/assets/images/exhibit/p-1.webp" alt="" />
        <div class="wheel-card-detail">
          <p>Mini Venice</p>
        </div>
      </figure>

      <figure class="wheel-card" style="--position: 3">
        <img src="@/assets/images/exhibit/l-2.webp" alt="" />
        <div class="wheel-card-detail">
          <p>Water Bender</p>
        </div>
      </figure>

      <figure class="wheel-card" style="--position: 4">
        <img src="@/assets/images/exhibit/p-2.webp" alt="" />
        <div class="wheel-card-detail">
          <p>Vast Sea</p>
        </div>
      </figure>

      <figure class="wheel-card" style="--position: 5">
        <img src="@/assets/images/exhibit/l-6.webp" alt="" />
        <div class="wheel-card-detail">
          <p>Food Riders</p>
        </div>
      </figure>

      <figure class="wheel-card">
        <img src="@/assets/images/exhibit/p-6.webp" alt="" />
        <div class="wheel-card-detail">
          <p>Grand Bell</p>
        </div>
      </figure>

      <figure class="wheel-card">
        <img src="@/assets/images/exhibit/l-4.webp" alt="" />
        <div class="wheel-card-detail">
          <p>Our Freedom</p>
        </div>
      </figure>

      <figure class="wheel-card">
        <img src="@/assets/images/exhibit/l-5.webp" alt="" />
        <div class="wheel-card-detail">
          <p>Filipino Street Foods</p>
        </div>
      </figure>

      <figure class="wheel-card">
        <img src="@/assets/images/exhibit/p-4.webp" alt="" />
        <div class="wheel-card-detail">
          <p>Neon Lights</p>
        </div>
      </figure>

      <figure class="wheel-card">
        <img src="@/assets/images/exhibit/l-3.webp" alt="" />
        <div class="wheel-card-detail">
          <p>Paint the Town White</p>
        </div>
      </figure>

      <figure class="wheel-card">
        <img src="@/assets/images/exhibit/l-7.webp" alt="" />
        <div class="wheel-card-detail">
          <p>X-Mas Season</p>
        </div>
      </figure>

      <figure class="wheel-card">
        <img src="@/assets/images/exhibit/p-3.webp" alt="" />
        <div class="wheel-card-detail">
          <p>My Best friend</p>
        </div>
      </figure>

      <figure class="wheel-card">
        <img src="@/assets/images/exhibit/p-5.webp" alt="" />
        <div class="wheel-card-detail">
          <p>Follow the Star</p>
        </div>
      </figure>

      <figure class="wheel-card">
        <img src="@/assets/images/exhibit/l-8.webp" alt="" />
        <div class="wheel-card-detail">
          <p>Perya</p>
        </div>
      </figure>

      <figure class="wheel-card">
        <img src="@/assets/images/exhibit/l-9.webp" alt="" />
        <div class="wheel-card-detail">
          <p>Shall We Play</p>
        </div>
      </figure>

      <figure class="wheel-card">
        <img src="@/assets/images/exhibit/l-10.webp" alt="" />
        <div class="wheel-card-detail">
          <p>Lock Love</p>
        </div>
      </figure>

      <figure class="wheel-card">
        <img src="@/assets/images/exhibit/l-11.webp" alt="" />
        <div class="wheel-card-detail">
          <p>The Sampaguitta</p>
        </div>
      </figure>

      <figure class="wheel-card">
        <img src="@/assets/images/exhibit/l-12.webp" alt="" />
        <div class="wheel-card-detail">
          <p>Young scavengers</p>
        </div>
      </figure>

      <figure class="wheel-card">
        <img src="@/assets/images/exhibit/l-13.webp" alt="" />
        <div class="wheel-card-detail">
          <p>Flawless beam</p>
        </div>
      </figure>

      <figure class="wheel-card">
        <img src="@/assets/images/exhibit/l-19.webp" alt="" />
        <div class="wheel-card-detail">
          <p>Pommelhorse future star</p>
        </div>
      </figure>

      <figure class="wheel-card">
        <img src="@/assets/images/exhibit/l-15.webp" alt="" />
        <div class="wheel-card-detail">
          <p>Morning gossip</p>
        </div>
      </figure>

      <figure class="wheel-card">
        <img src="@/assets/images/exhibit/l-16.webp" alt="" />
        <div class="wheel-card-detail">
          <p>Passing by</p>
        </div>
      </figure>

      <figure class="wheel-card">
        <img src="@/assets/images/exhibit/l-17.webp" class="grid-image grid-image--23" alt="" />
        <div class="wheel-card-detail">
          <p>Grill it</p>
        </div>
      </figure>

      <figure class="wheel-card">
        <img src="@/assets/images/exhibit/l-18.webp" alt="" />
        <div class="wheel-card-detail">
          <p>Laundrove</p>
        </div>
      </figure>

      <figure class="wheel-card">
        <img src="@/assets/images/exhibit/p-7.webp" alt="" />
        <div class="wheel-card-detail">
          <p>Merry merry</p>
        </div>
      </figure>

      <figure class="wheel-card">
        <img src="@/assets/images/exhibit/l-14.webp" class="grid-image grid-image--26" alt="" />
        <div class="wheel-card-detail">
          <p>Young star</p>
        </div>
      </figure>

      <figure class="wheel-card">
        <img src="@/assets/images/exhibit/l-20.webp" alt="" />
        <div class="wheel-card-detail">
          <p>By the thread</p>
        </div>
      </figure>
    </div>
  </main>

  <div class="scroll-down">Scroll down</div>
  <div class="scroll-down-icon">
    <p>&DownArrow;</p>
  </div>
</template>

<script setup>
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

gsap.to('.box', {
  duration: 3,
  rotation: 360,
  scale: 2
});

document.addEventListener('DOMContentLoaded', () => {
  let wheel = document.querySelector('.wheel');
  let images = gsap.utils.toArray('.wheel-card');

  function setup() {
    let radius = wheel.offsetWidth / 2;
    let center = wheel.offsetWidth / 2;
    let total = images.length;
    let slice = (2 * Math.PI) / total;

    images.forEach((item, i) => {
      let angle = i * slice;
      let x = center + radius * Math.sin(angle);
      let y = center + radius * Math.cos(angle);

      gsap.set(item, {
        rotation: angle + '-rad',
        xPercent: -50,
        yPercent: -50,
        x: x,
        y: y
      });
    });
  }

  gsap.to('.wheel', {
    rotate: () => -360,
    ease: 'none',
    duration: images.length,
    scrollTrigger: {
      start: 0,
      end: 'max',
      scrub: 1,
      snap: 1 / images.length,
      invalidateOnRefresh: true
    }
  });

  setup();
  window.addEventListener('resize', setup);
});
</script>

<style lang="scss" scoped>
@import '@/assets/main.scss';

h1 {
  text-align: center;
  text-transform: uppercase;
  font-family: $font-poppins;
  font-size: $font-size-large;
}

.box {
  width: 10rem;
  height: 10rem;
  background-color: $bootstrap-color;
}

.exhibit {
  // padding: 0;
  // margin: 0;
  // height: 600vh;
  // width: 100vw;
  height: 22vh;
  bottom: 0;
  position: fixed;
  width: 100%;

  .wheel {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100vw;
    height: 300vw;
    max-width: 2000px;
    max-height: 2000px;
  }

  .wheel-card {
    position: absolute;
    top: 0;
    left: 0;
    width: 6%;
    max-width: 200px;
    aspect-ratio: 1/1;
    cursor: pointer;

    img {
      width: 100%;
      pointer-events: none;
      z-index: 999;
      cursor: pointer;
    }
  }

  .scroll-down-icon {
    position: fixed;
    top: 4em;
    right: 2em;

    svg {
      width: 50px;
    }
  }

  .scroll-down {
    font-family: $font-poppins;
    top: 3em;
    left: 2em;
    font-weight: 400;
    font-size: $font-size-base-1;
    text-transform: uppercase;
    overflow: visible;
  }
  .wheel-card-detail {
    visibility: hidden;
  }
}
</style>
