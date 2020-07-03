//引入path模块
const path = require('path')

module.exports = {
  //入口（开始解析的地方）
  entry: './src/js/index.js',

  //输出（加工完成的代码输出到哪个位置）
  output: {
    path: path.resolve(__dirname, 'build'),//输出文件路径配置
    filename: "index.js"
  },

  //所有的loader都要配置在这里
  module: {
    rules: [
      //如下规则是：
      {
        test: /\.less$/, //处理所有以.less结尾的文件
        use: [{
          loader: "style-loader" // 创建一个style标签，将js中的css放入其中
        }, {
          loader: "css-loader" // 将css以CommonJs语法打包到js中
        }, {
          loader: "less-loader" // 将less转换成css
        }]
      }
    ]
  }
}