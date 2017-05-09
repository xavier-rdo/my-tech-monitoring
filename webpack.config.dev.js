var path = require('path');
var webpack = require('webpack');

module.exports = {
    devtools: 'eval-source-map',
    watch: true,
    entry: [
        'babel-polyfill',
        'react-hot-loader/patch',
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
                loaders: [ 'babel' ]
            },
            {
                test: /\.css$/,
                loaders: [ 'style', 'css', 'sass' ]
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                loaders: [
                    'file?hash=sha512&digest=hex&name=[hash].[ext]',
                    'image-webpack-loader'
                ]
            }
        ]
    },
    imageWebpackLoader: {
        gifsicle: {
            interlaced: false
        },
        optipng: {
            optimizationLevel: 7
        },
        mozjpeg: {
            quality: 65
        },
        pngquant:{
            quality: '65-90',
            speed: 4
        }
    },
    resolve: {
        extentions: [ '', '.js' ]
    }
};
