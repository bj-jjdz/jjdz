// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import 'babel-polyfill'
import axios from 'axios'
import commonHttp from '@/assets/js/common.js'
import md5 from 'js-md5'
import Vuex from 'vuex'
// import store from './store/store'
// import moment from 'moment'
// import VueRouter from 'vue-router';

Vue.config.productionTip = false
Vue.prototype.$md5 = md5

Vue.use(commonHttp)
Vue.use(ElementUI)
Vue.use(Vuex)
Vue.prototype.$axios = axios

const store = new Vuex.Store({
  state: {
    // 存储token
    Authorization: sessionStorage.getItem('Authorization') ? sessionStorage.getItem('Authorization') : ''
  },
  mutations: {
    // 修改token，并将token存入localStorage
    changeLogin (state, user) {
      state.Authorization = user.Authorization
      sessionStorage.setItem('Authorization', user.Authorization)
    }
  }
})
export default store

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  // filters: filter,
  // router,
  // store,
  template: '<App/>'
})
