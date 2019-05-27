<template>
  <div class="aboutus">
    <!-- 轮播图 -->
    <div class="banner">
      <div class="bannerDiv">
        <p>关于我们</p>
        <p>
          成长的企业品牌像树一样，每天似乎见不到变化，但多年以后却长成参天大树。在中国市场，每一天就有200家企业诞生，每一天又有200家企业衰退。如何成就他们的品牌梦想，正是我们九江东注为之奋斗的方向。
          <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;九江东注自成立之日起，致力于帮助每个企业提升互联网品牌形象，使之成为互联网行业的品牌参天大树。九江东注拥有包括电子商务、工业、机械、农业、服务业、家装、旅游业、制造、服务、IT互联网、建筑与房地产、物流、零售等行业的解决方案，并可以为客户提供基于行业本身属性的定制化营销方案，进一步助力企业提升互联网品牌形象。
        </p>
      </div>
    </div>
    <!-- 1F 标题 -->
    <div class="oneTitle-TextImg">
      <div class="flexSpeew">
        <div class="flexSpeewDiv-box">
          <p class="flexSpeew-Text1">我们的愿景</p>
          <p class="flexSpeew-Text2">九江东注致力于成为互联网领域的创新者，通过全案整合、搭建平台等方式，为企业的互联网市场提供专业且具有价值的应用与服务，助力企业提升互联网品牌形象。</p>
        </div>
        <img src="./../../../assets/img/about/titleImg.png">
      </div>
    </div>
    <!-- 2F 主体内容 -->
    <div class="two-Conter">
      <div class="myDivPadding bg-c-f5">
        <div class="twoDivTextDivBox-sing positionAbsuloe">
          <p class="myDivTitle-text">技术优势</p>
          <p class="myDivText-conter">以客户为中心，极致的客户体验<br>在项目中都运用专业的项目管理知识及项目管理经验</p>
        </div>
        <div class="circleprogress">
          <div class="circleprogress-1"></div>
          <div class="circleprogress-2"></div>
          <div class="circleprogress-3"></div>
          <div class="circleprogress-4"></div>
          <div class="circleprogress-5"></div>
          <div class="circleprogress-6"></div>
          <div class="circleprogress-7"></div>
        </div>
      </div>
    </div>
    <!-- 3F 底部 -->
    <div class="three-Footer">
      <div class="myDivPadding">
        <p class="myDivTitle-text">7*24小时提供服务</p>
        <p class="myDivText-conter">我们希望可以帮助到您并与您一起工作，请联系我们专业的技术顾问！</p>
        <el-button class="informaLeftBtn">
          <a href="tencent://message/?uin=3615670372&Menu=yes" class="informaRightBtn">联系我们</a>
        </el-button>
      </div>
    </div>
  </div>
</template>

<style scoped>
ul{
  list-style: none;
}
.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}
.clearfix{
  clear: both;
  zoom: 1;
}
.clearfix:after {
  clear: both
}
.aboutus .banner{
  width: 100%;
  height: 43.75rem;
  box-sizing: border-box;
  background-image: url('./../../../assets/img/about/banner.png');
  background-size: cover;
  text-align: center;
  padding: 9.125rem 0  9.25rem 23rem;
}
.aboutus .banner p:first-child{
  font-size: 1.875rem;
  color: #ffffff;
  margin-bottom: 2rem;
  font-weight: normal;
}
.aboutus .banner p:last-child{
  font-size: 1rem;
  color: #ffffff;
  text-indent:2em;
  line-height:2.25rem;
}
.aboutus .banner .bannerDiv{
  width:49.4375rem;
  height:17rem;
  margin-left:28rem;
}
.oneTitle-TextImg .flexSpeew{
 display: flex;
 justify-content: center;
}
.oneTitle-TextImg .flexSpeewDiv-box{
  width:51.1875rem;
  height:10.4375rem;
  padding:103px 60px 107px 50px;
}
.oneTitle-TextImg .flexSpeew-Text1, .oneTitle-TextImg .flexSpeew-Text2{
  line-height: 36px;
  font-size: 24px;
  margin-top:2rem;
  letter-spacing: 2.4px;
  color: #333333;
}
.oneTitle-TextImg .flexSpeew-Text2{
  text-align: left;
}
.oneTitle-TextImg .flexSpeew img{
  width:22.75rem;
  height:13.875rem;
  margin-top:4.75rem;
}
/* 2F技术优势 */
.two-Conter{
  position: relative;
}
.two-Conter .twoDivTextDivBox-sing{
  text-align: center;
  box-sizing: border-box;
}
.two-Conter .twoDivTextDivBox-sing .myDivTitle-text{
  font-size: 1.875rem !important;
  color:#333333 !important;
}
.two-Conter .twoDivTextDivBox-sing .myDivText-conter{
  font-size: 1.125rem;
  line-height: 1.6875rem;
  letter-spacing: .1125rem;
  color:#666666;
}
.two-Conter .circleprogress{
  width: 40rem;
  height: 40rem;
  border-radius: 50%;
  position: relative;
  top:50%;
  left:25%;
}
.two-Conter .circleprogress-1{
  width:296px;
  height:166px;
  background-image: url('./../../../assets/img/about/img2-1.png');
  background-repeat: no-repeat;
  background-size: 100% 100%;
  position: absolute;
  top:0%;
  left:35%;
}
.two-Conter .circleprogress-2{
  width:158px;
  height:242px;
  background-image: url('./../../../assets/img/about/img3-1.png');
  background-repeat: no-repeat;
  background-size: 100% 100%;
  position: absolute;
  top:18.3%;
  left:74.3%;
}
.two-Conter .circleprogress-3{
  width:193px;
  height:274px;
  background-image: url('./../../../assets/img/about/img4-1.png');
  background-repeat: no-repeat;
  background-size: 100% 100%;
  position: absolute;
  top:53%;
  left:82%;
}
.two-Conter .circleprogress-4{
  width:321px;
  height:177px;
  background-image: url('./../../../assets/img/about/img5-1.png');
  background-repeat: no-repeat;
  background-size: 100% 100%;
  position: absolute;
  top:83.5%;
  left:32.5%;
}
.two-Conter .circleprogress-5{
  width:255px;
  height:233px;
  background-image: url('./../../../assets/img/about/img6-1.png');
  background-repeat: no-repeat;
  background-size: 100% 100%;
  position: absolute;
  top:76%;
  left:-2.9%;
}
.two-Conter .circleprogress-6{
  width:169px;
  height:269px;
  background-image: url('./../../../assets/img/about/img7-1.png');
  background-repeat: no-repeat;
  background-size: 100% 100%;
  position: absolute;
  top:38%;
  left:-15%;
}
.two-Conter .circleprogress-7{
  width:233px;
  height:199px;
  background-image: url('./../../../assets/img/about/img1-1.png');
  background-repeat: no-repeat;
  background-size: 100% 100%;
  position: absolute;
  top:10.5%;
  left:-1%;
}
.two-Conter .circleprogress-1:hover{
  background-image: url('./../../../assets/img/about/img2-2.png');
}
.two-Conter .circleprogress-2:hover{
  background-image: url('./../../../assets/img/about/img3-2.png');
}
.two-Conter .circleprogress-3:hover{
  background-image: url('./../../../assets/img/about/img4-2.png');
}
.two-Conter .circleprogress-4:hover{
  background-image: url('./../../../assets/img/about/img5-2.png');
}
.two-Conter .circleprogress-5:hover{
  background-image: url('./../../../assets/img/about/img6-2.png');
}
.two-Conter .circleprogress-6:hover{
  background-image: url('./../../../assets/img/about/img7-2.png');
}
.two-Conter .positionAbsuloe{
  position: absolute;
  top:48%;
  left:32%;
}
</style>

<style>
.aboutus .myDivPadding{
  padding: 6.25rem 22.5625rem 6.8125rem 22.5rem;
}
.aboutus .myDivTitle-text{
  font-size: 1.875rem;
  font-family: PingFang-SC-Medium;
  font-weight: normal;
  font-stretch: normal;
  letter-spacing: .09375rem;
  color:#333333;
}
.aboutus .myDivText-conter{
  width:45.5625rem;
  height:3.125rem;
  font-size: 1.25rem;
  font-weight: normal;
  font-stretch: normal;
  line-height: 1.875rem;
  letter-spacing: .0625rem;
  color:#666666;
  margin:0 auto;
  margin-top:2.25rem;
}
.p-t-30{
  padding-top:1.875rem;
}
.p-t-60{
  padding-top:3.75rem;
}
.p-l-15{
  padding-left:1.85rem;
}
.aboutus .informaLeftBtn{
  width: 11.25rem;
  height: 3.75rem;
  background-color: #02004b;
  border-color: transparent;
  border-radius: .625rem;
  margin-right:3.125rem;
  margin-top:3rem;
}
.bg-c-f5{
  background-color: #f5f5f5;
}
</style>
