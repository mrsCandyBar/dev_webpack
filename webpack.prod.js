const webpack = require('webpack');
const merge = require('webpack-merge');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const common = require('./webpack.common.js');

module.exports = merge(common, {
    devtool: 'cleap-module-source-map',
    plugins: [
        new UglifyJSPlugin(),
        new webpack.DefinePlugi({
            'process.env': {
                'NODE_ENV': JSON.stringify('production')
            }
        })
    ]
});