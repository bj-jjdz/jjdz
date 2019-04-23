<template>
  <div>
    <el-row :gutter="10">
      <el-col class="block" :span= "5">
            <el-date-picker
              v-model="value2"
              type="daterange"
              align="right"
              unlink-panels
              range-separator="至"
              start-placeholder="开始日期"
              end-placeholder="结束日期"
              :picker-options="pickerOptions">
            </el-date-picker>
      </el-col>
      <el-col :span="4">
        <el-input v-model="input" placeholder="请输入用户"></el-input>
      </el-col>
      <el-col :span="2">
        <el-button type="primary"
            @click="getData(1)">查询</el-button>
      </el-col>
    </el-row>
  </div>
</template>
<script>
export default {
  data () {
    return {
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
      value2: ''
    }
  },
  methods: {
    getData (page) {
      alert('查询成功')
    }
  }
}
</script>

<style>
  .block{
    text-align: left;
  }
</style>
