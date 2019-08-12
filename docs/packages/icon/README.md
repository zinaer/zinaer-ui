# Icon 图标

### 引入

在`script`中引入组件

```js
import zrIcon from 'path/to/zinaer-ui/dist/icon/Index'

export default {
  components: {
    zrIcon
  }
}
```
## 代码演示

### 基础用法

`Icon`的`name`属性支持传入图标名称或图片链接

```html
<zr-icon name="close"></zr-icon>
<zr-icon name="https://img.zinaer.com/zrui/icon-demo-1126.png"></zr-icon>
```

### 显示徽标

 ```html
<zr-icon name="chat" info="9"></zr-icon>
<zr-icon name="chat" info="99+"></zr-icon>
```

### Props

| 参数 | 说明 | 类型 | 默认值 |
|-----------|-----------|-----------|-------------|
| name | 图标名称或图片链接 | `String` | - |
| info | 图标右上角文字提示 | `String | Number` | - |
| color | 图标颜色 | `String` | `inherit` |
| size | 图标大小，如 `20px`，`2upx` | `String` | `inherit` |
| custom-style | 自定义样式 | `String` | - |
| class-prefix | 类名前缀 | `String` | `zr-icon` |

### Events

| 事件名 | 说明 | 参数 |
|-----------|-----------|-----------|
| @click | 点击图标时触发 | - |

### 外部样式类

| 类名 | 说明 |
|-----------|-----------|
| custom-class | 根节点样式类 |
