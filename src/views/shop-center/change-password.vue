<template>
  <div class="change-password">
    <div class="pwd-alert">
      <el-alert
        title="定期更换密码可以让你的账户更安全；密码必须包含数字、字母、区分大小写，并且不少于8位"
        type="info"
        show-icon>
      </el-alert>
    </div>
    <el-form ref="form" :model="form" label-width="120px">
      <el-form-item label="当前密码">
        <el-input v-model="form.pwd"></el-input>
      </el-form-item>
      <el-form-item label="新密码">
        <el-input v-model="form.newPwd"></el-input>
      </el-form-item>
      <el-form-item label="再次输入密码">
        <el-input v-model="form.rePwd"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">确认修改</el-button>
        <el-button>取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
export default {
  data() {
    return {
      form: {}
    }
  },
  methods: {
    onSubmit() {}
  }
}
</script>
<style scoped lang="stylus" rel="stylesheet/stylus">
  .change-password
    width: 800px
    margin: 0 auto
    padding: 32px
    .pwd-alert
      margin-bottom: 20px
</style>
