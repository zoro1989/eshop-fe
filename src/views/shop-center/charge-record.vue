<template>
  <div class="charge-record">
    <div class="search-line">
      <span>充值类型</span>
      <el-radio-group v-model="type">
        <el-radio :label="1">全部</el-radio>
        <el-radio :label="2">短信</el-radio>
        <el-radio :label="3">服务器费用</el-radio>
      </el-radio-group>
    </div>
    <div class="search-line">
      <span>充值方式</span>
      <el-radio-group v-model="way">
        <el-radio :label="1">全部</el-radio>
        <el-radio :label="2">在线充值</el-radio>
        <el-radio :label="3">人工充值</el-radio>
      </el-radio-group>
    </div>
    <div class="search-line">
      <el-button type="primary">搜索</el-button>
    </div>
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
        prop="time"
        label="服务器到期时间">
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
    <div class="search-line">
      <el-button type="primary">添加活动</el-button>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      type: 1,
      way: 1,
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
      }]
    }
  }
}
</script>
<style scoped lang="stylus" rel="stylesheet/stylus">
  .charge-record
    padding: 32px
    .search-line
      height: 40px
      line-height: 40px
      .search-input
        width: 200px
</style>
