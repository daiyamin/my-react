const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const webpack = require('webpack');
console.log(path.resolve(__dirname, 'node_modules'));
// const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const merge = require('webpack-merge');
const commonConfig = require('./webpack.common.js');

module.exports = (env) => {
  console.log('webpack.dev.js', env);
  return merge(commonConfig, {
    // 编译出的代码运行环境，webpack默认会为不通过的target添加不同的附加项
    target:'web',
    // 模式，webpack会为不同的mode运行不同的内置项
    mode: 'development',
    devtool: 'source-map',
    plugins: [
      new webpack.NamedModulesPlugin(),
      new webpack.HotModuleReplacementPlugin(),
      // new webpack.HashedModuleIdsPlugin()
    ],
    devServer: {
      contentBase: path.join(__dirname, '../'),
      hot: true,
      inline: true
    }
  });
};