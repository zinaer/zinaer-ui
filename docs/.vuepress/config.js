module.exports = {
  title: 'Zinaer UI',
  base: '/zinaer-ui-docs/',
  description: '轻量、可靠的 uni-app 跨端 UI 组件库',
  themeConfig: {
    nav: [
      { text: '指南', link: '/guide/' },
      { text: '组件', link: '/packages/button/' },
      { text: 'GitHub', link: 'https://github.com/zinaer/zinaer-ui' },
    ],
    sidebar: {
      '/guide/': [
        {
          title: '指南',
          children: [
            ['', '介绍'],
            ['quickstart', '快速上手'],
            ['common', '内置样式']
          ]
        }
      ],
      '/packages/': [
        {
          title: '基础组件',
          collapsable: false,
          children: [
            ['button/', 'Button 按钮'],
            ['cell/', 'Cell 单元格'],
            ['icon/', 'Icon 图标'],
            ['col/', 'Layout 布局'],
            ['popup/', 'Popup 弹出层'],
            ['transition/', 'Transition 动画']
          ]          
        },
        {
          title: '表单组件',
          collapsable: false,
          children: [
            ['checkbox/', 'Checkbox 复选框'],
            ['datetime-picker/', 'DatetimePicker 时间选择'],
            ['field/', 'Field 输入框'],
            ['picker/', 'Picker 选择器'],
            ['radio/', 'Radio 单选框'],
            ['rate/', 'Rate 评分'],
            ['search/', 'Search 搜索'],
            ['slider/', 'Slider 滑块'],
            ['stepper/', 'Stepper 步进器'],
            ['switch/', 'Switch 开关'],
            ['switch-cell/', 'SwitchCell 开关单元格']
          ]          
        },
        {
          title: '反馈组件',
          collapsable: false,
          children: [
            ['action-sheet/', 'ActionSheet 上拉菜单'],
            ['dialog/', 'Dialog 弹出框'],
            ['loading/', 'Loading 加载'],
            ['notify/', 'Notify 消息提示'],
            ['swipe-cell/', 'SwipeCell 滑动单元格'],
            ['toast/', 'Toast 轻提示'],
          ]          
        },
        {
          title: '展示组件',
          collapsable: false,
          children: [
            ['collapse/', 'Collapse 折叠面板'],
            ['notice-bar/', 'NoticeBar 通告栏'],
            ['panel/', 'Panel 面板'],
            ['progress/', 'Progress 进度条'],
            ['steps/', 'Steps 步骤条'],
            ['tag/', 'Tag 标签'],
            ['tree-select/', 'TreeSelect 分类选择']
          ]          
        },
        {
          title: '导航组件',
          collapsable: false,
          children: [
            ['badge/', 'Badge 徽章'],
            ['nav-bar/', 'NavBar 导航栏'],
            ['tab/', 'Tab 标签页'],
            ['tabbar/', 'Tabbar 标签栏']
          ]          
        },
        {
          title: '业务组件',
          collapsable: false,
          children: [
            ['area/', 'Area 省市区选择'],
            ['card/', 'Card 商品卡片'],
            ['submit-bar/', 'SubmitBar 提交订单栏'],
            ['goods-action/', 'GoodsAction 商品导航']
          ]          
        }
      ]
    }
  }
}