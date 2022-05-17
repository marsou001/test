<template>
  <div class="pictures mlg:w-1/2 mb-6">
    <div class="main-picture overflow-hidden w-full h-72 mb-6">
      <img :src="product.image" :alt="product.title" />
    </div>
    <div class="other-pictures grid grid-cols-4 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      <div class="picture bg-weak h-16 sm:h-32"></div>
      <div class="picture bg-weak h-16 sm:h-32"></div>
      <div class="picture bg-weak h-16 sm:h-32"></div>
      <div class="picture bg-weak h-16 sm:h-32"></div>
    </div>
  </div> 
</template>

<script>
export default {
  name: 'pictures',
  computed: {
    productId() {
      return this.$route.params.productId;
    },
    products() {
      return this.$store.getters.products;
    },
    product() {
      const res = this.products.find(product => product.id === Number(this.productId));
      console.log(res)
      return res;
    },
  },
}
</script>