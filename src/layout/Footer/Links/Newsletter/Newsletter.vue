<template>
  <form class="text-left">
    <h3 class="text-cyan-800 font-bold mb-6">FOLLOW US</h3>

    <label for="email">GET OUR NEWSLETTER</label>
    <input type="email" name="email" id="email" class="block my-3 border-2 border-cyan-600" />

    <button type="submit" class="text-white bg-cyan-600 font-bold px-6 py-1">SIGN UP</button>

    <div class="social-links">
      <div class="facebook">facebook</div>
      <div class="tumblr">tumblr</div>
      <div class="linkedin">linkedIn</div>
    </div>
  </form> 
</template>

<script>
export default {
  name: 'newsletter',
}
</script>