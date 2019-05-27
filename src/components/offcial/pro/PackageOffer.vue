<template>
  <div class="PackageOffer">
    <div class="banner">
      <p>套餐报价</p>
      <p>不要徘徊不定哦！这里就是你想知道的，赶快查询吧</p>
    </div>
    <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
      <el-row>
        <el-col :span="5" :offset="5">
          <el-form-item label="公司名称" prop="name">
            <el-input v-model="ruleForm.name" autocomplete="off"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="5" :offset="1">
          <el-form-item label="联系人" prop="names">
            <el-input v-model="ruleForm.names" autocomplete="off"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="5" :offset="5">
          <el-form-item label="电话" prop="phone">
            <el-input v-model.number="ruleForm.phone"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="6" :offset="1">
          <el-row>
            <el-col :span="20">
              <el-form-item label="验证码" prop="Vcode" hide-required-asterisk="true">
                <el-input v-model="ruleForm.Vcode"  placeholder="点击获取验证码"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="3" :offset="1">
              <img :src='imgSrc'
                   style="width:84px;height:40px;"
                   @click="foucesClick">
            </el-col>
          </el-row>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="5" :offset="8">
          <el-form-item>
            <el-button type="primary" @click="submitForm('ruleForm')" class="checkBtn">点击咨询</el-button>
          </el-form-item>
        </el-col>
      </el-row>
    </el-form>
  </div>
</template>

<script>
import qs from 'qs'
export default {
  data () {
    var checkPhone = (rule, value, callback) => {
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
    return {
      imgSrc: '',
      ruleForm: {
        pass: '',
        checkPass: '',
        age: ''
      },
      rules: {
        name: [
          { required: true, message: '请输入公司名称', trigger: 'blur' },
          { min: 3, max: 15, message: '长度在 3 到 15 个字符', trigger: 'blur' }
        ],
        names: [
          { required: true, message: '请输入联系人', trigger: 'blur' },
          { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
        ],
        phone: [
          {required: true, message: '请输入手机号', trigger: 'blur'},
          {validator: checkPhone, trigger: 'blur'}
        ],
        Vcode: [
          {required: true, message: '请输入验证码'}
          // { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    submitForm (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          let that = this
          let data = {
            phone: that.ruleForm.phone,
            company: that.ruleForm.names,
            name: that.ruleForm.name,
            verification: that.ruleForm.Vcode,
            combo: this.$route.params.combo
          }
          that.$axios.post(this.httpUrlWMK + 'jiujiangdongzhu/Home/Price/Consult', qs.stringify(data)).then(function (res) {
            if (res.data.state === '200') {
              that.$message({
                type: 'success',
                message: res.data.meg
              })
            } else if (res.data.state === '401') {
              that.$message({
                type: 'error',
                message: res.data.meg
              })
            } else if (res.data.state === '402') {
              that.$message({
                type: 'error',
                message: res.data.meg
              })
            }
          })
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    foucesClick () {
      let that = this
      that.$axios.post(this.httpUrlWMK + 'jiujiangdongzhu/Home/Price/Verification', qs.stringify()).then(function (res) {
        this.imgSrc = 'http://192.168.1.184/jiujiangdongzhu/Home/Price/Verification'
      })
    }
  },
  mounted () {
    this.imgSrc = 'http://192.168.1.184/jiujiangdongzhu/Home/Price/Verification'
  }
}
</script>

<style scoped>
.demo-ruleForm{
  margin-top:6.25rem;
  margin-bottom: 6.24rem;
}
.PackageOffer .banner{
  width: 120rem;
  height: 25rem;
  text-align: center;
  box-sizing: border-box;
  padding-top: 9.1875rem;
  color: #fff;
  background-image: url(../../../assets/img/pro-allnet/offerBanner.png);
  background-repeat: no-repeat;
}
.PackageOffer .banner p:first-child{
  font-size: 3.75rem;
}
.PackageOffer .banner p:last-child{
  margin-top: 1.8125rem;
  font-size: 1.025rem;
}
.demo-ruleForm .checkBtn{
  margin-top: 6.25rem;
  width: 11.625rem;
  height: 3.5rem;
  background-color: #02004b;
  border-radius: .625rem;
  border-color: transparent;
}
</style>
