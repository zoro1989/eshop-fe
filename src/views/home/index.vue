<template>
  <div class="home">
    <div>
      <span>搜索时间</span>
      <el-date-picker
        size="mini"
        v-model="searchDateTime"
        type="date"
        value-format="yyyy-MM-dd"
        placeholder="选择日期">
      </el-date-picker>
    </div>
    <el-row :gutter="40" class="panel-group">
      <el-col :xs="12" :sm="12" :lg="6" class="card-panel-col">
        <div class="card-panel">
          <div class="card-panel-icon-wrapper icon-money">
            <svg-icon icon-class="money" class-name="card-panel-icon" />
          </div>
          <div class="card-panel-description">
            <div class="card-panel-text">当日外卖收入</div>
            <count-to :start-val="0" :end-val="9280" :duration="3200" class="card-panel-num"/>
          </div>
        </div>
      </el-col>
      <el-col :xs="12" :sm="12" :lg="6" class="card-panel-col">
        <div class="card-panel">
          <div class="card-panel-icon-wrapper icon-shopping">
            <svg-icon icon-class="shopping" class-name="card-panel-icon" />
          </div>
          <div class="card-panel-description">
            <div class="card-panel-text">当日配送收入</div>
            <count-to :start-val="0" :end-val="13600" :duration="3600" class="card-panel-num"/>
          </div>
        </div>
      </el-col>
      <el-col :xs="12" :sm="12" :lg="6" class="card-panel-col">
        <div class="card-panel">
          <div class="card-panel-icon-wrapper icon-people">
            <svg-icon icon-class="orders" class-name="card-panel-icon" />
          </div>
          <div class="card-panel-description">
            <div class="card-panel-text">当日有效订单</div>
            <count-to :start-val="0" :end-val="102400" :duration="2600" class="card-panel-num"/>
          </div>
        </div>
      </el-col>
      <el-col :xs="12" :sm="12" :lg="6" class="card-panel-col">
        <div class="card-panel">
          <div class="card-panel-icon-wrapper icon-message">
            <svg-icon icon-class="returns" class-name="card-panel-icon" />
          </div>
          <div class="card-panel-description">
            <div class="card-panel-text">当日退单统计</div>
            <count-to :start-val="0" :end-val="81212" :duration="3000" class="card-panel-num"/>
          </div>
        </div>
      </el-col>
    </el-row>
    <div>
      <span>统计月份</span>
      <el-date-picker
        v-model="searchAnalyze"
        type="month"
        size="mini"
        value-format="yyyy-MM"
        placeholder="选择月份">
      </el-date-picker>
    </div>
    <el-row class="chart-wrapper">
      <div class="chart-title">
        <span class="chart-title-txt">订单统计</span><span class="chart-title-txt">本月有效订单量：12单</span><span class="chart-title-txt">本年有效订单量：1052单</span><span class="chart-title-txt">本月总退单量：12单</span><span class="chart-title-txt">本年总退单量：1052单</span>
      </div>
      <bar-chart/>
    </el-row>
    <el-row class="chart-wrapper">
      <div class="chart-title">
        <span class="chart-title-txt">收入统计</span><span class="chart-title-txt">本月外卖收入：1010元</span><span class="chart-title-txt">本年外卖收入：10110元</span><span class="chart-title-txt">本月配送收入：100元</span><span class="chart-title-txt">本年配送收入：1052元</span>
      </div>
      <bar-chart/>
    </el-row>
  </div>
</template>
<script>
import CountTo from 'vue-count-to'
import BarChart from 'components/Chart/BarChart'
export default {
  components: {
    CountTo,
    BarChart
  },
  data() {
    return {
      searchDateTime: '2018-11-25',
      searchAnalyze: '2018-11'
    }
  }
}
</script>
<style scoped lang="stylus" rel="stylesheet/stylus">
  .home
    background-color: #f0f2f5
    padding: 32px
    .panel-group
      margin-top: 18px
      .card-panel-col
        margin-bottom: 32px
      .card-panel
        height: 108px
        cursor: pointer
        font-size: 12px
        position: relative
        overflow: hidden
        color: #666
        background: #fff
        box-shadow: 4px 4px 40px rgba(0, 0, 0, .05)
        border-color: rgba(0, 0, 0, .05)
        &:hover
          .card-panel-icon-wrapper
            color: #fff
          .icon-people
            background: #40c9c6
          .icon-message
            background: #36a3f7
          .icon-money
            background: #f4516c
          .icon-shopping
            background: #34bfa3
        .icon-people
          color: #40c9c6
        .icon-message
          color: #36a3f7
        .icon-money
          color: #f4516c
        .icon-shopping
          color: #34bfa3
        .card-panel-icon-wrapper
          float: left
          margin: 14px 0 0 14px
          padding: 16px
          transition: all 0.38s ease-out
          border-radius: 6px
        .card-panel-icon
          float: left
          font-size: 48px
        .card-panel-description
          float: right
          font-weight: bold
          margin: 26px
          margin-left: 0px
          .card-panel-text
            line-height: 18px
            color: rgba(0, 0, 0, 0.45)
            font-size: 16px
            margin-bottom: 12px
          .card-panel-num
            font-size: 20px
    .chart-wrapper
      background: #fff
      padding: 16px 16px 0
      margin: 10px 0 32px 0
      .chart-title
        height: 30px
        .chart-title-txt
          margin-right: 20px
          &:nth-child(1)
            font-weight: bold
</style>
