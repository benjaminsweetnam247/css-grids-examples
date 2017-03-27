const webpack = require('webpack')
const path = require('path')
const glob = require('glob')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
  context: path.resolve(__dirname, 'src'),
  entry: {
    'ex10': './ex10.js',
    'ex11': './ex11.js',
    'ex12': './ex12.js',
    'ex13': './ex13.js',
    'ex14': './ex14.js',
    'ex15': './ex15.js',
    'ex16': './ex16.js',
  },
  module: {
    loaders: [
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          use: [
            'css-loader?importLoaders=1',
            'postcss-loader',
          ],
        })
      },
    ],
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.css'
  },
  plugins: [
    new ExtractTextPlugin({
      filename: '[name].bundle.css',
      allChunks: true,
    }),
  ],
}
