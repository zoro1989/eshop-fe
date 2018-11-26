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
      path: '/shop',
      component: Layout,
      redirect: '/shop/list',
      children: [
        {
          path: 'list',
          component: () => import('@/views/shop/list'),
          name: 'shop-list',
          meta: { title: '商家管理', icon: 'tree', noCache: true }
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
