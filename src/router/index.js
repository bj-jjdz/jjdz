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
import proAllnetShow from '@/components/offcial/pro/pro-allnet/pro-allnet-show'
import proAllnetResponse from '@/components/offcial/pro/pro-allnet/pro-allnet-response'
import proAllnetBrand from '@/components/offcial/pro/pro-allnet/pro-allnet-brand'
import PackageOffer from '@/components/offcial/pro/PackageOffer'
import GroupsShow from '@/components/offcial/Groups/Groups-allnet/Groups-show'
import seoZation from '@/components/offcial/seo/seoZation'
import app from '@/components/offcial/app/app'
import aboutUs from '@/components/offcial/AboutUs/AboutUs'
import contactUs from '@/components/offcial/ContactUs/ContactUs'
import Journalism from '@/components/offcial/Journalism/Journalism'
import Restaurant from '@/components/offcial/Restaurant/Restaurant'
import newsdetail from '@/components/offcial/Journalism/Newsdetail'
import RestaurantSolution from '@/components/offcial/RestaurantSolution/RestaurantSolution'
import OnlineRetailers from '@/components/offcial/OnlineRetailers/OnlineRetailers'
import backstageDetailCase from '@/components/backstage/Backstage-detailCase'
import agreement from '@/components/offcial/login/agreement'
import proAllnetWechat from '@/components/offcial/pro/pro-allnet/pro-allnet-wechat'
import proAllnetEcommerce from '@/components/offcial/pro/pro-allnet/pro-allnet-Ecommerce'
import caseFood from '@/components/offcial/pro/case/case-food'
import caseSale from '@/components/offcial/pro/case/case-sale'
import caseElectr from '@/components/offcial/pro/case/case-electr'
import caseDecoration from '@/components/offcial/pro/case/case-decoration'
import caseInstrument from '@/components/offcial/pro/case/case-instrument'
import caseHotel from '@/components/offcial/pro/case/case-hotel'
import caseEducation from '@/components/offcial/pro/case/case-education'
import caseMechanics from '@/components/offcial/pro/case/case-mechanics'
import caseDetail from '@/components/offcial/pro/case/caseDetail/caseDetail'
import solutionCase from '@/components/offcial/pro/RestaurantSolution/solutionCase'
import solutionCaseEducation from '@/components/offcial/pro/RestaurantSolution/solutionCaseEducation'

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
    },
    {
      path: '/PackageOffer',
      name: 'PackageOffer',
      component: PackageOffer
    },
    {
      path: '/proAllnetShow',
      name: 'proAllnetShow',
      component: proAllnetShow
    },
    {
      path: '/proAllnetResponse',
      name: 'proAllnetResponse',
      component: proAllnetResponse
    },
    {
      path: '/proAllnetBrand',
      name: 'proAllnetBrand',
      component: proAllnetBrand
    },
    {
      path: '/GroupsShow',
      name: 'GroupsShow',
      component: GroupsShow
    },
    {
      path: '/seoZation',
      name: ' seoZation',
      component: seoZation
    },
    {
      path: '/app',
      name: ' app',
      component: app
    },
    {
      path: '/aboutUs',
      name: ' aboutUs',
      component: aboutUs
    },
    {
      path: '/contactUs',
      name: ' contactUs',
      component: contactUs
    },
    {
      path: '/Journalism',
      name: ' Journalism',
      component: Journalism
    },
    {
      path: '/Restaurant',
      name: ' Restaurant',
      component: Restaurant
    },
    {
      path: '/newsdetail',
      name: ' newsdetail',
      component: newsdetail
    },
    {
      path: '/RestaurantSolution',
      name: ' RestaurantSolution',
      component: RestaurantSolution
    },
    {
      path: '/OnlineRetailers',
      name: ' OnlineRetailers',
      component: OnlineRetailers
    },
    {
      path: '/caseFood',
      name: 'caseFood',
      component: caseFood
    },
    {
      path: '/caseSale',
      name: 'caseSale',
      component: caseSale
    },
    {
      path: '/caseElectr',
      name: 'caseElectr',
      component: caseElectr
    },
    {
      path: '/caseDecoration',
      name: 'caseDecoration',
      component: caseDecoration
    },
    {
      path: '/caseInstrument',
      name: 'caseInstrument',
      component: caseInstrument
    },
    {
      path: '/caseHotel',
      name: 'caseHotel',
      component: caseHotel
    },
    {
      path: '/caseEducation',
      name: 'caseEducation',
      component: caseEducation
    },
    {
      path: '/caseMechanics',
      name: 'caseMechanics',
      component: caseMechanics
    },
    {
      path: '/caseDetail',
      name: 'caseDetail',
      component: caseDetail
    },
    {
      path: '/solutionCase',
      name: 'solutionCase',
      component: solutionCase
    },
    {
      path: '/solutionCaseEducation',
      name: 'solutionCaseEducation',
      component: solutionCaseEducation
    },
    {
      path: '/backstage/backstageDetailCase',
      name: 'backstageDetailCase',
      component: backstageDetailCase
    },
    {
      path: '/agreement',
      name: 'agreement',
      component: agreement
    },
    {
      path: '/proAllnetEcommerce',
      name: 'proAllnetEcommerce',
      component: proAllnetEcommerce
    },
    {
      path: '/proAllnetWechat',
      name: 'proAllnetWechat',
      component: proAllnetWechat
    }
  ]
})
