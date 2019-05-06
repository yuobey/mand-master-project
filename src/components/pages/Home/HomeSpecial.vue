<template>
  <div class="app-home-special">
    <ui-title-box title="专题">
      <app-home-special-box v-for=" (special, i) in specials " :key="i" :data="special"></app-home-special-box>
    </ui-title-box>
  </div>
</template>

<script>
import AppHomeSpecialBox from "./Special/SpecialBox";
export default {
  name: "app-home-special",
  data() {
    return {
      specials: []
    };
  },
  methods: {
    getSpecials() {
      this.$http.get("/fhhq/index/goods_deals/getGoods").then(res => {
        console.log(res.data.homeGoods.data);
        this.specials = this.specials.concat(res.data.homeGoods.data);
      });
      this.$http.get("/fhhq/index/goods_deals/getGoods").then(res => {
        this.specials = this.specials.concat(res.data.homeGoods.data);
      });
    }
  },
  created() {
    this.getSpecials();
  },
  components: {
    AppHomeSpecialBox
  }
};
</script>

<style lang="scss" scoped>
// .app-home-special {

// }
</style>

