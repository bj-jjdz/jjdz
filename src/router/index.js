import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import casefood from '@/components/web-case/case-food'
import catering from '@/components/web-catering/catering'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/casefood',
      name: 'casefood',
      component: casefood
    },
    {
      path: '/catering',
      name: 'catering',
      component: catering
    }
  ]
})
