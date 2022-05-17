<template>
  <section class="suggested-products">
    <h2 class="text-normal text-3xl font-bold text-left mb-6">You may also be interested in:</h2>

    <div class="featured-products-grid-container grid grid-cols-1 sm:grid-cols-2 mlg:grid-cols-4 gap-6 mb-6">
      <FeaturedProduct v-for="product in featuredProducts" :key="product.name" :product="product" />
    </div>

  </section>
</template>

<script>
import FeaturedProduct from '@/components/FeaturedProduct.vue';

export default {
  name: 'suggested-product',
  data() {
    return {
      featuredProducts: [],
    }
  },
  components: { 
    FeaturedProduct,
  },
  mounted() {
    this.fetchFeaturedProducts();
  },
  methods: {
    fetchFeaturedProducts() {
      const product = {
        pictureURL: '',
        name: 'Vestibulum tincidunt tellus a metus hendrer',
        price: 199.29,
      }

      for (let i = 0; i < 4; i++) {
        this.featuredProducts.push(product);
      }
    }
  }
}
</script>