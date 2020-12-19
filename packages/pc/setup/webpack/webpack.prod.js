const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.common');
const pathTo = require('../util');
const {InjectManifest} = require('workbox-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');

module.exports = merge(common, {
  mode: 'production',
  plugins: [
    new webpack.DefinePlugin({
      'process.env.BASE_API_URL': JSON.stringify('https://api.prod.url'),
    }),
    new CompressionPlugin({
      algorithm: 'brotliCompress',
      test: /\.(js|ts|tsx|scss|css|html|svg|png|ttf|woff2|woff|pdf|json)$/,
    }),
    new InjectManifest({
      swDest: 'service-worker.js',
      importWorkboxFrom: 'local',
      importsDirectory: 'wb-assets',
      swSrc: pathTo.swSrc,
    }),
  ],
});
