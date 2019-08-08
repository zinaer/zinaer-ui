# Button 按钮

### 引入

在`script`中引入组件

```js
import zrButton from 'path/to/zinaer-ui/dist/button/Index'

export default {
  component: {
    zrButton
  }
}
```


## 代码演示

### 按钮类型

支持`default`、`primary`、`info`、`warning`、`danger`五种类型，默认为`default`

```html
<zr-button type="default">默认按钮</zr-button>
<zr-button type="primary">主要按钮</zr-button>
<zr-button type="info">信息按钮</zr-button>
<zr-button type="warning">警告按钮</zr-button>
<zr-button type="danger">危险按钮</zr-button>
```

### 朴素按钮

通过`plain`属性将按钮设置为朴素按钮，朴素按钮的文字为按钮颜色，背景为白色

```html
<zr-button plain type="primary">朴素按钮</zr-button>
<zr-button plain type="danger">朴素按钮</zr-button>
```

### 细边框

设置`hairline`属性可以开启 0.5px 边框，基于伪类实现

```html
<zr-button plain hairline type="primary">细边框按钮</zr-button>
<zr-button plain hairline type="danger">细边框按钮</zr-button>
```

### 禁用状态

通过`disabled`属性来禁用按钮，此时按钮不可点击

```html
<zr-button disabled type="primary">禁用状态</zr-button>
<zr-button disabled type="danger">禁用状态</zr-button>
```

### 加载状态

```html
<zr-button loading type="primary"></zr-button>
<zr-button loading type="danger" loading-text="加载中..."></zr-button>
```

### 按钮形状

```html
<zr-button square type="primary">方形按钮</zr-button>
<zr-button round type="danger">圆形按钮</zr-button>
```

### 按钮尺寸
支持`large`、`normal`、`small`、`mini`四种尺寸，默认为`normal`

```html
<zr-button size="large">大号按钮</zr-button>
<zr-button size="normal">普通按钮</zr-button>
<zr-button size="small">小型按钮</zr-button>
<zr-button size="mini">迷你按钮</zr-button>
```

### Props

| 参数 | 说明 | 类型 | 默认值 |
|-----------|-----------|-----------|-------------|
| id | 标识符 | `String` | - |
| type | 按钮类型，可选值为 `primary` `info` `warning` `danger` | `String` | `default` |
| size | 按钮尺寸，可选值为 `normal` `large` `small` `mini` | `String` | `normal` |
| plain | 是否为朴素按钮 | `Boolean` | `false` |
| block | 是否为块级元素 | `Boolean` | `false` |
| round | 是否为圆形按钮 | `Boolean` | `false` |
| square | 是否为方形按钮 | `Boolean` | `false` |
| disabled | 是否禁用按钮 | `Boolean` | `false` |
| hairline | 是否使用 0.5px 边框 | `Boolean` | `false` |
| loading | 是否显示为加载状态 | `Boolean` | `false` |
| loading-text | 加载状态提示文字 | `String` | - |
| loading-size | 加载图标大小 | `String` | `20px` |
| open-type | 开放能力，具体支持可参考 [uni-app 官方文档](https://uniapp.dcloud.io/component/button) | `String` | - |
| app-parameter | 打开 APP 时，向 APP 传递的参数 | `String` | - |
| hover-start-time | 按住后多久出现点击态，单位毫秒 | `Number` | 20 |
| hover-stay-time | 手指松开后点击态保留时间，单位毫秒 | `Number` | 70 |

### Events

| 事件名 | 说明 | 参数 |
|-----------|-----------|-----------|
| @click | 点击按钮且按钮状态不为加载或禁用时触发 | - |
| @getuserinfo | 用户点击该按钮时，会返回获取到的用户信息，<br>从返回参数的 detail 中获取到的值同 uni.getUserInfo | - |
| @contact | 客服消息回调 | - |
| @getphonenumber | 获取用户手机号回调 | - |

### 外部样式类

| 类名 | 说明 |
|-----------|-----------|
| custom-class | 根节点样式类 |
| loading-class | 加载图标样式类 |
