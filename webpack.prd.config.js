var path = require('path')
var autoprefixer = require('autoprefixer')
var webpack = require('webpack')

module.exports = {
  entry: [
    './src/app.js'
  ],

  output: {
    path: path.join(__dirname, 'dist/'),
    filename: 'app.bundle.js'
  },

  module: {
    loaders: [
      {
        test: /\.js[x]?$/,
        exclude: /node_modules/,
        loader: 'babel'
      },
      {
        test: /\.scss$/,
        loader: 'style!css!sass!postcss'
      },
      {
        test: /\.css$/,
        loader: 'style!css'
      }
    ]
  },

  postcss: function () {
    return [autoprefixer]
  },

  resolve: {
    root: path.resolve('./src'),
    extensions: ['', '.js', '.jsx', '.json', '.scss']
  },

  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    })
  ]
}
