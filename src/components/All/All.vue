<template>
  <div class="alllist">
    <One title="全部品牌">
      <router-link class="youjian" slot="youjt" to="/"><</router-link>
      <span class="iconfont icon-leimu leimu" slot="leimu"></span>
    </One>
  </div>
</template>

<script>
  import One from '../../components/One/One.vue'
  export default {
    components: {
      One
    },
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
</style>
