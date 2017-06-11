const nodeExternals = require('webpack-node-externals')
const webpack = require('webpack')

module.exports = {
  entry: './handler.js',
  target: 'node',
  output: {
    filename: 'handler.js',
    libraryTarget: 'commonjs2',
    path: __dirname + '/dist'
  },
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel-loader'
    }]
  },
  externals: [nodeExternals()],
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'APP_PATH': '"' + __dirname + '/app"'
      }
    })
  ]
}
