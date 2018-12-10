<template>
  <div class="shop-center">
    <el-row class="panel-group">
      <div class="card-panel">
        <el-col :xs="2" :sm="2" :lg="2" class="card-panel-col">
          <div class="card-panel-description">
            <img src="./avatar.png" width="56" height="56"/>
          </div>
        </el-col>
        <el-col :xs="12" :sm="12" :lg="12" class="card-panel-col">
          <div class="card-panel-description">
            <div class="card-panel-text">大队长烧烤（商家名称）</div>
            <div class="expire-date">
              服务器到期时间：2020-02-09（还有402天到期）
            </div>
          </div>
        </el-col>
      </div>
    </el-row>
    <el-row class="panel-group">
      <div class="card-panel">
        <router-view></router-view>
      </div>
    </el-row>
  </div>
</template>
<script>
import CountTo from 'vue-count-to'
export default {
  components: {
    CountTo
  },
  data() {
    return {
      form: {},
      wxPay: false,
      aliPay: false
    }
  },
  methods: {
    onlineCharge() {
      this.$router.push('/shop-center/index/online-charge')
    }
  }
}
</script>
<style scoped lang="stylus" rel="stylesheet/stylus">
  .shop-center
    /*background-color: #f0f2f5*/
    padding: 0 10px 10px 10px
    .panel-group
      margin-top: 10px
      .card-panel
        cursor: pointer
        font-size: 14px
        position: relative
        overflow: hidden
        color: #666
        background: #fff
        box-shadow: 4px 4px 40px rgba(0, 0, 0, .05)
        border-color: rgba(0, 0, 0, .05)
        padding: 26px
        .card-panel-col
          padding: 10px
          .card-panel-description
            font-weight: bold
            .card-panel-text
              line-height: 18px
              color: rgba(0, 0, 0, 0.45)
              font-size: 16px
              margin-bottom: 12px
            .card-panel-num
              font-size: 20px
              height: 25px
              line-height: 25px
            .expire-date
              height: 25px
              line-height: 30px
</style>
