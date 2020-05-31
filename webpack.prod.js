const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const merge = require('webpack-merge');
const commonConfig = require('./webpack.common.js');

module.exports = merge(commonConfig, {
  mode: 'production',
  optimization: {
    runtimeChunk: {
      name: 'manifest'
    },
    splitChunks: {
      chunks: 'all',
      maxInitialRequests: 5,
      maxAsyncRequests: 3,
      cacheGroups: {
        lodash: {
          name: 'lodash',
          minChunks: 1,
          test: /node_modules\/lodash/,
          priority: 10,
          reuseExistingChunk: true
        }
      }
    },
    minimizer: [
      new UglifyJsPlugin({
        uglifyOptions: {
          compress: {
            warnings: false,
            drop_debugger: true,
            drop_console: true
          }
        },
        sourceMap: true, //这里需要添加sourceMap，因为UglifyJsPlugin默认配置sourceMap是false
        exclude: /.*/
      })
    ]
  }
});
