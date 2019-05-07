<template>
  <div class="stepThree">
    <div class="Success">
      <div class="SuccessIcon">
        <img src="../../../assets/img/login-inup/success.png">
      </div>
      <p class="successText">重置成功，请牢记新的密码！</p>
      <el-button type="primary" @click="next">
        <router-link to='/loginUp' class="login_in_img">前往登陆</router-link>
      </el-button>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      byactive: 1
    }
  },
  methods: {
    next () {
      this.$emit('chinldByValue', this.byactive)
      this.$router.push('/loginUp/')
    }
  }
}
</script>

<style>
.stepThree{
  margin: 5rem 30rem 0;
}
.el-button--primary{
  background-color: #02004b;
  border-radius: .625rem;
  width:96px;
  height:50px;
}
.el-form-item__label::before{
  content: '*';
  color:#f56c6c;
  margin-right:4px;
}
.formBtn{
  margin-top:2rem;
  text-align: left;
  position: relative;
}
.stepThree .SuccessIcon img{
  display: inline-block;
  width:2.625rem;
  height:2.625rem;
}
.stepThree .el-button--primary{
  margin-right:1.5rem;
  margin-top:2rem;
}
</style>
