import shop from '../../api/shop'
import want from '../../api/wantList'

// initial state
const state = {
  items: [],
}

// getters
const getters = {}

// actions
const actions = {
  getAllWantProducts({ commit }) {
    want.getWantProducts(wantProducts => {
      commit('setWantProducts', wantProducts)
    })
  },
  addProductToWantList({ state, commit }, product) {
    const itemInWantList = state.items.find(item => item.id === product.id)
    if (!itemInWantList) {
      commit('pushProductToWantList', { product: product })
    }
  }
}

// mutations
const mutations = {
  setWantProducts(state, wantProducts) {
    state.items = wantProducts
  },
  pushProductToWantList(state, { product }) {
    state.items.push({
      id: product.id,
      title: product.title,
      price: product.price
    })
  },
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}