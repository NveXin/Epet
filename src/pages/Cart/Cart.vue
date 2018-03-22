<template>
  <div class="cart">
    <div class="header">
      <div class="and">
        <router-link to="/"><</router-link>
        <span class="kakade">购物车</span>
        <span class="iconfont icon-leimu leimu"></span>
      </div>
    </div>
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
  export default {}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .header
    width 100%
    height 50px
    background white
    .and
      width 355px
      height 50px
      margin 0 10px
    a
      position absolute
      left 10px
      width 27.5px
      height 50px
      line-height 50px
    .kakade
      display block
      font-size 20px
      margin 0 auto
      text-align center
      width 320px
      height 50px
      line-height 50px
    .leimu
      position absolute
      right 0
      top 0
      width 27.5px
      height 50px
      line-height 50px
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
          color lightgray
          opacity .4
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
