<template>
  <div class="index">
    <!-- 轮播图 -->
    <template>
      <el-carousel :interval="5000" arrow="never" indicator-position="outside" height="25rem">
        <el-carousel-item v-for="item in banner" :key="item">
          <img :src="item.idView" alt="">
        </el-carousel-item>
      </el-carousel>
    </template>
    <!-- 企业互联网+一站式服务 -->
    <el-row>
      <el-col :span="24" class="site">
        <p class="title">
          企业互联网+一站式服务
        </p>
      </el-col>
    </el-row>
      <div class="Digitization-div">
        <!-- 营销数字化 -->
        <div class="Digitization">
          <img src="../assets/img/yzt.png">
          <div>
            <p>营销数字化</p>
            <a href="javascript:;">
              <p>网站建设：PC+移动端</p>
            </a>
            <a href="javascript:;">
             <p>多行业应用</p>
            </a>
            <a href="javascript:;">
              <p>线上营销工具</p>
            </a>
          </div>
        </div>
        <!-- 交易数字化 -->
        <div class="Digitization2">
          <img src="../assets/img/wjj.png">
          <div>
            <p>交易数字化</p>
            <a href="javascript:;">
              <p>电商平台</p>
            </a>
            <a href="javascript:;">
              <p>交易扩展应用</p>
            </a>
          </div>
        </div>
        <!-- 客户管理数字化 -->
        <div class="Digitization">
          <img src="../assets/img/ccg.png">
          <div>
            <p>客户管理数字化</p>
            <a href="javascript:;">
              <p>精准会员智能营销</p>
            </a>
          </div>
        </div>
    </div>
    <!-- 企业行业建站分类 -->
    <el-row>
      <el-col :span="24" class="site">
        <p class="title">
          企业行业建站分类
        </p>
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
    <!-- 品牌企业案例 -->
    <el-row>
      <el-col :span="24" class="site">
        <p class="title">
          品牌企业案例
        </p>
      </el-col>
    </el-row>
    <el-row>
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
        <p class="title">
          最新资讯
        </p>
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
  margin: 50px 0;
  color:#333;
  font-size:24px;
  margin-bottom: 0px;
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
    background-color:#fff;
    font-family: 'Microsoft Yahei',PingFangSC,sans-serif;
    color:#333;
    min-width: 1250px;
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
    background-color:rgba(0, 0, 0, 0);
  }
  .index .el-carousel img{
    width:100%;
  }
  /* 企业互联网头部图标 */
  .title:before{
    content:  "";
    position: absolute;
    left:50%;
    transform: translateX(-50%);
  }
  .title::before{
    width: 0;
    height: 0;
    bottom: -19px;
    border:6px solid;
    border-color:#20B09F transparent transparent;
  }
  .title:after{
    content:  "";
    position: absolute;
    left:50%;
    transform: translateX(-50%);
  }
  .title::after{
    width: 52px;
    height: 3px;
    background-color: #20B09F;
    bottom: -8px;
  }
  .index .text[data-v-47323bf2]{
    text-align: left;
  }
  .index .Digitization, .index .Digitization2{
    border: 1px solid #EDEDED;
    display: flex;
    height: 166px;
    padding: 40px 0 0;
    align-items: flex-start;
    text-align: left;
    font-size: 20px;
    color: #333;
    margin-bottom: 20px;
  }
  .index .Digitization2{
    background-color:#F7F8FA;
  }
  .index .Digitization a, .index .Digitization2 a{
    display: block;
    text-decoration: none;
    font-size: 16px;
    color: #666;
    margin: 12px 0;
    background-repeat: no-repeat;
  }
  .index .Digitization img, .index .Digitization2 img{
    padding-left: 2rem;
    padding-right: 2rem;
  }
  .index .Digitization a>p, .index .Digitization2 a>p{
    text-decoration: none;
    background-image: url("../assets/img/img-items-service-mark.svg");
    background-repeat: no-repeat;
    padding-left: 18px;
    line-height: 14px;
    margin-right:1rem;
    padding-right: 2rem;
  }
  /* Digitization-div */
  .index .Digitization-div{
    margin-top:3rem;
    display: flex;
    justify-content: center;
  }

  .index .Digitization2:before, .index .Digitization2:after{
    position: relative;
    top:50%;
    transform:translateY(-50%);
    width: 0;
    height: 0;
    content: "";
    z-index: 1;
    left: -1%;
  }
  .index .Digitization2::before{
    right: -20px;
    border:11px solid;
    border-color: transparent transparent transparent #fff;
  }
  .index .Digitization2::after{
    left: 23px;
    right: -22px;
    border:11px solid;
    border-color: transparent transparent transparent #EDEDED;
  }
</style>
