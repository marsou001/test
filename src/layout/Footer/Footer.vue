<template>
  <footer class="bg-weak text-cyan-600 p-6">
    <Links />
    <Legal />
  </footer>
</template>

<script>
import Links from './Links/Links.vue';
import Legal from './Legal/Legal.vue';

export default {
  name: 'footer',
  components: {
    Links,
    Legal,
  },
}
</script>