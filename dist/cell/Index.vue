<template>
  <view
    :class="'custom-class '"
    hover-class="zr-cell--hover hover-class"
    hover-stay-time="70"
    :style="customStyle"
    @click="onClick"
  >
    <zr-icon
      v-if="{{ icon }}"
      name="{{ icon }}"
      class="zr-cell__left-icon-wrap"
      custom-class="zr-cell__left-icon"
    />
    <slot wx:else name="icon" />

    <view
      style="{{ titleWidth ? 'max-width:' + titleWidth + ';min-width:' + titleWidth : '' }}"
      class="zr-cell__title title-class"
    >
      <block wx:if="{{ title }}">{{ title }}</block>
      <slot wx:else name="title" />

      <view wx:if="{{ label || useLabelSlot }}" class="zr-cell__label label-class">
        <slot wx:if="{{ useLabelSlot }}" name="label" />
        <block wx:elif="{{ label }}">{{ label }}</block>
      </view>
    </view>

    <view class="zr-cell__value value-class">
      <block wx:if="{{ value || value === 0 }}">{{ value }}</block>
      <slot wx:else />
    </view>

    <zr-icon
      wx:if="{{ isLink }}"
      name="{{ arrowDirection ? 'arrow' + '-' + arrowDirection : 'arrow' }}"
      class="zr-cell__right-icon-wrap right-icon-class"
      custom-class="zr-cell__right-icon"
    />
    <slot wx:else name="right-icon" />

    <slot name="extra" />
  </view>
</template>

<script>
</script>

<style lang="stylus" scoped>
</style>
