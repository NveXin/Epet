<template>
  <ul class="lfrom">
    <li>
      <span class="iconfont icon-user"></span>
      <input type="text" placeholder="手机号/邮箱/用户名">
    </li>
    <li>
      <span class="iconfont icon-pwd"></span>
      <input type="password" placeholder="输入密码">
    </li>
  </ul>
</template>

<script>
  export default {}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  input
    outline none
  .lfrom
    width 333px
    height 100%
    position relative
    top -490px
    margin 0 auto
    li
      width 333px
      height 46px
      border-bottom #e2e2e2 solid 1px
      padding 12px 0 12px 30px
      position relative
      box-sizing border-box
      display flex
      span
        font-size 25px
        float left
        vertical-align top
      input
        width 303px
        line-height 21px
        font-size 15px
        margin-left 5px
        padding 5px 0 0 0
</style>
