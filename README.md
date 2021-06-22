# best-tools

### 简介:

前端 js 工具库: 封装常用的工具函数，如日期格式化、浏览器判断等，提高开发效率
该项目也可以当做一个学习 typescript 和 rollup 的途径=

### 如何使用:

1. 直接下载 `dist` 目录下的 `utils.min.js` 使用，支持 UMD 通用模块规范
2. 使用 npm 安装

#### 浏览器：

```js
<script src="utils.min.js"></script>
<script>
  var result = utils.isNumber(1)
</script>
```

#### npm:

`npm i chenkl-utils`

##### 全部加载（webpack、RequireJS、SeaJS 等）：

```js
var utils = require("chenkl-utils")
var result = utils.isNumber(1)
```

#### es6

```js
import utils from "chenkl-utils"
var result = utils.isNumber(1)
```

### 按需加载

```js
import isNumber from "chenkl-utils/lib/isNumber"
var result = isNumber(1)
```

#### 自动化生成文档

[typedoc](http://typedoc.org/)是一个根据 typescript 文件中注释信息，生成 typescript 应用程序或库、模块的 API 文档 的工具。你可以使用他记录如：命名空间，类，方法，方法参数等。从而使开发者很容易了解整个工具库其中的属性和方法，并且快速知道如何使用，从而提高开发效率，降低维护成本。

`npm run doc`
