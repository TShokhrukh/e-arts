/* eslint-disable @typescript-eslint/no-var-requires */
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin')

const webpackPlugins = [
  new ForkTsCheckerWebpackPlugin()
]

module.exports = webpackPlugins
