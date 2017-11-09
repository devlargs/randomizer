var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: './src/index.js',
  output: { path: __dirname + '/dist', filename: 'script.min.js'},
  module: {
    loaders: [
      {
        test: /.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react'],
          plugins: ['transform-class-properties', 'react-html-attrs']
        }
      }
    ]
  }
};