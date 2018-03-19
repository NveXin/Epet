import Vue from 'vue'
import VueRouter from 'vue-router'

import Msite from '../pages/Msite/Msite.vue'
import Classification from '../pages/Classification/Classification.vue'
import Cart from '../pages/Cart/Cart.vue'
import Myself from '../pages/Myself/Myself.vue'

Vue.use(VueRouter)

//向外暴露 vue-router 对象
export default new VueRouter({
  routes:[
    {
      path: '/',
      redirect: '/msite'
    },
    {
      path: '/msite',
      component: Msite
    },
    {
      path: '/classification',
      component: Classification
    },
    {
      path: '/cart',
      component: Cart
    },
    {
      path: '/myself',
      component: Myself
    },
  ]
})
