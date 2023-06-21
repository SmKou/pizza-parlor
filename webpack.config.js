const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    devServer: {
        open: true,
        static: ['dist']
    },
    devtool: 'eval-source-map', // enable: generate source maps
    plugins: [
        new ESLintPlugin(),
        new CleanWebpackPlugin({
            verbose: true // optional
        }),
        new HtmlWebpackPlugin({
            title: 'Pizza Parlor',
            template: './src/index.html',
            inject: 'body'
        })
    ],
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }
        ]
    }
};