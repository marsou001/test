<template>
  <div class="nav-tree text-normal text-xs text-left mb-1">
    Home > Category Name > Product Name
  </div>

  <div class="product flex flex-col md:flex-row md:justify-start md:items-center">
    <div class="pictures md:w-1/2 mb-6">
      <div class="main-picture bg-weak w-full h-56 mb-6"></div>
      <div class="other-pictures grid grid-cols-4 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div class="picture bg-weak h-16 sm:h-32"></div>
        <div class="picture bg-weak h-16 sm:h-32"></div>
        <div class="picture bg-weak h-16 sm:h-32"></div>
        <div class="picture bg-weak h-16 sm:h-32"></div>
      </div>
    </div>

    <div class="information p-6">
      <div class="head">
        <h1 class="text-normal text-5xl font-bold">Product title</h1>
        <h3 class="text-normal">Lorem ipsum dolor sit subtitle</h3>
      </div>

      <hr class="mt-1 mb-6" />

      <div class="main-wrapper md:flex">
        <div class="description text-normal text-left md:w-96 mb-6 md:mr-3">
          <p class="mb-3">Perfect for frozen yogurt and other uses.Designed to hold both hot and cold items.</p>
          <p>Packaged in 1000 cups per case.</p>
          <p>Standard Double PE coating</p>

          <div class="custom-print-info bg-weak text-center w-72 my-6 p-3">
            <h3 class="font-bold mb-3">Custom Print Service Available</h3>
            <button class="text-white bg-strong my-2 py-1 px-2">Learn More</button>
          </div>
          
          <p>
            This yogurt cup / food container is biodegradable and part of our 
            to environmental friendly disposable takeout products.
          </p>
        </div>

        <div class="add-to-cart text-normal font-bold md:ml-3">
          <div class="price flex justify-between mb-2">
            <span>Price:</span>
            <span>$ 199.99</span>
          </div>

          <div class="quantity flex justify-between mb-2">
            <span>Quantity:</span>
            <input type="number" name="quantity" id="quantity" class="border-2 w-1/2" />
          </div>

          <div class="color flex justify-between mb-4">
            <span>Color:</span>
            <select name="color" id="color" class="border-2">
              <option value="White">White</option>
              <option value="Black">Black</option>
              <option value="Orange">Orange</option>
              <option value="Green">Green</option>
              <option value="Red">Red</option>
              <option value="Blue">Blue</option>
            </select>
          </div>

          <button class="text-white bg-normal text-2xl font-bold block mb-2 py-2 px-3 rounded-lg">Add to Cart</button>

          <span class="font-medium text-left block">Share this</span>
        </div>
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