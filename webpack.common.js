const path = require('path');
const webpack = require('webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniExtractTextPlugin = require('mini-css-extract-plugin');

const viewMap = {
  index: './views/index/index.html',
  detail: './views/detail/detail.html'
};

const commonConfig = {
  entry: {
    index: './views/index/index.js',
    detail: './views/detail/detail.js'
  },
  output: {
      path: path.resolve(__dirname, 'dist'),
      filename: '[name].js',
      chunkFilename: '[name].chunk.js'
  },
  resolve: {
    modules: [
      __dirname,
      path.resolve(__dirname, 'node_modules')
    ],
    extensions: ['.js']
  },
  module: {
    rules: [
      {
          test: /\.css$/,
          use: [
              MiniExtractTextPlugin.loader,
              'css-loader'
          ]
      },
      {
        test: /\.js|jsx$/,
        use: [
          {
            loader: 'babel-loader'
          }
        ],
        exclude: /node_modules/
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
        template: path.resolve(__dirname, 'views/index/index.html')　　// 使用的模板路径
    }),
    new webpack.HashedModuleIdsPlugin(),
    new MiniExtractTextPlugin({
      filename: '[name].css',
      chunkFilename: '[name].chunk.css'
    })
  ]
};
Object.keys(viewMap).forEach((viewKey) => {
  const htmlConfig = {
    // 指定html模板文件
    template: viewMap[viewKey],
    // 输出的html文件的名称
    filename: `${viewKey}.html`,
    // 允许插入到模板中的chunk
    chunks: ['manifest', 'lodash', viewKey],
    inject: true
  }
  commonConfig.plugins.push(new HtmlWebpackPlugin(htmlConfig));
});
module.exports = commonConfig;