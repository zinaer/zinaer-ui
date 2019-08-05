<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style lang="stylus">
	@import "./components/common/index.styl"
  
  page {
    color: #333;
    font-size: 16px;
    background: #f2f3f5;
    min-height: 100vh;
    box-sizing: border-box;
    padding: 0 0 100rpx;
    -webkit-font-smoothing: antialiased;
    font-family: 'PingFang SC', Helvetica, 'STHeiti STXihei', 'Microsoft YaHei', Tohoma, Arial, sans-serif;
  }
  .demo-margin-left {
    margin-left: 10px;
  }

  .demo-margin-right {
    margin-right: 10px;
  }

  .demo-margin-bottom {
    display: block;
    margin-bottom: 15px;
  }
</style>