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
        browsers: ['Chrome'],
        singleRun: true,
        autoWatchBatchDelay: 300,
        files: [
            'node_modules/traceur/bin/traceur-runtime.js', {
                pattern: 'node_modules/zone.js/dist/zone.js',
                included: true,
                watched: false
            }, {
                pattern: 'node_modules/zone.js/dist/long-stack-trace-zone.js',
                included: true,
                watched: false
            }, {
                pattern: 'node_modules/zone.js/dist/async-test.js',
                included: true,
                watched: false
            }, {
                pattern: 'node_modules/zone.js/dist/jasmine-patch.js',
                included: true,
                watched: false
            }, {
                pattern: 'node_modules/reflect-metadata/Reflect.js',
                included: true,
                watched: false
            }, {
                pattern: 'node_modules/rxjs/**',
                included: false,
                watched: false
            }, {
                pattern: 'node_modules/@angular/**/*.js',
                included: false,
                watched: false
            }, {
                pattern: 'app/**/*.spec.ts',
                included: true
            }, {
                pattern: 'node_modules/babel-polyfill/browser.js',
                instrument: false
            }
        ],
        babelPreprocessor: {
            options: {
                presets: ['es2015']
            }
        },
        preprocessors: {
            'app/**/*.spec.ts': ['webpack', 'sourcemap'],
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