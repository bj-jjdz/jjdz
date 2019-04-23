import Vue from 'vue'
export default (function () {
  Vue.filter('status', function (value) {
    if (value == 1) {
      return '启用'
    } else if (value == 0) {
      return '禁用'
    } else {
      return '未知状态'
    }
  })
  Vue.filter('rules', function (value) {
    return value
  })
  Vue.filter('fileLink', function (value) {
    const link = window.imgUrl + value
    return link
  })
  Vue.filter('toolType', function (value) {
    let type = ''
    if (value == 1) {
      type = '系统工具'
    } else if (value == 2) {
      type = '说明知道'
    }
    return type
  })
  Vue.filter('numToString', function (value) {
    const string = value.toString()
    return string
  })
  Vue.filter('projectState', function (value) {
    let string = ''
    switch (value) {
      case '1':
        string = '售前项目'
        break
      case '2':
        string = '服务中项目'
        break
      case '3':
        string = '已结束项目'
        break
    }
    return string
  })
  Vue.filter('time', function (value) {
    let day = moment.unix(value)
    let date = moment(day).format('YYYY/MM/DD H:mm')
    return date
  })
  Vue.filter('date', function (value) {
    let day = moment.unix(value)
    let date = moment(day).format('YYYY/MM/DD')
    return date
  })
  Vue.filter('abstract', function (value) {
    let abstract = ''
    if (value.length > 70) {
      abstract = value.substr(0, 70) + '...'
    } else {
      abstract = value
    }
    return abstract
  })
  Vue.filter('posStatus', function (value) {
    let status = ''
    switch (value) {
      case 1:
        status = '在职'
        break
      case 2:
        status = '待入职'
        break
      case 3:
        status = '离职'
        break
    }
    return status
  })
  Vue.filter('template', function (value) {
    let template = ''
    if (value == '') {
      template = '上传'
    } else {
      template = '上传更新'
    }
    return template
  })
  Vue.filter('img_state', function (value) {
    let state = ''
    if (value == 1) {
      state = '通过审核'
    } else if (value == 2) {
      state = '未通过审核'
    } else if (value == 3) {
      state = '审核中'
    } else {
      state = ''
    }
    return state
  })
  Vue.filter('getImageIcon', function (value, small) {
    let img = _g.getImageUrl(value, 'http://ourydcimage.ourydc.cn', small)
    return img + '@!100w_100h'
  })
  Vue.filter('getImage', function (value, small) {
    return _g.getImageUrl(value, 'http://ourydcimage.ourydc.cn', small)
    // let reg = /^20[0-9]{12,}\.[a-zA-Z]{3,}/
    // let rs = ''
    // let host = 'http://ourydcimage.ourydc.cn'
    // let sub_year = value.substr(0, 4)
    // let sub_month = value.substr(4, 2)
    // let sub_date = value.substr(6, 2)
    // value = value.replace(/^\/*|\/*$/g, '')
    // if (reg.test(value)) {
    //   rs = host + '/' + sub_year + '/' + sub_month + '/' + sub_date + '/' + value
    // } else {
    //   rs = host + '/' + value
    // }
    // return rs
  })
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
  Vue.filter('is_pushFilter', function (value) {
    let status
    if (value == 1) {
      status = '是'
    } else {
      status = '否'
    }
    return status
  })
  Vue.filter('singStatus', function (value) {
    let status
    if (value == 1) {
      status = '开启'
    } else {
      status = '结束'
    }
    return status
  })
  Vue.filter('redpacker', function (value) {
    let status = ''
    if (value == 1) {
      status = '宝宝'
      return status
    } else if (value == 2) {
      status = '聊天室'
      return status
    } else {
      status = '宝宝技能'
      return status
    }
  })
  Vue.filter('freezeType', (value) => {
    let status = ''
    if (value == 1) {
      status = '现金收入'
      return status
    } else if (value == 2) {
      status = '现金充值'
      return status
    } else if (value == 3) {
      status = '钻石收入'
      return status
    } else {
      status = '钻石充值'
      return status
    }
  })
  Vue.filter('freezeStatus', (value) => {
    let status = ''
    if (value == 1) {
      status = '冻结'
      return status
    } else {
      status = '已解冻'
      return status
    }
  })
  Vue.filter('serviceFiter', function (value) {
    let status = ''
    if (value == 1) {
      status = '领取后自动关注'
      return status
    } else {
      status = '先关注后领取'
      return status
    }
  })
  Vue.filter('sendStatusFilter', function (value) {
    let status = ''
    if (value == 1) {
      status = '已过期'
      return status
    } else {
      status = '生效中'
      return status
    }
  })
  Vue.filter('aliType', function (value) {
    let status = ''
    if (value == 'ali_img') {
      status = '阿里图片接口检验'
      return status
    }
  })
  Vue.filter('aliTaskId', function (value) {
    let status = ''
    if (value == 3) {
      status = '阿里鉴黄识别'
      return status
    }
  })
  Vue.filter('aliLabel', function (value) {
    let status = ''
    if (value == 2) {
      status = '正常'
      return status
    }
  })
  Vue.filter('aliReview', function (value) {
    let status = ''
    if (value == 1) {
      status = '需要人工审核'
    } else if (value == 0) {
      status = '不需要人工审核'
    } else {
      status = '违规，可以直接删除或者做限制处理'
    }
    return status
  })
  Vue.filter('typeStatus', function (value) {
    let status = ''
    if (value == 0) {
      status = '新添加'
    } else if (value == 1) {
      status = '上线'
    } else {
      status = '下线'
    }
    return status
  })
  Vue.filter('anonymous', function (value) {
    if (value == 1) {
      return '匿名'
    } else {
      return '不匿名'
    }
  })
  Vue.filter('commentStatus', function (value) {
    if (value == 1) {
      return '正常'
    } else {
      return '已删除'
    }
  })
  Vue.filter('fieldFilter', function (value) {
    let status = ''
    if (value == 1) {
      status = '下午场'
    } else if (value == 2) {
      status = '晚上场'
    } else {
      status = '下线'
    }
    return status
  })
  Vue.filter('commentLabel', function (value) {
    let text = ''
    if (value == 0) {
      text = '正常'
    } else if (value == 1) {
      text = '含垃圾信息'
    } else if (value == 2) {
      text = '广告'
    } else if (value == 3) {
      text = '涉政'
    } else if (value == 4) {
      text = '暴恐'
    } else if (value == 5) {
      text = '辱骂'
    } else if (value == 6) {
      text = '色情'
    } else if (value == 7) {
      text = '灌水'
    } else if (value == 8) {
      text = '违禁'
    } else if (value == 9) {
      text = '无意义'
    } else {
      text = ''
    }
    return text
  })
  Vue.filter('statusFilter', function (value) {
    let status = ''
    if (value == 1) {
      status = '审核成功'
    } else if (value == 4) {
      status = '审核失败'
    } else {
      status = '审核中'
    }
    return status
  })
  Vue.filter('sayHelloType', function (value) {
    let status = ''
    if (value == 1) {
      status = '文字搭讪'
    } else if (value == 2) {
      status = '语音搭讪'
    } else if (value == 3) {
      status = '图片搭讪'
    } else {
      status = '视频搭讪'
    }
    return status
  })
  Vue.filter('dynamicStateFilter', function (value) {
    let status = ''
    if (value == 1) {
      status = '审核通过'
    } else if (value == 2) {
      status = '审核不通过'
    } else {
      status = '审核中'
    }
    return status
  })
  Vue.filter('userSex', function (value) {
    let status = ''
    if (value == '1') {
      status = '男'
    } else if (value == '2') {
      status = '女'
    } else {
      status = '未知'
    }
    return status
  })
  Vue.filter('identityStatus', function (value) {
    let status = ''
    if (value == '1') {
      status = '审核中'
    } else if (value == '2') {
      status = '已通过'
    }
    return status
  })
  Vue.filter('roomState', function (value) {
    let state = ''
    if (value == '1') {
      state = '开启'
    } else {
      state = '关闭'
    }
    return state
  })
  Vue.filter('machineAuditStatusFilter', function (value) {
    let state = ''
    if (value == 0) {
      state = '未机审'
    } else if (value == 1) {
      state = '正常'
    } else if (value == 2) {
      state = '疑似'
    } else if (value == 3) {
      state = '违规'
    }
    return state
  })
})()
