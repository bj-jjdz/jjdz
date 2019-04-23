<template>
  <div id="app">
    <!-- 头 -->
    <el-row style="background-color:#31363a">
      <el-col :span="2" style="background-color:#31363a">
        <div class="line"></div>
          <img src="./assets/img/logo.png" alt="" style="height:55px;width:140px;background-color:#31363a">
      </el-col>
      <el-col :span="20">
        <el-menu
          :default-active="activeIndex2"
          class="el-menu-demo"
          mode="horizontal"
          @select="handleSelect"
          background-color="#31363a"
          text-color="#fff"
          active-text-color="#20B09F"
          active-background-color="#31363a"
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
          <el-menu-item index="6"><router-link to='/backstage'>联系我们</router-link></el-menu-item>
        </el-menu>
      </el-col>
    </el-row>
    <router-view/>
    <!-- footer -->
    <el-row class="footer">
      <!-- foot-left -->
      <el-col :span="6">
        <el-row>
          <el-col :span="4" :offset="15">
            <i class="el-icon-phone"></i>
          </el-col>
          <el-col :span="5" style="margin-top:0.6rem;text-align:left;">
            售前资讯<p>xxx-xxx-xxx</p>
          </el-col>
        </el-row>
      </el-col>
      <!-- foot-conten -->
      <el-col :span="9" :offset="2" class="foot_left_center">
        <el-row>
          <el-col :span="24" class="foot_left_center_top">
            <a href="javascript:;">
              联系我们
            </a><span>|</span>
            <a href="javascript:;">
              意见反馈
            </a><span>|</span>
            <a href="javascript:;">
              全国网点
            </a><span>|</span>
            <a href="javascript:;">
              友情链接
            </a><span>|</span>
            <a href="javascript:;">
              推荐
            </a><span>|</span>
            <a href="javascript:;">
              邮箱登陆
            </a><span>|</span>
            <a href="javascript:;">
              English
            </a>
          </el-col>
          <el-col :span="24" class="foot_left_center_bottom">
            版权所有 © 1999-2019 九江东注有限公司 Copyright © 1999-2018 xxx.cn All Rights Reserved京公网安备11030102010293号京ICP证xxxxx-x
          </el-col>
        </el-row>
      </el-col>
      <!-- foot-right -->
      <el-col :span="3">
        <el-row>
          <el-col :span="24">
            <i class="el-icon-mobile-phone"></i>&nbsp;
            <!-- <img src="./assets/img/vx.png" class="foot_right_Wx"> -->
          </el-col>
          <el-col :span="24" class="foot_right__leftText">
            <span>移动版</span>&nbsp;&nbsp;&nbsp;
            <!-- <span>微 信</span> -->
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
  methods: {
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
}
.el-menu.el-menu--horizontal{
  border:0px;
}
/* 底部 */
.footer{
  margin-top:2rem;
  padding:3rem;
  background-color:rgba(0, 0, 0, 0.8);
  color:#fff;
}
 .foot_right_Wx{
  padding:0.6rem;
  border:1px solid #fff;
  border-radius: 50%;
  font-size:12px;
}
.el-icon-mobile-phone{
  padding:1rem;
  border:1px solid #fff;
  border-radius: 50%;
  font-size:22px;
}
.el-icon-phone{
  padding:1rem;
  border:1px solid #fff;
  border-radius: 50%;
  font-size:32px;
}
.foot_left_center{
  border-left:1px solid #fff;
  border-right:1px solid #fff;
}
.foot_left_center a{
  text-decoration: none;
  color:#fff;
  transition:.5s;
}
.foot_left_center a:hover{
  color:#0ff;
}
.foot_left_center_bottom{
  font-size:12px;
  color:#c6c6c6;
  margin-top:1rem;
}
.foot_right__leftText{
  font-size:16px;
}
.el-scrollbar__wrap { overflow-x: hidden; }
a {text-decoration: none;color:#fff;}
.router-link-active {text-decoration: none;}
</style>
