var browserSync = require('browser-sync-webpack-plugin');
var path = require('path');
var babel = require('babel-core');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    context: path.resolve(__dirname, 'app'),
    entry: './index.ts',
    output: {
        filename: './dist/bundle.js',
        path: __dirname
    },
    resolve: {
        modules: [
            "node_modules"
        ],
      extensions: ['.ts', '.es6', '.js', '.json']
        //  alias: alias

    },
   // devtool: 'source-map',

    module: {
        rules: [{
            test: /\.(sass|scss|css)$/,
            use: [
                'style-loader',
                'css-loader',
                'sass-loader',
            ]
        },
        {
            test: /\.ts(x?)$/,
            loader: 'ts-loader',
             exclude: /node_modules/,
            options: {
                transpileOnly: true
            }
        },
        {
            test: /\.(js|jsx)$/,
            use: 'babel-loader'
        }, {
            test: /\.html$/,
            exclude: /node_modules/,
            use: 'raw-loader'
        },
        {
            test: /\.json$/,
            use: 'json-loader'
        },
        {
            test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
            use: 'file-loader'
        }, {
            test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
            use: 'file-loader'
        }, {
            test: /\.jpg$/,
            exclude: /node_modules/,
            use: 'file-loader'
        }, {
            test: /\.gif$/,
            exclude: /node_modules/,
            use: 'file-loader'
        }, {
            test: /\.png$/,
            exclude: /node_modules/,
            use: 'file-loader'
        }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: '../index.html',
            chunksSortMode: 'dependency',
            scripts: ['./dist/bundle.js']
        }),
        new browserSync({
            host: 'localhost',
            port: 3200,
            proxy: 'http://localhost:' + 3100,
            // ui: false,
            // online: false,
            // notify: true
        })
    ]
}