<template>
  <div class="already">
    <el-row>
      <el-col :xs="24" :sm="24" :lg="12" class="card-panel-col">
        <div class="search-line">
          <span>商家名称：</span>
          <el-input
            class="search-input"
            placeholder="请输入内容"
            prefix-icon="el-icon-search"
            v-model="searchInput">
          </el-input>
        </div>
        <div class="search-line">
          <span>商家类型：</span>
          <el-radio v-model="type" label="1">全部</el-radio>
          <el-radio v-model="type" label="2">高级版</el-radio>
          <el-radio v-model="type" label="3">初级版</el-radio>
        </div>
        <div class="search-line">
          <el-button type="primary" icon="el-icon-search">搜索</el-button>
        </div>
      </el-col>
      <el-col :xs="24" :sm="24" :lg="12" class="card-panel-col">
        <div class="search-line">
          <span>可开通高级商家数量：10</span>
        </div>
        <div class="search-line">
          <span>可开通初级商家数量：10</span>
        </div>
        <div class="search-line">
          <el-button type="primary" icon="el-icon-edit" @click="addShop">添加商家</el-button>
        </div>
      </el-col>
    </el-row>
    <el-table
      :data="tableData"
      border
      :header-cell-style="{background: '#f5f8fa'}"
      @selection-change="handleSelectionChange"
      style="width: 100%; margin-top: 20px;">
      <el-table-column
        type="selection"
        width="55">
      </el-table-column>
      <el-table-column
        prop="name"
        label="商家名称">
      </el-table-column>
      <el-table-column
        prop="type"
        label="商家类型">
      </el-table-column>
      <el-table-column
        prop="unit"
        label="外卖提成方式">
      </el-table-column>
      <el-table-column
        prop="unitSend"
        label="配送提成方式">
      </el-table-column>
      <el-table-column
        prop="pay"
        label="配送费用">
      </el-table-column>
      <el-table-column
        width="180"
        prop="time"
        label="服务器到期时间">
      </el-table-column>
      <el-table-column label="操作" align="center" width="230" class-name="small-padding fixed-width">
        <template slot-scope="scope">
          <el-button type="primary" @click="onRecharge(scope.row)">充值</el-button>
          <el-button type="success" @click="handleModifyStatus(scope.row,'published')">详情
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
    <div class="search-line">
      <el-button type="primary" @click="addActivity">添加活动</el-button>
    </div>
    <el-dialog title="添加活动" :visible.sync="dialogFormVisible">
      <el-form :model="form">
        <el-form-item label="活动名称" :label-width="formLabelWidth">
          <el-checkbox-group v-model="checkList">
            <el-checkbox label="活动1"></el-checkbox>
            <el-checkbox label="活动2"></el-checkbox>
            <el-checkbox label="活动3"></el-checkbox>
          </el-checkbox-group>
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
        type: '高级版',
        unit: '每单10元',
        unitSend: '每单10元',
        pay: '20元',
        time: '2019-02-04(3天后到期)'
      }, {
        name: '大队长烧烤(1店)',
        type: '高级版',
        unit: '每单10元',
        unitSend: '每单10元',
        pay: '20元',
        time: '2019-02-04(3天后到期)'
      }, {
        name: '张亮麻辣烫(1店)',
        type: '高级版',
        unit: '每单10元',
        unitSend: '每单10元',
        pay: '20元',
        time: '2019-02-04(3天后到期)'
      }, {
        name: '大队长烧烤(1店)',
        type: '高级版',
        unit: '每单10元',
        unitSend: '每单10元',
        pay: '20元',
        time: '2019-02-04(3天后到期)'
      }],
      form: {},
      dialogFormVisible: false,
      formLabelWidth: '120px',
      checkList: ['活动1']
    }
  },
  methods: {
    handleSelectionChange(val) {
      this.multipleSelection = val
    },
    addActivity() {
      this.dialogFormVisible = true
    },
    onRecharge() {
      this.$router.push('/shop/recharge')
    },
    addShop() {
      this.$router.push('/shop/add')
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
