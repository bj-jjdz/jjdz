<template>
  <div class="opinion">
    <!-- 查询 -->
    <div class="opinionTop">
        <div class="timeSearch">
          <span style="margin-right:20px">请选择日期</span>
          <el-date-picker
            :clearable=false
            v-model="timeValue"
            type="daterange"
            align="right"
            value-format='yyyy-MM-dd'
            placeholder="选择日期范围"
            range-separator="至"
            start-placeholder="开始日期"
            end-placeholder="结束日期"
            :picker-options="pickerOptions">
          </el-date-picker>
        </div>
        <div class="fuzzySearch"><el-input placeholder="请输入关键字" v-model="fuzzySearchText" clearable>
          </el-input><el-button icon="el-icon-search" @click="getData(1)">搜索</el-button>
        </div>
    </div>
    <!-- 表格 -->
    <el-table
      :data="tableData"
      style="width: 100%;margin-top:2rem;"
      max-height="600">
      <el-table-column type="expand">
        <template slot-scope="props">
          <el-form label-position="left" inline class="demo-table-expand">
            <el-form-item label="用户名称">
              <span>{{ props.row.name }}</span>
            </el-form-item>
            <el-form-item label="联系方式">
              <span>{{ props.row.phone }}</span>
            </el-form-item>
            <el-form-item label="" style="width:100%">
              <span style="color:#99a9bf;font-size:14px;margin-right:2rem;">描述</span>
              <span>{{ props.row.feedback }}</span>
            </el-form-item>
          </el-form>
        </template>
      </el-table-column>
      <el-table-column
        label="联系方式"
        prop="phone">
      </el-table-column>
      <el-table-column
        label="用户邮箱"
        prop="email">
      </el-table-column>
      <el-table-column
        label="用户名字"
        prop="name">
      </el-table-column>
      <el-table-column
        label="描述"
        prop="feedback"
        fit="false">
      </el-table-column>
    </el-table>
    <!-- 分页 -->
    <el-pagination
      background
      layout="prev, pager, next"
      :page-count="tot"
      :current-page="currentPage"
      @size-change="handleSizeChange"
      @current-change="listCurr"
      :prev-click="prev"
      :next-click="next"
      >
    </el-pagination>
  </div>
</template>
<script>
import qs from 'qs'

export default {
  data () {
    return {
      // 总页数
      totalPage: '',
      // 总条数
      totalCount: 0,
      currentPage: 1,
      prevDis: true,
      nextDis: false,
      formLabelWidth: '120px',
      dialogFormVisible: false,
      start_time: '',
      end_time: '',
      timeValue: '',
      fuzzySearchText: '',
      pageNum: '',
      input: '',
      pickerOptions: {
        shortcuts: [
          {
            text: '最近一周',
            onClick (picker) {
              const end = new Date()
              const start = new Date()
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 7)
              picker.$emit('pick', [start, end])
            }
          },
          {
            text: '最近一个月',
            onClick (picker) {
              const end = new Date()
              const start = new Date()
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 30)
              picker.$emit('pick', [start, end])
            }
          }
        ]
      },
      value2: '',
      tableData: []
    }
  },
  methods: {
    // 分页
    handleSizeChange (val) {
      const that = this
      that.pageLimit = val
      that.getData(val)
    },
    listCurr (val) {
      this.getData(val)
      // debugger
      // this.getData(this.currentPage)
    },
    next: function () {
      if (this.tableData.length === this.res.data.data) {
        this.currentPage = ++this.currentPage
        this.getData(this.currentPage)
      }
    },
    prev: function () {
      if (this.currentPage > 1) {
        this.currentPage = --this.currentPage
        this.getData(this.currentPage)
      }
    },
    getData (currentPage) {
      var that = this
      if (this.currentPage === null || this.currentPage === undefined || this.currentPage === '') {
        currentPage = 1
      }
      let data = {
        phone: this.fuzzySearchText,
        start_time: this.timeValue[0],
        end_time: this.timeValue[1],
        page: currentPage
      }
      that.$axios.post(this.httpUrlMK + '/jiujiangdongzhu/Suggest/ProposalList', qs.stringify(data)).then(res => {
        if (res.data.code === '200') {
          this.tableData = res.data.data
          this.totalCount = res.data.count
          this.tot = res.data.tot
        } else {
          this.tableData = res.data.data
          this.totalCount = res.data.count
          this.$message({
            message: '查询失败（没有数据）',
            type: 'error'
          })
        }
      })
    }
  },
  mounted () {
    this.getData(1)
    this.h = window.screen.availHeight - 320
  }
}
</script>

<style>
  .opinion{
    padding:1.25rem;;
  }
  .opinionTop{
    display: flex;
    justify-content: space-between;
  }
  .opinionTop .fuzzySearch{
    display: flex;
    justify-content: space-between;
  }
  .timeSearch{
    display: inline-block;
  }
  .block{
    text-align: left;
  }
  .demo-table-expand {
    font-size: 0;
  }
  .demo-table-expand label {
    width: 90px;
    color: #99a9bf;
  }
  .demo-table-expand .el-form-item {
    margin-right: 0;
    margin-bottom: 0;
    width: 50%;
  }
  .miaoshu{
    width:2rem!important;
    overflow-y: hidden;
  }
  .opinion .el-table .cell{
    overflow: hidden;
    text-overflow:ellipsis;
    white-space: nowrap;
  }
</style>
