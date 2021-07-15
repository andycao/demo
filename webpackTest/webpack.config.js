const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractCssChunks = require('extract-css-chunks-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    mode: 'development',
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [{
            test: /\.css$/i, use: [{
                loader: ExtractCssChunks.loader,
                options: {
                    hmr: process.env.NODE_ENV === 'development',
                }
            },
                'css-loader'
            ]
        }
        ],
    },
    plugins: [
        new HtmlWebpackPlugin(),
        new ExtractCssChunks({
            filename: '[name].[hash].css',
        })
    ],
    devServer: {
        contentBase: path.resolve(__dirname, 'dist'),
        compress: true,
        port: 3000,
        open: true,
        writeToDisk: true,
        host: '0.0.0.0'
    }
};