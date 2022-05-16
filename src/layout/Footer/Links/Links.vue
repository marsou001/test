<template>
  <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-6">
    <Logo />
    <Shop />
    <Info /> 
    <Newsletter />
    <Payment />
  </div> 
</template>

<script>
import Logo from './Logo/Logo';
import Shop from './Shop/Shop';
import Info from './Info/Info';
import Newsletter from './Newsletter/Newsletter';
import Payment from './Payment/Payment';

export default {
  name: 'links',
  components: {
    Logo,
    Shop,
    Info,
    Newsletter,
    Payment,
  }
}
</script>