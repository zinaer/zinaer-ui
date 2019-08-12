<template>
  <view>
    <view
      v-if="title"
      class="zr-cell-group__title"
    >
      {{ title }}
    </view>
    <view :class="'custom-class zr-cell-group ' + (border ? 'zr-hairline--top-bottom' : '')">
      <slot />
    </view>
  </view>
</template>

<script>
  export default {
    props: {
      title: String,
      border: {
        type: Boolean,
        default: true
      }
    }
  }
</script>

<style lang="stylus" scoped>
  @import '../common/style/zr.styl'
  
  .zr-cell-group
    &__title
      font-size 14px
      padding 15px 15px 5px
      color gray-dark
      line-height 16px

</style>
