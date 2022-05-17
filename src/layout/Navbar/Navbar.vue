<template>
  <header class="mb-3">
    <div class="search text-right">
      <input type="search" name="search" id="search" class="hidden md:inline-block md:mb-2 border-2 border-blue-400" />
    </div>
    <div class="header-nav flex justify-between">
      <div class="logo">
        <!-- logo -->
      </div>
      <div class="hamburger-menu md:hidden" @click="toggleShowDropdownMenu">
        <font-awesome-icon :icon="['fas', 'bars']" />
      </div>
      <nav class="hidden md:block">
        <ul class="text-normal">
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
    <ul class="text-normal">
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