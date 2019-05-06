<template>
  <div class="app-home-update">
    <div v-for="(info, i) in infos" :key="i" class="app-home-update-item">
      <h3 class="title">{{info.goods_name}}</h3>
      <p>{{info.subname}}</p>
      <img :src="url + info.file_id" alt>
    </div>
  </div>
</template>

<script>
export default {
  name: "app-home-update",
  data() {
    return {
      infos: [],
      url: "http://marry.ggyyun.com/public/uploads/"
    };
  },
  methods: {
    getInfos() {
      this.$http.get("/fhhq/index/goods_deals/getGoods").then(res => {
        this.infos = res.data.homeGoods.data;
      });
    }
  },
  mounted() {
    this.getInfos();
  }
};
</script>

<style lang="scss" scoped>
.app-home-update {
  background: #fff;
  display: flex;
  .app-home-update-item {
    flex-grow: 1;
    height: 1.5rem;
    display: flex;
    flex-flow: column;
    align-items: center;
    justify-content: space-between;
    padding: 0.05rem;
    box-sizing: border-box;

    .title {
      margin-top: 0.22rem;
      color: #444;
      font-size: 0.15rem;
      height: 0.16rem;
      width: 0.7rem;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space:nowrap
    }
    p {
      margin-top: 2px;
      height: 0.15rem;
      font-size: 0.12rem;
      overflow: hidden;
    }
    img {
      width: 0.75rem;
      height: 0.75rem;
      margin-top: 5px;
    }
  }
}
</style>


