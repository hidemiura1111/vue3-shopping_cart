<template>
  <ul>
    <li
      v-for="product in products"
      :key="product.id">
      {{ product.title }} - {{ currency(product.price, '€', 3) }}
      <br>
      <button
        :disabled="!product.inventory"
        @click="addProductToCart(product)">
        Add to cart
      </button>
      <button
        :disabled="existsInWantList(product)"
        @click="addProductToWantList(product)">
        Add to WantList
      </button>
    </li>
  </ul>
</template>

<script>
import { computed } from 'vue'
import { useStore } from 'vuex'
import { currency } from '../currency'

export default {
  setup () {
    const store = useStore()

    const products = computed(() => store.state.products.all)

    const existsInWantList = (product) => store.getters['wantProducts/existsInWantList'](product)

    const addProductToCart = (product) => store.dispatch('cart/addProductToCart', product)

    const addProductToWantList = (product) => store.dispatch('wantProducts/addProductToWantList', product)

    store.dispatch('products/getAllProducts')

    return {
      products,
      existsInWantList,
      addProductToCart,
      addProductToWantList,
      currency
    }
  }
  // computed: mapState({
  //   products: state => state.products.all
  // }),
  // methods: mapActions('cart', [
  //   'addProductToCart'
  // ]),
  // created () {
  //   this.$store.dispatch('products/getAllProducts')
  // }
}
</script>