<template>
  <div class="myself">
    <div class="log">
      <div class="mheader">
        <router-link to="/"><</router-link>
        <div class="register">
          <a href="javascript:;">注册</a>
        </div>
      </div>
      <div class="center">
        <img src="http:////static.epetbar.com/mpet/images/login/logo.png" alt="">
      </div>
      <div class="bottom">
        <ul>
          <li><a href="javascript:;" @click="goto('/myself/login')" >普通登录</a></li>
          <li><a href="javascript:;" @click="goto('/myself/register')">手机动态密码登录</a></li>
        </ul>
      </div>
    </div>
    <div class="dynamic">
      <!-- 注册登录 -->
      <form action="">
        <Login/>
      </form>
      <!-- 忘记密码 -->
      <div class="wangji">
        <a href="javascript:;">忘记密码？</a>
      </div>
      <!-- 点击登陆 -->
      <div class="dianji">
        <a href="javascript:;">登&nbsp;&nbsp;&nbsp;陆</a>
      </div>
      <!-- 其他登陆 -->
      <div class="other">
        <div class="hezuo">
          <span>合作网站登录</span>
        </div>
        <ul class="ullist">
          <li><a href="javascript:;"><img src="http://static.epetbar.com/mpet/images/login/login_ico4.png" alt=""></a></li>
          <li><a href="javascript:;"><img src="http://static.epetbar.com/mpet/images/login/login_ico2.png" alt=""></a></li>
        </ul>
      </div>
    </div>
    <router-view/>
  </div>
</template>

<script>
  import Login from '../../components/Login/Login.vue'
  export default {
    methods:{
      goto(path){
        this.$router.replace(path)
      }
    },
    components:{
      Login
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .myself
    width 100%
    height 172px
    background black
    .log
      .mheader
        width 355px
        height 50px
        line-height 50px
        display flex
        justify-content space-between
        margin 0 10px
        /*border-bottom 2px solid pink*/
      .center
        width 100%
        height 78px
        box-sizing border-box
        padding 10px 0 20px 0
        img
          width 75px
          height 48px
          margin 0 auto
          text-align center
      .bottom
        width 100%
        height 44px
        box-sizing border-box
        ul
          width 100%
          height 44px
          display flex
          justify-content space-between
          li
            width 187.6px
            height 44px
            line-height 20px
            text-align center
            a
              display block
              width 187.6px
              height 44px
              line-height 44px
    .dynamic
      background-color white
      width 100%
      height 490px
      .wangji
        width 100%
        height 20px
        margin 5px auto
        margin-top 50px
        a
          display block
          width 70px
          line-height 20px
          font-size 14px
          float right
          margin-right 15px
      .dianji
        width 100%
        height 43px
        padding-bottom 100px
        a
          display block
          width 345px
          margin 0 auto
          text-align center
          line-height 38px
          background #2ec975
          border-radius 10px
          color white
          font-size 15px
      .other
        .hezuo
          width 100%
          height 20px
          span
            display block
            width 96px
            line-height 21px
            margin 10px auto
        .ullist
          width 100%
          height 90px
          li
            width 125px
            height 60px
            margin 15px auto
            float left
            a
              display block
              width 101px
              height 60px
              margin 0 auto
              img
                width 60px
                height 60px
                margin 0 auto
</style>
