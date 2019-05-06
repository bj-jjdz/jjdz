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
            <el-menu-item index="2-1">
              <el-submenu index="2-1">
                <template slot="title">网站建设</template>
                <el-menu-item index="2-1-1">品牌管网建设</el-menu-item>
                <el-menu-item index="2-1-2">集团站群建设</el-menu-item>
                <el-menu-item index="2-1-3">行业门户网站建设</el-menu-item>
                <el-menu-item index="2-1-4">社区门户网站建设</el-menu-item>
                <el-menu-item index="2-1-5">网站定制</el-menu-item>
              </el-submenu>
            </el-menu-item>
            <el-menu-item index="2-2">
              <el-submenu index="2-2">
                <template slot="title">移动端开发</template>
                <el-menu-item index="2-2-1">手机网站建设</el-menu-item>
                <el-menu-item index="2-2-2">微网站</el-menu-item>
                <el-menu-item index="2-2-3">小程序开发</el-menu-item>
                <el-menu-item index="2-2-4">App开发</el-menu-item>
              </el-submenu>
            </el-menu-item>
            <el-menu-item index="2-3">
              <el-submenu index="2-3">
                <template slot="title">电商网站开发</template>
                <el-menu-item index="2-3-1">B2B网站建设</el-menu-item>
                <el-menu-item index="2-3-2">B2C网站建设</el-menu-item>
                <el-menu-item index="2-3-3">为上策建设</el-menu-item>
              </el-submenu>
            </el-menu-item>
            <el-menu-item index="2-4">SEO优化</el-menu-item>
          </el-submenu>
          <el-submenu index="3">
            <template slot="title">案例</template>
            <div style="height:10rem;">
            <el-scrollbar style="height:100%">
              <el-menu-item index="3-1">机械行业</el-menu-item>
              <el-menu-item index="3-2">装修行业</el-menu-item>
              <el-menu-item index="3-3">培训行业</el-menu-item>
              <el-menu-item index="3-4">酒店民俗</el-menu-item>
              <el-menu-item index="3-5"><router-link to='/casefood'>食品加工</router-link></el-menu-item>
              <el-menu-item index="3-6">家具制造</el-menu-item>
              <el-menu-item index="3-7">服装鞋帽</el-menu-item>
              <el-menu-item index="3-8">电线电缆</el-menu-item>
              <el-menu-item index="3-9">化工行业</el-menu-item>
              <el-menu-item index="3-10">纺织行业</el-menu-item>
              <el-menu-item index="3-11">电子电工</el-menu-item>
              <el-menu-item index="3-12">五金配件</el-menu-item>
              <el-menu-item index="3-13">电力电器</el-menu-item>
              <el-menu-item index="3-14">IT数码</el-menu-item>
              <el-menu-item index="3-15">装饰建材</el-menu-item>
              <el-menu-item index="3-16">汽配行业</el-menu-item>
              <el-menu-item index="3-17"><router-link to='/catering'>餐饮加盟</router-link></el-menu-item>
              <el-menu-item index="3-18">家居行业</el-menu-item>
              <el-menu-item index="3-19">仪表仪器</el-menu-item>
              <el-menu-item index="3-20">新农业</el-menu-item>
            </el-scrollbar>
          </div>
          </el-submenu>
          <el-submenu index="4">
            <template slot="title">解决方案</template>
            <el-menu-item index="4-1">电商行业</el-menu-item>
            <el-menu-item index="4-2">制造业</el-menu-item>
            <el-menu-item index="4-3">餐饮业</el-menu-item>
            <el-menu-item index="4-4">装饰业</el-menu-item>
          </el-submenu>
          <el-submenu index="5">
            <template slot="title">关于我们</template>
            <el-menu-item index="5-1">
              <el-submenu index="5-1">
                <template slot="title">企业概况</template>
                <el-menu-item index="5-1-1">关于我们</el-menu-item>
                <el-menu-item index="5-1-2">企业文化</el-menu-item>
                <el-menu-item index="5-1-3">发展历程</el-menu-item>
                <el-menu-item index="5-1-4">法律隐私</el-menu-item>
              </el-submenu>
            </el-menu-item>
            <el-menu-item index="5-2">
              <el-submenu index="5-2">
                <template slot="title">新闻中心</template>
                <el-menu-item index="5-2-1">新闻公告</el-menu-item>
                <el-menu-item index="5-2-2">媒体报道</el-menu-item>
                <el-menu-item index="5-2-3">社会公益</el-menu-item>
                <el-menu-item index="5-2-4">视频中心</el-menu-item>
              </el-submenu>
            </el-menu-item>
            <el-menu-item index="5-3">
              <el-submenu index="5-3">
                <template slot="title">联系我们</template>
                <el-menu-item index="5-3-1">联系我们</el-menu-item>
                <el-menu-item index="5-3-2">全国网点</el-menu-item>
                <el-menu-item index="5-3-3">工作机会</el-menu-item>
                <el-menu-item index="5-3-4">中国数码</el-menu-item>
              </el-submenu>
            </el-menu-item>
          </el-submenu>
          <el-menu-item index="6"><router-link to='/backstage' class="dd1">联系我们</router-link></el-menu-item>
        </el-menu>
      </el-col>
      <!-- 登陆注册 -->
      <el-col :span="2" class="title_nav_zj" :offset="1">
        <div class="login_up">
          <router-link to='/loginUp' class="login_up_img">登陆</router-link>
        </div>
        <div class="login_in">
          <router-link to='/signUp' class="login_in_img">注册</router-link>
        </div>
      </el-col>
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
            <a href="javascript:;">SEO优化推广</a>
          </el-col>
          <el-col :span="24" class="footer_p-item">
            <a href="javascript:;">微信小程序定制开发</a>
          </el-col>
          <el-col :span="24" class="footer_p-item">
            <a href="javascript:;">App定制开发</a>
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
export default {
  name: 'App',
  data () {
    return {
      activeIndex: '1',
      activeIndex2: '1'
    }
  },
  mounted () {
    this.autoSetScale() // 进页面先执行一次页面高度和宽度计算然后赋值
    window.addEventListener('resize', () => {
      this.autoSetScale()
    }, false)
  },
  methods: {
    autoSetScale () {
      let zoom = (window.innerHeight / 800).toFixed(3)
      this.transformScale = `scale(${zoom})`
      this.width = `${(window.innerWidth / zoom).toFixed(2)}px`
      console.log('屏幕尺寸', this.width)
    },
    handleSelect () {}
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
  border:0px;
}
/* 导航条 */
.title_nav{
  background:#333333;
  width: 100%;
  height:6.375rem;
  vertical-align: bottom;
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
  color:#fff;
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
.el-scrollbar__wrap { overflow-x: hidden; }
a {text-decoration: none;color:#fff;}
.router-link-active {text-decoration: none;}
</style>
