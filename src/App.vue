<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import AppHome from './components/pages/Home/Home'
export default {
  name: 'App',
  components: {
    AppHome: AppHome
  }
}
</script>

<style>

</style>
