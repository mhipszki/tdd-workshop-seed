/* eslint-env node */

'use strict';

// Karma configuration

module.exports = function(config) {
	config.set({

		// base path that will be used to resolve all patterns (eg. files, exclude)
		basePath: '../',


		// frameworks to use
		// available frameworks: https://npmjs.org/browse/keyword/karma-adapter
		frameworks: ['browserify', 'mocha', 'chai'],

		browserify: {
			debug: true,
			transform: [
				[ 'stringify', { extensions: ['.html'] } ]
			]
		},

		client: {
			mocha: {
				bail: true
			}
		},

		plugins: [
			'karma-browserify',
			'karma-mocha',
			'karma-chai',
			'karma-mocha-reporter',
			'karma-phantomjs-launcher',
			'karma-firefox-launcher',
			'karma-safari-launcher',
			'karma-chrome-launcher'
		],


		// list of files / patterns to load in the browser
		files: [
			'node_modules/phantomjs-polyfill/bind-polyfill.js', //necessary for PhantomJS (doesn't have Function.bind)
			'test/**/*.spec.js'
		],


		proxies: {
			'/node_modules/': '/base/node_modules/'
		},


		// list of files to exclude
		exclude: [
		],


		// preprocess matching files before serving them to the browser
		// available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
		preprocessors: {
			'test/**/*.js': ['browserify']
		},


		// test results reporter to use
		// possible values: 'dots', 'progress'
		// available reporters: https://npmjs.org/browse/keyword/karma-reporter
		reporters: ['mocha'],

		mochaReporter: {
			output: 'full'
		},

		// web server port
		port: 9876,


		// enable / disable colors in the output (reporters and logs)
		colors: true,


		// level of logging
		// possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
		logLevel: config.LOG_INFO,


		// enable / disable watching file and executing tests whenever any file changes
		autoWatch: false,


		// start these browsers
		// available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
		browsers: [],


		// Continuous Integration mode
		// if true, Karma captures browsers, runs the tests and exits
		singleRun: false,

		// Concurrency level
		// how many browser should be started simultanous
		concurrency: Infinity
	});
};
