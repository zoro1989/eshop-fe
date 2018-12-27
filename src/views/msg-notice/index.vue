<template>
  <div class="app-container">
    <div class="opt-bar">
      <el-button type="primary" @click="dialogFormVisible = true">添加新公告</el-button>
    </div>
    <el-table
      :data="tableData"
      border
      :header-cell-style="{background: '#f5f8fa'}"
      style="width: 100%; margin-top: 20px;">
      <el-table-column
        prop="title"
        label="标题">
      </el-table-column>
      <el-table-column
        prop="time"
        label="发布时间">
      </el-table-column>
      <el-table-column label="操作" align="center" width="230" class-name="small-padding fixed-width">
        <template slot-scope="scope">
          <el-button type="success" @click="dialogFormVisible = true">编辑</el-button>
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
    <el-dialog title="文章信息" :visible.sync="dialogFormVisible" class="rich-txt" width="1200px" top="5vh">
      <el-form :model="form">
        <el-form-item label="标题" :label-width="formLabelWidth">
          <el-input v-model="form.title" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="文章内容" :label-width="formLabelWidth">
          <ueditor ref="editor" :value="form.content"></ueditor>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>
<script>
import Ueditor from '@/components/ueditor/ueditor'
export default {
  components: {
    Ueditor
  },
  data() {
    return {
      form: {},
      dialogFormVisible: false,
      formLabelWidth: '120px',
      tableData: [{
        title: '今天有活动啦',
        time: '2018-09-21  08:50:08'
      }, {
        title: '今天有活动啦',
        time: '2018-09-21  08:50:08'
      }, {
        title: '今天有活动啦',
        time: '2018-09-21  08:50:08'
      }, {
        title: '今天有活动啦',
        time: '2018-09-21  08:50:08'
      }]
    }
  }
}
</script>
<style scoped lang="stylus">
  .app-container
    .opt-bar
      padding: 10px
</style>
