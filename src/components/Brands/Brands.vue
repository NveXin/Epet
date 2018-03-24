<template>
  <div class="container">
    <div class="wrapper" v-for="(all, index) in brand" :key="index">
      <div class="top">
        <span>——{{all.title}}——</span>
      </div>
      <div class="bottom">
        <ul class="list">
          <li v-for="(item, index) in all.list" :key="index">
            <a href="javascript:;">
              <div class="moreimg">
                <img :src="item.logo" alt="">
              </div>
              <p class="name">{{item.name}}</p>
              <p class="address">{{item.address}}</p>
            </a>
          </li>
        </ul>
      </div>
    </div>
    <a class="all" href="javascript:;" @click="goto('/all')">全部</a>
    <router-view/>
  </div>
</template>

<script>
  import {mapState} from 'vuex'
  export default {
    methods:{
      goto(path){
        this.$router.replace(path)
      }
    },
    computed: {
      ...mapState(['brand'])
    },
    mounted(){
      this.$store.dispatch('getBrand')
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .container
    background-color lightgray
    .all
      position fixed
      right 6px
      bottom 65px
      display block
      width 40px
      line-height 40px
      border-radius 50%
      background rgba(0,0,0,.4)
      text-align center
      font-size 12px
      color white
    .wrapper
      width 375px
      height 667px
      background-color white
      .top
        padding-top 5px
        margin-top 48px
        text-align center
        span
          font-size 12px
      .bottom
        width 100%
        height 635px
        padding 0 5px
        margin-top 10px
        .list
          width 366px
          height 635px
          li
            width 122px
            height 107px
            float left
            a
              display block
              width 122px
              height 107px
              margin 0 5px 0
              .moreimg
                width 112px
                height 62px
                border 1px solid #e2e2e2
                text-align center
                img
                  width 79.2px
                  height 40px
                  margin 10px auto 0
              p
                height 20px
                overflow hidden
                text-overflow ellipsis
                white-space nowrap
                margin-top 5px
                text-align center
              .name
                font-size 13px
                color black
              .address
                font-size 12px
                color #999
</style>
