<template>
  <div class="featured-product">
    <div class="featured-product__picture overflow-hidden w-full h-64">
      <img :src="product.image" :alt="product.title" />
    </div>

    <div class="featured-product__info flex justify-between py-3">
      <router-link :to="featuredProductRoute" class="featured-product__info_name text-normal text-left w-3/5">{{ product.title.slice(0, 21) }}</router-link>
      <div class="featured-product__info_price text-normal font-bold">$ {{ product.price }}</div>
    </div>

    <div class="featured-product__call_to_action">
      <button class="text-white bg-normal font-light py-2 px-6" @click="addToCart">Add to Cart</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'featured-product',
  props: {
    product: Object,
  },
  computed: {
    featuredProductRoute() {
      return {
        name: 'featured-product',
        params: {
          productId: this.product.id,
        }
      }
    },
  },
  methods: {
    addToCart() {
      this.$store.commit('addItemToCart');
    },
  },
}
</script>