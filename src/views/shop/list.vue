<template>
  <div class="app-container">
    <el-tabs v-model="activeTab">
      <el-tab-pane label="已入驻商家" name="1">
        <already></already>
      </el-tab-pane>
      <el-tab-pane label="申请入驻商家" name="2">
        <apply></apply>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>
<script>
import Already from './already'
import Apply from './apply'
export default {
  components: {
    Already,
    Apply
  },
  data() {
    return {
      activeTab: '1'
    }
  }
}
</script>
<style scoped lang="stylus" rel="stylesheet/stylus">
</style>
