<template>
  <div id="app">
    <!-- 头 -->
    <el-row style="background-color:#e0e0e0">
      <el-col :span="2" style="background-color:#e0e0e0">
        <div class="line"></div>
          <img src="./assets/img/logo.png" alt="" style="height:55px;width:140px;background-color:#e0e0e0">
      </el-col>
      <el-col :span="20">
        <el-menu
          :default-active="activeIndex2"
          class="el-menu-demo"
          mode="horizontal"
          @select="handleSelect"
          background-color="#e0e0e0"
          text-color="#000"
          active-text-color="#008cd4"
          active-background-color="#e0e0e0"
        >
          <el-menu-item index="1">首页</el-menu-item>
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
            <el-menu-item index="3-1">制造业</el-menu-item>
            <el-menu-item index="3-2">服务业</el-menu-item>
            <el-menu-item index="3-3">餐饮业</el-menu-item>
            <el-menu-item index="3-4">装饰业</el-menu-item>
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
            <el-menu-item index="5-1">企业概况</el-menu-item>
            <el-menu-item index="5-2">新闻中心</el-menu-item>
          </el-submenu>
          <el-menu-item index="6">联系我们</el-menu-item>
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
            版权所有 © 1999-2019 中企动力科技股份有限公司 Copyright © 1999-2018 300.cn All Rights Reserved京公网安备11030102010293号京ICP证010249-2
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
</style>
