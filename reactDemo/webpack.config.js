const webpack = require('webpack');

module.exports = [{
    entry: './js/main.js',
    output: {
        path: './dist',
        filename: 'bundle.js'
    },
    module: {
        loaders: [{
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel'
        }]
    }
    // plugins: [
    //     new webpack.optimize.UglifyJsPlugin({
    //         compress: {
    //             warnings: false
    //         },
    //         output: {
    //             comments: false
    //         }
    //     })
    // ]
}];