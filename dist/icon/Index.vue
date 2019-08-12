<template>
  <view
    :class="'custom-class ' + classPrefix + ' ' + (isSrc ? 'zr-icon--image' : classPrefix + '-' + name)"
    :style="(color ? 'color: ' + color + ';' : '') + (size ? 'font-size: ' + size + ';' : '') + customStyle"
    @click="onClick"
  >
    <zr-info
      v-if="info && info !== undefined"
      :info="info"
      custom-class="zr-icon__info"
    />
    <image
      v-if="isSrc"
      :src="name"
      class="zr-icon__image"
    />
  </view>
</template>

<script>
  import utils from '../js/utils.js'
  import zrInfo from '@/packages/info/Index'
  
  export default {
    components: {
      zrInfo
    },
    data() {
      return {
        isSrc: Boolean
      } 
    },
    props: {
      info: String || Number,
      name: String,
      size: String,
      color: String,
      customStyle: String,
      classPrefix: {
        type: String,
        default: 'zr-icon'
      }
    },
    created() {
      this.isSrc = utils.isSrc(this.name)
    },
    methods: {
      onClick() {
        this.$emit('click');
      }
    },
  }
</script>

<style lang="stylus" scoped>
  @import '../common/style/zr.styl'
  @import '../common/style/icon.styl'
  
  .zr-icon
    &--image
      width 1em
      height 1em

    &__image
      position absolute
      top 0
      right 0
      bottom 0
      left 0
      max-width 100%
      max-height 100%
      margin auto

    &__info
      z-index 1
      
</style>
