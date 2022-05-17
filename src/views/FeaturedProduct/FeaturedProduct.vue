<template>
  <div class="nav-tree text-normal text-xs text-left mb-1">
    Home > Category Name > Product Name
  </div>

  <ProductInfo />
  
  <hr class="mt-1 mb-6" />
  
</template>

<script>
import ProductInfo from './ProductInfo/ProductInfo.vue';

export default {
  name: 'featured-product',
  components: {
    ProductInfo,
  },
}
</script>