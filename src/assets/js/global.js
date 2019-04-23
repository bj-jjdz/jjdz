const commonFn = {
  j2s(obj) {
    return JSON.stringify(obj)
  },
  shallowRefresh(name) {
    router.replace({ path: '/refresh', query: { name: name }})
  },
  closeGlobalLoading() {
    setTimeout(() => {
      store.dispatch('showLoading', false)
    }, 0)
  },
  openGlobalLoading() {
    setTimeout(() => {
      store.dispatch('showLoading', true)
    }, 0)
  },
  cloneJson(obj) {
    return JSON.parse(JSON.stringify(obj))
  },
  toastMsg(type, msg) {
    switch (type) {
      case 'normal':
        bus.$message(msg)
        break
      case 'success':
        bus.$message({
          message: msg,
          type: 'success'
        })
        break
      case 'warning':
        bus.$message({
          message: msg,
          type: 'warning'
        })
        break
      case 'error':
        bus.$message.error(msg)
        break
    }
  },
  clearVuex(cate) {
    store.dispatch(cate, [])
  },
  getHasRule(val) {
    const moduleRule = 'admin'
    let userInfo = Lockr.get('userInfo')
    if (userInfo.id == 1) {
      return true
    } else {
      let authList = moduleRule + Lockr.get('authList')
      return _.includes(authList, val)
    }
  },
  debugPrefix(url) {
    let index = url.indexOf('?')
    if (process.env.NODE_ENV == 'development') {
      if (index > 0) {
        url = url + '&XDEBUG_SESSION_START=PHPSTORM'
      } else {
        url = url + '?XDEBUG_SESSION_START=PHPSTORM'
      }
    }
    console.log(process.env.NODE_ENV)
    return url
  },
  isURL (str_url) {
    var strRegex = '^((https|http)?://)' +
        '+(([0-9a-zA-Z_!~*\'().&=+$%-]+: )?[0-9a-zA-Z_!~*\'().&=+$%-]+@)?' +  // ftp的user@
        '(([0-9]{1,3}.){3}[0-9]{1,3}' + // IP形式的URL- 199.194.52.184
        '|' + // 允许IP和DOMAIN（域名）
        '([0-9a-zA-Z_!~*\'()-]+.)*' + // 域名- www.
        '([0-9a-zA-Z][0-9A-Za-z-]{0,61})?[0-9a-zA-Z].' + // 二级域名
        '[a-zA-Z]{2,6})' + // first level domain- .com or .museum
        '(:[0-9]{1,4})?' + // 端口- :80
        '((/?)|' + // a slash isn't required if there is no file name
        '(/[0-9A-Za-z_!~*\'().;?:@&=+$,%#-}{]+)+/?)$'
    var re = new RegExp(strRegex)
    if (re.test(str_url)) {
      return (true)
    } else {
      return (false)
    }
  },
  proxyUrl (api, isNew) {
    if (isNew) {
      return api
    } else {
      api = api.replace(/^\/*|\/*$/g, '')
      return '/admin/java/api/' + api
    }
  },
  getImageUrl(value, host, small) {
    if (!value) {
      return ''
    }
    let reg = /^20[0-9]{12,}\.[a-zA-Z0-9]{3,}/
    let rs = ''
    if (typeof host == 'undefined') {
      host = 'http://ourydcimage.ourydc.cn'
    }
    let sub_year = value.substr(0, 4)
    let sub_month = value.substr(4, 2)
    let sub_date = value.substr(6, 2)
    value = value.replace(/^\/*|\/*$/g, '')
    if (reg.test(value)) {
      rs = host + '/' + sub_year + '/' + sub_month + '/' + sub_date + '/' + value
    } else {
      rs = host + '/' + value
    }
    if (typeof small !== 'undefined') {
      rs = rs + '@!100w_100h'
    }
    return rs
  }
}

export default commonFn
