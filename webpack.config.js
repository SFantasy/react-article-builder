var path = require('path')
var webpack = require('webpack')
var autoprefixer = require('autoprefixer')
var OpenBrowserPlugin = require('open-browser-webpack-plugin')

module.exports = {

  devtool: 'eval',

  entry: [
    'webpack-dev-server/client?http://localhost:4000',
    'webpack/hot/only-dev-server',
    './src/app'
  ],

  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'app.bundle.js',
    publicPath: '/dist/'
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new OpenBrowserPlugin({
      url: 'http://localhost:4000'
    })
  ],

  resolve: {
    root: path.resolve('./src'),
    extensions: ['', '.js', '.jsx', '.json', '.scss']
  },

  module: {
    loaders: [{
      test: /\.js$/,
      loaders: ['react-hot', 'babel'],
      exclude: /node_modules/
    }, {
      test: /\.scss$/,
      loader: 'style!css!sass!postcss'
    }]
  },

  postcss: function () {
    return [autoprefixer]
  }

}
