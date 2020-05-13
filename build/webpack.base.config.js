const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const { VueLoaderPlugin } = require('vue-loader')

module.exports = function setup(isServer) {
  return {
    output: {
      path: path.resolve(__dirname, '../dist', isServer ? 'server': 'client'),
      publicPath: `/dist/${isServer ? 'server': 'client'}/`,
      filename: '[name].[chunkhash].js'
    },

    resolve: {
      extensions: ['.js'],
      alias: {
        '@': path.resolve(__dirname, '../src')
      },
    },

    module: {
      rules: [
        {
          test: /\.vue$/,
          loader: 'vue-loader',
          options: {
            compilerOptions: {
              preserveWhitespace: false
            }
          }
        },
        {
          test: /\.js$/,
          loader: 'babel-loader',
          exclude: /node_modules/
        },
        {
          test: /\.(png|jpg|gif|svg)$/,
          loader: 'url-loader',
          options: {
            limit: 10000,
            name: '[name].[ext]?[hash]'
          }
        },
        {
          test: /\.css|scss|sass$/,
          use: ['vue-style-loader', 'css-loader', 'sass-loader']
        },
      ]
    },

    plugins: [
      new CleanWebpackPlugin(),
      new VueLoaderPlugin()
    ]
  }
}