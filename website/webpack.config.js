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
  }
}