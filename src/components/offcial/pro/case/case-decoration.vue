<template>
  <div class="caseDecoration">
    <div>
      <div class="banner">
        <p>装修行业</p>
        <p>一个好的装修，就是一件美的艺术品</p>
      </div>
      <div class="cont">
        <div class="list">
          <ul>
            <li v-for="(item, index) in proList" :key="index">
              <div class="listItem">
                <img  class="listBg" :src="item.company_cover" alt="">
                <div class="listDetail">
                  <div class="listDCont">
                    <img :src="item.company_logo" alt="">
                    <p class="listDContText">{{item.company_name}}</p>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import qs from 'qs'
export default {
  data () {
    return {
      proList: []
    }
  },
  created () {
    console.log('zhizhizhi=======>', this.$route.query.industry)
    let that = this
    that.$axios.post(this.httpUrlWMK + 'jiujiangdongzhu/Home/Cover/CoverList', qs.stringify({'industry': this.$route.query.industry})).then(function (res) {
      console.log('ooooooooo', res)
      if (res.data.code === '200') {
        that.proList = res.data.data
      } else if (res.data.code === '500') {
        that.$message.error({message: '内部错误提示服务忙碌,即将返回首页'})
        // that.$router.push('/')
      }
    })
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
.title{
  color: #333333;
  letter-spacing: .125rem;
  font-size: 1.875rem;
}
.caseDecoration{
  padding-bottom: 6.25rem;
}
.caseDecoration .banner{
  width: 100%;
  height: 25rem;
  box-sizing: border-box;
  background-image: url('./../../../../assets/img/case/caseDecoration/banner.png');
  background-size: cover;
  text-align: left;
  padding: 9.125rem 0  9.25rem 23rem;
}
.caseDecoration .banner p:first-child{
  font-size: 3rem;
  color: #ffffff;
  margin-bottom: 2rem;
}
.caseDecoration .banner p:last-child{
  font-size: 1rem;
  color: #ffffff;
}
.caseDecoration .cont{
  margin:  0 auto;
  padding: 6.625rem 0rem 26.875rem 0rem;
}
.caseDecoration .cont .list{
  margin: 0 auto;
  display: flex;
  justify-content: center;
}
.caseDecoration .cont .list ul li{
  float: left;
  width: 17.0625rem;
  height: 17.9375rem;
  box-sizing:unset;
  margin-right: 1.875rem;
  border-radius: 0.9375rem;
  background: transparent;
}
.caseDecoration .cont .list ul li:last-child{
  margin-right: 0;
}
.caseDecoration .cont .listItem{
  position: relative;
}
.caseDecoration .cont .list .listBg{
  margin: 0 auto;
  width: 17.5rem;
  height: 18.3rem;
}
.caseDecoration .cont .list .listDetail{
  width: 16.76rem;
  height: 9.125rem;
  margin: 0 auto;
  background-color: #efefef;
  border-radius: 0 0 0.875rem 0.875rem;
  box-sizing: border-box;
  padding-top: 1.6875rem;
  position: absolute;
  left: 0.374rem;
  bottom: 0;
  display: none;
}
.caseDecoration .cont .list .listItem:hover .listDetail{
  display: block;
}
.caseDecoration .cont .list .listDContText{
  font-size: 1rem;
  color: #333333;
  box-sizing: border-box;
  margin-top: 0.4375rem;
}
</style>
<style>
</style>
