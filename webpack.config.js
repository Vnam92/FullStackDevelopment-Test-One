'use strict';
const path = require('path');
const webpack = require ('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    context: __dirname + '/frontend',
    entry: './main',
    output: {
        path: __dirname,
        publicPath: '/',
        filename: 'bundle.js'
    },

    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader"
            },
            {
                test: /\.pug$/,
                loader: "pug-loader"
            },
            {
                test: /\.css$/,
                loaders: [
                    {loader: 'style-loader'},
                    {loader: 'css-loader'}
                ]
            },
            {
                test: /\.styl$/,
                loaders: [
                    {loader: 'style-loader'},
                    {loader: 'css-loader'},
                    {loader: 'stylus-loader'}
                ]
            },
            {
                test:   /\.(ico|png|jpg|svg|ttf|eot|woff|woff2)$/,
                loader: 'file-loader?name=[path][name].[ext]'
            }
        ]
    },

    plugins: [
        new HtmlWebpackPlugin(
            {
                filename: 'index.html',
                template: './layouts/main.pug'
            })
    ]

};