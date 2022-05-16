import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'landing',
    component: () => 
      import('@/views/Landing'),
  },
  {
    path: '/featured-products',
    name: 'featured-products',
    component: () => 
      import('@/views/FeaturedProducts'),
  }
]

const router = createRouter({
  mode: 'history',
  history: createWebHistory(),
  routes,
})

export default router;