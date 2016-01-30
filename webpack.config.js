var path = require('path');
var webpack = require('webpack');

var lib_src = './src';
var jsx_dist = './dist';

module.exports = {
    entry: {
        "index": path.resolve(lib_src, 'index.jsx')
    },
    output: {
        filename: '[name].min.js',
        path: jsx_dist
    },
    module: {
        loaders: [
            {
                test: /\.jsx$/,
                loader: 'babel',
                query: {
                  presets: ['es2015', 'react']
                } 
            },
            { test: /\.css$/, loader: 'style-loader!css-loader' }
        ]
    },
    resolve: {
        extensions: ['', '.js', '.jsx', '.css']
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin('common', 'common.min.js')
    ]
}
