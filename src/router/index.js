import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import brandofficial from '@/components/web-construction/brandofficial'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index,
      children: [
        {
          path: '/brandofficial',
          name: 'brandofficial',
          component: brandofficial
        }
      ]
    }
  ]
})
