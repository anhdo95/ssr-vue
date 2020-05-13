

const webpack =  require('webpack')
const merge = require('webpack-merge')
const VueSSRClientPlugin = require('vue-server-renderer/client-plugin')

const setupBaseConfig = require('./webpack.base.config')

module.exports = merge(setupBaseConfig(), {
  entry: {
    app:  './src/entry-client.js'
  },

  target: 'node',

  devtool: 'source-map',

  optimization: {
    splitChunks: {
      // extract vendor chunks for better caching
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
        }
      }
    }
  },

  plugins: [
    
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development'),
      'process.env.VUE_ENV': '"client"'
    }),
    new VueSSRClientPlugin()
  ]
})
