var browserSync = require('browser-sync-webpack-plugin');
var path = require('path');
var babel = require('babel-core');
module.exports =
    {
        context: path.resolve(__dirname, 'app'),
        entry: './index.ts',
        output:
        {
            filename: 'bundle.js',
            path: path.resolve(__dirname, 'dist'),
            publicPath: '/asset/'
        },
        resolve:
        {
            root: path.join(__dirname, './app'),
            extensions: ['','.ts','.js']
        },
        preprocessors: {
            '**/*.js': file => babel.transform(file.content, { sourceMap: true })
        },
        devtool: 'source-map',
        module: {
            loaders: [
                  {
                    test: /\.ts(x?)$/,
                    loader: 'ts'
                },
                {

                    test: /\.js$/,
                    loader: 'babel',
                    exclude: /node_modules/,
                    include: [
                        path.join(__dirname, "./app"),
                    ]

                }
            ]
        },
        resolveLoader: {
            modulesDirectories: ["node_modules"]
        },
        plugins:
        [
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