<template>
  <div class="links text-strong font-bold bg-weak">
    {{ cartItems }} items
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