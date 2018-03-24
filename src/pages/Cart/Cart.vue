<template>
  <div class="cart">
    <One title="购物车">
        <router-link class="youjian" slot="youjt" to="/"><</router-link>
        <span class="iconfont icon-leimu leimu" slot="leimu" @click="eschew"></span>
    </One>
    <transition name="height">
      <div class="show-guide border-1px" v-show="isShow">
        <a class="item_icon" @click="goto('/msite')">
          <span class="iconfont icon-shouye"></span>
          <span>首页</span>
        </a>
        <a class="item_icon" @click="goto('/classification')">
          <span class="iconfont icon-fenlei"></span>
          <span>分类</span>
        </a>
        <a class="item_icon" @click="goto('/cart')">
          <span class="iconfont icon-gouwuche"></span>
          <span>购物车</span>
          <span class="hd">0</span>
        </a>
        <a class="item_icon" @click="goto('/myself')">
          <span class="iconfont icon-gougou"></span>
          <span>我的E宠</span>
        </a>
      </div>
    </transition>
    <div class="box">
    <div class="kcart">
      <div class="top">
        <span class="iconfont icon-gouwuche gwc"></span>
      </div>
      <div class="kgwc">购物车是空的</div>
      <div class="bottom">
        <a href="javascript:;">去逛逛</a>
        <a href="javascript:;">我的收藏</a>
      </div>
    </div>
  </div>
  </div>
</template>

<script>
  import One from '../../components/One/One.vue'
  export default {
    components: {
      One
    },
    data() {
      return {
        isShow: false
      }
    },
    methods: {
      goto(path) {
        this.$router.push(path)
      },
      eschew() {
        this.isShow = !this.isShow
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .cart
    .height
      width 100%
      height 66px
      .show-guide
        display flex
        justify-content space-between
        width 100%
        height 66px
        border-bottom 1px solid #d7d7d7
        box-sizing border-box
        background-color white
        margin-top 50px
        z-index 100
        overflow hidden
        margin-bottom -50px
        &.height-enter, &.height-leave-to
          /*height 0*/
        &.height-enter-active, &.height-leave-active
          /*transition height .5s*/
        .item_icon
          display block
          width 93.8px
          height 45px
          span
            width 93.8px
            height 25px
          p
            width 93.8px
            line-height 20px
    .box
      width 100%
      height 295px
      background white
      margin-top 2px
      .kcart
        width 100%
        height 295px
        .top
          width 100%
          height 170px
          text-align center
          .gwc
            margin 50px auto 20px
            display inline-block
            width 100px
            height 100px
            text-align center
            font-size 100px
            opacity .4
            color deeppink
        .kgwc
          text-align center
          color lightgray
          opacity .5
        .bottom
          display flex
          text-align center
          justify-content center
          a
            margin 20px 0 0 10px
            display block
            width 100px
            height 40px
            line-height 40px
            border 1px solid lightgray
            border-radius 8px
            color lightgray
            opacity 1
</style>
