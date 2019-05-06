<template>
  <div ref="el" class="app-home-banner swiper-container">
    <div class="swiper-wrapper">
      <div v-for=" (banner, i) in banners " :key=" i " class="swiper-slide loading-img">
        <img :src="url + banner.files" alt>
      </div>
    </div>
    <div class="swiper-pagination"></div>
  </div>
</template>

<script>
import Vue from "vue";
import Swiper from "swiper";
export default {
  name: "AppHomeBanner",
  data() {
    return {
      banners: [],
      url:"http://marry.ggyyun.com/public/uploads/"
    };
  },
  methods: {
    getBanners() {
      this.$http.get("/fhhq/index/Poster/getPoster", {
          params: {
            position: 0,
            token:'86a801e763d975c767a7a1272fea13d2',
          }
        })
        .then(res => {
          this.banners = res.data.poster;
          Vue.nextTick(() => {
            new Swiper(this.$refs.el, {
              pagination: {
                el: ".swiper-pagination"
              }
            });
          });
        });
    }
  },
  created() {
    this.getBanners();
  }
};
</script>
<style lang = "scss">
.app-home-banner {
  .swiper-wrapper {
    width: 100%;
    height: 1.875rem;
  }
  .swiper-slide {
    img {
      width: 100%;
    }
  }
  .swiper-pagination {
    .swiper-pagination-bullet {
      width: 5px;
      height: 5px;
    }
    .swiper-pagination-bullet-active {
      background: #fff;
    }
  }
}
</style>
