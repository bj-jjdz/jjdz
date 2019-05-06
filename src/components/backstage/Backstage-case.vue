<template>
  <div class="backStageCase">
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
        <div class="fuzzySearch">
          <el-select v-model="industryTextSearch" placeholder="请选择行业" style="margin-bottom:0.6rem;width:88%">
                  <el-option
                    v-for="item in industryList"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                    style="margin-bottom:0.6rem">
                  </el-option>
                </el-select>
          <el-button icon="el-icon-search" @click="searchBtn">搜索</el-button>
        </div>
    </div>
    <div class="backBannerContent">
      <div class="backBannerTableAdd">
        <el-button icon="el-icon-plus" @click="addPhotoBtn">添加图片</el-button>
      </div>
      <div class="backBannerTable">
          <template>
            <el-table :data="tableData" border style="width: 100%" max-height="488">
              <el-table-column prop="case_path" label="缩略图" min-width="20%"><img class="tableImg" src="img_path" alt="" width="100px" height="100px"></el-table-column>
              <el-table-column prop="industry" label="所属行业分类" min-width="10%"></el-table-column>
              <el-table-column prop="company_name" label="所属公司" min-width="30%"></el-table-column>
              <el-table-column prop="create_url" label="公司网址" min-width="20%"></el-table-column>
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
            <el-form :label-position="labelPosition">
              <div style="width:100%">
                <el-select v-model="industryText" placeholder="请选择行业" style="margin-bottom:0.6rem;width:88%">
                  <el-option
                    v-for="item in industryList"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                    style="margin-bottom:0.6rem">
                  </el-option>
                </el-select>
                <el-input
                  placeholder="请输入公司名称"
                  v-model="companyName"
                  clearable
                  style="margin-bottom:0.6rem;width:88%"
                  >
                </el-input>
                <el-input
                  placeholder="请输入公司网址"
                  v-model="companyUrl"
                  clearable
                  style="margin-bottom:0.6rem;width:88%"
                  >
                </el-input>
              </div>
              <el-form-item label="图片上传" label-width="150px">
                <el-upload
                  class="avatar-uploader"
                  action='http://192.168.1.184/jiujiangdongzhu/case/CaseUpload.html'
                  :show-file-list="false"
                  :before-upload="beforeAvatarUpload"
                  :on-success="handleAvatarSuccess"
                  >
                  <img v-if="imageUrl" :src="imageUrl" class="avatar">
                  <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                </el-upload>
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
      industryList: [{
        value: '3-1',
        label: '机械行业'
      }, {
        value: '3-2',
        label: '装修行业'
      }, {
        value: '3-3',
        label: '培训行业'
      }, {
        value: '3-4',
        label: '酒店民俗'
      }, {
        value: '3-5',
        label: '食品加工'
      }, {
        value: '3-6',
        label: '家具制造'
      }, {
        value: '3-7',
        label: '服装鞋帽'
      }, {
        value: '3-8',
        label: '电线电缆'
      }, {
        value: '3-9',
        label: '化工行业'
      }, {
        value: '3-10',
        label: '纺织行业'
      }, {
        value: '3-11',
        label: '电子电工'
      }, {
        value: '3-12',
        label: '五金配件'
      }, {
        value: '3-13',
        label: '电力电器'
      }, {
        value: '3-14',
        label: 'IT数码'
      }, {
        value: '3-15',
        label: '装饰建材'
      }, {
        value: '3-16',
        label: '汽配行业'
      }, {
        value: '3-17',
        label: '餐饮加盟'
      }, {
        value: '3-18',
        label: '家居行业'
      }, {
        value: '3-19',
        label: '仪表仪器'
      }, {
        value: '3-20',
        label: '新农业'
      }
      ],
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
      img_path: '',
      // 所属行业
      industryText: '',
      // 公司名称
      companyName: '',
      // 公司网址
      companyUrl: '',
      // 表格里面的所属行业
      industryTable: '',
      // 搜索的所属行业
      industryTextSearch: ''
    }
  },
  created () {
    this.getImg()
  },
  methods: {
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
    // 渲染图片
    getImg () {
      var currentPage = this.currentPage
      if (this.currentPage === null || this.currentPage === undefined || this.currentPage === '') {
        currentPage = 1
      }
      let that = this
      let industryTextSearch = that.industryTextSearch
      let startTime = that.searchTime[0]
      let endTime = that.searchTime[1]
      console.log('问题', industryTextSearch, startTime, endTime)
      that.$axios.post(this.httpUrlWMK + 'jiujiangdongzhu/case/CaseSearch', qs.stringify({'industry': industryTextSearch, 'page': currentPage, 'start_time': startTime, 'end_time': endTime})).then(function (res) {
        console.log('ddddd', res)
        if (res.data.code === '200') {
          console.log(res.data, '渲染数据')
          that.tableData = res.data.data
          that.totalPage = res.data.total
          that.totalCount = parseInt(res.data.count)
        } else if (res.data.code === '404') {
          that.$message.error({message: '查询失败,没有你要查的东西'})
          that.industryTextSearch = ''
          that.searchTime = []
          that.currentPage = 1
        }
      })
    },
    // 搜索按钮
    searchBtn () {
      this.getImg()
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
        that.$axios.post(this.httpUrlWMK + 'jiujiangdongzhu/Lunbo/del_lunbo.html', qs.stringify({'id': imgID})).then(function (res) {
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
      console.log(this, '9999999999')
      if (res.code === '200') {
        this.fileImgIds = res
        this.imageUrl = URL.createObjectURL(file.raw)
        this.imgFalsePath = res
        this.imgList = file
        this.imgID = res.img_id
        this.img_path = res.path
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
      console.log('弹出框的弹出按钮', this)
      let that = this
      let imgPath = this.img_path
      let industry = this.industryText
      let companyUrl = this.companyUrl
      let companyName = this.companyName
      console.log('2222222222222')
      that.$axios.post(this.httpUrlWMK + 'jiujiangdongzhu/case/caseAdd', qs.stringify({'path': imgPath, 'industry': industry, 'company': companyName, 'url': companyUrl})).then(function (res) {
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
.backStageCase{
  margin: 0;
  padding: 20px;
  text-align: left;
}
.backStageCase .banckBannerTop{
  display: flex;
  justify-content: space-between;
}
.backStageCase .timeSearch{
  display: inline-block;
}
.backStageCase .fuzzySearch{
  display: flex;
  justify-content: space-between;
}
.backStageCase .backBannerContent{
  margin-top: 2rem;
}
.backStageCase .backBannerTable img{
  float: left;
}
.backStageCase .backBannerTable .tableImg{
  width: auto;
  max-height: 100px;
}
.backStageCase .pageNum{
  margin-top:1rem;
}
.backStageCase .backBannerTableAdd{
  margin-bottom: 1rem;
}
.backBannerDialog .el-range-editor.el-input__inner{
  width: 100% !important;
}
</style>
<style>
.backStageCase .fuzzySearch .el-button{
  color: #333;
  margin-left: 1rem;
}
.backStageCase .fuzzySearch .el-button:hover{
  color: #409EFF;
}
.backStageCase .el-pagination.is-background .btn-next, .el-pagination.is-background .btn-prev, .el-pagination.is-background .el-pager li{
    background-color: #E4E7ED;
    color: #409EFF;
}
.backStageCase .avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
}
.backStageCase .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
}
.backStageCase .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
}
.backStageCase .avatar {
    width: 178px;
    height: 178px;
    display: block;
}
</style>
