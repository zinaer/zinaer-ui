<template>
  <view
    v-if="info !== null"
    class="custom-class zr-info"
    :style="customStyle"
  >{{ info }}</view>
</template>

<script>
  export default {
    props: {
      info: null,
      customStyle: String
    }
  }
</script>

<style lang="stylus" scoped>
  @import '../common/style/zr.styl'

  .zr-info
    position absolute
    top -(info-size / 2)
    right 0
    min-width info-size
    padding info-padding
    font-family info-font-family
    font-size info-font-size
    font-weight info-font-weight
    line-height info-size - info-border-width * 2
    color info-color
    text-align center
    white-space nowrap
    background-color info-background-color
    border info-border-width solid white
    border-radius info-size
    transform translateX(50%)
    box-sizing border-box
    transform-origin 100%
</style>
