<template>
  <div class="Online">
    <!-- 背景图 -->
    <div class="banner">
    </div>
    <!-- 1F 电商零售行业分类 -->
    <div class="myDivPadding">
      <p class="myDivTitle-text">
        电商零售行业分类
      </p>
      <el-row type="flex" justify="space-between">
        <el-col :span="6">
          <div class="Retail-industry">
            <div class="icon1-h"></div>
            <h1>提升综合竞争力</h1>
            <p>提升企业品牌形象</p>
          </div>
        </el-col>
        <el-col :span="6">
          <div class="Retail-industry">
            <div class="icon2-h"></div>
            <h1>提升综合竞争力</h1>
            <p>提升企业品牌形象</p>
          </div>
        </el-col>
        <el-col :span="6">
          <div class="Retail-industry">
            <div class="icon3-h"></div>
            <h1>提升综合竞争力</h1>
            <p>提升企业品牌形象</p>
          </div>
        </el-col>
        <el-col :span="6">
          <div class="Retail-industry">
            <div class="icon4-h"></div>
            <h1>提升综合竞争力</h1>
            <p>提升企业品牌形象</p>
          </div>
        </el-col>
      </el-row>
    </div>
    <!-- 2F如何规划一个电商零售平台 -->
    <div class="myDivPadding">
      <p class="myDivTitle-text">如何规划一个电商零售平台</p>
      <table class="HowToPlan" cellspacing="0">
        <tr class="HowToPlanTableTr">
          <td class="HowToPlanTableTdOne">目标</td>
          <td class="HowToPlanTableTdTwo">我需要具备什么样业务支撑，才能帮客户解决这些问题？</td>
        </tr>
        <tr class="HowToPlanTableTr">
          <td class="HowToPlanTableTdOne">痛点</td>
          <td class="HowToPlanTableTdTwo">目标客户的问题是什么？</td>
        </tr>
        <tr class="HowToPlanTableTr">
          <td class="HowToPlanTableTdOne">机会</td>
          <td class="HowToPlanTableTdTwo">我能解决客户的什么问题？</td>
        </tr>
        <tr class="HowToPlanTableTr">
          <td class="HowToPlanTableTdOne">价值</td>
          <td class="HowToPlanTableTdTwo">解决这些问题，能给客户带来什么价值？</td>
        </tr>
        <tr class="HowToPlanTableTr">
          <td class="HowToPlanTableTdOne">支撑</td>
          <td class="HowToPlanTableTdTwo">我需要具备什么样业务支撑，才能帮客户解决这些问题？</td>
        </tr>
        <tr class="HowToPlanTableTr">
          <td class="HowToPlanTableTdOne">产品</td>
          <td class="HowToPlanTableTdTwo">我的产品和业务聚焦在哪些领域，并具有独特的价值？</td>
        </tr>
        <tr class="HowToPlanTableTr">
          <td class="HowToPlanTableTdOne">渠道</td>
          <td class="HowToPlanTableTdTwo">我的产品和业务如何到达客户？</td>
        </tr>
        <tr class="HowToPlanTableTr">
          <td class="HowToPlanTableTdOne">盈利</td>
          <td class="HowToPlanTableTdTwo">我怎么赚钱</td>
        </tr>
        <tr class="HowToPlanTableTr">
          <td class="HowToPlanTableTdOne">团队</td>
          <td class="HowToPlanTableTdTwo">我需要什么样的团队来运营这个业务？</td>
        </tr>
        <tr class="HowToPlanTableTr">
          <td class="HowToPlanTableTdOne">周期</td>
          <td class="HowToPlanTableTdTwo">这个业务的投资回报周期是多长？</td>
        </tr>
      </table>
    </div>
    <!-- 3f 电商零售平台技术解决方案 -->
    <div class="myDivPadding">
      <p class="myDivTitle-text">电商零售平台技术解决方案</p>
      <table class="HowToPlan" cellspacing="0">
        <tr class="HowToPlanTableTr">
          <td class="HowToPlanTableTdOne">名称</td>
          <td class="HowToPlanTableTdTwo">简介</td>
        </tr>
        <tr class="HowToPlanTableTr">
          <td class="HowToPlanTableTdOne">核心</td>
          <td class="HowToPlanTableTdTwo">基于PHP+MySQL,采用标准化开发，易用性、扩展性、标准性强</td>
        </tr>
        <tr class="HowToPlanTableTr">
          <td class="HowToPlanTableTdOne">会员</td>
          <td class="HowToPlanTableTdTwo">会员注册、登录，在线销售，企业推广，结交商友，获取商机</td>
        </tr>
        <tr class="HowToPlanTableTr">
          <td class="HowToPlanTableTdOne">公司</td>
          <td class="HowToPlanTableTdTwo">VIP等级体系、实名认证体系、自动二级、顶级域名精美商铺</td>
        </tr>
        <tr class="HowToPlanTableTr">
          <td class="HowToPlanTableTdOne">商城</td>
          <td class="HowToPlanTableTdTwo">我支持购物车、在线购买，卖家评论打分、交易记录，支持支付宝担保交易</td>
        </tr>
        <tr class="HowToPlanTableTr">
          <td class="HowToPlanTableTdOne">供应</td>
          <td class="HowToPlanTableTdTwo">产品供应、展示，在线询价、对比</td>
        </tr>
        <tr class="HowToPlanTableTr">
          <td class="HowToPlanTableTdOne">求购</td>
          <td class="HowToPlanTableTdTwo">求购信息发布,在线报价，权限灵活控制</td>
        </tr>
        <tr class="HowToPlanTableTr">
          <td class="HowToPlanTableTdOne">团购</td>
          <td class="HowToPlanTableTdTwo">可增强网站与会员互动,提升网站人气，支持实物订单和手机短信优惠券</td>
        </tr>
        <tr class="HowToPlanTableTr">
          <td class="HowToPlanTableTdOne">行情</td>
          <td class="HowToPlanTableTdTwo">行业产品价格行情汇总,系统自动生成报价单</td>
        </tr>
        <tr class="HowToPlanTableTr">
          <td class="HowToPlanTableTdOne">展会</td>
          <td class="HowToPlanTableTdTwo">展会发布、展会报道、展馆介绍、展会服务</td>
        </tr>
        <tr class="HowToPlanTableTr">
          <td class="HowToPlanTableTdOne">人才</td>
          <td class="HowToPlanTableTdTwo">公司招聘信息，个人求职简历</td>
        </tr>
        <tr class="HowToPlanTableTr">
          <td class="HowToPlanTableTdOne">知道</td>
          <td class="HowToPlanTableTdTwo">行业问题发布与回答，增加网站专业程度和用户黏度</td>
        </tr>
        <tr class="HowToPlanTableTr">
          <td class="HowToPlanTableTdOne">专题</td>
          <td class="HowToPlanTableTdTwo">支持绑定域名，更专业聚合站内信息，可扩展为行业或地区分站</td>
        </tr>
        <tr class="HowToPlanTableTr">
          <td class="HowToPlanTableTdOne">图库</td>
          <td class="HowToPlanTableTdTwo">展示企业产品支持批量 上传，可创建相册并设置查看权限</td>
        </tr>
        <tr class="HowToPlanTableTr">
          <td class="HowToPlanTableTdOne">视频</td>
          <td class="HowToPlanTableTdTwo">通过视频模式展示企业产品和宣传资料，支持会员上传</td>
        </tr>
        <tr class="HowToPlanTableTr">
          <td class="HowToPlanTableTdOne">品牌</td>
          <td class="HowToPlanTableTdTwo">行业品牌专业展示和宣传推广，可聚合品牌产品</td>
        </tr>
        <tr class="HowToPlanTableTr">
          <td class="HowToPlanTableTdOne">下载</td>
          <td class="HowToPlanTableTdTwo">可对专业文档、软件等设置收费下载,帮助网站盈利</td>
        </tr>
        <tr class="HowToPlanTableTr">
          <td class="HowToPlanTableTdOne">文章</td>
          <td class="HowToPlanTableTdTwo">可无限复制,建立专业资讯站点，例如资讯、技术</td>
        </tr>
        <tr class="HowToPlanTableTr">
          <td class="HowToPlanTableTdOne">信息</td>
          <td class="HowToPlanTableTdTwo">可无限复制,建立专业信息站点，例如招商、招标</td>
        </tr>
        <tr class="HowToPlanTableTr">
          <td class="HowToPlanTableTdOne">分站</td>
          <td class="HowToPlanTableTdTwo">支持按地区建立城市分站，可根据IP地址自动定位,支持分站管理员</td>
        </tr>
        <tr class="HowToPlanTableTr">
          <td class="HowToPlanTableTdOne">排名</td>
          <td class="HowToPlanTableTdTwo">信息搜索结果企业付费关键词竞价排名</td>
        </tr>
        <tr class="HowToPlanTableTr">
          <td class="HowToPlanTableTdOne">核心</td>
          <td class="HowToPlanTableTdTwo">基于PHP+MySQL ,采用标准化开发，易用性、 扩展性、标准性强</td>
        </tr>
        <tr class="HowToPlanTableTr">
          <td class="HowToPlanTableTdOne">广告</td>
          <td class="HowToPlanTableTdTwo">代码、链接图片、Flash,幻灯片、排名、 赞助商链接(关键词广告)</td>
        </tr>
        <tr class="HowToPlanTableTr">
          <td class="HowToPlanTableTdOne">积分</td>
          <td class="HowToPlanTableTdTwo">网站赠送、会员赚取、会员购买积分消费  </td>
        </tr>
        <tr class="HowToPlanTableTr">
          <td class="HowToPlanTableTdOne">邮件</td>
          <td class="HowToPlanTableTdTwo">邮件单发群发，地址导出，邮件订阅，商机快递</td>
        </tr>
        <tr class="HowToPlanTableTr">
          <td class="HowToPlanTableTdOne">短信</td>
          <td class="HowToPlanTableTdTwo">手机短信单发、群发，号码导出，会员购买、发送，短信验证码</td>
        </tr>
        <tr class="HowToPlanTableTr">
          <td class="HowToPlanTableTdOne">支付</td>
          <td class="HowToPlanTableTdTwo">支持支付宝、财付通网银在线、易宝、 PayPal</td>
        </tr>
        <tr class="HowToPlanTableTr">
          <td class="HowToPlanTableTdOne">WAP</td>
          <td class="HowToPlanTableTdTwo">通过手机浏览网站</td>
        </tr>
        <tr class="HowToPlanTableTr">
          <td class="HowToPlanTableTdOne">RSS</td>
          <td class="HowToPlanTableTdTwo">RSS阅读器订阅</td>
        </tr>
        <tr class="HowToPlanTableTr">
          <td class="HowToPlanTableTdOne">评论</td>
          <td class="HowToPlanTableTdTwo">会员对文章或信息评论，增加网站互动性</td>
        </tr>
        <tr class="HowToPlanTableTr">
          <td class="HowToPlanTableTdOne">公告</td>
          <td class="HowToPlanTableTdTwo">网站发布公告，支持公告分类和有效期</td>
        </tr>
        <tr class="HowToPlanTableTr">
          <td class="HowToPlanTableTdOne">投票</td>
          <td class="HowToPlanTableTdTwo">网站发布投票调查，了解用户需求</td>
        </tr>
        <tr class="HowToPlanTableTr">
          <td class="HowToPlanTableTdOne">链接</td>
          <td class="HowToPlanTableTdTwo">网站之间互换友情链接，有助网站推广</td>
        </tr>
        <tr class="HowToPlanTableTr">
          <td class="HowToPlanTableTdOne">单页</td>
          <td class="HowToPlanTableTdTwo">灵活创建例如关于我们、联系方式等页面</td>
        </tr>
        <tr class="HowToPlanTableTr">
          <td class="HowToPlanTableTdOne">留言</td>
          <td class="HowToPlanTableTdTwo">访客留言给网站,便于及时反馈问题和解决</td>
        </tr>
        <tr class="HowToPlanTableTr">
          <td class="HowToPlanTableTdOne">票选</td>
          <td class="HowToPlanTableTdTwo">可发起投票，支持单选或多选，支持在专题模板调用</td>
        </tr>
        <tr class="HowToPlanTableTr">
          <td class="HowToPlanTableTdOne">积分换礼</td>
          <td class="HowToPlanTableTdTwo">通过积分兑换网站提供的礼品,增加会员黏性</td>
        </tr>
        <tr class="HowToPlanTableTr">
          <td class="HowToPlanTableTdOne">批量传图</td>
          <td class="HowToPlanTableTdTwo">图库模型和网页编辑器支持多选传图，带进度提示</td>
        </tr>
        <tr class="HowToPlanTableTr">
          <td class="HowToPlanTableTdOne">一键登录</td>
          <td class="HowToPlanTableTdTwo">支持QQ、新浪微博百度通行证、MSN帐号键登录 </td>
        </tr>
      </table>
    </div>
    <!-- 3F线上营销推广 -->
    <div class="two-why">
      <h1 class="two-why-text">线上营销推广</h1>
      <ul class="two-why-lF">
        <div class="HHover">
          <li class="two-why-IconDiv hoverNone">
              <img src="../../../assets/img/solution/icon1f-3.png">
              <p>流量多</p>
          </li>
          <li class="hoverShow">
            <p>产品覆盖广，关键词、流量多。</p>
          </li>
        </div>
        <div class="HHover">
          <li class="two-why-IconDiv hoverNone">
              <img src="../../../assets/img/solution/icon1f-2.png">
              <p>见效快</p>
          </li>
          <li class="hoverShow">
            <p>受众范围广，操作方便，可同时推广多个产品词。</p>
          </li>
        </div>
        <div class="HHover">
          <li class="two-why-IconDiv hoverNone">
              <img src="../../../assets/img/solution/icon1f-4.png">
              <p>效果好</p>
          </li>
          <li class="hoverShow">
            <p>无需企业维护，目标用户可覆盖95%以上，搜索引擎首页。</p>
          </li>
        </div>
        <div class="HHover">
          <li class="two-why-IconDiv hoverNone">
              <img src="../../../assets/img/solution/icon1f-3.png">
              <p>省成本</p>
          </li>
          <li class="hoverShow">
            <p>投入少，同样的推广效果，只需要竞价推广20%的费用。</p>
          </li>
        </div>
      </ul>
    </div>
    <!-- 4F 功能定制咨询 -->
    <div class="oneSix clearfix">
      <p class="title">咨询价格</p>
      <div class="sixCont">
        <el-form  ref="form" :rules="rules" :model="form" label-width="86px">
          <div style="width:60%" class="fd">
            <el-form-item label="客户需求:">
              <el-input type = "textarea" v-model="form.text" maxlength="200" show-word-limit="true" resize="none" rows='6'  placeholder="请详细说明"></el-input>
            </el-form-item>
          </div>
          <div style="width:50%" class="fd"></div>
          <div style="width: 28%" class="fd">
            <el-form-item label=" 手机号:" prop="mobile">
              <el-input v-model="form.mobile" clearable></el-input>
            </el-form-item>
          </div>
          <div style="width: 40%;margin-left:10%" class="fd">
            <el-form-item label="公司名称:" prop="company">
              <el-input v-model="form.company" clearable></el-input>
            </el-form-item>
          </div>
          <div style="float: left;margin-left:20%;margin-top:2%" class="fd">
            <el-form-item>
              <el-button type="primary" class="informaLeftBtn" @click="informaLeftBtn">咨询价格</el-button>
              <el-button class="informaRightBtn" @click="informaRightBtn">现在咨询</el-button>
            </el-form-item>
          </div>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
import qs from 'qs'
export default {
  data () {
    var checkMobile = (rule, value, callback) => {
      setTimeout(() => {
        if (!(/^1(3|4|6|5|7|8)\d{9}$/.test(value))) {
          callback(new Error('请输入正确手机号'))
        } else if (value.lenght > 13) {
          callback(new Error('请输入正确手机号'))
        } else {
          callback()
        }
      }, 500)
    }
    return {
      activeName: 'first',
      tabPosition: 'left',
      form: {
        text: '',
        mobile: '',
        company: ''
      },
      rules: {
        mobile: [
          { required: true, message: '请填写您的手机号', trigger: 'blur' },
          { validator: checkMobile, trigger: 'blur' }
        ],
        company: [
          { required: true, message: '请填写您的公司名称', trigger: 'blur' }
        ]
      }
    }
  },
  mounted () {
    let list = document.querySelectorAll('.table1')
    console.log(list)
  },
  methods: {
    handleClick (tab, event) {
      console.log(tab, event)
    },
    informaLeftBtn () {
      console.log(this.form, '99999')
      let mobile = this.form.mobile
      let text = this.form.text
      let company = this.form.company
      if (mobile === '' || text === '' || company === '') {
        this.$message.error('请填写完整哦')
        return
      }
      let that = this
      that.$axios.post(this.httpUrlWMK + 'jiujiangdongzhu/Home/Need/NeedAdd', qs.stringify({'phone': mobile, 'company': company, 'content': text})).then(function (res) {
        console.log('提交了', res)
        if (res.data.state === '200') {
          that.$message({
            type: 'success',
            message: '您的需求已经发送，请耐心等待专员联系您'
          })
          that.form.mobile = ''
          that.form.text = ''
          that.form.company = ''
        } else if (res.data.state === '500') {
          that.$message.error('服务内部错误,请联系我们')
        }
      })
    },
    informaRightBtn () {
      console.log('联系我们')
    }
  }
}
</script>
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
.Online .banner{
  width: 100%;
  height: 25rem;
  box-sizing: border-box;
  background-image: url('../../../assets/img/Online/banner.png');
  background-size: cover;
  text-align: left;
  padding: 9.125rem 0  9.25rem 23rem;
}
/* 1F零售行业分类 */
.Retail-industry{
  width:16.3rem;
  height:14rem;
  border:1px solid #999999;
  background-color: #ffffff;
  border-radius: 0.6rem;
  margin-top:3.4rem;
}
.Retail-industry div{
  width:3.6rem;
  height:3.6rem;
  background-repeat: no-repeat;
  background-size: 100% 100%;
  display: block;
  margin:0 auto;
  margin-top:2rem;
}
.Retail-industry  .icon1-h{
  background-image: url('./../../../assets/img/Online/icon1.png');
}
.Retail-industry:hover .icon1-h{
  background-image: url('./../../../assets/img/Online/icon1-h.png');
}
.Retail-industry  .icon2-h{
  background-image: url('./../../../assets/img/Online/icon2.png');
}
.Retail-industry:hover .icon2-h{
  background-image: url('./../../../assets/img/Online/icon2-h.png');
}
.Retail-industry  .icon3-h{
  background-image: url('./../../../assets/img/Online/icon3.png');
}
.Retail-industry:hover .icon3-h{
  background-image: url('./../../../assets/img/Online/icon3-h.png');
}
.Retail-industry  .icon4-h{
  background-image: url('./../../../assets/img/Online/icon4.png');
}
.Retail-industry:hover .icon4-h{
  background-image: url('./../../../assets/img/Online/icon4-h.png');
}
.Retail-industry h1{
  font-size: 1.3rem;
  font-weight: normal;
  line-height: 1.7rem;
  letter-spacing: 0.1rem;
  color:#333333;
  margin-top:1.9rem;
}
.Retail-industry p{
  font-size: 1.1rem;
  line-height: 1.7rem;
  letter-spacing: 0.1rem;
  color:#666666;
  font-weight: normal;
  margin-top:1.2rem;
}
.Retail-industry:hover h1, .Retail-industry:hover p{
  color:#02004b;
}
/* 2F如何规划一个电商零售平台 */
.HowToPlan{
  margin-top:3.7rem;
  table-layout: fixed;
}
.HowToPlanTableTr{
  height:1.4rem;
  margin-top:2rem;
  display: block;
}
.HowToPlanTableTr .HowToPlanTableTdOne{
  box-sizing: border-box;
  width:150px;
  height:3.3rem;
  background-color: #02004b;
  color:#fff;
  font-size: 1.3rem;
  font-weight: normal;
  line-height: 1.7rem;
  border: 0.1rem solid #fff;
  border-right-width: 0px;
  border-top-width: 0px;
  border-bottom-width: 0rem;
}
.HowToPlanTableTr .HowToPlanTableTdTwo{
  width: 75rem;
  background-color: #fbfbfb;
  border:1px solid #02004b;
  text-align: left;
  text-indent: 2em;
}
/* 3L线上营销推广 */
.Online .two-why{
  background-color:#ffffff;
  padding-left:22.5rem;
  padding-right:22.5rem;
  padding-top:3.125rem;
  padding-bottom: 5.625rem;
}
.Online .two-why .two-why-text{
  font-size: 1.875rem;
  font-weight: normal;
  color:#333333;
}
.two-why .two-why-lF{
  display: flex;
  justify-content: space-between;
  margin-top:3.6875rem;
}
.two-why .hoverNone{
  width:16.875rem;
  height:9.4rem;
  border:1px solid #999999;
  border-radius: 1.25rem;
  transform: perspective(500px) rotateY(0deg);
  backface-visibility: hidden;
  transition: transform 2s;
  float: left;
}
.two-why .hoverShow{
  width:16.875rem;
  height:9.4rem;
  border-radius: 1.25rem;
  font-size: 1.125rem;
  line-height: 1.6875rem;
  letter-spacing: .05625rem;
  color:#ffffff;
  background-color:#02004b;
  transform: perspective(500px) rotateY(180deg);
  backface-visibility: hidden;
  transition: transform 2s;
}
.two-why .hoverNone img{
  font-size:1.25rem;
  color:#02004b;
  line-height: .0625rem;
  margin-top:1.7rem;
}
.two-why .hoverNone p{
  font-size:1.1rem;
  color:#666666;
  line-height: .0625rem;
  margin-top:1.5rem;
}
.two-why .hoverShow P{
  text-align: left;
  position: absolute;
  padding:2.3rem 1.9rem 4.3rem 1.9rem;
}
.two-why .HHover{
  transform-style: preserve-3d;
  transition: 0.5s;
}
.two-why .HHover:hover .hoverNone{
  transform: perspective(500px) rotateY(-180deg);
}
.two-why .HHover:hover .hoverShow{
  transform: perspective(500px) rotateY(0deg);
}
/* 4F客户定制咨询 */
.oneSix{
  margin: 0 auto;
}
.oneSix>p{
  margin-bottom: 3.6875rem;
}
.sixCont{
  margin: 0 auto;
  width: 62.9375rem;
  height: 23.5rem;
}
.sixCont .fd{
 display:inline-block;
 float:left;
}
.solution .sixCont .informaLeftBtn{
  width: 10rem;
  height: 3.125rem;
  background-color: #02004b;
  border-color: transparent;
  border-radius: .625rem;
  margin-right:3.125rem;
}
.solution .sixCont .informaRightBtn{
  display: inline-block;
  width: 10rem;
  height: 3.125rem;
  line-height: 1.125rem;
  box-sizing: border-box;
  background-color: #fff;
  color: #333;
  border-radius: .625rem;
  border: solid .0625rem #02004b;
}
.sixCont .informaRightBtn:hover{
  color:#02004b;
}
</style>

<style>
.Online .myDivPadding{
  padding: 6.25rem 22.5625rem 6.8125rem 22.5rem;
}
.Online .myDivTitle-text{
  font-size: 1.875rem;
  font-family: PingFang-SC-Medium;
  font-weight: normal;
  font-stretch: normal;
  letter-spacing: .09375rem;
  color:#333333;
}
.Online .myDivText-conter{
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
.Online .informaLeftBtn{
  width: 11.25rem;
  height: 3.75rem;
  background-color: #02004b;
  border-color: transparent;
  border-radius: .625rem;
  margin-right:3.125rem;
}
.Online .informaRightBtn{
  display: inline-block;
  width: 10rem;
  height: 3.525rem;
  line-height: 1.125rem;
  box-sizing: border-box;
  background-color: #fff;
  color: #333;
  border-radius: .625rem;
  border: solid .0625rem #02004b;
}
.Online .informaRightBtn:hover{
  color:#02004b;
}
</style>
