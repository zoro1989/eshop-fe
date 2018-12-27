<template>
  <div class="app-container">
    <div class="opt-bar">
      <span class="title">轮播页管理</span><span>最多可添加8个</span><el-button type="primary">添加轮播页</el-button>
    </div>
    <el-row :gutter="20">
      <el-col :span="5" v-for="(o, index) in 8" :key="o">
        <el-card :body-style="{ padding: '0px' }">
          <img :src="Simple" class="image">
          <div style="padding: 14px;">
            <span>{{index}}充值提现活动</span>
            <div class="bottom clearfix">
              <time class="time">2018-12-27 09:58</time>
              <el-button type="text" class="button" @click="dialogFormVisible = true">编辑</el-button>
              <el-button type="text" class="button" @click="ondelete">删除</el-button>
            </div>
          </div>
        </el-card>
      </el-col>
    </el-row>
    <el-dialog title="编辑轮播页" :visible.sync="dialogFormVisible">
      <el-form :model="form">
        <el-form-item label="标题" :label-width="formLabelWidth">
          <el-input
            class="search-input"
            placeholder="请输入标题"
            v-model="form.title">
          </el-input>
        </el-form-item>
        <el-form-item label="序号" :label-width="formLabelWidth">
          <el-input
            class="search-input"
            placeholder="请输入序号"
            v-model="form.no">
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
      formLabelWidth: '120px'
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
