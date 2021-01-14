const TercerWebpackPlugin = require('terser-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HtmlWebPackPlugin = require('html-webpack-plugin')
const path = require('path')

const htmlPlugin = new HtmlWebPackPlugin({
  template: 'src/public/index.html',
  inject: 'body',
  filename: 'index.html',
})

module.exports = {
  entry: './src/index.jsx',
  output: {
    path: path.join(__dirname, 'build'),
    publicPath: '/',
    filename: '[name].[contenthash].js',
  },
  plugins: [new CleanWebpackPlugin(), new MiniCssExtractPlugin(), htmlPlugin],
  optimization: {
    minimizer: [new TercerWebpackPlugin()],
  },
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
          {
            loader: MiniCssExtractPlugin.loader,
          },
          {
            loader: 'css-loader',
            options: {
              modules: true,
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
