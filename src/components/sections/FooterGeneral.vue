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
    margin-top: 7rem;
  }
</style>
