const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './docs/src/main.js',
    output: {
        path: path.resolve(__dirname, './'),
        filename: 'index.js'
    },
    module: {
        loaders: [
            {
                test: /\.vue$/,
                use: ['vue-loader', 'eslint-loader'],
                exclude: /node_modules/
            },
            {
                test: /\.md$/,
                use: 'vue-markdown-loader',
                exclude: /node_modules/
            },
            {
                test: /\.js$/,
                use: ['babel-loader', 'eslint-loader'],
                exclude: [/node_modules/, /md/]
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './docs/src/template.html'
        })
    ]
};
