<template>
  <div class="index">
    <!-- 轮播图 -->
    <template>
      <el-carousel :interval="5000" arrow="never" :height="bannerHeight + 'px'" class="bannerImg">
        <el-carousel-item v-for="item in banner" :key="item.catousel_priority">
          <img :src="item.img_path" alt="">
        </el-carousel-item>
      </el-carousel>
    </template>
    <!-- 域名搜索 -->
    <div class="domainName">
      <div class="domainTop">域名</div>
      <div class="domainBottom">
        <el-input v-model="inputText" placeholder="输入域名，如：xinnet"></el-input>
        <el-dropdown>
          <el-button class="suffix">
            {{suffixText}}<i class="el-icon-arrow-down el-icon--right"></i>
          </el-button>
            <el-dropdown-menu slot="dropdown">
              <el-scrollbar class="dropdownScr">
                <el-dropdown-item v-for="item in domainList" :key="item.index" @click.native="chioseDomain(item.name)">{{item.name}}</el-dropdown-item>
              </el-scrollbar>
            </el-dropdown-menu>
        </el-dropdown>
        <el-button class="searchSuffix">查域名</el-button>
      </div>
    </div>
    <!-- 公司主营产品 -->
    <div class="pro">
      <el-row>
        <el-col :span="24" class="site">
          <p class="title">
            公司主营产品
          </p>
        </el-col>
      </el-row>
      <div class="proCont">
        <ul>
          <li @mouseenter="proEnterWab" @mouseleave="proLeave">
            <img src="./../assets/img/index/wab.png" alt="" v-if= 'imgShowWab == 0'>
            <img src="./../assets/img/index/wab1.png" alt="" v-else>
            <div>
              <p class="proContTitle">网站建设</p>
              <div class="proContText">适合企业品牌推广<br>全网营销</div>
            </div>
          </li>
          <li @mouseenter="proEnterSeo" @mouseleave="proLeave">
            <img src="./../assets/img/index/seo.png" alt="" v-if= 'imgShowSeo == 0'>
            <img src="./../assets/img/index/seo1.png" alt="" v-else>
            <div>
              <p class="proContTitle">SEO优化推广</p>
              <div class="proContText">投放少 优化效果佳 <br> 性价比高</div>
            </div>
          </li>
          <li @mouseenter="proEnterWechat" @mouseleave="proLeave">
            <img src="./../assets/img/index/wechat.png" alt="" v-if= 'imgShowWechat == 0'>
            <img src="./../assets/img/index/wechat1.png" alt="" v-else>
            <div>
              <p class="proContTitle">小程序定制开发</p>
              <div class="proContText">无需下载 更多流量 <br> 轻便稳定</div>
            </div>
          </li>
          <li @mouseenter="proEnterApp" @mouseleave="proLeave">
            <img src="./../assets/img/index/app.png" alt="" v-if= 'imgShowApp == 0'>
            <img src="./../assets/img/index/app1.png" alt="" v-else>
            <div>
              <p class="proContTitle">APP定制开发</p>
              <div class="proContText">原生开发技术 <br> 助力企业移动战略部署</div>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <!-- 行业经典案例 -->
    <div class="solution">
      <el-row>
        <el-col :span="24" class="site">
          <p class="title">
            行业经典案例
          </p>
        </el-col>
      </el-row>
      <div class="solutionList">
        <ul>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
    </div>
    <!-- 行业解决方案 -->
    <div class="programme">
      <el-row>
        <el-col :span="24" class="site">
          <p class="title">
            行业解决方案
          </p>
        </el-col>
      </el-row>
      <div class="programebg">
        <div class="programmeList">
          <ul>
            <li>教育行业</li>
            <li>制造行业</li>
            <li>电商零售业</li>
            <li>餐饮服务业</li>
          </ul>
        </div>
      </div>
    </div>
    <!-- 新闻资讯 -->
    <div class="news">
      <el-row>
        <el-col :span="24" class="site">
          <p class="title">
            新闻资讯
          </p>
        </el-col>
      </el-row>
      <div class="newsCont">
        <div class="newsList">
          <ul>
            <li>今天广交会2.5万企业家，你如何才能出众？</li>
            <li>今天广交会2.5万企业家，你如何才能出众？</li>
            <li>今天广交会2.5万企业家，你如何才能出众？</li>
            <li>今天广交会2.5万企业家，你如何才能出众？</li>
            <li>今天广交会2.5万企业家，你如何才能出众？</li>
            <li>今天广交会2.5万企业家，你如何才能出众？</li>
          </ul>
        </div>
      </div>
    </div>
    <!-- 售后服务 -->
    <div class="servise">
      <el-row>
        <el-col :span="24" class="site">
          <p class="title">
            售后服务
          </p>
        </el-col>
      </el-row>
      <div class="serviseList">
        <ul>
          <li><img src="./../assets/img/index/service1.png" alt=""><span>7*24小时售后服务热线</span></li>
          <li><img src="./../assets/img/index/service2.png" alt=""><span>一对一业务支持服务 </span></li>
          <li><img src="./../assets/img/index/service3.png" alt=""><span>全年免费限次维修服务</span></li>
          <li><img src="./../assets/img/index/service4.png" alt=""><span>定制化至满意为止</span></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      activeIndex: '1',
      activeIndex2: '1',
      banner: [],
      domainList: [{
        index: '1',
        name: '.com'
      }, {
        index: '2',
        name: '.cn'
      }, {
        index: '3',
        name: '.net'
      }, {
        index: '4',
        name: '.shop'
      }, {
        index: '5',
        name: '.xyz'
      }, {
        index: '6',
        name: '.vip'
      }, {
        index: '7',
        name: '.top'
      }, {
        index: '8',
        name: '.club'
      }, {
        index: '9',
        name: '.网址'
      }, {
        index: '10',
        name: '.co'
      }, {
        index: '11',
        name: '.ltb'
      }, {
        index: '12',
        name: '.site'
      }, {
        index: '13',
        name: '.art'
      }, {
        index: '14',
        name: '.购物'
      }, {
        index: '15',
        name: '.在线'
      }, {
        index: '16',
        name: '.wang'
      }, {
        index: '17',
        name: '.red'
      }, {
        index: '18',
        name: '.pro'
      }, {
        index: '19',
        name: '.手机'
      }, {
        index: '20',
        name: '.网店'
      }, {
        index: '21',
        name: '.ink'
      }, {
        index: '22',
        name: '.online'
      }, {
        index: '23',
        name: '.store'
      }, {
        index: '24',
        name: '.tech'
      }, {
        index: '25',
        name: '.auto'
      }, {
        index: '26',
        name: '.link'
      }, {
        index: '27',
        name: '.集团'
      }, {
        index: '28',
        name: '.cc'
      }, {
        index: '29',
        name: '.com.cn'
      }, {
        index: '30',
        name: '.中国'
      }, {
        index: '31',
        name: '.公司'
      }, {
        index: '32',
        name: '.网络'
      }, {
        index: '33',
        name: '.biz'
      }, {
        index: '34',
        name: '.mobi'
      }, {
        index: '35',
        name: '.info'
      }, {
        index: '36',
        name: '.org'
      }, {
        index: '37',
        name: '.gov.cn'
      }, {
        index: '38',
        name: '.net.cn'
      }, {
        index: '39',
        name: '.org.cn'
      }, {
        index: '40',
        name: '.ac.cn'
      }, {
        index: '41',
        name: '.name'
      }, {
        index: '42',
        name: '.中文网'
      }, {
        index: '43',
        name: '.ren'
      }, {
        index: '45',
        name: '.love'
      }, {
        index: '46',
        name: '.work'
      }, {
        index: '47',
        name: '.fun'
      }, {
        index: '48',
        name: '.run'
      }, {
        index: '49',
        name: '.chat'
      }, {
        index: '50',
        name: '.gold'
      }, {
        index: '51',
        name: '.plus'
      }, {
        index: '52',
        name: '.team'
      }, {
        index: '53',
        name: '.show'
      }, {
        index: '54',
        name: '.world'
      }, {
        index: '55',
        name: '.group'
      }, {
        index: '56',
        name: '.center'
      }, {
        index: '57',
        name: '.social'
      }, {
        index: '58',
        name: '.我爱你'
      }, {
        index: '59',
        name: '.video'
      }, {
        index: '60',
        name: '.cool'
      }, {
        index: '61',
        name: '.zone'
      }, {
        index: '62',
        name: '.today'
      }, {
        index: '63',
        name: '.city'
      }, {
        index: '64',
        name: '.company'
      }, {
        index: '65',
        name: '.live'
      }, {
        index: '66',
        name: '.fund'
      }, {
        index: '67',
        name: '.guru'
      }, {
        index: '68',
        name: '.pub'
      }, {
        index: '69',
        name: '.email'
      }, {
        index: '70',
        name: '.life'
      }, {
        index: '71',
        name: '.wiki'
      }, {
        index: '72',
        name: '.design'
      }],
      inputText: '',
      suffixText: '.com',
      imgShowWab: '0',
      imgShowSeo: '0',
      imgShowWechat: '0',
      imgShowApp: '0',
      bannerHeight: 450,
      screenWidth: ''
    }
  },
  created () {
    this.caseUpload()
    this.screenWidth = window.outerWidth
    this.setSize()
  },
  mounted () {
    this.setSize()
    const that = this
    window.addEventListener('resize', function () {
      that.screenWidth = window.outerWidth
      that.setSize()
    }, false)
  },
  methods: {
    // banner随着屏幕大小改变
    setSize () {
      this.bannerHeight = 600 / 2560 * this.screenWidth
      // console.log(this.screenWidth, 'this.screenWidth')
      if (this.screenWidth > 1053) {
        this.bannerHeight = 450
      } else if (this.screenWidth < 1053 && this.screenWidth > 800) {
        this.bannerHeight = 380
      } else if (this.screenWidth < 800) {
        this.bannerHeight = 280
      }
      // console.log(this.bannerHeight, 'this.bannerHeight')
    },
    // 获取banner
    caseUpload () {
      let that = this
      that.$axios.post(this.httpUrlWMK + 'jiujiangdongzhu/Home/Carousel/CarouselList').then(function (res) {
        console.log(res.data.data)
        that.banner = res.data.data
        console.log(that.banner)
      })
    },
    handleSelect (key, keyPath) {
      console.log(key, keyPath)
    },
    // 选中哪个域名更改域名
    chioseDomain (value) {
      this.suffixText = value
    },
    // 鼠标进入
    proEnterWab () {
      this.imgShowWab = 1
    },
    proEnterWechat () {
      this.imgShowWechat = 1
    },
    proEnterApp () {
      this.imgShowApp = 1
    },
    proEnterSeo () {
      this.imgShowSeo = 1
    },
    // 鼠标离开事件
    proLeave () {
      this.imgShowWab = 0
      this.imgShowWechat = 0
      this.imgShowApp = 0
      this.imgShowSeo = 0
    }
  }
}
</script>

<style scoped>
/* site(行业建站分类) */
.site {
  margin: 3.125rem 0;
  color:#333;
  font-size:1.5rem;
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
    width: 12.8125rem;
    margin-top:1rem;
  }
  .text {
    font-size: .875rem;
  }

  .item {
    padding-top: 2rem;
    margin-bottom: 3rem;
  }
.el-dropdown-menu{
  width: 7.3rem;
  height: 15rem;
  border-radius: 0;
}
</style>

<style>
  .index {
    background-color:#fff;
    font-family: 'Microsoft Yahei',PingFangSC,sans-serif;
    color:#333;
    min-width: 1250px;
    padding-bottom:6rem;
  }
  .index .clearfix{
    font-weight:900;
    color:#000;
    background-color:rgba(255, 255, 255, 0.9);
  }
  li{list-style-type:none;}
  .el-input__inner:focus{border-color:transparent;}
/* banner */
.bannerImg{
}
.bannerImg img{
  width: 100%;
  height: inherit;
}
/* 搜索域名部分 */
.index .domainName{
  width: 100%;
  height: 11.25rem;
  box-sizing: border-box;
  background-color: #333333;
  text-align: center;
  padding: 2.6875rem 22.5rem 2.6875rem 22.5rem;
}
.index .domainName .domainTop{
  width: 6.875rem;
  height: 2.5rem;
  line-height: 2.5rem;
  background-color: #ff0000;
  text-align: center;
  color: #fefefe;
  font-size: 1rem;
}
.index .domainName .domainBottom{
  display: flex;
}
.index .domainName .domainBottom input{
  border-radius: 0;
  height: 3.375rem;
}
.index .domainBottom button{
  border-radius: 0;
}
.index .domainBottom .suffix{
  width: 7.4375rem;
  height: 3.375rem;
  color: #333333;
  font-size: 1.125rem;
  box-sizing: border-box;
  background-color: #f8f8f8;
  border:0;
  border-left: solid .0625rem #d7d7d7;

}
.index .domainBottom .searchSuffix{
  width: 7.4375rem;
  height: 3.375rem;
  font-size: 1.25rem;
  color: #fefefe;
  background-color: #ff0000;
  border:0;
}
.title{
  font-size: 1.875rem;
  font-weight: normal;
  font-stretch: normal;
  letter-spacing: 0px;
  color: #333333;
}
/* 主营产品 */
.proCont{
  display: flex;
  justify-content:center;
  margin-top: 3.6875rem;
}
.proCont ul li{
  display: flex;
  float: left;
  width: 16.25rem;
  height: 19.75rem;
  box-sizing: border-box;
  border: solid 2px transparent;
  background-color: #ffffff;
  border-radius: 1.25rem;
  padding:2.0625rem 2.25rem 1.8125rem 2.0625rem;
  flex-direction:column;
  justify-content: flex-start;
  align-items: center;
  flex-basis: auto;
  text-align: center;
  background-color: #f8f8f8;
  margin-right: 2.9375rem;
}
.proCont ul li:last-child{
  margin-right: 0;
}
.proCont ul li:hover{
  background-color: #ffffff;
  border: solid 2px #dcdcdc;
  box-sizing: border-box;
  background-image:-webkit-linear-gradient(top,#0189e2,#0c56a3);
  -webkit-background-clip:text;
  -webkit-text-fill-color:transparent;
}
.proCont ul li img{
  width: 4.875rem;
  height: 4.6875rem;
  margin-bottom: 3.75rem;
}
.proCont ul li p{
  font-size: 1.75rem;
  font-weight: normal;
  font-stretch: normal;
  letter-spacing: 0px;
  color: #333;
}
.proCont .proContTitle{
  font-size:1.625rem;
  text-align: left;
}
.proCont .proContText{
  text-align: left;
  margin-top: 1.75rem;
  font-size: 1.125rem;
  color: #666;
  line-height: 2.25rem;
}
/* 行业经典案例 */
.solutionList{
  display: flex;
  justify-content:center;
  margin-top: 4rem;
}
.solutionList ul li{
  display:block;
  float: left;
  width: 19rem;
  height: 9rem;
  text-align: center;
  background-color: #f2f2f2;
}
.solutionList ul li:first-child{
  border-radius: 1rem 0rem 0rem 0rem;
}
.solutionList ul li:last-child{
  border-radius: 0rem 0rem 1rem 0rem;
}
.solutionList ul li:nth-child(2n+1){
  background-color: #f2f2f2;
}
.solutionList ul li:nth-child(2n){
  background-color: #e3e3e3;
}
.solutionList ul li:hover{
  transform: scale(1.2);
  transition-duration: 0.3s;
  transition-timing-function:ease-in-out;
  /* -moz-transform:scale(1,1.2);
  -webkit-transform:scale(1,1.2);
  -o-transform:scale(1,1.2); */
}
/* 行业解决方案 */
.programme .programebg{
  width: 100%;
  height: 19rem;
  margin-top: 4rem;
  background-color: #333333
}
.programme .programmeList{
  display: flex;
  justify-content:center;
}
.programme .programmeList ul li{
  width: 18.78rem;
  height: 19rem;
  float: left;
  margin: 0;
  padding: 0;
  text-align: center;
  line-height: 19rem;
  font-size: 2rem;
  color: #fefefe;
}
.programme .programmeList ul li:hover{
  text-decoration:underline;
  cursor:pointer;
}
.programme .programmeList ul li:first-child{
  background-image: url(./../assets/img/index/programme1.png);
  background-repeat: no-repeat;
}
.programme .programmeList ul li:nth-child(2){
  background-image: url(./../assets/img/index/programme2.png);
  background-repeat: no-repeat;
}
.programme .programmeList ul li:nth-child(3){
  background-image: url(./../assets/img/index/programme3.png);
  background-repeat: no-repeat;
}
.programme .programmeList ul li:last-child{
  background-image: url(./../assets/img/index/programme4.png);
  background-repeat: no-repeat;
}
/* 新闻资讯 */
.news .newsCont{
  display: flex;
  justify-content: center;
}
.news .newsCont .newsList{
  width: 77rem;
  height: 10rem;
  box-sizing: border-box;
  background-color: #ececec;
  border-radius: 1rem;
  margin-top: 4rem;
  padding:2.6rem 1rem 3rem 1rem;
}
.news .newsCont .newsList ul li{
  float: left;
  width: 25rem;
  line-height: 2.5rem;
  color: #666666;
  font-size: 1rem;
}
.news .newsCont .newsList ul li:hover{
  cursor:pointer;
  color: #02004b;
}
/* 售后服务 */
.servise .serviseList{
  display: flex;
  justify-content: center;
  margin-top: 4rem
}
.servise .serviseList ul li{
  float: left;
  width: 17rem;
  height: 5rem;
  line-height: 4.8rem;
  background-color: #ffffff;
  color: #666666;
  font-size: 1rem;
  border-radius: 1rem;
  border: solid 0.1rem rgb(215, 215, 215);
  margin-right: 3rem
}
.servise .serviseList ul li:last-child{
  margin-right: 0;
}
.servise .serviseList ul li img{
  vertical-align:-10%;
  margin-right: 1rem;
}
.servise .serviseList ul li:nth-child(3) img{
  vertical-align:-13%;
}
.servise .serviseList ul li:hover{
  border-color: #c0c0c0;
}
</style>
