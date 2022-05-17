<template>
  <section class="featured-products mb-6 p-6">
    <h1 class="text-normal text-3xl font-bold pb-9">Featured Products</h1>

    <div class="featured-products-grid-container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-6">
      <FeaturedProduct v-for="product in featuredProducts" :key="product.id" :product="product" />
    </div>

    <div class="view-all">
      <router-link :to="featuredProductsRoute" class="text-normal text-xl font-bold">
        <font-awesome-icon :icon="['fas', 'arrow-right']" class="text-weak text-3xl mr-2" />
        <br />
        <span>View All</span>
      </router-link>
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
    featuredProducts() {
      return this.$store.getters.products.slice(0, 4);
    },
  },
}
</script>