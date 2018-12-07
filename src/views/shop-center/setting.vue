<template>
  <div class="setting">
    <el-col :xs="24" :sm="24" :lg="12" class="card-panel-col">
      <el-form ref="form" :model="form" label-width="80px">
        <el-form-item label="账号">
          <el-input v-model="form.account"></el-input>
        </el-form-item>
        <el-form-item label="联系人">
          <el-input v-model="form.contact"></el-input>
        </el-form-item>
        <el-form-item label="联系电话">
          <el-input v-model="form.tel"></el-input>
        </el-form-item>
        <el-form-item label="客服电话">
          <el-input v-model="form.serviceTel"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" size="mini">保存</el-button>
          <el-button size="mini">取消</el-button>
        </el-form-item>
      </el-form>
    </el-col>
    <el-col :xs="24" :sm="24" :lg="12" class="card-panel-col">
      <div class="pay-title">支付配置</div>
      <div class="pay-title"><el-checkbox v-model="wxPay">微信支付</el-checkbox></div>
      <div class="input-box">
        <div class="input-content">
          <span>微信公钥:</span><el-input v-model="form.wxPublicKey"></el-input>
        </div>
        <div class="input-content">
          <span>微信私钥:</span><el-input v-model="form.wxPrivateKey"></el-input>
        </div>
      </div>
      <div class="pay-title"><el-checkbox v-model="wxPay">支付宝支付</el-checkbox></div>
      <div class="input-box">
        <div class="input-content">
          <span>支付宝公钥:</span><el-input v-model="form.aliPublicKey"></el-input>
        </div>
        <div class="input-content">
          <span>支付宝私钥:</span><el-input v-model="form.aliPrivateKey"></el-input>
        </div>
      </div>
    </el-col>
  </div>
</template>
<script>
export default {
  data() {
    return {
      form: {},
      wxPay: false,
      aliPay: false
    }
  }
}
</script>
<style lang="stylus" scoped rel="stylesheet/stylus">
  .setting
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
</style>
