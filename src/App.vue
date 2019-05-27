<template>
  <div  style="'transform': transformScale,'width': width;height:100%;" id="app">
    <!-- 头 -->
    <el-row class="title_nav" type="flex" align="middle">
      <el-col :span="2" :offset="2">
        <img src="./assets/img/logo.png" class="logo">
      </el-col>
      <el-col :span="13" :offset="1">
        <el-menu
          :default-active="activeIndex2"
          class="el-menu-demo"
          mode="horizontal"
          @select="handleSelect"
          background-color="#333333"
          text-color="#fff"
          active-text-color="#ff0000"
          active-background-color="#333"
        >
          <el-menu-item index="1"><router-link to='/'>首页</router-link></el-menu-item>
          <el-submenu index="2">
            <template slot="title">产品</template>
              <el-card class="box-card">
                <el-row>
                  <el-col :span="2" :offset="5">
                    <el-row class="textCenter">
                      <el-col :span="24" class="titleOne">网站建设</el-col>
                      <el-col :span="24" class="itemOne TextHover"><router-link to='/proAllnetShow'>响应式展示门户</router-link></el-col>
                      <el-col :span="24" class="itemOne TextHover"><router-link to='/proAllnetResponse'>全网响应式门户</router-link></el-col>
                      <el-col :span="24" class="itemOne TextHover"><router-link to="/proAllnetBrand">品牌响应式门户</router-link></el-col>
                      <el-col :span="24" class="itemOne p-r-10 TextHover"><router-link to="/GroupsShow">集团站群</router-link></el-col>
                      <el-col :span="24" class="itemOne p-r-10 TextHover"><router-link to="/proAllnetEcommerce">电商门户</router-link></el-col>
                    </el-row>
                  </el-col>
                  <el-col class="FGXfff"></el-col>
                  <el-col :span="4" class="CPnth2">
                    <el-row class="textCenter">
                      <div class="p-l-100">
                        <el-col :span="20" class="titleOne m-l-20 TextHover"><router-link to="/seoZation">SEO优化推广</router-link></el-col>
                        <el-col :span="24" class="titleOne TextHover p-10"><router-link to="/proAllnetWechat">微信小程序定制开发</router-link></el-col>
                      </div>
                    </el-row>
                  </el-col>
                  <el-col class="FGXfff"></el-col>
                  <el-col :span="4" :offset="0" class="CPnth3">
                    <el-row class="textCenter">
                      <div style="margin-left:3rem;">
                        <el-col :span="24" class="titleOne TextHover"><router-link to="/app">APP定时开发</router-link></el-col>
                        <el-col :span="24" class="titleOne TextHover">域名注册</el-col>
                      </div>
                    </el-row>
                  </el-col>
                </el-row>
              </el-card>
          </el-submenu>
          <el-submenu index="3">
            <template slot="title">行业解决方案</template>
              <el-card class="box-card h-200">
                <el-row>
                  <el-col :span="3" :offset="8" :pull="1">
                    <el-row>
                      <el-col :span="24" class="title2 TextHover2"><router-link to="/solutionCase" class="dd1">机械行业解决方案</router-link></el-col>
                      <el-col :span="24" class="title2 TextHover2"><router-link to="/OnlineRetailers" class="dd1">电商零售解决方案</router-link></el-col>
                    </el-row>
                  </el-col>
                  <el-col class="FGXfff3" :span="1"></el-col>
                  <el-col :span="4" :push="1">
                    <el-row>
                      <el-col :span="24" class="title2 TextHover2"><router-link to="/solutionCaseEducation" class="dd1">教育行业解决方案</router-link></el-col>
                      <el-col :span="24" class="title2 TextHover2"><router-link to="/RestaurantSolution" class="dd1">餐饮行业解决方案</router-link></el-col>
                    </el-row>
                  </el-col>
                </el-row>
              </el-card>
          </el-submenu>
          <el-submenu index="4">
            <template slot="title">行业案例</template>
              <el-card class="box-card h-231">
                <el-row>
                  <el-col :span="2" :offset="9" pull="1">
                    <el-row>
                      <el-col :span="24" class="title2 TextHover3"><router-link :to="{path:'/caseMechanics', query:{industry:4}}" class="dd1">机械行业</router-link></el-col>
                      <el-col :span="24" class="title2 TextHover3"><router-link :to="{path:'/caseFood', query:{industry:1}}" class="dd1">餐饮服务</router-link></el-col>
                      <el-col :span="24" class="title2 TextHover3"><router-link :to="{path:'/caseHotel', query:{industry:6}}" class="dd1">酒店民俗</router-link></el-col>
                    </el-row>
                  </el-col>
                  <el-col class="FGXfff2"></el-col>
                  <el-col :span="2" :offset="1">
                    <el-row>
                      <el-col :span="15" class="title2 TextHover3"><router-link :to="{path:'/caseSale', query:{industry:2}}" class="dd1">电商零售</router-link></el-col>
                      <el-col :span="15" class="title2 TextHover3"><router-link :to="{path:'/caseEducation', query:{industry:5}}" class="dd1">教育培训</router-link></el-col>
                      <el-col :span="15" class="title2 TextHover3"><router-link :to="{path:'/caseInstrument', query:{industry:7}}" class="dd1">仪器仪表</router-link></el-col>
                    </el-row>
                  </el-col>
                  <el-col class="FGXfff2"></el-col>
                  <el-col :span="2" :offset="1">
                    <el-row>
                      <el-col :span="24" class="title2 TextHover"><router-link :to="{path:'/caseDecoration', query:{industry:8}}" class="dd1">装饰行业</router-link></el-col>
                      <el-col :span="24" class="title2 TextHover"><router-link :to="{path:'/caseElectr', query:{industry:3}}" class="dd1">电子电工</router-link></el-col>
                    </el-row>
                  </el-col>
                </el-row>
              </el-card>
          </el-submenu>
          <el-menu-item index="5">
            <router-link to="/Journalism" class="dd1">新闻资讯</router-link>
          </el-menu-item>
          <el-menu-item index="6">
            <router-link to="/aboutUs" class="dd1">关于我们</router-link>
          </el-menu-item>
          <el-menu-item index="7">
            <router-link to='/contactUs' class="dd1">联系我们</router-link>
          </el-menu-item>
        </el-menu>
      </el-col>
      <!-- 登陆注册 -->
      <!-- <el-col :span="2" class="title_nav_zj" :offset="1">
        <div v-if='loginIds == 2' class="userName_id">
          欢迎 <a href="javascript:;">{{this.usernames}}</a> 登陆
          <el-button type="text" @click='getout'>注销</el-button>
        </div>
        <div v-else>
          <div class="login_up">
            <router-link to='/loginUp' class="login_up_img">登陆</router-link>
          </div>
          <div class="login_in">
            <router-link to="/register" class="login_in_img">注册</router-link>
          </div>
        </div>
      </el-col> -->
    </el-row>
    <router-view/>
    <!-- footer -->
    <el-row class="footer">
      <!-- foot-1-公司产品 -->
      <el-col :span="3" :offset="3">
        <el-row>
          <el-col :span="24" class="footer_title">
            公司产品
          </el-col>
          <el-col :span="24" class="footer_p-item">
            <a href="javascript:;">网站建设</a>
          </el-col>
          <el-col :span="24" class="footer_p-item">
            <router-link to="/seoZation">SEO优化推广</router-link>
          </el-col>
          <el-col :span="24" class="footer_p-item">
            <router-link to="/proAllnetWechat">微信小程序定制开发</router-link>
          </el-col>
          <el-col :span="24" class="footer_p-item">
            <router-link to="/app">App定制开发</router-link>
          </el-col>
          <el-col :span="24" class="footer_p-item">
            <a href="javascript:;">域名注册服务</a>
          </el-col>
        </el-row>
      </el-col>
      <!-- foot-2-关于我们 -->
      <el-col :span="3" :offset="1">
        <el-row>
          <el-col :span="24" class="footer_title">
            关于我们
          </el-col>
          <el-col :span="24" class="footer_p-item">
            <a href="javascript:;">了解九江东注</a>
          </el-col>
          <el-col :span="24" class="footer_p-item">
            <a href="javascript:;">客户案例</a>
          </el-col>
        </el-row>
      </el-col>
      <!-- foot-3-售后服务 -->
      <el-col :span="3" :offset="1">
        <el-row>
          <el-col :span="24" class="footer_title">
            售后服务
          </el-col>
          <el-col :span="24" class="footer_p-item">
            <a href="javascript:;">7*27小时售后服务热线</a>
          </el-col>
          <el-col :span="24" class="footer_p-item">
            <a href="javascript:;">一对一业务支持服务</a>
          </el-col>
          <el-col :span="24" class="footer_p-item">
            <a href="javascript:;">全年免修限次维修服务</a>
          </el-col>
          <el-col :span="24" class="footer_p-item">
            <a href="javascript:;">定制化至满意为止</a>
          </el-col>
        </el-row>
      </el-col>
      <!-- foot-4-友情链接 -->
      <el-col :span="3" :offset="1">
        <el-row>
          <el-col :span="24" class="footer_title">
            友情链接
          </el-col>
          <el-col :span="24" class="footer_p-item">
            <a href="javascript:;">九江东注官网</a>
          </el-col>
        </el-row>
      </el-col>
      <!-- foot-5-联系我们 -->
      <el-col :span="3" :offset="1">
        <el-row>
          <el-col :span="24" class="footer_title">
            联系我们
          </el-col>
          <el-col :span="24" class="footer_p-item">
            <a href="javascript:;">意见反馈</a>
          </el-col>
        </el-row>
      </el-col>
      <!-- 分割线 -->
      <el-col :span="24" :offset="3">
        <el-row>
          <el-col :span="18">
            <hr class="footer_hr">
          </el-col>
        </el-row>
      </el-col>
      <!-- 九江东注 -->
      <el-col :span="24" :offset="3">
        <el-row>
          <el-col :span="18" class="jiujiangdongzhu-com">
            © 2018-2019 jiujiangdongzhu.com 版权所有：
          </el-col>
        </el-row>
      </el-col>
    </el-row>
  </div>
</template>

<script>
// import qs from 'qs'
export default {
  name: 'App',
  data () {
    return {
      loginIds: '',
      usernames: '',
      activeIndex: '1',
      activeIndex2: '1'
    }
  },
  // created () {
  //   console.log(window.localStorage, 'created..window.localStorage')
  //   let that = this
  //   that.loginIds = window.localStorage.loginId
  //   that.usernames = window.localStorage.username
  //   let data = {
  //     mobile: window.localStorage.username,
  //     password: window.localStorage.password,
  //     state: window.localStorage.value
  //   }
  //   if (window.localStorage.username === '' || window.localStorage.password === '' || window.localStorage.value === '') {
  //     return
  //   }
  //   that.$axios.post(this.httpUrlWMK + 'jiujiangdongzhu/Home/Login/check_user', qs.stringify(data)).then(function (res) {
  //     if (res.data.state === '200') {
  //       that.loginIds = window.localStorage.loginId
  //       that.usernames = window.localStorage.username
  //       console.log(localStorage.loginId, 'localStorage.loginId')
  //       console.log(localStorage.username, 'localStorage.username')
  //       console.log(that.loginIds, '???????')
  //     }
  //   })
  // },
  methods: {
    autoSetScale () {
      let zoom = (window.innerHeight / 800).toFixed(3)
      this.transformScale = `scale(${zoom})`
      this.width = `${(window.innerWidth / zoom).toFixed(2)}px`
      // console.log('屏幕尺寸', this.width)
    },
    handleSelect () {},
    clickLogin () {
      this.username = this.$route.params.usernames
      this.loginIds = this.$route.params.loginIds
    },
    getout () {
      localStorage.clear()
      this.$router.go(0)
    }
  },
  mounted () {
    this.autoSetScale() // 进页面先执行一次页面高度和宽度计算然后赋值
    window.addEventListener('resize', () => {
      this.autoSetScale()
    }, false)
    let that = this
    that.loginIds = window.localStorage.loginId
    that.usernames = window.localStorage.username
  },
  updated () {
    this.clickLogin()
  }
}
</script>

<style>
*{margin:0px;padding:0px;}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  float: 0;
  margin: 0;
  height: 100%!important;
  overflow-x:hidden;
}
.el-menu.el-menu--horizontal{
  border:0px!important;
}
.el-menu--horizontal{
  width:100%;
}
.el-menu--popup-bottom-start{
  margin-top:15px;
  background-color:#000 !important;
  width:101%;
}
/* 导航条 */
.el-card{
  border:0rem!important;
  background-color:#000!important;
  border-radius: 0px!important;
  width:100%!important;
  height:25rem!important;
  color:#ffffff!important;
  font-family: PingFang-SC-Medium!important;
  font-size:.875rem!important;
}
.el-card .titleOne{
  font-size: 1.25rem;
  margin-top:2rem;
  margin-bottom: 2rem;
}
.el-card .titleTwo{
  font-size: 1.25rem;;
  margin-bottom: 2rem;
}
.el-card .itemOne{
  line-height: 2.5rem;
  font-size: .875rem;
}
.TextHover{
  border:1px solid transparent;
  border-radius: .375rem;
}
.TextHover:hover{
  border:1px solid #ffffff;
  border-radius: .375rem;
}
.TextHover2{
  border:1px solid transparent;
  border-radius: .375rem;
}
.TextHover2:hover{
  border:1px solid #ffffff;
  border-radius: .375rem;
}
.TextHover3{
  border:1px solid transparent;
  border-radius: .375rem;
}
.TextHover3:hover{
  border:1px solid #ffffff;
  border-radius: .375rem;
}
.el-card .FGXfff{
  width:1px;
  height:329px;
  background-color:#fff!important;
  margin-top:1rem;
  margin-left:8.625rem;
}
.el-card .FGXfff2{
  width:.125rem;
  height:6.8125rem;
  background-color: #ffffff;
  margin-top: 1.4%;
}
.el-card .CPnth2{
  margin-left:3rem;
  margin-right:1rem;
}
.el-card .CPnth3{
  margin-left:3rem;
}
.title_nav{
  background:#333333!important;
  width: 100%;
  height:6.375rem;
  vertical-align: bottom;
}
.textCenter{
  text-align: center;
}
.title_nav .el-submenu__title, .title_nav .el-menu-item{
  font-size: 1rem !important;
}
.title_nav .el-submenu__title:hover, .title_nav .el-menu-item:hover{
  color: #ff0000 !important;
  background: rgb(51, 51, 51) !important;
}
.title_nav .el-menu--horizontal>.el-menu-item{
  border-bottom:0px;
}
.title_nav .el-menu--horizontal>.el-submenu .el-submenu__title{
  border-bottom:0px;
}
.title_nav .el-menu--horizontal>.el-submenu.is-active .el-submenu__title{
  border-bottom: 0px;
}
.title_nav .el-menu--horizontal>.el-menu-item.is-active{
  border-bottom: 0px;
}
.title_nav_zj{
  display: inline-block;
  color:#fff!important;
}
.title_nav_zj div{
  display: inline-block;
  line-height: 6.375rem;
}
.logo{
  width:11.375rem;
  height:3.6875rem;
}
/* 登陆、注册 */
.title_nav .login_in{
  margin-left: 2.5rem;
}
.title_nav .login_up, .title_nav .login_in{
  font-size: .875rem;
  font-family: PingFang-SC-Medium;
  font-weight: normal;
  font-stretch: normal;
  letter-spacing: 0px;
  position: relative;
}
.title_nav .login_up_img:hover, .title_nav .login_in_img:hover{
  color: #ff0000;
}
.userName_id{
  font-size: 14px;
}
.userName_id>a{
  color:#ff0000;
}
/* 登陆图标 */
.title_nav .login_up_img:after{
  content: '';
  position: absolute;
  right: 2.5rem;
  top: 39%;
}
.title_nav .login_up_img::after{
  width: 22px;
  height: 22px;
  background-image: url('./assets/img/index-icon/login.png');
}
.title_nav .login_up_img:hover::after{
  background-image: url('./assets/img/index-icon/login-h.png');
}
/* 注册图标 */
.title_nav .login_in_img:after{
  content: '';
  position: absolute;
  right: 2.4rem;
  top: 39%;
}
.title_nav .login_in_img::after{
  width: 22px;
  height: 22px;
  background-image: url('./assets/img/index-icon/signUp.png');
}
.title_nav .login_in_img:hover::after{
  background-image: url('./assets/img/index-icon/signUp-h.png');
}
/* 底部 */
.footer{
    width: 100%;
    height:29.25rem;
    padding:3rem;
    background-color:rgba(0, 0, 0, 0.8);
    color:#fff;
    text-align: left;
}
.footer .footer_title{
    font-family: PingFang-SC-Medium;
    font-size: 1rem;;
    font-weight: normal;
    font-stretch: normal;
    letter-spacing: 0px;
    color: #ffffff;
    margin-bottom: 1rem;
}
.footer .footer_p-item{
    font-family: PingFang-SC-Medium;
    font-size: .75rem;
    font-weight: normal;
    font-stretch: normal;
    letter-spacing: 0px;
    color: #ececec;
    margin-top:1rem;
}
.footer .footer_p-item a:hover{
  transition: .5s;
  color:#ff0000;
}
.footer .footer_hr{
  height: .0625rem;
  background-color:#e6e6e6;
  opacity: 0.15;
  margin-top: 4rem;
  border: none;
}
.footer .jiujiangdongzhu-com{
    font-family: PingFang-SC-Medium;
    font-size: .75rem;
    font-weight: normal;
    font-stretch: normal;
    letter-spacing: 0px;
    color: #999999;
}
.title2{
  font-size: 1.25rem;
  letter-spacing: 0px;
  color:#fefefe;
  line-height: 3.5rem;
  text-align: center;
}
.el-scrollbar__wrap { overflow-x: hidden; }
a {text-decoration: none;color:#fff;}
.router-link-active {text-decoration: none;}
.p-l-30{padding-left:1.875rem;}
.p-r-10{padding-right:.625rem;}
.p-l-100{padding-left:6.25rem;}
.m-l-20{margin-left:1.25rem;}
.p-t-b-10{padding-top:10px;padding-bottom: 10px;}
.p-l-r-10{padding-left: 10px;padding-right:10px;}
.h-231{height: 14.4375rem !important;}
.h-200{height:10.5rem !important;}
.FGXfff3{
  width:.125rem !important;
  height:6.8125rem;
  background-color: #ffffff;
  margin-top: 0.5%;
}
</style>
