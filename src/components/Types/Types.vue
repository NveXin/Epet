<template>
  <div class="kind">
    <div class="left">
      <div class="wrap">
        <ul>
          <li>为您推荐</li>
          <li>为您推荐</li>
          <li>为您推荐</li>
          <li>为您推荐</li>
          <li>为您推荐</li>
          <li>为您推荐</li>
          <li>为您推荐</li>
          <li>为您推荐</li>
          <li>为您推荐</li>
          <li>为您推荐</li>
          <li>为您推荐</li>
          <li>为您推荐</li>
          <li>为您推荐</li>
        </ul>
      </div>
    </div>
    <div class="right">
      <div class="list">
          <a class="item" href="javascript:;">
            <ul>
              <li>
                <a href="javascript:;">
                  <div class="img1">
                    <img src="https://img2.epetbar.com/nowater/2017-05/04/16/fd206e6489657294e9067d349ea297f1.jpg?x-oss-process=style/fill&$1=300&$2=300" alt="">
                  </div>
                  <p class="text">强化免疫</p>
                </a>
              </li>
              <li>
                <a href="javascript:;">
                  <div class="img1">
                    <img src="https://img2.epetbar.com/nowater/2017-05/04/16/fd206e6489657294e9067d349ea297f1.jpg?x-oss-process=style/fill&$1=300&$2=300" alt="">
                  </div>
                  <p class="text">强化免疫</p>
                </a>
              </li>
              <li>
                <a href="javascript:;">
                  <div class="img1">
                    <img src="https://img2.epetbar.com/nowater/2017-05/04/16/fd206e6489657294e9067d349ea297f1.jpg?x-oss-process=style/fill&$1=300&$2=300" alt="">
                  </div>
                  <p class="text">强化免疫</p>
                </a>
              </li>
              <li>
                <a href="javascript:;">
                  <div class="img1">
                    <img src="https://img2.epetbar.com/nowater/2017-05/04/16/fd206e6489657294e9067d349ea297f1.jpg?x-oss-process=style/fill&$1=300&$2=300" alt="">
                  </div>
                  <p class="text">强化免疫</p>
                </a>
              </li>
              <li>
                <a href="javascript:;">
                  <div class="img1">
                    <img src="https://img2.epetbar.com/nowater/2017-05/04/16/fd206e6489657294e9067d349ea297f1.jpg?x-oss-process=style/fill&$1=300&$2=300" alt="">
                  </div>
                  <p class="text">强化免疫</p>
                </a>
              </li>
              <li>
                <a href="javascript:;">
                  <div class="img1">
                    <img src="https://img2.epetbar.com/nowater/2017-05/04/16/fd206e6489657294e9067d349ea297f1.jpg?x-oss-process=style/fill&$1=300&$2=300" alt="">
                  </div>
                  <p class="text">强化免疫</p>
                </a>
              </li>
            </ul>
          </a>
        </div>
    </div>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'
  export default {
    mounted(){
        this.$nextTick(()=>{
          new BScroll ('.wrap', {
            /*probeType: 2,
            scrollY: true,*/
            click: true
          })
        })
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .kind
    display flex
    .left
      width 375px
      height 627px
      .wrap
        padding-top 10px
        position fixed
        z-index 1
        top 40px
        bottom 0
        width 70px
        height 627px
        ul
          padding-bottom 50px
          width 70px
          /*height 700px*/
          background-color white
          text-align center
          font-size 13px
          li
            width 70px
            height 50px
            line-height 50px
    .right
      margin-top 48px
      width 300px
      height 309px
      .list
        width 300px
        height 309px
        .item
          display block
          width 290px
          height 19px
          ul
            width 290px
            height 254px
            display flex
            flex-wrap wrap
            justify-content space-around
            li
              width 96.5px
              height 116.5px
              a
                width 86.5px
                height 116.5px
                .img1
                  img
                    width 86.5px
                    height 86.5px
                .text
                  width 86.5px
                  height 20px
</style>
