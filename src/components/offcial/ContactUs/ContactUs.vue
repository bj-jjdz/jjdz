<template>
  <div class="contact">
    <!-- 轮播图 -->
    <div class="banner">
    </div>
    <!-- 地图 -->
    <el-row type="flex" justify="center">
      <el-col :span="8">
        <div id="allmap" class="XSDFXPage"></div>
      </el-col>
      <el-col :span="5">
        <div class="myBuscard">
          <div class="myBuscardBox">
            <h1>北京九江东注网络科技有限公司</h1>
            <h6>电话:010-86393357</h6>
            <p>地址:北京市丰台区时代财富天地B座4号院1215室</p>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import BMap from 'BMap'
export default {
  data () {
    return {
    }
  },
  methods: {
    baiduMap () {
      var map = new BMap.Map('allmap')
      map.centerAndZoom(new BMap.Point(116.292696, 39.837936), 16)
      var local = new BMap.LocalSearch(map, {
        randerOptions: {map: map, panel: 'r-result'}
      })
      local.search('时代财富天地')
    }
  },
  mounted () {
    this.baiduMap()
  }
}
</script>

<style scoped>
ul{
  list-style: none
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
  clear: both;
}
.contact .banner{
  width: 100%;
  height: 25rem;
  box-sizing: border-box;
  background-image: url('./../../../assets/img/contact/banner.png');
  background-size: 100% 100%;
  text-align: center;
  padding: 9.125rem 0  9.25rem 23rem;
}
/* 地图容器 */
.XSDFXPage{
  width: 37.5rem;
  height: 29.6875rem;
  overflow: hidden;
  margin: 0;
  font-family: "微软雅黑";
  margin-top:4rem;
}
.myBuscard{
  width: 37.5rem;
  height: 29.6875rem;
  border:1px solid #999999;
  margin-top:4rem;
  margin-bottom:4rem;
}
.myBuscard .myBuscardBox{
  padding:175px 53px 175px 84px;
  text-align: left;
  position: relative;
}
.myBuscard h1{
  font-weight: normal;
  letter-spacing: 0px;
  color:#333333;
  font-size: 1.75rem;
}
.myBuscard h1:before{
  content: '';
  position:absolute;
  left:7%;
  top:36.5%;
}
.myBuscard h1::before{
  background-image: url('./../../../assets/img/contact/dw.png');
  background-repeat: no-repeat;
  background-size: 100% 100%;
  width:1.3125rem;
  height:1.75rem;
}
.myBuscard h6{
  font-weight: normal;
  font-size: 1.25rem;
  color:#666666;
  margin-top:1.8125rem;
}
.myBuscard p{
  font-size: 1.25rem;
  font-weight: normal;
  color:#666666;
  margin-top:1.8125rem;
}
</style>

<style>
</style>
