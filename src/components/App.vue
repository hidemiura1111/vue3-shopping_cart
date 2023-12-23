<template>
  <div id="app">
    <h1>Shopping Cart Example</h1>
    <hr>
    <div class="container">
      <h2>Products</h2>
      <ProductList/>
      <hr>
      <h2>Want List</h2>
      <WantList/>
      <hr>
    </div>
    <ShoppingCart/>
  </div>
</template>

<script>
import ProductList from './ProductList.vue'
import WantList from './WantList.vue'
import ShoppingCart from './ShoppingCart.vue'

export default {
  components: {
    ProductList,
    WantList,
    ShoppingCart
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: white;
}
.container {
}
</style>