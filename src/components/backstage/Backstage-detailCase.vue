<template>
  <div class="detailCase">
    <div class="detailCaseTop">
      <div class="timeSearch">
        <span style="margin-right:20px">请选择日期</span>
          <el-date-picker
            :clearable=false
            value-format="yyyy-MM-dd"
            v-model="searchTime"
            type="daterange"
            align="right"
            unlink-panels
            range-separator="至"
            start-placeholder="开始日期"
            end-placeholder="结束日期"
            :picker-options="pickerOptions2"
          >
          </el-date-picker>
      </div>
      <div class="fuzzySearch"><el-input placeholder="请输入关键字" v-model="fuzzySearchText" clearable></el-input><el-button icon="el-icon-search" @click="searchBtn">搜索</el-button></div>
    </div>
    <div class="detailCaseBottom">
      <div class="backBannerTableAdd">
        <el-button icon="el-icon-plus" @click="addPhotoBtn">添加案例详情</el-button>
      </div>
      <div style="max-height:500px;">
        <template>
          <el-table :data="tableData" style="width: 100%;margin-top:2rem;" max-height= "450">
            <el-table-column type="expand">
              <template slot-scope="props">
                <el-form label-position="left" inline class="demo-table-expand">
                  <el-form-item label="案例公司简介">
                    <span>{{ props.row.desc }}</span>
                  </el-form-item>
                  <el-form-item label="案例设计方案图片">
                    <span>{{ props.row.desc }}</span>
                  </el-form-item>
                </el-form>
              </template>
            </el-table-column>
            <el-table-column label="案例名称" prop="id" min-width="8%"></el-table-column>
            <el-table-column label="所属分类" prop="name" min-width="8%"></el-table-column>
            <el-table-column label="公司LOGO" prop="desc" min-width="20%"></el-table-column>
            <el-table-column label="案例公司简介" prop="desc" min-width="20%"></el-table-column>
            <el-table-column label="下一个公司名称" prop="desc" min-width="10%"></el-table-column>
            <el-table-column label="下一个公司缩略图" prop="desc" min-width="20%"></el-table-column>
            <el-table-column fixed="right" label="操作" width="100">
              <template slot-scope="scope">
                <!-- <el-button type="text" size="small" @click="changeBtn(scope.row)">编辑</el-button> -->
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
        <el-dialog title="添加案例详情" :visible.sync="dialogFormShow" modal width="30%" top= "2vh" custom-class="backBannerDialog">
          <el-form :model="dialogFormChangeModel" :label-position="labelPosition">
            <div style="width:100%">
              <el-cascader
                placeholder="请选择公司名称"
                expand-trigger="hover"
                :options="industryList"
                v-model="industryListText"
                @change="handleChange"
                ref="cascaderAddr"
                style="margin-bottom:0.6rem;width:88%">
              </el-cascader>
            </div>
            <el-form-item label="公司logo" label-width="150px">
              <el-upload
                  class="avatar-uploader"
                  action='http://192.168.1.185/jiujiangdongzhu/Details/CaseUpload'
                  :show-file-list="false"
                  :before-upload="beforeAvatarUploadLOGO"
                  :on-success="handleAvatarSuccessLOGO"
                  >
                  <img v-if="imageUrlLOGO" :src="imageUrlLOGO" class="avatar">
                  <i v-else class="el-icon-plus avatar-uploader-icon"></i>
              </el-upload>
            </el-form-item>
            <div style="width:80%">
              <el-form-item label="案例公司简介" label-width="150px" label-position="left">
                <el-input type="textarea" resize='none' size="medium" v-model="dialogForm.introduction" auto-complete="off"></el-input>
              </el-form-item>
            </div>
            <div style="width:80%">
              <el-form-item label="下一个公司名称" label-width="150px" label-position="left">
                <el-input v-model="dialogForm.nextCompany" auto-complete="off"></el-input>
              </el-form-item>
            </div>
            <div style="width:50%">
              <el-form-item label="下一个案例缩略图" label-width="150px">
                <el-upload
                  class="avatar-uploader"
                  action='http://192.168.1.185/jiujiangdongzhu/Details/CaseUpload'
                  :show-file-list="false"
                  :before-upload="beforeAvatarUploadNEXT"
                  :on-success="handleAvatarSuccessNEXT"
                  >
                  <img v-if="imageUrlNEXT" :src="imageUrlNEXT" class="avatar">
                  <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                </el-upload>
              </el-form-item>
            </div>
            <el-form-item label="案例设计方案图片" label-width="150px">
              <el-upload
                class="upload-demo"
                action='http://192.168.1.185/jiujiangdongzhu/Details/CaseUpload'
                :on-preview="handlePreview"
                :on-remove="handleRemove"
                :file-list="fileList"
                list-type="picture"
                :on-success="fileListChange">
                <el-button size="small" type="primary">点击上传</el-button>
                <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
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
      tableData: [{
        id: '12987125',
        name: '好滋好味鸡蛋仔',
        desc: '荷兰优质淡奶，奶香浓而不腻荷兰优质淡奶，奶香浓而不腻荷兰优质淡奶，奶香浓而不腻荷兰优质淡奶，奶香浓而不腻荷兰优质淡奶，奶香浓而不腻荷兰优质淡奶，奶香浓而不腻荷兰优质淡奶，奶香浓而不腻荷兰优质淡奶，奶香浓而不腻荷兰优质淡奶，奶香浓而不腻'
      }, {
        id: '12987125',
        name: '好滋好味鸡蛋仔',
        desc: '荷兰优质淡奶，奶香浓而不腻荷兰优质淡奶，奶香浓而不腻荷兰优质淡奶，奶香浓而不腻荷兰优质淡奶，奶香浓而不腻荷兰优质淡奶，奶香浓而不腻荷兰优质淡奶，奶香浓而不腻荷兰优质淡奶，奶香浓而不腻荷兰优质淡奶，奶香浓而不腻'
      }, {
        id: '12987125',
        name: '好滋好味鸡蛋仔',
        desc: '荷兰优质淡奶，奶香浓而不腻荷兰优质淡奶，奶香浓而不腻荷兰优质淡奶，奶香浓而不腻荷兰优质淡奶，奶香浓而不腻荷兰优质淡奶，奶香浓而不腻荷兰优质淡奶，奶香浓而不腻荷兰优质淡奶，奶香浓而不腻'
      }, {
        id: '12987125',
        name: '好滋好味鸡蛋仔',
        desc: '荷兰优质淡奶，奶香浓而不腻荷兰优质淡奶，奶香浓而不腻荷兰优质淡奶，奶香浓而不腻荷兰优质淡奶，奶香浓而不腻荷兰优质淡奶，奶香浓而不腻荷兰优质淡奶，奶香浓而不腻荷兰优质淡奶，奶香浓而不腻'
      }],
      industryList: [{
        value: '食品加工',
        label: '食品加工',
        children: [{
          value: '1-1',
          label: '北京爱迪漫咖啡有限公司'
        }, {
          value: '1-2',
          label: '重庆根据地餐饮管理有限公司'
        }, {
          value: '1-3',
          label: '尚上煌小龙虾公司'
        }, {
          value: '1-4',
          label: '海底捞'
        }]
      }, {
        value: '电商零售',
        label: '电商零售',
        children: [{
          value: '2-1',
          label: '企礼网'
        }, {
          value: '2-2',
          label: '广东壹贸网电子商务有限公司'
        }]
      }, {
        value: '电子电工',
        label: '电子电工',
        children: [{
          value: '3-1',
          label: '南通星晨电子有限公司'
        }, {
          value: '3-2',
          label: '北京长石京源电子技术有限公司'
        }, {
          value: '3-3',
          label: '北京耀华德昌电子有限公司'
        }, {
          value: '3-4',
          label: '九能控股'
        }]
      }, {
        value: '机械行业',
        label: '机械行业',
        children: [{
          value: '4-1',
          label: '北京康利得机械制造有限责任公司'
        }, {
          value: '4-2',
          label: '北京市洛克机械有限责任公司'
        }, {
          value: '4-3',
          label: '山推工程机械股份有限公司'
        }, {
          value: '4-4',
          label: '江苏天禹农业机械有限公司'
        }]
      }, {
        value: '教育培训',
        label: '教育培训',
        children: [{
          value: '5-1',
          label: '圣梵瑜伽健身服务有限公司'
        }, {
          value: '5-2',
          label: '北京会一花卉有限公司'
        }, {
          value: '5-3',
          label: '鸿雅培训学校'
        }]
      }, {
        value: '酒店民宿',
        label: '酒店民宿',
        children: [{
          value: '6-1',
          label: '北京曲水兰亭度假酒店有限公司'
        }, {
          value: '6-2',
          label: '如 家'
        }, {
          value: '6-3',
          label: '华住会'
        }, {
          value: '6-4',
          label: '速8'
        }]
      }, {
        value: '仪器仪表',
        label: '仪器仪表',
        children: [{
          value: '7-1',
          label: '伟创科仪精密仪器有限公司'
        }, {
          value: '7-2',
          label: '欧亚德精密称量设备有限公司'
        }, {
          value: '7-3',
          label: '北京北分天普仪器技术有限公司'
        }, {
          value: '7-4',
          label: '西安隆源电器有限公司'
        }]
      }, {
        value: '装修行业',
        label: '装修行业',
        children: [{
          value: '8-1',
          label: '金月亮装修装饰工程有限公司'
        }, {
          value: '8-2',
          label: '金格装饰工程有限公司'
        }, {
          value: '8-3',
          label: '北京捷克装饰工程有限公司'
        }, {
          value: '8-4',
          label: '美墅馆建筑装饰设计工程有限公司'
        }]
      }],
      // 新增窗口的数组
      dialogForm: {
        name: '',
        describe: ''
      },
      // 弹出框的label在左边
      labelPosition: 'left',
      addTImeList: '',
      // 编辑窗口的数组
      dialogFormChangeModel: {
        name: '',
        describe: ''
      },
      currentPage: 1,
      // 总页数
      totalPage: 1,
      // 总条数
      totalCount: 1,
      // 每页显示个数
      limit: 10,
      // 搜索的内容
      searchTime: '',
      fuzzySearchText: '',
      // 新增窗口
      dialogFormShow: false,
      // 编辑窗口
      dialogFormChange: false,
      // 图片提交成功返回的路径
      imageUrlNEXT: '',
      imageUrlLOGO: '',
      upload_filesLOGO: '',
      imgListNEXT: '',
      imgListLOGO: '',
      imgFalsePathNEXT: '',
      imgFalsePathLOGO: '',
      industryListText: [],
      fileList: [],
      fileListText: [],
      // fileListRemove: [],
      fileListRemoveType: 0
    }
  },
  methods: {
    // 分页
    handleSizeChange (val) {
      // this.pageSize = val
      this.currentPage = val
      this.getImg(this.currentPage)
    },
    handleCurrentChange (val) {
      const that = this
      that.currentPage = val
      that.getImg(this.currentPage)
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
    industryBtn () {
      console.log('66666')
    },
    // 新增窗口的确定按钮
    dialogFormAddBtn () {
      let industryListText = this.industryListText[1]
      let industryListNUM = this.industryListText[0]
      let companyName = this.$refs['cascaderAddr'].currentLabels[1]
      let companyContent = this.dialogForm.introduction
      let companyLogo = this.imageUrlLOGO
      let nextCreate = this.dialogForm.nextCompany
      let nextImg = this.imageUrlNEXT
      let imgPath = this.fileListText
      // if (industryListText === '' || companyName === '' || companyContent === '' || companyLogo === '' || nextCreate === '' || nextImg === '' || imgPath === '') {
      //   this.$message.error({
      //     message: '每一项都不能为空!'
      //   })
      //   return
      // }
      console.log('新增窗口的确认按钮', this)
      let that = this
      that.$axios.post(this.httpUrlWMK + 'jiujiangdongzhu/Details/caseAdd', qs.stringify({'labels': industryListNUM, 'industry': industryListText, 'company_name': companyName, 'company_content': companyContent, 'company_logo': companyLogo, 'next_create': nextCreate, 'next_img': nextImg, 'img_path': imgPath})).then(function (res) {
        console.log('hhhhhh', res)
      })
    },
    // 编辑窗口的确定按钮
    dialogFormChangeBtn () {
      console.log('编辑窗口的确认按钮')
    },
    // 上传图片
    beforeAvatarUploadLOGO (file) {
      // debugger;
      console.log(file, '文件')
      this.upload_filesLOGO = file
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
    handleAvatarSuccessLOGO (res, file) {
      // debugger
      console.log('file', file)
      console.log('res', res)
      if (res.code === '200') {
        this.fileImgIds = res
        this.imageUrlLOGO = URL.createObjectURL(file.raw)
        this.imgFalsePathLOGO = res
        this.imgListLOGO = file
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
    beforeAvatarUploadNEXT (file) {
      // debugger;
      console.log(file, '文件')
      this.upload_filesNEXT = file
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
    handleAvatarSuccessNEXT (res, file) {
      // debugger
      console.log('file', file)
      console.log('res', res)
      if (res.code === '200') {
        this.fileImgIds = res
        this.imageUrlNEXT = URL.createObjectURL(file.raw)
        this.imgFalsePathNEXT = res
        this.imgListNEXT = file
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
    // 上传图片列表
    handleRemove (file, fileList) {
      console.log('列表', fileList)
      // let that = this
      // fileList.map(function (item) {
      //   that.fileListRemove.push({path: item.response.path})
      // })
      this.fileListRemoveTyoe = 1
      if (this.fileListRemoveType === '0') {
        // 用 fileListText
        return
      } else {
        // 用 fileListRemove
        let that = this
        that.fileListText = []
        fileList.map(function (item) {
          that.fileListText.push({path: item.response.path})
        })
      }
      console.log('wwwwwwwwwwww', this.fileListText)
    },
    // 上传图片列表
    handlePreview (file) {
      console.log(this.fileList, '列表...!!!!!!!!!!!', file)
    },
    // 文件列表
    fileListChange (fileList) {
      console.log('列表会不会变', fileList)
      let listItem = fileList
      this.fileListText.push({path: listItem.path})
      console.log('aaaaaaaaaaaaaaaaaaaaaaa', this.fileListText)
    },
    // 选择公司名称q
    handleChange (value) {
      console.log('value', value)
      console.log('enenenen', this.$refs['cascaderAddr'].currentLabels)
    },
    // 搜索按钮
    searchBtn () {},
    // 编辑按钮
    changeBtn () {
      this.dialogFormChange = true
    },
    // 删除按钮
    cancelBtn () {
      this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.$message({
          type: 'success',
          message: '删除成功!'
        })
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消删除'
        })
      })
    },
    // 新增按钮
    addPhotoBtn () {
      this.dialogFormShow = true
    }
  }
}
</script>
<style scoped>
.detailCase{
  margin: 0;
  padding: 20px;
  text-align: left;
}
.detailCase .detailCaseTop{
  display: flex;
  justify-content: space-between;
}
.detailCase .timeSearch{
  display: inline-block;
}
.detailCase .fuzzySearch{
  display: flex;
  justify-content: space-between;
}
.detailCase .detailCaseBottom{
  margin-top: 2rem;
}
.detailCaseBottom .demo-table-expand {
  font-size: 0;
}
.detailCaseBottom .demo-table-expand label {
  width: 90px;
  color: #99a9bf;
}
.detailCaseBottom .demo-table-expand .el-form-item{
  margin-right: 0;
  margin-bottom: 0;
  width: 45%;
}
.detailCaseBottom .demo-table-expand .el-form-item:first-child{
  margin-right: 8%;
}
.detailCaseBottom .backBannerTableAdd{
  margin-bottom: 1rem;
}
.detailCaseBottom .pageNum{
  text-align: center;
  margin-top:1rem;
}
.detailCaseBottom .backBannerDialog{
  margin-top: 3vh;
}
</style>
<style>
.detailCaseBottom .el-table__row .cell{
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.detailCaseBottom .el-dialog__body{
  padding: 10px 20px 0px 20px;
}
.detailCaseBottom .avatar-uploader .el-upload{
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
}
.detailCaseBottom .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
}
.detailCaseBottom .avatar-uploader-icon{
    font-size: 28px;
    color: #8c939d;
    width: 100px;
    height: 100px;
    line-height: 100px;
    text-align: center;
}
.detailCaseBottom .avatar {
    width: 178px;
    height: 178px;
    display: block;
}
</style>
