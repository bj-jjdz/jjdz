import Vue from 'vue'
export default{
  install (Vue, options) {
    Vue.prototype.httpUrlRSS = 'http://192.168.1.197/'
    Vue.prototype.httpUrlWMK = 'http://192.168.1.184/'
    Vue.prototype.httpUrlSS = 'http://192.168.1.197/'
    Vue.prototype.httpUrlMK = 'http://192.168.1.184/'
  }
}

// 获取当前时间加载
Vue.filter('formatDate', function (value) {
  let date
  if (value.length !== 10) {
    date = new Date(parseInt(value))
  } else {
    date = new Date(parseInt(value * 1000))
  }
  let Y = date.getFullYear() + '-'
  let M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-'
  let D = (date.getDate() < 10 ? '0' + (date.getDate()) : date.getDate()) + ' '
  let h = (date.getHours() < 10 ? '0' + date.getHours() : date.getHours()) + ':'
  let m = (date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()) + ':'
  let s = (date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds())
  return Y + M + D + h + m + s
})
// 时间格式存在空时
Vue.filter('formatDateNull', function (value) {
  let date
  if (value) {
    if (value.length !== 10) {
      date = new Date(parseInt(value))
    } else {
      date = new Date(parseInt(value * 1000))
    }
    let Y = date.getFullYear() + '-'
    let M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-'
    let D = (date.getDate() < 10 ? '0' + (date.getDate()) : date.getDate()) + ' '
    let h = (date.getHours() < 10 ? '0' + date.getHours() : date.getHours()) + ':'
    let m = (date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()) + ':'
    let s = (date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds())
    return Y + M + D + h + m + s
  } else {
    return '——'
  }
})
