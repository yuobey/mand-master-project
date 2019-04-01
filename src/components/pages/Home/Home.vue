<template>
  <div id="app-home" class="page">
    <app-home-banner></app-home-banner>
    <app-home-nav-list></app-home-nav-list>
    <app-home-update></app-home-update>
    <app-home-special></app-home-special> 
    <app-home-recommond></app-home-recommond>

    <app-nav></app-nav>
    <!-- 全局组件里已经注册过 所以这里不用单个像下面一样引入 -->
  </div>
</template>

<script>
import AppHomeBanner from './HomeBanner'
import AppHomeNavList from './HomeNavList'
import AppHomeUpdate from './HomeUpdate'
import AppHomeSpecial from './HomeSpecial'
import AppHomeRecommond from './HomeRecommond'
export default {
  name: 'AppHome',
  components: {
    AppHomeBanner,
    AppHomeNavList,
    AppHomeUpdate,
    AppHomeSpecial,
    AppHomeRecommond
  }
}
</script>
// lang=scss 表示写的是scss代码
<style scoped >

</style>


// https://buy.duitang.com/napi/buy/inventory/list/by_cat/recommend/?timestamp=1533085976000