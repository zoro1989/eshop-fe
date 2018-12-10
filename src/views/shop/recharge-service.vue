<template>
  <div class="setting">
    <el-tabs v-model="activeName">
      <el-tab-pane label="服务器费用" name="1">
        <el-row :gutter="40" class="panel-group">
          <el-col :xs="24" :sm="24" :lg="8" class="card-panel-col">
            <div class="card-panel">
              <div class="card-panel-description">
                <div class="card-panel-text">1年套餐</div>
                <div class="card-panel-num">480元</div>
              </div>
            </div>
          </el-col>
          <el-col :xs="24" :sm="24" :lg="8" class="card-panel-col">
            <div class="card-panel">
              <div class="card-panel-description">
                <div class="card-panel-text">2年套餐</div>
                <div class="card-panel-num">960元</div>
              </div>
            </div>
          </el-col>
          <el-col :xs="24" :sm="24" :lg="8" class="card-panel-col">
            <div class="card-panel">
              <div class="card-panel-description">
                <div class="card-panel-text">3年套餐</div>
                <div class="card-panel-num">1580元</div>
              </div>
            </div>
          </el-col>
        </el-row>
        <div class="new-line">
          <img src="@/assets/wx.png" class="wx-img" width="150">
          <span class="pay-count">
            支付金额<span class="yuan">960元</span>
          </span>
        </div>
        <div class="new-line">
          <el-button type="primary" plain @click="goBack">&lt;返回</el-button>
        </div>
        <div class="new-line">
          <el-checkbox v-model="checked">麒麟技术服务协议</el-checkbox>
        </div>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>
<script>
export default {
  data() {
    return {
      activeName: '1',
      checked: true
    }
  },
  methods: {
    goBack() {
      this.$router.go(-1)
    }
  }
}
</script>
<style lang="stylus" scoped rel="stylesheet/stylus">
  .setting
    .new-line
      margin: 20px 0
    .card-panel-col
      padding: 10px
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
    .pay-title
      height: 40px
      line-height: 40px
      margin-bottom: 22px
      font-weight: bold
    .input-box
      padding-left: 30px
      .input-content
        height: 40px
        margin-bottom: 22px
        display: flex
        align-items: center
        >span
          width: 80px
          flex: 0 0 80px
    .pay-count
      padding-left: 10px
      font-size: 20px
      display: inline-block
      height: 150px
      line-height: 150px
      vertical-align: middle
      .yuan
        padding-left: 10px
        color: #36a3f7
        font-weight: bold
    .wx-img
      vertical-align: middle
</style>
