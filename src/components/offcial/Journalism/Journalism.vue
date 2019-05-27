<template>
  <div class="journalism">
    <!-- 轮播图 -->
    <div class="banner">
    </div>
    <!-- 新闻内容 -->
    <div class="myDivPadding">
      <p class="myDivTitle-text">新闻公告</p>
    </div>
    <div v-for="item in list" :key="item.index">
      <el-row class="myDivConterDivBoxs">
        <el-col :span="5" :offset="6">
          <img :src="item.cover_img">
        </el-col>
        <el-col :span="8" class="oneConter">
          <div class="oneConter-leftImg" @click="jump(item.id)">
            {{item.title}}
          </div>
          <div class="oneConter-rightText">
            <p>{{item.brief}}</p>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
import qs from 'qs'
export default {
  data () {
    return {
      list: [],
      index: ''
    }
  },
  methods: {
    GetContent () {
      let that = this
      that.$axios.post(this.httpUrlSXS + 'jiujiangdongzhu/Home/New/new_list', qs.stringify()).then(function (res) {
        if (res.data.code === '200') {
          that.list = res.data.data
        }
      })
    },
    jump (val) {
      let that = this
      that.$router.push({
        path: '/newsdetail',
        query: {
          id: val
        }
      })
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
.myDivConterDivBoxs{
  padding-bottom:4rem;
}
.oneConter .oneConter-leftImg{
  width:24.0625rem;
  overflow:hidden;
  text-overflow:ellipsis;
  white-space:nowrap;
  text-align: left;
  cursor: pointer;
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
  margin-left:4rem;
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
