import shop from '../../api/shop'
import want from '../../api/wantList'

// initial state
const state = {
  items: [],
}

// getters
const getters = {
  existsInWantList: (state, getters, rootState) => {
    return (product) => {
      return state.items.find(item => item.id === product.id)
    }
  }
}

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
  },
  removeProductfromWantList({ state, commit }, product) {
    const itemInWantList = state.items.find(item => item.id === product.id)
    if (itemInWantList) {
      commit('removeProductFromWantList', { product: product })
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
  removeProductFromWantList(state, { product }) {
    const index = state.items.findIndex(item => item.id === product.id)
    if (index !== -1) {
      state.items.splice(index, 1)
    }
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}