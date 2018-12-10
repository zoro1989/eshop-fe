<template>
  <div class="app-container">
    <el-row>
      <el-col :xs="24" :sm="24" :lg="12" class="card-panel-col">
        <el-form ref="form" :model="form" label-width="120px">
          <div class="title">商家信息<span class="desc">添加商家后，默认开启运营状态</span></div>
          <el-form-item label="业务类型">
            <el-checkbox-group v-model="checkList">
              <el-checkbox label="快餐"></el-checkbox>
              <el-checkbox label="汉堡薯条"></el-checkbox>
              <el-checkbox label="意面披萨"></el-checkbox>
              <el-checkbox label="包子粥店"></el-checkbox>
              <el-checkbox label="鸭脖卤味"></el-checkbox>
              <el-checkbox label="日料寿司"></el-checkbox>
              <el-checkbox label="韩式料理"></el-checkbox>
              <el-checkbox label="香锅干锅"></el-checkbox>
            </el-checkbox-group>
          </el-form-item>
          <el-form-item label="商家类型">
            <div>
              <el-radio v-model="radio" label="1">高级版</el-radio><span class="desc">可开通高级商家数量: 10</span>
            </div>
            <div>
              <el-radio v-model="radio" label="2">初级版</el-radio><span class="desc">可开通初级商家数量: 10</span>
            </div>
          </el-form-item>
          <el-form-item label="商家名称">
            <el-input v-model="form.shopname" placeholder="请输入商家名称" class="input-box"></el-input>
          </el-form-item>
          <el-form-item label="联系人">
            <el-input v-model="form.contact" placeholder="请输入联系人" class="input-box"></el-input>
          </el-form-item>
          <el-form-item label="联系电话">
            <el-input v-model="form.tel" placeholder="请输入联系电话" class="input-box"></el-input>
          </el-form-item>
          <el-form-item label="商家地址">
            <el-input v-model="form.addr" placeholder="请输入商家地址" class="input-box"></el-input>
          </el-form-item>
          <el-form-item label="商家LOGO">
            <img src="./license.png" />
          </el-form-item>
          <el-form-item label="外卖提成方式">
            <el-select v-model="value" placeholder="请选择">
              <el-option label="固定5元" value="5"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="固定配送费用">
            <el-input v-model="form.pay" placeholder="请输入固定配送费用" class="input-box"></el-input><span>元</span>
          </el-form-item>
          <div class="title">商家信息</div>
          <el-form-item label="登录账号">
            <el-input v-model="form.account" placeholder="请输入登录账号" class="input-box"></el-input>
          </el-form-item>
          <el-form-item label="登录密码">
            <el-input v-model="form.password" placeholder="请输入登录密码" class="input-box"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="onSubmit">确认</el-button>
            <el-button @click="cancel">取消</el-button>
          </el-form-item>
        </el-form>
      </el-col>
      <el-col :xs="24" :sm="24" :lg="12" class="card-panel-col">
        <el-form ref="form" :model="form" label-width="120px">
          <div class="title">商家资质</div>
          <el-form-item label="法人姓名">
            <el-input v-model="form.legalName" placeholder="请输入法人姓名" class="input-box"></el-input>
          </el-form-item>
          <el-form-item label="法人身份证号">
            <el-input v-model="form.legalID" placeholder="请输入法人身份证号" class="input-box"></el-input>
          </el-form-item>
          <el-form-item label="身份证正反面">
            <img src="./license.png" />
            <img src="./license.png" />
          </el-form-item>
          <el-form-item label="手持身份证">
            <img src="./license.png" />
          </el-form-item>
          <el-form-item label="营业执照">
            <img src="./license.png" />
          </el-form-item>
          <el-form-item label="证件地址">
            <el-input v-model="form.idAddr" placeholder="请输入证件地址" class="input-box"></el-input>
          </el-form-item>
          <el-form-item label="餐饮服务许可证">
            <img src="./license.png" />
          </el-form-item>
          <el-form-item label="许可证名称">
            <el-input v-model="form.licenseName" placeholder="请输入许可证名称" class="input-box"></el-input>
          </el-form-item>
          <el-form-item label="许可证编号">
            <el-input v-model="form.licenseCode" placeholder="请输入许可证编号" class="input-box"></el-input>
          </el-form-item>
          <el-form-item label="许可证地址">
            <el-input v-model="form.licenseAddr" placeholder="请输入许可证地址" class="input-box"></el-input>
          </el-form-item>
          <el-form-item label="许可证有效期">
            <el-input v-model="form.licenseExpire" placeholder="请输入许可证有效期" class="input-box"></el-input>
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>
  </div>
</template>
<script>
export default {
  data() {
    return {
      form: {},
      checkList: [],
      radio: '1',
      value: '5'
    }
  },
  methods: {
    onSubmit() {},
    cancel() {
      this.$store.dispatch('delView', this.$route).then(({ visitedViews }) => {
        this.$router.go(-1)
      })
    }
  }
}
</script>
<style scoped lang="stylus" rel="stylesheet/stylus">
  .app-container
    position: fixed
    overflow-y: auto
    z-index: 3
    background: #fff
    top: 85px
    left: 180px
    right: 0
    bottom: 0
    .card-panel-col
      padding: 10px 30px 30px 30px
    .title
      margin-bottom: 10px
      font-weight: bold
      font-size: 18px
      .desc
        font-size: 12px
    .input-box
      width: 90%
    .desc
      margin-left: 20px
</style>
