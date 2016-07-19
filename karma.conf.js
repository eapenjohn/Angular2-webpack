'use strict';

var webpackConfig = require('./webpack.config');

webpackConfig.entry = {};

module.exports = function(config) {
    config.set({
        basePath: '',
        frameworks: ['jasmine'],
        port: 9876,
        colors: true,
        logLevel: config.LOG_INFO,
        autoWatch: true,
        browsers: ['PhantomJS'],
        singleRun: true,
        autoWatchBatchDelay: 300,
        files: [
            'karma.test.js'
        ],
        babelPreprocessor: {
            options: {
                presets: ['es2015']
            }
        },
        preprocessors: {
            'karma.test.js': ['webpack', 'sourcemap'],
            //'src/**/!(*.spec)+(.ts)': ['coverage']
        },
        webpackMiddleware: {
            noInfo: true,
            stats: {
                chunkModules: false,
                colors: true
            }
        },
        webpack: webpackConfig,
        reporters: [
            'mocha'
            // 'dots',
            // 'spec',
            // 'coverage'
        ],
        mochaReporter: {
            output: 'autoWatch' // Options full(default) minimal autoWatch noFailures
        },
        coverageReporter: {
            reporters: [{
                dir: 'reports/coverage/',
                subdir: '.',
                type: 'html'
            }, {
                dir: 'reports/coverage/',
                subdir: '.',
                type: 'cobertura'
            }, {
                dir: 'reports/coverage/',
                subdir: '.',
                type: 'json'
            }]
        }
    });
};
