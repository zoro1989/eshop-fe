<template>
  <div class="app-container">
    <div class="opt-bar">
      <el-form :inline="true" :model="form" class="demo-form-inline">
        <el-form-item label="用户姓名">
          <el-input v-model="form.username" placeholder="请输入用户姓名"></el-input>
        </el-form-item>
        <el-form-item label="用户电话">
          <el-input v-model="form.tel" placeholder="请输入用户电话"></el-input>
        </el-form-item>
        <el-form-item label="注册时间">
          <el-date-picker
            v-model="form.time"
            type="daterange"
            range-separator="至"
            start-placeholder="开始日期"
            end-placeholder="结束日期">
          </el-date-picker>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSearch">查询</el-button>
        </el-form-item>
      </el-form>
    </div>
    <el-table
      :data="tableData"
      border
      :header-cell-style="{background: '#f5f8fa'}"
      style="width: 100%; margin-top: 20px;">
      <el-table-column
        prop="name"
        label="用户姓名">
      </el-table-column>
      <el-table-column
        prop="tel"
        label="用户电话">
      </el-table-column>
      <el-table-column
        prop="amount"
        label="外卖金额">
      </el-table-column>
      <el-table-column
        prop="count"
        label="订单数量">
      </el-table-column>
      <el-table-column
        prop="time"
        label="注册时间">
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
      form: {},
      tableData: [{
        name: '赵铁柱',
        tel: '15714316636',
        amount: '8081元',
        count: '2单',
        time: '2018-02-06'
      }, {
        name: '天儿牛',
        tel: '15714316636',
        amount: '8081元',
        count: '2单',
        time: '2018-02-06'
      }, {
        name: '王大锤',
        tel: '15714316636',
        amount: '8081元',
        count: '2单',
        time: '2018-02-06'
      }, {
        name: '赵四儿',
        tel: '15714316636',
        amount: '8081元',
        count: '2单',
        time: '2018-02-06'
      }, {
        name: '王大拿',
        tel: '15714316636',
        amount: '8081元',
        count: '2单',
        time: '2018-02-06'
      }]
    }
  }
}
</script>
