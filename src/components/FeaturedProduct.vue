<template>
  <div class="featured-product">
    <div class="featured-product__picture bg-weak w-full h-64"></div>

    <div class="featured-product__info flex justify-between py-3">
      <div class="featured-product__info_name text-normal text-left w-3/5">Vestibulum tincidunt tellus a metus hendrer</div>
      <div class="featured-product__info_price text-normal font-bold">$ 199.29</div>
    </div>

    <div class="featured-product__call_to_action">
      <button class="text-white bg-normal font-light py-2 px-6">Add to Cart</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'featured-product',
}
</script>