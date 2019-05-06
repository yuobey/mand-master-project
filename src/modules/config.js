import Vue from 'vue'
//swiper css
import 'swiper/dist/css/swiper.min.css'
import 'bootstrap/dist/css/bootstrap.min.css' //引入bootstrap框架

// 全局通用样式
import '../stylesheets/main.scss'

//rem
import computed_rem from './rem'
//计算rem
computed_rem()

// axios

import axios from 'axios'
Vue.prototype.$http = axios
//把axios挂在vue的原型上  用的时候直接 this.$http.get/post。。。。


//filters

import './filters'

//全局组件

import './ui-components'

//md5
import md5 from 'js-md5'
Vue.prototype.md5 = md5

Vue.config.productionTip = false
