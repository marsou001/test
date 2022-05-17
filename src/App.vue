<template>
  <Navbar />

  <main>
    <router-view />
  </main>

  <Footer />
</template>

<script>
import HelloWorld from './components/HelloWorld.vue';
import Navbar from './layout/Navbar/Navbar.vue';
import Footer from './layout/Footer/Footer.vue';

export default {
  name: 'App',
  components: {
    HelloWorld,
    Navbar,
    Footer,
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
  padding: 16px;
}
</style>
