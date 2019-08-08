<template>
  <view
    class="zr-loading custom-class"
    :style="'width: ' + size + '; height: ' + size"
  >
    <view
      :class="'zr-loading__spinner zr-loading__spinner--' + type"
      :style="'color: ' + color"
    >
      <view
        v-if="type === 'spinner'"
        v-for="(item, index) in 12"
        :key="index"
        class="zr-loading__dot"
      ></view>
    </view>
  </view>
</template>

<script>
  export default {
    props: {
      customClass: String,
      size: {
        type: String,
        default: '30px'
      },
      type: {
         type: String,
         default: 'circular'
      },
      color: {
        type: String,
        default: '#c9c9c9'
      }
    }
  }
</script>

<style lang="stylus" scoped>
  @import '../common/style/zr.styl'
  
  .zr-loading
    z-index 0
    line-height 0
    position relative
    display inline-block
    vertical-align middle

    &__spinner
      z-index -1
      width 100%
      height 100%
      position relative
      display inline-block
      box-sizing border-box
      animation zr-rotate 0.8s linear infinite
  
      &--spinner
        animation-timing-function steps(12)
  
      &--circular
        border 1px solid
        border-radius 100%
        border-color transparent
        border-top-color currentColor
        
    &__dot
      top 0
      left 0
      width 100%
      height 100%
      position absolute

      &::before
        width 2px
        height 25%
        content ' '
        display block
        margin 0 auto
        border-radius 40%
        background-color currentColor

  n = 1 2 3 4 5 6 7 8 9 10 11 12
  
  for i in n
    .zr-loading__dot:nth-of-type({i})
      opacity 1 - (0.75 / 12) * (i - 1)
      transform rotate(i * 30deg)
        
  @keyframes zr-rotate
    from
      transform rotate(0deg)
      
    to
      transform rotate(360deg)

</style>
