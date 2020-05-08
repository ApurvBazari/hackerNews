const webpack = require('webpack')
const nodeExternals = require('webpack-node-externals')
const path = require('path')

const js = {
  test: /\.(js|jsx)$/,
  exclude: /node_modules/,
  use: {
    loader: 'babel-loader',
    options: {
      presets: ['@babel/react', '@babel/env'],
      plugins: ['transform-class-properties', 'babel-plugin-styled-components']
    }
  }
}

const svg = {
  test: /\.svg$/,
  loader: 'svg-url-loader'
}

const serverConfig = {
  mode: process.env.NODE_ENV === 'production' ? 'production' : 'development',
  target: 'node',
  devtool: 'source-map',
  node: {
    __dirname: false
  },
  externals: [nodeExternals()],
  entry: {
    'index.js': path.resolve(__dirname, 'src/index.js')
  },
  module: {
    rules: [js, svg]
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name]'
  }
}

const clientConfig = {
  mode: process.env.NODE_ENV === 'production' ? 'production' : 'development',
  target: 'web',
  devtool: 'source-map',
  entry: {
    'index.js': path.resolve(__dirname, 'src/public/index.js')
  },
  module: {
    rules: [js, svg]
  },
  output: {
    path: path.resolve(__dirname, 'dist/public'),
    filename: '[name]'
  }
}

module.exports = [clientConfig, serverConfig]