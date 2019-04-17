<template>
  <div>
    <!-- 导航 -->
    <el-row style="background-color:#e0e0e0">
      <el-col :span="2" style="background-color:#e0e0e0">
        <div class="line"></div>
          <img src="../assets/img/logo.png" alt="" style="height:55px;width:140px;background-color:#e0e0e0">
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
                <el-menu-item index="2-1-1"><router-link :to="{path: '/toBrandofficial'}">品牌管网建设</router-link></el-menu-item>
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
    <!-- 轮播图 -->
    <template>
      <el-carousel :interval="5000" arrow="never" indicator-position="outside">
        <el-carousel-item v-for="item in banner" :key="item">
          <img :src="item.idView" alt="">
        </el-carousel-item>
      </el-carousel>
    </template>
  </div>
</template>

<script>
// import { constants } from 'fs'
export default {
  data () {
    return {
      activeIndex: '1',
      activeIndex2: '1',
      banner: [
        {id: 0, idView: require('../assets/img/banner1.jpg')}
      ],
      toBrandofficial: '/brandofficial'
    }
  },
  methods: {
    handleSelect (key, keyPath) {
      console.log(key, keyPath)
      console.log(this, '这是啥')
    }
  }
}
</script>

<style>
* {
  margin: 0px;
  padding: 0px;
  background-color: #e9e9e9;
}

</style>
