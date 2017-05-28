const webpack = require('webpack'),
      path = require('path'),
      TransferWebpackPlugin = require('transfer-webpack-plugin');

module.exports = {
  devtool: 'eval',
  // Entry points to the project
  entry: [
    './src/app/app.tsx'
  ],
  output: {
    filename: 'app.js',
    publicPath: 'dist',
    path: path.resolve('dist')
  },
  devServer: {
    contentBase: 'src/www',
    port: 3001,
    historyApiFallback: true,
    inline: true,
    stats: {
      modules: false,
      chunks: false,
      children: false,
      chunkModules: false,
      hash: false
    }
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
    modules: ['src', 'node_modules'],
  },
  module: {
    loaders: [
      { test: /\.tsx?$/, loaders: ['babel-loader', 'ts-loader'], include: path.resolve('src') }
    ]
  },
  plugins: [
    // Moves files
    new TransferWebpackPlugin([
      {from: 'www'},
    ], path.resolve(__dirname, 'src')),
  ]
}
