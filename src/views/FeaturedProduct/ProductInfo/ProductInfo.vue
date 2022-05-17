<template>
  <div class="product flex flex-col mlg:flex-row mlg:justify-start mlg:items-center p-6">
    <Pictures />
    <Information />
  </div> 
</template>

<script>
import Pictures from './Pictures/Pictures';
import Information from './Information/Information';

export default {
  name: 'product-info',
  components: { 
    Pictures,
    Information,
  },
}
</script>