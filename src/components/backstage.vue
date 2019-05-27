<template>
    <div class="backStage">
        <el-row>
            <el-col :span="3">
                <div>
                    <el-tree :data="dataTree" node-key="id" defaultExpandAll :props="defaultProps" @node-click="handleNodeClick" default-expand-all="true"></el-tree>
                </div>
            </el-col>
            <el-col :span="21"><div><router-view/></div></el-col>
        </el-row>
    </div>
</template>
<script>
export default {
  data () {
    return {
      dataTree: [{
        id: 1,
        // icon: 'el-icon-menu',
        label: 'banner图修改'
      }, {
        id: 2,
        // icon: 'el-icon-menu',
        label: '新闻咨询'
      }, {
        id: 3,
        // icon: 'el-icon-menu',
        label: '意见反馈'
      }, {
        id: 4,
        // icon: 'el-icon-menu',
        label: '客户需求'
      }, {
        id: 5,
        // icon: 'el-icon-menu',
        label: '案例图片修改'
      }],
      defaultProps: {
        children: 'children',
        label: 'label'
      }
    }
  },
  methods: {
    handleNodeClick (data) {
      console.log(data)
      const type = data.$treeNodeId
      console.log(type)
      if (type === 1) {
        this.$router.push('/backstage/backstageBanner')
      } else if (type === 2) {
        this.$router.push('/backstage/backstageNews')
      } else if (type === 3) {
        this.$router.push('/backstage/backstageOpinion')
      } else if (type === 4) {
        this.$router.push('/backstage/backstageComplaint')
      } else if (type === 5) {
        this.$router.push('/backstage/backstageCase')
      }
    }
  }
}
</script>

<style scoped>
.backStage{
  width: 100%;
  min-height: calc(100% - 14rem);
  height: 53.97rem;
}
.tree-icon {
  display: inline-block;
}

</style>
<style>
.backStage .el-icon-caret-right:before{
    content: "\E620";
}
.backStage .el-tree-node__expand-icon.is-leaf{
  color: #CCC;
}
.backStage .tree .el-icon-caret-right:before {
  content: "\E620";
  font-size: 18px;
}
.backStage .tree .el-tree-node__expand-icon.expanded.el-icon-caret-right:before {
  content: "\E620";
  font-size: 18px;
}
.backStage .el-tree{
  text-align: center;
}
.backStage .el-tree-node{
  text-align: center;
}
.backStage .el-tree-node__content{
  height: 60px;
}
.backStage .el-tree-node__content:hover{
  background-color: #E4E7ED;
  color: #409EFF;
}
</style>
