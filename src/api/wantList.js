/**
 * Mocking client-server processing
 */
const _wantProducts = [
  { 'id': 5, 'title': 'Google Pixel 9', 'price': 800.99 },
  { 'id': 6, 'title': 'UNIQLO Ultra Lite Down', 'price': 50.99 },
  { 'id': 7, 'title': 'Street Fighter VI', 'price': 99.99 },
  { 'id': 8, 'title': 'Car', 'price': 399000 }
]

export default {
  getWantProducts(cb) {
    setTimeout(() => cb(_wantProducts), 3000)
  },

  // buyProducts(products, cb, errorCb) {
  //   setTimeout(() => {
  //     // simulate random checkout failure.
  //     (Math.random() > 0.5 || navigator.webdriver)
  //       ? cb()
  //       : errorCb()
  //   }, 100)
  // }
}