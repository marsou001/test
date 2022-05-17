<template>
  <Hero />
  <Banners />
  <FeaturedProducts />
</template>

<script>
import Hero from './Hero/Hero.vue';
import Banners from './Banners/Banners.vue';
import FeaturedProducts from './FeaturedProducts/FeaturedProducts.vue';

export default {
  name: 'landing',
  components: {
    Hero,
    FeaturedProducts,
    Banners,
  }
}
</script>