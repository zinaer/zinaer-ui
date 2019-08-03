<template>
	<view class="content">
    <!-- 上边框 -->
    <view class="zr-hairline--top zr-div">hello</view>

    <!-- 下边框 -->
    <view class="zr-hairline--bottom zr-div"></view>

    <!-- 左边框 -->
    <view class="zr-hairline--left zr-div"></view>

    <!-- 右边框 -->
    <view class="zr-hairline--right zr-div"></view>

    <!-- 上下边框 -->
    <view class="zr-hairline--top-bottom zr-div"></view>

    <!-- 全边框 -->
    <view class="zr-hairline--surround zr-div"></view>
	</view>
</template>

<script>
	export default {
    component: {
      
    },
		data() {
			return {
			}
		},
		onLoad() {

		},
		methods: {

		}
	}
</script>

<style lang="stylus" scoped>
.zr-div
  width 200rpx
  height 200rpx
  margin 20rpx
  border 1px solid
</style>
