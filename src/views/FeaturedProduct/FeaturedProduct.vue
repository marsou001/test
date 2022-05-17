<template>
  <div class="nav-tree text-normal text-xs text-left mb-1">
    Home > Category Name > Product Name
  </div>
  <ProductInfo />
  <hr class="mb-12" />
  <SuggestedProducts />
</template>

<script>
import ProductInfo from './ProductInfo/ProductInfo.vue';
import SuggestedProducts from './SuggestedProducts/SuggestedProducts.vue';

export default {
  name: 'featured-product',
  components: {
    ProductInfo,
    SuggestedProducts,
  },
}
</script>