<template>
  <div class="product flex flex-col md:flex-row md:justify-start md:items-center">
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