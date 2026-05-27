<template>
  <section class="footer" id="footer">
    <div class="footer__socials">
      <a href="https://www.instagram.com/juls.ian/">
        <IconInstagram class="icon" />
      </a>
      <a href="https://github.com/juls-ian">
        <IconGitHub class="icon" />
      </a>
      <a href="https://www.linkedin.com/in/julius-ian-valdez">
        <IconLinkedin class="icon" />
      </a>
      <a href="https://gitlab.com/juls-ian">
        <IconGitlab class="icon" />
      </a>
      <a href="https://music.apple.com/profile/juls_iann">
        <IconAppleMusic class="icon" />
      </a>

      <a href="https://www.facebook.com/juliusianvaldez">
        <IconFacebook class="icon" />
      </a>
      <a href="">
        <IconTwitter class="icon" />
      </a>
    </div>
  </section>
</template>

<script setup>
  import IconAppleMusic from '@/components/icons/IconAppleMusic.vue';
  import IconFacebook from '@/components/icons/IconFacebook.vue';
  import IconGitlab from '@/components/icons/IconGitlab.vue';
  import IconInstagram from '@/components/icons/IconInstagram.vue';
  import IconTwitter from '@/components/icons/IconTwitter.vue';
  import IconGitHub from '../icons/IconGitHub.vue';
  import IconLinkedin from '../icons/IconLinkedin.vue';
</script>

<style lang="scss" scoped>
  @import '@/assets/main.scss';

  .footer {
    display: flex;
    align-items: center;
    justify-content: center;
    // padding: 2rem 7rem;
  }
</style>
