/* eslint-disable @typescript-eslint/no-var-requires */
const webpackRules = require('./bin/webpack.rules')

const config = {
  entry: './src/main/index.ts',
  module: {
    rules: webpackRules
  },
  resolve: {
    extensions: ['.js', '.ts', '.jsx', '.tsx', '.css', '.json'],
  }
}

module.exports = config
