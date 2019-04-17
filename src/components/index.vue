<template>
  <div class="index">
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
    <!-- 行业解决方案 -->
    <el-row>
      <el-col :span="24" class="site">
        行业解决方案
      </el-col>
    </el-row>
    <el-row style="margin-top:2rem;">
      <el-col :span="13" :offset="5">
        <el-container>
          <!-- 左边aside -->
          <el-aside width="200px">
            <el-row style="border:5px solid #666">
              <el-col :span="15">
                <el-button type="text">教育解决方案</el-button>
              </el-col>
              <el-col :span="15">
                <el-button type="text">教育解决方案</el-button>
              </el-col>
              <el-col :span="15">
                <el-button type="text">教育解决方案</el-button>
              </el-col>
              <el-col :span="15">
                <el-button type="text">教育解决方案</el-button>
              </el-col>
            </el-row>
          </el-aside>
          <el-container>
            <!-- 中间头部 -->
            <el-header>新金融解决方案</el-header>
            <!-- 中间主体 -->
            <el-main>
              <el-row>
                <el-col :span="20">
                  通过一系列云基础设施服务，帮助您创建、实施和分发全球数字媒体内容。具有较高的可扩展性和安全性，在云中为各种类型的视音频或数字内容提供海量存储容量，提供高效分发内容的低成本解决方案。
                </el-col>
                <el-col :span="5">
                  <el-button type="danger" plain style="margin-top:2rem;">了解更多</el-button>
                </el-col>
              </el-row>
            </el-main>
            <!-- 中间底部 -->
            <el-footer>
              <el-row>
                <el-col :span="6">
                  <el-button type="danger">售后服务</el-button>
                </el-col>
                <el-col :span="6">
                  <el-button type="danger">相关案例</el-button>
                </el-col>
                <el-col :span="6">
                  <el-button type="danger">网站安全</el-button>
                </el-col>
              </el-row>
            </el-footer>
          </el-container>
        </el-container>
      </el-col>
    </el-row>
    <!-- 品牌企业案例 -->
    <el-row>
      <el-col :span="24" class="site">
        品牌企业案例
      </el-col>
      <el-col :span="23">
        <div class="pp_log">
          <img src="../assets/img/logo.png" alt="">
          <img src="../assets/img/logo.png" alt="">
          <img src="../assets/img/logo.png" alt="">
        </div>
      </el-col>
      <el-col :span="23">
        <div class="pp_log">
          <img src="../assets/img/logo.png" alt="">
          <img src="../assets/img/logo.png" alt="">
          <img src="../assets/img/logo.png" alt="">
        </div>
      </el-col>
    </el-row>
    <!-- 最新资讯 -->
    <el-row>
      <el-col :span="24" class="site">
        最新资讯
      </el-col>
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
  /* 行业解决方案 */
    .el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: left;
    margin-left: 2rem;
    line-height: 60px;
    font-weight: 900;
  }

  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 100px;
  }

  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: left;
    margin-top: 2rem;
    margin-left: 2rem;
  }

  body > .el-container {
    margin-bottom: 40px;
  }

  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }

  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
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
  .index .pp_log{
    margin-top:1rem;
    transition:.5s;
  }
  .index .pp_log img{
    margin-left:1rem;
    width:200px;
    height:50px;
    padding:1rem;
    border:1px solid #c6c6c6;
    background-color:rgba(0, 0, 0, 0.3);
    transition:.5s
  }
  .index .pp_log img:hover{
    border:1px solid #000;
    background-color:rgba(0, 0, 0, 0)
  }
</style>
