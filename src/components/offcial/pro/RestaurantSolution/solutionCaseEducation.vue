<template>
  <div class='solutionCaseEdu'>
    <div>
      <div class='banner'>
      </div>
      <div class='tab'>
        <div class='onePart'>
          <div class="onePartLeft"><img src="./../../../../assets/img/solutionCase/solutionCaseEdu/onePart1.png" alt=""></div>
          <div class="onePartCenter"><img src="./../../../../assets/img/solutionCase/solutionCaseEdu/onePart2.png" alt=""></div>
          <div class="onePartRight">多端覆盖，在线业务随时解决</div>
        </div>
        <div class="twoPart">
          <p class="title">教育培训业务流程</p>
          <div class="cont"></div>
        </div>
        <div class="threePart">
          <p class="title">业务系统管理</p>
          <div class="cont">
            <ul>
              <li>
                <div class="listItemTop top1"></div>
                <div class="listItemBottom">
                  <p class="listItemBottomTitle">教师管理</p>
                  <p class="listItemBottomText">教师推荐 教师风采</p>
                </div>
              </li>
              <li>
                <div class="listItemTop top2"></div>
                <div class="listItemBottom">
                  <p class="listItemBottomTitle">学员管理</p>
                  <p class="listItemBottomText">学员优秀作品展示 就业情况</p>
                </div>
              </li>
              <li>
                <div class="listItemTop top3"></div>
                <div class="listItemBottom">
                  <p class="listItemBottomTitle">课程管理</p>
                  <p class="listItemBottomText">课程体系展示 课程预约、报名、下载</p>
                </div>
              </li>
              <li>
                <div class="listItemTop top4"></div>
                <div class="listItemBottom">
                  <p class="listItemBottomTitle">支付管理</p>
                  <p class="listItemBottomText">订单处理，订单支付，发票系统</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div class='forePart'>
          <p class='title'>线上营销推广</p>
          <div class='cont'>
            <ul>
              <li>
                <div class='before'>
                  <img src='./../../../../assets/img/solutionCase/fore1.png' alt>
                  <p>流量多</p>
                </div>
                <div class='after'>
                  <p>产品覆盖广，关键词、流量多。</p>
                </div>
              </li>
              <li>
                <div class='before'>
                  <img src='./../../../../assets/img/solutionCase/fore2.png' alt>
                  <p>见效快</p>
                </div>
                <div class='after'>
                  <p>受众范围广，操作方便，可同时推广多个产品词。</p>
                </div>
              </li>
              <li>
                <div class='before'>
                  <img src='./../../../../assets/img/solutionCase/fore3.png' alt>
                  <p>效果好</p>
                </div>
                <div class='after'>
                  <p>无需企业维护，目标用户可覆盖95%以上，搜索引擎首页。</p>
                </div>
              </li>
              <li>
                <div class='before'>
                  <img src='./../../../../assets/img/solutionCase/fore4.png' alt>
                  <p>省成本</p>
                </div>
                <div class='after'>
                  <p>投入少，同样的推广效果，只需要竞价推广20%的费用。</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div class='oneSix clearfix'>
          <p class='title'>功能定制咨询</p>
          <div class='sixCont'>
            <el-form ref='form' :rules='rules' :model='form' label-width='86px'>
              <div style='width:60%' class='fd'>
                <el-form-item label='客户需求:'>
                  <el-input
                    type='textarea'
                    v-model='form.text'
                    maxlength='200'
                    show-word-limit='true'
                    resize='none'
                    rows='6'
                    placeholder='请详细说明'
                  ></el-input>
                </el-form-item>
              </div>
              <div style='width:50%' class='fd'></div>
              <div style='width: 28%' class='fd'>
                <el-form-item label=' 手机号:' prop='mobile'>
                  <el-input v-model='form.mobile' clearable></el-input>
                </el-form-item>
              </div>
              <div style='width: 40%;margin-left:10%' class='fd'>
                <el-form-item label='公司名称:' prop='company'>
                  <el-input v-model='form.company' clearable></el-input>
                </el-form-item>
              </div>
              <div style='float: left;margin-left:20%;margin-top:2%' class='fd'>
                <el-form-item>
                  <el-button type='primary' class='informaLeftBtn' @click='informaLeftBtn'>咨询价格</el-button>
                  <!-- <el-button class='informaRightBtn' @click='informaRightBtn'>现在咨询</el-button> -->
                  <a href='tencent://message/?uin=3615670372&Menu=yes' class='informaRightBtn'>现在咨询</a>
                </el-form-item>
              </div>
            </el-form>
          </div>
        </div>
      </div>
    </div>
    <!-- <router-view/> -->
  </div>
</template>
<script>
import qs from 'qs'
export default {
  data () {
    var checkMobile = (rule, value, callback) => {
      setTimeout(() => {
        if (!/^1(3|4|6|5|7|8)\d{9}$/.test(value)) {
          callback(new Error('请输入正确手机号'))
        }
      }, 500)
    }
    return {
      activeName: 'first',
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
      if (
        mobile === '' ||
        text === '' ||
        company === '' ||
        mobile.length !== 11
      ) {
        this.$message.error('请填写完整哦')
        return
      }
      let that = this
      that.$axios
        .post(
          this.httpUrlWMK + 'jiujiangdongzhu/Home/Need/NeedAdd',
          qs.stringify({ phone: mobile, company: company, content: text })
        )
        .then(function (res) {
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
      // this.$http.jsonp('https://wpa.qq.com/msgrd?v=3&uin=1043814457&site=qq&menu=yes', {}, {
      // headers: {
      // referer: 'https://wpa.qq.com',
      // host: 'wpa.qq.com'
      // },
      // emulateJSON: true
      // }).then((response) => {
      // this.movie = response.data
      // console.log(this.movie)
      // }).catch(
      // console.log('9999')
      // )
      // this.$http.jsonp('http://wpa.qq.com/msgrd?v=3&uin=1043814457&site=qq&menu=yes').then(function (res) {
      // console.log('res', res)
      // })
      // let that = this
      // that.$axios.post('http://wpa.qq.com/msgrd?v=3&uin=1043814457&site=qq&menu=yes').then(function (res) {
      // console.log('qqq', res)
      // })
    }
  }
}
</script>
<style scoped>
ul {
  list-style: none;
}
.clearfix:before,
.clearfix:after {
  display: table;
  content: '';
}
.clearfix {
  clear: both;
  zoom: 1;
}
.clearfix:after {
  clear: both;
}
.solutionCaseEdu .banner {
  width: 100%;
  height: 23.8rem;
  box-sizing: border-box;
  background-image: url(./../../../../assets/img/solutionCase/solutionCaseEdu/pro-allnet-banner.png);
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  text-align: left;
}
.solutionCaseEdu .banner p:first-child {
  font-size: 3rem;
  color: #ffffff;
  margin-bottom: 2rem !important;
}
.solutionCaseEdu .banner p:last-child {
  font-size: 1rem;
  color: #ffffff;
}
/* 第一部分*/
.title {
  color: #333333;
  font-size: 1.875rem;
}
.solutionCaseEdu .onePart{
  padding-top: 6.1875rem;
  display: flex;
  justify-content: center;
}
.solutionCaseEdu .onePart .onePartLeft{
  width: 15.9375rem;
  height: 9.5625rem;
  margin-right: 4.5rem;
  vertical-align: middle;
}
.solutionCaseEdu .onePart .onePartCenter{
  width: 34.125rem;
  height: 5rem;
  margin-right: 3.5625rem;
  vertical-align: baseline;
}
.solutionCaseEdu .onePart .onePartRight{
  padding-top: 2%;
  vertical-align: baseline;
}
/* 第二部分 */
.solutionCaseEdu .twoPart{
  padding-top: 6.1875rem;
}
.solutionCaseEdu .twoPart .cont{
  margin: 0 auto;
  margin-top: 3.6875rem;
  height: 58.9375rem;
  width: 59.1875rem;
  background-image: url(./../../../../assets/img/solutionCase/solutionCaseEdu/big.png);
  background-repeat: no-repeat;
  background-position: center;
}
/* 第三部分 */
.solutionCaseEdu .threePart{
  margin: 0 auto;
  padding-top: 6.1875rem;
}
.solutionCaseEdu .threePart .cont{
  margin-top: 3.6875rem;
}
.solutionCaseEdu .threePart .cont ul{
  margin: 0 auto;
  display: flex;
  justify-content: center;
}
.solutionCaseEdu .threePart .cont ul li{
  width: 16.875rem;
  height: 15.625rem;
  box-sizing: border-box;
  background-color: #fbfbfb;
  border-radius: 0.625rem;
  border: solid 0.0625rem #999999;
  color: #666666;
  font-size: 1.125rem;
  float: left;
  margin-right: 2.4375rem;
  padding: 2.5rem 2.75rem 0 2.75rem;
}
.solutionCaseEdu .threePart .cont ul li:last-child{
  margin-right: 0;
}
.solutionCaseEdu .threePart .cont .listItemTop{
  width: 3.625rem;
  height: 3.625rem;
  margin: 0 auto;
}
.solutionCaseEdu .threePart .cont .listItemBottomTitle{
  font-size: 1.25rem;
  margin-bottom: 1.06rem;
  margin-top: 1.5625rem;
}
.solutionCaseEdu .threePart .cont ul li:first-child .listItemBottomText{
  text-align: center;
}
.solutionCaseEdu .threePart .cont .listItemBottomText{
  text-align: left;
}
.solutionCaseEdu .threePart .cont ul li:hover{
  border: solid 0.0625rem #02004b;
  color: #02004b;
}
.solutionCaseEdu .threePart .cont .top1{
  background-image: url(./../../../../assets/img/solutionCase/solutionCaseEdu/three1.png);
  background-position: center;
  background-repeat: no-repeat;
}
.solutionCaseEdu .threePart .cont ul li:hover .top1{
  background-image: url(./../../../../assets/img/solutionCase/solutionCaseEdu/three1-blue.png);
}
.solutionCaseEdu .threePart .cont .top2{
  background-image: url(./../../../../assets/img/solutionCase/solutionCaseEdu/three2.png);
  background-position: center;
  background-repeat: no-repeat;
}
.solutionCaseEdu .threePart .cont ul li:hover .top2{
  background-image: url(./../../../../assets/img/solutionCase/solutionCaseEdu/three2-blue.png);
}
.solutionCaseEdu .threePart .cont .top3{
  background-image: url(./../../../../assets/img/solutionCase/solutionCaseEdu/three3.png);
  background-position: center;
  background-repeat: no-repeat;
}
.solutionCaseEdu .threePart .cont ul li:hover .top3{
  background-image: url(./../../../../assets/img/solutionCase/solutionCaseEdu/three3-blue.png);
}
.solutionCaseEdu .threePart .cont .top4{
  background-image: url(./../../../../assets/img/solutionCase/solutionCaseEdu/three4.png);
  background-position: center;
  background-repeat: no-repeat;
}
.solutionCaseEdu .threePart .cont ul li:hover .top4{
  background-image: url(./../../../../assets/img/solutionCase/solutionCaseEdu/three4-blue.png);
}
/* 第四部分 */
.solutionCaseEdu .forePart {
  padding-top: 6.25rem;
}
.solutionCaseEdu .forePart ul {
  margin-top: 3.6875rem;
  display: flex;
  justify-content: center;
}
.solutionCaseEdu .forePart ul li {
  float: left;
  width: 16.875rem;
  height: 9.375rem;
  background-color: #fbfbfb;
  border-radius: 0.625rem;
  border: solid 0.0625rem #999999;
  box-sizing: border-box;
  margin-right: 2.5rem;
  position: relative;
}
.solutionCaseEdu .forePart ul li .before {
  padding-top: 1.875rem;
}
.solutionCaseEdu .forePart ul li .before p {
  margin-top: 0.625rem;
}
.solutionCaseEdu .forePart ul li .after {
  background-position: center;
  background-size: cover;
  /* text-align: center; */
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  width: 16.875rem;
  height: 9.375rem;
  padding: 2rem 2.6875rem 0rem 1.9375rem;
  color: #fff;
  text-align: left;
  box-sizing: border-box;
  background-color: #02004b;
  margin-right: 1.625rem;
  border-radius: 0.625rem;
  border: solid 0.0625rem #02004b;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  transform-style: preserve-3d;
  transition: ease 250ms;
  overflow: hidden;
  background: #02004b;
  transform: rotateY(-90deg);
}
.solutionCaseEdu .forePart ul li:hover .after {
  transform: rotateY(0deg);
}
/* 第六部分 */
.oneSix {
  margin: 0 auto;
  padding-top: 6.25rem;
}
.oneSix > p {
  margin-bottom: 3.6875rem;
}
.sixCont {
  margin: 0 auto;
  width: 62.9375rem;
  height: 23.5rem;
}
.sixCont .fd {
  display: inline-block;
  float: left;
}
.sixCont .informaLeftBtn {
  width: 10rem;
  height: 3.125rem;
  background-color: #02004b;
  border-color: transparent;
  border-radius: 0.625rem;
  margin-right: 3.125rem;
}
.sixCont .informaRightBtn {
  display: inline-block;
  width: 10rem;
  height: 3.125rem;
  /* line-height: 3.125rem; */
  box-sizing: border-box;
  background-color: #fff;
  color: #333;
  border-radius: 0.625rem;
  border: solid 0.0625rem #02004b;
}
.sixCont .informaRightBtn:hover {
  color: #02004b;
}
</style>
<style>
</style>
