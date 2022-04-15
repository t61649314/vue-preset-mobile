import { createRouter, createWebHashHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/demo',
    name: 'demo',
    component: () => import('../views/demo/DemoView.vue'),
  },
  <% if (bestPractices.includes('1')) { %>{
    path: '/demo1',
    name: 'demo1',
    component: () => import('../views/demo/Demo1View.vue'),
  },<% } %>
  <% if (bestPractices.includes('2')) { %>{
    path: '/demo2',
    name: 'demo2',
    component: () => import('../views/demo/Demo2View.vue'),
  },<% } %>
  <% if (bestPractices.includes('3')) { %>{
    path: '/demo3',
    name: 'demo3',
    component: () => import('../views/demo/Demo3View.vue'),
  },<% } %>
  <% if (bestPractices.includes('4')) { %>{
    path: '/demo4',
    name: 'demo4',
    component: () => import('../views/demo/Demo4View.vue'),
  },<% } %>
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
