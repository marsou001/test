<template>
  <div class="nav-tree text-normal text-xs text-left mb-1">
    Home > Category Name > Product Name
  </div>

  <div class="product">
    <div class="pictures">
      <div class="main-picture bg-weak w-full h-56 mb-6"></div>
      <div class="other-pictures grid grid-cols-4 gap-6">
        <div class="picture bg-weak h-16 sm:h-32"></div>
        <div class="picture bg-weak h-16 sm:h-32"></div>
        <div class="picture bg-weak h-16 sm:h-32"></div>
        <div class="picture bg-weak h-16 sm:h-32"></div>
      </div>
    </div>

    <div class="information">
      <div class="head">
        <h1 class="text-normal text-5xl font-bold">Product title</h1>
        <h3 class="text-normal">Lorem ipsum dolor sit subtitle</h3>
      </div>
    </div>
  </div>
  
  <hr class="mt-1 mb-6" />
  
</template>

<script>
export default {
  name: 'featured-product',
}
</script>