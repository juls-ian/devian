<template>
  <section class="footer" id="footer">
    <div class="footer__content">
      <div class="footer__main">
        <div class="footer__contact">
          <h1>Swing by</h1>
          <a href="mailto:valdezjuliusian@gmail.com">devian@pro.mail</a>
          <a href="mailto:devian.scriptx@gmail.com">devian@dev.mail</a>
          <a href="https://telegram.me/julsiann">swing@telegram.devian</a>
          <a href="viber://chat/chat?number=+6393023637">swing@viber.devian</a>
        </div>

        <div class="footer__pages">
          <RouterLink to="about">About</RouterLink>
          <RouterLink to="projects">Projects</RouterLink>
          <RouterLink to="photo-exhibit">Photo Exhibit</RouterLink>
          <RouterLink to="resume">Resume</RouterLink>
        </div>
      </div>
      <div class="footer__sub">
        <p>&copy;Julius Ian {{ currentYear }}</p>
        <div class="footer__socials">
          <a href="https://www.instagram.com/juls.ian/">
            <IconInstagram class="icon" />
          </a>
          <a href="https://www.facebook.com/juliusianvaldez">
            <IconFacebook class="icon" />
          </a>
          <a href="">
            <IconTwitter class="icon" />
          </a>
          <a href="https://gitlab.com/juls-ian">
            <IconGitlab class="icon" />
          </a>
          <a href="">
            <IconYoutube class="icon" />
          </a>
          <a href="https://music.apple.com/profile/juls_iann">
            <IconAppleMusic class="icon" />
          </a>
        </div>
      </div>
      <div class="footer__inspiration"></div>
    </div>
  </section>
</template>

<script setup>
import IconAppleMusic from '@/components/icons/IconAppleMusic.vue';
import IconFacebook from '@/components/icons/IconFacebook.vue';
import IconGitlab from '@/components/icons/IconGitlab.vue';
import IconInstagram from '@/components/icons/IconInstagram.vue';
import IconTwitter from '@/components/icons/IconTwitter.vue';
import IconYoutube from '@/components/icons/IconYoutube.vue';

const date = new Date();
const currentYear = date.getFullYear();
</script>

<style lang="scss" scoped>
@import '@/assets/main.scss';

.footer {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 7rem;
  background: $color-gray-darkest;
  height: fit-content;
  position: relative;
  margin-top: 7rem;

  @include respond-to(lg) {
    height: 100%;
    padding: 1rem 2rem;
  }
  @include respond-to(sm) {
    height: 100%;
    padding: 5rem 2rem;
  }

  &__content {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
    padding: 7rem 0 10rem 4rem;

    @include respond-to(sm) {
      padding: 1rem 0 1rem 1rem;
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
      flex-direction: column;
      padding-bottom: 3rem;
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
      flex-direction: column;
    }

    p {
      font-size: $font-size-small;
      font-family: $font-poppins;
      color: $color-secondary;
      font-weight: 400;

      @include respond-to(sm) {
        font-size: $font-size-smaller;
      }
    }
  }

  &__socials {
    .icon {
      margin-right: 2rem;
      color: $color-primary;
      cursor: pointer;
      @include respond-to(sm) {
        margin-top: 1rem;
        margin-right: 0.5rem;
      }
    }

    a {
      text-decoration: none;
      color: inherit;
    }
  }

  &__inspiration {
    font-size: $font-size-smallest;
    font-family: $font-poppins;
    color: $color-secondary;
    font-weight: 300;
  }

  &__button {
    position: absolute;
    bottom: 5rem;
    right: 6rem;

    @include respond-to(sm) {
      bottom: 1rem;
      right: 2rem;
    }
  }
}
</style>
