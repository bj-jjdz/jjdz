<template>
  <div class='register'>
    <el-row :gutter='20' class='registerTop'>
      <el-col :span='8' :offset='8'><div class='titleLeft'>注册九江东注会员账号</div></el-col>
      <el-col :span='4' :offset='4'><div class='titleRight'>已有账户，去<router-link to='/loginUp'  class='loginIn' style='color:#02004b' >登陆</router-link></div></el-col>
    </el-row>
    <div class='registerBottom'>
      <el-form :model='ruleForm' :rules='rules' ref='ruleForm' label-width='150px' class='demo-ruleForm'>
        <div style="width:30rem">
          <el-form-item label='手机号码:' prop='mobile'>
            <el-input v-model="ruleForm.mobile" placeholder='手机号作为登录账号' maxlength='13'></el-input>
          </el-form-item>
        </div>
        <div style="width:30rem">
          <el-form-item label='设置密码:' prop='pass'>
            <el-input type='password' v-model="ruleForm.pass" autocomplete='off' placeholder='请输入6到20位密码,使用至少两种字符组合' show-password></el-input>
          </el-form-item>
        </div>
        <div style="width:30rem">
          <el-form-item label='确认密码:' prop='checkPass'>
            <el-input type='password' v-model="ruleForm.checkPass" autocomplete='off' placeholder='请再次输入密码' show-password></el-input>
          </el-form-item>
        </div>
        <div style="width:30rem;margin-left:1.5rem">
          <el-form-item v-if="slider === '0'">
            <div class="slider">
              <span style="position: absolute;left:35%;top:28%;z-index:1000">滚动滑块验证</span>
              <el-slider v-model="sliderText" :show-tooltip="false" @change='sliderBtn'></el-slider>
            </div>
          </el-form-item>
        </div>
        <div style="width:30rem">
          <el-form-item v-if="slider === '1'" label="短信验证码验证:" prop="verification" class="verification">
            <div style="display:flex">
              <el-input class="verificationCode" v-model="ruleForm.verification" placeholder='请输入验证码'></el-input>
              <el-button class="lastCont" :disabled="isDisabled" @click="setTime">{{buttonName}}</el-button>
            </div>
          </el-form-item>
        </div>
        <div style="width:30rem">
          <el-form-item style="display:inline">
          <!-- `checked` 为 true 或 false -->
            <el-checkbox v-model="checked" style="display:inline;margin-right:0">阅读并接受</el-checkbox><span style='color:#02004b;cursor: pointer'>《九江东注网站服务协议》</span>
          </el-form-item>
        </div>
        <div style="width:30rem">
          <el-form-item>
            <el-button type='primary' class='nowRegister' @click=submitForm() v-loading.fullscreen.lock="fullscreenLoading">立即注册</el-button>
          </el-form-item>
        </div>
      </el-form>
    </div>
  </div>
</template>
<script>
import qs from 'qs'
export default {
  data () {
    var checkAge = (rule, value, callback) => {
      console.log('手机号', value)
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
    var validatePass = (rule, value, callback) => {
      console.log('密码1', value)
      if (value === '') {
        callback(new Error('请输入密码'))
      } else {
        if (this.ruleForm.checkPass !== '') {
          this.$refs.ruleForm.validateField('checkPass')
        } else if (!(/^(?![\d]+$)(?![a-zA-Z]+$)(?![!#$%^&*]+$)[\da-zA-Z!#$%^&*]{6,20}$/.test(value))) {
          callback(new Error('请输入6到20位密码，至少两种字符组合'))
        }
        callback()
      }
    }
    var validatePass2 = (rule, value, callback) => {
      console.log('密码2', value)
      if (value === '') {
        callback(new Error('请再次输入密码'))
      } else if (value !== this.ruleForm.pass) {
        callback(new Error('两次输入密码不一致!'))
      } else {
        callback()
      }
    }
    return {
      ruleForm: {
        lase: '',
        pass: '',
        checkPass: '',
        mobile: '',
        verification: '',
        times: '',
        nonces: '',
        sign: ''
      },
      rules: {
        pass: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          { validator: validatePass, trigger: 'blur' }
        ],
        checkPass: [
          { required: true, message: '请再次输入密码', trigger: 'blur' },
          { validator: validatePass2, trigger: 'blur' }
        ],
        mobile: [
          { required: true, message: '请输入手机号', trigger: 'blur' },
          { validator: checkAge, trigger: 'blur' }
        ],
        verification: [
          { required: true, message: '请输入验证码', trigger: 'blur' }
        ]
      },
      checked: false,
      // 是否通过验证的标志
      success: false,
      distance: '',
      sliderText: '',
      slider: '0',
      // 倒计时
      buttonName: '',
      isDisabled: false,
      time: 60,
      // 蒙层
      fullscreenLoading: false
    }
  },
  methods: {
    submitForm () {
      console.log(this.ruleForm, 'submitForm')
      if (this.ruleForm.mobile === '' || this.ruleForm.pass === '' || this.ruleForm.checkPass === '') {
        this.$message.error({message: '注意：有未填项'})
        return
      }
      let that = this
      let mobile = this.ruleForm.mobile
      let pass = this.ruleForm.pass
      let verification = this.ruleForm.verification
      let last = this.last
      that.$axios.post(this.httpUrlRSS + 'jiujiangdongzhu/Home/Register/register', qs.stringify({'mobile': mobile, 'password': pass, 'verify': verification, 'last': last})).then(function (res) {
        console.log('注册', res)
        if (res.data.code === '200') {
          that.$message({
            type: 'success',
            message: '注册成功 自动跳转登陆页面'
          })
          that.fullscreenLoading = true
          setTimeout(() => {
            that.fullscreenLoading = false
          }, 2000)
          that.$router.push({path: '/loginUp'})
        } else if (res.data.code === '201') {
          that.$message.error('注册失败')
          that.$router.go(0)
        } else if (res.data.code === '202') {
          that.$message.error('验证码已过期，注册失败')
        } else if (res.data.code === '203') {
          that.$message.error('验证码错误，注册失败')
        } else if (res.data.code === '204') {
          that.$message.error('该手机已注册，注册失败')
        }
      })
    },
    // 倒计时
    setTime () {
      this.sliderBtn()
      this.isDisabled = true
      this.time = 60
    },
    sliderBtn () {
      let that = this
      let signs = 'AccessKey=jjdz' + '&mobile=' + that.ruleForm.mobile + '&nonce=' + that.nonces + '&t=' + that.times + '&SecretKey=d01ecfe4e9a7280a4681e3ef6592b7a1'
      this.sign = this.$md5(signs).toUpperCase()
      let data = {
        mobile: this.ruleForm.mobile,
        t: that.times,
        nonce: that.nonces,
        sign: that.sign,
        type: 2
      }
      console.log('手机号：', this.ruleForm)
      if (this.ruleForm.mobile === '' || this.ruleForm.pass === '' || this.ruleForm.checkPass === '') {
        this.$message.error({message: '注意：有未填项'})
        return
      }
      if (this.sliderText > 90) {
        this.$message({
          type: 'success',
          message: '验证成功!'
        })
        that.$axios.post(this.httpUrlRSS + 'jiujiangdongzhu/Home/Register/register_duanxin', qs.stringify(data)).then(function (res) {
          if (res.data.status === 'OK') {
            that.last = res.data.last
            that.$message({
              type: 'success',
              message: '发送信息成功!'
            })
            that.slider = '1'
            let interval = window.setInterval(function () {
              that.isDisabled = true
              that.buttonName = '重新发送（' + that.time + '）'
              --that.time
              if (that.time < 0) {
                that.isDisabled = false
                that.buttonName = '重新发送'
                that.buttonName.style = 'background:#fff'
                that.time = 60
                window.clearInterval(interval)
              }
            }, 1000)
          } else if (res.data.status === 'NG') {
            that.$message({
              type: 'info',
              message: res.data.msg
            })
          } else {
            that.$message({
              type: 'info',
              message: res.data.msg
            })
          }
        })
      } else {
        this.sliderText = 0
        this.$message({
          type: 'info',
          message: '请重试!'
        })
      }
    }
  },
  mounted () {
    this.times = Math.round(new Date().getTime() / 1000).toString()
    this.nonces = Math.round(Math.random() * 1000000) + Math.ceil(Math.random() * 100) + Math.floor(Math.random() * 10)
  }
}
</script>
<style scoped>
.register{
  width: 100%;
  height: 40.1rem;
  box-sizing: border-box;
  background-color: #fff;
  background-image:url(../../../assets/img/login-inup/logo_gray.png);
  background-repeat: no-repeat;
  background-position: center;
  background-position-y: 10%;
  padding: 4rem 23rem 4rem 23rem;
}
.registerTop{
  box-sizing: border-box;
  padding-bottom: 2rem;
  border-bottom: #d7d7d7 1px solid;
}
.registerTop .titleLeft{
  font-size: 1.75rem;
  color: #333333;
}
.registerTop .titleRight{
  font-size: 1rem;
  color: #333333;
  text-align: center;
  margin-top: 0.6rem;
}
.loginIn:hover{
  cursor: pointer;
}
.registerBottom{
  box-sizing: border-box;
  margin: 0 auto;
  text-align: center;
  padding: 4rem 0rem 0rem 0rem;
  display: flex;
  justify-content: center;
}
.registerBottom .nowRegister{
  width: 18rem;
  height: 3rem;
  background-color: #ff0000;
  border-radius: 10px;
  border: none;
}
/* 滑块 */
.registerBottom .drag{
    width: 300px;
    height: 40px;
    line-height: 40px;
    background-color: #e8e8e8;
    position: relative;
    margin:0 auto;
}
.registerBottom .bg{
    width:40px;
    height: 100%;
    position: absolute;
    background-color: #75CDF9;
}
.registerBottom .text{
    position: absolute;
    width: 100%;
    height: 100%;
    text-align: center;
    user-select: none;
}
.registerBottom .btn{
    width:40px;
    height: 38px;
    position: absolute;
    border:1px solid #ccc;
    cursor: move;
    font-family: '宋体';
    text-align: center;
    background-color: #fff;
    user-select: none;
    color:#666;
}
/* 以上可以删除 */
.slider{
  position: relative;
}
</style>
<style>
.registerBottom .el-input__inner{
  background-color: #f8f8f8;
}
.registerBottom .el-slider__runway{
  width: 19rem;
  height: 3rem;
  box-sizing: border-box;
  background-color: #d9d9d9;
}
.registerBottom  .el-slider__bar{
  width: 19rem;
  height: 3rem;
  background-color: #d9d9d9;
}
.registerBottom .el-slider__button-wrapper{
  width: 3rem;
  height: 3rem;
  box-sizing: border-box;
  background-color: #fff;
  border-radius: 0rem 0rem 0rem 0rem;
  border: solid 0.1rem #d2d2d2;
  top: 0rem;
  left: 0;
}
.registerBottom .el-slider__button{
  width: 0px;
  height: 0px;
  border-radius: 0;
  color: #333;
  background: transparent;
  border-top: 0.6rem solid transparent;
  border-right: 0.6rem solid transparent;
  border-bottom: 0.6rem solid transparent;
  border-left: 0.8rem solid #333;
  margin-left: 1rem;
  /* content: "\e613" */
}
.verification .verificationCode{
  width: 67%;
  display: inline-block;
  margin: 0;
}
.verification .verificationCode .el-input__inner{
  width: 100%;
  /* border-right:none;
  border-right-color: transparent; */
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  display: inline;
  margin: 0;
}
.verification .lastCont {
  width: 32.8%;
  display: inline-block;
  margin: 0;
}
.verification .el-button{
  width: 32.8%;
  margin: 0;
  font-size: .625rem;
  border: solid 0.04rem #DCDFE6;
  border-left: none;
  border-left-color: transparent;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  background-color:#f1f1f2;
  display: inline;
  padding: 0;
  padding-left: 0.3rem
}
</style>
