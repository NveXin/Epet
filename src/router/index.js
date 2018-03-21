import Vue from 'vue'
import VueRouter from 'vue-router'

import Msite from '../pages/Msite/Msite.vue'
import Classification from '../pages/Classification/Classification.vue'
import Cart from '../pages/Cart/Cart.vue'
import Myself from '../pages/Myself/Myself.vue'
import Types from '../components/Types/Types.vue'
import Brands from '../components/Brands/Brands.vue'

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
      component: Classification,
      children:[
        {
          path: '/',
          redirect: '/classification/types'
        },
        {
          path: 'types',
          component: Types
        },
        {
          path: 'brands',
          component: Brands
        },
      ]
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
