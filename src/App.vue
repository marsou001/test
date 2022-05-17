<template>
  <Links />
  <Navbar />

  <main>
    <router-view />
  </main>

  <Footer />
</template>

<script>
import Links from './layout/Links/Links.vue';
import Navbar from './layout/Navbar/Navbar.vue';
import Footer from './layout/Footer/Footer.vue';

export default {
  name: 'App',
  components: {
    Links,
    Navbar,
    Footer,
  },
  async mounted() {
    await this.fetchProducts(); 
  },
  methods: {
    async fetchProducts() {
      try {
        await this.$store.dispatch('fetchProducts');
      } catch (error) {
        console.log(error);
      }
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
