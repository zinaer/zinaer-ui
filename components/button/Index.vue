<template>
  <button
    :id="id"
    :class="'zr-button' + (customClass ? ' ' + customClass + ' ' : '') + setClass([type, size, { plain, block, round, square, disabled, hairline, loading }])"
    hover-class="zr-button--active hover-class"
  >
    <block v-if="loading">
      <zr-loading
        custom-class="loading-class"
        :size="loadingSize"
        :color="type === 'default' ? '#c9c9c9' : ''"      
      > 
      </zr-loading>
      <view
        v-if="loadingText"
        class="zr-button__loading-text"
      >
        {{ loadingText }}
      </view>
    </block>
    <slot v-else></slot>
  </button>
</template>

<script>
  import zrLoading from '@/components/loading/Index'
  
  export default {
    components: {
      zrLoading
    },
    props: {
      id: String,
      type: {
        type: String,
        default: 'default'
      },
      size: {
        type: String,
        default: 'normal'
      },
      customClass: String,
      // #ifdef H5
      plain: String,
      block: String,
      round: String,
      square: String,
      disabled: String,
      hairline: String,
      loading: String,
      // #endif
      // #ifndef H5
      plain: Boolean,
      block: Boolean,
      round: Boolean,
      square: Boolean,
      disabled: Boolean,
      hairline: Boolean,
      loading: Boolean,
      // #endif
      loadingText: String,
      loadingSize: {
        type: String,
        default: '20px'
      }
    },
    methods: {
      setClass(conf) {
        const PREFIX = 'zr-'
        
        if (!conf) {
          return
        }
        
        let classNames = ''
        let i = 0
        
        while (i < 2)
        {
          if (conf[i] !== undefined && conf[i] !== '') {
            classNames += ' zr-button--' + conf[i]
          }
          
          i++
        }

        for (let i in conf[2]) {
          if (conf[2][i] !== false && conf[2][i] !== undefined) {
            classNames += ' zr-button--' + i
          }
        }

        return classNames
      }
    }
  }
</script>

<style lang="stylus" scoped>
  @import '../common/style/zr.styl'
    
  .zr-button
    display inline-block
    height 44px
    padding 0
    font-size 16px
    line-height 42px
    border-radius button-border-radius
    -webkit-appearance none
    -webkit-text-size-adjust 100%
    
    &::before
      position absolute
      top 50%
      left 50%
      width 100%
      height 100%
      background-color black
      border inherit
      border-color black
      border-radius inherit
      content ' '
      opacity 0
      transform translate(-50%, -50%)
      
    &::after
      border-width 0
      
    &--active::before
      opacity 0.15

    &--default
      color button-default-color
      background-color button-default-background-color
      border 1px solid button-default-border-color
      
    &--primary
      color button-primary-color
      background-color button-primary-background-color
      border: 1px solid button-primary-border-color
     
    &--info
      color button-info-color
      background-color button-info-background-color
      border 1px solid button-info-border-color

    &--danger
      color button-danger-color
      background-color button-danger-background-color
      border 1px solid button-danger-border-color

    &--warning
      color button-warning-color
      background-color button-warning-background-color
      border 1px solid button-warning-border-color

    &--plain
      background-color white

      &.zr-button--primary
        color button-primary-background-color

      &.zr-button--info
        color button-info-background-color

      &.zr-button--danger
        color button-danger-background-color

      &.zr-button--warning
        color button-warning-background-color
      
    &--large
      width 100%
      height 50px
      line-height 48px

    &--normal
      padding 0 15px
      font-size 14px

    &--small
      height 30px
      min-width 60px
      padding 0 8px
      font-size 12px
      line-height 28px 

    /* mini图标默认宽度50px，文字不能超过4个 */
    &--mini
      display inline-block
      width 50px
      height 22px
      font-size 10px
      line-height 20px

      & + .zr-button--mini
        margin-left: 5px
        
    &--block
      display block
      width 100%
      
    &--round
      border-radius button-round-border-radius
      
    &--square
      border-radius 0

    &--disabled
      opacity 0.5
      
    &__loading-text
      margin-left 5px
      display inline-block
      vertical-align middle

    &--hairline
      border-width 0
      padding-top 1px // add 1px padding for text vertical align middle

      &::after
        border-width 1px
        border-color inherit
        border-radius button-border-radius * 2

      &.zr-button--round::after
        border-radius button-round-border-radius

      &.zr-button--square::after
        border-radius 0
</style>
