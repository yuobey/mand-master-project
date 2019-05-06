<template>
  <div class="app-home-nav-list">
    <ul class="nav-list">
      <li v-for="nav in navs" :key="nav.id" class="nav-item">
        <img :src="url + nav.file_id" alt>
        <span>{{nav.type_name}}</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "app-home-nav-list",
  data() {
    return {
      navs: [],
      url: "http://marry.ggyyun.com/public/uploads/"
    };
  },
  methods: {
    getNavs() {
      this.$http.get("/fhhq/index/Poster/getPoster").then(res => {
        this.navs = res.data.allnav;
      });
    }
  },
  mounted() {
    this.getNavs();
  }
};
</script>

<style lang="scss" scoped>
.app-home-nav-list {
  width: 100%;
  height: 1.68rem;
  background: #dc3545;
  .nav-list {
    padding-bottom: 0.14rem;
    display: flex;
    flex-wrap: wrap;
    .nav-item {
      width: 0.75rem;
      height: 0.77rem;
      padding: 0.13rem 0px 0.05rem;
      display: flex;
      flex-flow: column;
      align-items: center;
      justify-content: space-between;

      img {
        width: 0.36rem;
        height: 0.36rem;
      }
      span {
        color: #fff;
        font-size: 13px;
      }
    }
  }
}
</style>


