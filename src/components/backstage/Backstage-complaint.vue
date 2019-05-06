<template>
  <div class="complaint">
    <!-- 头部 -->
    <div class="complaintTop">
        <div class="timeSearch">
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
            :picker-options="pickerOptions"
            change="clickBlur">
          </el-date-picker>
        </div>
        <div class="fuzzySearch"><el-input placeholder="请输入完整手机号" v-model="fuzzySearchText" clearable></el-input>
        <el-button icon="el-icon-search" @click="getData(1)">搜索</el-button></div>
    </div>
    <!-- 表单 -->
    <template>
      <el-table
        :data="tableData"
        border
        style="width: 100%;margin-top:1rem;"
        max-height="600">
        <el-table-column
          prop="phone"
          label="手机"
          min-width="15%">
        </el-table-column>
        <el-table-column
          prop="company"
          label="公司名称"
          min-width="20%">
        </el-table-column>
        <el-table-column
          prop="content"
          label="内容"
          min-width="70%">
        </el-table-column>
        <el-table-column label="状态"
                         min-width="10%"
                         align="center">
            <template slot-scope="item">
              <span v-if='item.row.state == 0' style="color:#f00;">未查看</span>
              <span v-else-if="item.row.state == 1" style="color:#00f;">已查看</span>
              <span v-else-if="item.row.state == 2" style="color:#0f0;">已联系</span>
            </template>
        </el-table-column>
        <el-table-column
          prop=""
          label="操作"
          min-width="10%">
          <template slot-scope="scope" class="dialog-footer">
            <el-button @click="xgBtn(scope.row)">修改</el-button>
          </template>
        </el-table-column>
      </el-table>
    </template>
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
    <el-dialog title="修改信息" :visible.sync="dialogFormVisible">
      <el-form :model="status">
        <el-form-item label="状态选择" :label-width="formLabelWidth">
          <el-select v-model="megStatus" placeholder="请选择修改">
            <el-option v-for="item in options"
                       :key="item.value"
                       :label="item.label"
                       :value='item.value'
                       style="margin-bottom:0.2rem"
                       >
            </el-option>
          </el-select>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
          <el-button @click='dialogFormVisible = false'>取 消</el-button>
          <el-button type="primary" @click="selects">确 定</el-button>
      </div>
    </el-dialog>
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
      fuzzySearchText: '',
      timeValue: '',
      input: '',
      status: {
        region: ''
      },
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
      tableData: [],
      start_time: '',
      end_time: '',
      options: [
        {
          value: '0',
          label: '未查看'
        },
        {
          value: '1',
          label: '已查看'
        },
        {
          value: '2',
          label: '已联系'
        }
      ],
      megStatus: '',
      rowId: '',
      rowState: ''
    }
  },
  methods: {
    clickBlur () {
      this.getData(this.currentPage)
    },
    // 分页
    handleSizeChange (val) {
      const that = this
      that.getData(this.currentPage)
    },
    listCurr (val) {
      this.getData(val)
      this.getData(this.currentPage)
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
      this.currentPage = currentPage
      if (this.currentPage === null || this.currentPage === undefined || this.currentPage === '') {
        currentPage = 1
      }
      let data = {
        phone: this.fuzzySearchText,
        start_time: this.timeValue[0],
        end_time: this.timeValue[1],
        page: this.currentPage
      }
      var that = this
      that.$axios.post(this.httpUrlMK + '/jiujiangdongzhu/Need/NeedList', qs.stringify(data)).then(res => {
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
    },
    handleClose (done) {
      this.$confirm('确认关闭？')
        .then(_ => {
          done()
        })
        .catch(_ => {})
    },
    xgBtn (row) {
      this.rowId = row.id
      this.rowState = row.state
      this.dialogFormVisible = true
      console.log(this.status.region)
    },
    selects: function () {
      var that = this
      let data = {
        id: that.rowId,
        state: that.megStatus
      }
      that.$axios.post(this.httpUrlMK + '/jiujiangdongzhu/Need/NeedSate', qs.stringify(data)).then(res => {
        if (res.data.code === '200') {
          this.$message({
            message: '修改成功',
            type: 'success'
          })
          this.getData(this.currentPage)
        } else {
          this.$message({
            message: '修改失败(请勿重复更改)',
            type: 'success'
          })
          this.getData(this.currentPage)
        }
      })
      this.dialogFormVisible = false
      this.getData()
    }
  },
  mounted () {
    // this.start_time = this.formatDate(new Date().getTime() - 3600 * 1000 * 24 * 7)
    // this.end_time = this.formatDate(new Date().getTime() + 3600 * 1000 * 24)
    // this.timeValue = [new Date().getTime() - 3600 * 1000 * 24 * 7, new Date().getTime() + 3600 * 1000 * 24]
    this.getData(1)
    this.h = window.screen.availHeight - 320
  }
}
</script>

<style>
  .complaint{
    padding:1.25rem;
  }
  .block{
    text-align: left;
  }
  .complaintTop{
    display: flex;
    justify-content: space-between;
  }
  .complaintTop .fuzzySearch{
    display: flex;
    justify-content: space-between;
  }
  .timeSearch{
    display: inline-block;
  }

</style>
