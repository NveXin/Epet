<template>
  <div class="header">
    <div class="and">
      <slot name="youjt"></slot>
      <span class="kakade">{{title}}</span>
      <slot name="leimu"></slot>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      title: String
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .header
    position fixed
    width 100%
    height 50px
    background white
    top 0
    left 0
    right 0
    z-index 100
    .and
      width 355px
      height 50px
      margin 0 10px
      display flex
      justify-content space-between
      span
        display block
      .youjian
        width 27.5px
        height 50px
        line-height 50px
      .kakade
        display block
        font-size 18px
        margin 0 auto
        text-align center
        width 320px
        height 50px
        line-height 50px
      .leimu
        width 27.5px
        height 50px
        line-height 50px
</style>
