// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'


//路由
import router from './router'

//全局的配置
import './modules/config'

//vuex
import store from './store'
/* eslint-disable no-new */
//根实例
new Vue({
  el: '#app',
  components: {
    App
  },
  router,
  store,
  // 因为根实例里其实仅仅只放入了根组件，所以可以这样指定根实例的模板就是根组件
  template: '<App/>'
})
