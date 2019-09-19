const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const webpack = require('webpack');
console.log(path.resolve(__dirname, 'node_modules'));
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
    mode: 'production',
    optimization: {
      runtimeChunk: {
        name: 'manifest'
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
          sourceMap: true,
          exclude: /(manifest\.js$|index.chunk.js)/
        })
      ]
    },
    entry: {
      index: './views/index/index.js'
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
                'style-loader',
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
    // new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
        template: path.resolve(__dirname, 'views/index/index.html')　　// 使用的模板路径
    }),
    // new webpack.NamedModulesPlugin(),
    // new webpack.HotModuleReplacementPlugin(),
    // new webpack.HashedModuleIdsPlugin()
  ],
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    hot: false
  }
}