/*
 * Copyright © 2020 EPAM Systems, Inc. All Rights Reserved. All information contained herein is, and remains the
 * property of EPAM Systems, Inc. and/or its suppliers and is protected by international intellectual
 * property law. Dissemination of this information or reproduction of this material is strictly forbidden,
 * unless prior written permission is obtained from EPAM Systems, Inc
 */
const merge = require('webpack-merge')
const webpack = require('webpack')
const base = require('./webpack.base.js')
const path = require('path')
const HtmlWebPackPlugin = require('html-webpack-plugin')
const htmlPlugin = new HtmlWebPackPlugin({
  template: './src/public/index.html',
  filename: 'index.html',
})

module.exports = merge(base, {
  output: {
    path: path.join(__dirname, '/dist/'),
    filename: '[name].js',
    publicPath: '/',
  },
  mode: 'development',
  entry: [
    'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000',
    path.join(__dirname, '../../src/index.js'),
  ],
  plugins: [new webpack.HotModuleReplacementPlugin(), htmlPlugin],
  module: {
    rules: [
      {
        test: /\.s?css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: {
                localIdentName: '[name]__[local]___[hash:base64:5]',
              },
              sourceMap: true,
            },
          },
          'sass-loader',
        ],
      },
    ],
  },
})
