<template>
  <form class="text-left">
    <h3 class="text-strong font-bold mb-3">FOLLOW US</h3>

    <label for="email" class="text-normal">GET OUR NEWSLETTER</label>
    <input type="email" name="email" id="email" class="block my-3 border-2 border-normal" />

    <button type="submit" class="text-white bg-normal font-bold px-6 py-1">SIGN UP</button>

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