const path = require('path');
const webpack = require('webpack');

module.exports = {
  context: path.resolve(__dirname, './src'),
  devServer: {
    contentBase: path.resolve(__dirname, './www'),
    host: 'csim-group-generator.local',
    port: 6464
  },
  entry: {
    index: './main.jsx'
  },
  output: {
    path: path.resolve(__dirname, './www'),
    filename: 'csim-group-generator.js',
  },
  module: {
    rules: [
      // jsx
      {
        test: /.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react']
        }
      },
      // styles
      {
        test: /\.scss$/,
        loaders: ['style-loader', 'css-loader', 'sass-loader']
      },
      // images
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'file-loader',
      },
    ]
  },
};
