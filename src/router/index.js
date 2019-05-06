import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import AppHome from '../components/pages/Home/Home'
import AppMind from '../components/pages/Mind/Mind'
import AppClassify from '../components/pages/Classify/Classify'
import Login from '../components/pages/Login/Login'

import store from '../store'

const routes = [{
    path: '/',
    name: 'home',
    component: AppHome
  },
  {
    path: '/classify',
    name: 'classify',
    component: AppClassify
  },
  {
    path: '/mind',
    name: 'mind',
    component: AppMind,
    //在进入这个路由的时候会执行  路由内守卫
    //to身上有要跳转过去的路由的信息, from是来的路由的信息
    //next代表下一个动作, 执行的时候跳转到要去的路由，可以传入path来控制
    // beforeEnter: (to, from ,next) => {
    //     // console.log('哈哈', to, from)
    //     // next('/login')
    //     if ( !store.state.commons.user_state ){
    //         next('/login')
    //     }else {
    //         next()
    //     }
    // }
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

//全局路由守卫

// 需要守卫的路由
let need_user_state = ['mind']

router.beforeEach((to, from, next) => {
  //是否需要判断登陆状态
  let need_us = need_user_state.some(name => to.name === name)
  if (need_us && !store.state.commons.user_state) {
    next('/login');
    return false;
  }
  next();
})


export default router
