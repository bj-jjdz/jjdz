<template>
  <div class="backStageNews">
    <div class="banckBannerTop">
        <div class="timeSearch">
          <span style="margin-right:20px">请选择日期</span>
          <el-date-picker
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
        <el-button icon="el-icon-plus" @click="addShowBtn">添加咨询</el-button>
      </div>
      <div class="backBannerTable">
          <template>
            <el-table :data="tableData" border style="width: 100% max-height:600">
              <el-table-column prop="cover_img" label="缩略图" min-width="15%" align="center">
                <template slot-scope="scope">
                  <img :src="scope.row.cover_img" width="80" height="60">
                </template>
              </el-table-column>
              <el-table-column prop="title" label="咨询标题" min-width="15%"></el-table-column>
              <el-table-column prop="type" label="所属分类" min-width="5%"></el-table-column>
              <el-table-column prop="brief" label="新闻简介" min-width="20%"></el-table-column>
              <el-table-column prop="new_content" label="内容概览" min-width="30%" class="contentText"></el-table-column>
              <el-table-column prop="add_time" label="发布时间" min-width="10%"></el-table-column>
              <el-table-column prop="name" label="浏览量" min-width="5%"></el-table-column>
              <el-table-column fixed="right" label="操作" min-width="5%">
                <template slot-scope="scope" prop="id">
                  <el-button @click="handleClick(scope.row)" type="text" size="small">编辑</el-button>
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

          <el-dialog title="添加咨询" :visible.sync="dialogFormShow" modal width="50%" custom-class="backBannerDialog" >
            <div class="edit_container">
              <div style="display:flex;justify-content:space-between">
                <el-select v-model="newsTypeText" placeholder="请选择新闻类型" style="margin-bottom:0.6rem">
                  <el-option
                    v-for="item in newsType"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                    style="margin-bottom:0.6rem">
                  </el-option>
                </el-select>
                <el-input v-model="newsFrom" style="margin-bottom:0.6rem;width:50%" placeholder="请填写新闻来源" clearable></el-input>
              </div>
              <template>
                <el-input v-model="newsTitle" style="margin-bottom:0.6rem" placeholder="请填写新闻标题" clearable></el-input>
              </template>
              <template>
                <el-input v-model="newsConter" style="margin-bottom:0.6rem" placeholder="请填写新闻简介" clearable></el-input>
              </template>
              <quill-editor
                v-model="contentText"
                ref="myQuillEditor"
                :options="editorOption"
                @blur="onEditorBlur($event)" @focus="onEditorFocus($event)"
                @change="onEditorChange($event)">
              </quill-editor>
              <div v-html="str" class="ql-editor">
                {{str}}
              </div>
            </div>
              <el-upload
                class="avatar-uploader"
                action="http://39.97.175.16/jiujiangdongzhu/Admin/News/add_cover_img"
                :show-file-list="false"
                :on-success="handleAvatarSuccess"
                :before-upload="beforeAvatarUpload">
                <img v-if="imageUrl" :src="imageUrl" class="avatar">
                <i v-else class="el-icon-plus avatar-uploader-icon"></i>
              </el-upload>
            <template>
              <el-button @click="dialogFormShow = false">取 消</el-button>
              <el-button type="primary" @click="addNewsBtn">确 定</el-button>
            </template>
          </el-dialog>

          <el-dialog title="添加咨询" :visible.sync="dialogFormShowTwo" modal width="50%" custom-class="backBannerDialog" >
            <div class="edit_container">
              <div style="display:flex;justify-content:space-between">
                <el-select v-model="newsTypeText" placeholder="请选择新闻类型" style="margin-bottom:0.6rem">
                  <el-option
                    v-for="item in newsType"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                    style="margin-bottom:0.6rem">
                  </el-option>
                </el-select>
                <el-input v-model="newsFrom" style="margin-bottom:0.6rem;width:50%" placeholder="请填写新闻来源" clearable></el-input>
              </div>
              <template>
                <el-input v-model="newsTitle" style="margin-bottom:0.6rem" placeholder="请填写新闻标题" clearable></el-input>
              </template>
              <template>
                <el-upload
                  class="avatar-uploader"
                  action='http://39.97.175.16/jiujiangdongzhu/Lunbo/add_lunbo.html'
                  :show-file-list="false"
                  :before-upload="beforeAvatarUpload"
                  :on-success="handleAvatarSuccess"
                  >
                  <img v-if="imageUrlS" :src="imageUrlS" class="avatar">
                  <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                </el-upload>
              </template>
              <template>
                <el-input v-model="newsConter" style="margin-bottom:0.6rem" placeholder="请填写新闻简介" clearable></el-input>
              </template>
              <quill-editor
                v-model="contentText"
                ref="myQuillEditor"
                :options="editorOption"
                @blur="onEditorBlur($event)" @focus="onEditorFocus($event)"
                @change="onEditorChange($event)">
              </quill-editor>
              <div v-html="str" class="ql-editor">
                {{str}}
              </div>
            </div>
            <template>
              <el-button @click="dialogFormShow = false">取 消</el-button>
              <el-button type="primary" @click="addNewsBtnUpdata">确 定</el-button>
            </template>
          </el-dialog>
      </div>
    </div>
  </div>
</template>
<script>
import qs from 'qs'
// 调用编辑器
import { quillEditor } from 'vue-quill-editor'
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'
// import { log } from 'util'
export default {
  components: {
    quillEditor
  },
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
      // 表格
      tableData: [],
      // 新闻类型
      newsType: [{
        value: '1',
        label: '新闻公告'
      }, {
        value: '2',
        label: '媒体报道'
      }, {
        value: '3',
        label: '社会公益'
      }, {
        value: '4',
        label: '新媒体'
      }, {
        value: '5',
        label: '118建站节'
      }],
      // 选择的新闻类型
      newsTypeText: '',
      // newsTitle 新闻标题
      newsTitle: '',
      newsConter: '',
      // newsFrom 新闻来源
      newsFrom: '',
      searchTime: '',
      dialogFormShow: false,
      dialogFormShowTwo: false,
      // 富文本
      contentText: `<p></p><p><br></p><ol><li><strong><em>Or drag/paste an image here.</em></strong></li><li><strong><em>rerew</em></strong></li><li><strong><em>rtrete</em></strong></li><li><strong><em>tytrytr</em></strong></li><li><strong><em>uytu</em></strong></li></ol>`,
      str: '',
      editorOption: {},
      currentPage: 1,
      // 总页数
      totalPage: 1,
      // 总条数
      totalCount: 1,
      fuzzySearchText: '',
      newsTypeId: '',
      cover_img: '',
      imgID: '',
      imageUrl: '',
      imageUrlS: '',
      user_id: ''
    }
  },
  created () {
    this.getNewsList()
  },
  mounted () {
    // 请求后台返回的内容字符串
    let contentText = ''
    this.str = this.escapeStringHTML(contentText)
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
    addShowBtn () {
      console.log('添加按钮', this)
      this.dialogFormShow = true
      this.newsTitle = ''
      this.newsConter = ''
      this.newsTypeText = ''
      this.contentText = ''
      this.newsFrom = ''
    },
    // 富文本事件
    onEditorReady (editor) {},
    // 失去焦点事件
    onEditorBlur () {},
    // 获得焦点事件
    onEditorFocus () {},
    // 内容改变事件
    onEditorChange () {},
    // console.log('添加图片按钮触发')
    addPhotoBtn () {
      this.dialogFormShow = true
    },
    // 转码
    escapeStringHTML (str) {
      str = str.replace(/&lt;/g, '<')
      str = str.replace(/&gt;/g, '>')
      return str
    },
    // 全部获取
    getNewsList () {
      var currentPage = this.currentPage
      if (this.currentPage === null || this.currentPage === undefined || this.currentPage === '') {
        currentPage = 1
      }
      let that = this
      let fuzzySearchText = that.fuzzySearchText
      let startTime = that.searchTime[0]
      let endTime = that.searchTime[1]
      console.log(currentPage, '555')
      that.$axios.post(this.httpUrlRSS + 'jiujiangdongzhu/News/search.html', qs.stringify({'search': fuzzySearchText, 'page': currentPage, 'start_time': startTime, 'end_time': endTime})).then(function (res) {
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
        }
      })
    },
    // 搜索按钮
    searchBtn () {
      let that = this
      let fuzzySearchText = that.fuzzySearchText
      let currentPage = this.currentPage
      let startTime = that.searchTime[0]
      let endTime = that.searchTime[1]
      that.getNewsList(fuzzySearchText, startTime, endTime, currentPage)
    },
    // 分页
    handleSizeChange (val) {
      this.getNewsList(val)
    },
    handleCurrentChange (val) {
      this.getNewsList(val)
    },
    // 上一页
    precClick () {
      let that = this
      const currentPage = --this.currentPage
      that.getNewsList(currentPage)
    },
    nextClick () {
      let that = this
      const currentPage = ++this.currentPage
      that.getNewsList(currentPage)
    },
    // 删除按钮
    cancelBtn (row) {
      console.log('删除按钮打开', row)
      this.$confirm('是否删除该咨询, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        let that = this
        let id = row.id
        that.$axios.post(this.httpUrlRSS + 'jiujiangdongzhu/News/del_news.html', qs.stringify({'id': id})).then(function (res) {
          if (res.data.code === '200') {
            that.$message({
              type: 'success',
              message: '删除成功!'
            })
            this.getNewsList()
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
    // 上传内容
    addNewsBtn () {
      let that = this
      const newsTitle = that.newsTitle
      const newsConter = that.newsConter
      const newsTypeText = that.newsTypeText
      const contentText = that.contentText
      const newsFrom = that.newsFrom
      const imageUrl = that.imageUrl
      const imgID = that.imgID
      if (newsTitle === '' || newsTypeText === '' || contentText === '' || newsFrom === '' || newsConter === '' || imageUrl === '') {
        this.$message.error({message: '每一项都不能为空!'})
      }
      that.$axios.post(this.httpUrlRSS + 'jiujiangdongzhu/News/add_news', qs.stringify({'title': newsTitle, 'type_id': newsTypeText, 'content': contentText, 'new_source': newsFrom, 'brief': newsConter, 'cover_img': imageUrl, 'img_id': imgID})).then(function (res) {
        console.log('上传按钮按了之后', res)
        if (res.data.code === '200') {
          that.$message({
            type: 'success',
            message: '添加新闻成功!'
          })
          that.dialogFormShow = false
          that.dialogFormShowTwo = false
          that.getNewsList()
        } else if (res.data.code === '201') {
          that.$message.error({message: '添加失败!'})
          that.dialogFormShow = false
        } else if (res.data.code === '202') {
          that.$message.error({message: '添加失败，新闻内容添加失败'})
          that.dialogFormShow = false
        } else if (res.data.code === '203') {
          that.$message.error({message: '参数错误'})
          that.dialogFormShow = false
        }
      })
    },
    // 编辑新闻
    handleClick (row) {
      console.log('row', row)
      this.dialogFormShowTwo = true
      let that = this
      const id = row.id
      this.user_id = row.id
      that.$axios.post(this.httpUrlRSS + 'jiujiangdongzhu/News/newinfo.html', qs.stringify({'id': id})).then(function (res) {
        console.log('nigeide', res)
        if (res.data.code === '200') {
          that.newsTypeText = res.data.data.type
          that.newsType.value = res.data.data.type_id
          that.newsTitle = res.data.data.title
          that.contentText = res.data.data.new_content
          that.newsFrom = res.data.data.new_source
          that.imageUrlS = res.data.data.cover_img
        } else if (res.data.code === '201') {
          that.$message.error({message: '添加失败!'})
          that.dialogFormShowTwo = false
        }
      })
    },
    // 修改内容
    addNewsBtnUpdata () {
      let that = this
      const newsTitle = that.newsTitle
      const newsConter = that.newsConter
      const newsTypeText = that.newsTypeText
      const contentText = that.contentText
      const newsFrom = that.newsFrom
      const imageUrl = that.imageUrl
      const imgID = that.imgID
      const id = that.user_id
      if (newsTitle === '' || newsTypeText === '' || contentText === '' || newsFrom === '' || newsConter === '' || imageUrl === '') {
        this.$message.error({message: '每一项都不能为空!'})
      }
      that.$axios.post(this.httpUrlRSS + 'jiujiangdongzhu/News/update_new', qs.stringify({'title': newsTitle, 'type_id': newsTypeText, 'content': contentText, 'new_source': newsFrom, 'brief': newsConter, 'cover_img': imageUrl, 'img_id': imgID, 'id': id})).then(function (res) {
        console.log('上传按钮按了之后', res)
        if (res.data.code === '200') {
          that.$message({
            type: 'success',
            message: res.data.message
          })
          that.dialogFormShow = false
          that.dialogFormShowTwo = false
          that.getNewsList()
        } else if (res.data.code === '201') {
          that.$message.error({message: res.data.message})
          that.dialogFormShow = false
        } else if (res.data.code === '202') {
          that.$message.error({message: res.data.message})
          that.dialogFormShow = false
        } else if (res.data.code === '203') {
          that.$message.error({message: res.data.message})
          that.dialogFormShow = false
        }
      })
    }
  },
  computed: {
    editor () {
      return this.$refs.myQuillEditor.quill
    }
  }
}
</script>
<style scoped>
.backStageNews{
  margin: 0;
  padding: 20px;
  text-align: left;
}
.backStageNews .banckBannerTop{
  display: flex;
  justify-content: space-between;
}
.backStageNews .timeSearch{
  display: inline-block;
}
.backStageNews .fuzzySearch{
  display: flex;
  justify-content: space-between;
}
.backStageNews .backBannerContent{
  margin-top: 2rem;
}
.backStageNews .backBannerTable img{
  float: left;
}
.backStageNews .backBannerTable .tableImg{
  max-width: 100px;
  max-height: 100px;
  text-align: center;
  display: block;
  margin-left: 40%;
}
.backStageNews .backBannerTableAdd{
  margin-bottom: 1rem;
}
.backStageNews .pageNum{
  margin-top:1rem;
}
.backStageNews .backBannerTableAdd{
  margin-bottom: 1rem;
}
.backStageNews .ql-toolbar .ql-snow{
  border:1px solid #ddd;
}
.dynamicBigImg {
  position: fixed;
  left: 0;
  top: 0;
  z-index: 10000;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  align-items: center;
}
.dynamicBigImg .contentImg {
  margin-left: 0%;
}
</style>
<style>
.backStageNews .fuzzySearch .el-button{
  color: #333;
  margin-left: 1rem;
}
.backStageNews .fuzzySearch .el-button:hover{
  color: #409EFF;
}
.backStageNews .el-table{
  max-height:620px;
}
/* .el-tooltip__popper{
  max-width: 50%;
  max-height:40%;
  overflow:auto;
  font-size: 16px;
} */
.backStageNews .el-table .cell{
  max-height:60px;
  overflow:hidden;
  white-space:nowrap;
  text-overflow:ellipsis;
}
.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.avatar-uploader .el-upload:hover {
  border-color: #409EFF;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  line-height: 178px;
  text-align: center;
}
.avatar {
  width: 178px;
  height: 178px;
  display: block;
}
</style>
