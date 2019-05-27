<template>
  <div class="backStageBanner">
    <div class="banckBannerTop">
        <div class="timeSearch">
          <span style="margin-right:20px">请选择日期</span>
          <el-date-picker
            value-format="yyyy-MM-dd"
            v-model="searchTime"
            type="daterange"
            align="right"
            unlink-panels
            range-separator="至"
            start-placeholder="开始日期"
            end-placeholder="结束日期"
            :picker-options="pickerOptions2"
            @change="clickTime">
          </el-date-picker>
        </div>
        <div class="fuzzySearch"><el-input placeholder="请输入关键字" v-model="fuzzySearchText" clearable></el-input><el-button icon="el-icon-search" @click="searchBtn">搜索</el-button></div>
    </div>
    <div class="backBannerContent">
      <div class="backBannerTableAdd">
        <el-button icon="el-icon-plus" @click="addPhotoBtn">添加图片</el-button>
      </div>
      <div class="backBannerTable">
          <template>
            <el-table :data="tableData" border style="width: 100%" max-height="488">
              <el-table-column prop="img_path" label="缩略图" min-width="20%" align="center">
                <template slot-scope="scope">
                  <img :src="scope.row.img_path" width="100" height="100">
                </template>
              </el-table-column>
              <el-table-column prop="img_name" label="Banner名称" min-width="30%"></el-table-column>
              <el-table-column prop="description" label="Banner描述" min-width="40%"></el-table-column>
              <el-table-column fixed="right" label="操作" min-width="10%" prop="img_id">
                <template slot-scope="scope">
                  <el-button type="text" size="small" style="color:#ff0000" @click="cancelBtn(scope.row)">删除</el-button>
                </template>
              </el-table-column>
            </el-table>
          </template>
          <div class="pageNum">
            <el-pagination
              background
              layout="prev, pager, next"
              :total="totalCount"
              :page-size="10"
              :current-page="currentPage"
              @size-change="handleSizeChange"
              @current-change="handleCurrentChange"
              @prev-click="precClick"
              @next-click="nextClick"
              >
            </el-pagination>
          </div>
          <!-- 新增窗口 -->
          <el-dialog title="添加图片" :visible.sync="dialogFormShow" modal width="30%" custom-class="backBannerDialog" >
            <el-form :model="dialogForm" :label-position="labelPosition">
              <div style="width:80%">
                <el-form-item label="图片名称" label-width="150px" label-position="left">
                  <el-input v-model="dialogForm.name" auto-complete="off"></el-input>
                </el-form-item>
              </div>
              <el-form-item label="图片上传" label-width="150px">
                <el-upload
                  class="avatar-uploader"
                  action='http://39.97.175.16/jiujiangdongzhu/Lunbo/add_lunbo.html'
                  :show-file-list="false"
                  :before-upload="beforeAvatarUpload"
                  :on-success="handleAvatarSuccess"
                  >
                  <img v-if="imageUrl" :src="imageUrl" class="avatar">
                  <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                </el-upload>
              </el-form-item>
              <el-form-item label="图片描述" label-width="150px">
                <el-input v-model="dialogForm.describe" auto-complete="off"></el-input>
              </el-form-item>
              <el-form-item label="图片展示起止时间" label-width="150px">
                <el-date-picker
                  v-model="dialogForm.time"
                  type="daterange"
                  align="right"
                  unlink-panels
                  range-separator="至"
                  start-placeholder="开始日期"
                  end-placeholder="结束日期"
                  :picker-options="pickerOptions2">
                </el-date-picker>
              </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
              <el-button @click="dialogFormShow = false">取 消</el-button>
              <el-button type="primary" @click="dialogFormAddBtn">确 定</el-button>
            </div>
          </el-dialog>
      </div>
    </div>
  </div>
</template>

<script>
import qs from 'qs'
// import { truncate } from 'fs'
export default {
  data () {
    return {
      pickerOptions2: {
        shortcuts: [{
          text: '最近一周',
          onClick (picker) {
            const end = new Date()
            const start = new Date()
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 7)
            picker.$emit('pick', [start, end])
          }
        }, {
          text: '最近一个月',
          onClick (picker) {
            const end = new Date()
            const start = new Date()
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 30)
            picker.$emit('pick', [start, end])
          }
        }, {
          text: '最近三个月',
          onClick (picker) {
            const end = new Date()
            const start = new Date()
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 90)
            picker.$emit('pick', [start, end])
          }
        }]
      },
      tableData: [],
      dialogForm: {
        name: '',
        describe: '',
        time: '',
        imgType: ''
      },
      value6: '',
      searchTime: '',
      imageUrl: '',
      currentPage: 1,
      // 总页数
      totalPage: 1,
      // 总条数
      totalCount: 1,
      fuzzySearchText: '',
      dialogFormShow: false,
      // 弹出框的label在左边
      labelPosition: 'left',
      upload_files: [],
      // 搜索的图片路径
      img_path: ''
    }
  },
  created () {
    this.getImg()
  },
  methods: {
    // 渲染图片
    getImg () {
      var currentPage = this.currentPage
      if (this.currentPage === null || this.currentPage === undefined || this.currentPage === '') {
        currentPage = 1
      }
      let that = this
      let fuzzySearchText = that.fuzzySearchText
      let startTime = that.searchTime[0]
      let endTime = that.searchTime[1]
      console.log(currentPage, '555')
      that.$axios.post(this.httpUrlRSS + 'jiujiangdongzhu/Lunbo/search.html', qs.stringify({'search': fuzzySearchText, 'page': currentPage, 'start_time': startTime, 'end_time': endTime})).then(function (res) {
        if (res.data.code === '200') {
          console.log(res.data, '渲染数据')
          that.tableData = res.data.data
          that.totalPage = res.data.totalPage
          that.totalCount = parseInt(res.data.totalCount)
        } else if (res.data.code === '201') {
          that.$message.error({message: '查询失败，请重试'})
          that.fuzzySearchText = ''
          that.searchTime = []
          that.currentPage = 1
        } else if (res.data.code === '202') {
          that.$message.error({message: '参数错误，请重试'})
          that.fuzzySearchText = ''
          that.searchTime = []
          that.currentPage = 1
        } else {
          that.$message.error({message: '未知错误，请重试'})
          that.fuzzySearchText = ''
          that.searchTime = []
          that.currentPage = 1
        }
      })
    },
    clickTime () {
      if (this.searchTime[0] === this.searchTime[1]) {
        this.searchTime[0] = ''
        this.searchTime[1] = ''
        this.$message({
          message: '不能输入相同的时间',
          type: 'error'
        })
      }
    },
    // 搜索按钮
    searchBtn () {
      let that = this
      let fuzzySearchText = that.fuzzySearchText
      let currentPage = this.currentPage
      let startTime = that.searchTime[0]
      let endTime = that.searchTime[1]
      that.getImg(fuzzySearchText, startTime, endTime, currentPage)
    },
    // 分页
    handleSizeChange (val) {
      // this.pageSize = val
      // this.currentPage = 1
    },
    handleCurrentChange (val) {
      // this.getImg(val)
      // this.getImg(this.currentPage)
    },
    // 上一页
    precClick () {
      const currentPage = --this.currentPage
      this.getImg(currentPage)
    },
    nextClick () {
      const currentPage = ++this.currentPage
      this.getImg(currentPage)
    },
    // 删除按钮
    cancelBtn (row) {
      console.log('删除按钮打开', row)
      this.$confirm('是否删除该banner, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        let that = this
        let imgID = row.img_id
        that.$axios.post(this.httpUrlRSS + 'jiujiangdongzhu/Lunbo/del_lunbo.html', qs.stringify({'id': imgID})).then(function (res) {
          if (res.data.code === '200') {
            that.$message({
              type: 'success',
              message: '删除成功!'
            })
          } else if (res.data.code === '201') {
            that.$message.error({message: '删除失败!'})
          } else if (res.data.code === '202') {
            that.$message.error({message: '参数错误'})
          } else {
            that.$message.error({message: '未知错误，请联系程序员'})
          }
        })
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消删除'
        })
      })
    },
    addPhotoBtn () {
      // console.log('添加图片按钮触发')
      this.dialogFormShow = true
    },
    // 上传图片
    beforeAvatarUpload (file) {
      // debugger;
      console.log(file, '文件')
      this.upload_files = file
      const isPNG = file.type === 'image/png'
      const isGIF = file.type === 'image/gif'
      const isJPEG = file.type === 'image/jpeg'
      const isJPG = file.type === 'image/jpg'
      const isLt5M = file.size / 1024 / 1024 < 5
      if (!isJPG && !isPNG && !isGIF && !isJPEG) {
        this.$message.error('上传的图片只能是 JPG、PNG和gif 格式!')
      }
      if (!isLt5M) {
        this.$message.error('上传的图片大小不能超过 5MB!')
      }
      return (isJPG || isPNG || isGIF || isJPEG) && isLt5M
    },
    // 图片提交成功
    handleAvatarSuccess (res, file) {
      // debugger
      console.log('file', file)
      console.log('res', res)
      if (res.code === '200') {
        this.fileImgIds = res
        this.imageUrl = URL.createObjectURL(file.raw)
        this.imgFalsePath = res
        this.imgList = file
        this.imgID = res.img_id
        this.$message({
          type: 'success',
          message: '图片添加成功'
        })
      } else if (res.code === '201') {
        this.$message({
          type: 'fail',
          message: '图片添加失败'
        })
      } else if (res.code === '202') {
        this.$message({
          type: 'fail',
          message: '图片上传失败'
        })
      }
    },
    // 提交按钮
    dialogFormAddBtn () {
      // 提交按钮的文字内容部分
      console.log('弹出框的弹出按钮')
      let that = this
      let describe = this.dialogForm.describe
      let imgName = this.dialogForm.name
      let startTime = this.dialogForm.time[0]
      let endTime = this.dialogForm.time[1]
      that.$axios.post(this.httpUrlRSS + 'jiujiangdongzhu/Lunbo/add_imginfo.html', qs.stringify({'img_name': imgName, 'description': describe, 'start_time': startTime, 'end_time': endTime})).then(function (res) {
        console.log('添加的数据', res)
        if (res.data.code === '200') {
          that.$message({
            message: '轮播图信息添加成功',
            type: 'success'
          })
          that.dialogFormShow = false
          that.getImg()
        } else if (res.data.code === '201') {
          that.$message.error({message: '轮播图信息添加失败'})
        } else if (res.data.code === '202') {
          that.$message.error({message: '轮播图添加失败'})
        } else if (res.data.code === '203') {
          that.$message.error({message: '参数错误'})
        } else {
          that.$message.error({message: '未知错误，请联系管理员'})
        }
      })
      this.dialogFormShow = false
    }
  }
}
</script>
<style scoped>
.backStageBanner{
  margin: 0;
  padding: 20px;
  text-align: left;
}
.backStageBanner .banckBannerTop{
  display: flex;
  justify-content: space-between;
}
.backStageBanner .timeSearch{
  display: inline-block;
}
.backStageBanner .fuzzySearch{
  display: flex;
  justify-content: space-between;
}
.backStageBanner .backBannerContent{
  margin-top: 2rem;
}
.backStageBanner .backBannerTable img{
  float: left;
}
.backStageBanner .backBannerTable .tableImg{
  width: auto;
  max-height: 100px;
}
.backStageBanner .pageNum{
  margin-top:1rem;
}
.backStageBanner .backBannerTableAdd{
  margin-bottom: 1rem;
}
.backBannerDialog .el-range-editor.el-input__inner{
  width: 100% !important;
}
</style>
<style>
.backStageBanner .fuzzySearch .el-button{
  color: #333;
  margin-left: 1rem;
}
.backStageBanner .fuzzySearch .el-button:hover{
  color: #409EFF;
}
.backStageBanner .el-pagination.is-background .btn-next, .el-pagination.is-background .btn-prev, .el-pagination.is-background .el-pager li{
    background-color: #E4E7ED;
    color: #409EFF;
}
.backStageBanner .avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
}
.backStageBanner .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
}
.backStageBanner .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
}
.backStageBanner .avatar {
    width: 178px;
    height: 178px;
    display: block;
}
</style>
