<template>
  <ul>
    <li
      v-for="wantProduct in wantProducts"
      :key="wantProduct.id">
      {{ wantProduct.title }} - {{ currency(wantProduct.price, '€', 3) }}
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

    store.dispatch('wantProducts/getAllWantProducts')

    return {
      wantProducts,
      currency
    }
  }
}
</script>

<style>

</style>