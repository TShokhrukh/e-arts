/* eslint-disable @typescript-eslint/no-var-requires */
const webpackPlugins = require('./bin/webpack.plugins')
const webpackRules = require('./bin/webpack.rules')

const config = {
  module: {
    rules: webpackRules.concat([{
      test: /\.css$/,
      use: [{ loader: 'style-loader' }, {loader: 'css-loader' }],
    }])
  },
  plugins: webpackPlugins,
  resolve: {
    extensions: ['.js', '.ts', '.jsx', '.tsx', '.css', '.json'],
  }
}

module.exports =   config
