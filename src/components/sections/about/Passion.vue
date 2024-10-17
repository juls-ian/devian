<template>
  <section id="passion">
    <h1>Passion</h1>
    <div class="passion__lines lines-wave-2">
      <div class="line"></div>
      <div class="line"></div>
    </div>
    <main class="passion">
      <div class="passion__wrapper">
        <div class="passion__card passion__card--frontend">
          <figure class="passion__img passion__img--frontend">
            <img src="@/assets/images/passions/frontend.jpg" alt="" />
            <strong>01</strong>
            <div class="overlay"></div>
          </figure>
          <div class="passion__description">
            <h2>Front-end Development</h2>
            <p>
              Driven by the belief that server-side features are only meaningful when paired with an
              engaging user interface, I delved into client-side development. Ever since then,
              crafting creative and user-friendly interfaces
              <span>
                has been my priority while staying in style. I primarily take advantage of
                <strong>Vue</strong>, <strong>Sass</strong>, <strong>Tailwind</strong>,
                <strong>JavaScript</strong>, and other libraries to create compelling UIs.
              </span>
            </p>
          </div>
        </div>

        <div class="passion__card passion__card--design">
          <figure class="passion__img passion__img--design">
            <img src="@/assets/images/passions/design.jpg" alt="" />
            <strong>02</strong>
            <div class="overlay"></div>
          </figure>
          <div class="passion__description">
            <h2>UI/UX Design</h2>
            <p>
              Designing effective, visually appealing, and user-friendly interfaces are essential
              components of any successful applications, thus requiring an in-depth understanding of
              visual perception and human eyes. I take
              <span>
                UI/UX designing very seriously while staying in style, blending inspirations and my
                ideas together. I utilize
                <strong>Figma</strong>, <strong>Adobe XD</strong>, and <strong>Canva</strong> when
                designing for my projects.
              </span>
            </p>
          </div>
        </div>

        <div class="passion__card passion__card--backend">
          <figure class="passion__img passion__img--backend">
            <img src="@/assets/images/passions/backend.jpg" alt="" />
            <strong>03</strong>
          </figure>
          <div class="passion__description">
            <h2>Back-end Development</h2>
            <p>
              Upon exposure to web development, its back-end aspect caught my attention and interest
              the most. I am dedicated in creating web apps especially when back-end is involved. In
              the past, I managed databases using
              <span>
                relational database within personal and collaborative projects. I rely on
                <strong>PHP</strong> using <strong>Laravel</strong> wherein I integrate
                <strong>REST</strong>, <strong>Inertia</strong> and <strong>MySQL</strong>. I also
                use Firebase and Supabase.
              </span>
            </p>
          </div>
        </div>
      </div>
    </main>
  </section>
</template>

<script setup></script>

<style lang="scss" scoped>
@import '@/assets/main.scss';

#passion {
  margin-top: 10rem;
  width: 100%;
  height: max-content;

  @include respond-to(tlg) {
    margin-top: 5rem;
  }

  @include respond-to(sm) {
    margin-top: 30rem;
  }

  h1 {
    font-size: $font-size-base-1;
    text-transform: uppercase;
    font-family: $font-poppins;
    font-weight: 550;
    letter-spacing: 0.5rem;
    color: $color-primary;

    @include respond-to(sm) {
      text-align: center;
    }
  }
}

.passion {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  position: relative;

  &__wrapper {
    display: flex;
    gap: 2rem;

    @include respond-to(tsm) {
      flex-direction: column;
    }
    @include respond-to(sm) {
      flex-direction: column;
    }
  }

  &__card {
    width: 25rem;
    height: 41rem;
    // background: #222222;
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: start;
    position: relative;
    margin-top: 2rem;
    box-shadow: 1px 5px 6px 6px rgba(59, 130, 246, 0.2);
    transition: transform 0.3s ease-in-out;

    @include respond-to(tlg) {
      width: 19rem;
      height: 35rem;
    }

    @include respond-to(tsm) {
      width: 25rem;
      height: 41rem;
    }

    @include respond-to(sm) {
      width: 20rem;
      height: 40rem;
    }

    &--design {
      background: $color-primary-darkest;
    }
    &--frontend {
      // background: rgb(23, 37, 84);
      background: $color-gray-darkest;
    }
    &--backend {
      background: $color-gray-darkest;
    }

    &:hover {
      transform: scale(1.05);
      span {
        display: inline-block;
      }
    }
  }

  &__img {
    width: 100%;
    height: 100%;
    position: relative;
    display: flex;
    justify-content: end;
    align-items: end;

    strong {
      font-size: $font-size-larger;
      display: block;
      font-family: $font-poppins;
      color: $color-white-pure;
      z-index: 1;
      top: 15rem;
      margin-right: 1rem;
      font-weight: 600;
    }

    &::after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      pointer-events: none;
    }

    &--frontend {
      &::after {
        background-color: rgba(31, 41, 55, 0.5);
      }
    }

    &--design {
      &::after {
        background-color: rgba(23, 37, 84, 0.5);
      }
    }

    &--backend {
      &::after {
        background-color: rgba(31, 41, 55, 0.5);
      }
    }
    img {
      position: absolute;
      width: 100%;
      height: 100%;
      object-fit: cover;
      overflow-clip-margin: unset;
    }
  }

  &__description {
    width: 100%;
    padding: 1.5rem 1rem;
    position: relative;

    h2 {
      font-family: $font-poppins;
      font-size: $font-size-small;
      text-transform: uppercase;
      font-weight: 550;
      color: $color-primary-light;
    }

    p {
      font-family: $font-poppins;
      font-size: $font-size-smaller;
      text-align: justify;
      color: $color-gray-lighter !important;
      font-weight: 400;
    }

    span {
      display: none;
      color: $color-gray-lighter !important;

      @include respond-to(tsm) {
        display: block;
      }

      @include respond-to(sm) {
        display: block;
      }
    }

    strong {
      color: $color-secondary;
      font-weight: 500;
    }
  }
}
</style>
