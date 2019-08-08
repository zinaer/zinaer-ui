<template>
  <view>
    <demo-block title="加载类型" padding>
      <zr-loading class="demo-margin-right"></zr-loading>
      <zr-loading type="spinner"></zr-loading>
    </demo-block>

    <demo-block title="自定义颜色" padding>
      <zr-loading class="demo-margin-right" color="#1989fa"></zr-loading>
      <zr-loading type="spinner" color="#1989fa"></zr-loading>
    </demo-block>
  </view>
</template>

<script>
  import demoBlock from '@/components/demo-block/Index'
  import zrLoading from '@/dist/loading/Index'
  
  export default {
    components: {
      demoBlock,
      zrLoading
    },
    data() {
      return {
        
      }
    },
  }
</script>

<style lang="stylus" scoped>

</style>
