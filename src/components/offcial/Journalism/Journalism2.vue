<template>
  <div class="journalism">
    <!-- 轮播图 -->
    <div class="banner">
    </div>
    <!-- 新闻内容 -->
    <div class="myDivPadding">
      <p class="myDivTitle-text">新闻公告</p>
    </div>
    <el-row>
      <el-col :span="5" :offset="5">
        <img :src="list[0].cover_img">
      </el-col>
      <el-col :span="8" class="oneConter">
        <div class="oneConter-leftImg" @click="jump">
          {{list[0].title}}
        </div>
        <div class="oneConter-rightText">
          <p>{{list[0].brief}}</p>
        </div>
      </el-col>
    </el-row>
    <el-row class="p-t-90">
      <el-col :span="5" :offset="5">
        <img :src="list[1].cover_img">
      </el-col>
      <el-col :span="8" class="oneConter">
        <div class="oneConter-leftImg">
          <a href="javascript:;">{{list[1].title}}</a>
        </div>
        <div class="oneConter-rightText">
          <p>{{list[1].brief}}</p>
        </div>
      </el-col>
    </el-row>
    <el-row class="p-t-90">
      <el-col :span="5" :offset="5">
        <img :src="list[2].cover_img">
      </el-col>
      <el-col :span="8" class="oneConter">
        <div class="oneConter-leftImg">
          <a href="javascript:;">{{list[2].title}}</a>
        </div>
        <div class="oneConter-rightText">
          <p>{{list[2].brief}}</p>
        </div>
      </el-col>
    </el-row>
    <el-row class="p-t-90">
      <el-col :span="5" :offset="5">
        <img :src="list[3].cover_img">
      </el-col>
      <el-col :span="8" class="oneConter">
        <div class="oneConter-leftImg">
          <a href="javascript:;">{{list[3].title}}</a>
        </div>
        <div class="oneConter-rightText">
          <p>{{list[3].brief}}</p>
        </div>
      </el-col>
    </el-row>
    <el-row class="p-t-90">
      <el-col :span="5" :offset="5">
        <img :src="list[4].cover_img">
      </el-col>
      <el-col :span="8" class="oneConter">
        <div class="oneConter-leftImg">
          <a href="javascript:;">{{list[4].title}}</a>
        </div>
        <div class="oneConter-rightText">
          <p>{{list[4].brief}}</p>
        </div>
      </el-col>
    </el-row>
    <el-row class="p-t-90 p-b-90">
      <el-col :span="5" :offset="5">
        <img :src="list[5].cover_img">
      </el-col>
      <el-col :span="8" class="oneConter">
        <div class="oneConter-leftImg">
          <a href="javascript:;">{{list[5].title}}</a>
        </div>
        <div class="oneConter-rightText">
          <p>{{list[5].brief}}</p>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import qs from 'qs'
export default {
  data () {
    return {
      list: []
    }
  },
  methods: {
    GetContent () {
      let that = this
      that.$axios.post(this.httpUrlSXS + 'jiujiangdongzhu/Home/New/new_list', qs.stringify()).then(function (res) {
        console.log(res, '5555')
        if (res.data.code === '200') {
          that.list = res.data.data
        }
      })
    },
    jump () {
      let that = this
      let data = {
        id: that.list.id
      }
      that.$axios.post(this.httpUrlSXS + 'jiujiangdongzhu/index.php/Home/New/new_info', qs.stringify(data)).then(function (res) {
      })
      this.$router.push('/Newsdetail')
    }
  },
  mounted () {
    this.GetContent()
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
.journalism .banner{
  width: 100%;
  height: 25rem;
  box-sizing: border-box;
  background-image: url('./../../../assets/img/Journalism/banner.png');
  background-size: 100% 100%;
  text-align: center;
  padding: 9.125rem 0  9.25rem 23rem;
}
.journalism img{
  width:18.75rem;
  height:11rem;
}
.oneConter .oneConter-leftImg{
  width:24.0625rem;
  overflow:hidden;
  text-overflow:ellipsis;
  white-space:nowrap;
  text-align: left;
}
.oneConter .oneConter-leftImg a{
  font-size: 1.25rem;
  letter-spacing: .0625rem;
  text-align: left;
  color:#02004b;
}
.oneConter .oneConter-rightText{
  font-size: 1rem;
  font-weight: normal;
  line-height: 1.5rem;
  color:#666666;
  margin-top:1.6875rem;
  text-align: left;
  text-indent: 2em;
}
.oneConter .oneConter-rightText p{
  height:4.2rem;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  overflow: hidden;
}
</style>

<style>
.journalism .myDivPadding{
  padding: 6.25rem 22.5625rem 6.8125rem 22.5rem;
}
.journalism .myDivTitle-text{
  font-size: 1.875rem;
  font-family: PingFang-SC-Medium;
  font-weight: normal;
  font-stretch: normal;
  letter-spacing: .09375rem;
  color:#333333;
}
.p-b-30{
  padding-bottom: 1.875rem;
}
.p-b-90{
  padding-bottom: 5.625rem;
}
.p-t-90{
  padding-top: 5.625rem;
}
</style>
