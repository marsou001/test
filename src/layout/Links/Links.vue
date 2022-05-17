<template>
  <div class="links text-normal bg-weak">
    items {{ cartItems }}
  </div>
</template>

<script>
export default {
  name: 'links',
  computed: {
    cartItems() {
      return this.$store.getters.cartItems;
    },
  },
}
</script>