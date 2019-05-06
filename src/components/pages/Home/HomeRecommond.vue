<template>
  <div class="app-home-recommond">
    <ui-title-box
      v-for=" recommond in recommonds "
      :key="recommond.inventory_cat_id"
      :title="recommond.title + '精选'"
    >
      <div class="recommond-list">
        <good-common-item v-for=" item in recommond.rec_list " :key="item.id" :data="item"></good-common-item>
      </div>
      <div class="see-more">查看全部</div>
    </ui-title-box>
  </div>
</template>

<script>
export default {
  name: "app-home-recommond",
  data() {
    return {
      recommonds: []
    };
  },
  methods: {
    getRecommonds() {
      this.$http.get("/fhhq/index/goods_deals/getCaseShow").then(res => {
        console.log(res.data);
        this.recommonds = res.data;
      });
    }
  },
  created() {
    this.getRecommonds();
  }
};
</script>

<style lang="scss" scoped>
.app-home-recommond {
  .recommond-list {
    padding: 0px 0.15rem;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }

  .see-more {
    height: 0.56rem;
    line-height: 0.56rem;
    color: #444;
    font-size: 0.13rem;
    width: 100%;
    text-align: center;
    background-color: #fff;
  }
}
</style>


