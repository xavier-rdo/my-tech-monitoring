var path = require('path');
var webpack = require('webpack');

module.exports = {
  devtools: 'eval-source-map',
  entry: [
    'webpack-hot-middleware/client',
    path.join(__dirname, '/client/index.js')
  ],
  output: {
    path: path.join(__dirname, '/server/public/build/js/'),
    publicPath: '/',
    filename: 'bundle.js'
  },
  plugins: [
    new webpack.NoErrorsPlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ],
  module: {
    loaders: [
      {
        test: /\.js$/,
        include: [
          path.join(__dirname, 'client')
        ],
        loaders: [ 'react-hot', 'babel' ]
      },
      {
        test: /\.css$/,
        loaders: [ 'style', 'css', 'sass' ]
      }
    ]
  },
  resolve: {
    extentions: [ '', '.js' ]
  }
}
