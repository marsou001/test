<template>
  <Category />
  
  <section class="flex flex-col md:flex-row md:justify-between">
    <aside>
      <h3 class="text-normal bg-weak py-1 px-2">FILTER NAME</h3>
      <ul>
        <li class="text-normal text-left sm:inline-block my-1 sm:mx-2 md:block">Option One</li>
        <li class="text-normal text-left sm:inline-block my-1 sm:mx-2 md:block">Option One</li>
        <li class="text-normal text-left sm:inline-block my-1 sm:mx-2 md:block">Option One</li>
        <li class="text-normal text-left sm:inline-block my-1 sm:mx-2 md:block">Option One</li>
      </ul>
    </aside>

    <div class="featured-products">
      hhhh
    </div>
  </section>
</template>

<script>
import Category from './Category/Category';

export default {
  name: 'featured-products',
  components: {
    Category,
  },
}
</script>
