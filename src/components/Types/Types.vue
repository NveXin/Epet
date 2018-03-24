<template>
  <div class="kind">
    <div class="left">
      <div class="wrap">
        <ul>
          <li v-for="(type, index) in categorys" :key="index"
            :class="{on:index === currIndex}"
            @click="setCurrIndex(index)">
            {{type.name}}
          </li>
        </ul>
      </div>
    </div>
    <div class="right">
      <div v-for="(cate, index) in categorys">
      <div class="list" v-for="(c, index) in cate.cate_list">
          <a class="item" href="javascript:;">
            <ul>
              <li  v-for="(item, index) in c.list"  :key="index">
                <a href="javascript:;">
                  <div class="img1">
                    <img :src="item.photo" alt="">
                  </div>
                  <p class="text">{{item.name}}</p>
                </a>
              </li>

            </ul>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'
  import {mapState} from 'vuex'

  export default {
    data(){
      return{
        currIndex:0             //初始化currIndex值
      }
    },
    methods:{
      setCurrIndex(index){
        this.currIndex = index //点击切换颜色
      }
    },

    computed:{
      ...mapState(['categorys'])
      /*categorys(){
        return this.$store.state.categorys
      }*/
    },

    mounted(){
      this.$store.dispatch('getCategorys')

      this.$nextTick(()=>{
        new BScroll ('.wrap', {
          /*probeType: 2,
          scrollY: true,*/
          click: true
        })
      })
    },

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
            &.on
              color red
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
