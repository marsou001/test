<template>
  <div class="add-to-cart text-normal font-bold md:ml-3">
    <div class="price flex justify-between mb-2">
      <span>Price:</span>
      <span>$ {{ product.price }}</span>
    </div>

    <div class="quantity flex justify-between mb-2">
      <span>Quantity:</span>
      <input type="number" name="quantity" id="quantity" v-model="quantity" class="border-2 w-1/2" />
    </div>

    <div class="color flex justify-between mb-4">
      <span>Color:</span>
      <select name="color" id="color" class="border-2">
        <option v-for="option in colorOptions" :key="option" :value="option">{{ option }}</option>
      </select>
    </div>

    <button class="text-white bg-normal text-2xl font-bold block mb-2 py-2 px-3 rounded-lg" @click="addToCart">Add to Cart</button>

    <span class="font-medium text-left block">Share this</span>
  </div> 
</template>

<script>
export default {
  name: 'add-to-cart',
  data() {
    return {
      quantity: 0,
      colorOptions: ['Black', 'Orange', 'Green', 'Red', 'Blue'],
    }
  },
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
  methods: {
    addToCart() {
      this.$store.commit('addItemToCart', this.quantity);
    },
  },
}
</script>