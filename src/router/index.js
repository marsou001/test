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

router.beforeEach((to, from, next) => {
  // Scroll page to top on every route change
  setTimeout(() => {
    window.scrollTo(0, 0);
  }, 100);

  next();
})

export default router;