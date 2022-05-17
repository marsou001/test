<template>
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
</template>

<script>
export default {
  name: 'add-to-cart',
}
</script>