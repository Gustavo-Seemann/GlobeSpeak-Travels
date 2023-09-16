import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView/HomeView.vue';
import TranslatorsView from '../views/TranslatorsView/TranslatorsView.vue';
import ServicesView from '../views/ServicesView/ServicesView.vue';
import SelfCheckoutView from '../views/SelfCheckoutView/SelfCheckoutView.vue';
import AboutUsView from '../views/AboutUsView/AboutUsView.vue';


const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/translators',
    name: 'translators',
    component: TranslatorsView
  },
  {
    path: '/services',
    name: 'services',
    component: ServicesView
  },
  {
    path: '/selfcheckout',
    name: 'selfcheckout',
    component: SelfCheckoutView
  },
  {
    path: '/about-us',
    name: 'about-us',
    component: AboutUsView
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
