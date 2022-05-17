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
  },
  {
    path: '/featured-products/:productId',
    name: 'featured-product',
    component: () => 
      import('@/views/FeaturedProduct/FeaturedProduct'),
  }
]

const router = createRouter({
  mode: 'history',
  history: createWebHistory(),
  routes,
})

export default router;