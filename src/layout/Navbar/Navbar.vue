<template>
  <header>
    <div class="search text-right">
      <input type="search" name="search" id="search" class="border-2 border-blue-400" />
    </div>
    <div class="header-nav flex justify-between">
      <div class="logo">
        <!-- <font-awesome-icon icon="fa-solid fa-bars" /> -->
        logo
      </div>
      <div class="hamburger-menu md:hidden" @click="toggleShowDropdownMenu">
        hamburger
      </div>
      <nav class="hidden md:block">
        <ul class="text-blue-400">
          <li class="inline mx-3">HOME</li>
          <li class="inline mx-3">CUPS</li>
          <li class="inline mx-3">SPOONS</li>
          <li class="inline mx-3">LIDS</li>
          <li class="inline mx-3">ACCESSORIES</li>
          <li class="inline mx-3">MARKETING</li>
        </ul>
      </nav>
    </div>
  </header>

  <nav v-if="showDropdownMenu" class="md:hidden">
    <div class="search">
      <input type="search" name="search" id="search" />
    </div>
    <ul class="text-blue-400">
      <li>HOME</li>
      <li>CUPS</li>
      <li>SPOONS</li>
      <li>LIDS</li>
      <li>ACCESSORIES</li>
      <li>MARKETING</li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'navbar',
  data() {
    return {
      showDropdownMenu: true,
    }
  },
  methods: {
    toggleShowDropdownMenu() {
      this.showDropdownMenu = !this.showDropdownMenu;
    }
  }
}
</script>