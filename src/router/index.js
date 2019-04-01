import Vue from 'vue'
import Router from 'vue-router'
import AppHome from '../components/pages/Home/Home'
import AppMind from '../components/pages/Mind/Mind'
import AppClassify from '../components/pages/Classify/Classify'
Vue.use(Router)

export default new Router({
  routes: [
    {
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
      component: AppMind
    }
  ]
})
