<template>
  <div class="information p-6">
    <Head />
    <hr class="mt-1 mb-6" />
    <div class="main-wrapper md:flex">
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