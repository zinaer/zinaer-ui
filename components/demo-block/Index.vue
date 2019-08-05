<template>
  <view :class="'custom-class demo-block zr-clearfix ' + (padding ? 'demo-block--padding' : '')">
    <view wx:if="title" class="demo-block__title">{{ title }}</view>
    <slot />
  </view>
</template>

<script>
  export default {
    props: {
      title: String,
      padding: Boolean
    }
  }
</script>

<style lang="stylus" scoped>
  @import '../common/index.styl'
  
  .demo-block__title
    margin 0
    font-weight 400
    font-size 14px
    color rgba(69,90,100,.6)
    padding 20px 15px 15px

  .demo-block--padding
    padding 0 15px

  .demo-block--padding .demo-block__title
    padding-left 0
    
</style>
