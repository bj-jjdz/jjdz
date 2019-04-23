import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import backstageBanner from '@/components/backstage/Backstage-banner'
import backstageComplaint from '@/components/backstage/Backstage-complaint'
import backstageNews from '@/components/backstage/Backstage-news'
import backstageOpinion from '@/components/backstage/Backstage-opinion'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
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
    }
  ]
})
