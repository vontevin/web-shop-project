import { createRouter, createWebHistory } from 'vue-router'
import Home from '../src/view/Home.vue'
import Cart from '../src/view/Cart.vue'
import ProductDetail from '../src/view/ProductDetail.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/cart',
    name: 'Cart',
    component: Cart
  },
  {
    path: '/product/:id',
    name: 'ProductDetail',
    component: ProductDetail,
    props: true
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router