<template>
  <div class="caseHotel">
    <div>
      <div class="banner">
        <p>酒店民宿</p>
        <p>帮您实现线上酒店预定，酒店管理，客户管理的移动民宿酒店网站</p>
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
    console.log('zhizhizhi=======>', this.$route.query)
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
.caseHotel{
  padding-bottom: 6.25rem;
}
.caseHotel .banner{
  width: 100%;
  height: 25rem;
  box-sizing: border-box;
  background-image: url('./../../../../assets/img/case/caseHotel/banner.png');
  background-size: cover;
  text-align: left;
  padding: 9.125rem 0  9.25rem 23rem;
}
.caseHotel .banner p:first-child{
  font-size: 3rem;
  color: #ffffff;
  margin-bottom: 2rem;
}
.caseHotel .banner p:last-child{
  font-size: 1rem;
  color: #ffffff;
}
.caseHotel .cont{
  margin:  0 auto;
  padding: 6.625rem 0rem 26.875rem 0rem;
}
.caseHotel .cont .list{
  margin: 0 auto;
  display: flex;
  justify-content: center;
}
.caseHotel .cont .list ul li{
  float: left;
  width: 17.0625rem;
  height: 17.9375rem;
  box-sizing:unset;
  margin-right: 1.875rem;
  border-radius: 0.9375rem;
  background: transparent;
}
.caseHotel .cont .list ul li:last-child{
  margin-right: 0;
}
.caseHotel .cont .listItem{
  position: relative;
}
.caseHotel .cont .list .listBg{
  margin: 0 auto;
  width: 17.5rem;
  height: 18.3rem;
}
.caseHotel .cont .list .listDetail{
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
.caseHotel .cont .list .listItem:hover .listDetail{
  display: block;
}
.caseHotel .cont .list .listDContText{
  font-size: 1rem;
  color: #333333;
  box-sizing: border-box;
  margin-top: 0.4375rem;
}
</style>
<style>
</style>
