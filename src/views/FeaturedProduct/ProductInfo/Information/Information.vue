<template>
  <div class="information mlg:p-6">
    <Head />
    <hr class="mt-1 mb-6" />
    <div class="main-wrapper mlg:flex">
      <Description />
      <AddToCart />
    </div>
  </div>
</template>

<script>
import Head from './Head/Head.vue';
import Description from './Description/Description.vue';
import AddToCart from './AddToCart/AddToCart.vue';

export default {
  name: 'information',
  components: { 
    Head,
    Description,
    AddToCart,
  },
}
</script>