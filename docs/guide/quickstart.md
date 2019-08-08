# 快速上手

### 使用之前

使用 Zinaer UI 前，请确保你已经学习过 uni-app 官方的 [教程](https://uniapp.dcloud.io/) 和 [组件介绍](https://uniapp.dcloud.io/component/)。

## 安装

<!-- ### 方式一. 通过 npm 安装 (推荐)

uni-app 支持使用 npm 安装第三方包

```bash
# npm
npm i zinaer-ui -S --production

# yarn
yarn add zinaer-ui --production
```

### 方式二. 下载代码 -->
### 下载代码

直接通过 git 下载 Zinaer UI 源代码，并将`dist`目录拷贝到自己的项目中

```bash
git clone https://github.com/zinaer/zinaer-ui.git
```

## 使用

### 引入组件

以按钮组件为例，只需要在 `script` 中引入按钮对应的自定义组件即可

```js
import zrButton from '/path/to/zinaer-ui/dist/button/Index'

export default {
  component: {
    zrButton
  }
}
```

### 使用组件

接着就可以在 `template` 中直接使用组件

```html
<zr-button type="primary">按钮</zr-button>
```

### 在开发者工具 HBuilder 中运行

[uni-app 快速上手](https://uniapp.dcloud.io/quickstart)
