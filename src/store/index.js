import { createStore, createLogger } from 'vuex'
import cart from './modules/cart'
import products from './modules/products'
import wantProducts from './modules/wantProducts'

const debug = process.env.NODE_ENV !== 'production'

export default createStore({
  modules: {
    cart,
    products,
    wantProducts
  },
  strict: debug,
  plugins: debug ? [createLogger()] : []
})