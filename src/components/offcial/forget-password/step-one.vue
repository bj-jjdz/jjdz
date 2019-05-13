<template>
  <div class="stepOne">
    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="130px" class="demo-ruleForm">
      <el-form-item label="请输入账户名:" prop="name">
        <el-input v-model.number="ruleForm.name"
                  placeholder="请输入您的手机号"></el-input>
      </el-form-item>
      <el-form-item label="请输入短信验证:" prop="SMSVFtion">
        <el-input v-model.number="ruleForm.SMSVFtion"
                  class="MyInput"
                  placeholder="请输入六位验证码">
          <el-button slot="append" class="FSyanzhen" @click="VerificationCode" v-model="ruleForm.verification">发送验证</el-button>
          <!-- <el-button class="lastCont" :disabled="isDisabled" @click="setTime">{{buttonName}}</el-button> -->
        </el-input>
      </el-form-item>
      <el-form-item class="formBtn">
        <el-button type="primary" @click="submitForm('ruleForm')">下一步</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import qs from 'qs'
export default {
  data () {
    var checkAge = (rule, value, callback) => {
      console.log('手机号', value)
      setTimeout(() => {
        if (!(/^1(3|5|6|7|8|9)\d{9}$/.test(value))) {
          callback(new Error('请输入正确手机号'))
        } else if (value.lenght > 13) {
          callback(new Error('请输入正确手机号'))
        } else {
          callback()
        }
      }, 500)
    }
    return {
      byactive: 2,
      buttonName: '',
      isDisabled: false,
      time: 60,
      ruleForm: {
        name: '',
        SMSVFtion: '',
        times: '',
        nonces: '',
        sign: ''
      },
      rules: {
        name: [
          {required: true, message: '请输入用户名', trigger: 'blur'},
          {type: 'number', message: '验证码必须为数字值'},
          { validator: checkAge, trigger: 'blur' }
          // { len: '12', message: '请输入有效手机号', trigger: 'blur' }
        ],
        SMSVFtion: [
          {required: true, message: '验证码不能为空'},
          {type: 'number', message: '验证码必须为数字值'}
        ]
      }
    }
  },
  methods: {
    submitForm (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.$emit('chinldByValue', this.byactive)
          let that = this
          let data = {
            mobile: that.ruleForm.name,
            verify: that.ruleForm.SMSVFtion
          }
          that.$axios.post(this.httpUrlRSS + '/jiujiangdongzhu/Home/Register/contrast', qs.stringify(data)).then(function (res) {
            if (res.data.status === '200') {
              that.$message({
                type: 'success',
                message: res.data.message
              })
              this.$router.push('/forgetPassword/stepTwo/')
              // this.$router.push({
              //   name: 'stepTwo',
              //   params: {
              //     mobile: that.ruleForm.name
              //   }
              // })
            } else if (res.data.status === '201') {
              that.$message({
                type: 'info',
                message: res.data.message
              })
            } else {
              that.$message({
                type: 'info',
                message: res.data.message
              })
            }
          })
        } else {
          this.$message.error({message: '注意：有未填项'})
          return false
        }
      })
    },
    // 倒计时
    // setTime () {
    //   this.VerificationCode()
    //   this.isDisabled = true
    //   this.time = 60
    // },
    // 验证码
    VerificationCode () {
      let that = this
      let signs = 'AccessKey=jjdz' + '&mobile=' + that.ruleForm.name + '&nonce=' + that.nonces + '&t=' + that.times + '&SecretKey=d01ecfe4e9a7280a4681e3ef6592b7a1'
      this.sign = this.$md5(signs).toUpperCase()
      console.log(that.ruleForm.name)
      console.log(signs)
      let data = {
        mobile: that.ruleForm.name,
        t: that.times,
        nonce: that.nonces,
        sign: that.sign,
        type: 1
      }
      that.$axios.post(this.httpUrlRSS + 'jiujiangdongzhu/Home/Register/register_duanxin', qs.stringify(data)).then(function (res) {
        if (res.data.status === 'OK') {
          that.$message({
            type: 'success',
            message: '发送信息成功!'
          })
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
    }
  },
  mounted () {
    this.times = Math.round(new Date().getTime() / 1000).toString()
    this.nonces = Math.round(Math.random() * 1000000) + Math.ceil(Math.random() * 100) + Math.floor(Math.random() * 10)
  }
}
</script>

<style>
.stepOne{
  margin: 5rem 30rem 0;
}
.container .el-button--primary{
  background-color: #02004b;
  border-radius: .625rem;
  width:96px;
  height:50px;
}
.container .el-form-item__label::before{
  content: '*';
  color:#f56c6c;
  margin-right:4px;
}
.container .formBtn{
  margin-top:2rem;
  text-align: left;
  position: relative;
}
</style>
