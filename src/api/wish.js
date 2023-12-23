/**
 * Mocking client-server processing
 */
const _wishes = [
  { 'id': 1, 'title': 'Google Pixel 9', 'price': 800.99, 'inventory': 1 },
  { 'id': 2, 'title': 'UNIQLO Ultra Lite Down', 'price': 50.99, 'inventory': 10 },
  { 'id': 3, 'title': 'Street Fighter VI', 'price': 99.99, 'inventory': 5 },
  { 'id': 4, 'title': 'Car', 'price': 399000, 'inventory': 1 }
]

// export default {
//   getProducts(cb) {
//     setTimeout(() => cb(_products), 1000)
//   },

//   buyProducts(products, cb, errorCb) {
//     setTimeout(() => {
//       // simulate random checkout failure.
//       (Math.random() > 0.5 || navigator.webdriver)
//         ? cb()
//         : errorCb()
//     }, 100)
//   }
// }