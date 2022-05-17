import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'landing',
    component: () => 
      import('@/views/Landing/Landing'),
  },
  {
    path: '/featured-products',
    name: 'featured-products',
    component: () => 
      import('@/views/FeaturedProducts/FeaturedProducts'),
  }
]

const router = createRouter({
  mode: 'history',
  history: createWebHistory(),
  routes,
})

export default router;