const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.common');
const pathTo = require('../util');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ],
  devServer: {
    compress: true,
    contentBase: pathTo.distDir,
    port: 3000,
    historyApiFallback: true,
    hot: true,
    open: true,
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.BASE_API_URL': JSON.stringify('https://api.dev.url'),
    }),
  ],
});
