<template>
  <div class="app-container">
    <el-table
      :data="tableData"
      border
      :header-cell-style="{background: '#f5f8fa'}"
      style="width: 100%; margin-top: 20px;">
      <el-table-column
        prop="name"
        label="操作人">
      </el-table-column>
      <el-table-column
        prop="time"
        label="操作时间">
      </el-table-column>
      <el-table-column
        prop="ip"
        label="IP">
      </el-table-column>
      <el-table-column
        prop="detail"
        label="操作明细">
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
        tableData: [{
          name: '操作管理员账号',
          time: '2018-09-21  08:50:08',
          ip: '222.169.185.112',
          detail: 'XXXX账号登录'
        }, {
          name: '操作管理员账号',
          time: '2018-09-21  08:50:08',
          ip: '222.169.185.112',
          detail: 'XXXX账号登录'
        }]
      }
    }
  }
</script>
<style scoped lang="stylus">
</style>
