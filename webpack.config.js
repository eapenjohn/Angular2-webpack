var browserSync = require('browser-sync-webpack-plugin');
var path = require('path');
var babel = require('babel-core');
const HtmlWebpackPlugin = require('html-webpack-plugin');
console.log();
module.exports = {
    context: path.resolve(__dirname, 'app'),
    entry: './index.ts',
    output: {
        filename: './dist/bundle.js',
        path: __dirname
    },
    resolve: {
        root: path.join(__dirname),
        extensions: ['', '.ts', '.js'],
        alias: {
            'bootstarp-css': 'bootstrap/dist/css/bootstrap.css',
            'config': 'config/config'
        }
    },
    preprocessors: {
        '**/*.js': file => babel.transform(file.content, {
            sourceMap: true
        })
    },
    devtool: 'inline-source-map',

    module: {
        loaders: [{
            test: /\.css$/,
            loader: 'style!css!'
        }, {
            test: /\.ts(x?)$/,
            loader: 'ts'
        }, {
            test: /\.html$/,
            exclude: /node_modules/,
            loader: 'raw'
        }, {

            test: /\.js$/,
            loader: 'babel',
            exclude: /node_modules/,
            include: [
                path.join(__dirname, "./app"),
            ]
        }, {
            test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
            loader: 'file'
        }, {
            test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
            loader: 'file'
        }, {
            test: /\.jpg$/,
            exclude: /node_modules/,
            loader: 'file'
        }, {
            test: /\.gif$/,
            exclude: /node_modules/,
            loader: 'file'
        }, {
            test: /\.png$/,
            exclude: /node_modules/,
            loader: 'file'
        }, {
            test: /\.json$/,
            loader: 'json'
        }]
    },
    resolveLoader: {
        modulesDirectories: ["node_modules"]
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