<template>
  <div class="index">
    <!-- 导航 -->

    <!-- 轮播图 -->
    <template>
      <el-carousel :interval="5000" arrow="never" indicator-position="outside">
        <el-carousel-item v-for="item in banner" :key="item">
          <img :src="item.idView" alt="">
        </el-carousel-item>
      </el-carousel>
    </template>
    <!-- 企业行业建站分类 -->
    <el-row>
      <el-col :span="24" class="site">
        企业行业建站分类
      </el-col>
    </el-row>
    <el-row type="flex" class="row-bg" justify="center">
      <el-col :span="3">
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span>餐饮行业网站建设</span>
          </div>
          <div class="text item">
            发展期企业，初创期企业，企业官网。以展示企业实力和品牌战略为主要方向。支持平台：手机、PC、APP、微信
          </div>
        </el-card>
      </el-col>
      <el-col :span="3">
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span>培训行业网站建设</span>
          </div>
          <div class="text item">
            发展期企业，初创期企业，企业官网。以展示企业实力和品牌战略为主要方向。支持平台：手机、PC、APP、微信
          </div>
        </el-card>
      </el-col>
      <el-col :span="3">
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span>机械行业网站建设</span>
          </div>
          <div class="text item">
            发展期企业，初创期企业，企业官网。以展示企业实力和品牌战略为主要方向。支持平台：手机、PC、APP、微信
          </div>
        </el-card>
      </el-col>
      <el-col :span="3">
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span>家装行业网站建设</span>
          </div>
          <div class="text item">
            发展期企业，初创期企业，企业官网。以展示企业实力和品牌战略为主要方向。支持平台：手机、PC、APP、微信
          </div>
        </el-card>
      </el-col>
      <el-col :span="3">
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span>酒店民宿网站建设</span>
          </div>
          <div class="text item">
            发展期企业，初创期企业，企业官网。以展示企业实力和品牌战略为主要方向。支持平台：手机、PC、APP、微信
          </div>
        </el-card>
      </el-col>
    </el-row>
    <!-- 解决方案 -->
    <el-row>
      <el-col :span="10"></el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data () {
    return {
      activeIndex: '1',
      activeIndex2: '1',
      banner: [
        {id: 0, idView: require('../assets/img/banner1.jpg')}
      ]
    }
  },
  methods: {
    handleSelect (key, keyPath) {
      console.log(key, keyPath)
    }
  }
}
</script>

<style scoped>
/* site(行业建站分类) */
.site {
  font-weight: 900;
  margin-top: 1rem;
  color:#666;
  font-size:20px;
}
  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }
  .clearfix:after {
    clear: both
  }

  .box-card {
    width: 205px;
    margin-top:1rem;
  }
  .text {
    font-size: 14px;
  }

  .item {
    padding-top: 2rem;
    margin-bottom: 3rem;
  }
</style>

<style>
  .index {
    background-color:#e9e9e9;
  }
  .index .el-card {
    background-color:#fff;
  }
  .index .clearfix{
    font-weight:900;
    color:#000;
    background-color:rgba(255, 255, 255, 0.9)
  }
 .index .text{
    background-color:rgba(0, 0, 0, 0);
  }
</style>
