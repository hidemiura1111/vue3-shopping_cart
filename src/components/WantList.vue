<template>
  <ul>
    <li
      v-for="product in wantProducts"
      :key="product.id">
      {{ product.title }} - {{ currency(product.price, '€', 3) }}
      <br>
      <button
        @click="removeProductfromWantList(product)">
        Remove from WantList
      </button>
    </li>
  </ul>
</template>

<script>
import { computed } from 'vue'
import { useStore } from 'vuex'
import { currency } from '../currency'

export default {
  setup() {
    const store = useStore()

    const wantProducts = computed(() => store.state.wantProducts.items)

    const removeProductfromWantList = (product) => store.dispatch('wantProducts/removeProductfromWantList', product)


    store.dispatch('wantProducts/getAllWantProducts')

    return {
      wantProducts,
      removeProductfromWantList,
      currency
    }
  }
}
</script>

<style>

</style>