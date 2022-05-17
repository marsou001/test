<template>
  <div class="description text-normal text-left md:w-96 mb-6 md:mr-3">
    <p class="mb-3">{{ product.description }}</p>

    <div class="custom-print-info bg-weak text-center w-72 my-6 p-3">
      <h3 class="font-bold mb-3">Custom Print Service Available</h3>
      <button class="text-white bg-strong my-2 py-1 px-2">Learn More</button>
    </div>
  </div> 
</template>

<script>
export default {
  name: 'description',
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