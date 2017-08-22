// Karma configuration
// Generated on Mon Aug 21 2017 16:11:03 GMT+0800 (CST)

module.exports = function (config) {
    config.set({
        // base path that will be used to resolve all patterns (eg. files, exclude)
        basePath: '',
        // frameworks to use
        // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
        frameworks: ['mocha'],
        // list of files / patterns to load in the browser
        files: [
            'test/*.js'
        ],
        plugins: [
            'karma-coverage',
            'karma-webpack',
            'karma-mocha',
            'karma-chrome-launcher',
            'karma-mocha-reporter'
        ],
        // list of files to exclude
        exclude: [],
        // webpack: webpackConfig,
        // preprocess matching files before serving them to the browser 处理测试文件
        // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
        preprocessors: {
            'test/*.js': ['webpack']
        },
        //
        webpack: {
            module: {
                rules: [
                    // instrument only testing sources with Istanbul
                    {
                        test: /\.js$/,
                        use: {loader: 'istanbul-instrumenter-loader'},
                        exclude: /test\/|node_modules/
                    }
                ]
            }
        },
        //不显示webpack的打包信息
        webpackServer: {
            noInfo: true
        },
        // test results reporter to use 测试日志格式
        // possible values: 'dots', 'progress'
        // available reporters: https://npmjs.org/browse/keyword/karma-reporter
        reporters: ['mocha', 'coverage'],
        // web server port
        port: 9876,
        // enable / disable colors in the output (reporters and logs)
        colors: true,
        // level of logging
        // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
        logLevel: config.LOG_INFO,
        // enable / disable watching file and executing tests whenever any file changes自动监测测试文件内容
        autoWatch: true,
        // start these browsers
        // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
        browsers: ['Chrome'],
        // Continuous Integration mode
        // if true, Karma captures browsers, runs the tests and exits
        singleRun: false,
        //代码覆盖率日志
        coverageReporter: {
            reporters: [
                {type: 'lcov', dir: 'coverage', subdir: '.'},
                {type: 'text-summary', dir: 'coverage', subdir: '.'}
            ]
        }
        // Concurrency level
        // how many browser should be started simultaneous
    })
}
