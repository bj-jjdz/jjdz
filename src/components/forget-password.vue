<template>
  <div class="container container-workorder-category">
    <el-steps :active="active" align-center finish-status="success">
      <el-step title="输入用户名"></el-step>
      <el-step title="重置密码"></el-step>
      <el-step title="完成"></el-step>
    </el-steps>
    <router-view v-on:chinldByValue="chinldByValue"></router-view>
  </div>
</template>

<script>
import stepOne from '@/components/offcial/forget-password/step-one'
import stepTwo from '@/components/offcial/forget-password/step-two'
import stepThree from '@/components/offcial/forget-password/step-three'
export default {
  components: {
    stepOne,
    stepTwo,
    stepThree
  },
  data () {
    return {
      active: 1
    }
  },
  methods: {
    chinldByValue (byactive) {
      this.active = byactive
      console.log(byactive, 'byactive')
    }
  },
  mounted () {
    console.log(this.stepOne)
  }
}
</script>

<style>
*{outline: none;}
.colorRad{
  color:#ff0000;
}
.container, .router-view{
  position: absolute;
  min-width: 80rem;
}
.container{
  width:100%;
  top:7rem;
  left:0;
  bottom: 0;
  background:#e8ecef;
  height:auto;
  overflow: hidden;
  z-index: 99;
  padding-top:3rem;
  background-image: url('../assets/img/login-inup/logo_gray.png');
  background-repeat: no-repeat;
  background-position-x: 50%;
}
.container-workorder-category .el-step__head.is-success{
  color:#02004b;
  border-color:#02004b;
}
.container-workorder-category .el-step__title.is-success{
  color:#02004b;
}
.container-workorder-category .el-step__head.is-process{
  color: #d1d3db;
  border-color: #d1d3db;
}
.el-step__title.is-process{
  font-weight: normal;
  font-size:1rem;
  color:#999999;
}
.container-workorder-category .el-step__title.is-success{
  color:#02004b;
}
</style>
