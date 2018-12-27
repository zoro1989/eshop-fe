<template>
  <div class="app-container">
    <el-row :gutter="20">
      <el-col :span="5" v-for="(o, index) in 3" :key="o">
        <el-card :body-style="{ padding: '0px' }">
          <img :src="Simple" class="image">
          <div style="padding: 14px;">
            <span>活动版块{{index}}</span>
            <div class="bottom clearfix">
              <time class="time">2018-12-27 09:58</time>
              <el-button type="text" class="button" @click="dialogFormVisible = true">编辑</el-button>
            </div>
          </div>
        </el-card>
      </el-col>
    </el-row>
    <el-table
      :data="tableData"
      border
      :header-cell-style="{background: '#f5f8fa'}"
      style="width: 100%; margin-top: 20px;">
      <el-table-column
        prop="name"
        label="商家名称">
      </el-table-column>
      <el-table-column
        prop="type"
        label="商家类型">
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
        <el-form-item label="标题" :label-width="formLabelWidth">
          <el-input
            class="search-input"
            placeholder="请输入标题"
            v-model="form.title">
          </el-input>
        </el-form-item>
        <el-form-item label="图片" :label-width="formLabelWidth">
          <span>要求上传150*100像素图片</span>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button type="primary" @click="dialogFormVisible = false">关 闭</el-button>
      </div>
    </el-dialog>
  </div>
</template>
<script>
import Simple from './simple.png'
export default {
  data() {
    return {
      Simple,
      form: {},
      dialogFormVisible: false,
      formLabelWidth: '120px',
      tableData: [{
        name: '张亮麻辣烫(1店)',
        type: '高级版'
      }, {
        name: '大队长烧烤(1店)',
        type: '高级版'
      }, {
        name: '张亮麻辣烫(1店)',
        type: '高级版'
      }, {
        name: '大队长烧烤(1店)',
        type: '高级版'
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
