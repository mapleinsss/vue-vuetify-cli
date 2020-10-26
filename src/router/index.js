import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '@/layout'

// 解决路由重复跳转bug
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push (location) {
  return originalPush.call(this, location).catch(err => err)
}

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: 'index',
    component: Layout,
    children: [
      {
        path: 'index',
        component: (resolve) => require(['@/views/index'], resolve),
        name: 'index',
        meta: { title: '首页', icon: 'dashboard', noCache: true, affix: true }
      }
    ]
  },
  {
    path: '/login',
    name: 'Login',
    hidden: true,
    component: resolve => require(['@/views/login'], resolve),
    meta: { title: '登录', icon: 'login', noCache: true, affix: true }
  },
  {
    path: '/*',
    name: 'Page404',
    hidden: true,
    component: resolve => require(['@/views/error/404'], resolve),
    meta: { title: '你访问的页面没有找到哦', icon: '404', noCache: true, affix: true }
  }
]

const router = new VueRouter({
  routes: routes,
  mode: 'history',
  // 解决路由跳转后，不显示在首行
  scrollBehavior () {
    return {
      x: 0,
      y: 0
    }
  }
})

export default router
