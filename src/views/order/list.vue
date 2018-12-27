<template>
  <div class="app-container">
    <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
      <el-menu-item index="1">待接单</el-menu-item>
      <el-menu-item index="2">已接单</el-menu-item>
      <el-menu-item index="3">配送中</el-menu-item>
      <el-menu-item index="4">等待用户确认</el-menu-item>
      <el-menu-item index="5">已完成</el-menu-item>
      <el-menu-item index="6">退单</el-menu-item>
    </el-menu>
    <div class="opt-bar">
      <el-form :inline="true" :model="form" class="demo-form-inline">
        <el-form-item label="商家名称">
          <el-input v-model="form.shopName" placeholder="请输入商家名称"></el-input>
        </el-form-item>
        <el-form-item label="用户姓名">
          <el-input v-model="form.username" placeholder="请输入用户姓名"></el-input>
        </el-form-item>
        <el-form-item label="用户电话">
          <el-input v-model="form.tel" placeholder="请输入用户电话"></el-input>
        </el-form-item>
        <el-form-item label="订单区域">
          <el-radio-group v-model="form.area">
            <el-radio :label="3">全城</el-radio>
            <el-radio :label="6">宽城区</el-radio>
            <el-radio :label="9">朝阳区</el-radio>
            <el-radio :label="12">南关区</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="配送方式">
          <el-radio-group v-model="form.send">
            <el-radio :label="3">全部</el-radio>
            <el-radio :label="6">自配送</el-radio>
            <el-radio :label="9">XX跑腿配送</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="订单时间">
          <el-date-picker
            v-model="form.time"
            type="daterange"
            range-separator="至"
            start-placeholder="开始日期"
            end-placeholder="结束日期">
          </el-date-picker>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSearch">查询</el-button>
        </el-form-item>
      </el-form>
    </div>
    <el-table
      :data="tableData"
      border
      :header-cell-style="{background: '#f5f8fa'}"
      style="width: 100%; margin-top: 20px;">
      <el-table-column type="expand">
        <template slot-scope="props">
          <div class="expend-box">
            <div class="baseInfo">
              <div class="item">
                <div class="key">商品名称</div>
                <div class="value">xxxxx烤肉拌饭</div>
              </div>
              <div class="item">
                <div class="key">单价</div>
                <div class="value">18.00元</div>
              </div>
              <div class="item">
                <div class="key">数量</div>
                <div class="value">2</div>
              </div>
              <div class="item">
                <div class="key">总价</div>
                <div class="value">36.00元</div>
              </div>
              <div class="buttons" v-if="props.row.state !== 1">
                <el-button type="primary" plain class="opt-btn">取消订单并退款</el-button>
                <el-button plain class="opt-btn">同意退款</el-button>
                <el-button type="primary" plain class="opt-btn">打印订单</el-button>
              </div>
            </div>
            <div class="desc">
              <el-steps direction="vertical" :active="1">
                <el-step title="订单已提交" description="2018:01:02 10:10:22"></el-step>
                <el-step title="用户（15714316633）已支付" description="2018:01:02 10:10:22"></el-step>
                <el-step title="商家已接单" description="2018:01:02 10:10:22"></el-step>
              </el-steps>
            </div>
          </div>
        </template>
      </el-table-column>
      <el-table-column
        prop="name"
        label="商家名称">
      </el-table-column>
      <el-table-column
        prop="orderNo"
        label="订单编号">
      </el-table-column>
      <el-table-column
        prop="tel"
        label="用户电话">
      </el-table-column>
      <el-table-column
        prop="addr"
        label="配送地址">
      </el-table-column>
      <el-table-column
        prop="senderInfo"
        label="配送员信息">
      </el-table-column>
      <el-table-column
        prop="orderTime"
        label="下单时间">
      </el-table-column>
      <el-table-column
        prop="payType"
        label="支付方式">
      </el-table-column>
      <el-table-column
        prop="remark"
        label="订单备注">
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
      form: {},
      activeIndex: '1',
      tableData: [{
        name: '大队长烧烤（繁荣路店）',
        orderNo: '201901020202123（送达时间：12：20）',
        tel: '15714316666',
        addr: '高新区顺达路与超群街交汇 鸿达光电子产业园 11号楼 1111室',
        senderInfo: '15714141212（杨洋）',
        orderTime: '2019-02-02 10:20:20',
        payType: '微信支付',
        remark: '多放糖and辣椒麻油，餐具要3份，谢谢'
      }, {
        name: '大队长烧烤（繁荣路店）',
        orderNo: '201901020202123（送达时间：12：20）',
        tel: '15714316666',
        addr: '高新区顺达路与超群街交汇 鸿达光电子产业园 11号楼 1111室',
        senderInfo: '15714141212（杨洋）',
        orderTime: '2019-02-02 10:20:20',
        payType: '微信支付',
        remark: '多放糖and辣椒麻油，餐具要3份，谢谢'
      }, {
        name: '大队长烧烤（繁荣路店）',
        orderNo: '201901020202123（送达时间：12：20）',
        tel: '15714316666',
        addr: '高新区顺达路与超群街交汇 鸿达光电子产业园 11号楼 1111室',
        senderInfo: '15714141212（杨洋）',
        orderTime: '2019-02-02 10:20:20',
        payType: '微信支付',
        remark: '多放糖and辣椒麻油，餐具要3份，谢谢'
      }, {
        name: '大队长烧烤（繁荣路店）',
        orderNo: '201901020202123（送达时间：12：20）',
        tel: '15714316666',
        addr: '高新区顺达路与超群街交汇 鸿达光电子产业园 11号楼 1111室',
        senderInfo: '15714141212（杨洋）',
        orderTime: '2019-02-02 10:20:20',
        payType: '微信支付',
        remark: '多放糖and辣椒麻油，餐具要3份，谢谢'
      }]
    }
  },
  methods: {
    handleSelect() {},
    onSearch() {}
  }
}
</script>
<style scoped lang="stylus" rel="stylesheet/stylus">
  .app-container
    padding-top: 0!important
    .opt-bar
      padding: 10px
    .expend-box
      position: relative
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.15)
      font-size: 12px
      width: 100%
      align-items: center
      display: table
      .opt-btn
        margin: 10px 10px 0 0!important
      >div
        border-right: 2px dashed #e1e6eb
        display: table-cell
        vertical-align: middle
      .baseInfo
        padding: 36px 20px 40px
        width: 320px
        position: relative
        .avatar
          margin-bottom: 5px
        .item
          display: flex
          width: 100%
          align-items: center
          padding: 3px 0
          .key
            width: 100px
            text-align: left
            color: #80848f
            padding-left: 10px
          .value
            flex: 1
            padding-left: 5px
            color: #495060
            .name
              line-height: 1.5
              font-size: 16px
              font-weight: bold
              color: #1c2438
            .sub
              color: #80848f
        .buttons
          display: flex;
          padding-left: 10px;
          padding-top: 8px;
          flex-wrap: wrap;
        .task_status
          background-color: rgba(255, 144, 0, 0.8)
          font-size: 14px
          padding: 0 5px
          line-height: 1.5
          border-radius: 4px
          color: #fff
          position: absolute
          right: 15px
          top: 15px
      .desc
        padding: 0 20px
      .form
        padding: 0 40px
        width: 450px
        .table
          width: 100%;
          border-collapse: collapse;
          th, td
            text-align: center
            padding: 8px 0
            border-right: none
            border-bottom: none
</style>
