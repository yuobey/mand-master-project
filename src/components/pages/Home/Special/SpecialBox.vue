<template>
    <div class="app-home-special-box">
       <div class="title-img loading-img">
           <img :src="data.image_url | formatImage" alt="">
       </div>

       <div ref = "el" class="special-list swiper-container">
           <div class="swiper-wrapper">
                <div  class="special-item swiper-slide"
                 v-for = "item in data.inventory_list" :key = "item.id">
                    <div class="img-box">
                        <img width="100%" :src="item.pictures[0] | formatImage('small')" alt="">
                        <!-- <img width="100%" :src="https://b-ssl.duitang.com/uploads/item/201611/30/20161130150148_UKaxJ.thumb.200_200_c.jpeg" alt=""> -->
                        <!-- <span>全场2件八折</span> -->
                    </div>
                    <p class="name">{{item.inventory_caption}}</p>
                    <p class="price">
                        <span v-if = "item.vip_sale_price" class="now">￥{{item.vip_sale_price}}</span>
                        <span :class="[item.vip_sale_price ? 'pre' : 'now']">￥{{item.sale_price}}</span>
                    </p>
                </div>
           </div>
       </div>
    </div>
</template>

<script>
import Swiper from 'swiper'
export default {
    name: 'app-home-special-box',
    props: ['data'],
    mounted () {
        new Swiper(this.$refs.el, {
            slidesPerView: 'auto'
        });
    }
}
</script>

<style  scoped>
@import '../../../../stylesheets/_base.scss';

</style>

