import 'babel-polyfill'
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'

import '@/common/icons' // icon
import '@/common/js/permission' // permission control

import fastclick from 'fastclick'
import 'common/stylus/index.styl'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI, {size: 'mini'})
Vue.config.productionTip = false
fastclick.attach(document.body)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
