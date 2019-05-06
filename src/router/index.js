import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import backstage from '@/components/backstage'
import backstageBanner from '@/components/backstage/Backstage-banner'
import backstageComplaint from '@/components/backstage/Backstage-complaint'
import backstageNews from '@/components/backstage/Backstage-news'
import backstageOpinion from '@/components/backstage/Backstage-opinion'
import backstageCase from '@/components/backstage/Backstage-case'
import backstageTest from '@/components/backstage/test'
import loginUp from '@/components/login/loginUp'
import signUp from '@/components/login/signUp'
// import test from '@/components/backstage/test'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/backstage',
      name: 'backstage',
      component: backstage,
      redirect: '/backstage/backstageBanner',
      children: [
        {
          path: '/backstage/backstageBanner',
          name: 'backstageBanner',
          component: backstageBanner
        },
        {
          path: '/backstage/backstageComplaint',
          name: 'backstageComplaint',
          component: backstageComplaint
        },
        {
          path: '/backstage/backstageNews',
          name: 'backstageNews',
          component: backstageNews
        },
        {
          path: '/backstage/backstageOpinion',
          name: 'backstageOpinion',
          component: backstageOpinion
        },
        {
          path: '/backstage/backstageCase',
          name: 'backstageCase',
          component: backstageCase
        },
        {
          path: '/backstage/test',
          name: 'backstageTest',
          component: backstageTest
        }
      ]
    },
    {
      path: '/loginUp',
      name: 'loginUp',
      component: loginUp
    },
    {
      path: '/signUp',
      name: 'signUp',
      component: signUp
    }
  ]
})
