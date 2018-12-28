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
            meta: { title: '充值记录', icon: 'form', noCache: true }
          }]
        },
        {
          path: 'takeout-list',
          component: () => import('@/views/finance-manage/takeout-list'),
          name: 'takeout-list',
          meta: { title: '外卖账单', icon: 'form', noCache: true }
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
      path: '/opt-manage',
      component: Layout,
      redirect: '/opt-manage/carousel',
      meta: { title: '运营管理', icon: 'operator', noCache: true },
      children: [
        {
          path: 'carousel',
          component: () => import('@/views/opt-manage/carousel'),
          name: 'carousel',
          meta: { title: '轮播页管理', icon: 'carousel', noCache: true }
        },
        {
          path: 'plate',
          component: () => import('@/views/opt-manage/plate'),
          name: 'plate',
          meta: { title: '活动版块管理', icon: 'activity', noCache: true }
        }
      ]
    },
    {
      path: '/msg-notice',
      component: Layout,
      redirect: '/msg-notice/index',
      meta: { title: '消息公告', icon: 'form', noCache: true },
      children: [
        {
          path: 'index',
          component: () => import('@/views/msg-notice/index'),
          name: 'index',
          meta: { title: '公告管理', icon: 'notice', noCache: true }
        }
      ]
    },
    {
      path: '/order',
      component: Layout,
      redirect: '/order/list',
      meta: { title: '订单管理', icon: 'form', noCache: true },
      children: [
        {
          path: 'list',
          component: () => import('@/views/order/list'),
          name: 'order-list',
          meta: { title: '订单列表', icon: 'form', noCache: true }
        }
      ]
    },
    {
      path: '/user-manage',
      component: Layout,
      redirect: '/user-manage/index',
      meta: { title: '用户管理', icon: 'form', noCache: true },
      children: [
        {
          path: 'index',
          component: () => import('@/views/user-manage/index'),
          name: 'index',
          meta: { title: '用户管理', icon: 'user', noCache: true }
        }
      ]
    },
    {
      path: '/settings',
      component: Layout,
      redirect: '/settings/business',
      meta: { title: '设置', icon: 'setting', noCache: true },
      children: [
        {
          path: 'business',
          component: () => import('@/views/settings/business'),
          name: 'business',
          meta: { title: '业务设置', icon: 'business', noCache: true }
        },
        {
          path: 'payment',
          component: () => import('@/views/settings/payment'),
          name: 'payment',
          meta: { title: '提成设置', icon: 'payment', noCache: true }
        }
      ]
    },
    { path: '*', redirect: '/404', hidden: true }
  ]
})
