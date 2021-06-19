## delete-source-maps-webpack-plugin
一个 webpack 插件，用于删除项目构件之后产生的 source map 文件

[![npm version](https://badge.fury.io/js/delete-source-maps-webpack-plugin.svg)](https://badge.fury.io/js/delete-source-maps-webpack-plugin)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://github.com/YingJiangHui/delete-source-maps-webpack-plugin/blob/main/LICENSE)

### 安装
```bash
yarn add delete-source-maps-webpack-plugin -D
```

### 对于 webpack 配置
```js
// webpack.config.js
const DeleteSourceMapsWebpackPlugin = require('delete-source-maps-webpack-plugin').default

module.exports = {
  devtool:'source-map',
  plugins:[
    new DeleteSourceMapsWebpackPlugin()
  ]
}
```

### 对于 chainWebpack 配置
```js
import DeleteSourceMapsWebpackPlugin from 'delete-source-maps-webpack-plugin'

const chainWebpack = (config)=>{
  config.devtool('source-map').end()
  config.plugins('delete-source-maps-webpack-plugin').use(DeleteSourceMapsWebpackPlugin).end()
}
```