<template>
  <div class="already">
    <el-table
      :data="tableData"
      border
      :header-cell-style="{background: '#f5f8fa'}"
      @selection-change="handleSelectionChange"
      style="width: 100%; margin-top: 20px;">
      <el-table-column
        prop="name"
        label="商家名称">
      </el-table-column>
      <el-table-column
        prop="location"
        label="商家位置">
      </el-table-column>
      <el-table-column
        prop="contact"
        label="联系人">
      </el-table-column>
      <el-table-column
        prop="tel"
        label="联系电话">
      </el-table-column>
      <el-table-column
        prop="applyTime"
        label="申请时间">
      </el-table-column>
      <el-table-column label="操作" align="center" width="230" class-name="small-padding fixed-width">
        <template slot-scope="scope">
          <el-button type="success" @click="showView(scope.row,'published')">详情
          </el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      style="margin: 10px 0"
      background
      layout="prev, pager, next"
      :total="1000">
    </el-pagination>
    <el-dialog title="申请入驻详情" :visible.sync="dialogFormVisible">
      <el-form :model="form">
        <el-form-item label="商家名称" :label-width="formLabelWidth">
          <span>大队长烧烤</span>
        </el-form-item>
        <el-form-item label="联系人" :label-width="formLabelWidth">
          <span>王大锤</span>
        </el-form-item>
        <el-form-item label="联系电话" :label-width="formLabelWidth">
          <span>15714316636</span>
        </el-form-item>
        <el-form-item label="商家位置" :label-width="formLabelWidth">
          <span>鸿达光电子产业园11号楼111室</span>
        </el-form-item>
        <el-form-item label="商家LOGO" :label-width="formLabelWidth">
          <img src="./license.png" />
        </el-form-item>
        <el-form-item label="商家LOGO" :label-width="formLabelWidth">
          <img src="./license.png" />
          <img src="./license.png" />
        </el-form-item>
        <el-form-item label="商家LOGO" :label-width="formLabelWidth">
          <img src="./license.png" />
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button type="primary" @click="dialogFormVisible = false">关 闭</el-button>
      </div>
    </el-dialog>
  </div>
</template>
<script>
export default {
  data() {
    return {
      searchInput: '',
      type: '1',
      tableData: [{
        name: '张亮麻辣烫(1店)',
        location: '鸿达光电子产业园11号楼111室',
        contact: '王力宏',
        tel: '15714316666',
        applyTime: '2019-02-04 10:20:21'
      }, {
        name: '大队长烧烤(1店)',
        location: '鸿达光电子产业园11号楼111室',
        contact: '王力宏',
        tel: '15714316666',
        applyTime: '2019-02-04 10:20:21'
      }, {
        name: '张亮麻辣烫(1店)',
        location: '鸿达光电子产业园11号楼111室',
        contact: '王力宏',
        tel: '15714316666',
        applyTime: '2019-02-04 10:20:21'
      }, {
        name: '大队长烧烤(1店)',
        location: '鸿达光电子产业园11号楼111室',
        contact: '王力宏',
        tel: '15714316666',
        applyTime: '2019-02-04 10:20:21'
      }],
      form: {},
      dialogFormVisible: false,
      formLabelWidth: '120px'
    }
  },
  methods: {
    handleSelectionChange(val) {
      this.multipleSelection = val
    },
    showView() {
      this.dialogFormVisible = true
    }
  }
}
</script>
<style scoped lang="stylus" rel="stylesheet/stylus">
  .already
    .search-line
      height: 40px
      line-height: 40px
      .search-input
        width: 200px
</style>
