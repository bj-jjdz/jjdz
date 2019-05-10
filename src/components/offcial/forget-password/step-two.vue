<template>
  <div class="stepTwo">
    <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
      <el-form-item label="密码" prop="pass">
        <el-input type="password" v-model="ruleForm.pass" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="确认密码" prop="checkPass">
        <el-input type="password" v-model="ruleForm.checkPass" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
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
        if (!(/^1(3|4|5|7|8)\d{9}$/.test(value))) {
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
      byactive: 3,
      ruleForm: {
        pass: '',
        checkPass: '',
        age: ''
      },
      rules: {
        pass: [
          { validator: validatePass, trigger: 'blur' }
        ],
        checkPass: [
          { validator: validatePass2, trigger: 'blur' }
        ],
        age: [
          { validator: checkAge, trigger: 'blur' }
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
          let mobile = that.$route.params.mobile
          let data = {
            mobile: mobile,
            password: this.ruleForm.checkPass
          }
          that.$axios.post(this.httpUrlRSS + '/jiujiangdongzhu/Home/Register/forget_pass', qs.stringify(data)).then(function (res) {
            if (res.data.status === '200') {
              this.$message({
                type: 'success',
                message: res.data.message
              })
              this.$router.push({path: '/forgetPassword/stepThree'})
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
          this.$router.push('/forgetPassword/stepThree/')
        } else {
          this.$message.error({message: '注意：有未填项'})
          return false
        }
      })
    }
  }
}
</script>

<style>
.stepTwo{
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
