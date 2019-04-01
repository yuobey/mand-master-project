<template>
    <div class="app-home-nav-list">
        <ul class="nav-list">
            <li v-for = "nav in navs" :key = "nav.id" class="nav-item">
                <img :src="nav.background_img" alt="">
                <span>{{nav.name}}</span>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'app-home-nav-list',
    data () {
        return {
            navs: []
        }
    },
    methods: {
        getNavs () {
            this.$http.get('/dt/napi/buy/category/list/?timestamp=1533017183000').then(res => {
                // console.log(res.data.data.object_list)
                this.navs = res.data.data.object_list
            })
        }
    },
    mounted () {
        this.getNavs()
    }
}
</script>

<style lang="scss" scoped>
    .app-home-nav-list {
        width: 100%;
        height: 1.68rem;
        background: #fff;
        .nav-list {
            padding-bottom: 0.14rem;
            display: flex;
            flex-wrap: wrap;
            .nav-item {
                width: 0.75rem;height: 0.77rem;
                padding: 0.13rem 0px 0.05rem;
                display: flex;flex-flow:column;
                align-items: center; justify-content: space-between;

                img {
                    width: 0.36rem;height: 0.36rem;
                }
                span {
                    color: #444; font-size: 13px;
                }
            }
        }

    }
</style>


