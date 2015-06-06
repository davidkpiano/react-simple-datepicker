var webpack = require('webpack');

module.exports = {
  entry: './src/index.js',
  output: {
    path: './dist',
    filename: 'datepicker.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel'
      }
    ]
  }
};