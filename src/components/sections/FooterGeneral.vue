<template>
  <section id="footer-general">
    <main class="footer-general">
      <div class="footer-general__content">
        <div class="footer-general__main">
          <div class="footer-general__contact">
            <h1>Say hello</h1>
            <a>hello@devian.com</a>
            <a href="mailto:valdezjuliusian@gmail.com">hi@devian.com</a>
          </div>
          <div class="footer-general__pages">
            <a>About</a>
            <a>Projects</a>
            <a>Photo Exhibit</a>
            <a>Resume</a>
          </div>
        </div>
        <div class="footer-general__sub">
          <p>&copy;Julius Ian {{ currentYear }}</p>
          <div class="footer-general__socials">
            <IconInstagram class="icon" />
            <IconFacebook class="icon" />
            <IconTwitter class="icon" />
            <IconDiscord class="icon" />
            <IconYoutube class="icon" />
          </div>
        </div>
        <div class="footer-general__inspiration"></div>
      </div>
    </main>
  </section>
</template>

<script setup>
import IconDiscord from '@/components/icons/IconDiscord.vue';
import IconFacebook from '@/components/icons/IconFacebook.vue';
import IconInstagram from '@/components/icons/IconInstagram.vue';
import IconTwitter from '@/components/icons/IconTwitter.vue';
import IconYoutube from '@/components/icons/IconYoutube.vue';

const date = new Date();
const currentYear = date.getFullYear();
</script>

<style lang="scss" scoped>
@import '@/assets/main.scss';

.footer-general {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5rem 7rem;
  background: $color-gray-darkest;
  height: fit-content;
  margin-top: 10rem;

  @include respond-to(sm) {
    padding: 5rem 3rem;
  }

  &__content {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
    height: auto;
    padding: 0 0 0 4rem;

    @include respond-to(sm) {
      padding: 0 0 0 0;
    }
  }

  &__main {
    display: flex;
    flex-direction: row;
    justify-content: start;
    align-items: start;
    width: 100%;
    height: 100%;
    gap: 0 15rem;
    border-bottom: 1px solid $color-primary;
    padding-bottom: 9rem;

    @include respond-to(sm) {
      gap: 0 6rem;
      padding-bottom: 4rem;
    }

    a {
      display: block;
      text-decoration: none;
      color: $color-primary;
      font-family: $font-poppins;
      font-size: $font-size-small;
      font-weight: 400;
      cursor: pointer;
      line-height: 3rem;
      cursor: pointer;

      @include respond-to(sm) {
        font-size: $font-size-smaller;
      }
    }
  }

  &__contact {
    flex-wrap: wrap;

    h1 {
      font-size: $font-size-small;
      font-family: $font-poppins;
      font-weight: 400;
      text-transform: uppercase;
      letter-spacing: 0.4rem;
      color: $color-secondary;
    }
  }

  &__pages {
    @include respond-to(sm) {
      margin-top: 2rem;
    }
  }

  &__sub {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding-top: 4rem;
    flex-direction: row;

    @include respond-to(sm) {
      padding-top: 2rem;
    }

    p {
      font-size: $font-size-small;
      font-family: $font-poppins;
      color: $color-secondary;
      font-weight: 400;
    }
  }

  &__socials {
    .icon {
      margin-right: 2rem;
      color: $color-primary;
      cursor: pointer;
      @include respond-to(sm) {
        margin-right: 0.5rem;
      }
    }
  }

  .footer-general__inspiration {
    font-size: $font-size-smallest;
    font-family: $font-poppins;
    color: $color-secondary;
    font-weight: 300;

    @include respond-to(sm) {
      font-weight: 200;
    }
  }
}
</style>
