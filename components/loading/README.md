# Loading 加载

### 引入

在`script`中引入组件，默认为`ES6`版本

```js
import zrLoading from '@/components/loading/Index'

export default {
  component: {
    zrLoading
  }
}
```


## 代码演示

### Circular

```html
<zr-loading />
<zr-loading color="#fff" />
```

### Spinner

```html
<zr-loading type="spinner" />
<zr-loading type="spinner" color="#fff" />
```

### Props

| 参数 | 说明 | 类型 | 默认值 |
|-----------|-----------|-----------|-------------|
| color | 颜色 | `String` | `#c9c9c9` |
| type | 类型，可选值为 `spinner` | `String` | `circular` |
| size | 大小 | `String` | `30px` |

### 外部样式类

| 类名 | 说明 |
|-----------|-----------|
| custom-class | 根节点样式类 |
