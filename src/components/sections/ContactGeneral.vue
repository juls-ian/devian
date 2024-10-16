<template>
  <section class="contact" id="contact">
    <div class="contact__content">
      <article class="contact__header">
        <h1>We can work together!</h1>
        <p>
          Interested with my projects and want something similar for you or just need my expertise?
          Let's get to work then...
        </p>
      </article>
      <form class="contact__form" ref="form" @submit.prevent="sendEmail">
        <div class="contact__row contact__row--1">
          <div class="contact__input-group contact__input-group--name">
            <label for="name">Your name</label>
            <input
              type="text"
              class="name"
              id="name"
              name="name"
              placeholder="Enter your name"
              required
            />
          </div>

          <div class="contact__input-group contact__input-group--email">
            <label for="email">Email Address</label>
            <input
              type="email"
              class="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              required
            />
          </div>
        </div>

        <div class="contact__row contact__row--2">
          <div class="contact__input-group contact__input-group--message">
            <label for="message">Your message</label>
            <textarea
              class="message"
              id="message"
              name="message"
              placeholder="Enter your message"
              required
            ></textarea>
          </div>
        </div>

        <button class="contact__button btn-primary btn-primary--sweep-variant-1" type="submit">
          <span class="text">Shoot</span>
          <span class="icon"><IconArrowRight /></span>
        </button>
      </form>
    </div>
  </section>
</template>

<script setup>
import IconArrowRight from '@/components/icons/IconArrowRight.vue';
import emailjs from '@emailjs/browser';
import { ref } from 'vue';

const form = ref(null);
const inputFieldReset = ref(null);

const sendEmail = () => {
  emailjs
    .sendForm('service_f31iz3j', 'template_7txwbld', form.value, {
      publicKey: 're0V4n-UNVyRL5R2p'
    })
    .then(
      () => {
        alert('Email sent successfully!');
        inputFieldReset.value = '';
      },
      (error) => {
        alert('Email not sent', error.text);
      }
    );
};
</script>

<style lang="scss" scoped>
@import '@/assets/main.scss';

.contact {
  background: transparent;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 20rem;
  margin-top: 10rem;
  position: sticky;

  @include respond-to(sm) {
    flex-direction: column;
    height: 100%;
  }

  &__content {
    display: flex;
    width: 100%;
    gap: 10rem;
    padding: 4rem;
    text-align: center;
    border-top: 1px solid $color-gray;
    margin: 0 5rem;
  }

  &__header {
    margin-bottom: 3rem;

    h1 {
      font-family: $font-poppins;
      font-size: $font-size-base-2;
      font-weight: 600;
      text-align: start;
      color: $color-primary;
      line-height: 4rem;
      @include respond-to(sm) {
        font-size: $font-size-base;
      }
    }

    p {
      font-family: $font-oxygen;
      font-size: 1.3rem;
      font-weight: 300;
      text-align: start;

      @include respond-to(sm) {
        font-size: $font-size-smaller;
      }
    }
  }

  &__form {
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }

  &__row {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    text-align: start;
    gap: 5rem;

    @include respond-to(sm) {
      flex-direction: column;
    }

    &--1 {
    }

    &--2 {
    }
  }

  &__input-group {
    display: flex;
    flex-direction: column;
    width: 100%;

    &--email {
      @include respond-to(sm) {
        margin-top: -3rem;
      }
    }

    label {
      font-size: $font-size-smaller;
      color: $color-gray;
      margin-bottom: 1rem;
      transition: color 0.3s ease;
      font-family: $font-poppins;

      &:focus {
        color: $color-primary;
      }
    }

    input {
      border: none;
      font-size: $font-size-smaller;
      font-family: $font-poppins;
      background: transparent !important;
      border-bottom: 1px solid $color-gray;
      height: 3rem;
      transition: color 0.3s ease;
      margin-top: -1rem;

      &:focus {
        outline: none;
        border-bottom: 1px solid $color-secondary;
      }
    }

    textarea {
      resize: none;
      border: none;
      height: 4rem;
      font-size: $font-size-smaller;
      font-family: $font-poppins;
      background: transparent !important;
      border-bottom: 1px solid $color-gray;

      height: 3rem;

      &:focus {
        outline: none;
        border-bottom: 1px solid $color-secondary;
      }
    }
    // STYLING THE LABEL WHEN FIELDS ARE FOCUSED
    &:focus-within {
      label {
        color: $color-primary;
      }
    }
  }

  &__button {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    margin-top: 2rem;
    padding: 1rem 2rem;

    .text {
      color: $color-primary;
      text-transform: uppercase;
    }
  }
}
</style>
