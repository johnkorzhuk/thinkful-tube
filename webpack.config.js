const { resolve } = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const srcDir = resolve(__dirname, 'src')

module.exports = {
  context: resolve(__dirname, 'src'),
  entry: './index.js',
  output: {
    filename: 'bundle.js',
    publicPath: '/'
  },
  module: {
    rules: [{
      test: /\.js$/,
      loader: 'babel-loader',
      exclude: /node_modules/
    }, {
      test: /\.css$/,
      loader: [{
        loader: 'style-loader'
      }, {
        loader: 'css-loader'
      }]
    }]
  },
  devtool: 'inline-source-map',
  plugins: [
    new HtmlWebpackPlugin({
      template: `${srcDir}/index.html`
    })
  ]
}
