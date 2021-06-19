## delete-source-maps-webpack-plugin
一个 webpack 插件，用于删除项目构件之后产生的 source map 文件

对于原生 webpack 配置
```js
// webpack.config.js 
import DeleteSourceMapsWebpackPlugin from 'delete-source-maps-webpack-plugin'
// or
// const DeleteSourceMapsWebpackPlugin = require('delete-source-maps-webpack-plugin').default

module.exports = {
  devtool:'source-map',
  plugins:[
    new DeleteSourceMapsWebpackPlugin()
  ]
}
```

对于 chainWebpack 配置
```js
const DeleteSourceMapsWebpackPlugin = require('delete-source-maps-webpack-plugin').default
const chainWebpack = (config)=>{
  config.devtool('source-map').end()
  config.plugins('delete-source-maps-webpack-plugin').use(DeleteSourceMapsWebpackPlugin).end()
}
```