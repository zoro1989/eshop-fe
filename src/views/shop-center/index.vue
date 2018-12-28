<template>
  <div class="shop-center">
    <el-row class="panel-group">
      <div class="card-panel">
        <el-col :xs="24" :sm="24" :lg="8" class="card-panel-col">
          <div class="card-panel-description">
            <div class="card-panel-text">XXXX商城有限公司</div>
          </div>
        </el-col>
        <el-col :xs="12" :sm="12" :lg="4" class="card-panel-col">
          <div class="card-panel-description">
            <div class="card-panel-text">账户收入</div>
            <div>
              <count-to :start-val="0" :end-val="2012" :duration="3200" class="card-panel-num"/>元
            </div>
          </div>
        </el-col>
        <el-col :xs="12" :sm="12" :lg="4" class="card-panel-col">
          <div class="card-panel-description">
            <div class="card-panel-text">服务器到期时间</div>
            <div class="expire-date">
              2020-02-09到期(还有201天)
            </div>
          </div>
        </el-col>
        <el-col :xs="12" :sm="12" :lg="4" class="card-panel-col">
          <div class="card-panel-description">
            <div class="card-panel-text">短信剩余数量</div>
            <div>
              <count-to :start-val="0" :end-val="191" :duration="3200" class="card-panel-num"/>条
            </div>
          </div>
        </el-col>
        <el-col :xs="12" :sm="12" :lg="4" class="card-panel-col">
          <div class="card-panel-description">
            <div style="margin-bottom: 10px">
              <el-button type="primary" icon="el-icon-search" @click="onlineCharge">在线充值</el-button>
            </div>
            <div>
              <el-button type="primary" icon="el-icon-search" @click="onOrder">账单记录</el-button>
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
    },
    onOrder() {
      this.$router.push('/charge-record/index')
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
