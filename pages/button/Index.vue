<template>
  <demo-section>
    <demo-block title="按钮类型" padding>
      <view class="row">
        <zr-button class="demo-margin-right">默认按钮</zr-button>
        <zr-button type="primary" class="demo-margin-right">主要按钮</zr-button>
        <zr-button type="info" class="demo-margin-right">信息按钮</zr-button>
      </view>
      <zr-button type="danger" class="demo-margin-right">危险按钮</zr-button>
      <zr-button type="warning">警告按钮</zr-button>
    </demo-block>

    <demo-block title="朴素按钮" padding>
      <zr-button type="primary" plain class="demo-margin-right">朴素按钮</zr-button>
      <zr-button type="danger" plain>朴素按钮</zr-button>
    </demo-block>

    <demo-block title="细边框" padding>
      <zr-button type="primary" plain hairline class="demo-margin-right">细边框按钮</zr-button>
      <zr-button type="danger" plain hairline>细边框按钮</zr-button>
    </demo-block>

    <demo-block title="禁用状态" padding>
      <zr-button type="primary" disabled class="demo-margin-right">禁用状态</zr-button>
      <zr-button type="danger" disabled>禁用状态</zr-button>
    </demo-block>

    <demo-block title="加载状态" padding>
      <zr-button loading type="primary" class="demo-margin-right" />
      <zr-button loading type="danger" loading-text="加载中..." />
    </demo-block>

    <demo-block title="按钮形状" padding>
      <zr-button type="primary" square class="demo-margin-right">方形按钮</zr-button>
      <zr-button type="danger" round>圆形按钮</zr-button>
    </demo-block>

    <demo-block title="按钮尺寸" padding>
      <zr-button size="large" block custom-class="demo-margin-bottom">大号按钮</zr-button>
      <zr-button class="demo-margin-right">普通按钮</zr-button>
      <zr-button size="small" class="demo-margin-right">小型按钮</zr-button>
      <zr-button size="mini">迷你按钮</zr-button>
    </demo-block>
  </demo-section>

</template>

<script>
  import demoBlock from '@/components/demo-block/Index.vue'
  import zrButton from '@/components/button/Index.vue'
  
  export default {
    components: {
      demoBlock,
      zrButton
    },
    methods: {
      getUserInfo(e) {
        console.log(e)
      }
    }
  }
</script>

<style lang="stylus" scoped>
  .row
    height 44px
    margin-bottom 15px
 
</style>
