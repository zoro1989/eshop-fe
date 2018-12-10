<template>
  <div class="app-container">
    <div id="allmap" style="width: 100%; height: 100%;"></div>
  </div>
</template>
<script>
import BMap from 'BMap'
export default {
  data() {
    return {
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
</style>
