import '@/assets/main.scss';
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import Particles from '@tsparticles/vue3';
import { loadFull } from 'tsparticles';
import { MotionPlugin } from '@vueuse/motion';
import { createPinia } from 'pinia';

const app = createApp(App);
const pinia = createPinia();

app.use(Particles, {
  init: async (engine) => {
    await loadFull(engine);
  }
});
app.use(pinia);
app.use(MotionPlugin);
app.use(router);
app.mount('#app'); //#app from index.html
