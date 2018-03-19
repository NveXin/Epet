<template>
  <div class="msite">
    <div class="indexbox">
      <div class="indexheader">
        <div class="search">
        <span class="pet">
          <span>狗狗</span>
          <span>|</span>
          <span class="address">大理</span>
          <i class="iconfont icon-jiantou"></i>
        </span>
          <span class="searchInput">
          <a href="javascript:;">
            <input type="text" placeholder="搜索商品和品牌" disabled="disabled">
            <img src="./images/search.png" alt="">
          </a>
        </span>
          <span class="news">
          <a href="javascript:;">
            <img src="./images/mydope.png" alt="">
          </a>
        </span>
        </div>
        <div class="swiper-container swiper-container-horizontal swiperList">
            <div class="swiper-wrapper">
              <div class="swiper-slide" style="margin-right: 5px;">首页</div>
              <div class="swiper-slide" style="margin-right: 5px;">狗狗主粮</div>
              <div class="swiper-slide" style="margin-right: 30px;">服饰城</div>
              <div class="swiper-slide" style="margin-right: 30px;">医疗保健</div>
              <div class="swiper-slide" style="margin-right: 30px;">零食玩具</div>
              <div class="swiper-slide" style="margin-right: 30px;">日用外出</div>
              <div class="swiper-slide" style="margin-right: 30px;">美容香波</div>
            </div>
          </div>
      </div>
      <div class="allmore">
        <div class="swiper-container swiper-container-horizontal swiperContainer">
          <div class="swiper-wrapper">
            <div class="swiper-slide swiper-slide-active" style="width: 375px; height: 160px;">
              <img src="./images/lunbo1.jpg" alt="">
            </div>
            <div class="swiper-slide swiper-slide-next" style="width: 375px; height: 160px;">
              <img src="./images/lunbo2.jpg" alt="">
            </div>
            <div class="swiper-slide" style="width: 375px; height: 160px;">
              <img src="./images/lunbo3.jpg" alt="">
            </div>
            <div class="swiper-slide" style="width: 375px; height: 160px;">
              <img src="./images/lunbo4.jpg" alt="">
            </div>
            <div class="swiper-slide" style="width: 375px; height: 160px;">
              <img src="./images/lunbo5.jpg" alt="">
            </div>
          </div>
          <!-- Add Pagination -->
          <div class="swiper-pagination swiper-pagination-bullets">
            <span class="swiper-pagination-bullet swiper-pagination-bullet-active"></span>
            <span class="swiper-pagination-bullet"></span>
            <span class="swiper-pagination-bullet"></span>
            <span class="swiper-pagination-bullet"></span>
            <span class="swiper-pagination-bullet"></span>
          </div>
        </div>
        <div class="allmore-banner"></div>
        <div class="allmore-column">
          <ul class=""></ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Swiper from 'swiper'

  // import swiper from 'static/css/swiper.min.css'
  export default {
    mounted(){
      const swiperContainer = new Swiper('.swiperContainer',{
        el: '.swiperContainer',
        autoplay:{
          disableOnInteraction: false,
        },
        loop : true,
        // pagination: {
        //   el: '.swiperContainer',
        //   clickable: true,
        //   renderBullet: function (index, span) {
        //     return '<span class="' + span + '">' + (index + 1) + '</span>';
        //   },
        // },
      });
      const swiperList = new Swiper('.swiperList', {
        slidesPerView: 5,
        spaceBetween: 30,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
      })
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
  .msite
    width 100%
    height 100%
    background white
    .indexbox
      width 100%
      height 100%
      box-sizing border-box
      padding-bottom 132px
      .indexheader
        width 100%
        background-color #ffffff
        position relative
        top 0
        left 0
        right 0
        z-index 100
        overflow hidden
        .search
          width 100%
          height 51px
          display flex
          justify-content space-between
          box-sizing border-box
          padding 13px 10px
          line-height 25px
          .pet
            font-size 14px
            text-align center
            color #898989
            position relative
            .address
              font-size 13px
            i
              font-size 13px
              display inline-block
              transform scale(0.7)
              position absolute
              top 1px
              right -14px
          .searchInput
            width 69%
            a
              font-size 0
              width 100%
              height 100%
              margin-left 5px
              display block
              position relative
              input
                width 100%
                height 100%
                outline none
                text-indent 10px
                background-color #e9e9e9
                font-size 13px
                border-radius 4px
              img
                width 11px
                height 11px
                position absolute
                top 0
                right 5px
                bottom 0
                margin auto 0
          .news
            height 100%
            a
              img
                height 100%
      .swiperList
        width 100%
        height 100%
        margin 0 auto
        position relative
        overflow hidden
        list-style none
        padding 0
        z-index 1
        .swiper-wrapper
          position relative
          width 100%
          height 100%
          z-index 1
          display flex
          .swiper-slide
            width 75px
            height 36px
            text-align center
            font-size 13px
            background #fff
            display flex
            justify-content space-around
            flex-direction row
            line-height 36px
            position: relative;
            white-space:nowrap;
            overflow:hidden;
            text-overflow:ellipsis;
  .swiperContainer
        margin 0 auto
        position relative
        overflow hidden
        list-style none
        padding 0
        z-index 1
        .swiper-wrapper
          position relative
          width 100%
          height 100%
          z-index 1
          .swiper-slide-active
            opacity 1
            background #007aff
          .swiper-slide
            position relative
            width 100%
            height 100%
            img
              width 375px
              height 160px
      .swiper-pagination
        position absolute
        text-align center
        z-index 10
        .swiper-pagination-bullet
          margin 0 4px
          width 8px
          height 8px
          display inline-block
          border-radius 100%
          background #000
          opacity .2
        .swiper-pagination-bullet-active
          opacity 1
          background #007aff
  .allmore-banner
    width 375px
    height 1px
</style>
