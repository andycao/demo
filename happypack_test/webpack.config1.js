/**
 * Created by andycao on 2018/1/29.
 */

// @file: webpack.config.js
const HappyPack = require('happypack');

exports.module = {
    rules: [
        {
            test: /.js$/,
            // 1) replace your original list of loaders with "happypack/loader":
            // loaders: [ 'babel-loader?presets[]=es2015' ],
            use: 'happypack/loader',
        }
    ]
};

exports.plugins = [
    // 2) create the plugin:
    new HappyPack({
        // 3) re-add the loaders you replaced above in #1:
        loaders: [ 'babel-loader?presets[]=es2015' ]
    })
];