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
          <el-button slot="append" class="FSyanzhen" @click="VerificationCode">发送验证</el-button>
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
        if (!(/^1(3|4|5|6|7|8)\d{9}$/.test(value))) {
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
      ruleForm: {
        name: '',
        SMSVFtion: ''
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
          this.$router.push('/forgetPassword/stepTwo/')
        } else {
          this.$message.error({message: '注意：有未填项'})
          return false
        }
      })
    },
    // 验证码
    VerificationCode () {
      let that = this
      let data = {
        mobile : that.ruleForm.name
      }
      that.$axios.post(this.httpUrlRSS + 'jiujiangdongzhu/Home/Register/register_duanxin', qs.stringify(data)).then(function (res) {
        if (res.data.status === 'OK') {
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
            message: '该手机号已注册!'
          })
        } else {
          that.$message({
            type: 'info',
            message: '失败，请重试!'
          })
        }
      })
    }
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
