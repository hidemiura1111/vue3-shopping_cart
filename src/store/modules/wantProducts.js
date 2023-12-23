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
  }
}

// mutations
const mutations = {
  setWantProducts(state, wantProducts) {
    state.items = wantProducts
  },
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}