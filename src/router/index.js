import AboutPage from '@/pages/AboutPage.vue';
import HomePage from '@/pages/HomePage.vue';
import PhotoExhibitPage from '@/pages/PhotoExhibitPage.vue';
import ProjectsPage from '@/pages/ProjectsPage.vue';
import ResumePage from '@/pages/ResumePage.vue';
import { createWebHistory, createRouter } from 'vue-router';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: HomePage,
      meta: { title: 'Julius Ian - Full Stack Developer' }
    },
    {
      path: '/about',
      component: AboutPage,
      name: 'about',
      meta: { title: 'About Me | Julius Ian' }
    },
    {
      path: '/projects',
      component: ProjectsPage,
      name: 'projects',
      meta: { title: 'Projects | Julius Ian' }
    },
    {
      path: '/photo-exhibit',
      component: PhotoExhibitPage,
      name: 'photo-exhibit',
      meta: { title: 'Photo Exhibit | Julius Ian' }
    },
    {
      path: '/resume',
      component: ResumePage,
      name: 'resume',
      meta: { title: 'Resume | Julius Ian' }
    }
  ]
});

router.beforeEach((to, from, next) => {
  document.title = to.meta.title || 'Julius Ian - Full Stack Developer';
  next();
});

export default router;

// scrollBehavior(to, from, savedPosition) {
//   if (savedPosition) {
//     return savedPosition;
//   } else if (to.name === 'home') {
//     return { x: 0, y: 0 }; // No smooth scroll for homepage
//   } else {
//     return { x: 0, y: 0, behavior: 'smooth' }; // Smooth scroll for other pages
//   }
// }
