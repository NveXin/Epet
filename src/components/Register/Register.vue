<template>
  <ul class="lfrom1">
    <li>
      <span class="iconfont icon-user"></span>
      <input type="text" placeholder="已注册的手机号">
    </li>
    <li>
      <span class="iconfont icon-pwd"></span>
      <input type="text" placeholder="请输入图片内容">
      <span>
        <img src="http://share/seccode.html?hash=5157&height=30&width=85" alt="">
      </span>
    </li>
    <li class="dt">
      <span class="iconfont icon-pwd"></span>
      <input type="text" placeholder="动态密码">
      <!--<a href="javascript:;"></a>-->
      <a href="javascript:;">获取动态密码</a>
    </li>
  </ul>
</template>

<script>
  export default {}
</script>

<style lang="stylus" rel="stylesheet/stylus" >
  input
    outline none
  .lfrom1
    width 333px
    height 150px
    position relative
    top -490px
    margin-bottom -50px
    /*margin 0 auto*/
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
    .dt
      width 333px
      height 46px
      a
        position absolute
        right 0
        top 6px
        display block
        width 100px
        line-height 29px
        border 1px solid red
        color red
        font-size 12px
        text-align center
        border-radius 3px
</style>
