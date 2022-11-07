import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/Summary.vue') }],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
  {
    path:'/login',
    component: () => import('pages/Login.vue')
  },
  {
    path: '/matchmaker',
    component: () => import('layouts/MatchMakerLayout.vue'),
    children: [{ path: '', component: () => import('pages/MatchMaker.vue') }]
  },
  {
    path: '/unitprice',
    component: () => import('layouts/UnitPriceLayout.vue'),
    children: [{ path: '', component: () => import('pages/UnitPrice.vue') }]
  },
  {
    path: '/levelup',
    component: () => import('layouts/LevelUpLayout.vue'),
    children: [{ path: '', component: () => import('pages/LevelUp.vue') }]
  }
];

export default routes;
