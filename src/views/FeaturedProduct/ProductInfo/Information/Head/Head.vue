<template>
  <div class="head">
    <h1 class="text-normal text-5xl font-bold">{{ product.title }}</h1>
    <h3 class="text-normal">Lorem ipsum dolor sit subtitle</h3>
  </div> 
</template>

<script>
export default {
  name: 'head',
  computed: {
    productId() {
      return this.$route.params.productId;
    },
    products() {
      return this.$store.getters.products;
    },
    product() {
      return this.products.find(product => product.id === Number(this.productId));
    },
  },
}
</script>