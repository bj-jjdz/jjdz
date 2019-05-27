<template>
  <div class="newsdetail">
    <div class="banner">
    </div>
    <div class="newsOneDiv">
      <el-row>
        <el-col :span="10" :offset="7" class="newsOneTitleText">
          <p>
            {{list.data.title}}
          </p>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="3" :offset="9">
          <p class="newsOneDiv-TwoText">
            {{list.data.add_time}}
          </p>
        </el-col>
        <el-col :span="4">
          <p class="newsOneDiv-TwoText2">
            来源：{{list.data.new_source}}
          </p>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="10" :offset="7">
          <div v-html=list.data.new_content class="new_content">
            {{list.data.new_content}}
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
      id: '',
      list: []
    }
  },
  methods: {
    Select () {
      let that = this
      let data = {
        id: this.id
      }
      that.$axios.post(this.httpUrlSXS + 'jiujiangdongzhu/index.php/Home/New/new_info', qs.stringify(data)).then(function (res) {
        if (res.data.code === '200') {
          console.log(res.data)
          that.list = res.data
          console.log(that.list)
        }
      })
    }
  },
  mounted () {
    this.id = this.$route.query.id
    this.Select()
  },
  created () {
    this.id = this.$route.query.id
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
.newsdetail{
  text-align: center;
}
.newsOneDiv{
  margin-top:5rem;
}
.newsdetail .banner{
  width: 100%;
  height: 25rem;
  box-sizing: border-box;
  background-image: url('./../../../assets/img/Journalism/banner.png');
  background-size: 100% 100%;
  text-align: center;
  padding: 9.125rem 0  9.25rem 23rem;
}
.newsdetail .newsOneDiv-TwoText{
  margin-top:4rem;
  margin-bottom: 5rem;
  color:#999999;
  font-size: .75rem;
}
.newsdetail .newsOneDiv-TwoText2{
  margin-top:3.85rem;
  color:#999999;
  font-size: .75rem;
}
.newsdetail .new_content{
  margin-bottom: 5rem;
  text-align: left;
  text-indent: 2em;
  line-height: 2.875rem;
  font-size: 1rem;
}
.newsdetail .newsOneTitleText{
  font-size: 1.875rem;
}
</style>

<style>
.new_content img{
  display: block;
  margin:0 auto;
}
</style>
