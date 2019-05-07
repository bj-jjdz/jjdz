import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import backstage from '@/components/backstage'
import backstageBanner from '@/components/backstage/Backstage-banner'
import backstageComplaint from '@/components/backstage/Backstage-complaint'
import backstageNews from '@/components/backstage/Backstage-news'
import backstageOpinion from '@/components/backstage/Backstage-opinion'
import backstageCase from '@/components/backstage/Backstage-case'
import loginUp from '@/components/offcial/login/loginUp'
import register from '@/components/offcial/login/register'
import forgetPassword from '@/components/forget-password'
import stepOne from '@/components/offcial/forget-password/step-one'
import stepTwo from '@/components/offcial/forget-password/step-two'
import stepThree from '@/components/offcial/forget-password/step-three'
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
        }
      ]
    },
    {
      path: '/loginUp',
      name: 'loginUp',
      component: loginUp
    },
    {
      path: '/register',
      name: 'register',
      component: register
    },
    {
      path: '/forgetPassword',
      name: 'forgetPassword',
      component: forgetPassword,
      redirect: '/forgetPassword/stepOne',
      children: [
        {
          path: '/forgetPassword/stepOne',
          name: 'stepOne',
          component: stepOne
        },
        {
          path: '/forgetPassword/stepTwo',
          name: 'stepTwo',
          component: stepTwo
        },
        {
          path: '/forgetPassword/stepThree',
          name: 'stepThree',
          component: stepThree
        }
      ]
    }
  ]
})
