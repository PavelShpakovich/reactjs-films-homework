const webpack = require('webpack')
const path = require('path')
const HtmlWebPackPlugin = require('html-webpack-plugin')

const htmlPlugin = new HtmlWebPackPlugin({
  template: './src/public/index.html',
  filename: 'index.html',
})

module.exports = {
  output: {
    path: path.join(__dirname, '/build/'),
    filename: '[name].js',
    publicPath: '/',
  },
  mode: 'development',
  entry: ['webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000', path.join(__dirname, '/src/index.jsx')],
  plugins: [new webpack.HotModuleReplacementPlugin(), htmlPlugin],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
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
      {
        test: /\.(png|svg|jpg|gif)$/,
        loader: 'file-loader',
        options: {
          name: '[path][name].[ext]',
          outputPath: 'images',
          publicPath: 'assets',
        },
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
}
