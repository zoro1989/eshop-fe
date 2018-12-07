<template>
  <div class="app-container">
    <el-row>
      <el-col :xs="24" :sm="24" :lg="12" class="card-panel-col">
        <div class="search-line">
          <span>商家名称：</span>
          <el-input
            class="search-input"
            placeholder="请输入内容"
            prefix-icon="el-icon-search"
            size="mini"
            v-model="searchInput">
          </el-input>
        </div>
        <div class="search-line">
          <span>统计时间：</span>
          <el-date-picker
            size="mini"
            v-model="sumTime"
            type="daterange"
            range-separator="~"
            start-placeholder="开始日期"
            end-placeholder="结束日期">
          </el-date-picker>
        </div>
        <div class="search-line">
          <span>商家类型：</span>
          <el-radio v-model="type" label="1">全部</el-radio>
          <el-radio v-model="type" label="2">高级版</el-radio>
          <el-radio v-model="type" label="3">初级版</el-radio>
        </div>
        <div class="search-line">
          <el-button type="primary" size="mini" icon="el-icon-search">搜索</el-button>
          <el-button type="primary" size="mini" icon="el-icon-download">导出</el-button>
        </div>
      </el-col>
    </el-row>
    <el-table
      size="mini"
      :data="tableData"
      border
      show-summary
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
        prop="count"
        label="订单数量">
      </el-table-column>
      <el-table-column
        prop="pay"
        label="用户支付">
      </el-table-column>
      <el-table-column
        prop="totalPay"
        label="外卖总收入">
      </el-table-column>
      <el-table-column
        prop="sendPay"
        label="配送总收入">
      </el-table-column>
      <el-table-column label="操作" align="center" width="230" class-name="small-padding fixed-width">
        <template slot-scope="scope">
          <el-button type="primary" size="mini" @click="handleUpdate(scope.row)">充值</el-button>
          <el-button size="mini" type="success" @click="handleModifyStatus(scope.row,'published')">详情
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
  </div>
</template>
<script>
export default {
  data() {
    return {
      sumTime: [],
      searchInput: '',
      type: '1',
      tableData: [{
        name: '张亮麻辣烫(1店)',
        type: '高级版',
        count: 100,
        pay: 50.00,
        totalPay: -5.00,
        sendPay: -5.00
      }, {
        name: '大队长烧烤(1店)',
        type: '高级版',
        count: 100,
        pay: 50.00,
        totalPay: -5.00,
        sendPay: -5.00
      }, {
        name: '张亮麻辣烫(1店)',
        type: '高级版',
        count: 100,
        pay: 50.00,
        totalPay: -5.00,
        sendPay: -5.00
      }, {
        name: '大队长烧烤(1店)',
        type: '高级版',
        count: 100,
        pay: 50.00,
        totalPay: -5.00,
        sendPay: -5.00
      }]
    }
  },
  methods: {
    handleSelectionChange(val) {
      this.multipleSelection = val
    }
  }
}
</script>
<style scoped lang="stylus" rel="stylesheet/stylus">
  .app-container
    .search-line
      height: 40px
      line-height: 40px
      .search-input
        width: 200px
</style>
