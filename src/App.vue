<template>
  <div id="app">
    <!-- 显示当前路由组件 -->
    <router-view homepage1="test"></router-view>

    <FooterGuide></FooterGuide>
  </div>
</template>

<script>
import FooterGuide from './components/FooterGuide/FooterGuide.vue'
export default {
  components:{
    FooterGuide
  },

}
</script>

<style lang="stylus" rel="stylesheet/stylus">

</style>
