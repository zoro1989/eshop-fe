<template>
  <div class="app-container">
    <div class="opt-bar">
      商家类型
      <el-radio-group v-model="radio2">
        <el-radio :label="3">全部</el-radio>
        <el-radio :label="6">高级版</el-radio>
        <el-radio :label="9">初级版</el-radio>
      </el-radio-group>
    </div>
    <div id="allmap" style="width: 100%; height: 100%;"></div>
  </div>
</template>
<script>
import BMap from 'BMap'
export default {
  data() {
    return {
      radio2: 3,
      map: null
    }
  },
  mounted() {
    this.map = new BMap.Map('allmap')
    let point = new BMap.Point(125.313642427, 43.8983376071)
    this.map.centerAndZoom(point, 14)
  }
}
</script>
<style scoped lang="stylus" rel="stylesheet/stylus">
  .app-container
    position: absolute
    top: 0
    left: 0
    right: 0
    bottom: 0
    .opt-bar
      padding: 10px
</style>
