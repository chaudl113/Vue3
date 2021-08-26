import { createRouter, createWebHistory } from 'vue-router';

import Home from '../views/Home.vue';
import About from '../views/About.vue';
import Contacts from '../views/Contacts.vue';
import Travel from '../views/Travel.vue';
import Netflix from '../views/Netflix.vue';

export const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    props: { msg: 'Bootstrap Modal' },
  },
  {
    path: '/about',
    name: 'About',
    component: About,
    meta: { layout: 'MainLayout' },
  },
  {
    path: '/contacts',
    name: 'Contacts',
    component: Contacts,
    meta: { layout: 'MainLayout' },
  },
  {
    path: '/travel',
    name: 'Travel',
    component: Travel,
    meta: { layout: 'MainLayout' },
  },
  {
    path: '/netflix',
    name: 'Netflix UI',
    component: Netflix,
    meta: { layout: 'NetflixLayout' },
  },
];

const history = createWebHistory();

const router = createRouter({
  history,
  routes,
});

export default router;
