<template>
  <div class="loginUp">
    <el-row>
      <el-col :span="10" :offset="1" class="textImage-image">
        <div class="textImage-text">
          <p class="textImage-text-title">客户的共同选择</p>
          <p class="textImage-text-item">2019九江东注陪伴您</p>
          <p class="textImage-text-item">高性能、高可用性、高性价比的产品</p>
          <p class="textImage-text-item">一站式解决您所遇到的问题，让您更轻松方便</p>
        </div>
      </el-col>
      <el-col :span="10">
        <div class="login-form  log-account">
          <form id='fm1' method="post">
            <h2>账户登陆</h2>
            <!-- 登陆输入框 -->
            <div class="landing-content pad49">
              <!-- 用户名 -->
              <div class="clearfix">
                <span></span>
              </div>
              <div class="account">
                <!-- <input id="username" name="username" tabindex="1" placeholder="企业账户" type="text" value> -->
                <el-input placeholder="企业账户" v-model="username" class="input-with-select" prefix-icon="el-icon-lock">
                  <el-select v-model="select" slot="prepend" style="width:5rem;border:0px;">
                    <el-option label="个人账户" value="0"></el-option>
                    <el-option label="企业账户" value="1"></el-option>
                  </el-select>
                </el-input>
              </div>
              <!-- 密码 -->
              <div class="password clearfix">
                <div class="password_clearfix">
                  <span></span>
                </div>
                <!-- <input id="password" name="password" tabindex="2" type="password" value size="25" autocomplete="off" placeholder="请输入您的密码"> -->
                <el-input
                  placeholder="请输入您的密码"
                  prefix-icon="el-icon-lock"
                  v-model="password"
                  type="password">
                </el-input>
              </div>
              <!-- 登陆按钮 -->
              <input type="button" class="immediately" onclick="Loigin();" value="登陆">
              <!-- 跳转注册账号---忘记密码 -->
              <div class="functionality clearfix">
                <div class="register">
                  <span>没有账号?</span>
                  <a href="javascript:;">立即注册</a>
                </div>
                <div class="forget">
                  <router-link to='/forgetPassword' class="dd1">忘记密码</router-link>
                </div>
              </div>
            </div>
          </form>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data () {
    return {
      username: '',
      password: '',
      select: '1'
    }
  }
}
</script>

<style>
/* 左边背景图、宣传语 */
.loginUp{
  background-image: url('../../../assets/img/login-inup/bj.png');
  background-size: 100% 100%;
  width:100%;
  height:100%;
  background-repeat: no-repeat;
}
.loginUp .textImage-image{
  margin-top: 10rem;
  background-image: url('../../../assets/img/login-inup/logo_blue.png');
  background-repeat: no-repeat;
  background-size: 60% 80%;
  height: 40rem;
  background-position: right top;
  color:#e6e6e6;
}
.loginUp .textImage-text{
  text-align: left;
  margin-left: 11.5rem;
  margin-top: 12.5rem;
}
.loginUp .textImage-text-title{
  font-size: 1.7rem;
  margin-bottom: 1.725rem;
}
.loginUp .textImage-text-item{
  font-size: 1.15rem;
  margin-top: .725rem;
}
/* 登陆模块、输入框 */
.loginUp .log-account{
  width: 25rem;
  padding: .4375rem 0 2.875rem;
  background-color: #fff;
  margin-top: 10rem;
  float: right;
  border-radius: 5%;
}
.loginUp .log-account h2{
  font-size:1.25rem;
  line-height: 4.875rem;
  color: #000;
  text-align: center;
  font-weight: bold;
}
.loginUp .log-account .pad49{
  padding: 0 3.0625rem 0 2.75rem;
}
.loginUp .log-account .landing-content .account{
  margin-bottom: 1.75rem;
  height:2.5rem;
}
.loginUp .log-account .landing-content .account input{
  font-size:.875rem;
  width:14.375rem;
  height:2.375rem;
  line-height: 2.375rem;
  padding: 0 0 0 .5rem;
  border:1px solid #e0e0e0;
  border-radius: .3125rem;
  color:#333;
}
/* 密码框 */
.loginUp .log-account .landing-content .password{
  margin-bottom: 1.75rem;
  height:2.5rem;
}
.loginUp .log-account .landing-content .password input{
  font-size:.875rem;
  width:100%;
  height:2.375rem;
  line-height: 2.375rem;
  padding: 0 0 0 .5rem;
  border:1px solid #e0e0e0;
  border-radius: 0;
  color:#333;
}
.loginUp .log-account .landing-content .clearfix input{
  float: left;
}
/* 确认按钮 */
.loginUp .log-account .landing-content .immediately{
  height:3.375rem;
  line-height:2.375rem;
  text-align: center;
  background:#ff0000;
  border: 1px solid #ff0000;
  display: inline-block;
  padding:0 2.875rem;
  border-radius: .3125rem;
  color:#fff;
  cursor: pointer;
  width:100%;
  margin-bottom: 1.5rem;
  outline: none;
}
/* 注册跳转、忘记密码 */
.loginUp .log-account .landing-content .clearfix .register{
  font-size: .75rem;
  float: left;
}
.loginUp .log-account .landing-content .functionality a{
  color:#3db1ea;
  font-size: .75rem;
  line-height: 1rem;
  height:1rem;
}
.loginUp .log-account .landing-content .clearfix .forget{
  float: right;
}
.el-icon-arrow-up:before{
  content: ''  !important;
}
.loginUp .log-account .landing-content .account input{
  width: 100%;
}
.loginUp .log-account .landing-content .account .el-input__inner{
  border-radius: 0;
  border-left:0;
}
.input-with-select .el-input-group__prepend {
  background-color: #fff;
}
.el-input-group{
  width:100%;
}
.el-scrollbar__wrap{
  overflow-y: visible !important;
}
.el-select-dropdown__item{
  width:7.5rem;
  margin-bottom: 1rem;
}
.loginUp .log-account .landing-content .clearfix>span{
  width:1.375rem;
  height:1.375rem;
  background-position: -46px 50px;
  margin:10px 0 0 -30px;
  background:url('../../../assets/img/login-inup/master.png') no-repeat;
  float: left;
}
.loginUp .log-account .landing-content .clearfix .password_clearfix span{
  width:1.375rem;
  height:1.375rem;
  background-position: -46px 50px;
  margin:10px 0 0 -30px;
  background:url('../../../assets/img/login-inup/password.png') no-repeat;
  float: left;
}
</style>
