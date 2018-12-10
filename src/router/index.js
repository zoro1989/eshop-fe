import Vue from 'vue'
import Router from 'vue-router'
import Layout from 'views/layout/Layout'

Vue.use(Router)

export default new Router({
  scrollBehavior: () => ({ y: 0 }),
  routes: [
    {
      path: '/login',
      component: () => import('@/views/login/index'),
      hidden: true
    },
    {
      path: '/404',
      component: () => import('@/views/404'),
      hidden: true
    },
    {
      path: '',
      component: Layout,
      redirect: 'home',
      meta: {title: '首页'},
      children: [{
        path: 'home',
        name: 'home',
        component: () => import('@/views/home/index'),
        meta: { title: '首页', icon: 'home' }
      }]
    },
    {
      path: '/shop-center',
      hidden: true,
      component: Layout,
      redirect: '/shop-center/index',
      meta: {title: '商城中心', icon: 'tree'},
      children: [
        {
          path: 'index',
          component: () => import('@/views/shop-center/index'),
          name: 'index',
          hidden: true,
          children: [{
            path: '',
            name: 'setting',
            meta: { title: '商城中心' },
            component: () => import('@/views/shop-center/setting')
          }, {
            path: 'online-charge',
            name: 'online-charge',
            meta: { title: '在线充值' },
            component: () => import('@/views/shop-center/online-charge')
          }, {
            path: 'charge-record',
            component: () => import('@/views/shop-center/charge-record'),
            name: 'charge-record',
            meta: { title: '充值记录', icon: 'tree', noCache: true }
          }]
        },
        {
          path: 'change-password',
          name: 'change-password',
          meta: { title: '修改密码' },
          component: () => import('@/views/shop-center/change-password')
        }
      ]
    },
    {
      path: '/charge-record',
      component: Layout,
      meta: {title: '财务管理', icon: 'money'},
      redirect: '/charge-record/index',
      children: [
        {
          path: 'index',
          component: () => import('@/views/shop-center/index'),
          name: 'index',
          meta: { title: '充值记录', noCache: true },
          children: [{
            path: '',
            component: () => import('@/views/shop-center/charge-record'),
            name: 'charge-record',
            meta: { title: '充值记录', noCache: true }
          }]
        },
        {
          path: 'takeout-list',
          component: () => import('@/views/finance-manage/takeout-list'),
          name: 'takeout-list',
          meta: { title: '外卖账单', noCache: true }
        }
      ]
    },
    {
      path: '/shop',
      component: Layout,
      meta: {title: '商家管理', icon: 'tree'},
      redirect: '/shop/list',
      children: [
        {
          path: 'addr',
          component: () => import('@/views/shop/shop-addr'),
          name: 'shop-addr',
          meta: { title: '商家地址', icon: 'map', noCache: true }
        },
        {
          path: 'list',
          component: () => import('@/views/shop/list'),
          name: 'shop-list',
          meta: { title: '店鋪管理', icon: 'shopping', noCache: true }
        },
        {
          path: 'add',
          hidden: true,
          component: () => import('@/views/shop/add-shop'),
          name: 'shop-add',
          meta: { title: '商家添加', icon: 'tree', noCache: true, noTagView: true }
        },
        {
          path: 'recharge',
          component: () => import('@/views/shop/recharge'),
          name: 'recharge',
          hidden: true,
          meta: { title: '充值', icon: 'tree', noCache: true },
          children: [
            {
              path: '',
              name: 'service',
              meta: { title: '充值服务器' },
              component: () => import('@/views/shop/recharge-service')
            }
          ]
        }
      ]
    },
    {
      path: '/order',
      component: Layout,
      redirect: '/order/list',
      children: [
        {
          path: 'list',
          component: () => import('@/views/order/list'),
          name: 'order-list',
          meta: { title: '订单列表', icon: 'form', noCache: true }
        }
      ]
    },
    { path: '*', redirect: '/404', hidden: true }
  ]
})
