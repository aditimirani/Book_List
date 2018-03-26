const webpack = require('webpack')
const path = require('path')
module.exports = {
    entry: ['react-hot-loader/patch',
      './src/index.js'
    ],
    devtool: "#cheap-eval-source-map",
    module: {
        rules: [
          {
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: ['babel-loader']
          },
          {
            test: /\.js$/,
            exclude: /node_modules/,
            use: ['eslint-loader']
          }
        ]
      },
      resolve: {
        extensions: ['*', '.js', '.jsx']
    },
    output: {
      path: __dirname + '/dist',
      publicPath: '/',
      filename: 'bundle.js'
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
      ],
    devServer: {
      contentBase: './dist',
      hot: true
    }
  };