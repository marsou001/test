<template>
  <section class="featured-products mb-6">
    <h1 class="text-normal text-3xl font-bold pb-9">Featured Products</h1>

    <div class="featured-products-grid-container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
      <FeaturedProduct v-for="i in 4" :key="i" />
    </div>

    <div class="view-all">
      <router-link :to="featuredProductsRoute" class="text-normal text-xl font-bold">View All</router-link>
    </div>
  </section>
</template>

<script>
import FeaturedProduct from '@/components/FeaturedProduct.vue';

export default {
  name: 'featured-products',
  components: { 
    FeaturedProduct,
  },
  computed: {
    featuredProductsRoute() {
      return { name: 'featured-products' };
    },
  },
}
</script>