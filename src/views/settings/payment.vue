<template>
  <div class="app-container">
    <div class="opt-bar">
      <el-button type="primary" @click="dialogFormVisible = true">添加提成方式</el-button>
    </div>
    <el-table
      :data="tableData"
      border
      :header-cell-style="{background: '#f5f8fa'}"
      style="width: 100%; margin-top: 20px;">
      <el-table-column
        prop="name"
        label="提成名称">
      </el-table-column>
      <el-table-column label="操作" align="center" width="230" class-name="small-padding fixed-width">
        <template slot-scope="scope">
          <el-button type="success">详情</el-button>
          <el-button type="danger">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      style="margin: 10px 0"
      background
      layout="prev, pager, next"
      :total="1000">
    </el-pagination>
    <el-dialog title="编辑轮播页" :visible.sync="dialogFormVisible">
      <el-form :model="form">
        <el-form-item label="提成名称" :label-width="formLabelWidth">
          <el-input
            class="search-input"
            placeholder="请输入提成名称"
            v-model="form.title">
          </el-input>
        </el-form-item>
        <div>
          <div>当订单金额大于<el-input v-model="form.username" placeholder="请输入" style="width: 100px"></el-input>元</div>
          <div>每单扣取<el-input v-model="form.username" placeholder="请输入" style="width: 100px"></el-input>%信息费，同时扣取<el-input v-model="form.username" placeholder="请输入" style="width: 100px"></el-input>元</div>
        </div>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button type="primary" @click="dialogFormVisible = false">关 闭</el-button>
      </div>
    </el-dialog>
  </div>
</template>
<script>
import Type from './type.png'
export default {
  data() {
    return {
      form: {},
      dialogFormVisible: false,
      formLabelWidth: '120px',
      tableData: [{
        name: '烧烤',
        img: Type,
        no: '1'
      }, {
        name: '火锅',
        img: Type,
        no: '2'
      }]
    }
  },
  methods: {
    ondelete() {
      this.$confirm('确认要删除吗？')
        .then(_ => {
        })
        .catch(_ => {})
    }
  }
}
</script>
<style scoped lang="stylus" rel="stylesheet/stylus">
  .app-container
    .opt-bar
      padding: 10px
      .title
        font-size: 20px
        font-weight: bold
        color: #303133
    .image
      width: 100%
</style>
